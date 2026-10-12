# Daybreak Coffee — brand kit

*Single-origin roaster with a brew calculator.* Generated from the SiteShelf listing **Daybreak Coffee Brew Calculator Hero** (Hero Section); every value below is read from that page, not invented.

> **Good mornings start slowly**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Fraunces |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **drop** glyph on a squircle tile. A drop stands for a single cup and the water measured into every brew. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#2A1810` | Page background |
| surface | `#38231A` | Cards, panels, raised areas |
| text | `#F5E9D8` | Body and heading text |
| textMuted | `#E8A34A` | Secondary text, captions |
| primary | `#E8A34A` | Main actions, links, brand colour |
| secondary | `#F2CC9B` | Highlights, charts, second accent |
| border | `#E8A34A` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#684B28` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 14.18:1 | pass | pass |
| Muted text on background | 7.90:1 | pass | pass |
| Primary on background | 7.90:1 | pass | pass |
| Text on primary | 9.14:1 | pass | pass |
| Text on surface | 12.31:1 | pass | pass |

**Colours seen on the page** (share of use): `#2A1810` 96.8%, `#F5E9D8` 2.2%, `#E8A34A` 1.0%, `#F2CC9B` 0.0%, `#0B0B0F` 0.0%, `#684B28` 0.0%

## Typography

- Headings: **Fraunces** (weight 300)
- Body: **Albert Sans**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,600;1,9..144,300;1,9..144,600&family=Albert+Sans:wght@400;500;600&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Fraunces | 86.4 px | 300 | 88.128px | -1.728px |
| Body | Albert Sans | 18 px | 400 | 27px | normal |
| Button | Albert Sans | 15 px | 600 | normal | normal |
| Caption / eyebrow | Albert Sans | 14 px | 400 | 21px | normal |

## Shape, space and motion

- Radius: sm 10 px, md 12 px, lg 20 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 6 px, 10 px, 14 px, 16 px, 20 px, 22 px, 24 px, 28 px, 30 px
- Layout: container 1200 px; breakpoints 960 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** slow, craft, warm.

Sounds like a roaster pouring you a cup while explaining the ratio: unhurried, knowledgeable and generous. Detail about grams and seconds is delivered with a smile, not a lecture.

**Do**

- Give exact grams, water and timings
- Use brewing terms such as bloom, dose and pour
- Keep the morning mood: slow, steady, kind

**Do not**

- Coffee snob condescension
- Caffeine-fuelled hustle talk
- Rounded numbers that hurt the brew

## Taglines

1. Good mornings start slowly
2. Roasted twice a week
3. Brew it properly, taste the difference
4. One cup at a time
5. Beans first, then patience

**Boilerplate:** Daybreak Coffee is a small roaster selling single-origin beans roasted twice a week, with a brew-ratio calculator that sets dose, water and timer for each method.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Start brew |
| secondaryCta | Pick a method |
| success | Brew done. Enjoy that first sip |
| error | Timer stalled. Start the brew again |
| empty | No cups set. Choose how many |

---
Source listing key `o:daybreak-coffee`. Rebuild with `python3 scripts/brand-kit/build.py o:daybreak-coffee`.
