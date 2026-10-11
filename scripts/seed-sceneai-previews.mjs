// Loads sceneai-previews/<source_id>.html as the Generated page of the matching SceneAI prompt.
// Safe to run again: unchanged pages are skipped, and a page the user pasted over it is left alone.
//   SUPABASE_URL=... SUPABASE_SERVICE_ROLE_KEY=... node scripts/seed-sceneai-previews.mjs [source_id ...]
import { readdir, readFile } from 'node:fs/promises';
import { db, enc } from '../lib/db.js';
import { hash } from '../lib/text.js';

const root = new URL('../sceneai-previews/', import.meta.url);
const only = process.argv.slice(2);
const MODEL = 'hand-built (SiteShelf)';
const files = (await readdir(root)).filter((f) => f.endsWith('.html')).map((f) => f.slice(0, -5)).filter((s) => !only.length || only.includes(s)).sort();

let added = 0, updated = 0, unchanged = 0, kept = 0, missing = 0;
for (const sid of files) {
  const html = await readFile(new URL(`${sid}.html`, root), 'utf8');
  const [p] = await db(`/ss_prompts?source=eq.sceneai&source_id=eq.${enc(sid)}&select=id,prompt`);
  if (!p) { console.log('no prompt for', sid); missing++; continue; }
  const [pv] = await db(`/ss_previews?prompt_id=eq.${p.id}&select=id,html,model&order=created_at.desc&limit=1`);
  if (pv && pv.model !== MODEL) { kept++; continue; }       // the user pasted their own page: never overwrite it
  if (pv && pv.html === html) { unchanged++; continue; }
  if (pv) { await db(`/ss_previews?prompt_id=eq.${p.id}`, { method: 'DELETE' }); updated++; } else added++;
  await db('/ss_previews', { method: 'POST', prefer: 'return=minimal', body: { prompt_id: p.id, prompt_hash: hash(p.prompt), html, model: MODEL } });
}
console.log(`sceneai previews: ${added} added, ${updated} updated, ${unchanged} unchanged, ${kept} kept (user's own), ${missing} without a prompt (${files.length} files)`);
