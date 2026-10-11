const $ = (s, r = document) => r.querySelector(s);
const app = $('#app');
const store = { get: (k) => { try { return localStorage.getItem(k); } catch { return null; } }, set: (k, v) => { try { localStorage.setItem(k, v); } catch { /* storage unavailable */ } } };

function h(tag, attrs = {}, ...kids) {
  const el = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs || {})) {
    if (v === false || v == null) continue;
    if (k === 'class') el.className = v;
    else if (k.startsWith('on')) el.addEventListener(k.slice(2), v);
    else if (k === 'text') el.textContent = v;
    else el.setAttribute(k, v === true ? '' : v);
  }
  for (const kid of kids.flat()) if (kid != null && kid !== false) el.append(kid.nodeType ? kid : document.createTextNode(kid));
  return el;
}

let toastTimer;
function toast(msg) {
  const t = $('#toast');
  t.textContent = msg; t.hidden = false;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => (t.hidden = true), 4200);
}

/* ---------- API + site key ---------- */
let gateResolve;
function askKey(message) {
  const dlg = $('#gate');
  $('#gate-error').hidden = !message; $('#gate-error').textContent = message || '';
  if (!dlg.open) dlg.showModal();
  return new Promise((r) => (gateResolve = r));
}
$('#gate-form').addEventListener('submit', (e) => {
  e.preventDefault();
  store.set('ss_key', $('#gate-key').value.trim());
  $('#gate').close();
  gateResolve?.();
});

async function api(path, { method = 'GET', body } = {}) {
  for (let attempt = 0; attempt < 2; attempt++) {
    if (!store.get('ss_key')) await askKey();
    const res = await fetch(path, {
      method,
      headers: { 'x-site-key': store.get('ss_key') || '', ...(body ? { 'Content-Type': 'application/json' } : {}) },
      body: body ? JSON.stringify(body) : undefined,
    });
    if (res.status === 401) { store.set('ss_key', ''); await askKey('That key was not accepted.'); continue; }
    const data = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(data.error || `Request failed (${res.status}).`);
    return data;
  }
  throw new Error('Not unlocked.');
}

async function busy(btn, label, fn) {
  const old = btn.textContent;
  btn.disabled = true; btn.textContent = label;
  try { return await fn(); } catch (e) { toast(e.message); if (/Settings\./.test(e.message)) setTimeout(() => (location.hash = '#/settings'), 1500); } finally { btn.disabled = false; btn.textContent = old; }
}

/* ---------- Routing ---------- */
let library = null;
const when = (iso) => (iso ? new Date(iso).toLocaleString('en-GB', { dateStyle: 'medium', timeStyle: 'short' }) : '');

