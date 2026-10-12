# Gauge Lab — brand kit

*Specimen studio for progress indicators.* Generated from the SiteShelf listing **Progress Indicators** (Loaders); every value below is read from that page, not invented.

> **Every kind of progress, measured**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Outfit |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **dial** glyph on a squircle tile. A dial gauge is the exact instrument the lab measures with. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F5F7FB` | Page background |
| surface | `#EAEEF6` | Cards, panels, raised areas |
| text | `#172036` | Body and heading text |
| textMuted | `#656B7B` | Secondary text, captions |
| primary | `#2E6BFF` | Main actions, links, brand colour |
| secondary | `#FF5C7A` | Highlights, charts, second accent |
| border | `#E1E6F0` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#A7C1FF` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 15.10:1 | pass | pass |
| Muted text on background | 4.97:1 | pass | pass |
| Primary on background | 4.20:1 | fail | pass |
| Text on primary | 4.50:1 | pass | pass |
| Text on surface | 13.93:1 | pass | pass |

**Colours seen on the page** (share of use): `#F5F7FB` 97.8%, `#FF5C7A` 0.6%, `#172036` 0.5%, `#8A5CFF` 0.5%, `#19C39A` 0.3%, `#2E6BFF` 0.2%, `#667290` 0.1%, `#656B7B` 0.0%, `#E1E6F0` 0.0%, `#A7C1FF` 0.0%

## Typography

- Headings: **Outfit** (weight 700)
- Body: **Outfit**
- Mono: **IBM Plex Mono**
- Google Fonts: `https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@500&family=Outfit:wght@500;600;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Outfit | 40 px | 700 | 42px | -0.8px |
| Button | Outfit | 14 px | 600 | normal | normal |
| Caption / eyebrow | IBM Plex Mono | 17 px | 500 | normal | normal |
| Mono | IBM Plex Mono | 14 px | 500 | 21px | normal |

## Shape, space and motion

- Radius: sm 12 px, md 18 px, lg 18 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 4 px, 6 px, 8 px, 12 px, 14 px, 16 px, 18 px, 20 px, 24 px
- Layout: container 1100 px; breakpoints 600 px, 900 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** bright, technical, tidy.

Writes like a lab notebook with a sense of fun: short labels, exact numbers and little capitalised captions. Everything is a measurement, named plainly.

**Do**

- Caption each indicator with its type and value
- Use uppercase labels for categories
- State percentages exactly

**Do not**

- No vague words like loading soon
- Avoid hype
- Never leave a loader without a status line

## Taglines

1. Every kind of progress, measured
2. Watch it fill, count it done
3. Loaders under the microscope
4. One simulation, six gauges
5. Measure twice, load once

**Boilerplate:** Gauge Lab is a studio specimen board of progress and loading indicators, from rings to striped bars, driven by a shared simulation with play and reset controls.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Play |
| secondaryCta | Restart |
| success | Complete. All gauges at 100 percent. |
| error | Simulation stalled. Press restart. |
| empty | Nothing running. Press play to begin. |

---
Source listing key `o:progress-loaders`. Rebuild with `python3 scripts/brand-kit/build.py o:progress-loaders`.
