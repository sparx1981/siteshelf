# Plumb — brand kit

*Unit converter for everyday measures.* Generated from the SiteShelf listing **Multi-Category Unit Converter** (Tools); every value below is read from that page, not invented.

> **Convert it. Check it. Done**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Manrope |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **drop** glyph on a squircle tile. A plumb-bob drop matches the name and the idea of accuracy. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F1F5F4` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#10231F` | Body and heading text |
| textMuted | `#0B4F4A` | Secondary text, captions |
| primary | `#0F766E` | Main actions, links, brand colour |
| secondary | `#7BB4AF` | Highlights, charts, second accent |
| border | `#DFE7E5` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#7BB4AF` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 14.90:1 | pass | pass |
| Muted text on background | 8.56:1 | pass | pass |
| Primary on background | 4.98:1 | pass | pass |
| Text on primary | 5.47:1 | pass | pass |
| Text on surface | 16.38:1 | pass | pass |

**Colours seen on the page** (share of use): `#F1F5F4` 96.4%, `#D9F2EE` 2.8%, `#0F766E` 0.6%, `#10231F` 0.1%, `#5F7771` 0.1%, `#0B4F4A` 0.0%, `#7BB4AF` 0.0%

## Typography

- Headings: **Manrope** (weight 800)
- Body: **Manrope**
- Mono: **IBM Plex Mono**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Manrope:wght@500;700;800&family=IBM+Plex+Mono:wght@500&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Manrope | 24 px | 800 | 36px | normal |
| Heading / H2 | Manrope | 13 px | 700 | 19.5px | 1.04px |
| Button | Manrope | 13.3 px | 400 | normal | normal |
| Mono | IBM Plex Mono | 14 px | 500 | normal | normal |

## Shape, space and motion

- Radius: sm 10 px, md 12 px, lg 20 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 6 px, 8 px, 10 px, 12 px, 14 px, 16 px, 18 px, 24 px, 32 px
- Layout: container 1200 px; breakpoints 480 px
- Motion: 300 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** exact, calm, helpful.

Plumb is straight and level: it converts, shows the result and says nothing else. Words are chosen like units, short and unambiguous.

**Do**

- Show the result before explaining it
- Name units in full on first use
- Offer precision as a plain choice

**Do not**

- Do not add cute commentary to results
- Avoid rounding without saying so
- Never mix unit systems in a sentence

## Taglines

1. Convert it. Check it. Done
2. Every unit, plumb and true
3. Length, weight, heat and speed
4. Quick conversions, no clutter
5. Measure twice, convert once

**Boilerplate:** Plumb is a multi-category unit converter for length, weight, temperature, volume and speed, with two-way live fields, precision control and a quick reference table.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Copy result |
| secondaryCta | Swap units |
| success | Result copied. |
| error | That is not a number. Try digits only. |
| empty | No recent conversions yet. |

---
Source listing key `o:unit-converter-plumb`. Rebuild with `python3 scripts/brand-kit/build.py o:unit-converter-plumb`.
