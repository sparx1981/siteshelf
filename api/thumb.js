import { db, enc } from '../lib/db.js';

// Thumbnails of SiteShelf's own originals. Public on purpose: <img> tags cannot send the site key,
// and these are screenshots of pages written for this project, not anyone else's content.
export default async function handler(req, res) {
  try {
    const id = String(req.query.id || '');
    if (!/^[0-9a-f-]{36}$/i.test(id)) { res.statusCode = 400; return res.end('Bad id'); }
    const [t] = await db(`/ss_thumbs?prompt_id=eq.${enc(id)}&select=mime,data_b64`);
    if (!t) { res.statusCode = 404; return res.end('Not found'); }
    res.statusCode = 200;
    res.setHeader('Content-Type', t.mime);
    res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    res.end(Buffer.from(t.data_b64, 'base64'));
  } catch (e) {
    res.statusCode = 500; res.end('Error');
  }
}
