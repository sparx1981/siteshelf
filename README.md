# SiteShelf

A private shelf of website-design prompts. Browse the free SceneAI library, edit prompts, preview what they build, split long prompts into labelled sections, find similar prompts on the web, and keep the library in sync every week.

Built to sit beside RepoShelf: same look, same Supabase project (tables are prefixed `ss_`).

## How it works
- `public/` static front end (no build step).
- `api/` Vercel functions. Every route needs the site key (`x-site-key`). The weekly cron also accepts `CRON_SECRET`.
- `lib/sync.js` reads SceneAI's public list, fetches only prompts marked free, adds new ones, and never overwrites your edits.
- `lib/llm.js` talks to Claude, ChatGPT or Gemini, whichever key you add in Settings.

## Environment variables
See `.env.example`. Required: `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`, `SITE_KEY`, `CRON_SECRET`.
AI keys can be added in the app. Changing `SITE_KEY` means saved AI keys must be entered again, because they are encrypted with it.

## Checks
`npm test`
