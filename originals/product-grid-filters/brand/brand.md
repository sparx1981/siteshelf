# Hearthstone Home — brand kit

*Homeware shop with a bright, friendly feel.* Generated from the SiteShelf listing **Product Grid with Filters & Cart** (E-commerce); every value below is read from that page, not invented.

> **Homeware for lived-in homes**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Epilogue |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **home** glyph on a circle tile. A simple house shape says homeware directly and warmly. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#FFFFFF` | Page background |
| surface | `#F6F4EF` | Cards, panels, raised areas |
| text | `#1D1B19` | Body and heading text |
| textMuted | `#6F6A62` | Secondary text, captions |
| primary | `#EF5B3F` | Main actions, links, brand colour |
| secondary | `#F2C4C4` | Highlights, charts, second accent |
| border | `#E7E3DA` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#6B2D23` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 17.17:1 | pass | pass |
| Muted text on background | 5.37:1 | pass | pass |
| Primary on background | 3.37:1 | fail | pass |
| Text on primary | 5.84:1 | pass | pass |
| Text on surface | 15.62:1 | pass | pass |

**Colours seen on the page** (share of use): `#FFFFFF` 80.2%, `#E6D3B1` 2.8%, `#A9C4A3` 2.8%, `#D98E6A` 2.8%, `#32363F` 2.8%, `#A8CBE3` 2.8%, `#F2C4C4` 2.8%, `#1D1B19` 2.7%, `#EF5B3F` 0.1%, `#F5A623` 0.0%

## Typography

- Headings: **Epilogue** (weight 800)
- Body: **Epilogue**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Epilogue:wght@500;700;800&family=Inter:wght@400;500;600&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Epilogue | 38 px | 800 | normal | normal |
| Heading / H2 | Epilogue | 14 px | 800 | normal | 0.84px |
| Subheading / H3 | Epilogue | 16 px | 700 | 20px | normal |
| Button | Epilogue | 14 px | 700 | normal | normal |

## Shape, space and motion

- Radius: sm 10 px, md 12 px, lg 18 px, pill (fully rounded)
- Shadows: sm: `rgb(231, 227, 218) 0px 0px 0px 1px` · md: `rgb(231, 227, 218) 0px 0px 0px 1px` · lg: `rgb(231, 227, 218) 0px 0px 0px 1px`
- Spacing: base unit 2 px; common steps 3 px, 4 px, 6 px, 8 px, 10 px, 14 px, 16 px, 18 px, 22 px
- Layout: container 1200 px; breakpoints 520 px, 900 px
- Motion: 400 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** bright, helpful, homely.

Hearthstone Home sounds like a shop assistant who loves a nice mug and will tell you honestly if the shelf is too small. Product copy is plain, specific about size and colour, and never over-sold.

**Do**

- Give size, colour and material in the first line
- Write like a shop-floor recommendation
- Use warm, practical verbs: fill, hold, brighten

**Do not**

- Do not use 'must-have' or 'obsessed'
- Avoid fake urgency
- Never hide delivery costs

## Taglines

1. Homeware for lived-in homes
2. Find the thing that fits
3. Small things, well chosen
4. Make a house feel like yours
5. Bright ideas for every room

**Boilerplate:** Hearthstone Home is an online homeware shop selling honestly described cushions, ceramics, lighting and storage, with free returns and clear delivery costs.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Add to cart |
| secondaryCta | Quick view |
| success | Added to your cart. |
| error | Could not add that item. Please try again. |
| empty | No products match. Clear a filter to see more. |

---
Source listing key `o:product-grid-filters`. Rebuild with `python3 scripts/brand-kit/build.py o:product-grid-filters`.
