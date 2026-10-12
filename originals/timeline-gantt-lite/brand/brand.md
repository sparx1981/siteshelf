# Trellis — brand kit

*Compact project planner for builds and renovations.* Generated from the SiteShelf listing **Gantt Chart Lite** (Timeline); every value below is read from that page, not invented.

> **Plan the build, bar by bar**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Sora |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **bars** glyph on a circle tile. Horizontal bars map directly onto a Gantt chart's task rows. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F1F4EF` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#1A2420` | Body and heading text |
| textMuted | `#5C6A63` | Secondary text, captions |
| primary | `#1F6B52` | Main actions, links, brand colour |
| secondary | `#A8532A` | Highlights, charts, second accent |
| border | `#EEF1EC` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#A1C1B6` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 14.37:1 | pass | pass |
| Muted text on background | 5.12:1 | pass | pass |
| Primary on background | 5.76:1 | pass | pass |
| Text on primary | 6.40:1 | pass | pass |
| Text on surface | 15.94:1 | pass | pass |

**Colours seen on the page** (share of use): `#F1F4EF` 56.0%, `#FFFFFF` 39.1%, `#000000` 1.2%, `#5C6A63` 1.1%, `#1D6F86` 0.5%, `#7A3F8A` 0.5%, `#A9D29A` 0.4%, `#7FB871` 0.4%, `#5A9A56` 0.4%, `#1A2420` 0.3%

## Typography

- Headings: **Sora** (weight 600)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@500&family=Inter:wght@400;500;600&family=Sora:wght@600&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Sora | 44 px | 600 | 46.2px | normal |
| Body | Inter | 14 px | 500 | 20.3px | normal |
| Button | Inter | 14 px | 600 | normal | normal |
| Caption / eyebrow | Inter | 12 px | 600 | normal | 1.92px |

## Shape, space and motion

- Radius: sm 3 px, md 8 px, lg 12 px, pill (fully rounded)
- Shadows: sm: `rgba(20, 40, 30, 0.22) 0px 3px 8px 0px, rgba(255, 255, 255, 0.3) 0px 1px 0px 0px inset` · md: `rgba(20, 40, 30, 0.22) 0px 3px 8px 0px, rgba(255, 255, 255, 0.3) 0px 1px 0px 0px inset` · lg: `rgba(20, 40, 30, 0.22) 0px 3px 8px 0px, rgba(255, 255, 255, 0.3) 0px 1px 0px 0px inset`
- Spacing: base unit 2 px; common steps 3 px, 4 px, 6 px, 8 px, 9 px, 10 px, 12 px, 14 px, 16 px
- Layout: container 1280 px; breakpoints 900 px
- Motion: 150 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** methodical, practical, calm.

Trellis sounds like a site foreman with a whiteboard: clear, grounded and unflappable. It names tasks, dates and dependencies plainly and highlights the critical path without drama.

**Do**

- Name tasks as verbs plus objects
- Show dates as day and month
- Call out the critical path in one phrase

**Do not**

- Do not use agile jargon
- Avoid colours as the only signal
- Never move dates without saying why

## Taglines

1. Plan the build, bar by bar
2. Dependencies, kept in line
3. Your project on one page
4. Know what slips what
5. From foundations to finish

**Boilerplate:** Trellis is a compact Gantt planner for builds and renovations, with draggable bars, dependency lines and a highlighted critical path for small project teams.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Today |
| secondaryCta | Reset plan |
| success | Plan saved. |
| error | That move would break a dependency. Adjust the earlier task. |
| empty | No tasks yet. Add your first task. |

---
Source listing key `o:timeline-gantt-lite`. Rebuild with `python3 scripts/brand-kit/build.py o:timeline-gantt-lite`.