async function route() {
  const hash = location.hash.replace(/^#/, '') || '/';
  $('#nav-library').classList.toggle('active', !hash.startsWith('/discover') && !hash.startsWith('/settings'));
  $('#nav-discover').classList.toggle('active', hash.startsWith('/discover'));
  $('#nav-settings').classList.toggle('active', hash.startsWith('/settings'));
  app.replaceChildren(h('p', { class: 'muted', text: 'Loading…' }));
  window.scrollTo(0, 0);
  try {
    if (hash.startsWith('/p/')) await viewDetail(hash.slice(3));
    else if (hash.startsWith('/settings')) await viewSettings();
    else if (hash.startsWith('/discover')) await viewDiscover(new URLSearchParams(hash.split('?')[1] || '').get('q') || '');
    else await viewLibrary();
  } catch (e) {
    app.replaceChildren(h('p', { class: 'error', text: e.message }));
  }
}
addEventListener('hashchange', route);

/* ---------- Library ---------- */
async function viewLibrary() {
  library = await api('/api/prompts');
  const sync = await api('/api/sync').catch(() => ({ runs: [], newCount: 0 }));
  const last = sync.runs.find((r) => r.finished_at && !r.error);

  const search = h('input', { type: 'search', id: 'q', placeholder: 'Search titles and descriptions', 'aria-label': 'Search prompts' });
  const cats = [...new Set(library.map((p) => p.category).filter(Boolean))].sort();
  const cat = h('select', { id: 'cat', 'aria-label': 'Category' }, h('option', { value: '', text: 'All categories' }), cats.map((c) => h('option', { value: c, text: c })));
  const only = h('select', { id: 'only', 'aria-label': 'Filter' },
    h('option', { value: '', text: 'Everything' }), h('option', { value: 'original', text: 'SiteShelf originals' }), h('option', { value: 'sceneai', text: 'From SceneAI' }),
    h('option', { value: 'new', text: 'New' }), h('option', { value: 'edited', text: 'Edited by me' }));
  const ribbons = h('div', { class: 'ribbons' });
  const count = h('span', { class: 'muted' });

  const ribbon = (title, rows, wrap) => {
    const track = h('div', { class: wrap ? 'grid' : 'track' }, rows.map(card));
    const back = h('button', { class: 'rb-btn', type: 'button', 'aria-label': `Scroll ${title} left`, text: '‹', onclick: () => track.scrollBy({ left: -track.clientWidth * 0.8, behavior: 'smooth' }) });
    const fwd = h('button', { class: 'rb-btn', type: 'button', 'aria-label': `Scroll ${title} right`, text: '›', onclick: () => track.scrollBy({ left: track.clientWidth * 0.8, behavior: 'smooth' }) });
    return h('section', { class: 'ribbon' },
      h('div', { class: 'rb-head' }, h('h2', { text: title }), h('span', { class: 'muted', text: `${rows.length}` }), wrap ? null : h('div', { class: 'rb-nav' }, back, fwd)),
      track);
  };

  const draw = () => {
    const q = search.value.trim().toLowerCase();
    const rows = library.filter((p) =>
      (!q || `${p.title} ${p.description || ''}`.toLowerCase().includes(q)) &&
      (!cat.value || p.category === cat.value) &&
      (only.value !== 'new' || p.is_new) && (only.value !== 'edited' || p.edited) &&
      (only.value !== 'original' || p.source === 'siteshelf') && (only.value !== 'sceneai' || p.source === 'sceneai'));
    count.textContent = `${rows.length} of ${library.length}`;
    if (!rows.length) { ribbons.replaceChildren(h('div', { class: 'empty-state', text: library.length ? 'Nothing matches those filters.' : 'The library is empty. Press Sync now to fetch the free prompts.' })); return; }
    const by = new Map();
    for (const p of rows) { const k = p.category || 'Other'; (by.get(k) || by.set(k, []).get(k)).push(p); }
    const sections = [];
    const fresh = rows.filter((p) => p.is_new);
    if (fresh.length && !cat.value && only.value !== 'new') sections.push(ribbon('New', fresh));
    [...by.entries()].sort((x, y) => y[1].length - x[1].length || x[0].localeCompare(y[0])).forEach(([k, v]) => sections.push(ribbon(k, v, !!cat.value)));
    ribbons.replaceChildren(...sections);
  };
  [search, cat, only].forEach((el) => el.addEventListener('input', draw));

  app.replaceChildren(
    h('div', { class: 'page-title' },
      h('h1', { text: 'Prompt library' }),
      h('span', { class: 'muted', text: last ? `Last synced ${when(last.finished_at)}${sync.newCount ? ` · ${sync.newCount} new` : ''}` : 'Not synced yet' })),
    h('div', { class: 'toolbar' }, search, cat, only, count),
    ribbons);
  draw();
}

function card(p) {
  return h('a', { class: 'card', href: `#/p/${p.id}` },
    h('div', { class: 'thumb' }, p.thumbnail ? h('img', { src: p.thumbnail, alt: '', loading: 'lazy' }) : null),
    h('div', { class: 'card-body' },
      h('h3', { text: p.title }),
      h('p', { text: p.description || '' }),
      h('div', { class: 'card-foot' },
        p.is_new ? h('span', { class: 'pill new', text: 'New' }) : null,
        p.source === 'siteshelf' ? h('span', { class: 'pill ok', text: 'Original' }) : null,
        p.edited ? h('span', { class: 'pill edited', text: 'Edited' }) : null,
        p.category ? h('span', { class: 'pill', text: p.category }) : null,
        h('span', { class: 'pill', text: `${Math.round(p.length / 100) / 10}k chars` }))));
}

/* ---------- Detail ---------- */
async function viewDetail(id) {
  const p = await api(`/api/prompts?id=${id}`);
  if (p.is_new) api('/api/prompts', { method: 'POST', body: { id, action: 'seen' } }).catch(() => {});

  const stage = h('div', { class: 'stage' });
  const stageNote = h('div');
  const toolsRow = h('div', { class: 'row' });
  let leftTab = 'source';
  let preview = null;

  const editor = h('textarea', { id: 'prompt-text', rows: 22, spellcheck: 'false', 'aria-label': 'Prompt text' });
  editor.value = p.prompt;
  const counter = h('span', { class: 'counter' });
  const rightBody = h('div', { class: 'panel-body' });
  let rightTab = 'prompt';

  const dirty = () => editor.value !== p.prompt;
  const updateCounter = () => {
    const words = editor.value.trim() ? editor.value.trim().split(/\s+/).length : 0;
    counter.textContent = `${words} words · ${editor.value.length} characters${dirty() ? ' · unsaved changes' : ''}`;
  };
  editor.addEventListener('input', updateCounter);

  /* left: source preview / generated page */
  function drawLeft() {
    stageNote.replaceChildren();
    if (leftTab === 'source') {
      const src = p.animated_thumbnail;
      const img = p.thumbnail ? h('img', { src: p.thumbnail, alt: `${p.title} preview image` }) : h('div', { class: 'empty', text: 'No source preview.' });
      if (src && /\.(mp4|webm|mov)(\?|$)/i.test(src)) {
        const v = h('video', { src, poster: p.thumbnail || '', autoplay: true, muted: true, loop: true, playsinline: true, controls: true });
        v.muted = true;
        v.addEventListener('error', () => stage.replaceChildren(img));
        stage.replaceChildren(v);
      } else stage.replaceChildren(img);
      stageNote.append(h('p', { class: 'muted', text: 'This is the source site’s own preview. Use the Generated tab to see what your current text produces.' }));
    } else {
      if (preview) {
        stage.replaceChildren(h('iframe', { sandbox: 'allow-scripts', title: 'Generated preview', srcdoc: preview.html }));
        stageNote.append(
          preview.stale ? h('p', { class: 'notice', text: 'This page was made from an earlier version of the prompt. Open the prompt in a chat again to refresh it.' }) : null,
          h('p', { class: 'muted', text: `Saved ${when(preview.createdAt)}${preview.model ? ` · ${preview.model}` : ''}` }));
      } else {
        stage.replaceChildren(h('div', { class: 'empty', text: 'No generated page yet. Open the prompt in Claude or ChatGPT with the buttons below, then paste the finished page back here.' }));
      }
      stageNote.append(makePasteBox());
    }
    drawTools();
  }
  const chatText = () => `Build this as one complete, self-contained HTML page (inline CSS and JavaScript, Google Fonts allowed, no libraries). Reply with only the HTML, starting with <!doctype html>.\n\n${editor.value}`;
  async function copyText(t, ok) { try { await navigator.clipboard.writeText(t); toast(ok); return true; } catch { toast('Could not copy. Select the text and copy it yourself.'); return false; } }
  function openChat(base, name) {
    const full = chatText();
    const url = `${base}?q=${encodeURIComponent(full)}`;
    if (url.length <= 7500) { window.open(url, '_blank', 'noopener'); return; }
    copyText(full, `This prompt is too long to send in a link. It is copied: paste it into ${name}.`).then(() => window.open(base, '_blank', 'noopener'));
  }
  function drawTools() {
    const gen = leftTab === 'generated';
    const fs = h('button', { class: 'button', type: 'button', text: 'Full screen', onclick: () => fullscreen(stage) });
    const tab = h('button', { class: 'button', type: 'button', text: 'Open in new tab', onclick: () => { const u = URL.createObjectURL(new Blob([preview.html], { type: 'text/html' })); window.open(u, '_blank'); setTimeout(() => URL.revokeObjectURL(u), 60000); } });
    toolsRow.replaceChildren(...(gen && preview ? [fs, tab] : []));
    toolsRow.hidden = !(gen && preview);
  }
  function fullscreen(el) {
    if (el.requestFullscreen) el.requestFullscreen().catch(() => el.classList.add('fs'));
    else el.classList.add('fs');
    if (!el.requestFullscreen) { const esc = (e) => { if (e.key === 'Escape') { el.classList.remove('fs'); removeEventListener('keydown', esc); } }; addEventListener('keydown', esc); }
  }
  function makePasteBox() {
    const claude = h('button', { class: 'button primary', type: 'button', text: 'Open in Claude', onclick: () => openChat('https://claude.ai/new', 'Claude') });
    const gpt = h('button', { class: 'button primary', type: 'button', text: 'Open in ChatGPT', onclick: () => openChat('https://chatgpt.com/', 'ChatGPT') });
    const copy = h('button', { class: 'button', type: 'button', text: 'Copy for Gemini or others', onclick: () => copyText(chatText(), 'Copied. Paste it into any chat.') });
    const ta = h('textarea', { rows: 5, spellcheck: 'false', placeholder: 'Paste the page the chat wrote here (the whole reply is fine)…', 'aria-label': 'Pasted page' });
    const save = h('button', { class: 'button', type: 'button', text: 'Save as preview' });
    save.addEventListener('click', () => busy(save, 'Saving…', async () => {
      const r = await api('/api/preview', { method: 'POST', body: { id, html: ta.value, prompt: editor.value } });
      preview = r.preview; leftTab = 'generated'; drawLeftTabs(); drawLeft(); toast('Saved. This is now the preview.');
    }));
    return h('div', { class: 'stack paste' }, h('div', { class: 'row' }, claude, gpt, copy), ta, h('div', { class: 'row' }, save));
  }
  const leftTabs = h('div', { class: 'tabs', role: 'tablist' });
  function drawLeftTabs() {
    leftTabs.replaceChildren(...[['source', 'Source'], ['generated', 'Generated']].map(([k, t]) =>
      h('button', { class: `tab${leftTab === k ? ' active' : ''}`, type: 'button', role: 'tab', 'aria-selected': String(leftTab === k), text: t, onclick: () => { leftTab = k; drawLeftTabs(); drawLeft(); } })));
  }

  /* right: prompt / sections / history */
  const rightTabs = h('div', { class: 'tabs', role: 'tablist' });
  function drawRightTabs() {
    rightTabs.replaceChildren(...[['prompt', 'Prompt'], ['sections', 'Sections'], ['history', 'History']].map(([k, t]) =>
      h('button', { class: `tab${rightTab === k ? ' active' : ''}`, type: 'button', role: 'tab', 'aria-selected': String(rightTab === k), text: t, onclick: () => { rightTab = k; drawRightTabs(); drawRight(); } })));
  }

  async function savePrompt(text, note) {
    const row = await api('/api/prompts', { method: 'PATCH', body: { id, prompt: text, note } });
    p.prompt = row.prompt; p.edited = row.edited; editor.value = row.prompt; updateCounter();
    return row;
  }

  function drawRight() {
    if (rightTab === 'prompt') {
      const save = h('button', { class: 'button primary', type: 'button', text: 'Save' });
      save.addEventListener('click', () => busy(save, 'Saving…', async () => { await savePrompt(editor.value); toast('Saved. The previous text is in History.'); drawRight(); }));
      const prev = h('button', { class: 'button', type: 'button', text: 'Open in Claude', onclick: () => openChat('https://claude.ai/new', 'Claude') });
      const copy = h('button', { class: 'button ghost', type: 'button', text: 'Copy' });
      copy.addEventListener('click', async () => { try { await navigator.clipboard.writeText(editor.value); toast('Copied.'); } catch { editor.select(); toast('Press copy on your keyboard.'); } });
      const reset = p.edited ? h('button', { class: 'button ghost', type: 'button', text: 'Reset to original' }) : null;
      reset?.addEventListener('click', () => busy(reset, 'Resetting…', async () => {
        const row = await api('/api/prompts', { method: 'POST', body: { id, action: 'reset' } });
        p.prompt = row.prompt; p.edited = false; editor.value = row.prompt; updateCounter(); toast('Back to the original.'); drawRight();
      }));
      const similar = h('a', { class: 'button ghost', href: `#/discover?q=${encodeURIComponent(`${p.title}. ${p.description || ''}`.slice(0, 300))}`, text: 'Find similar' });
      rightBody.replaceChildren(h('div', { class: 'stack' }, editor, counter, h('div', { class: 'row' }, save, prev, copy, reset, similar)));
      updateCounter();
    } else if (rightTab === 'sections') drawSections();
    else drawHistory();
  }

  async function drawSections() {
    rightBody.replaceChildren(h('p', { class: 'muted', text: 'Loading sections…' }));
    if (dirty()) { rightBody.replaceChildren(h('p', { class: 'notice', text: 'You have unsaved changes on the Prompt tab. Save them first, then split.' })); return; }
    let sections = (await api(`/api/sections?id=${id}`)).sections;
    const render = () => {
      if (!sections) {
        const go = h('button', { class: 'button primary', type: 'button', text: 'Split into sections' });
        go.addEventListener('click', () => busy(go, 'Splitting…', async () => { const r = await api('/api/sections', { method: 'POST', body: { id } }); sections = r.sections; if (r.usedFallback) toast('Split by paragraph instead.'); render(); }));
        rightBody.replaceChildren(h('div', { class: 'stack' }, h('p', { class: 'muted', text: 'Long prompts are easier to edit in labelled parts. Splitting never rewrites your text; it only groups the paragraphs and names each group.' }), go));
        return;
      }
      const areas = sections.map((s) => {
        const ta = h('textarea', { rows: Math.min(14, Math.max(4, Math.ceil(s.text.length / 70))), spellcheck: 'false', 'aria-label': `${s.label} text` });
        ta.value = s.text; ta.addEventListener('input', () => (s.text = ta.value));
        return h('details', { class: 'section', open: sections.length <= 3 }, h('summary', {}, h('strong', { text: s.label }), h('span', { text: s.summary })), ta);
      });
      const save = h('button', { class: 'button primary', type: 'button', text: 'Save sections' });
      save.addEventListener('click', () => busy(save, 'Saving…', async () => { const r = await api('/api/sections', { method: 'PUT', body: { id, sections } }); p.prompt = r.prompt; editor.value = r.prompt; p.edited = true; toast('Saved. The previous text is in History.'); }));
      const again = h('button', { class: 'button ghost', type: 'button', text: 'Split again' });
      again.addEventListener('click', () => { sections = null; render(); });
      rightBody.replaceChildren(h('div', { class: 'stack' }, h('div', {}, areas), h('div', { class: 'row' }, save, again)));
    };
    render();
  }

  async function drawHistory() {
    rightBody.replaceChildren(h('p', { class: 'muted', text: 'Loading history…' }));
    const versions = await api(`/api/versions?id=${id}`);
    if (!versions.length) { rightBody.replaceChildren(h('p', { class: 'muted', text: 'No earlier versions yet. Each save keeps the text it replaced.' })); return; }
    rightBody.replaceChildren(...versions.map((v) => {
      const restore = h('button', { class: 'button ghost', type: 'button', text: 'Restore' });
      restore.addEventListener('click', () => busy(restore, 'Restoring…', async () => { await savePrompt(v.prompt, 'Before restore'); rightTab = 'prompt'; drawRightTabs(); drawRight(); toast('Restored.'); }));
      return h('div', { class: 'version' }, h('div', { class: 'row between' }, h('span', { class: 'muted', text: `${when(v.created_at)}${v.note ? ` · ${v.note}` : ''}` }), restore), h('pre', { text: v.prompt }));
    }));
  }

  try { preview = (await api(`/api/preview?id=${id}`)).preview; } catch { /* no preview yet */ }
  if (preview) leftTab = 'generated';
  drawLeftTabs(); drawLeft(); drawRightTabs(); drawRight();

  app.replaceChildren(
    h('div', { class: 'crumbs' }, h('a', { href: '#/', text: 'Library' }), ' / ', p.title),
    h('div', { class: 'page-title' },
      h('h1', { text: p.title }),
      h('div', { class: 'row' }, p.is_new ? h('span', { class: 'pill new', text: 'New' }) : null, p.edited ? h('span', { class: 'pill edited', text: 'Edited' }) : null, p.category ? h('span', { class: 'pill', text: p.category }) : null)),
    p.description ? h('p', { class: 'muted', text: p.description }) : null,
    h('div', { class: 'detail' },
      h('section', { class: 'panel' }, h('div', { class: 'panel-head' }, leftTabs, toolsRow), stage, h('div', { class: 'panel-body' }, stageNote)),
      h('section', { class: 'panel' }, h('div', { class: 'panel-head' }, rightTabs), rightBody)));
}

/* ---------- Discover ---------- */
async function viewDiscover(prefill) {
  const q = h('input', { type: 'text', id: 'dq', placeholder: 'Describe a design, e.g. dark photographer portfolio hero with cursor effects', 'aria-label': 'What to look for' });
  q.value = prefill;
  const go = h('button', { class: 'button primary', type: 'button', text: 'Find similar prompts' });
  const validOnly = h('input', { type: 'checkbox', id: 'valid', checked: true });
  const list = h('div', { class: 'stack' });
  let items = await api('/api/discover');

  const draw = () => {
    const rows = items.filter((r) => !validOnly.checked || r.example_ok);
    list.replaceChildren(...(rows.length ? rows.map(result) : [h('div', { class: 'empty-state', text: items.length ? 'No results have a working live example. Untick the box to see all of them.' : 'Nothing yet. Describe a design above and search.' })]));
  };
  validOnly.addEventListener('input', draw);
  go.addEventListener('click', () => busy(go, 'Searching the web… (up to a minute)', async () => {
    if (!q.value.trim()) { toast('Describe what to look for first.'); return; }
    await api('/api/discover', { method: 'POST', body: { query: q.value } });
    items = await api('/api/discover'); draw(); toast('Search finished.');
  }));
  q.addEventListener('keydown', (e) => { if (e.key === 'Enter') go.click(); });

  function result(r) {
    const del = h('button', { class: 'button ghost', type: 'button', text: 'Remove' });
    del.addEventListener('click', async () => { await api(`/api/discover?id=${r.id}`, { method: 'DELETE' }); items = items.filter((x) => x.id !== r.id); draw(); });
    return h('div', { class: 'result' },
      h('h3', { text: r.title }),
      h('p', { class: 'muted', text: r.summary || '' }),
      h('div', { class: 'row' },
        h('a', { class: 'link', href: r.url, target: '_blank', rel: 'noopener noreferrer', text: 'Open prompt page' }),
        r.example_url ? h('a', { class: 'link', href: r.example_url, target: '_blank', rel: 'noopener noreferrer', text: 'Open live example' }) : null,
        h('span', { class: `pill ${r.example_ok ? 'ok' : 'warn'}`, text: r.example_ok ? 'Example loads' : r.example_url ? `Example failed (${r.example_status || 'no response'})` : 'No example' }),
        del));
  }

  app.replaceChildren(
    h('div', { class: 'page-title' }, h('h1', { text: 'Discover' }), h('span', { class: 'muted', text: 'Searches the web, then loads each example link to check it works.' })),
    h('div', { class: 'toolbar' }, q, go),
    h('label', { class: 'row muted' }, validOnly, 'Only show results with a working live example'),
    h('div', { style: 'height:16px' }), list);
  draw();
}

/* ---------- Settings ---------- */
async function viewSettings() {
  let cfg = await api('/api/settings');
  const wrap = h('div', { class: 'stack' });

  const draw = () => wrap.replaceChildren(...cfg.providers.map((p) => {
    const key = h('input', { type: 'password', id: `key-${p.id}`, autocomplete: 'off', placeholder: p.configured ? `Saved key ending ${p.last4}. Paste a new one to replace it.` : 'Paste your API key', 'aria-label': `${p.label} API key` });
    const model = h('input', { type: 'text', id: `model-${p.id}`, placeholder: p.defaultModel, 'aria-label': `${p.label} model` });
    model.value = p.model === p.defaultModel ? '' : p.model;
    const save = h('button', { class: 'button primary', type: 'button', text: 'Save' });
    save.addEventListener('click', () => busy(save, 'Saving…', async () => {
      cfg = await api('/api/settings', { method: 'PUT', body: { provider: p.id, apiKey: key.value, model: model.value } });
      toast(`${p.label} saved.`); draw();
    }));
    const test = h('button', { class: 'button', type: 'button', text: 'Test', disabled: !p.configured });
    test.addEventListener('click', () => busy(test, 'Testing…', async () => { const r = await api('/api/settings', { method: 'POST', body: { provider: p.id } }); toast(`${p.label} works (${r.model}).`); }));
    const def = h('button', { class: 'button', type: 'button', text: cfg.default === p.id ? 'Default' : 'Use as default', disabled: !p.configured || cfg.default === p.id });
    def.addEventListener('click', () => busy(def, 'Saving…', async () => { cfg = await api('/api/settings', { method: 'PUT', body: { provider: p.id, makeDefault: true } }); draw(); }));
    const del = p.source === 'saved' ? h('button', { class: 'button ghost', type: 'button', text: 'Remove key' }) : null;
    del?.addEventListener('click', () => busy(del, 'Removing…', async () => { cfg = await api(`/api/settings?provider=${p.id}`, { method: 'DELETE' }); toast('Key removed.'); draw(); }));
    return h('section', { class: 'panel' },
      h('div', { class: 'panel-head' }, h('strong', { text: p.label }),
        h('span', { class: `pill ${p.configured ? 'ok' : ''}`, text: p.configured ? (p.source === 'environment' ? 'Key set on the server' : 'Key saved') : 'No key' })),
      h('div', { class: 'panel-body stack' },
        h('label', { class: 'field', style: 'margin:0' }, 'API key', key),
        h('label', { class: 'field', style: 'margin:0' }, `Model (leave empty for ${p.defaultModel})`, model),
        h('div', { class: 'row' }, save, test, def, del)));
  }));
  draw();

  app.replaceChildren(
    h('div', { class: 'page-title' }, h('h1', { text: 'AI keys' }), h('span', { class: 'muted', text: 'Used for previews, section splitting and Discover.' })),
    h('p', { class: 'muted', text: 'Add whichever keys you have. Keys are encrypted before they are saved and are never shown again, only the last four characters. The default is used when more than one is set.' }),
    h('div', { style: 'height:12px' }), wrap);
}

/* ---------- Sync ---------- */
const syncBtn = $('#sync-btn');
syncBtn.addEventListener('click', () => busy(syncBtn, 'Syncing…', async () => {
  const r = await api('/api/sync', { method: 'POST' });
  toast(`Checked ${r.found} free prompts: ${r.added} added, ${r.updated} updated. ${r.premiumSkipped} premium left alone.`);
  library = null; route();
}));

route();
