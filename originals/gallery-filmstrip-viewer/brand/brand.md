# Coastline — brand kit

*Photographic and generative art series.* Generated from the SiteShelf listing **Filmstrip Gallery Viewer** (Gallery); every value below is read from that page, not invented.

> **Twelve views of one shoreline**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Sora |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **wave** glyph on a squircle tile. A flowing wave line suits an artist's coastline series and the rhythm of a filmstrip. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#17181C` | Page background |
| surface | `#0F1013` | Cards, panels, raised areas |
| text | `#9A9CA6` | Body and heading text |
| textMuted | `#F1F1F3` | Secondary text, captions |
| primary | `#F6B26B` | Main actions, links, brand colour |
| secondary | `#25506B` | Highlights, charts, second accent |
| border | `#FFCF4A` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#25506B` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 6.49:1 | pass | pass |
| Muted text on background | 15.73:1 | pass | pass |
| Primary on background | 9.71:1 | pass | pass |
| Text on primary | 10.76:1 | pass | pass |
| Text on surface | 6.96:1 | pass | pass |

**Colours seen on the page** (share of use): `#17181C` 48.9%, `#FFFFFF` 6.5%, `#3F5D7A` 5.6%, `#25506B` 5.6%, `#E2735B` 5.6%, `#5A4636` 5.6%, `#2F6F57` 5.6%, `#3C4750` 5.6%, `#E9C46A` 5.6%, `#F6B26B` 5.6%

## Typography

- Headings: **Sora** (weight 600)
- Body: **Sora**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Sora:wght@400;600&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Sora | 18 px | 600 | 27px | normal |
| Button | Arial | 16 px | 400 | normal | normal |
| Caption / eyebrow | Sora | 11.7 px | 400 | 17.5px | normal |

## Shape, space and motion

- Radius: sm 9 px, md 12 px, lg 50 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 2 px, 6 px, 8 px, 10 px, 12 px, 16 px, 20 px
- Layout: container 960 px; breakpoints 600 px
- Motion: 450 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** contemplative, spare, precise.

Coastline writes like a gallery wall label: short, factual and respectful of the work. Titles, mediums and years carry the information, leaving the images to do the talking.

**Do**

- Label each piece with title, medium and year
- Use one sentence of context per image
- Prefer concrete nouns: tide, shingle, harbour

**Do not**

- Do not tell viewers what to feel
- Avoid art-speak like 'liminal' and 'interrogates'
- Never caption without a title

## Taglines

1. Twelve views of one shoreline
2. Look closely. The coast is slow
3. Art that follows the tide
4. A series, one frame at a time
5. Where the land gives way

**Boilerplate:** Coastline is a twelve-piece art series presented in an immersive gallery viewer, with filmstrip browsing, zoom and slideshow modes for close looking.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Start slideshow |
| secondaryCta | Enter fullscreen |
| success | Added to your favourites. |
| error | This image could not load. Try the next one. |
| empty | No pieces to show yet. |

---
Source listing key `o:gallery-filmstrip-viewer`. Rebuild with `python3 scripts/brand-kit/build.py o:gallery-filmstrip-viewer`.
