// Loads motionsites-previews/<source_id>.html (+ .jpg thumbnail) as the Generated page of the matching imported prompt.
// Safe to run again: unchanged pages are skipped, and a page the user pasted over it is left alone.
//   SUPABASE_URL=... SUPABASE_SERVICE_ROLE_KEY=... node scripts/seed-motionsites-previews.mjs [source_id ...]
import { readdir, readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { db, enc } from '../lib/db.js';
import { hash } from '../lib/text.js';

const root = new URL('../motionsites-previews/', import.meta.url);
const only = process.argv.slice(2);
const MODEL = 'hand-built (SiteShelf)';
const files = (await readdir(root)).filter((f) => f.endsWith('.html')).map((f) => f.slice(0, -5)).filter((s) => !only.length || only.includes(s)).sort();

let added = 0, updated = 0, unchanged = 0, kept = 0, missing = 0, thumbs = 0;
for (const sid of files) {
  const html = await readFile(new URL(`${sid}.html`, root), 'utf8');
  const [p] = await db(`/ss_prompts?source=eq.siteshelf&source_id=eq.${enc(sid)}&select=id,prompt`);
  if (!p) { console.log('no prompt for', sid); missing++; continue; }
  const [pv] = await db(`/ss_previews?prompt_id=eq.${p.id}&select=id,html,model&order=created_at.desc&limit=1`);
  if (pv && pv.model !== MODEL) kept++;                         // the user pasted their own page: never overwrite it
  else if (pv && pv.html === html) unchanged++;
  else {
    if (pv) { await db(`/ss_previews?prompt_id=eq.${p.id}`, { method: 'DELETE' }); updated++; } else added++;
    await db('/ss_previews', { method: 'POST', prefer: 'return=minimal', body: { prompt_id: p.id, prompt_hash: hash(p.prompt), html, model: MODEL } });
  }
  if (existsSync(new URL(`${sid}.jpg`, root))) {
    const thumb = (await readFile(new URL(`${sid}.jpg`, root))).toString('base64');
    await db('/ss_thumbs?on_conflict=prompt_id', { method: 'POST', prefer: 'resolution=merge-duplicates,return=minimal', body: { prompt_id: p.id, mime: 'image/jpeg', data_b64: thumb, updated_at: new Date().toISOString() } });
    await db(`/ss_prompts?id=eq.${p.id}`, { method: 'PATCH', body: { thumbnail: `/api/thumb?id=${p.id}&v=${hash(thumb).slice(0, 8)}` } });
    thumbs++;
  }
}
console.log(`motionsites previews: ${added} added, ${updated} updated, ${unchanged} unchanged, ${kept} kept (user's own), ${missing} without a prompt, ${thumbs} thumbnails (${files.length} files)`);
