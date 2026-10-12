# Hearthstone Stays — brand kit

*Cosy rentals priced by the night.* Generated from the SiteShelf listing **Dual Range Slider** (Form Controls); every value below is read from that page, not invented.

> **What does a good night cost?**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Young Serif |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **home** glyph. A little home shape expresses the warmth of a stay with a hearth. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#FAF6EF` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#2A2218` | Body and heading text |
| textMuted | `#6D6250` | Secondary text, captions |
| primary | `#C2522D` | Main actions, links, brand colour |
| secondary | `#A7C6E6` | Highlights, charts, second accent |
| border | `#EADFCA` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#A7C6E6` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 14.54:1 | pass | pass |
| Muted text on background | 5.55:1 | pass | pass |
| Primary on background | 4.29:1 | fail | pass |
| Text on primary | 4.63:1 | pass | pass |
| Text on surface | 15.67:1 | pass | pass |

**Colours seen on the page** (share of use): `#FAF6EF` 93.4%, `#C2522D` 2.1%, `#2A2218` 2.1%, `#E9C07A` 0.7%, `#9BC7A2` 0.7%, `#A7C6E6` 0.7%, `#6D6250` 0.2%, `#E5D9C3` 0.1%

## Typography

- Headings: **Young Serif** (weight 400)
- Body: **Karla**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Karla:wght@400;500;700&family=Young+Serif&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Young Serif | 58 px | 400 | 60.32px | normal |
| Heading / H2 | Young Serif | 24 px | 400 | normal | normal |
| Body | Karla | 18 px | 400 | 27.9px | normal |
| Button | Karla | 16 px | 400 | 24.8px | normal |
| Caption / eyebrow | Karla | 13 px | 700 | normal | 2.08px |

## Shape, space and motion

- Radius: sm 3 px, md 12 px, lg 18 px, pill (fully rounded)
- Shadows: sm: `rgba(80, 40, 10, 0.3) 0px 3px 8px 0px` · md: `rgba(80, 50, 10, 0.5) 0px 30px 60px -36px` · lg: `rgba(80, 40, 10, 0.3) 0px 3px 8px 0px`
- Spacing: base unit 4 px; common steps 2 px, 3 px, 4 px, 8 px, 10 px, 12 px, 14 px, 20 px, 24 px
- Layout: container 1000 px; breakpoints 560 px, 980 px
- Motion: 150 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** homely, honest, warm.

Hearthstone Stays sounds like a host who leaves a note by the kettle. It is friendly and plain about price, and it talks about a night's stay rather than a transaction.

**Do**

- Talk about nights, not 'units' or 'inventory'
- State prices in pounds with no hidden extras
- Describe places by what you can touch: hearth, quilt, kettle

**Do not**

- Do not use 'luxury' or 'getaway' as filler
- Do not hide fees until checkout
- Do not rush the guest

## Taglines

1. What does a good night cost?
2. Warm beds at honest prices
3. Find a hearth that fits your budget
4. Stay somewhere that feels like someone's home
5. Your price, your pillow, your night

**Boilerplate:** Hearthstone Stays lists cosy rental homes and guesthouses with transparent per-night prices and filters that let guests search by what they want to spend.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Show stays |
| secondaryCta | Reset |
| success | 42 stays match your range. |
| error | The minimum cannot be higher than the maximum. Adjust a handle. |
| empty | No stays at that price. Try widening the range. |

---
Source listing key `o:control-dual-range`. Rebuild with `python3 scripts/brand-kit/build.py o:control-dual-range`.
