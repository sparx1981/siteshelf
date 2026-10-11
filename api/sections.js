import { route, fail } from '../lib/http.js';
import { db, enc } from '../lib/db.js';
import { claude, extractJson } from '../lib/claude.js';
import { hash, paragraphs, buildSections, compose } from '../lib/text.js';

const SYSTEM = `You organise long website-design prompts so a person can edit them one part at a time.
You receive numbered paragraphs. Group neighbouring paragraphs into a few labelled sections (typically 4 to 9), in order, covering every paragraph exactly once.
Use short plain labels such as "Canvas and base", "Background layers", "Interaction", "Top bar", "Headline", "Bottom row", "Rules".
Reply with JSON only: [{"label":"...","summary":"one plain sentence","from":0,"to":2}, ...] where from and to are inclusive paragraph numbers.
Do not rewrite or repeat the paragraph text.`;

async function load(id) {
  const [p] = await db(`/ss_prompts?id=eq.${enc(id)}&select=id,prompt`);
  if (!p) throw fail(404, 'Prompt not found.');
  return p;
}

export default route({
  async GET(req) {
    const p = await load(req.query.id);
    const [s] = await db(`/ss_sections?prompt_id=eq.${enc(p.id)}&select=*`);
    return s && s.prompt_hash === hash(p.prompt) ? { sections: s.sections } : { sections: null };
  },

  /** Split a prompt into labelled sections. */
  async POST(req) {
    const p = await load(req.body?.id);
    const paras = paragraphs(p.prompt);
    const numbered = paras.map((t, i) => `[${i}] ${t}`).join('\n\n');
    let groups = null;
    try { groups = extractJson(await claude({ system: SYSTEM, user: numbered, maxTokens: 2000 })); } catch (e) { if (e.status === 500) throw e; }
    const sections = buildSections(paras, groups);
    await db('/ss_sections', { method: 'POST', prefer: 'resolution=merge-duplicates,return=minimal', body: { prompt_id: p.id, prompt_hash: hash(p.prompt), sections } });
    return { sections, usedFallback: !Array.isArray(groups) };
  },

  /** Save edited sections: they are joined back into the prompt, and the old prompt is kept as a version. */
  async PUT(req) {
    const { id, sections } = req.body || {};
    if (!Array.isArray(sections) || !sections.length) throw fail(400, 'Sections are required.');
    const clean = sections.map((s) => ({ label: String(s.label || 'Section').slice(0, 60), summary: String(s.summary || '').slice(0, 200), text: String(s.text || '') }));
    const prompt = compose(clean);
    if (!prompt) throw fail(400, 'The prompt cannot be empty.');
    const p = await load(id);
    if (p.prompt !== prompt) await db('/ss_prompt_versions', { method: 'POST', body: { prompt_id: id, prompt: p.prompt, note: 'Before section edit' } });
    const [row] = await db(`/ss_prompts?id=eq.${enc(id)}`, { method: 'PATCH', prefer: 'return=representation', body: { prompt, is_new: false, updated_at: new Date().toISOString() } });
    await db('/ss_sections', { method: 'POST', prefer: 'resolution=merge-duplicates,return=minimal', body: { prompt_id: id, prompt_hash: hash(prompt), sections: clean } });
    return { prompt: row.prompt, sections: clean };
  },
});
