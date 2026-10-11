import { timingSafeEqual } from 'node:crypto';

export function send(res, status, body) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');
  res.end(JSON.stringify(body));
}

function same(a, b) {
  const x = Buffer.from(String(a || ''));
  const y = Buffer.from(String(b || ''));
  return x.length === y.length && x.length > 0 && timingSafeEqual(x, y);
}

/** Every route needs the site key, or the cron secret that Vercel sends to the weekly job. */
export function authorise(req, { allowCron = false } = {}) {
  const key = process.env.SITE_KEY;
  if (!key) return { ok: false, status: 500, error: 'SITE_KEY is not set on the server.' };
  if (same(req.headers['x-site-key'], key)) return { ok: true };
  const secret = process.env.CRON_SECRET;
  if (allowCron && secret && same((req.headers.authorization || '').replace(/^Bearer /i, ''), secret)) return { ok: true, cron: true };
  return { ok: false, status: 401, error: 'Enter your site key to continue.' };
}

export function route(handlers, opts = {}) {
  return async function handler(req, res) {
    const a = authorise(req, opts);
    if (!a.ok) return send(res, a.status, { error: a.error });
    const fn = handlers[req.method];
    if (!fn) return send(res, 405, { error: 'Method not allowed.' });
    try {
      const out = await fn(req, res, a);
      if (out !== undefined && !res.writableEnded) send(res, 200, out);
    } catch (e) {
      console.error(e);
      send(res, e.status || 500, { error: e.message || 'Something went wrong.' });
    }
  };
}

export function fail(status, message) {
  const e = new Error(message);
  e.status = status;
  return e;
}
