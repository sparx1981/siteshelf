import { createHash } from 'node:crypto';

export const hash = (s) => createHash('sha1').update(String(s)).digest('hex');

export const paragraphs = (text) => String(text).split(/\n{2,}/).map((p) => p.trim()).filter(Boolean);

export const compose = (sections) => sections.map((s) => String(s.text).trim()).filter(Boolean).join('\n\n');

const labelFrom = (p) => {
  const head = p.split(/[:.\n]/)[0].trim().split(/\s+/).slice(0, 4).join(' ');
  return head || 'Section';
};

/**
 * Turn the model's grouping ({label, summary, from, to} over paragraph numbers) into sections.
 * Grouping is by paragraph number, so the text is never rewritten and joining the sections gives the
 * original prompt back. Anything that does not cover every paragraph once falls back to one section per paragraph.
 */
export function buildSections(paras, groups) {
  const fallback = () => paras.map((p) => ({ label: labelFrom(p), summary: '', text: p }));
  if (!Array.isArray(groups) || !groups.length) return fallback();
  let next = 0;
  const out = [];
  for (const g of groups) {
    const from = Number(g?.from), to = Number(g?.to);
    if (!Number.isInteger(from) || !Number.isInteger(to) || from !== next || to < from || to >= paras.length) return fallback();
    out.push({
      label: String(g.label || labelFrom(paras[from])).slice(0, 60),
      summary: String(g.summary || '').slice(0, 200),
      text: paras.slice(from, to + 1).join('\n\n'),
    });
    next = to + 1;
  }
  return next === paras.length ? out : fallback();
}

export function isSafeUrl(u) {
  let x;
  try { x = new URL(u); } catch { return false; }
  if (!/^https?:$/.test(x.protocol)) return false;
  const h = x.hostname.toLowerCase();
  if (h === 'localhost' || h.endsWith('.local') || h.endsWith('.internal') || h === '[::1]') return false;
  if (/^(127|10|0)\./.test(h) || /^192\.168\./.test(h) || /^169\.254\./.test(h) || /^172\.(1[6-9]|2\d|3[01])\./.test(h)) return false;
  return true;
}
