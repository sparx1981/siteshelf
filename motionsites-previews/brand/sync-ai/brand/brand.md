# Stellar.ai — brand kit

*AI assistant that automates team tasks.* Generated from the SiteShelf listing **Sync AI** (Hero Section); every value below is read from that page, not invented.

> **Work smarter. Move faster.**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **chip** glyph on a squircle tile. A chip mark nods to the AI brain behind the automation. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#FFFFFF` | Page background |
| surface | `#000000` | Cards, panels, raised areas |
| text | `#000000` | Body and heading text |
| textMuted | `#4B5563` | Secondary text, captions |
| primary | `#000000` | Main actions, links, brand colour |
| secondary | `#737373` | Highlights, charts, second accent |
| border | `#D1D5DB` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#737373` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 21.00:1 | pass | pass |
| Muted text on background | 7.56:1 | pass | pass |
| Primary on background | 21.00:1 | pass | pass |
| Text on primary | 21.00:1 | pass | pass |
| Text on surface | 1.00:1 | fail | fail |

**Colours seen on the page** (share of use): `#FFFFFF` 98.2%, `#000000` 1.0%, `#6B7280` 0.4%, `#9CA3AF` 0.4%, `#4B5563` 0.1%, `#374151` 0.0%, `#D1D5DB` 0.0%

## Typography

- Headings: **Inter** (weight 400)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Inter | 80 px | 400 | 88px | -2px |
| Body | Inter | 20 px | 400 | normal | normal |
| Button | Inter | 14 px | 400 | normal | normal |
| Navigation | Inter | 18 px | 600 | normal | normal |

## Shape, space and motion

- Radius: sm 4 px, md 4 px, lg 4 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 4 px, 6 px, 8 px, 10 px, 12 px, 16 px, 20 px, 24 px, 32 px
- Layout: container 1280 px; breakpoints 640 px, 768 px, 1024 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** quick, clean, optimistic.

Sounds like a productivity coach with a clean desk: short imperatives, simple words and a nudge to move faster. It promises time saved, never magic.

**Do**

- Use short pairs like Work smarter. Move faster.
- Name the connected tools
- Keep nav and CTA labels to two words

**Do not**

- Do not promise to replace people
- Do not use science-fiction phrases
- Do not use jargon like synergy

## Taglines

1. Work smarter. Move faster.
2. AI that powers you up
3. Sync with the tools you love
4. Save time, boost output
5. Automation that stays out of your way

**Boilerplate:** Stellar.ai is a SaaS platform whose intelligent automation syncs with the tools teams already use to streamline tasks, boost output and save time every day.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Get started free |
| secondaryCta | Login |
| success | You're all set. Your tools are syncing. |
| error | We couldn't connect that tool. Please try again. |
| empty | No tasks yet. Connect a tool to start. |

---
Source listing key `m:sync-ai`. Rebuild with `python3 scripts/brand-kit/build.py m:sync-ai`.
