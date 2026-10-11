import { route, fail } from '../lib/http.js';
import { db, enc } from '../lib/db.js';

const LIST_COLS = 'id,title,category,description,type,thumbnail,animated_thumbnail,is_new,updated_at,created_at,prompt,original_prompt';

export default route({
  async GET(req) {
    const { id } = req.query;
    if (id) {
      const rows = await db(`/ss_prompts?id=eq.${enc(id)}&select=*`);
      if (!rows.length) throw fail(404, 'Prompt not found.');
      const p = rows[0];
      return { ...p, edited: p.prompt !== p.original_prompt };
    }
    const rows = await db(`/ss_prompts?select=${LIST_COLS}&order=is_new.desc,created_at.desc`);
    return rows.map(({ prompt, original_prompt, ...r }) => ({ ...r, edited: prompt !== original_prompt, length: prompt.length }));
  },

  /** Save an edit. The previous text is kept as a version so nothing is lost. */
  async PATCH(req) {
    const { id, prompt, note } = req.body || {};
    if (!id || typeof prompt !== 'string' || !prompt.trim()) throw fail(400, 'A prompt id and non-empty text are required.');
    const [cur] = await db(`/ss_prompts?id=eq.${enc(id)}&select=prompt`);
    if (!cur) throw fail(404, 'Prompt not found.');
    if (cur.prompt !== prompt) {
      await db('/ss_prompt_versions', { method: 'POST', body: { prompt_id: id, prompt: cur.prompt, note: note || 'Before edit' } });
    }
    const [row] = await db(`/ss_prompts?id=eq.${enc(id)}`, { method: 'PATCH', prefer: 'return=representation', body: { prompt, is_new: false, updated_at: new Date().toISOString() } });
    return { ...row, edited: row.prompt !== row.original_prompt };
  },

  async POST(req) {
    const { id, action } = req.body || {};
    if (!id) throw fail(400, 'A prompt id is required.');
    if (action === 'seen') {
      await db(`/ss_prompts?id=eq.${enc(id)}`, { method: 'PATCH', body: { is_new: false } });
      return { ok: true };
    }
    if (action === 'reset') {
      const [cur] = await db(`/ss_prompts?id=eq.${enc(id)}&select=prompt,original_prompt`);
      if (!cur) throw fail(404, 'Prompt not found.');
      if (cur.prompt !== cur.original_prompt) await db('/ss_prompt_versions', { method: 'POST', body: { prompt_id: id, prompt: cur.prompt, note: 'Before reset to original' } });
      const [row] = await db(`/ss_prompts?id=eq.${enc(id)}`, { method: 'PATCH', prefer: 'return=representation', body: { prompt: cur.original_prompt, updated_at: new Date().toISOString() } });
      return { ...row, edited: false };
    }
    throw fail(400, 'Unknown action.');
  },
});
