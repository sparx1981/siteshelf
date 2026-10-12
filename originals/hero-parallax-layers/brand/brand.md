# Quiet Side Guides — brand kit

*Guided alpine routes for people who like it calm.* Generated from the SiteShelf listing **Parallax Layers Hero** (Hero Section); every value below is read from that page, not invented.

> **Beyond the ridge**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Cormorant Garamond |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **peak** glyph on a circle tile. A simple peak outlines the ridgeline and a deliberately unfussy mountain brand. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F7F2EA` | Page background |
| surface | `#5A5A8A` | Cards, panels, raised areas |
| text | `#241F1A` | Body and heading text |
| textMuted | `#6E6963` | Secondary text, captions |
| primary | `#F4A261` | Main actions, links, brand colour |
| secondary | `#D9728A` | Highlights, charts, second accent |
| border | `#D9D4CD` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#6D4A31` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 14.65:1 | pass | pass |
| Muted text on background | 4.88:1 | pass | pass |
| Primary on background | 1.85:1 | fail | fail |
| Text on primary | 9.53:1 | pass | pass |
| Text on surface | 2.54:1 | fail | fail |

**Colours seen on the page** (share of use): `#F7F2EA` 36.5%, `#5A5A8A` 12.2%, `#0F1226` 11.1%, `#46467A` 10.6%, `#31345F` 9.0%, `#1F2442` 6.9%, `#FFFFFF` 6.9%, `#D9728A` 3.3%, `#F4A261` 3.3%, `#FFE6A8` 0.2%

## Typography

- Headings: **Cormorant Garamond** (weight 700)
- Body: **Karla**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@700&family=Karla:wght@400;600&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Cormorant Garamond | 120 px | 700 | 114px | normal |
| Heading / H2 | Cormorant Garamond | 44 px | 700 | normal | normal |
| Body | Karla | 20 px | 400 | normal | normal |
| Button | Karla | 16 px | 600 | normal | normal |

## Shape, space and motion

- Radius: sm 50 px, md 50 px, lg 50 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 2 px; common steps 14 px, 18 px, 20 px, 24 px, 26 px, 30 px, 90 px
- Layout: container 1200 px; breakpoints 560 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** steady, outdoorsy, calm.

Walks at the pace of a mountain guide who points out the view and then says nothing: unhurried, grounded and sparing with adjectives. The landscape provides the drama.

**Do**

- Describe routes by pace and altitude, not adrenaline
- Keep sentences sparse, like a quiet trail
- Name conditions honestly

**Do not**

- Extreme sports energy
- Conquer and summit-bagging language
- Packing every line with adjectives

## Taglines

1. Beyond the ridge
2. Routes for every pace
3. The quiet side of the mountain
4. Walk where the crowds don't
5. Slow ground, big sky

**Boilerplate:** Quiet Side Guides leads alpine routes for people who prefer the quiet side of the mountain, with plans matched to pace and experience.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Plan your route |
| secondaryCta | See conditions |
| success | Route saved. We'll check the weather |
| error | We couldn't load that route. Try again |
| empty | No routes at this pace yet |

---
Source listing key `o:hero-parallax-layers`. Rebuild with `python3 scripts/brand-kit/build.py o:hero-parallax-layers`.
