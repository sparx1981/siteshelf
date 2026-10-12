# Fieldnote Goods — brand kit

*Notebooks, pens and desk things.* Generated from the SiteShelf listing **Dual Range Price Filter** (Form Controls); every value below is read from that page, not invented.

> **Good paper, fairly priced**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Bricolage Grotesque |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **bag** glyph. A shopping bag fits a small shop and its price filter. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F6F4EF` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#211F1A` | Body and heading text |
| textMuted | `#766F60` | Secondary text, captions |
| primary | `#1F6B4A` | Main actions, links, brand colour |
| secondary | `#D97A4A` | Highlights, charts, second accent |
| border | `#E5E0D4` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#A1C1B3` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 14.98:1 | pass | pass |
| Muted text on background | 4.53:1 | pass | pass |
| Primary on background | 5.86:1 | pass | pass |
| Text on primary | 6.44:1 | pass | pass |
| Text on surface | 16.46:1 | pass | pass |

**Colours seen on the page** (share of use): `#F6F4EF` 83.1%, `#D97A4A` 2.1%, `#B2492A` 2.1%, `#3C7FB8` 2.1%, `#244C7A` 2.1%, `#5B9A6B` 2.1%, `#2F6644` 2.1%, `#8A5FB8` 2.1%, `#5A3A82` 2.1%, `#211F1A` 0.2%

## Typography

- Headings: **Bricolage Grotesque** (weight 700)
- Body: **DM Sans**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@500;700;800&family=DM+Sans:wght@400;500;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Heading / H2 | Bricolage Grotesque | 18 px | 700 | normal | normal |
| Subheading / H3 | DM Sans | 13 px | 700 | normal | 1.04px |
| Button | DM Sans | 13 px | 500 | normal | normal |
| Caption / eyebrow | DM Sans | 12.5 px | 400 | 18.75px | normal |

## Shape, space and motion

- Radius: sm 10 px, md 14 px, lg 18 px, pill (fully rounded)
- Shadows: sm: `rgba(0, 0, 0, 0.2) 0px 2px 6px 0px` · md: `rgba(0, 0, 0, 0.2) 0px 2px 6px 0px` · lg: `rgba(0, 0, 0, 0.2) 0px 2px 6px 0px`
- Spacing: base unit 2 px; common steps 2 px, 3 px, 6 px, 8 px, 10 px, 12 px, 14 px, 22 px, 24 px
- Layout: container 1180 px; breakpoints 860 px
- Motion: 150 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** tidy, friendly, practical.

Sounds like a stationery shop with opinions about paper: plain, specific, fond of small objects. Prices and sizes are always visible.

**Do**

- Name the object and its price together
- Use sizes and paper weights plainly
- Keep filters as natural words, not codes

**Do not**

- No pressure to 'upgrade' purchases
- No gimmicky sale wording
- No jargon about paper beyond what is useful

## Taglines

1. Good paper, fairly priced
2. Everything for the desk
3. Find it by what you'll spend
4. Notebooks worth filling
5. Small things for good work

**Boilerplate:** Fieldnote Goods is a small shop selling notebooks, pens and desk items, with a price filter that shows exactly what fits your budget.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Show results |
| secondaryCta | Any |
| success | Filter applied, 14 items shown |
| error | Min must be lower than max, adjust and try again |
| empty | Nothing in that range, widen your filter |

---
Source listing key `o:price-range-filter`. Rebuild with `python3 scripts/brand-kit/build.py o:price-range-filter`.
