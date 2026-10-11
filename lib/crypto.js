import { createCipheriv, createDecipheriv, randomBytes, scryptSync } from 'node:crypto';

// API keys are stored encrypted. The encryption key comes from SITE_KEY, so a database leak alone does not expose them.
// If you change SITE_KEY, saved keys can no longer be read and need entering again.
const secret = () => {
  const s = process.env.SITE_KEY;
  if (!s) throw new Error('SITE_KEY is not set on the server.');
  return scryptSync(s, 'siteshelf-settings-v1', 32);
};

export function encrypt(text) {
  const iv = randomBytes(12);
  const c = createCipheriv('aes-256-gcm', secret(), iv);
  const body = Buffer.concat([c.update(String(text), 'utf8'), c.final()]);
  return Buffer.concat([iv, c.getAuthTag(), body]).toString('base64');
}

export function decrypt(b64) {
  try {
    const raw = Buffer.from(String(b64), 'base64');
    const d = createDecipheriv('aes-256-gcm', secret(), raw.subarray(0, 12));
    d.setAuthTag(raw.subarray(12, 28));
    return Buffer.concat([d.update(raw.subarray(28)), d.final()]).toString('utf8');
  } catch {
    return null;
  }
}
