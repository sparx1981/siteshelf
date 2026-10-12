# Portiva — brand kit

*Creative agency.* Generated from the SiteShelf listing **Portiva** (Creative Agency); every value below is read from that page, not invented.

> **Less complexity, more impact**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **globe** glyph on a squircle tile. A globe suggests a portfolio that reaches wide. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#111111` | Page background |
| surface | `#4A2E1C` | Cards, panels, raised areas |
| text | `#FFFFFF` | Body and heading text |
| textMuted | `#ACACAC` | Secondary text, captions |
| primary | `#4A2E1C` | Main actions, links, brand colour |
| secondary | `#C25E2E` | Highlights, charts, second accent |
| border | `#FFFFFF` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#C25E2E` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 18.88:1 | pass | pass |
| Muted text on background | 8.32:1 | pass | pass |
| Primary on background | 1.53:1 | fail | fail |
| Text on primary | 12.36:1 | pass | pass |
| Text on surface | 12.36:1 | pass | pass |

**Colours seen on the page** (share of use): `#111111` 84.8%, `#4A2E1C` 14.1%, `#FFFFFF` 1.0%, `#000000` 0.1%, `#C25E2E` 0.0%, `#ACACAC` 0.0%

## Typography

- Headings: **Inter** (weight 500)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Inter | 62 px | 500 | 65.1px | -1.86px |
| Button | Inter | 14 px | 500 | normal | normal |
| Navigation | Inter | 15 px | 400 | normal | normal |

## Shape, space and motion

- Radius: sm 0 px, md 0 px, lg 0 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 6 px, 11 px, 12 px, 22 px, 24 px, 26 px, 36 px, 64 px
- Layout: container 1200 px; breakpoints 820 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** confident, minimal, direct.

Speaks like an agency partner who values an uncluttered brief: concise, calm and a little understated. The promise is less complexity and more impact.

**Do**

- Lead with the outcome
- Keep copy short and spare
- Invite a conversation

**Do not**

- No agency buzzwords
- Avoid long case-study prose
- Never overcomplicate the offer

## Taglines

1. Less complexity, more impact
2. Creative work that cuts through
3. Simple ideas, bold results
4. Chat with us. Build something
5. Make less. Mean more

**Boilerplate:** Portiva is a creative agency delivering focused branding and digital work for clients who want less complexity and more impact in every project.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Chat with us |
| secondaryCta | Our works |
| success | Message sent. We'll be in touch. |
| error | Couldn't send that. Please try again. |
| empty | No works to show yet. |

---
Source listing key `s:6a61dae40cd891fdf74d7092`. Rebuild with `python3 scripts/brand-kit/build.py s:6a61dae40cd891fdf74d7092`.
