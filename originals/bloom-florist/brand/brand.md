# Bloom & Stem — brand kit

*Seasonal bouquets from local growers.* Generated from the SiteShelf listing **Bloom & Stem Florist Hero** (Hero Section); every value below is read from that page, not invented.

> **Flowers that bloom on arrival**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Cormorant Garamond |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **sprout** glyph on a squircle tile. A sprout reflects young stems and the growers who raise them nearby. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#FBE9E4` | Page background |
| surface | `#D6456B` | Cards, panels, raised areas |
| text | `#3A1F2B` | Body and heading text |
| textMuted | `#7E666C` | Secondary text, captions |
| primary | `#D6456B` | Main actions, links, brand colour |
| secondary | `#3A1F2B` | Highlights, charts, second accent |
| border | `#3A1F2B` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#3A1F2B` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 12.67:1 | pass | pass |
| Muted text on background | 4.46:1 | fail | pass |
| Primary on background | 3.63:1 | fail | pass |
| Text on primary | 4.61:1 | pass | pass |
| Text on surface | 3.49:1 | fail | pass |

**Colours seen on the page** (share of use): `#FBE9E4` 99.0%, `#D6456B` 0.4%, `#3A1F2B` 0.2%, `#7A5CC4` 0.1%, `#E0891A` 0.1%, `#3F8A62` 0.1%, `#FFFFFF` 0.0%, `#7E666C` 0.0%, `#0B0B0F` 0.0%

## Typography

- Headings: **Cormorant Garamond** (weight 500)
- Body: **Mulish**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&family=Mulish:wght@400;600;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Cormorant Garamond | 115.2 px | 500 | 109.44px | -2.304px |
| Body | Mulish | 18 px | 400 | 28.8px | normal |

## Shape, space and motion

- Radius: sm 0 px, md 0 px, lg 0 px, pill (fully rounded)
- Shadows: sm: `rgb(251, 233, 228) 0px 0px 0px 3px inset` · md: `rgb(251, 233, 228) 0px 0px 0px 3px inset` · lg: `rgb(251, 233, 228) 0px 0px 0px 3px inset`
- Spacing: base unit 4 px; common steps 12 px, 14 px, 16 px, 20 px, 24 px, 30 px, 32 px, 56 px, 120 px
- Layout: container 900 px; breakpoints 700 px
- Motion: 600 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** fresh, tender, local.

Bloom & Stem speaks in the voice of a florist who knows the growers by name. It is soft, seasonal and specific about where and when each stem was cut.

**Do**

- Name the flower, the grower and the morning it was cut
- Write in the present tense, as if the buds are open now
- Keep it short enough to read at the counter

**Do not**

- Do not use 'stunning' or 'gorgeous'
- Do not promise more than a bouquet can deliver
- Do not hide delivery times

## Taglines

1. Flowers that bloom on arrival
2. Hand-tied this morning, at your door tonight
3. Grown within thirty miles of you
4. Seasonal stems, no stale roses
5. Say it with what is in season

**Boilerplate:** Bloom & Stem is a florist delivering seasonal bouquets from growers within thirty miles, hand-tied the same morning and delivered by dinner.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Choose a bouquet |
| secondaryCta | See what is in season |
| success | Your bouquet is on its way. It will be at your door by dinner. |
| error | We could not take that order. Please check your postcode. |
| empty | No stems picked yet. Choose a bouquet to begin. |

---
Source listing key `o:bloom-florist`. Rebuild with `python3 scripts/brand-kit/build.py o:bloom-florist`.
