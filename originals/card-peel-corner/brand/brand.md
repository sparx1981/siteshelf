# Marlow & Pine — brand kit

*Homeware shop with hidden offers under the corner.* Generated from the SiteShelf listing **Peel Corner Cards** (Cards); every value below is read from that page, not invented.

> **Peek under the corner**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Young Serif |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **sprout** glyph on a squircle tile. A sprout hints at living, growing homes and echoes the pine in the name. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F2ECE0` | Page background |
| surface | `#FFFDF8` | Cards, panels, raised areas |
| text | `#6A5F4D` | Body and heading text |
| textMuted | `#2A241B` | Secondary text, captions |
| primary | `#D9482B` | Main actions, links, brand colour |
| secondary | `#E9D9C0` | Highlights, charts, second accent |
| border | `#E2D8C4` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#E9D9C0` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 5.32:1 | pass | pass |
| Muted text on background | 13.06:1 | pass | pass |
| Primary on background | 3.63:1 | fail | pass |
| Text on primary | 4.60:1 | pass | pass |
| Text on surface | 6.15:1 | pass | pass |

**Colours seen on the page** (share of use): `#F2ECE0` 64.5%, `#FFFDF8` 32.6%, `#E9D9C0` 0.7%, `#000000` 0.5%, `#C9B48E` 0.4%, `#D6E4DE` 0.4%, `#6E7FB3` 0.4%, `#D9482B` 0.3%, `#6A5F4D` 0.2%, `#2A241B` 0.1%

## Typography

- Headings: **Young Serif** (weight 400)
- Body: **Karla**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Karla:wght@400;500;700&family=Young+Serif&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Young Serif | 64 px | 400 | 64px | -0.64px |
| Heading / H2 | Young Serif | 24 px | 400 | 26.4px | normal |
| Body | Karla | 18 px | 400 | 27.9px | normal |
| Button | Karla | 16 px | 400 | 24.8px | normal |
| Caption / eyebrow | Karla | 13 px | 700 | normal | 2.08px |

## Shape, space and motion

- Radius: sm 6 px, md 22 px, lg 22 px
- Shadows: sm: `rgba(0, 0, 0, 0.25) -6px -6px 14px 0px` · md: `rgba(0, 0, 0, 0.25) -6px -6px 14px 0px` · lg: `rgba(0, 0, 0, 0.25) -6px -6px 14px 0px`
- Spacing: base unit 4 px; common steps 4 px, 8 px, 10 px, 12 px, 14 px, 20 px, 22 px, 24 px, 30 px
- Layout: container 1100 px; breakpoints 600 px, 980 px
- Motion: 380 ms, `cubic-bezier(0.3`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** playful, cosy, assured.

Marlow & Pine writes like a friendly shopkeeper who leaves little surprises in the bag. Short, tactile phrases about linen, ceramic and brass, with a gentle wink when there is a code to find.

**Do**

- Describe the material and the feel in one phrase
- Hint at the offer instead of announcing it
- Keep prices and codes plain and legible

**Do not**

- Do not use countdown pressure or fake scarcity
- Avoid 'must-have' and 'luxury'
- Never hide the terms of a code

## Taglines

1. Peek under the corner
2. Good things, folded gently
3. Homeware with a little surprise
4. Linen, brass, ceramic and a secret
5. Lift the corner, find the code

**Boilerplate:** Marlow & Pine is a homeware shop selling linen, ceramics, brass and oak for everyday rooms, with small offers tucked under the corner of each product card.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Reveal the offer |
| secondaryCta | Copy code |
| success | Code copied. Use it at checkout. |
| error | Could not copy that code. Select and copy it by hand. |
| empty | No offers under this corner. |

---
Source listing key `o:card-peel-corner`. Rebuild with `python3 scripts/brand-kit/build.py o:card-peel-corner`.
