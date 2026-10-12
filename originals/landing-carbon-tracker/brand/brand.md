# Tern — brand kit

*Friendly carbon footprint tracker.* Generated from the SiteShelf listing **Tern Carbon Tracker** (Landing Page); every value below is read from that page, not invented.

> **Know your footprint. Shrink it, kindly**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Fraunces |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **sprout** glyph on a squircle tile. A green sprout shows growth and small, kind progress. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#EEF4EA` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#17331F` | Body and heading text |
| textMuted | `#4C6A55` | Secondary text, captions |
| primary | `#F2B544` | Main actions, links, brand colour |
| secondary | `#17331F` | Highlights, charts, second accent |
| border | `#D6E3CF` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#17331F` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 12.27:1 | pass | pass |
| Muted text on background | 5.36:1 | pass | pass |
| Primary on background | 1.64:1 | fail | fail |
| Text on primary | 10.73:1 | pass | pass |
| Text on surface | 13.73:1 | pass | pass |

**Colours seen on the page** (share of use): `#EEF4EA` 62.9%, `#FFFFFF` 26.5%, `#17331F` 9.6%, `#F2B544` 0.5%, `#E1ECDA` 0.3%, `#4C6A55` 0.2%, `#2F9E5B` 0.0%, `#000000` 0.0%

## Typography

- Headings: **Fraunces** (weight 600)
- Body: **DM Sans**
- Google Fonts: `https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Fraunces:ital,wght@0,600;1,600&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Fraunces | 78 px | 600 | 81.12px | -1.56px |
| Heading / H2 | Fraunces | 46 px | 600 | 50.6px | normal |
| Body | DM Sans | 18 px | 400 | 28.8px | normal |
| Button | DM Sans | 15 px | 700 | normal | normal |
| Navigation | DM Sans | 15 px | 500 | 24px | normal |

## Shape, space and motion

- Radius: sm 12 px, md 20 px, lg 26 px, pill (fully rounded)
- Shadows: sm: `rgba(23, 51, 31, 0.5) 0px 30px 70px -40px` · md: `rgba(23, 51, 31, 0.5) 0px 30px 70px -40px` · lg: `rgba(23, 51, 31, 0.5) 0px 30px 70px -40px`
- Spacing: base unit 4 px; common steps 6 px, 8 px, 10 px, 14 px, 16 px, 18 px, 20 px, 22 px, 24 px
- Layout: container 1060 px; breakpoints 860 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** kind, hopeful, clear.

Sounds like an encouraging friend with a calculator: turns guilt into small wins and shows the numbers plainly. Savings are celebrated softly.

**Do**

- Give one number, then one swap to shrink it
- Frame choices as small wins
- Use tonnes and weekly habits in plain language

**Do not**

- No doom or guilt
- No lecturing about lifestyle
- No claims that sound like greenwashing

## Taglines

1. Know your footprint. Shrink it, kindly
2. Small swaps. Big year
3. One clear number, one next step
4. Climate action, kept friendly
5. Lighter living, one swap at a time

**Boilerplate:** Tern is a carbon footprint app that turns daily habits into one clear number and then suggests the small swaps that save the most each year.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Get the app |
| secondaryCta | See the swaps |
| success | Swap added, you just saved 0.3 t a year |
| error | We could not update your footprint, try again |
| empty | Move a slider to see your footprint |

---
Source listing key `o:landing-carbon-tracker`. Rebuild with `python3 scripts/brand-kit/build.py o:landing-carbon-tracker`.
