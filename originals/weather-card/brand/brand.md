# Skylark — brand kit

*Weather widget with city views and an animated sky.* Generated from the SiteShelf listing **Weather Widget** (Widgets); every value below is read from that page, not invented.

> **Know the sky before you go**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter Bold (stand-in for Urbanist) |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **cloud** glyph on a squircle tile. A cloud is the most recognisable sign of weather and the widget's animated sky. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#7D8FA6` | Page background |
| surface | `#BCC8D6` | Cards, panels, raised areas |
| text | `#FFFFFF` | Body and heading text |
| textMuted | `#1D2A3C` | Secondary text, captions |
| primary | `#FFD45C` | Main actions, links, brand colour |
| secondary | `#9BE3FF` | Highlights, charts, second accent |
| border | `#FFFFFF` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#715F2F` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 3.31:1 | fail | pass |
| Muted text on background | 4.38:1 | fail | pass |
| Primary on background | 2.33:1 | fail | fail |
| Text on primary | 13.87:1 | pass | pass |
| Text on surface | 1.70:1 | fail | fail |

**Colours seen on the page** (share of use): `#7D8FA6` 48.8%, `#BCC8D6` 48.8%, `#FFFFFF` 1.9%, `#000000` 0.1%, `#9BE3FF` 0.1%, `#FFD37A` 0.1%, `#FFD45C` 0.1%, `#1D2A3C` 0.0%, `#DFE8F5` 0.0%, `#7CC4FF` 0.0%

## Typography

- Headings: **Urbanist** (weight 600)
- Body: **Urbanist**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Urbanist:wght@400;500;600;700;800&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Button | Urbanist | 13 px | 600 | normal | normal |
| Caption / eyebrow | Urbanist | 12 px | 500 | 16.8px | normal |

## Shape, space and motion

- Radius: sm 16 px, md 32 px, lg 32 px, pill (fully rounded)
- Shadows: sm: `rgba(0, 0, 0, 0.18) 0px 30px 60px 0px` · md: `rgba(0, 0, 0, 0.18) 0px 30px 60px 0px` · lg: `rgba(0, 0, 0, 0.18) 0px 30px 60px 0px`
- Spacing: base unit 4 px; common steps 3 px, 4 px, 6 px, 8 px, 9 px, 10 px, 12 px, 16 px, 22 px
- Layout: container 1200 px; breakpoints 420 px
- Motion: 300 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** bright, friendly, effortless.

A cheerful morning forecaster: short, upbeat and honest about rain. It describes the sky first and the numbers second.

**Do**

- Name the condition before the temperature
- Use both °C and °F cleanly
- Keep forecasts to a plain sentence

**Do not**

- Meteorological jargon
- Doom about storms
- Vague lines like it may be nice

## Taglines

1. Know the sky before you go
2. Sun, rain or snow, at a glance
3. Five days, one friendly forecast
4. Look up, then step out
5. Weather that feels like weather

**Boilerplate:** Skylark is a weather widget that shows the current sky, an hourly temperature curve and a five day forecast for a handful of cities.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Switch city |
| secondaryCta | Use °F |
| success | Forecast updated |
| error | Couldn't reach the weather. Showing the last reading |
| empty | No cities saved. Add one |

---
Source listing key `o:weather-card`. Rebuild with `python3 scripts/brand-kit/build.py o:weather-card`.
