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
