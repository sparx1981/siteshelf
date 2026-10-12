# CoreOS — brand kit

*Construction materials supplier.* Generated from the SiteShelf listing **CoreOS** (Build Strong, Build Smart); every value below is read from that page, not invented.

> **Build strong, build smart**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **cube** glyph on a squircle tile. A solid cube evokes blocks and building materials. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#000000` | Page background |
| surface | `#3A3F47` | Cards, panels, raised areas |
| text | `#FFFFFF` | Body and heading text |
| textMuted | `#A6A6A6` | Secondary text, captions |
| primary | `#FFFFFF` | Main actions, links, brand colour |
| secondary | `#8C8C8C` | Highlights, charts, second accent |
| border | `#242424` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#8C8C8C` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 21.00:1 | pass | pass |
| Muted text on background | 8.63:1 | pass | pass |
| Primary on background | 21.00:1 | pass | pass |
| Text on primary | 19.64:1 | pass | pass |
| Text on surface | 10.60:1 | pass | pass |

**Colours seen on the page** (share of use): `#000000` 84.7%, `#3A3F47` 15.1%, `#FFFFFF` 0.2%, `#A6A6A6` 0.0%, `#8C8C8C` 0.0%, `#242424` 0.0%

## Typography

- Headings: **Inter** (weight 700)
- Body: **Inter**

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Inter | 62 px | 700 | 66.96px | -1.24px |
| Body | Inter | 15 px | 300 | 24px | normal |
| Navigation | Inter | 14 px | 400 | normal | normal |

## Shape, space and motion

- Radius: sm 0 px, md 0 px, lg 0 px
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 4 px, 8 px, 20 px, 24 px, 28 px, 32 px
- Layout: container 1200 px; breakpoints 900 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** solid, straightforward, dependable.

Sounds like a builder's merchant on the phone: direct, practical and on time. It talks about foundation to finish, quantities and delivery, and doesn't waste a sentence.

**Do**

- Name materials and quantities plainly
- Use building trade terms correctly
- Say when it can be delivered

**Do not**

- Do not use tech jargon
- Do not make vague quality claims
- Do not use slang

## Taglines

1. Build strong, build smart
2. From foundation to finish
3. Materials that carry the load
4. Good stock, delivered on time
5. Strong starts for every project

**Boilerplate:** CoreOS supplies high-quality construction materials for every project, from foundation to finish, with clear pricing, dependable stock and delivery for builders and contractors.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Request a quote |
| secondaryCta | View products |
| success | Quote requested. We'll reply today. |
| error | We couldn't send your request. Please try again. |
| empty | No products match your search. |

---
Source listing key `s:6a392bcd8ac91f6202e0804f`. Rebuild with `python3 scripts/brand-kit/build.py s:6a392bcd8ac91f6202e0804f`.
