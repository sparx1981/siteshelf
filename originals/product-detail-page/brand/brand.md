# Hollow & Hearth — brand kit

*Ceramics and lighting for lived-in homes.* Generated from the SiteShelf listing **Product Detail Page** (E-commerce); every value below is read from that page, not invented.

> **Light for lived-in rooms**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Fraunces |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **home** glyph on a squircle tile. A simple house shape expresses both hearth and the lived-in rooms the products light. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#FAF8F5` | Page background |
| surface | `#F2EDE4` | Cards, panels, raised areas |
| text | `#75706A` | Body and heading text |
| textMuted | `#1C1A17` | Secondary text, captions |
| primary | `#B8532E` | Main actions, links, brand colour |
| secondary | `#E3CFAE` | Highlights, charts, second accent |
| border | `#E6E1D9` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#E3CFAE` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 4.63:1 | pass | pass |
| Muted text on background | 16.38:1 | pass | pass |
| Primary on background | 4.59:1 | pass | pass |
| Text on primary | 4.87:1 | pass | pass |
| Text on surface | 4.21:1 | fail | pass |

**Colours seen on the page** (share of use): `#FAF8F5` 88.0%, `#ECE6DC` 5.0%, `#E3CFAE` 3.1%, `#6E5A3D` 1.8%, `#1C1A17` 1.4%, `#75706A` 0.2%, `#8A9A6A` 0.1%, `#C4673F` 0.1%, `#3A4052` 0.1%, `#000000` 0.0%

## Typography

- Headings: **Fraunces** (weight 500)
- Body: **Hanken Grotesk**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Fraunces:wght@500;600&family=Hanken+Grotesk:wght@400;500;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Fraunces | 40 px | 500 | 44px | normal |
| Body | Hanken Grotesk | 15 px | 400 | 23.25px | normal |
| Button | Hanken Grotesk | 13.3 px | 400 | normal | normal |
| Caption / eyebrow | Hanken Grotesk | 12.5 px | 400 | 19.375px | normal |

## Shape, space and motion

- Radius: sm 12 px, md 46 px, lg 48 px, pill (fully rounded)
- Shadows: sm: `rgb(230, 225, 217) 0px 0px 0px 1.5px` · md: `rgba(0, 0, 0, 0.267) -10px 0px 18px 0px inset` · lg: `rgba(0, 0, 0, 0.133) -14px 0px 24px 0px inset, rgba(255, 228, 168, 0.314) 0px 0px 70px 0px`
- Spacing: base unit 4 px; common steps 4 px, 6 px, 8 px, 10 px, 12 px, 16 px, 18 px, 20 px, 24 px
- Layout: container 1100 px; breakpoints 900 px
- Motion: 300 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** warm, tactile, considered.

Hollow & Hearth sounds like an honest shopkeeper who loves handmade things: warm, specific and quietly proud. It describes materials, size and feel before price.

**Do**

- Name the material and the maker's method
- Give measurements in plain units
- Describe light and warmth, not trends

**Do not**

- Use luxury clichés like 'curated'
- Overstate scarcity
- Hide delivery details

## Taglines

1. Light for lived-in rooms
2. Hand-thrown, softly lit
3. Made slow, meant to stay
4. A warm glow for any corner
5. Ceramics with a gentle shine

**Boilerplate:** Hollow & Hearth is a small home store selling hand-thrown ceramic lamps and tableware with linen shades, made to give rooms a warm, even glow.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Add to cart |
| secondaryCta | View details |
| success | Added to your cart. |
| error | Could not add that item. Please try again. |
| empty | Your cart is empty. |

---
Source listing key `o:product-detail-page`. Rebuild with `python3 scripts/brand-kit/build.py o:product-detail-page`.
