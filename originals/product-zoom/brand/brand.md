# Larkspur & Thread — brand kit

*Boutique for considered woollen clothing.* Generated from the SiteShelf listing **Product Gallery with Zoom** (E-commerce); every value below is read from that page, not invented.

> **Wool, cut with care**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Cormorant Garamond |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **sprout** glyph on a squircle tile. A sprig of larkspur gives the label a natural, quiet emblem. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#FFFFFF` | Page background |
| surface | `#F3F1ED` | Cards, panels, raised areas |
| text | `#1B1A18` | Body and heading text |
| textMuted | `#75706A` | Secondary text, captions |
| primary | `#1E5A45` | Main actions, links, brand colour |
| secondary | `#B3562F` | Highlights, charts, second accent |
| border | `#E4E0D8` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#A0BAB1` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 17.39:1 | pass | pass |
| Muted text on background | 4.90:1 | pass | pass |
| Primary on background | 8.07:1 | pass | pass |
| Text on primary | 8.07:1 | pass | pass |
| Text on surface | 15.42:1 | pass | pass |

**Colours seen on the page** (share of use): `#FFFFFF` 76.1%, `#F3F1ED` 20.6%, `#1E5A45` 1.2%, `#5F7A4A` 1.0%, `#4A6139` 0.3%, `#000000` 0.2%, `#3A4D2D` 0.2%, `#1B1A18` 0.2%, `#2C3550` 0.1%, `#B3562F` 0.1%

## Typography

- Headings: **Cormorant Garamond** (weight 600)
- Body: **Jost**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Jost:wght@400;500;600&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Cormorant Garamond | 52 px | 600 | 54.6px | -0.52px |
| Subheading / H3 | Jost | 16 px | 400 | 24.8px | normal |
| Button | Jost | 13.3 px | 500 | normal | normal |

## Shape, space and motion

- Radius: sm 4 px, md 12 px, lg 16 px, pill (fully rounded)
- Shadows: sm: `rgb(228, 224, 216) 0px 0px 0px 1px` · md: `rgb(27, 26, 24) 0px 0px 0px 2px` · lg: `rgb(228, 224, 216) 0px 0px 0px 1px`
- Spacing: base unit 4 px; common steps 4 px, 6 px, 8 px, 10 px, 12 px, 14 px, 16 px, 18 px, 22 px
- Layout: container 1180 px; breakpoints 900 px
- Motion: 300 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** refined, quiet, tactile.

Speaks like a tailor describing cloth: precise about fabric and fit, unhurried, never shouty. Product copy names the weave before the feeling.

**Do**

- Describe material, weight and origin first
- Use the product's name in full
- Keep sizing notes factual

**Do not**

- No fast-fashion urgency
- No exaggerated fabric claims
- No exclamation marks

## Taglines

1. Wool, cut with care
2. Made to be worn for years
3. Quiet clothes, well made
4. Thread, wool and patience
5. Clothing worth keeping

**Boilerplate:** Larkspur & Thread is a small clothing label selling a handful of well-made wool pieces, including the Harbour Wool Overshirt, in four colourways.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Add to bag |
| secondaryCta | Size guide |
| success | Added to your bag |
| error | Please choose a size first |
| empty | Your bag is empty |

---
Source listing key `o:product-zoom`. Rebuild with `python3 scripts/brand-kit/build.py o:product-zoom`.
