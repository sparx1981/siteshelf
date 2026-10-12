# STRIDE — brand kit

*Running shoes engineered for distance.* Generated from the SiteShelf listing **Product Detail Page** (E-commerce); every value below is read from that page, not invented.

> **Run light. Run far**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Archivo |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **chevrons** glyph on a squircle tile. Forward-pointing chevrons convey motion and the stripes of a running shoe. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#FAFAF8` | Page background |
| surface | `#FFD9CF` | Cards, panels, raised areas |
| text | `#4A4A44` | Body and heading text |
| textMuted | `#141414` | Secondary text, captions |
| primary | `#FF4B2B` | Main actions, links, brand colour |
| secondary | `#1F6FEB` | Highlights, charts, second accent |
| border | `#D4D4CE` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#71261B` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 8.54:1 | pass | pass |
| Muted text on background | 17.63:1 | pass | pass |
| Primary on background | 3.19:1 | fail | pass |
| Text on primary | 5.89:1 | pass | pass |
| Text on surface | 6.83:1 | pass | pass |

**Colours seen on the page** (share of use): `#FAFAF8` 72.1%, `#FFD9CF` 24.8%, `#D9D9D2` 0.9%, `#FF4B2B` 0.9%, `#141414` 0.6%, `#4A4A44` 0.3%, `#000000` 0.1%, `#1F6FEB` 0.1%, `#1F7A4D` 0.1%, `#2B2B2F` 0.1%

## Typography

- Headings: **Archivo** (weight 800)
- Body: **Archivo**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;700;800&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Archivo | 44 px | 800 | 44px | -0.88px |
| Body | Archivo | 16 px | 400 | 25.6px | normal |
| Button | Archivo | 13 px | 700 | normal | 1.04px |
| Navigation | Archivo | 14 px | 500 | 22.4px | 1.12px |

## Shape, space and motion

- Radius: sm 6 px, md 14 px, lg 20 px, pill (fully rounded)
- Shadows: sm: `rgb(212, 212, 206) 0px 0px 0px 1.5px` · md: `rgb(20, 20, 20) 0px 0px 0px 2.5px` · lg: `rgb(212, 212, 206) 0px 0px 0px 1.5px`
- Spacing: base unit 4 px; common steps 4 px, 6 px, 8 px, 10 px, 12 px, 16 px, 18 px, 22 px, 28 px
- Layout: container 1240 px; breakpoints 900 px
- Motion: 400 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** athletic, punchy, direct.

A running-shop coach: energetic, brief and specific about foam and fit. Short imperatives, uppercase headings and honest specs.

**Do**

- Use short, active phrases and runner's vocabulary
- State weight, drop and fit as numbers
- Put sizes and stock status up front

**Do not**

- Hype claims like fastest ever
- Lengthy technical paragraphs
- Vague fit advice

## Taglines

1. Run light. Run far
2. Built for every mile
3. Featherweight, responsive, ready
4. Lace up and go
5. Fast feet start here

**Boilerplate:** STRIDE is a running footwear brand making featherweight road shoes with responsive foam midsoles and breathable engineered mesh uppers.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Add to cart |
| secondaryCta | View details |
| success | Added to your cart. Go run |
| error | That size is sold out. Pick another |
| empty | Your cart is empty |

---
Source listing key `o:product-page`. Rebuild with `python3 scripts/brand-kit/build.py o:product-page`.
