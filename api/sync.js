import { route } from '../lib/http.js';
import { db } from '../lib/db.js';
import { runSync } from '../lib/sync.js';

export default route({
  async GET() {
    const runs = await db('/ss_sync_runs?select=*&order=started_at.desc&limit=8');
    const fresh = await db('/ss_prompts?select=id&is_new=eq.true');
    return { runs, newCount: fresh.length };
  },
  async POST() {
    return runSync('manual');
  },
});
