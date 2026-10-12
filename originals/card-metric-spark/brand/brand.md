# Tidemark — brand kit

*Analytics cards for teams who read numbers fast.* Generated from the SiteShelf listing **Metric Sparkline Cards** (Cards); every value below is read from that page, not invented.

> **The numbers, at a glance**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Plus Jakarta Sans |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **bars** glyph. Rising bars give an instant, neutral read of a metric, like a tide line on a pier. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F3F5F9` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#121826` | Body and heading text |
| textMuted | `#576178` | Secondary text, captions |
| primary | `#4A55E8` | Main actions, links, brand colour |
| secondary | `#D98A0B` | Highlights, charts, second accent |
| border | `#E1E6EF` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#B3B8F5` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 16.24:1 | pass | pass |
| Muted text on background | 5.68:1 | pass | pass |
| Primary on background | 5.12:1 | pass | pass |
| Text on primary | 5.59:1 | pass | pass |
| Text on surface | 17.73:1 | pass | pass |

**Colours seen on the page** (share of use): `#F3F5F9` 94.2%, `#121826` 3.4%, `#4A55E8` 0.4%, `#0F8A5F` 0.4%, `#0F9FA8` 0.4%, `#E0457B` 0.4%, `#D98A0B` 0.4%, `#8A4FE0` 0.4%, `#576178` 0.2%, `#0B6F4C` 0.0%

## Typography

- Headings: **Plus Jakarta Sans** (weight 800)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Plus Jakarta Sans | 52 px | 800 | 54.08px | -1.56px |
| Caption / eyebrow | Plus Jakarta Sans | 13 px | 800 | normal | 2.08px |

## Shape, space and motion

- Radius: sm 8 px, md 10 px, lg 20 px, pill (fully rounded)
- Shadows: sm: `color(srgb 0.290196 0.333333 0.909804 / 0.22) 0px 0px 0px 4px` · md: `color(srgb 0.0588235 0.623529 0.658824 / 0.22) 0px 0px 0px 4px` · lg: `rgba(20, 30, 60, 0.35) 0px 12px 30px -20px`
- Spacing: base unit 4 px; common steps 2 px, 3 px, 4 px, 8 px, 9 px, 10 px, 12 px, 16 px, 18 px
- Layout: container 1120 px; breakpoints 620 px, 980 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** clear, measured, quietly confident.

Reads like a sharp analyst who gets to the point: figure first, change second, caveat only if it matters. It never decorates a number it can simply state.

**Do**

- State the value, then the delta, then the period
- Use plain verbs like up, down and flat
- Say what changed, not what it means for destiny

**Do not**

- No hype about growth
- Avoid vanity metrics framed as wins
- Never hide a drop in soft wording

## Taglines

1. The numbers, at a glance
2. See the tide, not just the wave
3. Metrics that read themselves
4. Trends first, noise last
5. Know where you stand today

**Boilerplate:** Tidemark is an analytics tool that shows the key numbers a team needs as sparkline cards, with clear deltas and accessible data tables behind every chart.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | View 30 days |
| secondaryCta | Open data table |
| success | Period switched to 30 days. |
| error | Could not load this metric. Try again shortly. |
| empty | No data for this period yet. |

---
Source listing key `o:card-metric-spark`. Rebuild with `python3 scripts/brand-kit/build.py o:card-metric-spark`.
