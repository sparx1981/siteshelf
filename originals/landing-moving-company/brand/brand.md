# Haul & Hum Movers — brand kit

*Family-run removals across the north of England.* Generated from the SiteShelf listing **Haul & Hum Movers** (Landing Page); every value below is read from that page, not invented.

> **Your whole life, one organised van**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Big Shoulders Display |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **cube** glyph on a circle tile. A box is the unit of every move and sits well in a bold, boxed layout. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F6F3EA` | Page background |
| surface | `#FFD23F` | Cards, panels, raised areas |
| text | `#1C1C1E` | Body and heading text |
| textMuted | `#000000` | Secondary text, captions |
| primary | `#FFD23F` | Main actions, links, brand colour |
| secondary | `#8C7423` | Highlights, charts, second accent |
| border | `#1C1C1E` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#8C7423` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 15.34:1 | pass | pass |
| Muted text on background | 18.93:1 | pass | pass |
| Primary on background | 1.30:1 | fail | fail |
| Text on primary | 13.60:1 | pass | pass |
| Text on surface | 11.78:1 | pass | pass |

**Colours seen on the page** (share of use): `#F6F3EA` 53.9%, `#FFD23F` 23.6%, `#FFFFFF` 14.3%, `#1C1C1E` 7.7%, `#2A2A2D` 0.5%, `#EEE8D6` 0.1%, `#D8D5CA` 0.0%, `#B9B6AC` 0.0%, `#000000` 0.0%, `#8C7423` 0.0%

## Typography

- Headings: **Big Shoulders Display** (weight 800)
- Body: **Work Sans**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@800&family=Work+Sans:wght@400;500;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Big Shoulders Display | 121.0 px | 800 | 108.864px | normal |
| Heading / H2 | Big Shoulders Display | 76 px | 800 | 69.92px | normal |
| Body | Work Sans | 19 px | 500 | 30.4px | normal |
| Button | Work Sans | 14 px | 700 | normal | normal |
| Navigation | Work Sans | 15 px | 700 | 24px | normal |
| Caption / eyebrow | Work Sans | 12 px | 700 | 19.2px | 1.68px |

## Shape, space and motion

- Radius: sm 3 px, md 16 px, lg 18 px, pill (fully rounded)
- Shadows: sm: `rgba(28, 28, 30, 0.35) 4px 4px 0px 0px` · md: `rgb(170, 170, 170) 0px 0px 0px 6px inset` · lg: `rgb(28, 28, 30) 6px 6px 0px 0px`
- Spacing: base unit 2 px; common steps 3 px, 5 px, 6 px, 10 px, 14 px, 18 px, 20 px, 24 px, 26 px
- Layout: container 1280 px; breakpoints 860 px
- Motion: 150 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** cheerful, dependable, straight-talking.

Haul & Hum talks like a friendly northern crew chief who has seen every wardrobe and sofa. It is warm and a bit cheeky, gives fixed prices and always mentions the tea break.

**Do**

- Give prices and van sizes plainly
- Use friendly northern English, not slang
- Refer to the crew by what they do

**Do not**

- Do not hide the price behind 'get a quote'
- Do not use corporate logistics words
- Do not joke about breakages

## Taglines

1. Your whole life, one organised van
2. Careful crews, fixed prices, tea included
3. We carry it, you relax
4. Moving day without the mess
5. Boxed, loaded, humming along

**Boilerplate:** Haul & Hum Movers is a family-run removals firm serving the north of England with careful crews, fixed prices and an instant online estimate.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Get a quote |
| secondaryCta | Estimate my move |
| success | Estimate ready. A medium van and two crew should do it. |
| error | We cannot reach that postcode yet. Call us on 0161 555 0142. |
| empty | No rooms added yet. Tap plus to start. |

---
Source listing key `o:landing-moving-company`. Rebuild with `python3 scripts/brand-kit/build.py o:landing-moving-company`.
