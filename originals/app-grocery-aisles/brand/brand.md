# Aislewise — brand kit

*Grocery list sorted in store-walk order.* Generated from the SiteShelf listing **Grocery List By Aisle** (App UI); every value below is read from that page, not invented.

> **Shop in the order you walk**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Young Serif |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **bag** glyph on a circle tile. A shopping bag is the most direct symbol for a grocery list on the move. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#FBF6EA` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#26301F` | Body and heading text |
| textMuted | `#667060` | Secondary text, captions |
| primary | `#D8452A` | Main actions, links, brand colour |
| secondary | `#E8D6B0` | Highlights, charts, second accent |
| border | `#B8B090` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#E8D6B0` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 12.77:1 | pass | pass |
| Muted text on background | 4.81:1 | pass | pass |
| Primary on background | 4.05:1 | fail | pass |
| Text on primary | 4.49:1 | fail | pass |
| Text on surface | 13.77:1 | pass | pass |

**Colours seen on the page** (share of use): `#FBF6EA` 62.9%, `#FFFFFF` 28.8%, `#000000` 3.0%, `#E8D6B0` 1.4%, `#E3F2D6` 1.0%, `#FBE5C4` 1.0%, `#E4EEF9` 1.0%, `#26301F` 0.3%, `#C9B48E` 0.3%, `#D3DFEB` 0.3%

## Typography

- Headings: **Young Serif** (weight 400)
- Body: **Nunito**
- Mono: **Nunito**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&family=Young+Serif&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Young Serif | 56 px | 400 | 58.24px | normal |
| Heading / H2 | Young Serif | 26 px | 400 | normal | normal |
| Body | Nunito | 18 px | 400 | 26.1px | normal |
| Button | Nunito | 13.5 px | 800 | 19.575px | normal |
| Caption / eyebrow | Nunito | 13 px | 800 | normal | 2.08px |
| Mono | Nunito | 12 px | 700 | normal | normal |

## Shape, space and motion

- Radius: sm 5 px, md 14 px, lg 28 px, pill (fully rounded)
- Shadows: sm: `rgba(0, 0, 0, 0.25) 0px 4px 12px 0px` · md: `rgba(60, 40, 10, 0.5) 0px 40px 80px -40px` · lg: `rgba(0, 0, 0, 0.25) 0px 4px 12px 0px`
- Spacing: base unit 2 px; common steps 2 px, 4 px, 6 px, 7 px, 8 px, 10 px, 11 px, 12 px, 14 px
- Layout: container 1040 px; breakpoints 520 px, 900 px
- Motion: 150 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** brisk, fresh, helpful.

Talks like a cheerful friend pushing the trolley next to you: short, practical, a bit chatty about food. It keeps the list moving and never nags about what is left.

**Do**

- Name aisles the way shoppers do: produce, bakery, dairy
- Count progress in plain numbers such as 5 of 14
- Keep every line short enough to read one-handed

**Do not**

- No diet or health lectures
- No exclamation overload on routine ticks
- No store-brand jargon like SKU or planogram

## Taglines

1. Shop in the order you walk
2. Fewer laps, fuller basket
3. Tick it off, trolley on
4. One pass round the shop
5. Your list knows the layout

**Boilerplate:** Aislewise is a shopping list app that sorts every item into the order of the supermarket aisles, so a weekly shop takes one smooth walk instead of three.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Start shopping |
| secondaryCta | Share list |
| success | Added to the basket |
| error | Could not add that, try again |
| empty | Nothing on the list yet, add your first item |

---
Source listing key `o:app-grocery-aisles`. Rebuild with `python3 scripts/brand-kit/build.py o:app-grocery-aisles`.
