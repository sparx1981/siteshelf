# Daybreak Supply — brand kit

*Outdoor-and-home goods for early starts.* Generated from the SiteShelf listing **Bundle Builder** (E-commerce); every value below is read from that page, not invented.

> **Pick any three, save a fifth**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Young Serif |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **bag** glyph on a circle tile. A shopping bag stands for the bundle the shopper packs. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F7F1E5` | Page background |
| surface | `#FFFDF8` | Cards, panels, raised areas |
| text | `#201B15` | Body and heading text |
| textMuted | `#675C4C` | Secondary text, captions |
| primary | `#7A4A08` | Main actions, links, brand colour |
| secondary | `#E3BFA4` | Highlights, charts, second accent |
| border | `#201B15` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#E3BFA4` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 15.19:1 | pass | pass |
| Muted text on background | 5.81:1 | pass | pass |
| Primary on background | 6.64:1 | pass | pass |
| Text on primary | 7.47:1 | pass | pass |
| Text on surface | 16.81:1 | pass | pass |

**Colours seen on the page** (share of use): `#F7F1E5` 59.9%, `#FFFDF8` 34.1%, `#000000` 3.0%, `#C7CED6` 0.8%, `#E8DCC4` 0.5%, `#E3BFA4` 0.5%, `#8AA89A` 0.5%, `#4A5A6A` 0.2%, `#5A6A3A` 0.2%, `#201B15` 0.2%

## Typography

- Headings: **Young Serif** (weight 400)
- Body: **Figtree**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;700&family=Young+Serif&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Young Serif | 56 px | 400 | 57.12px | normal |
| Heading / H2 | Young Serif | 24 px | 400 | normal | normal |
| Body | Figtree | 15 px | 400 | 22.5px | normal |
| Button | Figtree | 14 px | 700 | normal | normal |
| Caption / eyebrow | Figtree | 12 px | 700 | normal | 1.92px |

## Shape, space and motion

- Radius: sm 8 px, md 12 px, lg 16 px, pill (fully rounded)
- Shadows: sm: `rgba(70, 45, 10, 0.16) 0px 22px 50px 0px` · md: `rgba(70, 45, 10, 0.16) 0px 22px 50px 0px` · lg: `rgba(70, 45, 10, 0.16) 0px 22px 50px 0px`
- Spacing: base unit 4 px; common steps 3 px, 4 px, 5 px, 6 px, 8 px, 10 px, 12 px, 14 px, 16 px
- Layout: container 1260 px; breakpoints 960 px
- Motion: 150 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** upbeat, practical, honest.

Sounds like a friendly shopkeeper who weighs everything before recommending it. Savings are stated plainly as pounds off, not hype.

**Do**

- State the saving as a number
- Name each product by what it does
- Keep calls to action to three words

**Do not**

- No fake countdowns
- No vague 'amazing deal' language
- No hidden conditions

## Taglines

1. Pick any three, save a fifth
2. Build a box worth opening
3. Good gear, bundled kindly
4. Fill the box, see the saving
5. Supplies for early starts

**Boilerplate:** Daybreak Supply sells outdoor and home goods and lets shoppers build their own gift box of three products with an automatic fifth off.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Add to bundle |
| secondaryCta | Fill with favourites |
| success | Bundle added, you saved £14 |
| error | That item is out of stock, choose another |
| empty | Choose 3 items to start your bundle |

---
Source listing key `o:shop-bundle-builder`. Rebuild with `python3 scripts/brand-kit/build.py o:shop-bundle-builder`.
