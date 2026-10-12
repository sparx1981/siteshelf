# Mara Ellison — brand kit

*Photographer in Lisbon and elsewhere.* Generated from the SiteShelf listing **Photographer Masonry Gallery** (Gallery); every value below is read from that page, not invented.

> **Last light, quietly kept**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Instrument Serif |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **monogram** glyph on a circle tile. A plain initial suits a personal portfolio where the name is the brand. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F6F4EF` | Page background |
| surface | `#DDDDDD` | Cards, panels, raised areas |
| text | `#141414` | Body and heading text |
| textMuted | `#636261` | Secondary text, captions |
| primary | `#6B2E1A` | Main actions, links, brand colour |
| secondary | `#3B2A5E` | Highlights, charts, second accent |
| border | `#DCD8CF` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#C1A79F` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 16.76:1 | pass | pass |
| Muted text on background | 5.54:1 | pass | pass |
| Primary on background | 9.41:1 | pass | pass |
| Text on primary | 10.34:1 | pass | pass |
| Text on surface | 13.56:1 | pass | pass |

**Colours seen on the page** (share of use): `#F6F4EF` 56.5%, `#DDDDDD` 37.2%, `#000000` 1.8%, `#3B2A5E` 0.6%, `#7A3B1F` 0.6%, `#5A2D2D` 0.6%, `#4A3A5A` 0.6%, `#0A1030` 0.6%, `#3F6F80` 0.6%, `#34566B` 0.6%

## Typography

- Headings: **Instrument Serif** (weight 400)
- Body: **Arial**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Instrument+Serif:ital@0;1&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Instrument Serif | 72 px | 400 | 72px | -1.44px |
| Button | Inter | 13 px | 500 | normal | 1.82px |

## Shape, space and motion

- Radius: sm 0 px, md 0 px, lg 0 px
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 8 px, 10 px, 12 px, 14 px, 22 px, 24 px, 28 px, 64 px
- Layout: container 1280 px; breakpoints 560 px, 900 px
- Motion: 300 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** reserved, observant, quiet.

Mara Ellison writes like her photographs look: restrained, patient and exact about place and light. She names where and when, then lets the picture speak.

**Do**

- Caption with place and year only
- Use lowercase-leaning, plain language
- Leave generous silence around each image

**Do not**

- Use artist-statement abstractions
- Use exclamation marks
- Over-describe the photograph

## Taglines

1. Last light, quietly kept
2. Coast, desert, city, night
3. Photographs from Lisbon and elsewhere
4. Looking slowly, for a living
5. Pictures made at the edge of day

**Boilerplate:** Mara Ellison is a photographer based in Lisbon whose work follows coasts, deserts, cities and nights, shown in a minimal portfolio of selected series.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | View the work |
| secondaryCta | Get in touch |
| success | Message sent. Thank you. |
| error | That did not send. Please try again. |
| empty | No photographs in this series yet. |

---
Source listing key `o:photo-masonry`. Rebuild with `python3 scripts/brand-kit/build.py o:photo-masonry`.
