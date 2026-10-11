export const MODEL = () => process.env.CLAUDE_MODEL || 'claude-sonnet-5-5';

export async function claude({ system, user, maxTokens = 8000, tools }) {
  const key = process.env.ANTHROPIC_API_KEY;
  if (!key) throw Object.assign(new Error('ANTHROPIC_API_KEY is not set on the server.'), { status: 500 });
  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: { 'x-api-key': key, 'anthropic-version': '2023-06-01', 'content-type': 'application/json' },
    body: JSON.stringify({
      model: MODEL(),
      max_tokens: maxTokens,
      system,
      messages: [{ role: 'user', content: user }],
      ...(tools ? { tools } : {}),
    }),
  });
  const j = await res.json();
  if (!res.ok) throw new Error(j?.error?.message || `Claude request failed (${res.status}).`);
  return (j.content || []).filter((b) => b.type === 'text').map((b) => b.text).join('\n');
}

export function extractJson(text) {
  const clean = String(text).replace(/```(?:json)?/gi, '');
  for (const [open, close] of [['[', ']'], ['{', '}']]) {
    const a = clean.indexOf(open);
    const b = clean.lastIndexOf(close);
    if (a !== -1 && b > a) {
      try { return JSON.parse(clean.slice(a, b + 1)); } catch { /* try next shape */ }
    }
  }
  return null;
}

export function extractHtml(text) {
  let t = String(text).trim().replace(/^```(?:html)?\s*/i, '').replace(/```\s*$/, '').trim();
  const i = t.search(/<!doctype html|<html/i);
  if (i > 0) t = t.slice(i);
  return t;
}
