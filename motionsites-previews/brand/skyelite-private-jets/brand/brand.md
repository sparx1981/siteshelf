# SkyElite — brand kit

*Private jet charters that are premium and accessible.* Generated from the SiteShelf listing **SkyElite Private Jets** (Landing Page); every value below is read from that page, not invented.

> **Premium. Accessible.**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **plane** glyph. A plane is the plainest symbol for a charter service. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F9FAFB` | Page background |
| surface | `#202A36` | Cards, panels, raised areas |
| text | `#202A36` | Body and heading text |
| textMuted | `#4B5563` | Secondary text, captions |
| primary | `#202A36` | Main actions, links, brand colour |
| secondary | `#848A90` | Highlights, charts, second accent |
| border | `#DBDDDF` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#848A90` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 13.90:1 | pass | pass |
| Muted text on background | 7.23:1 | pass | pass |
| Primary on background | 13.90:1 | pass | pass |
| Text on primary | 14.52:1 | pass | pass |
| Text on surface | 1.00:1 | fail | fail |

**Colours seen on the page** (share of use): `#F9FAFB` 98.7%, `#202A36` 0.5%, `#C9D2DE` 0.4%, `#8D9BB0` 0.2%, `#AEB9C9` 0.1%, `#2C3A4A` 0.0%, `#4B5563` 0.0%, `#6B7280` 0.0%, `#111827` 0.0%, `#848A90` 0.0%

## Typography

- Headings: **Inter** (weight 400)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Inter | 96 px | 400 | 96px | -4.8px |
| Button | Inter | 16 px | 500 | normal | normal |
| Navigation | Inter | 24 px | 600 | normal | normal |
| Caption / eyebrow | Inter | 14 px | 600 | normal | 1.4px |

## Shape, space and motion

- Radius: sm 0 px, md 0 px, lg 0 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 6 px, 8 px, 16 px, 24 px, 32 px, 36 px
- Layout: container 1280 px; breakpoints 640 px, 768 px, 1024 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** polished, assured, modern.

Speaks like an experienced concierge: calm, courteous and economical with words. Promises are about access and ease, never snobbery.

**Do**

- Pair premium with accessible in the same breath
- Quote times and routes plainly
- Keep the tone courteous and brief

**Do not**

- No snobbery or exclusivity talk
- No hidden fees
- No flashy superlatives

## Taglines

1. Premium. Accessible.
2. Fly private, simply
3. Your jet, your hour
4. Charter without the mystery
5. Private flights, fairly priced

**Boilerplate:** SkyElite arranges private jet charters that combine premium service with accessible pricing, with simple booking and clear itineraries.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Book now |
| secondaryCta | Discover |
| success | Request received, a concierge will call you |
| error | We could not process that request, try again |
| empty | No upcoming trips |

---
Source listing key `m:skyelite-private-jets`. Rebuild with `python3 scripts/brand-kit/build.py m:skyelite-private-jets`.
