# Fellgate — brand kit

*Outdoor clothing and boots for autumn.* Generated from the SiteShelf listing **Mobile Drill-Down Menu** (Navigation); every value below is read from that page, not invented.

> **Wool, waxed cotton and good boots**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Outfit |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **peak** glyph. A fell-top silhouette fits the name and the outdoor range. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#FFFFFF` | Page background |
| surface | `#DFE3E8` | Cards, panels, raised areas |
| text | `#0F1D22` | Body and heading text |
| textMuted | `#5F6E75` | Secondary text, captions |
| primary | `#0E7490` | Main actions, links, brand colour |
| secondary | `#7AB3C2` | Highlights, charts, second accent |
| border | `#DDDFE0` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#7AB3C2` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 17.23:1 | pass | pass |
| Muted text on background | 5.28:1 | pass | pass |
| Primary on background | 5.36:1 | pass | pass |
| Text on primary | 5.36:1 | pass | pass |
| Text on surface | 13.36:1 | pass | pass |

**Colours seen on the page** (share of use): `#FFFFFF` 62.5%, `#DFE3E8` 37.4%, `#0F1D22` 0.1%, `#5F6E75` 0.0%, `#0E7490` 0.0%, `#000000` 0.0%, `#7AB3C2` 0.0%

## Typography

- Headings: **Outfit** (weight 700)
- Body: **Outfit**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Outfit | 30 px | 700 | 42px | normal |
| Button | Outfit | 16 px | 400 | 22.4px | normal |

## Shape, space and motion

- Radius: sm 10 px, md 10 px, lg 10 px
- Shadows: sm: `rgba(0, 0, 0, 0.15) 0px 0px 40px 0px` · md: `rgba(0, 0, 0, 0.15) 0px 0px 40px 0px` · lg: `rgba(0, 0, 0, 0.15) 0px 0px 40px 0px`
- Spacing: base unit 4 px; common steps 6 px, 8 px, 10 px, 12 px, 14 px, 16 px, 24 px, 40 px
- Layout: container 1200 px; breakpoints single fluid layout
- Motion: 300 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** rugged, warm, clear.

Sounds like a shopkeeper in a waxed jacket: straightforward, tactile and fond of weather. It names cloth and cuts plainly and keeps menu words to one or two syllables.

**Do**

- Name fabrics and products plainly, such as wool, waxed cotton, boots
- Keep menu labels to one word where possible
- Use weather as the hook, not discounts

**Do not**

- Do not use fashion hype like must-have
- Do not bury categories under clever names
- Do not use exclamation marks

## Taglines

1. Wool, waxed cotton and good boots
2. Dressed for the turn of the year
3. Autumn arrivals, built to last
4. Warm layers for wet walks
5. Clothes for muddy lanes

**Boilerplate:** Fellgate is an outdoor clothing shop selling wool knitwear, waxed cotton jackets and sturdy boots for autumn walks, with simple navigation designed for a phone in a pocket.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Shop |
| secondaryCta | Back |
| success | Added to your basket. |
| error | We couldn't open that section. Try again. |
| empty | Nothing here yet. Try another section. |

---
Source listing key `o:nav-mobile-drawer-stack`. Rebuild with `python3 scripts/brand-kit/build.py o:nav-mobile-drawer-stack`.
