import { route, fail } from '../lib/http.js';
import { db, enc } from '../lib/db.js';

export default route({
  async GET(req) {
    if (!req.query.id) throw fail(400, 'A prompt id is required.');
    return db(`/ss_prompt_versions?prompt_id=eq.${enc(req.query.id)}&select=id,prompt,note,created_at&order=created_at.desc&limit=30`);
  },
});
