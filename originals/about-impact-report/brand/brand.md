# Tidewater Trust — brand kit

*River clean-up charity and annual impact report.* Generated from the SiteShelf listing **Impact Report Page** (About Page); every value below is read from that page, not invented.

> **A cleaner river, stretch by stretch**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Plus Jakarta Sans |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **wave** glyph on a circle tile. A simple wave line suits a river charity whose whole job is keeping moving water clean. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F2F7F4` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#12302B` | Body and heading text |
| textMuted | `#4A6660` | Secondary text, captions |
| primary | `#0F7A6E` | Main actions, links, brand colour |
| secondary | `#3A1C08` | Highlights, charts, second accent |
| border | `#D3E2DA` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#3A1C08` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 13.07:1 | pass | pass |
| Muted text on background | 5.77:1 | pass | pass |
| Primary on background | 4.81:1 | pass | pass |
| Text on primary | 5.21:1 | pass | pass |
| Text on surface | 14.16:1 | pass | pass |

**Colours seen on the page** (share of use): `#F2F7F4` 94.6%, `#000000` 2.1%, `#183A2C` 1.0%, `#0F7A6E` 0.5%, `#6CB6A9` 0.3%, `#2A2A5A` 0.3%, `#5E3010` 0.3%, `#8A4A1A` 0.3%, `#3A1C08` 0.3%, `#4A6660` 0.2%

## Typography

- Headings: **Plus Jakarta Sans** (weight 800)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Plus+Jakarta+Sans:wght@800&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Plus Jakarta Sans | 68 px | 800 | 69.36px | normal |
| Heading / H2 | Plus Jakarta Sans | 20 px | 800 | normal | normal |
| Subheading / H3 | Plus Jakarta Sans | 18 px | 800 | normal | normal |
| Body | Inter | 15 px | 400 | 23.25px | normal |
| Button | Inter | 15 px | 500 | normal | normal |
| Caption / eyebrow | Inter | 12 px | 600 | normal | 1.92px |

## Shape, space and motion

- Radius: sm 4 px, md 18 px, lg 24 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 2 px; common steps 2 px, 3 px, 4 px, 6 px, 8 px, 10 px, 12 px, 14 px, 16 px
- Layout: container 1200 px; breakpoints 420 px, 900 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** honest, hopeful, grounded.

Speaks like a volunteer coordinator reporting back to the people who funded the work: plain numbers first, gratitude second, no drama. Every claim is tied to a stretch of river, a month or a pair of hands.

**Do**

- Lead with the number, then say what it meant for the river
- Name the people, places and months behind each figure
- Admit when a goal is behind pace and say what happens next

**Do not**

- Do not use disaster language or guilt to raise money
- Do not round up a result to make it sound bigger
- Do not use charity jargon like stakeholders or capacity building

## Taglines

1. A cleaner river, stretch by stretch
2. Every bag counts. We counted them.
3. Volunteers in, litter out, river better
4. Healthy water starts with ordinary Saturdays
5. Small hands, long riverbanks

**Boilerplate:** Tidewater Trust is a river charity that organises volunteer clean-ups, tracks every kilogram of litter removed and publishes an open annual report on where its funding and effort go.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Join a clean-up |
| secondaryCta | Show data as tables |
| success | Thank you. Your stretch of river is on the list. |
| error | We could not save that. Please try again in a moment. |
| empty | No clean-ups logged for this year yet. |

---
Source listing key `o:about-impact-report`. Rebuild with `python3 scripts/brand-kit/build.py o:about-impact-report`.
