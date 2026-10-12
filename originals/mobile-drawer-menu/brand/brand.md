# Pebble&Pine — brand kit

*Small-batch homewares for quiet mornings.* Generated from the SiteShelf listing **Mobile Drawer Menu** (Navigation); every value below is read from that page, not invented.

> **Slow things, made to last**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from DM Serif Display |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **stack** glyph on a squircle tile. A stack of pebbles in a simple glyph feels handmade and balanced. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#E9E6DF` | Page background |
| surface | `#FBFAF7` | Cards, panels, raised areas |
| text | `#1B1B1D` | Body and heading text |
| textMuted | `#5A5750` | Secondary text, captions |
| primary | `#E8553D` | Main actions, links, brand colour |
| secondary | `#F2A294` | Highlights, charts, second accent |
| border | `#1B1B1D` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#682A22` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 13.80:1 | pass | pass |
| Muted text on background | 5.78:1 | pass | pass |
| Primary on background | 2.91:1 | fail | fail |
| Text on primary | 5.42:1 | pass | pass |
| Text on surface | 16.48:1 | pass | pass |

**Colours seen on the page** (share of use): `#E9E6DF` 73.5%, `#FBFAF7` 18.5%, `#3F6B5C` 1.5%, `#C9833B` 1.5%, `#7A5A8F` 1.5%, `#B9473A` 1.5%, `#F3D9C9` 1.4%, `#1B1B1D` 0.5%, `#5A5750` 0.0%, `#6F6C66` 0.0%

## Typography

- Headings: **DM Serif Display** (weight 400)
- Body: **DM Sans**
- Google Fonts: `https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=DM+Serif+Display&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | DM Serif Display | 40 px | 400 | 42px | normal |
| Body | DM Sans | 16 px | 400 | 24px | normal |
| Button | Arial | 13.3 px | 400 | normal | normal |

## Shape, space and motion

- Radius: sm 12 px, md 16 px, lg 38 px, pill (fully rounded)
- Shadows: sm: `rgba(27, 27, 29, 0.28) 0px 30px 70px 0px` · md: `rgba(27, 27, 29, 0.28) 0px 30px 70px 0px` · lg: `rgba(27, 27, 29, 0.28) 0px 30px 70px 0px`
- Spacing: base unit 2 px; common steps 2 px, 6 px, 10 px, 12 px, 13 px, 14 px, 16 px, 18 px, 20 px
- Layout: container 1200 px; breakpoints 460 px
- Motion: 300 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** gentle, grounded, crafted.

Pebble&Pine speaks softly, like a shopkeeper who wraps each purchase in paper. Lines are short, sensory and slow, with a bias for mornings, hands and kitchens.

**Do**

- Describe an object by how it feels in the hand
- Use morning and kitchen scenes
- Keep navigation labels to one word

**Do not**

- Do not use words like curated or artisanal
- Avoid sale shouting
- Never rush the reader

## Taglines

1. Slow things, made to last
2. Homewares for quiet mornings
3. Small batches, kindly made
4. Objects that settle into a kitchen
5. Made slowly, used gladly

**Boilerplate:** Pebble&Pine makes and sells small-batch homewares for quiet mornings, from stoneware cups to linen cloths, designed to be used daily and last for years.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Shop the autumn edit |
| secondaryCta | Open menu |
| success | Added to your basket. |
| error | Could not add that. Please try again. |
| empty | Your basket is empty. |

---
Source listing key `o:mobile-drawer-menu`. Rebuild with `python3 scripts/brand-kit/build.py o:mobile-drawer-menu`.
