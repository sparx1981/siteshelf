# Kerbhop — brand kit

*Fast city rides with upfront fares.* Generated from the SiteShelf listing **Ride Booking Sheet** (App UI); every value below is read from that page, not invented.

> **Your ride, at your kerb**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **target** glyph. A target pin marks the pickup point, the one moment the whole service is built around. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#14161F` | Page background |
| surface | `#E9E6DF` | Cards, panels, raised areas |
| text | `#FFFFFF` | Body and heading text |
| textMuted | `#ADADB1` | Secondary text, captions |
| primary | `#3A3FD8` | Main actions, links, brand colour |
| secondary | `#0B5C3D` | Highlights, charts, second accent |
| border | `#DCDFE9` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#ACAEEF` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 18.04:1 | pass | pass |
| Muted text on background | 8.06:1 | pass | pass |
| Primary on background | 2.48:1 | fail | fail |
| Text on primary | 7.29:1 | pass | pass |
| Text on surface | 1.25:1 | fail | fail |

**Colours seen on the page** (share of use): `#14161F` 26.6%, `#F4F1EA` 26.5%, `#D9D4C6` 26.5%, `#FFFFFF` 16.5%, `#000000` 3.0%, `#3A3FD8` 0.7%, `#5C6275` 0.1%, `#C5C8D4` 0.0%, `#7AA86A` 0.0%, `#0B5C3D` 0.0%

## Typography

- Headings: **Inter** (weight 400)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Sora:wght@600;700;800&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Button | Inter | 15 px | 400 | 21.75px | normal |
| Caption / eyebrow | Inter | 12.5 px | 500 | 18.125px | normal |

## Shape, space and motion

- Radius: sm 2 px, md 16 px, lg 18 px, pill (fully rounded)
- Shadows: sm: `rgba(0, 0, 0, 0.2) 0px 6px 16px 0px` · md: `rgba(0, 0, 0, 0.4) 0px -20px 50px -20px` · lg: `rgba(0, 0, 0, 0.6) 0px 50px 100px -30px`
- Spacing: base unit 2 px; common steps 2 px, 3 px, 6 px, 8 px, 9 px, 10 px, 12 px, 14 px, 16 px
- Layout: container 1200 px; breakpoints 520 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** quick, reassuring, local.

Kerbhop sounds like a cab driver who knows the streets and quotes a fair price before you get in. Copy is brisk and British, with minutes and pounds always stated up front.

**Do**

- Show the fare and the wait together, like '3 min away, £9.30'
- Use plain street words: pickup, drop-off, kerb
- Confirm every step with a short present-tense line

**Do not**

- Do not hide surge or fees behind small print
- Avoid slang that confuses first-time riders
- Never promise an arrival time the map cannot back up

## Taglines

1. Your ride, at your kerb
2. Know the fare before you go
3. Three minutes away, give or take
4. Hop in, we know the way
5. City rides without the haggle

**Boilerplate:** Kerbhop is a ride-hailing app that shows live fares, seat counts and arrival times for every vehicle before a driver is requested.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Request Comfort |
| secondaryCta | Change pickup |
| success | Driver found. Priya is two minutes away. |
| error | We could not find a driver. Try a different vehicle. |
| empty | No saved places yet. Add home or work. |

---
Source listing key `o:app-ride-booking`. Rebuild with `python3 scripts/brand-kit/build.py o:app-ride-booking`.
