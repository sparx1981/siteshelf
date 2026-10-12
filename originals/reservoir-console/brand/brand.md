# Alder Basin — brand kit

*Reservoir monitoring and conservation console.* Generated from the SiteShelf listing **Reservoir Console** (Dashboard); every value below is read from that page, not invented.

> **Every reading, in its place**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from DM Sans |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **drop** glyph on a circle tile. A drop is the simplest sign for a reservoir and stays clear in a small icon. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#EEF3F1` | Page background |
| surface | `#153A33` | Cards, panels, raised areas |
| text | `#14332D` | Body and heading text |
| textMuted | `#50675F` | Secondary text, captions |
| primary | `#14332D` | Main actions, links, brand colour |
| secondary | `#764414` | Highlights, charts, second accent |
| border | `#D5DED9` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#9CA9A7` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 12.15:1 | pass | pass |
| Muted text on background | 5.43:1 | pass | pass |
| Primary on background | 12.15:1 | pass | pass |
| Text on primary | 13.63:1 | pass | pass |
| Text on surface | 1.09:1 | fail | fail |

**Colours seen on the page** (share of use): `#EEF3F1` 72.1%, `#153A33` 16.2%, `#FFFFFF` 10.2%, `#DCE9E2` 1.3%, `#50675F` 0.1%, `#B9E4C7` 0.1%, `#764414` 0.0%, `#9CA9A7` 0.0%

## Typography

- Headings: **DM Sans** (weight 600)
- Body: **DM Sans**
- Google Fonts: `https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | DM Sans | 42 px | 600 | 63px | -1.26px |
| Heading / H2 | DM Sans | 20 px | 700 | 30px | normal |
| Body | DM Sans | 12 px | 400 | 18px | normal |
| Button | DM Sans | 15 px | 400 | 22.5px | normal |
| Caption / eyebrow | DM Sans | 12 px | 400 | 18px | normal |

## Shape, space and motion

- Radius: sm 4 px, md 8 px, lg 10 px
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 6 px, 8 px, 9 px, 10 px, 12 px, 16 px, 18 px, 20 px, 22 px
- Layout: container 1260 px; breakpoints 600 px, 760 px, 900 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** sober, accurate, calm.

Alder Basin writes like an engineer's control room log: precise readings, units, and plainly worded alerts. It makes conservation targets and delayed telemetry easy to read without alarm.

**Do**

- Give readings with units and percentages
- State when data is delayed and by how much
- Describe alerts in one factual sentence

**Do not**

- Do not use disaster language for a low reading
- Avoid rounding that hides change
- Never hide a stale reading

## Taglines

1. Every reading, in its place
2. Water levels, plainly told
3. Monitor today, conserve tomorrow
4. Calm data for careful decisions
5. Know the level, hold the target

**Boilerplate:** Alder Basin is a reservoir operations console showing water levels, sensor alerts and conservation targets across stations, built for fictional demonstration of accessible monitoring.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Acknowledge sensor |
| secondaryCta | View last 24 hours |
| success | Alert acknowledged. Logged at 14:02. |
| error | Telemetry is delayed. Last reading is shown. |
| empty | No active alerts. |

---
Source listing key `o:reservoir-console`. Rebuild with `python3 scripts/brand-kit/build.py o:reservoir-console`.
