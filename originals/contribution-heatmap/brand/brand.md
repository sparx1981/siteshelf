# Gridlog — brand kit

*Yearly activity heatmap with streaks and busiest days.* Generated from the SiteShelf listing **Contribution Heatmap** (Dashboard); every value below is read from that page, not invented.

> **A year of work, one grid**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from IBM Plex Sans |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **grid** glyph on a squircle tile. A grid of squares is the heatmap itself, reduced to a mark. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#0D1117` | Page background |
| surface | `#161B22` | Cards, panels, raised areas |
| text | `#8B949E` | Body and heading text |
| textMuted | `#E6EDF3` | Secondary text, captions |
| primary | `#006D32` | Main actions, links, brand colour |
| secondary | `#39D353` | Highlights, charts, second accent |
| border | `#30363D` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#39D353` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 6.15:1 | pass | pass |
| Muted text on background | 16.02:1 | pass | pass |
| Primary on background | 2.91:1 | fail | fail |
| Text on primary | 6.49:1 | pass | pass |
| Text on surface | 5.62:1 | pass | pass |

**Colours seen on the page** (share of use): `#0D1117` 93.2%, `#21262D` 3.2%, `#006D32` 1.1%, `#0E4429` 1.1%, `#39D353` 0.4%, `#26A641` 0.4%, `#8B949E` 0.2%, `#1F6FEB` 0.1%, `#E6EDF3` 0.1%, `#FFFFFF` 0.0%

## Typography

- Headings: **IBM Plex Sans** (weight 600)
- Body: **IBM Plex Sans**
- Google Fonts: `https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:wght@400;500;600&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | IBM Plex Sans | 22 px | 600 | 26.4px | normal |
| Heading / H2 | IBM Plex Sans | 14 px | 600 | normal | 0.84px |
| Button | IBM Plex Sans | 14 px | 500 | normal | normal |
| Caption / eyebrow | IBM Plex Sans | 12 px | 500 | 18px | 0.72px |

## Shape, space and motion

- Radius: sm 3 px, md 8 px, lg 12 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 2 px, 3 px, 4 px, 6 px, 8 px, 10 px, 12 px, 14 px, 16 px
- Layout: container 1080 px; breakpoints 420 px, 800 px
- Motion: 500 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** factual, quiet, motivating.

Reports like a clean commit log: numbers first, tone neutral, with a small nod to progress. It never nags and always lets the data make the point.

**Do**

- Lead with the number and the unit, such as 834 contributions in 2025
- Use neutral words like streak, busiest and average
- Keep tooltips to date plus count

**Do not**

- Guilt about missed days
- Gamified badges and trophies
- Rounding numbers without saying so

## Taglines

1. A year of work, one grid
2. Every square counts
3. See the streak, skip the noise
4. Your busiest day, at a glance
5. Quiet proof of steady effort

**Boilerplate:** Gridlog is an activity dashboard that turns a year of contributions into a heatmap, with streaks, busiest months and a weekday breakdown.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | View 2026 |
| secondaryCta | Switch year |
| success | Streak extended by one day |
| error | Could not load this year. Retry |
| empty | No contributions on this day |

---
Source listing key `o:contribution-heatmap`. Rebuild with `python3 scripts/brand-kit/build.py o:contribution-heatmap`.
