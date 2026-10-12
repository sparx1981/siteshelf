# The Weekender — brand kit

*Weekly magazine of long-read features.* Generated from the SiteShelf listing **Editorial Magazine Feature** (Landing Page); every value below is read from that page, not invented.

> **Long reads for slow Saturdays**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Playfair Display |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **monogram** glyph on a squircle tile. The masthead is the name, so a classic serif initial carries the brand. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F4EFE6` | Page background |
| surface | `#F0C98A` | Cards, panels, raised areas |
| text | `#1B1814` | Body and heading text |
| textMuted | `#6B6459` | Secondary text, captions |
| primary | `#8C1D18` | Main actions, links, brand colour |
| secondary | `#F0C98A` | Highlights, charts, second accent |
| border | `#1B1814` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#F0C98A` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 15.44:1 | pass | pass |
| Muted text on background | 5.10:1 | pass | pass |
| Primary on background | 7.96:1 | pass | pass |
| Text on primary | 9.11:1 | pass | pass |
| Text on surface | 11.31:1 | pass | pass |

**Colours seen on the page** (share of use): `#F4EFE6` 96.4%, `#1B1814` 1.3%, `#F0C98A` 0.5%, `#E29A62` 0.5%, `#2B3A55` 0.5%, `#1C2A40` 0.5%, `#6B6459` 0.1%, `#3D372F` 0.1%, `#8C1D18` 0.0%, `#FFFFFF` 0.0%

## Typography

- Headings: **Playfair Display** (weight 900)
- Body: **Source Serif 4**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,400&family=Source+Serif+4:ital,wght@0,400;0,600;1,400&family=Inter:wght@500;600&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Playfair Display | 158 px | 900 | 134.3px | -6.32px |
| Heading / H2 | Playfair Display | 64 px | 700 | 65.28px | -1.28px |
| Subheading / H3 | Playfair Display | 32 px | 700 | 36.8px | -0.32px |
| Body | Source Serif 4 | 22 px | 400 | 33px | normal |
| Navigation | Inter | 15 px | 600 | 20.25px | normal |
| Caption / eyebrow | Inter | 13 px | 500 | 18.2px | normal |

## Shape, space and motion

- Radius: sm 0 px, md 0 px, lg 0 px
- Shadows: none used (flat)
- Spacing: base unit 2 px; common steps 6 px, 8 px, 9 px, 12 px, 14 px, 18 px, 19 px, 23 px, 32 px
- Layout: container 1100 px; breakpoints 900 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** literate, unhurried, curious.

Sounds like a feature editor's standfirst: elegant, specific and a little wry. It opens with a human detail, trusts the reader's patience and prefers a concrete image to an adjective.

**Do**

- Open with a person, a place or a surprising fact
- Use full, well-shaped sentences
- Credit places precisely, such as Brittany or the Atlantic coast

**Do not**

- Do not use clickbait headlines
- Do not break paragraphs for effect
- Do not exaggerate

## Taglines

1. Long reads for slow Saturdays
2. Stories worth the whole weekend
3. Reporting with room to breathe
4. Good writing, unhurried
5. The weekend, properly read

**Boilerplate:** The Weekender is a weekly print-inspired magazine of long-form features, from the last lighthouse keepers of Brittany to quiet professions the modern world left behind.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Read the feature |
| secondaryCta | Contents |
| success | Added to your reading list. |
| error | This page failed to load. Please refresh. |
| empty | Nothing saved to read yet. |

---
Source listing key `o:magazine-cover`. Rebuild with `python3 scripts/brand-kit/build.py o:magazine-cover`.
