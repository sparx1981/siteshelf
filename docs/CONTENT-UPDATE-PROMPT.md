# SiteShelf content update prompt

Copy everything below the line into a new Claude (Claude Code) or ChatGPT session that can run code and push to GitHub. Replace the numbers in the "Your task" section first.

---

You are helping me grow SiteShelf, my private library of website-design prompts. Each entry is a prompt that makes an AI build a polished web page, paired with a hand-built preview page that proves the prompt works. Your job is to add NEW, ORIGINAL, high-quality entries without breaking anything.

## Your task
Add **[N]** new originals (suggested: 10 per batch). Focus on: **[categories or themes, e.g. "Dashboards and E-commerce" or "anything missing"]**. Ask me up to 3 short multiple-choice questions first if anything below is unclear. I prefer plain, easy language.

## What SiteShelf is
- Repo: `github.com/sparx1981/siteshelf` (branch `main`). Vercel auto-deploys every push to main. Live aliases: `siteshelf-two.vercel.app` and `siteshelf-sparx1981.vercel.app`.
- Front end: static vanilla JS app in `public/` (`app.js`, `index.html`, `style.css`), hash router. Do not edit it for content updates.
- Back end: Vercel serverless functions in `api/*.js` (ESM) and a weekly cron (`0 6 * * 1`, `/api/cron`). Every API route needs the `x-site-key` header. Do not edit for content updates.
- Database: Supabase (Postgres) project `jccogltqhkffuderukrj`, URL `https://jccogltqhkffuderukrj.supabase.co`. Tables are prefixed `ss_`: `ss_prompts`, `ss_previews`, `ss_thumbs`, `ss_settings` plus versions, sync-run and discover-result tables. Row Level Security is on with no policies, so only the service key can read or write.
- It is related to RepoShelf (www.reposhelf.co.uk), which links to SiteShelf; SiteShelf links back in its header and footer.

## Secrets: strict rules
- Ask me to paste the Supabase **secret/service-role key** into the chat when you are ready to seed. Use it ONLY as an environment variable for one command. Never write it to a file, commit it, log it, or echo it back.
- Never ask for or use the site key, CRON_SECRET, or any AI provider keys. You do not need them.
- After seeding, remind me to rotate the Supabase key if it was ever pasted in chat.

## Hard rules on content
1. Everything must be **original**. Never copy, decode, or "unlock" anyone else's prompts. In particular, the paid SceneAI "Stories in Light" prompts are off limits; do not extract or reproduce them. Do not recreate known brands, logos, characters, or copyrighted designs. Invent all company, product and people names (use example.com style contact details).
2. Do not duplicate an existing entry. The current 100 slugs are listed at the end. Pick a clearly different idea, layout or interaction, not a reskin.
3. No external images or libraries. Everything is one HTML file with inline CSS and JS. Only Google Fonts links are allowed.

## Folder format (one folder per entry)
`originals/<slug>/` (lowercase-kebab-case slug) containing:
- `meta.json` — exactly `{"title":"...","category":"...","description":"..."}`. Description is one sentence (about 30 words) saying what the page does and its key interactions.
- `prompt.txt` — the prompt, written as labelled paragraphs in this order: `Canvas & base:`, `Typography:`, `Layout:`, `Interaction:`, `Responsive:`, `Rules:`. Be concrete: hex colours, font names with weights, pixel sizes, breakpoints, exact copy for headings and buttons, behaviours and states. The prompt must be specific enough that Claude or ChatGPT can rebuild a very similar page from it. The Rules paragraph always says: single HTML file, Google Fonts link, inline CSS/JS, no libraries or external images, `[hidden]{display:none!important}`, accessibility, `prefers-reduced-motion`, invented names only.
- `preview.html` — a hand-built page that implements the prompt, with a `<title>` like `Name — Category`, `lang="en"`, viewport meta, semantic markup, visible focus styles, aria labels, keyboard support, reduced-motion handling, and a mobile layout with no horizontal scroll at 390px.
- `thumb.jpg` — generated automatically by the checker; do not hand-make it.

Categories in use (reuse where possible; a new one is fine if nothing fits): Hero Section, Pricing, FAQ, Form, Dashboard, Error Page, Landing Page, Gallery, Navigation, Testimonials, Footer, Buttons, Cards, Loaders, Form Controls, App UI, Widgets, Timeline, Typography, E-commerce, Games, Tools, Blog, About Page, Coming Soon, Portfolio, Components.

Quality bar: it should look like a real, finished product page: considered typography pairing, a limited palette with proper contrast (4.5:1), real-feeling copy and data, working interactions with sensible states (hover, focus, active, empty, error), and tasteful motion. Vary the style across entries (editorial, dark, playful, brutalist, minimal, glassy, etc.).

