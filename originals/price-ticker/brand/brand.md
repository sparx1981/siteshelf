# Tapewatch — brand kit

*Live market board with sparklines.* Generated from the SiteShelf listing **Live Market Board** (Dashboard); every value below is read from that page, not invented.

> **Every tick, one clear board**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Space Grotesk |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **pulse** glyph. A pulse line looks like a price chart and a ticker heartbeat. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#0A0D10` | Page background |
| surface | `#11161B` | Cards, panels, raised areas |
| text | `#E6EDF3` | Body and heading text |
| textMuted | `#7D8B98` | Secondary text, captions |
| primary | `#2DD4A0` | Main actions, links, brand colour |
| secondary | `#FF5D73` | Highlights, charts, second accent |
| border | `#1F2A33` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#195F4C` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 16.49:1 | pass | pass |
| Muted text on background | 5.58:1 | pass | pass |
| Primary on background | 10.24:1 | pass | pass |
| Text on primary | 10.32:1 | pass | pass |
| Text on surface | 15.40:1 | pass | pass |

**Colours seen on the page** (share of use): `#0A0D10` 95.6%, `#16222E` 3.6%, `#E6EDF3` 0.3%, `#7D8B98` 0.2%, `#2DD4A0` 0.2%, `#FF5D73` 0.1%, `#195F4C` 0.0%

## Typography

- Headings: **Space Grotesk** (weight 700)
- Body: **JetBrains Mono**
- Mono: **JetBrains Mono**
- Google Fonts: `https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&family=Space+Grotesk:wght@500;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Space Grotesk | 24 px | 700 | 36px | -0.48px |
| Heading / H2 | Space Grotesk | 15 px | 500 | 22.5px | normal |
| Button | Space Grotesk | 14 px | 400 | 21px | normal |
| Caption / eyebrow | Space Grotesk | 11.7 px | 400 | 17.5px | normal |
| Mono | JetBrains Mono | 14 px | 700 | 21px | normal |

## Shape, space and motion

- Radius: sm 6 px, md 8 px, lg 10 px, pill (fully rounded)
- Shadows: sm: `rgb(90, 169, 255) 3px 0px 0px 0px inset` · md: `rgb(90, 169, 255) 3px 0px 0px 0px inset` · lg: `rgb(90, 169, 255) 3px 0px 0px 0px inset`
- Spacing: base unit 2 px; common steps 2 px, 4 px, 6 px, 8 px, 10 px, 11 px, 12 px, 14 px, 16 px
- Layout: container 1180 px; breakpoints 600 px, 900 px
- Motion: 150 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** quick, neutral, exact.

Tapewatch speaks in tickers and tabular figures, like a floor reporter who stays neutral. It states price, change and volume plainly and never offers a view on what to buy.

**Do**

- Show symbol, price and change in that order
- Use tabular figures and fixed decimals
- Label simulated data as simulated

**Do not**

- Do not recommend trades
- Do not use words like 'moon' or 'crash'
- Do not call a small move a 'surge'

## Taglines

1. Every tick, one clear board
2. Prices as they move
3. Watch the market without the noise
4. Symbols, spreads, and nothing spun
5. A steady tape for busy eyes

**Boilerplate:** Tapewatch is a simulated live market board with a scrolling ticker, sortable table, sparklines and a detail chart for each asset, for demonstration only.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Pause |
| secondaryCta | Resume |
| success | Paused. Prices are no longer updating. |
| error | Feed lost. Showing the last known prices. |
| empty | No assets match that search. Clear it to see all. |

---
Source listing key `o:price-ticker`. Rebuild with `python3 scripts/brand-kit/build.py o:price-ticker`.
