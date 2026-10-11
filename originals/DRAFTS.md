# Unverified original drafts — handoff to Claude Code

These 10 folders are authored drafts, not completed catalogue entries. Each has
`meta.json`, `prompt.txt` and a hand-built `preview.html`. None has passed the
required browser checks, interaction testing or screenshot review, and none has
a checker-generated `thumb.jpg`. They have NOT been seeded into Supabase or
verified on the live site. Do not count them as published originals.

| Slug | Title | Category |
| --- | --- | --- |
| reservoir-console | Reservoir Console | Dashboard |
| parcel-fit-studio | Parcel Fit Studio | Tools |
| return-route | Return Route | E-commerce |
| permission-weave | Permission Weave | Components |
| lab-sample-register | Lab Sample Register | App UI |
| mural-open-call | Mural Open Call | Form |
| fieldnote-index | Fieldnote Index | Blog |
| loomlight-cue-desk | Loomlight Cue Desk | Tools |
| seed-swap-market | Seed Swap Market | E-commerce |
| room-pulse-booking | Room Pulse Booking | Widgets |

## What was checked

The authorship and format were based on the existing budget-planner and
product-zoom entries. Slugs were compared with main while other work was landing;
no exact slug overlaps were found. The commit's basic static checks verify the
metadata shape, paragraph order and inline JavaScript syntax. These checks are
not browser verification.

## Why verification is incomplete

The author's execution environment could not clone over its network proxy.
Source files were read using the GitHub connection. Chromium was available but
the shell sandbox blocked its socket operations. Requests to run browser checks
with additional permissions stalled. No checker run completed and no visual or
interaction pass is claimed.

## Finish these drafts before adding them to the live library

1. Pull main in a working Claude Code session. Read the user's SiteShelf brief and
   two existing entries; inspect these drafts against the current catalogue for
   conceptual overlap as well as slug collisions.
2. Run the repository's checker for exactly these slugs:

   ```sh
   python3 scripts/check_originals.py reservoir-console parcel-fit-studio return-route permission-weave lab-sample-register mural-open-call fieldnote-index loomlight-cue-desk seed-swap-market room-pulse-booking
   ```

3. Fix console/page errors, requests, missing titles and horizontal overflow.
   The checker must generate each `thumb.jpg`; do not hand-make thumbnails.
4. Use Playwright to exercise the main interactions, validation, empty states,
   keyboard navigation and dialog focus. Check scrollWidth <= 390 at 390px.
   Specifically test carton rotation/no-fit, inherited permission cells and
   discard-on-team-switch, sample transfer validation, draft-storage failures,
   notebook deduplication, cue playback/stop, stock limits, and reservation
   conflicts/cancellation/undo.
5. Generate and inspect both desktop and mobile montages with `scripts/montage.py`.
   Fix cramped, broken or visually weak layouts and verify prompts match previews.
6. Ask the owner for a freshly rotated Supabase service key when ready to seed.
   An earlier key was pasted in chat but was never used by this author. Do not
   recover it, write it into a file, log it or commit it. Use the fresh key only
   as an environment variable for the seed command. Do not request the site key,
   CRON_SECRET or AI provider keys.
7. Seed only the 10 listed slugs by passing them as arguments to the existing
   `scripts/seed-originals.mjs`, preserving other entries and owner edits.
8. Commit the generated thumbnails and fixes, push main, then check the live
   thumbnail, Preview and Open in Claude / ChatGPT links through the owner's
   authenticated browser. Do not claim live verification before doing it.
9. Remove this handoff file, or mark each entry completed with the real checker,
   seed and live-verification results once those steps have passed.

## Scope and remaining work

The owner approved these first 10 ideas, chose to fill gaps across categories,
then requested a draft handoff and stopping this author's work. The original
goal was 150 NEW originals. Only these 10 drafts were written; this author
created no other entries. Other sessions have been adding entries concurrently,
so recount the current repository and database before planning the remaining
140. Do not modify `public/`, `api/`, or backend behaviour for these content updates.
