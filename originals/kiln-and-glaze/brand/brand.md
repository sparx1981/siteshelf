# Kiln & Glaze — brand kit

*Ceramics studio making everyday tableware.* Generated from the SiteShelf listing **Kiln & Glaze Hero Section** (Hero Section); every value below is read from that page, not invented.

> **Made slowly, used daily**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Young Serif |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **flame** glyph on a squircle tile. A kiln flame is the heart of the studio and the transformation of clay to pot. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#C7D2D4` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#1D2A2E` | Body and heading text |
| textMuted | `#586568` | Secondary text, captions |
| primary | `#4F8F78` | Main actions, links, brand colour |
| secondary | `#8E341F` | Highlights, charts, second accent |
| border | `#1D2A2E` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#28423B` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 9.56:1 | pass | pass |
| Muted text on background | 3.91:1 | fail | pass |
| Primary on background | 2.46:1 | fail | fail |
| Text on primary | 5.18:1 | pass | pass |
| Text on surface | 14.76:1 | pass | pass |

**Colours seen on the page** (share of use): `#C7D2D4` 84.6%, `#FFFFFF` 10.1%, `#8F7E55` 0.8%, `#4F8F78` 0.7%, `#000000` 0.7%, `#7FB59F` 0.7%, `#B5472F` 0.7%, `#8E341F` 0.7%, `#D9C9A8` 0.7%, `#506028` 0.6%

## Typography

- Headings: **Young Serif** (weight 400)
- Body: **Hanken Grotesk**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Young+Serif&family=Hanken+Grotesk:wght@400;500;600&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Young Serif | 92.2 px | 400 | 94.0032px | -1.8432px |
| Button | Hanken Grotesk | 16 px | 400 | 24px | normal |

## Shape, space and motion

- Radius: sm 0 px, md 0 px, lg 0 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 16 px, 18 px, 20 px, 24 px, 36 px, 40 px, 56 px, 64 px
- Layout: container 1200 px; breakpoints 900 px
- Motion: 350 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** tactile, slow, honest.

Speaks like a potter describing the last firing: patient, concrete and comfortable with imperfection. Glazes and prices are stated plainly and everything is made to be used.

**Do**

- Name the glaze, clay and size
- Describe how a piece feels in the hand
- Use British spelling and pounds

**Do not**

- No luxury or artisanal clichés
- Avoid flawless or perfect
- Do not rush the reader

## Taglines

1. Made slowly, used daily
2. Fired in small batches
3. Glaze you can feel
4. Pots for the kitchen table
5. Good clay, honest glaze

**Boilerplate:** Kiln & Glaze is a ceramics studio making small batches of hand-thrown tableware in speckled stoneware glazes, built for daily use and priced plainly.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Add to basket |
| secondaryCta | See the glazes |
| success | Added to your basket. |
| error | We couldn't add that piece. Please try again. |
| empty | Nothing in your basket yet. Choose a piece. |

---
Source listing key `o:kiln-and-glaze`. Rebuild with `python3 scripts/brand-kit/build.py o:kiln-and-glaze`.
