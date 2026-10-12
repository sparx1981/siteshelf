# Mintly Rates — brand kit

*Live-looking currency converter and rate ticker.* Generated from the SiteShelf listing **Currency Converter Ticker** (Widgets); every value below is read from that page, not invented.

> **Convert money, quickly**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Sora |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **coins** glyph. Coins are the clearest visual shorthand for currency. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#0B1030` | Page background |
| surface | `#070B22` | Cards, panels, raised areas |
| text | `#EEF1FF` | Body and heading text |
| textMuted | `#A9B3E0` | Secondary text, captions |
| primary | `#FFD36B` | Main actions, links, brand colour |
| secondary | `#4DF0B0` | Highlights, charts, second accent |
| border | `#2E3A80` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#715F36` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 16.50:1 | pass | pass |
| Muted text on background | 9.03:1 | pass | pass |
| Primary on background | 13.07:1 | pass | pass |
| Text on primary | 13.83:1 | pass | pass |
| Text on surface | 17.28:1 | pass | pass |

**Colours seen on the page** (share of use): `#0B1030` 85.7%, `#FFFFFF` 8.9%, `#161E4E` 1.7%, `#000000` 1.5%, `#4DF0B0` 0.5%, `#2E7D5B` 0.5%, `#3B5BDB` 0.5%, `#EEF1FF` 0.3%, `#FFD36B` 0.3%, `#A9B3E0` 0.1%

## Typography

- Headings: **Sora** (weight 600)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@500&family=Inter:wght@400;500;600&family=Sora:wght@600&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Sora | 32 px | 600 | 35.2px | normal |
| Heading / H2 | Inter | 13 px | 600 | normal | 1.56px |
| Body | Inter | 13 px | 400 | 19.5px | normal |
| Button | Inter | 12 px | 600 | normal | normal |
| Caption / eyebrow | Inter | 12 px | 600 | normal | 2.16px |

## Shape, space and motion

- Radius: sm 10 px, md 14 px, lg 18 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 2 px; common steps 2 px, 4 px, 6 px, 8 px, 10 px, 12 px, 14 px, 16 px, 22 px
- Layout: container 1200 px; breakpoints 760 px
- Motion: 450 ms, `cubic-bezier(0.4`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** quick, clear, modern.

Mintly Rates speaks in the crisp, numerate tone of a currency desk that still wants to be understood. Rates are shown with direction and size of change, and everything says plainly that the figures are examples.

**Do**

- Show the pair and the rate together
- Label sample data as sample data
- Use arrows and signs for rate movement

**Do not**

- Do not claim financial advice
- Avoid market-speak like 'bullish'
- Never show a rate without its pair

## Taglines

1. Convert money, quickly
2. Rates at a glance
3. Swap currencies in a click
4. Your pairs, your ticker
5. Know the number before you go

**Boilerplate:** Mintly Rates is a currency converter with a scrolling rate ticker, 30-day sparkline and saved pairs, showing illustrative rates that update every few seconds.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Copy result |
| secondaryCta | Pause ticker |
| success | Result copied. |
| error | Could not fetch that pair. Try another. |
| empty | No favourite pairs yet. Star one to keep it here. |

---
Source listing key `o:widget-currency-converter`. Rebuild with `python3 scripts/brand-kit/build.py o:widget-currency-converter`.
