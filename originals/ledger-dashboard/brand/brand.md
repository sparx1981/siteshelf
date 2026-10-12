# Tillmark — brand kit

*Revenue dashboard for online shops.* Generated from the SiteShelf listing **Ledger Revenue Dashboard** (Dashboard); every value below is read from that page, not invented.

> **Know your takings, daily**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **coins** glyph. Coins say takings clearly and quietly. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F3F4F6` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#111827` | Body and heading text |
| textMuted | `#374151` | Secondary text, captions |
| primary | `#2563EB` | Main actions, links, brand colour |
| secondary | `#059669` | Highlights, charts, second accent |
| border | `#E5E7EB` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#A3BDF7` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 16.12:1 | pass | pass |
| Muted text on background | 9.37:1 | pass | pass |
| Primary on background | 4.70:1 | pass | pass |
| Text on primary | 5.17:1 | pass | pass |
| Text on surface | 17.74:1 | pass | pass |

**Colours seen on the page** (share of use): `#F3F4F6` 97.0%, `#2563EB` 1.5%, `#E5E7EB` 0.5%, `#D1FAE5` 0.3%, `#111827` 0.2%, `#6B7280` 0.2%, `#059669` 0.1%, `#FEE2E2` 0.1%, `#374151` 0.0%, `#DC2626` 0.0%

## Typography

- Headings: **Inter** (weight 700)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Inter | 28 px | 700 | normal | -0.56px |
| Heading / H2 | Inter | 16 px | 600 | normal | normal |
| Button | Inter | 13 px | 600 | normal | normal |

## Shape, space and motion

- Radius: sm 8 px, md 10 px, lg 16 px, pill (fully rounded)
- Shadows: sm: `rgba(0, 0, 0, 0.08) 0px 1px 2px 0px` · md: `rgba(0, 0, 0, 0.08) 0px 1px 2px 0px` · lg: `rgba(0, 0, 0, 0.08) 0px 1px 2px 0px`
- Spacing: base unit 4 px; common steps 2 px, 3 px, 4 px, 6 px, 8 px, 10 px, 12 px, 16 px, 24 px
- Layout: container 1200 px; breakpoints 700 px, 1000 px
- Motion: 400 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** clear, trustworthy, sober.

Tillmark sounds like a shop's bookkeeper who explains the week without drama. It reports figures, deltas and causes in plain words and avoids hype in either direction.

**Do**

- Give the number and the change together
- Use the shop's own product names
- Say what the period covers

**Do not**

- Do not dramatise a dip
- Do not use growth-hacking language
- Do not round away a meaningful decimal

## Taglines

1. Know your takings, daily
2. Revenue you can read at a glance
3. Orders, income, and why
4. Your shop's week, in plain numbers
5. Every sale accounted for

**Boilerplate:** Tillmark is a revenue dashboard for online shops, showing sales, orders and top products over seven, thirty or ninety days.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Overview |
| secondaryCta | 30D |
| success | Updated. Showing revenue for the last 30 days. |
| error | We could not load your figures. Refresh to try again. |
| empty | No orders in this period. Pick a longer range. |

---
Source listing key `o:ledger-dashboard`. Rebuild with `python3 scripts/brand-kit/build.py o:ledger-dashboard`.
