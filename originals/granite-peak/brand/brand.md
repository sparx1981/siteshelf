# Granite Peak — brand kit

*Waterproof outdoor shells and packs, repaired for life.* Generated from the SiteShelf listing **Granite Peak Parallax Hero** (Hero Section); every value below is read from that page, not invented.

> **Climb the long way**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter Bold (stand-in for Familjen Grotesk) |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **peak** glyph on a squircle tile. A peak mark is the obvious shorthand, drawn simply enough to sit on a jacket sleeve. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#CFE0E6` | Page background |
| surface | `#F6B98A` | Cards, panels, raised areas |
| text | `#12202B` | Body and heading text |
| textMuted | `#54636C` | Secondary text, captions |
| primary | `#F6B98A` | Main actions, links, brand colour |
| secondary | `#1E2D42` | Highlights, charts, second accent |
| border | `#12202B` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#1E2D42` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 12.20:1 | pass | pass |
| Muted text on background | 4.58:1 | pass | pass |
| Primary on background | 1.26:1 | fail | fail |
| Text on primary | 11.44:1 | pass | pass |
| Text on surface | 9.65:1 | pass | pass |

**Colours seen on the page** (share of use): `#CFE0E6` 72.1%, `#F6B98A` 10.3%, `#F7DCC0` 10.3%, `#000000` 3.3%, `#FFFFFF` 1.4%, `#12202B` 0.6%, `#B7A3B3` 0.5%, `#8C7F9E` 0.5%, `#5F6B88` 0.5%, `#3C4D68` 0.5%

## Typography

- Headings: **Familjen Grotesk** (weight 700)
- Body: **Outfit**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Familjen+Grotesk:wght@500;700&family=Outfit:wght@300;400;500&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Familjen Grotesk | 129.6 px | 700 | 119.232px | -4.536px |
| Body | Outfit | 20 px | 300 | 30px | normal |
| Button | Outfit | 17 px | 500 | normal | normal |

## Shape, space and motion

- Radius: sm 0 px, md 0 px, lg 0 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 10 px, 20 px, 24 px, 28 px, 34 px, 56 px
- Layout: container 900 px; breakpoints 700 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** rugged, dry-witted, honest.

Granite Peak speaks like an experienced guide: short sentences, physical detail and no glorifying of suffering. It promises repair and warmth, then gets out of the way.

**Do**

- Name weights, fabrics and seams exactly
- Tell people how to repair it, not just buy it
- Keep adventure talk modest and practical

**Do not**

- Do not use conquer or crush mountain metaphors
- Avoid superlatives like ultimate
- Never sell fear of the weather

## Taglines

1. Climb the long way
2. Shells that outlast the weather
3. Repaired for life, not replaced
4. Packed light, built to last
5. Wet days, dry shoulders

**Boilerplate:** Granite Peak makes waterproof shells and packs for long days in the hills and offers lifetime repair, so every piece is kept in use for as long as possible.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Shop the shell |
| secondaryCta | Book a repair |
| success | Repair booked. We will send a label. |
| error | Could not add that. Please try again. |
| empty | Nothing in the shop in that size. |

---
Source listing key `o:granite-peak`. Rebuild with `python3 scripts/brand-kit/build.py o:granite-peak`.
