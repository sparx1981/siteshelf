function base() {
  const u = process.env.SUPABASE_URL;
  if (!u) throw new Error('SUPABASE_URL is not set.');
  return u.replace(/\/$/, '') + '/rest/v1';
}

/** Minimal PostgREST client. The service key stays on the server; the tables have no public policies. */
export async function db(path, { method = 'GET', body, prefer } = {}) {
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!key) throw new Error('SUPABASE_SERVICE_ROLE_KEY is not set.');
  const res = await fetch(base() + path, {
    method,
    headers: {
      apikey: key,
      Authorization: `Bearer ${key}`,
      'Content-Type': 'application/json',
      ...(prefer ? { Prefer: prefer } : {}),
    },
    body: body === undefined ? undefined : JSON.stringify(body),
  });
  const text = await res.text();
  if (!res.ok) throw new Error(`Database error ${res.status}: ${text.slice(0, 300)}`);
  return text ? JSON.parse(text) : null;
}

export const enc = encodeURIComponent;
