# Atelier — brand kit

*Small-run furniture, textiles and everyday objects.* Generated from the SiteShelf listing **Atelier Mega Menu Navigation** (Navigation); every value below is read from that page, not invented.

> **Objects for slower rooms**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Newsreader |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **home** glyph on a circle tile. A simple house shape represents objects for rooms and keeps the mark understated. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F7F5F0` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#1D1B19` | Body and heading text |
| textMuted | `#B4452B` | Secondary text, captions |
| primary | `#B4452B` | Main actions, links, brand colour |
| secondary | `#D6998A` | Highlights, charts, second accent |
| border | `#D8D6D2` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#D6998A` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 15.76:1 | pass | pass |
| Muted text on background | 5.04:1 | pass | pass |
| Primary on background | 5.04:1 | pass | pass |
| Text on primary | 5.49:1 | pass | pass |
| Text on surface | 17.17:1 | pass | pass |

**Colours seen on the page** (share of use): `#F7F5F0` 98.2%, `#1D1B19` 1.6%, `#77726B` 0.2%, `#B4452B` 0.0%, `#D6998A` 0.0%, `#D8D6D2` 0.0%

## Typography

- Headings: **Newsreader** (weight 400)
- Body: **Public Sans**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;1,6..72,400&family=Public+Sans:wght@400;500;600&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Newsreader | 86.4 px | 400 | 86.4px | -1.728px |
| Body | Public Sans | 16 px | 400 | 24px | normal |
| Button | Public Sans | 15 px | 500 | normal | normal |
| Navigation | Newsreader | 26 px | 500 | normal | normal |

## Shape, space and motion

- Radius: sm 10 px, md 10 px, lg 10 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 4 px, 6 px, 8 px, 14 px, 16 px, 20 px, 28 px, 30 px, 40 px
- Layout: container 1100 px; breakpoints 900 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** considered, tactile, unhurried.

A maker describing their own bench: calm, specific and generous with materials and makers' names. Sentences are slow, with room for a good adjective.

**Do**

- Name materials and makers
- Write product copy in plain, quiet sentences
- Mention small runs and finishes honestly

**Do not**

- Mass-market words like bestseller
- Urgency banners and countdowns
- Vague luxury language

## Taglines

1. Objects for slower rooms
2. Made in small runs, by name
3. Furniture that earns its place
4. Hand-finished, never rushed
5. Things worth keeping

**Boilerplate:** Atelier is a shop for hand-finished furniture, textiles and everyday objects, made in small runs by studios it knows by name.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Shop the collection |
| secondaryCta | Visit the studio |
| success | Added to your bag |
| error | That item sold out. See similar pieces |
| empty | Your bag is empty |

---
Source listing key `o:megamenu-atelier`. Rebuild with `python3 scripts/brand-kit/build.py o:megamenu-atelier`.
