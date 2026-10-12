# Skyline Daily — brand kit

*Hyperlocal weather with a day and night mode.* Generated from the SiteShelf listing **Sun Moon Theme Switch** (Form Controls); every value below is read from that page, not invented.

> **Day, meet night**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Sora |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **cloud** glyph on a circle tile. A soft cloud suits a weather app whose personality shifts gently from daylight to dusk. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#0B1022` | Page background |
| surface | `#141B36` | Cards, panels, raised areas |
| text | `#9FB0D9` | Body and heading text |
| textMuted | `#EAF0FF` | Secondary text, captions |
| primary | `#FFD27A` | Main actions, links, brand colour |
| secondary | `#9FB0D9` | Highlights, charts, second accent |
| border | `#262F55` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#715F3C` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 8.72:1 | pass | pass |
| Muted text on background | 16.56:1 | pass | pass |
| Primary on background | 13.27:1 | pass | pass |
| Text on primary | 13.80:1 | pass | pass |
| Text on surface | 7.81:1 | pass | pass |

**Colours seen on the page** (share of use): `#0B1022` 89.9%, `#141B36` 8.8%, `#6CC4FF` 0.3%, `#BFE7FF` 0.3%, `#9FB0D9` 0.3%, `#FFFFFF` 0.2%, `#EAF0FF` 0.1%, `#B8C0D6` 0.1%, `#FFD27A` 0.0%, `#C9CFE6` 0.0%

## Typography

- Headings: **Sora** (weight 800)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Sora:wght@600;700;800&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Sora | 64 px | 800 | 65.28px | -1.92px |
| Heading / H2 | Sora | 16 px | 700 | normal | normal |
| Body | Inter | 18 px | 400 | 27.9px | normal |
| Button | Inter | 16 px | 400 | 24.8px | normal |
| Caption / eyebrow | Sora | 13 px | 700 | normal | 2.34px |

## Shape, space and motion

- Radius: sm 14 px, md 26 px, lg 26 px, pill (fully rounded)
- Shadows: sm: `rgba(255, 255, 255, 0.08) 0px 0px 0px 12px, rgba(255, 255, 255, 0.04) 0px 0px 0px 26px, rgba(0, 0, 0, 0.4) 0px 4px 10px 0px` · md: `rgba(255, 255, 255, 0.18) 0px 0px 0px 8px, rgba(0, 0, 0, 0.3) 0px 3px 6px 0px` · lg: `rgba(0, 0, 0, 0.18) 0px 4px 10px 0px inset, rgba(0, 0, 0, 0.35) 0px 10px 24px -10px`
- Spacing: base unit 2 px; common steps 4 px, 6 px, 10 px, 14 px, 16 px, 22 px, 24 px, 30 px, 34 px
- Layout: container 900 px; breakpoints 560 px
- Motion: 400 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** gentle, observant, bright.

Skyline Daily sounds like a neighbour leaning over the fence to say the evening will clear up. It is descriptive and a bit poetic about the sky, but never loses a precise temperature.

**Do**

- Describe the sky in one concrete image
- Pair every forecast with a degree and a time
- Greet the time of day: morning, dusk, tonight

**Do not**

- Do not use meteorological jargon without explaining it
- Avoid fear-mongering about storms
- Never promise sun the forecast cannot back

## Taglines

1. Day, meet night
2. Weather with a view
3. The sky, in plain words
4. Dusk is at 5:42
5. Know before the clouds do

**Boilerplate:** Skyline Daily is a weather app for coastal towns like Pennick Bay that pairs honest forecasts with a theme that turns from day to night as the sun sets.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | See tonight |
| secondaryCta | Switch theme |
| success | Night mode is on. Preference saved. |
| error | Could not load the forecast. Check your connection and retry. |
| empty | No saved places yet. Add your town. |

---
Source listing key `o:control-sun-moon-switch`. Rebuild with `python3 scripts/brand-kit/build.py o:control-sun-moon-switch`.
