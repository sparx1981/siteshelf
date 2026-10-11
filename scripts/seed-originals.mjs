// Loads originals/<slug>/{meta.json,prompt.txt,preview.html,thumb.jpg} into the database.
// Safe to run again: existing prompts are updated, and your own edits to a prompt are kept.
//   SUPABASE_URL=... SUPABASE_SERVICE_ROLE_KEY=... node scripts/seed-originals.mjs [slug ...]
import { readdir, readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { db, enc } from '../lib/db.js';
import { hash } from '../lib/text.js';

const root = new URL('../originals/', import.meta.url);
const only = process.argv.slice(2);
const slugs = (await readdir(root, { withFileTypes: true })).filter((d) => d.isDirectory()).map((d) => d.name).filter((s) => !only.length || only.includes(s)).sort();

let created = 0, updated = 0, unchanged = 0;
for (const slug of slugs) {
  const dir = new URL(`${slug}/`, root);
  const meta = JSON.parse(await readFile(new URL('meta.json', dir), 'utf8'));
  const prompt = (await readFile(new URL('prompt.txt', dir), 'utf8')).trim();
  const html = await readFile(new URL('preview.html', dir), 'utf8');
  const thumb = existsSync(new URL('thumb.jpg', dir)) ? (await readFile(new URL('thumb.jpg', dir))).toString('base64') : null;

  const [have] = await db(`/ss_prompts?source=eq.siteshelf&source_id=eq.${enc(slug)}&select=id,prompt,original_prompt`);
  let id;
  if (!have) {
    const [row] = await db('/ss_prompts', { method: 'POST', prefer: 'return=representation', body: {
      source: 'siteshelf', source_id: slug, title: meta.title, category: meta.category, description: meta.description,
      type: 'free', original_prompt: prompt, prompt, is_new: false } });
    id = row.id; created++;
  } else {
    id = have.id;
    const untouched = have.prompt === have.original_prompt;
    const patch = { title: meta.title, category: meta.category, description: meta.description, original_prompt: prompt, ...(untouched ? { prompt } : {}) };
    if (have.original_prompt !== prompt || untouched) { await db(`/ss_prompts?id=eq.${id}`, { method: 'PATCH', body: { ...patch, updated_at: new Date().toISOString() } }); updated++; } else unchanged++;
  }
  // The preview belongs to the prompt text it was built from.
  const [pv] = await db(`/ss_previews?prompt_id=eq.${id}&select=id,html,prompt_hash&order=created_at.desc&limit=1`);
  if (!pv || pv.html !== html || pv.prompt_hash !== hash(prompt)) {
    await db('/ss_previews', { method: 'POST', prefer: 'return=minimal', body: { prompt_id: id, prompt_hash: hash(prompt), html, model: 'hand-built (SiteShelf originals)' } });
    const stale = await db(`/ss_previews?prompt_id=eq.${id}&select=id&order=created_at.desc&offset=3`);
    for (const s of stale) await db(`/ss_previews?id=eq.${s.id}`, { method: 'DELETE' });
  }
  if (thumb) {
    await db('/ss_thumbs?on_conflict=prompt_id', { method: 'POST', prefer: 'resolution=merge-duplicates,return=minimal', body: { prompt_id: id, mime: 'image/jpeg', data_b64: thumb, updated_at: new Date().toISOString() } });
    await db(`/ss_prompts?id=eq.${id}`, { method: 'PATCH', body: { thumbnail: `/api/thumb?id=${id}&v=${hash(thumb).slice(0, 8)}` } });
  }
}
console.log(`originals: ${created} created, ${updated} updated, ${unchanged} unchanged (${slugs.length} folders)`);
