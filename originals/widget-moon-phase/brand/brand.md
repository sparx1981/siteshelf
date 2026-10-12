# Lantern Almanac — brand kit

*Almanac of moon phases and night skies.* Generated from the SiteShelf listing **Moon Phase Widget** (Widgets); every value below is read from that page, not invented.

> **Look up, then look it up**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Manrope |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **flame** glyph on a circle tile. A lantern flame fits the almanac's night-time, hand-held light. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#05081A` | Page background |
| surface | `#0C1332` | Cards, panels, raised areas |
| text | `#A3AFDB` | Body and heading text |
| textMuted | `#7D8AC0` | Secondary text, captions |
| primary | `#8FB4FF` | Main actions, links, brand colour |
| secondary | `#FFE9A8` | Highlights, charts, second accent |
| border | `#33407F` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#425274` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 9.20:1 | pass | pass |
| Muted text on background | 5.94:1 | pass | pass |
| Primary on background | 9.60:1 | pass | pass |
| Text on primary | 9.49:1 | pass | pass |
| Text on surface | 8.41:1 | pass | pass |

**Colours seen on the page** (share of use): `#05081A` 60.1%, `#0C1332` 30.2%, `#000000` 3.8%, `#FFE9A8` 2.9%, `#FFFFFF` 0.8%, `#7E7A6C` 0.7%, `#141C45` 0.6%, `#1B2A5A` 0.4%, `#8FB4FF` 0.3%, `#26336F` 0.1%

## Typography

- Headings: **Manrope** (weight 500)
- Body: **Manrope**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,500;1,9..144,500&family=Manrope:wght@400;500;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Manrope | 15 px | 500 | 21px | normal |
| Heading / H2 | Fraunces | 64 px | 500 | 67.2px | normal |
| Body | Manrope | 15 px | 400 | 22.5px | normal |
| Button | Manrope | 14 px | 500 | normal | normal |
| Caption / eyebrow | Manrope | 12 px | 700 | normal | 2.4px |

## Shape, space and motion

- Radius: sm 12 px, md 24 px, lg 50 px
- Shadows: none used (flat)
- Spacing: base unit 2 px; common steps 2 px, 4 px, 6 px, 8 px, 10 px, 12 px, 14 px, 18 px, 20 px
- Layout: container 1080 px; breakpoints 900 px
- Motion: 400 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** calm, scholarly, poetic.

Lantern Almanac writes like a country almanac by lamplight: plain facts first, a quiet turn of phrase second. It uses exact dates and percentages and lets the moon do the poetry.

**Do**

- Give the phase, illumination and age exactly
- Use the observer's hemisphere
- Pair every fact with a small plain image

**Do not**

- Do not claim astrological meaning
- Do not use 'mystical' or 'cosmic'
- Do not hide the date format

## Taglines

1. Look up, then look it up
2. The moon, on any date you choose
3. A lantern for the night sky
4. Phases, ages and full moons, plainly
5. Know the moon before you go out

**Boilerplate:** Lantern Almanac is a small almanac that calculates the moon's phase, age and illumination for any date, with the next full and new moons.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Today |
| secondaryCta | Southern view |
| success | Showing the moon for 14 June: waxing crescent, 22 percent lit. |
| error | That date is out of range. Choose a year between 1900 and 2100. |
| empty | No phases to show. Pick a date. |

---
Source listing key `o:widget-moon-phase`. Rebuild with `python3 scripts/brand-kit/build.py o:widget-moon-phase`.
