# Elin Varga — brand kit

*Photographer in Tallinn, light and quiet places.* Generated from the SiteShelf listing **Photographer Masonry Portfolio** (Portfolio); every value below is read from that page, not invented.

> **Light, quiet places, the people in them**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Cormorant Garamond |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **monogram** glyph on a squircle tile. An elegant italic initial echoes the photographer's own name set in serif. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F5F2EC` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#191714` | Body and heading text |
| textMuted | `#666460` | Secondary text, captions |
| primary | `#E86A4A` | Main actions, links, brand colour |
| secondary | `#F3D9C0` | Highlights, charts, second accent |
| border | `#D9D3C4` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#F3D9C0` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 16.01:1 | pass | pass |
| Muted text on background | 5.28:1 | pass | pass |
| Primary on background | 2.85:1 | fail | fail |
| Text on primary | 6.17:1 | pass | pass |
| Text on surface | 17.89:1 | pass | pass |

**Colours seen on the page** (share of use): `#F5F2EC` 90.4%, `#F3D9C0` 1.2%, `#6D93A6` 1.2%, `#D9A441` 1.1%, `#2B3A42` 1.1%, `#E8C9A9` 1.0%, `#9FB4A8` 1.0%, `#FFFFFF` 1.0%, `#9EC0D6` 1.0%, `#E86A4A` 1.0%

## Typography

- Headings: **Cormorant Garamond** (weight 600)
- Body: **Karla**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@1,500;1,600&family=Karla:wght@400;500;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Cormorant Garamond | 64 px | 600 | 64px | normal |
| Heading / H2 | Cormorant Garamond | 32 px | 600 | normal | normal |
| Body | Karla | 15 px | 400 | 23.25px | normal |
| Button | Karla | 14 px | 700 | normal | normal |
| Navigation | Karla | 15 px | 700 | 23.25px | normal |
| Caption / eyebrow | Karla | 11.7 px | 700 | normal | normal |

## Shape, space and motion

- Radius: sm 6 px, md 50 px, lg 50 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 6 px, 8 px, 12 px, 14 px, 16 px, 20 px, 24 px, 28 px, 32 px
- Layout: container 1100 px; breakpoints 560 px, 900 px
- Motion: 300 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** quiet, observant, refined.

Writes like a photographer's artist statement edited down: spare, tender and exact about light. It names the place and year, then stops.

**Do**

- Caption with title, place and year
- Use short, concrete sentences
- Describe light, not equipment

**Do not**

- Do not use art-speak like liminal
- Do not boast about awards
- Do not use exclamation marks

## Taglines

1. Light, quiet places, the people in them
2. Tallinn light, held still
3. Photographs made slowly
4. Looking carefully, from the Baltic
5. Landscapes, portraits, and the in-between

**Boilerplate:** Elin Varga is a photographer based in Tallinn whose work in landscape, portrait, street and studio looks for quiet places, soft northern light and the people who live in them.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | See the work |
| secondaryCta | Get in touch |
| success | Message sent. I'll reply within a few days. |
| error | That didn't send. Please try once more. |
| empty | No photographs in this category yet. |

---
Source listing key `o:portfolio-photo-masonry`. Rebuild with `python3 scripts/brand-kit/build.py o:portfolio-photo-masonry`.
