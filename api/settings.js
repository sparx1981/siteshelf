import { route, fail } from '../lib/http.js';
import { db, enc } from '../lib/db.js';
import { encrypt } from '../lib/crypto.js';
import { PROVIDERS, isProvider, loadSettings, keyFor, modelFor, complete } from '../lib/llm.js';

const put = (key, value) => db('/ss_settings?on_conflict=key', { method: 'POST', prefer: 'resolution=merge-duplicates,return=minimal', body: { key, value, updated_at: new Date().toISOString() } });

async function overview() {
  const s = await loadSettings();
  return {
    default: s.get('default_provider') || null,
    providers: Object.entries(PROVIDERS).map(([id, p]) => {
      const k = keyFor(s, id);
      return { id, label: p.label, configured: !!k, source: k?.source || null, last4: k ? k.key.slice(-4) : null, model: modelFor(s, id), defaultModel: p.model };
    }),
  };
}

// Keys are write-only: they are encrypted when saved and never sent back to the browser.
export default route({
  async GET() { return overview(); },

  async PUT(req) {
    const { provider, apiKey, model, makeDefault } = req.body || {};
    if (!isProvider(provider)) throw fail(400, 'Choose Claude, ChatGPT or Gemini.');
    if (typeof apiKey === 'string' && apiKey.trim()) {
      const k = apiKey.trim();
      if (k.length < 10 || k.length > 400 || /\s/.test(k)) throw fail(400, 'That does not look like an API key.');
      await put(`key:${provider}`, encrypt(k));
    }
    if (typeof model === 'string') {
      const m = model.trim();
      if (m && !/^[\w.\-:/]{2,80}$/.test(m)) throw fail(400, 'That model name has odd characters.');
      if (m) await put(`model:${provider}`, m);
      else await db(`/ss_settings?key=eq.${enc(`model:${provider}`)}`, { method: 'DELETE' });
    }
    if (makeDefault) {
      if (!keyFor(await loadSettings(), provider)) throw fail(400, 'Add a key for that provider before making it the default.');
      await put('default_provider', provider);
    }
    return overview();
  },

  /** Send a tiny request to confirm the key and model work. */
  async POST(req) {
    const { provider } = req.body || {};
    if (!isProvider(provider)) throw fail(400, 'Choose Claude, ChatGPT or Gemini.');
    const r = await complete({ provider, system: 'Reply with the single word OK.', user: 'Ping', maxTokens: 50 });
    if (r.provider !== provider) throw fail(400, 'No key is set for that provider.');
    return { ok: true, model: r.model };
  },

  async DELETE(req) {
    const { provider } = req.query;
    if (!isProvider(provider)) throw fail(400, 'Choose Claude, ChatGPT or Gemini.');
    for (const k of [`key:${provider}`, `model:${provider}`]) await db(`/ss_settings?key=eq.${enc(k)}`, { method: 'DELETE' });
    const s = await loadSettings();
    if (s.get('default_provider') === provider) await db('/ss_settings?key=eq.default_provider', { method: 'DELETE' });
    return overview();
  },
});
