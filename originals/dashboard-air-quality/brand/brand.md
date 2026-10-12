# clearair — brand kit

*City air quality board with plain health advice.* Generated from the SiteShelf listing **City Air Quality Board** (Dashboard); every value below is read from that page, not invented.

> **Know the air before you go**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Manrope |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **cloud** glyph on a squircle tile. A soft cloud shape signals air and sky, styled in lowercase to match the friendly name. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#FFFFFF` | Page background |
| surface | `#EAF4FB` | Cards, panels, raised areas |
| text | `#11263A` | Body and heading text |
| textMuted | `#526A80` | Secondary text, captions |
| primary | `#11263A` | Main actions, links, brand colour |
| secondary | `#F08A24` | Highlights, charts, second accent |
| border | `#DBE7F1` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#F08A24` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 15.42:1 | pass | pass |
| Muted text on background | 5.63:1 | pass | pass |
| Primary on background | 15.42:1 | pass | pass |
| Text on primary | 15.42:1 | pass | pass |
| Text on surface | 13.82:1 | pass | pass |

**Colours seen on the page** (share of use): `#FFFFFF` 69.1%, `#EAF4FB` 25.9%, `#F08A24` 1.4%, `#2BB673` 1.2%, `#E6C229` 1.0%, `#11263A` 0.9%, `#000000` 0.3%, `#526A80` 0.2%, `#1A1200` 0.0%, `#DBE7F1` 0.0%

## Typography

- Headings: **Manrope** (weight 800)
- Body: **Manrope**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Manrope:wght@600;700;800&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Manrope | 34 px | 800 | 37.4px | -0.68px |
| Heading / H2 | Manrope | 18 px | 800 | normal | normal |
| Subheading / H3 | Manrope | 15 px | 700 | normal | normal |
| Button | Manrope | 13 px | 700 | normal | normal |

## Shape, space and motion

- Radius: sm 9 px, md 12 px, lg 20 px, pill (fully rounded)
- Shadows: sm: `rgba(43, 182, 115, 0) 0px 0px 0px 8.98656px` · md: `rgba(17, 38, 58, 0.5) 0px 20px 40px -32px` · lg: `rgba(43, 182, 115, 0) 0px 0px 0px 8.98656px`
- Spacing: base unit 2 px; common steps 2 px, 3 px, 6 px, 7 px, 8 px, 10 px, 12 px, 13 px, 14 px
- Layout: container 1280 px; breakpoints 560 px, 1000 px
- Motion: 600 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** clear, trustworthy, civic.

Public-service voice with a human tone: factual, calm about numbers and quick to say what they mean for your day. It never alarms and never plays down a poor reading.

**Do**

- Name the band and the advice together, such as Moderate, acceptable
- Give units and station names every time
- Say what to do, for example sensitive groups limit long outdoor effort

**Do not**

- Scare words like toxic or deadly
- Unexplained jargon such as PM2.5 without a gloss
- Pretending simulated readings are live

## Taglines

1. Know the air before you go
2. Every station, every hour
3. Breathe easier with clear numbers
4. Marlowe's air, in plain sight
5. Real readings, plain advice

**Boilerplate:** clearair is a city air quality board that shows station readings, pollutant levels and health advice for Marlowe, Northgate and Harbourside in plain language.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Check my station |
| secondaryCta | Filter by pollutant |
| success | Readings updated just now |
| error | We lost this station. Showing the last reading |
| empty | No stations in this area |

---
Source listing key `o:dashboard-air-quality`. Rebuild with `python3 scripts/brand-kit/build.py o:dashboard-air-quality`.
