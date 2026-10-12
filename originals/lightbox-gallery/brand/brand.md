# Coastal Light — brand kit

*Photography of cliffs, fog and low tide.* Generated from the SiteShelf listing **Lightbox Photo Gallery** (Gallery); every value below is read from that page, not invented.

> **Photographs from the edge of land**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Cormorant Garamond |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **aperture** glyph. An aperture opening is a camera iris and a window onto the coast. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#111113` | Page background |
| surface | `#E8B04A` | Cards, panels, raised areas |
| text | `#FFFFFF` | Body and heading text |
| textMuted | `#E0DDD5` | Secondary text, captions |
| primary | `#0F4A52` | Main actions, links, brand colour |
| secondary | `#E8B04A` | Highlights, charts, second accent |
| border | `#34332F` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#E8B04A` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 18.86:1 | pass | pass |
| Muted text on background | 13.90:1 | pass | pass |
| Primary on background | 1.91:1 | fail | fail |
| Text on primary | 9.90:1 | pass | pass |
| Text on surface | 1.96:1 | fail | fail |

**Colours seen on the page** (share of use): `#111113` 94.8%, `#7C8C96` 0.7%, `#FFFFFF` 0.7%, `#2F9A8C` 0.6%, `#8B7F86` 0.6%, `#74A7C4` 0.6%, `#B83A4A` 0.5%, `#5B8FB9` 0.5%, `#9FB0AB` 0.5%, `#0F4A52` 0.5%

## Typography

- Headings: **Cormorant Garamond** (weight 600)
- Body: **Arial**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600&family=Karla:wght@400;500;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Cormorant Garamond | 48 px | 600 | 48px | normal |
| Button | Karla | 13 px | 700 | normal | normal |
| Caption / eyebrow | Arial | 11.1 px | 400 | normal | normal |

## Shape, space and motion

- Radius: sm 6 px, md 6 px, lg 6 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 2 px; common steps 6 px, 8 px, 10 px, 14 px, 18 px, 22 px, 28 px, 56 px
- Layout: container 1200 px; breakpoints 520 px, 900 px
- Motion: 500 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** contemplative, precise, atmospheric.

Reads like a quietly confident photographer's caption: place, time and light, no adjectives that tell you how to feel. White space is part of the voice.

**Do**

- Caption with place, subject and light
- Keep sentences under twelve words
- Use British spelling

**Do not**

- No gushing about beauty
- Avoid technical jargon about lenses
- Never use hashtags in captions

## Taglines

1. Photographs from the edge of land
2. Light, tide and patience
3. Where sea meets sky
4. Fog, cliff and low sun
5. The coast, as the light finds it

**Boilerplate:** Coastal Light is the photography portfolio of Elin Marwood, a collection of coastal scenes taken at dusk, in fog and at low tide around the Scottish shoreline.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | View gallery |
| secondaryCta | Start slideshow |
| success | Photo added to favourites. |
| error | That image didn't load. Try again. |
| empty | No photographs in this category yet. |

---
Source listing key `o:lightbox-gallery`. Rebuild with `python3 scripts/brand-kit/build.py o:lightbox-gallery`.
