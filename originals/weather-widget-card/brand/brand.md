# Fairweather — brand kit

*Weather widget for travellers and city dwellers.* Generated from the SiteShelf listing **Weather Widget Card** (Widgets); every value below is read from that page, not invented.

> **Know the sky before you step out**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Outfit |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **cloud** glyph on a squircle tile. A cloud is the plain and instantly readable weather icon. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#E9EEF5` | Page background |
| surface | `#4FACFE` | Cards, panels, raised areas |
| text | `#1B2A4A` | Body and heading text |
| textMuted | `#636F86` | Secondary text, captions |
| primary | `#00C6FB` | Main actions, links, brand colour |
| secondary | `#8FD3FF` | Highlights, charts, second accent |
| border | `#CCD3DD` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#065A72` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 12.20:1 | pass | pass |
| Muted text on background | 4.34:1 | fail | pass |
| Primary on background | 1.72:1 | fail | fail |
| Text on primary | 9.79:1 | pass | pass |
| Text on surface | 5.87:1 | pass | pass |

**Colours seen on the page** (share of use): `#E9EEF5` 88.3%, `#4FACFE` 5.2%, `#00C6FB` 5.2%, `#FFE27A` 0.6%, `#FFFFFF` 0.6%, `#8FD3FF` 0.0%, `#1B2A4A` 0.0%, `#636F86` 0.0%, `#CCD3DD` 0.0%, `#0B0B0F` 0.0%

## Typography

- Headings: **Outfit** (weight 500)
- Body: **Outfit**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Outfit:wght@300;500;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Button | Outfit | 14 px | 500 | normal | normal |
| Caption / eyebrow | Outfit | 16.7 px | 300 | 23.3333px | normal |

## Shape, space and motion

- Radius: sm 12 px, md 16 px, lg 28 px, pill (fully rounded)
- Shadows: sm: `rgba(27, 42, 74, 0.25) 0px 24px 60px 0px` · md: `rgb(255, 226, 122) 0px 0px 60px 0px` · lg: `rgba(27, 42, 74, 0.25) 0px 24px 60px 0px`
- Spacing: base unit 4 px; common steps 3 px, 4 px, 6 px, 8 px, 10 px, 12 px, 14 px, 16 px, 24 px
- Layout: container 1200 px; breakpoints single fluid layout
- Motion: 600 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** cheerful, clear, light.

Sounds like a friendly forecaster: simple, sunny and honest about rain. Conditions come first, then a gentle suggestion.

**Do**

- Put temperature and condition first
- Offer a small, kind suggestion
- Show both units on demand

**Do not**

- No scary storm language
- No jargon like isobar
- No false precision

## Taglines

1. Know the sky before you step out
2. Weather, kept simple
3. Four cities, five days
4. Sun, rain, snow, all clear
5. Your pocket forecast

**Boilerplate:** Fairweather is a compact weather widget that switches between cities, shows hourly and five-day forecasts and converts between Celsius and Fahrenheit.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Switch city |
| secondaryCta | °C / °F |
| success | Forecast updated |
| error | Could not load the forecast, try again |
| empty | No cities selected yet |

---
Source listing key `o:weather-widget-card`. Rebuild with `python3 scripts/brand-kit/build.py o:weather-widget-card`.
