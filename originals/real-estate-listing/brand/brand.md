# Alder & Finch — brand kit

*Estate agents for harbourside homes.* Generated from the SiteShelf listing **Property Listing** (Landing Page); every value below is read from that page, not invented.

> **Homes with a view of the harbour**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Fraunces |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **monogram** glyph. A serif ampersand-style A gives the agency a classic, signboard feel. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#FBFAF8` | Page background |
| surface | `#DDDDDD` | Cards, panels, raised areas |
| text | `#394150` | Body and heading text |
| textMuted | `#1D2330` | Secondary text, captions |
| primary | `#0F5E63` | Main actions, links, brand colour |
| secondary | `#C46A3D` | Highlights, charts, second accent |
| border | `#D6D1C5` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#9ABBBD` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 9.84:1 | pass | pass |
| Muted text on background | 15.08:1 | pass | pass |
| Primary on background | 7.19:1 | pass | pass |
| Text on primary | 7.50:1 | pass | pass |
| Text on surface | 7.56:1 | pass | pass |

**Colours seen on the page** (share of use): `#FBFAF8` 71.3%, `#DDDDDD` 25.3%, `#1D2330` 1.3%, `#0F5E63` 0.5%, `#C46A3D` 0.4%, `#000000` 0.3%, `#C9A87C` 0.2%, `#FFF8D8` 0.2%, `#E8ECEF` 0.2%, `#394150` 0.2%

## Typography

- Headings: **Fraunces** (weight 600)
- Body: **DM Sans**
- Google Fonts: `https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Fraunces:wght@500;600&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Heading / H2 | Fraunces | 26 px | 600 | normal | normal |
| Subheading / H3 | Fraunces | 20 px | 600 | normal | normal |
| Body | DM Sans | 16 px | 400 | 26.4px | normal |
| Button | Arial | 13.3 px | 400 | normal | normal |
| Navigation | DM Sans | 14.5 px | 500 | 23.925px | normal |
| Caption / eyebrow | DM Sans | 14 px | 400 | normal | normal |

## Shape, space and motion

- Radius: sm 10 px, md 14 px, lg 18 px, pill (fully rounded)
- Shadows: sm: `rgba(0, 0, 0, 0.25) 0px 4px 14px 0px` · md: `rgba(29, 35, 48, 0.4) 0px 20px 40px -30px` · lg: `rgba(0, 0, 0, 0.25) 0px 4px 14px 0px`
- Spacing: base unit 2 px; common steps 2 px, 4 px, 6 px, 8 px, 10 px, 11 px, 12 px, 14 px, 16 px
- Layout: container 1200 px; breakpoints 520 px, 900 px
- Motion: 300 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** polished, local, honest.

Sounds like an agent who actually likes the street: precise on facts, soft on atmosphere. It shows numbers first, then the light in the kitchen.

**Do**

- Lead with the address and the key facts
- Describe rooms with one sensory detail
- State monthly figures with their assumptions

**Do not**

- No estate-agent superlatives like stunning
- No hiding the service charge
- No pressure to book now

## Taglines

1. Homes with a view of the harbour
2. Find the house, then the street
3. Honest listings, local knowledge
4. Viewings arranged properly
5. A good address, plainly told

**Boilerplate:** Alder & Finch is a harbourside estate agency listing homes with full facts, floor plans and honest estimates, including 14 Wren Lane in Bristol.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Request viewing |
| secondaryCta | Read more |
| success | Viewing requested, we will call within a day |
| error | Please check your details and try again |
| empty | No viewing slots selected yet |

---
Source listing key `o:real-estate-listing`. Rebuild with `python3 scripts/brand-kit/build.py o:real-estate-listing`.
