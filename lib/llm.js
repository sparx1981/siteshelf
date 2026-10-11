import { db } from './db.js';
import { decrypt } from './crypto.js';
import { fail } from './http.js';

/** Providers you can plug in. Models are editable in Settings because model names change often. */
export const PROVIDERS = {
  anthropic: { label: 'Claude (Anthropic)', env: 'ANTHROPIC_API_KEY', model: 'claude-sonnet-5-5' },
  openai: { label: 'ChatGPT (OpenAI)', env: 'OPENAI_API_KEY', model: 'gpt-5' },
  gemini: { label: 'Gemini (Google)', env: 'GEMINI_API_KEY', model: 'gemini-2.5-pro' },
};
export const isProvider = (p) => Object.prototype.hasOwnProperty.call(PROVIDERS, p);

export async function loadSettings() {
  const rows = await db('/ss_settings?select=key,value');
  return new Map(rows.map((r) => [r.key, r.value]));
}

/** A saved key wins; the matching environment variable is the fallback. */
export function keyFor(settings, p) {
  const saved = settings.get(`key:${p}`);
  if (saved) {
    const k = decrypt(saved);
    if (k) return { key: k, source: 'saved' };
  }
  const env = process.env[PROVIDERS[p].env];
  return env ? { key: env, source: 'environment' } : null;
}

export const modelFor = (settings, p) => settings.get(`model:${p}`) || PROVIDERS[p].model;

export async function resolveProvider(requested) {
  const settings = await loadSettings();
  const order = [requested, settings.get('default_provider'), ...Object.keys(PROVIDERS)].filter((p) => p && isProvider(p));
  for (const p of order) {
    const k = keyFor(settings, p);
    if (k) return { provider: p, key: k.key, model: modelFor(settings, p) };
  }
  throw fail(400, 'No AI provider is set up yet. Add a Claude, ChatGPT or Gemini key in Settings.');
}

async function post(url, headers, body, label) {
  const res = await fetch(url, { method: 'POST', headers: { 'content-type': 'application/json', ...headers }, body: JSON.stringify(body) });
  const j = await res.json().catch(() => ({}));
  if (!res.ok) {
    const msg = j?.error?.message || j?.error || `status ${res.status}`;
    throw fail(res.status === 401 || res.status === 403 ? 400 : 502, `${label} refused the request: ${String(msg).slice(0, 240)}`);
  }
  return j;
}

const impl = {
  async anthropic({ key, model, system, user, maxTokens, search }) {
    const j = await post('https://api.anthropic.com/v1/messages',
      { 'x-api-key': key, 'anthropic-version': '2023-06-01' },
      { model, max_tokens: maxTokens, system, messages: [{ role: 'user', content: user }], ...(search ? { tools: [{ type: 'web_search_20250305', name: 'web_search', max_uses: 6 }] } : {}) }, 'Claude');
    return (j.content || []).filter((b) => b.type === 'text').map((b) => b.text).join('\n');
  },
  async openai({ key, model, system, user, maxTokens, search }) {
    const j = await post('https://api.openai.com/v1/responses',
      { Authorization: `Bearer ${key}` },
      { model, instructions: system, input: user, max_output_tokens: maxTokens, ...(search ? { tools: [{ type: 'web_search' }] } : {}) }, 'OpenAI');
    if (typeof j.output_text === 'string' && j.output_text) return j.output_text;
    return (j.output || []).flatMap((o) => o.content || []).filter((c) => c.type === 'output_text').map((c) => c.text).join('\n');
  },
  async gemini({ key, model, system, user, maxTokens, search }) {
    const j = await post(`https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent`,
      { 'x-goog-api-key': key },
      { systemInstruction: { parts: [{ text: system }] }, contents: [{ role: 'user', parts: [{ text: user }] }], generationConfig: { maxOutputTokens: maxTokens }, ...(search ? { tools: [{ google_search: {} }] } : {}) }, 'Gemini');
    return (j.candidates?.[0]?.content?.parts || []).map((p) => p.text || '').join('');
  },
};

/** One call for every provider. Returns the text plus which provider and model answered. */
export async function complete({ system, user, maxTokens = 8000, search = false, provider }) {
  const r = await resolveProvider(provider);
  const text = await impl[r.provider]({ key: r.key, model: r.model, system, user, maxTokens, search });
  return { text, provider: r.provider, model: r.model };
}
