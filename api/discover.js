import { route, fail } from '../lib/http.js';
import { db, enc } from '../lib/db.js';
import { complete } from '../lib/llm.js';
import { extractJson } from '../lib/parse.js';
import { isSafeUrl } from '../lib/text.js';

const SYSTEM = `You find website-design prompts and prompt libraries similar to a given one.
Search the web. For each good result return a page that contains a reusable design prompt or brief for an AI website builder, and a URL of a live, working example page that shows what the prompt produces (a hosted demo, a CodePen, a deployed site). Skip results with no real example.
Reply with JSON only: [{"title":"...","url":"page with the prompt","summary":"one plain sentence","example_url":"live example or empty string"}]. At most 8 results.`;

async function check(url) {
  if (!isSafeUrl(url)) return { ok: false, status: 0 };
  try {
    const r = await fetch(url, { redirect: 'follow', signal: AbortSignal.timeout(8000), headers: { 'User-Agent': 'Mozilla/5.0 SiteShelf link check' } });
    const type = r.headers.get('content-type') || '';
    return { ok: r.ok && /html/i.test(type), status: r.status };
  } catch { return { ok: false, status: 0 }; }
}

export default route({
  async GET() {
    return db('/ss_discoveries?select=*&order=created_at.desc&limit=100');
  },

  async POST(req) {
    const query = String(req.body?.query || '').trim();
    if (!query) throw fail(400, 'Describe what to look for.');
    const { text } = await complete({
      system: SYSTEM,
      user: `Find prompts similar to this:
${query.slice(0, 1500)}`,
      maxTokens: 4000,
      search: true,
    });
    const found = extractJson(text);
    if (!Array.isArray(found)) throw fail(502, 'The search did not return usable results. Try again.');
    const out = [];
    for (const f of found.slice(0, 8)) {
      if (!f?.url || !isSafeUrl(f.url)) continue;
      const ex = f.example_url && isSafeUrl(f.example_url) ? await check(f.example_url) : { ok: false, status: 0 };
      const row = {
        query: query.slice(0, 300), title: String(f.title || f.url).slice(0, 200), url: f.url,
        summary: String(f.summary || '').slice(0, 400), example_url: f.example_url || null,
        example_ok: ex.ok, example_status: ex.status, checked_at: new Date().toISOString(),
      };
      await db('/ss_discoveries?on_conflict=url', { method: 'POST', prefer: 'resolution=merge-duplicates,return=minimal', body: row });
      out.push(row);
    }
    return out;
  },

  async DELETE(req) {
    if (!req.query.id) throw fail(400, 'An id is required.');
    await db(`/ss_discoveries?id=eq.${enc(req.query.id)}`, { method: 'DELETE' });
    return { ok: true };
  },
});
