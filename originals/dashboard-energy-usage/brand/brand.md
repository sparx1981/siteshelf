# Ampere — brand kit

*Smart home energy dashboard.* Generated from the SiteShelf listing **Home Energy Dashboard** (Dashboard); every value below is read from that page, not invented.

> **Know where your power goes**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Manrope |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **bolt** glyph on a squircle tile. A bolt is the immediate symbol of electricity and keeps the mark simple on a dark dashboard. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#0C1424` | Page background |
| surface | `#121C33` | Cards, panels, raised areas |
| text | `#E8EEFC` | Body and heading text |
| textMuted | `#9AA9CC` | Secondary text, captions |
| primary | `#FFD23F` | Main actions, links, brand colour |
| secondary | `#3B82F6` | Highlights, charts, second accent |
| border | `#223056` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#3B82F6` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 15.83:1 | pass | pass |
| Muted text on background | 7.82:1 | pass | pass |
| Primary on background | 12.74:1 | pass | pass |
| Text on primary | 13.60:1 | pass | pass |
| Text on surface | 14.57:1 | pass | pass |

**Colours seen on the page** (share of use): `#0C1424` 91.5%, `#5EEAD4` 2.6%, `#122A3A` 1.8%, `#FBBF24` 1.1%, `#3B82F6` 0.9%, `#FFD23F` 0.8%, `#F97316` 0.3%, `#F43F5E` 0.3%, `#A78BFA` 0.3%, `#64748B` 0.3%

## Typography

- Headings: **Manrope** (weight 800)
- Body: **Manrope**
- Google Fonts: `https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Manrope:wght@600;700;800&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Manrope | 38 px | 800 | 41.8px | -0.76px |
| Heading / H2 | Manrope | 17 px | 800 | normal | normal |
| Body | Manrope | 15 px | 500 | 22.5px | normal |
| Button | Manrope | 14 px | 700 | normal | normal |
| Caption / eyebrow | Manrope | 13 px | 600 | 19.5px | normal |

## Shape, space and motion

- Radius: sm 3 px, md 8 px, lg 18 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 2 px; common steps 2 px, 3 px, 5 px, 6 px, 8 px, 10 px, 14 px, 16 px, 18 px
- Layout: container 1280 px; breakpoints 900 px
- Motion: 500 ms, `cubic-bezier(0.3`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** practical, reassuring, precise.

Sounds like a trusted energy adviser who knows your bill: plain numbers in pence and kilowatt hours, friendly nudges and no scare tactics. It explains peak and off-peak like a neighbour would.

**Do**

- Pair every figure with its unit and price
- Frame savings as small, doable shifts
- Use the time of day, not jargon

**Do not**

- No alarmist language about waste
- Avoid technical terms like load profile
- Never promise savings that are not calculated

## Taglines

1. Know where your power goes
2. Cheaper hours, quieter bills
3. Your home, measured in pence
4. Shift a little, save a lot
5. See today's energy at a glance

**Boilerplate:** Ampere is a smart home energy dashboard that shows hourly usage by tariff band, breaks down appliance costs and suggests simple ways to move load off peak.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | See 7 days |
| secondaryCta | Shift to off-peak |
| success | Saved. Your tip is on the dashboard. |
| error | Smart meter not responding. Try again soon. |
| empty | No readings yet today. Check back in an hour. |

---
Source listing key `o:dashboard-energy-usage`. Rebuild with `python3 scripts/brand-kit/build.py o:dashboard-energy-usage`.
