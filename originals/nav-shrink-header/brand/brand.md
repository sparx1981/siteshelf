# Northlight Journal — brand kit

*Independent magazine of features and essays.* Generated from the SiteShelf listing **Shrinking Sticky Header** (Navigation); every value below is read from that page, not invented.

> **The last good winter**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Playfair Display |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **compass** glyph on a squircle tile. A compass points north, matching the Northlight name and a sense of direction. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#FAF7F2` | Page background |
| surface | `#14202B` | Cards, panels, raised areas |
| text | `#1C1A17` | Body and heading text |
| textMuted | `#5D574E` | Secondary text, captions |
| primary | `#14202B` | Main actions, links, brand colour |
| secondary | `#D0542B` | Highlights, charts, second accent |
| border | `#D0542B` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#D0542B` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 16.25:1 | pass | pass |
| Muted text on background | 6.69:1 | pass | pass |
| Primary on background | 15.46:1 | pass | pass |
| Text on primary | 16.52:1 | pass | pass |
| Text on surface | 1.05:1 | fail | fail |

**Colours seen on the page** (share of use): `#FAF7F2` 71.5%, `#14202B` 27.4%, `#1C1A17` 0.6%, `#D0542B` 0.3%, `#F6C58B` 0.1%, `#E5DCCB` 0.0%, `#5D574E` 0.0%

## Typography

- Headings: **Playfair Display** (weight 800)
- Body: **DM Sans**
- Google Fonts: `https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=Playfair+Display:wght@700;800&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Playfair Display | 128 px | 800 | 121.6px | -2.56px |
| Heading / H2 | Playfair Display | 34 px | 700 | 39.1px | normal |
| Body | DM Sans | 19 px | 400 | 32.3px | normal |
| Navigation | DM Sans | 17 px | 400 | 28.9px | normal |

## Shape, space and motion

- Radius: sm 8 px, md 8 px, lg 8 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 4 px, 8 px, 10 px, 12 px, 16 px, 20 px, 22 px, 24 px, 34 px
- Layout: container 1180 px; breakpoints 760 px
- Motion: 350 ms, `cubic-bezier(0.3`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** editorial, reflective, wintry.

Reads like a well-set feature article: long sentences when needed, vivid and weather-aware. It trusts the reader with nuance and sometimes ends on a quiet image.

**Do**

- Lead with a scene or person
- Use specific weather and place names
- Let headlines carry a single image

**Do not**

- No news-bulletin urgency
- Avoid clickbait headlines
- Never rush a paragraph to a point

## Taglines

1. The last good winter
2. Stories under a long northern sky
3. Features, essays and field notes
4. Read by the light of short days
5. Where the weather writes the story

**Boilerplate:** Northlight Journal is an independent magazine publishing features, essays and field notes about weather, seasons and the people who work outdoors.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Read the feature |
| secondaryCta | Browse the archive |
| success | Saved to your reading list. |
| error | Couldn't load the story. Try again. |
| empty | No stories saved yet. |

---
Source listing key `o:nav-shrink-header`. Rebuild with `python3 scripts/brand-kit/build.py o:nav-shrink-header`.
