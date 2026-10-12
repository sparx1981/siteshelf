# Scalewise — brand kit

*Modular type scale explorer for designers.* Generated from the SiteShelf listing **Modular Type Scale Explorer** (Typography); every value below is read from that page, not invented.

> **Choose a ratio, then trust it**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **bars** glyph on a circle tile. Rising bars of different heights show the steps of a scale. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F5F4F1` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#1B1B1B` | Body and heading text |
| textMuted | `#6B6963` | Secondary text, captions |
| primary | `#7B2D8B` | Main actions, links, brand colour |
| secondary | `#B68CBF` | Highlights, charts, second accent |
| border | `#E3E0D8` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#B68CBF` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 15.66:1 | pass | pass |
| Muted text on background | 4.99:1 | pass | pass |
| Primary on background | 7.37:1 | pass | pass |
| Text on primary | 8.11:1 | pass | pass |
| Text on surface | 17.22:1 | pass | pass |

**Colours seen on the page** (share of use): `#F5F4F1` 89.1%, `#1B1B1B` 10.7%, `#2D2A33` 0.1%, `#6B6963` 0.1%, `#7B2D8B` 0.0%, `#000000` 0.0%, `#B68CBF` 0.0%, `#E3E0D8` 0.0%

## Typography

- Headings: **Inter** (weight 700)
- Body: **Inter**
- Mono: **JetBrains Mono**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Fraunces:wght@400;600;800&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@500&family=Lora:wght@400;600;700&family=Source+Serif+4:wght@400;600;800&family=Space+Grotesk:wght@400;500;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Inter | 22 px | 700 | normal | normal |
| Heading / H2 | Fraunces | 54.9 px | 700 | 57.6828px | normal |
| Subheading / H3 | Fraunces | 43.9 px | 700 | 50.5287px | normal |
| Body | Inter | 14 px | 400 | 21px | normal |
| Button | Inter | 14 px | 600 | normal | normal |
| Mono | JetBrains Mono | 13 px | 500 | 20.8px | normal |

## Shape, space and motion

- Radius: sm 10 px, md 14 px, lg 16 px
- Shadows: none used (flat)
- Spacing: base unit 2 px; common steps 2 px, 3 px, 6 px, 8 px, 10 px, 11 px, 14 px, 18 px, 20 px
- Layout: container 1200 px; breakpoints 900 px, 1200 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** rigorous, calm, practical.

Sounds like a designer explaining a system to a colleague: calm, exact, mildly opinionated. It shows the steps and trusts the ratio.

**Do**

- Give ratio, base size and steps in plain numbers
- Offer copy-ready CSS
- Explain with one sentence

**Do not**

- No type jargon without a gloss
- No dogma about one true ratio
- No decoration around the numbers

## Taglines

1. Choose a ratio, then trust it
2. Hierarchy, worked out for you
3. Type scales without the maths
4. Copy the scale, keep the system
5. Reading is a design decision

**Boilerplate:** Scalewise is a type scale tool that turns a base size and ratio into a full hierarchy, previews it on a live article and exports ready CSS variables.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Copy CSS |
| secondaryCta | Reset |
| success | CSS copied |
| error | Choose a ratio between 1 and 2 |
| empty | Pick a base size and ratio to see the scale |

---
Source listing key `o:typography-scale`. Rebuild with `python3 scripts/brand-kit/build.py o:typography-scale`.
