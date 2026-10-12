# Scalable — brand kit

*Sales and analytics in one place.* Generated from the SiteShelf listing **Scalable** (Manage your sales and analytics in one place); every value below is read from that page, not invented.

> **Manage sales and analytics together**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **bars** glyph on a squircle tile. Bars of different heights stand for analytics and growth. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#FFFFFF` | Page background |
| surface | `#F0F0F0` | Cards, panels, raised areas |
| text | `#0B0B0F` | Body and heading text |
| textMuted | `#606063` | Secondary text, captions |
| primary | `#0B0B0F` | Main actions, links, brand colour |
| secondary | `#79797B` | Highlights, charts, second accent |
| border | `#DDDDDD` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#79797B` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 19.64:1 | pass | pass |
| Muted text on background | 6.27:1 | pass | pass |
| Primary on background | 19.64:1 | pass | pass |
| Text on primary | 19.64:1 | pass | pass |
| Text on surface | 17.24:1 | pass | pass |

**Colours seen on the page** (share of use): `#000000` 98.9%, `#FFFFFF` 1.1%, `#F0F0F0` 0.0%, `#606063` 0.0%, `#79797B` 0.0%, `#DDDDDD` 0.0%

## Typography

- Headings: **Inter** (weight 500)
- Body: **Inter**

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Inter | 76 px | 500 | 79.8px | -2.66px |
| Body | Inter | 17 px | 400 | 27.2px | normal |
| Button | Inter | 14 px | 500 | normal | normal |
| Navigation | Inter | 22 px | 600 | normal | -0.55px |

## Shape, space and motion

- Radius: sm 8 px, md 18 px, lg 28 px, pill (fully rounded)
- Shadows: sm: `oklch(0.78 0.2 150) 0px 0px 8px 0px` · md: `oklch(0.55 0.24 280) 0px 10px 40px -8px` · lg: `rgb(0, 0, 0) 0px 30px 80px -20px`
- Spacing: base unit 4 px; common steps 2 px, 6 px, 8 px, 10 px, 14 px, 16 px, 18 px, 20 px, 24 px
- Layout: container 1152 px; breakpoints 768 px, 900 px, 1000 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** streamlined, analytical, clean.

Sounds like a tidy dashboard: plain, exact and quick to scan. It talks about events, conversions and payouts with short verbs.

**Do**

- Name the metric in a few words
- Pair every claim with a number
- Use verbs like track, optimise, withdraw

**Do not**

- No growth-hack clichés
- No hype about revenue
- No jargon without a definition

## Taglines

1. Manage sales and analytics together
2. One place for every number
3. Track, convert, grow
4. Analytics that pay attention
5. See your sales clearly

**Boilerplate:** Scalable is a sales and analytics platform that tracks custom events, boosts form submissions and shows how to optimise every step of the sales flow.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Withdraw |
| secondaryCta | Learn more |
| success | Withdrawal requested |
| error | Withdrawal failed, check your details and retry |
| empty | No sales data yet |

---
Source listing key `s:69eeda1be1b4c8bd55beb52b`. Rebuild with `python3 scripts/brand-kit/build.py s:69eeda1be1b4c8bd55beb52b`.
