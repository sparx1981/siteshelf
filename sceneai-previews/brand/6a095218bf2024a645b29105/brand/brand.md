# Designy — brand kit

*Data visuals tool for teams.* Generated from the SiteShelf listing **Designy** (Footer); every value below is read from that page, not invented.

> **Raw data, clear visuals**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **bars** glyph on a squircle tile. A bar chart motif says data visuals in the simplest way. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#FAFAFA` | Page background |
| surface | `#EBEBEB` | Cards, panels, raised areas |
| text | `#71717A` | Body and heading text |
| textMuted | `#0A0A0A` | Secondary text, captions |
| primary | `#71717A` | Main actions, links, brand colour |
| secondary | `#B1B1B6` | Highlights, charts, second accent |
| border | `#F9FAFB` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#B1B1B6` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 4.63:1 | pass | pass |
| Muted text on background | 18.97:1 | pass | pass |
| Primary on background | 4.63:1 | pass | pass |
| Text on primary | 4.83:1 | pass | pass |
| Text on surface | 4.05:1 | fail | pass |

**Colours seen on the page** (share of use): `#FAFAFA` 99.6%, `#71717A` 0.3%, `#0A0A0A` 0.1%, `#EBEBEB` 0.0%, `#B1B1B6` 0.0%

## Typography

- Headings: **Inter** (weight 400)
- Body: **Inter**

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Body | Inter | 13 px | 400 | 20.8px | normal |
| Navigation | Inter | 13 px | 400 | normal | normal |

## Shape, space and motion

- Radius: sm 28 px, md 28 px, lg 28 px
- Shadows: sm: `rgba(0, 0, 0, 0.03) 0px 20px 40px -15px` · md: `rgba(0, 0, 0, 0.03) 0px 20px 40px -15px` · lg: `rgba(0, 0, 0, 0.03) 0px 20px 40px -15px`
- Spacing: base unit 4 px; common steps 10 px, 14 px, 16 px, 18 px, 20 px, 24 px, 32 px, 48 px, 56 px
- Layout: container 1100 px; breakpoints 768 px, 1024 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** clear, modest, helpful.

Sounds like a good analyst explaining a chart: plain, patient and focused on understanding. It values clarity over decoration and says what each visual helps people see.

**Do**

- Name the insight each chart supports
- Use plain verbs like share, show and understand
- Keep documentation steps short

**Do not**

- Do not call charts stunning
- Do not use data science jargon
- Do not overload a visual

## Taglines

1. Raw data, clear visuals
2. Insights that are easy to share
3. Make numbers make sense
4. Show what the data says
5. From spreadsheet to story

**Boilerplate:** Designy helps teams turn raw data into clear, compelling visuals, making insights easier to share, understand and act on, supported by plain documentation.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Create visual |
| secondaryCta | Read documentation |
| success | Visual created. Share it with your team. |
| error | We couldn't build that chart. Check your data. |
| empty | No data yet. Upload a file to start. |

---
Source listing key `s:6a095218bf2024a645b29105`. Rebuild with `python3 scripts/brand-kit/build.py s:6a095218bf2024a645b29105`.
