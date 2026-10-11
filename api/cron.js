import { route } from '../lib/http.js';
import { runSync } from '../lib/sync.js';

// Weekly job configured in vercel.json. Vercel sends the CRON_SECRET as a Bearer token.
export default route({
  async GET() {
    return runSync('cron');
  },
}, { allowCron: true });
