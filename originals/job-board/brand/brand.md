# Hirewell — brand kit

*Job board for people who want work they like.* Generated from the SiteShelf listing **Job Board** (App UI); every value below is read from that page, not invented.

> **Find work you will like**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Plus Jakarta Sans |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **bag** glyph on a squircle tile. A briefcase is the plain, trusted symbol for work and hiring. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F5F7FA` | Page background |
| surface | `#D9F4EF` | Cards, panels, raised areas |
| text | `#172033` | Body and heading text |
| textMuted | `#5D6B82` | Secondary text, captions |
| primary | `#0D9488` | Main actions, links, brand colour |
| secondary | `#172033` | Highlights, charts, second accent |
| border | `#E3E8EF` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#172033` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 15.16:1 | pass | pass |
| Muted text on background | 5.03:1 | pass | pass |
| Primary on background | 3.49:1 | fail | pass |
| Text on primary | 5.25:1 | pass | pass |
| Text on surface | 14.05:1 | pass | pass |

**Colours seen on the page** (share of use): `#F5F7FA` 97.8%, `#D9F4EF` 0.7%, `#0D9488` 0.4%, `#172033` 0.4%, `#5D6B82` 0.2%, `#6366F1` 0.2%, `#3B4A63` 0.1%, `#E11D48` 0.1%, `#D97706` 0.1%, `#0284C7` 0.1%

## Typography

- Headings: **Plus Jakarta Sans** (weight 800)
- Body: **Plus Jakarta Sans**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Plus Jakarta Sans | 40 px | 800 | 44px | -1.2px |
| Heading / H2 | Plus Jakarta Sans | 17 px | 700 | normal | normal |
| Subheading / H3 | Plus Jakarta Sans | 13 px | 700 | normal | 0.78px |
| Button | Plus Jakarta Sans | 15 px | 700 | normal | normal |

## Shape, space and motion

- Radius: sm 8 px, md 12 px, lg 14 px, pill (fully rounded)
- Shadows: sm: `rgba(23, 32, 51, 0.3) 0px 10px 30px -18px` · md: `rgba(23, 32, 51, 0.3) 0px 10px 30px -18px` · lg: `rgba(23, 32, 51, 0.3) 0px 10px 30px -18px`
- Spacing: base unit 2 px; common steps 2 px, 3 px, 5 px, 6 px, 8 px, 10 px, 12 px, 16 px, 18 px
- Layout: container 1200 px; breakpoints 560 px, 900 px
- Motion: 150 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** encouraging, candid, practical.

Hirewell speaks like a friendly career coach who actually reads the job ads. It shows salary, location and type up front, and treats job-hunting as a calm search, not a race.

**Do**

- Show pay, place and contract type in every listing
- Write 'you' to the job seeker, directly
- Keep titles exactly as employers wrote them

**Do not**

- Do not use hype like 'dream job' or 'crush it'
- Avoid hiding salary behind 'competitive'
- Never pad a listing with perks that are not real

## Taglines

1. Find work you will like
2. Real roles, real salaries
3. Search less, apply better
4. Jobs worth a second look
5. A kinder way to job-hunt

**Boilerplate:** Hirewell is a job board that lists salary, location and contract details on every role, with saved shortlists and filters built for people who want work they will like.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Search |
| secondaryCta | Apply now |
| success | Job saved to your shortlist. |
| error | We could not load jobs. Please try again. |
| empty | No jobs match yet. Clear a filter or try another keyword. |

---
Source listing key `o:job-board`. Rebuild with `python3 scripts/brand-kit/build.py o:job-board`.
