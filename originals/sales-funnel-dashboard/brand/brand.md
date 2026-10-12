# Pipelane — brand kit

*Revenue operations dashboard.* Generated from the SiteShelf listing **Sales Funnel Dashboard** (Dashboard); every value below is read from that page, not invented.

> **See where deals leak**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **chevrons** glyph on a circle tile. Chevrons narrowing to a point echo a funnel in a compact mark. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F3F5F9` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#0F172A` | Body and heading text |
| textMuted | `#334155` | Secondary text, captions |
| primary | `#2563EB` | Main actions, links, brand colour |
| secondary | `#92400E` | Highlights, charts, second accent |
| border | `#E2E7EF` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#A3BDF7` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 16.36:1 | pass | pass |
| Muted text on background | 9.49:1 | pass | pass |
| Primary on background | 4.74:1 | pass | pass |
| Text on primary | 5.17:1 | pass | pass |
| Text on surface | 17.85:1 | pass | pass |

**Colours seen on the page** (share of use): `#F3F5F9` 96.8%, `#2563EB` 1.5%, `#0F172A` 0.6%, `#5C3CDD` 0.3%, `#DCFCE7` 0.2%, `#64748B` 0.2%, `#E0E7FF` 0.2%, `#FEF3C7` 0.2%, `#1A35E6` 0.2%, `#CFFAFE` 0.1%

## Typography

- Headings: **Inter** (weight 700)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Inter | 24 px | 700 | normal | normal |
| Heading / H2 | Inter | 15 px | 700 | normal | normal |
| Body | Inter | 14 px | 400 | 21px | normal |
| Button | Inter | 13 px | 600 | normal | normal |
| Caption / eyebrow | Inter | 11.7 px | 500 | 17.5px | normal |

## Shape, space and motion

- Radius: sm 7 px, md 10 px, lg 16 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 2 px; common steps 2 px, 3 px, 4 px, 6 px, 8 px, 10 px, 11 px, 12 px, 14 px
- Layout: container 1240 px; breakpoints 520 px, 980 px
- Motion: 600 ms, `cubic-bezier(0.3`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** analytical, brisk, plain.

Pipelane talks like a sharp revenue analyst: numbers first, caveats second, jargon never. It points to drop-offs and trends without pretending to know the cause.

**Do**

- State the number, the delta and the period
- Name the stage where drop-off is largest
- Use plain stage names: lead, qualified, won

**Do not**

- Do not call a dip a disaster
- Avoid vanity metrics
- Never show a rate without its base

## Taglines

1. See where deals leak
2. Your funnel, in numbers
3. From first lead to closed won
4. Win rates you can explain
5. Revenue, without the spreadsheets

**Boilerplate:** Pipelane is a revenue operations dashboard with a live funnel, KPI deltas, win-rate trends and a regional leaderboard so teams can see where deals are won and lost.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Export CSV |
| secondaryCta | Last 30 days |
| success | Export ready. |
| error | Could not load that segment. Try again. |
| empty | No deals match these filters. |

---
Source listing key `o:sales-funnel-dashboard`. Rebuild with `python3 scripts/brand-kit/build.py o:sales-funnel-dashboard`.
