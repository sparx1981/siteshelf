# Atlas Cartographers — brand kit

*Hand-drawn survey charts on cotton paper.* Generated from the SiteShelf listing **Atlas Cartographers Editorial Hero** (Hero Section); every value below is read from that page, not invented.

> **Maps that remember the coast**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Cormorant Garamond |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **compass** glyph on a circle tile. A compass rose is the unmistakable emblem of chart makers and matches the page's turning needle. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#EFE3C8` | Page background |
| surface | `#E1D5BC` | Cards, panels, raised areas |
| text | `#3B2A1A` | Body and heading text |
| textMuted | `#7A6B57` | Secondary text, captions |
| primary | `#3B2A1A` | Main actions, links, brand colour |
| secondary | `#E6D3A8` | Highlights, charts, second accent |
| border | `#3B2A1A` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#E6D3A8` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 10.76:1 | pass | pass |
| Muted text on background | 4.05:1 | fail | pass |
| Primary on background | 10.76:1 | pass | pass |
| Text on primary | 13.71:1 | pass | pass |
| Text on surface | 9.43:1 | pass | pass |

**Colours seen on the page** (share of use): `#EFE3C8` 92.1%, `#3B2A1A` 4.6%, `#000000` 1.8%, `#E6D3A8` 0.8%, `#CFDCD2` 0.7%, `#B8321F` 0.0%, `#7A6B57` 0.0%, `#FFFFFF` 0.0%

## Typography

- Headings: **Cormorant Garamond** (weight 600)
- Body: **Work Sans**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&family=Work+Sans:wght@400;500&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Cormorant Garamond | 92.2 px | 600 | 92.16px | -0.9216px |
| Body | Work Sans | 18 px | 400 | 27px | normal |
| Button | Work Sans | 18 px | 500 | 27px | 0.72px |

## Shape, space and motion

- Radius: sm 0 px, md 0 px, lg 0 px
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 6 px, 20 px, 24 px, 30 px, 32 px, 56 px, 72 px
- Layout: container 1200 px; breakpoints 900 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** measured, literary, patient.

Writes like an old chart legend: unhurried, exact and a little poetic about coastlines and soundings. It favours concrete place names and craft detail over sales talk.

**Do**

- Name real places and materials like cotton paper and survey ink
- Use full sentences with a calm, even rhythm
- Describe a chart the way a surveyor would, by what it records

**Do not**

- Do not use tech startup phrasing
- Do not exaggerate with words like stunning or amazing
- Do not rush the reader with urgency tricks

## Taglines

1. Maps that remember the coast
2. Every shoreline, drawn by hand
3. Charts worth framing, coasts worth keeping
4. Survey lines on cotton paper
5. Find your way home on paper

**Boilerplate:** Atlas Cartographers reproduces hand-drawn survey charts of the coast on cotton paper and frames each one to order for collectors, sailors and anyone who loves a good shoreline.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Browse the charts |
| secondaryCta | Request a framing quote |
| success | Chart added to your order. |
| error | That chart is not available right now. Please try another. |
| empty | No charts match this coastline yet. |

---
Source listing key `o:atlas-cartographers`. Rebuild with `python3 scripts/brand-kit/build.py o:atlas-cartographers`.
