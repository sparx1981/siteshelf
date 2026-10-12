# Splitwise Timing — brand kit

*Precision stopwatch and lap timer.* Generated from the SiteShelf listing **Stopwatch & Lap Timer** (Widgets); every value below is read from that page, not invented.

> **Every split, to the centisecond**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter Bold (stand-in for Chakra Petch) |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **dial** glyph on a squircle tile. A dial face is the stopwatch itself. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#0E1013` | Page background |
| surface | `#171A1F` | Cards, panels, raised areas |
| text | `#8A93A1` | Body and heading text |
| textMuted | `#F1F3F6` | Secondary text, captions |
| primary | `#B6F23C` | Main actions, links, brand colour |
| secondary | `#648521` | Highlights, charts, second accent |
| border | `#262B33` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#648521` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 6.14:1 | pass | pass |
| Muted text on background | 17.14:1 | pass | pass |
| Primary on background | 14.29:1 | pass | pass |
| Text on primary | 14.74:1 | pass | pass |
| Text on surface | 5.62:1 | pass | pass |

**Colours seen on the page** (share of use): `#0E1013` 97.9%, `#262B33` 1.2%, `#B6F23C` 0.7%, `#8A93A1` 0.1%, `#F1F3F6` 0.1%, `#648521` 0.0%

## Typography

- Headings: **Chakra Petch** (weight 700)
- Body: **Chakra Petch**
- Mono: **Roboto Mono**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@500;700&family=Roboto+Mono:wght@500&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Button | Chakra Petch | 15 px | 700 | normal | normal |
| Caption / eyebrow | Roboto Mono | 46.2 px | 500 | 46.2px | normal |
| Mono | Roboto Mono | 12 px | 500 | normal | normal |

## Shape, space and motion

- Radius: sm 5 px, md 10 px, lg 12 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 2 px; common steps 3 px, 6 px, 10 px, 14 px, 16 px, 20 px, 22 px, 24 px, 26 px
- Layout: container 1200 px; breakpoints single fluid layout
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** exact, sporty, clean.

Sounds like a coach with a stopwatch: short commands, plain numbers, no fuss. Fastest and slowest laps are named, not decorated.

**Do**

- Use imperative verbs for controls
- Show times to the centisecond
- Name fastest and slowest plainly

**Do not**

- No motivational clichés
- No unexplained abbreviations
- No rounding times for effect

## Taglines

1. Every split, to the centisecond
2. Time it right
3. Lap by lap, no excuses
4. Start, split, stop
5. Precision you can feel

**Boilerplate:** Splitwise Timing makes a precision stopwatch and countdown with centisecond readouts, lap and split tracking and one-tap result export.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Start |
| secondaryCta | Lap |
| success | Results copied to the clipboard |
| error | Could not copy, select the table instead |
| empty | No laps recorded yet |

---
Source listing key `o:stopwatch-laps`. Rebuild with `python3 scripts/brand-kit/build.py o:stopwatch-laps`.
