import { db, enc } from './db.js';

const API = 'https://sceneai.art/api/landing-pages';
const UA = { 'User-Agent': 'SiteShelf personal sync (+private use)', Accept: 'application/json' };

/**
 * Decide what to download. Only free prompts are ever requested; premium items are counted and left alone.
 * A prompt is fetched when it is new here, or when SceneAI says it changed after the copy we hold.
 */
export function planSync(listItems, existing) {
  const free = listItems.filter((i) => i && i.type === 'free' && i._id);
  const fetchIds = [];
  for (const i of free) {
    const have = existing.get(i._id);
    if (!have) fetchIds.push(i._id);
    else if (i.updatedAt && have.source_updated_at && new Date(i.updatedAt) > new Date(have.source_updated_at)) fetchIds.push(i._id);
  }
  return { fetchIds, premium: listItems.length - free.length, free: free.length };
}

/** New copy replaces the working prompt only if you have not edited it; your edits are never overwritten. */
export function mergeUpdate(row, incoming) {
  const untouched = row.prompt === row.original_prompt;
  return { original_prompt: incoming, ...(untouched ? { prompt: incoming } : {}), keptEdits: !untouched && incoming !== row.original_prompt };
}

async function getJson(url) {
  const r = await fetch(url, { headers: UA });
  if (!r.ok) throw new Error(`SceneAI answered ${r.status} for ${url}`);
  return r.json();
}

async function pool(items, n, fn) {
  const out = [];
  let i = 0;
  await Promise.all(Array.from({ length: Math.min(n, items.length) }, async () => {
    while (i < items.length) { const k = i++; out[k] = await fn(items[k]); }
  }));
  return out;
}

export async function fetchAllListItems() {
  const items = [];
  for (let page = 1; page < 20; page++) {
    const j = await getJson(`${API}?limit=100&page=${page}`);
    if (!j.success) throw new Error('SceneAI list request was refused.');
    items.push(...j.data);
    if (page >= (j.pagination?.totalPages || 1)) break;
  }
  return items;
}

export async function runSync(trigger) {
  const [run] = await db('/ss_sync_runs', { method: 'POST', prefer: 'return=representation', body: { trigger } });
  const finish = (patch) => db(`/ss_sync_runs?id=eq.${run.id}`, { method: 'PATCH', body: { finished_at: new Date().toISOString(), ...patch } });
  try {
    const list = await fetchAllListItems();
    const rows = await db(`/ss_prompts?source=eq.sceneai&select=id,source_id,source_updated_at,prompt,original_prompt`);
    const existing = new Map(rows.map((r) => [r.source_id, r]));
    const firstRun = rows.length === 0;
    const plan = planSync(list, existing);
    const byId = new Map(list.map((i) => [i._id, i]));

    let added = 0, updated = 0, locked = 0;
    await pool(plan.fetchIds, 4, async (id) => {
      const d = (await getJson(`${API}/${id}`)).data;
      const meta = byId.get(id);
      if (!d || d.locked || !d.prompt) { locked++; return; }
      const have = existing.get(id);
      if (!have) {
        await db('/ss_prompts', { method: 'POST', body: {
          source: 'sceneai', source_id: id, title: meta.title, category: meta.category, description: meta.description,
          type: 'free', thumbnail: meta.thumbnail, animated_thumbnail: meta.animatedThumbnailGif,
          original_prompt: d.prompt, prompt: d.prompt, is_new: !firstRun, source_updated_at: meta.updatedAt,
        } });
        added++;
      } else {
        const { keptEdits, ...patch } = mergeUpdate(have, d.prompt);
        await db(`/ss_prompts?id=eq.${have.id}`, { method: 'PATCH', body: {
          ...patch, title: meta.title, category: meta.category, description: meta.description,
          thumbnail: meta.thumbnail, animated_thumbnail: meta.animatedThumbnailGif,
          source_updated_at: meta.updatedAt, updated_at: new Date().toISOString(),
        } });
        updated++;
      }
    });
    await finish({ found: plan.free, added, updated, skipped_locked: locked + plan.premium });
    return { found: plan.free, added, updated, premiumSkipped: plan.premium + locked };
  } catch (e) {
    await finish({ error: String(e.message).slice(0, 500) });
    throw e;
  }
}
