# Lexo — brand kit

*Realtime price alerts across 1000+ stores.* Generated from the SiteShelf listing **Lexo** (Realtime Price Alerts); every value below is read from that page, not invented.

> **Stay ahead of every price drop**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **bolt** glyph on a squircle tile. A bolt signals realtime speed and the jolt of a price drop. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#0A0F14` | Page background |
| surface | `#000000` | Cards, panels, raised areas |
| text | `#FFFFFF` | Body and heading text |
| textMuted | `#8D97A5` | Secondary text, captions |
| primary | `#0F3C5A` | Main actions, links, brand colour |
| secondary | `#FFC220` | Highlights, charts, second accent |
| border | `#FFFFFF` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#FFC220` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 19.24:1 | pass | pass |
| Muted text on background | 6.51:1 | pass | pass |
| Primary on background | 1.66:1 | fail | fail |
| Text on primary | 11.57:1 | pass | pass |
| Text on surface | 21.00:1 | pass | pass |

**Colours seen on the page** (share of use): `#0A0F14` 51.5%, `#000000` 38.1%, `#0F3C5A` 10.3%, `#FFFFFF` 0.1%, `#8D97A5` 0.0%, `#FFC220` 0.0%

## Typography

- Headings: **Inter** (weight 600)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@1,300;1,400&family=Inter:wght@400;500;600;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Inter | 48 px | 600 | 55.2px | -0.96px |
| Body | Inter | 13 px | 400 | normal | normal |
| Button | Inter | 14 px | 500 | normal | normal |
| Navigation | Inter | 14 px | 400 | normal | normal |

## Shape, space and motion

- Radius: sm 50 px, md 50 px, lg 50 px, pill (fully rounded)
- Shadows: sm: `rgba(255, 255, 255, 0.7) 0px 0px 8px 2px` · md: `rgba(255, 255, 255, 0.7) 0px 0px 8px 2px` · lg: `rgba(255, 255, 255, 0.7) 0px 0px 8px 2px`
- Spacing: base unit 4 px; common steps 6 px, 8 px, 9 px, 18 px, 20 px, 22 px, 24 px, 36 px, 64 px
- Layout: container 1280 px; breakpoints 820 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** sharp, vigilant, helpful.

Lexo talks like a savvy deal-spotter who texts you the second a price drops. It is quick, factual and lightly competitive about beating the market.

**Do**

- State the price change as an exact amount
- Name the store and the product
- Keep alerts to a single line

**Do not**

- Do not use hype like 'insane deals'
- Avoid fake urgency
- Never alert without the price history

## Taglines

1. Stay ahead of every price drop
2. Cheaper before you check
3. Prices, watched for you
4. Alerts the second it drops
5. 1000+ stores, one watchlist

**Boilerplate:** Lexo is a price tracking service that monitors over 1000 of the world's most popular stores and sends realtime alerts when prices fall.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Get Started |
| secondaryCta | Learn more |
| success | Alert set. We will tell you when it drops. |
| error | We could not track that link. Please check it and try again. |
| empty | No alerts yet. Paste a product link to begin. |

---
Source listing key `s:69f3923ae064561c9d64c36d`. Rebuild with `python3 scripts/brand-kit/build.py s:69f3923ae064561c9d64c36d`.
