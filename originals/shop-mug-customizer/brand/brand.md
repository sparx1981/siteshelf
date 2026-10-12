# Wheel & Kettle Co. — brand kit

*Custom ceramic mugs, made to order.* Generated from the SiteShelf listing **Mug Customizer** (E-commerce); every value below is read from that page, not invented.

> **Design something you will actually use**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from DM Serif Display |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **flame** glyph on a squircle tile. A flame stands for the kiln and the kettle at once. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F3E6D3` | Page background |
| surface | `#FFFBF3` | Cards, panels, raised areas |
| text | `#261E17` | Body and heading text |
| textMuted | `#6A5D4F` | Secondary text, captions |
| primary | `#2B5A8A` | Main actions, links, brand colour |
| secondary | `#A0451F` | Highlights, charts, second accent |
| border | `#FFFFFF` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#A6BACE` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 13.33:1 | pass | pass |
| Muted text on background | 5.19:1 | pass | pass |
| Primary on background | 5.82:1 | pass | pass |
| Text on primary | 7.16:1 | pass | pass |
| Text on surface | 15.89:1 | pass | pass |

**Colours seen on the page** (share of use): `#F3E6D3` 62.9%, `#FFFBF3` 22.5%, `#E8D3B6` 8.9%, `#9A9088` 1.8%, `#000000` 1.6%, `#2B5A8A` 0.8%, `#261E17` 0.7%, `#8AA386` 0.5%, `#2F56D4` 0.2%, `#D4A237` 0.1%

## Typography

- Headings: **DM Serif Display** (weight 400)
- Body: **Figtree**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Caveat:wght@700&family=DM+Serif+Display&family=Figtree:wght@400;500;700&family=Permanent+Marker&family=Unbounded:wght@600&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | DM Serif Display | 56 px | 400 | 56px | normal |
| Button | Figtree | 14 px | 700 | normal | normal |
| Caption / eyebrow | Figtree | 12 px | 700 | normal | 1.92px |

## Shape, space and motion

- Radius: sm 10 px, md 20 px, lg 24 px, pill (fully rounded)
- Shadows: sm: `rgb(205, 187, 152) 0px 0px 0px 1.5px` · md: `rgb(38, 30, 23) 0px 0px 0px 3px` · lg: `rgba(70, 40, 10, 0.3) 0px 26px 60px 0px`
- Spacing: base unit 2 px; common steps 2 px, 3 px, 6 px, 8 px, 10 px, 12 px, 14 px, 16 px, 18 px
- Layout: container 1240 px; breakpoints 900 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** homely, crafty, friendly.

Wheel & Kettle Co. sounds like a potter chatting over a brew: warm, a bit proud and specific about glaze, size and finish. It makes custom orders feel like a favour between friends.

**Do**

- Describe glaze, size and finish in everyday words
- Show the price as the design changes
- Use kitchen and tea imagery sparingly

**Do not**

- Use factory language like 'SKU' or 'unit'
- Hide the price breakdown
- Overuse puns about tea

## Taglines

1. Design something you will actually use
2. Your mug, your words
3. Thrown, glazed, printed for you
4. Made for the morning cup
5. Pour something into your own design

**Boilerplate:** Wheel & Kettle Co. is a small ceramics maker that prints custom text and patterns on hand-finished mugs, with a live preview, clear pricing and saved design codes.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Add to basket |
| secondaryCta | Save design |
| success | Added to your basket. |
| error | We could not save that design. Please try again. |
| empty | Your basket is empty. |

---
Source listing key `o:shop-mug-customizer`. Rebuild with `python3 scripts/brand-kit/build.py o:shop-mug-customizer`.
