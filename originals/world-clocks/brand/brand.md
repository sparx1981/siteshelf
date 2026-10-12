# Anywhen — brand kit

*World clock and meeting overlap board.* Generated from the SiteShelf listing **World Clocks** (Widgets); every value below is read from that page, not invented.

> **Every hour, somewhere**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Lexend |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **dial** glyph on a circle tile. A clock dial is the most direct sign for a world clock. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#0B1220` | Page background |
| surface | `#121A2C` | Cards, panels, raised areas |
| text | `#EEF2FF` | Body and heading text |
| textMuted | `#8F9BC0` | Secondary text, captions |
| primary | `#7CC4F0` | Main actions, links, brand colour |
| secondary | `#FCA5A5` | Highlights, charts, second accent |
| border | `#1F2A44` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#3A596E` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 16.74:1 | pass | pass |
| Muted text on background | 6.79:1 | pass | pass |
| Primary on background | 9.82:1 | pass | pass |
| Text on primary | 10.30:1 | pass | pass |
| Text on surface | 15.52:1 | pass | pass |

**Colours seen on the page** (share of use): `#0B1220` 93.6%, `#7CC4F0` 1.2%, `#26335A` 1.1%, `#2A6FB8` 1.0%, `#34D399` 0.9%, `#5B3B6E` 0.5%, `#D98A6A` 0.5%, `#6B3F5C` 0.5%, `#E48B4F` 0.5%, `#EEF2FF` 0.3%

## Typography

- Headings: **Lexend** (weight 600)
- Body: **Lexend**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Lexend:wght@400;500;600&family=Roboto+Mono:wght@400;500&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Lexend | 30 px | 600 | 33px | -0.6px |
| Heading / H2 | Lexend | 20 px | 600 | 24px | normal |
| Body | Lexend | 14 px | 400 | 21px | normal |
| Button | Lexend | 14 px | 500 | normal | normal |
| Caption / eyebrow | Lexend | 13 px | 400 | 19.5px | normal |

## Shape, space and motion

- Radius: sm 7 px, md 10 px, lg 18 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 4 px, 6 px, 8 px, 9 px, 10 px, 12 px, 14 px, 16 px, 20 px
- Layout: container 1180 px; breakpoints 600 px, 900 px
- Motion: 300 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** clear, global, calm.

Anywhen sounds like a well-travelled friend glancing at their watch: relaxed, exact and a little poetic about daylight. It uses city names and local times, never abbreviations alone.

**Do**

- Pair every time with a city name
- Describe day or night in one word
- Say plainly when there is no overlap

**Do not**

- Do not use only UTC offsets
- Avoid ambiguous 12-hour times without am or pm
- Never hide the current date

## Taglines

1. Every hour, somewhere
2. The world, on one board
3. Know when they are awake
4. Time zones without the maths
5. Clocks for a connected day

**Boilerplate:** Anywhen is a world clock board that shows analogue and digital time for any city, tints each card by time of day and highlights shared working hours.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Add a city |
| secondaryCta | Switch to 24h |
| success | City added to your board. |
| error | That city was not found. Check the spelling. |
| empty | No shared working hours today. |

---
Source listing key `o:world-clocks`. Rebuild with `python3 scripts/brand-kit/build.py o:world-clocks`.
