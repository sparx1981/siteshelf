# Greenhatch Garden Centres — brand kit

*Garden centres across a fictional county.* Generated from the SiteShelf listing **Store Locator** (Widgets); every value below is read from that page, not invented.

> **Find your nearest store**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter Bold (stand-in for Albert Sans) |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **sprout** glyph on a squircle tile. A sprout is a plain, honest sign for a garden centre. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F6F7F4` | Page background |
| surface | `#E7EFE3` | Cards, panels, raised areas |
| text | `#1E2A22` | Body and heading text |
| textMuted | `#62705F` | Secondary text, captions |
| primary | `#127446` | Main actions, links, brand colour |
| secondary | `#CFE3EE` | Highlights, charts, second accent |
| border | `#CDD3C7` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#CFE3EE` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 13.86:1 | pass | pass |
| Muted text on background | 4.88:1 | pass | pass |
| Primary on background | 5.41:1 | pass | pass |
| Text on primary | 5.81:1 | pass | pass |
| Text on surface | 12.67:1 | pass | pass |

**Colours seen on the page** (share of use): `#F6F7F4` 57.6%, `#E7EFE3` 39.4%, `#62705F` 0.7%, `#1E2A22` 0.5%, `#CFE3EE` 0.4%, `#CFE6C4` 0.4%, `#1F6B45` 0.3%, `#000000` 0.3%, `#1F9D62` 0.2%, `#3C4A3F` 0.1%

## Typography

- Headings: **Albert Sans** (weight 700)
- Body: **Albert Sans**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Albert+Sans:wght@400;500;600;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Albert Sans | 22 px | 700 | normal | normal |
| Button | Albert Sans | 14 px | 600 | normal | normal |

## Shape, space and motion

- Radius: sm 6 px, md 8 px, lg 10 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 2 px, 4 px, 6 px, 8 px, 10 px, 11 px, 12 px, 14 px, 16 px
- Layout: container 1200 px; breakpoints 900 px
- Motion: 150 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** helpful, grounded, neighbourly.

Greenhatch sounds like a knowledgeable assistant in a green apron, ready with directions and plant advice. It is plain, friendly and clear about hours and what each store offers.

**Do**

- State whether a store is open now and when it closes
- Mention services in plain words
- Give directions before anything else

**Do not**

- Do not use landscaping jargon
- Do not hide opening hours
- Do not call customers 'guests'

## Taglines

1. Find your nearest store
2. Seeds, soil and good advice
3. A garden centre close to home
4. Open now, and we know where
5. Grow something this weekend

**Boilerplate:** Greenhatch Garden Centres is a retailer with eight stores across a county, offering plants, garden advice, click and collect, a café and pet supplies.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Get directions |
| secondaryCta | Use my location |
| success | Showing 3 stores open now near you. |
| error | We could not find your location. Enter a town or postcode. |
| empty | No stores match. Try removing a filter. |

---
Source listing key `o:store-locator`. Rebuild with `python3 scripts/brand-kit/build.py o:store-locator`.
