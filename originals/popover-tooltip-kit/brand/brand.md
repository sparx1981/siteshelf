# Anchor — brand kit

*UI kit for tooltips and popovers.* Generated from the SiteShelf listing **Tooltip and Popover Kit** (Components); every value below is read from that page, not invented.

> **Tooltips that never fall off**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **monogram** glyph on a circle tile. A bold A reads like a pointer arrow and gives a firm anchor point. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F5F7FB` | Page background |
| surface | `#2563EB` | Cards, panels, raised areas |
| text | `#667085` | Body and heading text |
| textMuted | `#101828` | Secondary text, captions |
| primary | `#2563EB` | Main actions, links, brand colour |
| secondary | `#F59E0B` | Highlights, charts, second accent |
| border | `#E4E7EC` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#F59E0B` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 4.64:1 | pass | pass |
| Muted text on background | 16.55:1 | pass | pass |
| Primary on background | 4.82:1 | pass | pass |
| Text on primary | 5.17:1 | pass | pass |
| Text on surface | 1.04:1 | fail | fail |

**Colours seen on the page** (share of use): `#F5F7FB` 98.7%, `#101828` 0.4%, `#2563EB` 0.4%, `#667085` 0.4%, `#F59E0B` 0.1%, `#EF4444` 0.1%, `#000000` 0.0%, `#E4E7EC` 0.0%

## Typography

- Headings: **Inter** (weight 700)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Inter | 26 px | 700 | 39px | normal |
| Heading / H2 | Inter | 15 px | 700 | 22.5px | normal |
| Body | Inter | 14 px | 400 | 21px | normal |
| Button | Inter | 13 px | 600 | normal | normal |

## Shape, space and motion

- Radius: sm 10 px, md 12 px, lg 16 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 2 px; common steps 6 px, 10 px, 12 px, 14 px, 16 px, 18 px, 32 px
- Layout: container 900 px; breakpoints 700 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** precise, technical, friendly.

Writes like documentation by someone who loves edge cases: exact, short and a bit proud of a nicely flipped tooltip. Plain explanations beat clever ones.

**Do**

- Explain behaviour with one concrete example
- Name placements exactly: top, right, bottom, left
- Keep tooltip text to one short line

**Do not**

- No jargon like collision resolution in labels
- Avoid cute metaphors
- Never promise it works everywhere

## Taglines

1. Tooltips that never fall off
2. Always in view
3. Position with precision
4. Small hints, perfectly placed
5. Anchored to the right spot

**Boilerplate:** Anchor is a UI component kit for tooltips and popovers that flip and shift to stay inside the viewport, with accessible triggers and rich content.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Hover or focus me |
| secondaryCta | See placements |
| success | Popover opened. |
| error | Couldn't position that popover. Try another side. |
| empty | No content to show here yet. |

---
Source listing key `o:popover-tooltip-kit`. Rebuild with `python3 scripts/brand-kit/build.py o:popover-tooltip-kit`.
