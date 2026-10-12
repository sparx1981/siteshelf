# EVR Ventures — brand kit

*Environmental regeneration strategy consultancy.* Generated from the SiteShelf listing **EVR Ventures** (Hero Section); every value below is read from that page, not invented.

> **Navigating the route to regeneration**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter Bold (stand-in for Geist) |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **sprout** glyph on a squircle tile. A new shoot expresses regeneration, in keeping with the brand's purpose. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#000000` | Page background |
| surface | `#A0BAEE` | Cards, panels, raised areas |
| text | `#FFFFFF` | Body and heading text |
| textMuted | `#A6A6A6` | Secondary text, captions |
| primary | `#F6DDAC` | Main actions, links, brand colour |
| secondary | `#A0BAEE` | Highlights, charts, second accent |
| border | `#FFFFFF` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#6E6351` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 21.00:1 | pass | pass |
| Muted text on background | 8.63:1 | pass | pass |
| Primary on background | 15.86:1 | pass | pass |
| Text on primary | 14.83:1 | pass | pass |
| Text on surface | 1.95:1 | fail | fail |

**Colours seen on the page** (share of use): `#000000` 99.0%, `#FFFFFF` 0.8%, `#A0BAEE` 0.1%, `#F6DDAC` 0.1%, `#A6A6A6` 0.0%, `#6E6351` 0.0%

## Typography

- Headings: **Geist** (weight 300)
- Body: **Geist**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;700&family=Inter:wght@300;400;500;700&family=Gilda+Display&family=Cormorant+Garamond:wght@400;500&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Geist | 80 px | 300 | 72px | -3.6px |
| Body | Geist | 14 px | 400 | 22.75px | normal |
| Button | Geist | 12 px | 500 | normal | 1.2px |
| Navigation | Geist | 24 px | 700 | normal | 1.2px |
| Caption / eyebrow | Geist | 12 px | 500 | normal | 3px |

## Shape, space and motion

- Radius: sm 0 px, md 0 px, lg 0 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 4 px, 10 px, 12 px, 16 px, 20 px, 24 px, 40 px, 64 px
- Layout: container 1200 px; breakpoints 768 px, 1024 px
- Motion: 250 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** steady, purposeful, measured.

Sounds like a senior advisor briefing a board: calm, evidence-led and focused on measurable outcomes. It prefers verbs of guidance and navigation to grand claims.

**Do**

- Pair every goal with a measurable outcome
- Use navigation language like route, direction and course
- Keep sentences balanced and unhurried

**Do not**

- Do not use green buzzwords or greenwashing
- Do not promise perfect sustainability
- Do not use hype

## Taglines

1. Navigating the route to regeneration
2. Strategy with measurable results
3. Lasting environmental performance, planned
4. Impact you can verify
5. Guiding change, one outcome at a time

**Boilerplate:** EVR Ventures is an environmental consultancy that guides organisations toward lasting environmental performance through actionable strategy and measurable outcomes in regeneration.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Menu |
| secondaryCta | Our services |
| success | Thank you. We will reply within two working days. |
| error | We couldn't send your message. Please try again. |
| empty | No projects to show yet. |

---
Source listing key `m:evr-ventures`. Rebuild with `python3 scripts/brand-kit/build.py m:evr-ventures`.
