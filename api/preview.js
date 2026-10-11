import { route, fail } from '../lib/http.js';
import { db, enc } from '../lib/db.js';
import { extractHtml } from '../lib/parse.js';
import { hash } from '../lib/text.js';

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

  /** Save a page the user pasted back from Claude, ChatGPT or any other chat. Only the newest is kept. */
  async POST(req) {
    const { id, html: raw, prompt, model } = req.body || {};
    const [p] = await db(`/ss_prompts?id=eq.${enc(id)}&select=id,prompt`);
    if (!p) throw fail(404, 'Prompt not found.');
    const html = extractHtml(String(raw || ''));
    if (!/<html|<!doctype/i.test(html)) throw fail(400, 'That does not look like a full HTML page. Paste the whole reply, starting at <!doctype html>.');
    if (html.length > 1_500_000) throw fail(400, 'That page is too large to save.');
    const text = typeof prompt === 'string' && prompt.trim() ? prompt : p.prompt;
    await db(`/ss_previews?prompt_id=eq.${enc(id)}`, { method: 'DELETE' });
    const label = String(model || 'pasted from a chat').slice(0, 60);
    await db('/ss_previews', { method: 'POST', prefer: 'return=minimal', body: { prompt_id: id, prompt_hash: hash(text), html, model: label } });
    return { preview: { html, createdAt: new Date().toISOString(), model: label, stale: text !== p.prompt } };
  },

  async DELETE(req) {
    const id = req.query.id;
    if (!id) throw fail(400, 'A prompt id is required.');
    await db(`/ss_previews?prompt_id=eq.${enc(id)}`, { method: 'DELETE' });
    return { ok: true };
  },
});