## Known gotchas (learned the hard way)
- Class `display` values override the `hidden` attribute, so always add `[hidden]{display:none!important}`.
- Never put a literal `</script>` inside inline JS strings; write `<\/script>`.
- Use `grid-template-columns:minmax(0,1fr)` (and `min-width:0` on flex children) to prevent mobile overflow.
- Font shorthands need a generic fallback (`font:600 16px 'Name',sans-serif`).
- Do not rebuild the DOM on hover; it kills hover and focus.
- Wrap `localStorage` and clipboard calls in try/catch.
- For outside-click handlers on re-rendered content, use `event.composedPath()`.
- Use `aria-disabled` rather than `disabled` where arrow keys must still reach the element.
- Native `<dialog>` with `showModal()` gives focus trapping for free.
- `£` is not a valid JavaScript identifier; inline `display` styles beat media-query rules.
- When testing, allow for async re-render timing and collapsed `<details>`.
- Do not use `pkill -f` in the shell; it can kill your own session.

## Workflow (do these in order, per batch)
1. `git clone` the repo (or `git pull`), `cd siteshelf`, run `ls originals` and read 2 existing entries of a similar category for format.
2. Propose the list of slugs, titles, categories and one-line ideas. If I have not already approved them, wait for my OK (or my "carry on").
3. Write each entry's `meta.json`, `prompt.txt`, `preview.html`.
4. Check: `python3 scripts/check_originals.py <slug> [slug...]` (Playwright + Chromium at 1440×900 and 390×844). It reports console/page errors, horizontal overflow, external requests other than Google Fonts, and missing titles; it also writes `thumb.jpg` and screenshots to `/tmp/shots/<slug>-{d,m}.png`. Fix everything it reports.
5. Interaction test with Playwright: click, type and tab through the main interactions, and confirm `document.documentElement.scrollWidth <= 390` on a 390px viewport.
6. Look at the screenshots: `python3 scripts/montage.py out.png d|m slug...` (d = desktop, m = mobile). Fix anything ugly, cramped or broken.
7. Seed the database (idempotent; existing entries and my edits are kept):
   `SUPABASE_URL=https://jccogltqhkffuderukrj.supabase.co SUPABASE_SERVICE_ROLE_KEY='<key I paste>' node scripts/seed-originals.mjs`
   It should report "N created, M updated, K unchanged (X folders)". It upserts `ss_prompts` (source `siteshelf`, type free), inserts a preview row in `ss_previews`, and upserts the thumbnail into `ss_thumbs`.
8. Commit and push to `main`. Commit message must end with the attribution trailers your tool gives you (for Claude Code: `Co-Authored-By: Claude ... <noreply@anthropic.com>` and `Claude-Session: ...`). Never commit secrets.
9. After Vercel redeploys (about a minute), open the live site, find a new entry, check the thumbnail, Preview, and the "Open in Claude / ChatGPT" links work. Report the result.

If you only have ChatGPT without a shell, do steps 3 only: output each entry's three files as separate code blocks with the exact folder paths, and tell me to give them to a Claude Code session to run steps 4 to 9.

## Reporting
Tell me what you are doing in one line at the start. After every 10 entries, send a short progress message (titles only). At the end give a 5-line summary: what was added, what the checks found and fixed, the new total, and any follow-ups. Do not paste entire files back to me.

## Current catalogue (100 slugs, do not duplicate)
activity-rings, analytics-dashboard, article-reader, atlas-cartographers, bento-features, blog-index, bloom-florist, brine-and-co, brutalist-portfolio, calendar-month, chat-ui, checkout-flow, cinema-seats, command-palette, compare-slider, contribution-heatmap, cookie-consent, countdown-launch, coverflow-carousel, cursor-spotlight, data-table, date-range-picker, daybreak-coffee, delivery-tracker, docs-sidebar, event-schedule, expanding-panels, ferrous, file-uploader, flip-cards, footer-orchard, glow-buttons, granite-peak, hscroll-story, invoice-builder, jam-session, kanban-board, kiln-and-glaze, ledger-dashboard, linen-loom, loader-lab, loan-calculator, logo-marquee, loomwork-login, lost-in-space, lumen-labs, magazine-cover, markdown-editor, megamenu-atelier, memory-match, mesh-gradient-hero, mosaic-gallery, music-player, neumorphic-controls, nocturne-radio, notification-center, onboarding-wizard, orbit-ledger, palette-generator, paper-planes, particle-hero, photo-filters, photo-masonry, pixel-garden, podcast-landing, pomodoro-timer, price-ticker, pricing-calculator, product-page, quiet-hours, quiz-app, recipe-card, restaurant-menu, resume-cv, retro-terminal, sable-studio, settings-page, skeleton-feed, sonar-security, stack-faq, stats-counters, sticky-scroll-features, synthwave-arcade, tally-pricing, task-list-app, team-page, text-effects, tidepool, tilesum, tilt-cards, timeline-story, toast-center, toggle-switches, type-foundry, voices-testimonials, voltage-cycles, waitlist-launch, weather-card, wordle-clone, world-clocks.

Ideas not yet covered (pick from these or invent better): invoice PDF preview, split-pane code diff, seating chart, habit tracker, kanban swimlanes, subscription cancel flow, 404 with a mini-game, bento portfolio, interactive org chart, travel itinerary, recipe scaler, language flashcards, budget planner donut, map-pin store locator, changelog page, status page, newsletter archive, job board, event ticket, wedding RSVP, real-estate listing, fitness plan, course landing, A/B pricing toggle, dark docs home.
