import { route, fail } from '../lib/http.js';
import { db, enc } from '../lib/db.js';
import { complete } from '../lib/llm.js';
import { extractHtml } from '../lib/parse.js';
import { hash } from '../lib/text.js';

const SYSTEM = `You turn a website design brief into a working page.
Output exactly one complete, self-contained HTML document: inline CSS and JavaScript, Google Fonts links and the image URLs named in the brief are allowed.
Follow the brief literally: exact copy, colours, sizes and behaviour. Do not add commentary or markdown fences. The first characters of your reply must be <!doctype html>.`;

export default route({
  async GET(req) {
    const id = req.query.id;
    if (!id) throw fail(400, 'A prompt id is required.');
    const [p] = await db(`/ss_prompts?id=eq.${enc(id)}&select=prompt`);
    if (!p) throw fail(404, 'Prompt not found.');
    const [v] = await db(`/ss_previews?prompt_id=eq.${enc(id)}&select=html,prompt_hash,created_at,model&order=created_at.desc&limit=1`);
    if (!v) return { preview: null };
    return { preview: { html: v.html, createdAt: v.created_at, model: v.model, stale: v.prompt_hash !== hash(p.prompt) } };
  },

  /** Generate a live preview. Pass `prompt` to preview unsaved edits. */
  async POST(req) {
    const { id, prompt } = req.body || {};
    const [p] = await db(`/ss_prompts?id=eq.${enc(id)}&select=id,prompt`);
    if (!p) throw fail(404, 'Prompt not found.');
    const text = typeof prompt === 'string' && prompt.trim() ? prompt : p.prompt;
    const r = await complete({ system: SYSTEM, user: text, maxTokens: 16000 });
    const html = extractHtml(r.text);
    const model = `${r.provider}:${r.model}`;
    if (!/<html|<!doctype/i.test(html)) throw fail(502, 'The model did not return a page. Try again.');
    await db('/ss_previews', { method: 'POST', prefer: 'return=minimal', body: { prompt_id: id, prompt_hash: hash(text), html, model } });
    // keep only the five newest previews per prompt
    const old = await db(`/ss_previews?prompt_id=eq.${enc(id)}&select=id&order=created_at.desc&offset=5`);
    for (const o of old) await db(`/ss_previews?id=eq.${o.id}`, { method: 'DELETE' });
    return { preview: { html, createdAt: new Date().toISOString(), model, stale: text !== p.prompt } };
  },
});
