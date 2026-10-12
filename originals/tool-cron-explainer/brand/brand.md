# Tickwell — brand kit

*Operations tools for scheduling and timing.* Generated from the SiteShelf listing **Cron Explainer** (Tools); every value below is read from that page, not invented.

> **Cron, in plain English**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Playfair Display |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **dial** glyph on a circle tile. A dial hints at a clock face without turning into a clock cliche. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#17140F` | Page background |
| surface | `#221D15` | Cards, panels, raised areas |
| text | `#F6EFE0` | Body and heading text |
| textMuted | `#C8BB9F` | Secondary text, captions |
| primary | `#E3B04B` | Main actions, links, brand colour |
| secondary | `#111C42` | Highlights, charts, second accent |
| border | `#7A6430` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#111C42` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 16.04:1 | pass | pass |
| Muted text on background | 9.68:1 | pass | pass |
| Primary on background | 9.25:1 | pass | pass |
| Text on primary | 9.90:1 | pass | pass |
| Text on surface | 14.62:1 | pass | pass |

**Colours seen on the page** (share of use): `#17140F` 86.2%, `#2D2514` 4.5%, `#1B2A5A` 2.4%, `#111C42` 2.4%, `#0A122E` 2.4%, `#000000` 0.7%, `#E3B04B` 0.5%, `#4B350D` 0.3%, `#F6EFE0` 0.3%, `#C8BB9F` 0.1%

## Typography

- Headings: **Playfair Display** (weight 700)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@500&family=Inter:wght@400;500;600&family=Playfair+Display:ital,wght@0,700;1,700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Playfair Display | 54 px | 700 | 55.08px | normal |
| Heading / H2 | Inter | 13 px | 600 | normal | 1.3px |
| Body | Inter | 14.5 px | 400 | 21.75px | normal |
| Button | Inter | 13 px | 600 | normal | normal |
| Caption / eyebrow | Inter | 12 px | 600 | normal | 1.92px |

## Shape, space and motion

- Radius: sm 6 px, md 10 px, lg 14 px, pill (fully rounded)
- Shadows: sm: `rgb(185, 154, 75) 0px 0px 0px 2px inset` · md: `rgb(246, 239, 224) 0px 0px 0px 2px` · lg: `rgb(185, 154, 75) 0px 0px 0px 2px inset`
- Spacing: base unit 2 px; common steps 3 px, 4 px, 5 px, 6 px, 8 px, 9 px, 10 px, 14 px, 16 px
- Layout: container 1200 px; breakpoints 640 px, 960 px
- Motion: 600 ms, `cubic-bezier(0.3`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** dry, dependable, clear.

Tickwell is the sort of site a tired sysadmin trusts: terse, accurate and without ornament. It translates cron into plain English and shows the next five runs.

**Do**

- Translate each field into a plain English phrase
- Show times with the zone, local or UTC
- Keep examples to common schedules

**Do not**

- Do not use cute metaphors for schedules
- Avoid jargon without an example
- Never show a run time without a zone

## Taglines

1. Cron, in plain English
2. Know when it will run
3. Read the schedule, not the stars
4. Next five runs, shown plainly
5. Timing tools that keep time

**Boilerplate:** Tickwell is an operations tools site whose Cron Explainer turns five-field expressions into plain English, shows the next five runs and maps how busy each day will be.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Explain |
| secondaryCta | Copy expression |
| success | Expression parsed. Next runs are below. |
| error | That expression has the wrong number of fields. Use five. |
| empty | Type a cron expression to begin. |

---
Source listing key `o:tool-cron-explainer`. Rebuild with `python3 scripts/brand-kit/build.py o:tool-cron-explainer`.
