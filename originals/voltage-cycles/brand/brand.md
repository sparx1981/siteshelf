# Voltage Cycles — brand kit

*Electric commuter bikes with long range.* Generated from the SiteShelf listing **Voltage Cycles Product Hero** (Hero Section); every value below is read from that page, not invented.

> **Go further on one charge**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Archivo |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **bolt** glyph on a squircle tile. A lightning bolt says electric power and fits the lime accent. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F3F3EE` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#111111` | Body and heading text |
| textMuted | `#60605E` | Secondary text, captions |
| primary | `#C6FF1A` | Main actions, links, brand colour |
| secondary | `#6D8C0E` | Highlights, charts, second accent |
| border | `#111111` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#6D8C0E` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 16.96:1 | pass | pass |
| Muted text on background | 5.66:1 | pass | pass |
| Primary on background | 1.06:1 | fail | fail |
| Text on primary | 16.58:1 | pass | pass |
| Text on surface | 18.88:1 | pass | pass |

**Colours seen on the page** (share of use): `#F3F3EE` 83.5%, `#FFFFFF` 9.6%, `#C6FF1A` 6.0%, `#E2E2DA` 0.5%, `#111111` 0.3%, `#000000` 0.2%, `#60605E` 0.0%, `#6D8C0E` 0.0%

## Typography

- Headings: **Archivo** (weight 800)
- Body: **Archivo**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Archivo:wght@400;600;800&family=Anton&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Archivo | 57.6 px | 800 | 60.48px | normal |
| Body | Archivo | 18 px | 400 | 27px | normal |

## Shape, space and motion

- Radius: sm 0 px, md 0 px, lg 0 px
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 8 px, 12 px, 18 px, 20 px, 22 px, 24 px, 32 px, 40 px, 48 px
- Layout: container 1200 px; breakpoints 800 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** bold, energetic, matter-of-fact.

Voltage Cycles speaks the way a good bike shop mechanic sells: big on range, honest about weight and charge time. Specs come as numbers with units and a punchy headline.

**Do**

- Pair every claim with a figure and a unit
- Keep headlines to six words or fewer
- Use active verbs like go, charge and ride

**Do not**

- Use vague words like 'powerful' or 'smooth'
- Exaggerate the range
- Hide the weight

## Taglines

1. Go further on one charge
2. 120 km without a worry
3. Commute loud, ride quiet
4. Charge once, ride the week
5. Light enough to carry

**Boilerplate:** Voltage Cycles builds electric commuter bikes such as the V2, with 120 km of real-world range, a four-hour full charge and a 16.8 kg frame.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | See the V2 |
| secondaryCta | Compare models |
| success | Added to your wishlist. |
| error | We could not save that. Please try again. |
| empty | No bikes selected yet. |

---
Source listing key `o:voltage-cycles`. Rebuild with `python3 scripts/brand-kit/build.py o:voltage-cycles`.
