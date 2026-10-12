# FATHOM — brand kit

*Lightweight commuter e-bikes.* Generated from the SiteShelf listing **Fathom E-Bike** (Landing Page); every value below is read from that page, not invented.

> **Go further. Arrive fresher**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Outfit |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **bolt** glyph. A bolt hints at electric assist while staying sleek next to an all-caps wordmark. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#EEF2F4` | Page background |
| surface | `#0F3B40` | Cards, panels, raised areas |
| text | `#55656F` | Body and heading text |
| textMuted | `#0E1A22` | Secondary text, captions |
| primary | `#B6F23A` | Main actions, links, brand colour |
| secondary | `#0F3B40` | Highlights, charts, second accent |
| border | `#DBE3E8` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#0F3B40` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 5.36:1 | pass | pass |
| Muted text on background | 15.67:1 | pass | pass |
| Primary on background | 1.18:1 | fail | fail |
| Text on primary | 14.73:1 | pass | pass |
| Text on surface | 2.02:1 | fail | fail |

**Colours seen on the page** (share of use): `#EEF2F4` 78.0%, `#0F3B40` 7.6%, `#FFFFFF` 6.7%, `#000000` 3.1%, `#0E1A22` 2.0%, `#55656F` 1.5%, `#9FB0BA` 0.6%, `#B6F23A` 0.5%, `#B8D6D1` 0.0%, `#DBE3E8` 0.0%

## Typography

- Headings: **Outfit** (weight 700)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Outfit:wght@600;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Outfit | 92.2 px | 700 | 90.3168px | -2.7648px |
| Heading / H2 | Outfit | 44 px | 700 | 46.2px | -0.88px |
| Body | Inter | 18 px | 400 | 28.8px | normal |
| Button | Inter | 14 px | 600 | normal | normal |
| Navigation | Inter | 15 px | 500 | 24px | normal |
| Caption / eyebrow | Inter | 12 px | 600 | normal | 1.68px |

## Shape, space and motion

- Radius: sm 22 px, md 24 px, lg 24 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 6 px, 8 px, 12 px, 14 px, 18 px, 20 px, 24 px, 26 px, 30 px
- Layout: container 1300 px; breakpoints 860 px
- Motion: 400 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** calm, capable, understated.

FATHOM sounds like a quiet engineer: confident in numbers and sparing with adjectives. It lets watts, kilometres and kilograms do the talking, and says arrive fresher where others say faster.

**Do**

- Give the figure with its unit, every time
- Speak of the ride, not the technology
- Keep claims honest about range and conditions

**Do not**

- Do not call it revolutionary or disruptive
- Avoid hype about speed
- Never hide the price

## Taglines

1. Go further. Arrive fresher
2. A motor you will forget is there
3. Seventeen kilos, one hundred twenty kilometres
4. Commute without the sweat
5. Quiet power, honest range

**Boilerplate:** FATHOM builds the Tern 3, a 17kg aluminium commuter e-bike with a 250W mid-drive motor, a removable 504Wh battery and a range of up to 120km.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Reserve yours |
| secondaryCta | Compare ranges |
| success | Reserved. We will be in touch. |
| error | That email does not look right. Please check it. |
| empty | No bikes in that colour yet. |

---
Source listing key `o:landing-ebike`. Rebuild with `python3 scripts/brand-kit/build.py o:landing-ebike`.
