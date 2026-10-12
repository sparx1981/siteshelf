# Gull Point — brand kit

*Summer album of a seaside holiday.* Generated from the SiteShelf listing **Polaroid Scatter Gallery** (Gallery); every value below is read from that page, not invented.

> **Summer at Gull Point**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Karla |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **aperture** glyph on a circle tile. A camera aperture is the simplest nod to a pile of snapshots. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#2A1F15` | Page background |
| surface | `#8B6A4A` | Cards, panels, raised areas |
| text | `#FDF4E3` | Body and heading text |
| textMuted | `#CDB99C` | Secondary text, captions |
| primary | `#1D5A82` | Main actions, links, brand colour |
| secondary | `#E8895A` | Highlights, charts, second accent |
| border | `#B34A3A` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#E8895A` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 14.73:1 | pass | pass |
| Muted text on background | 8.44:1 | pass | pass |
| Primary on background | 2.17:1 | fail | fail |
| Text on primary | 7.40:1 | pass | pass |
| Text on surface | 4.51:1 | pass | pass |

**Colours seen on the page** (share of use): `#2A1F15` 34.5%, `#8B6A4A` 32.2%, `#FDFBF5` 14.2%, `#F6EFDF` 14.2%, `#E5D9BF` 3.6%, `#1D5A82` 0.6%, `#3A2F25` 0.3%, `#3C6B88` 0.3%, `#1B2336` 0.1%, `#79B36F` 0.1%

## Typography

- Headings: **Karla** (weight 700)
- Body: **Reenie Beanie**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Karla:wght@500;700&family=Reenie+Beanie&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Karla | 17 px | 700 | normal | normal |
| Body | Reenie Beanie | 24 px | 400 | 28px | normal |
| Button | Karla | 14 px | 700 | normal | normal |
| Caption / eyebrow | Reenie Beanie | 17 px | 400 | normal | normal |

## Shape, space and motion

- Radius: sm 2 px, md 4 px, lg 10 px
- Shadows: sm: `rgba(0, 0, 0, 0.25) 0px 0px 14px 0px inset` · md: `rgba(20, 10, 0, 0.6) 0px 0px 120px 0px inset` · lg: `rgba(0, 0, 0, 0.25) 0px 0px 14px 0px inset`
- Spacing: base unit 2 px; common steps 2 px, 8 px, 10 px, 12 px, 14 px, 16 px, 18 px
- Layout: container 1200 px; breakpoints 560 px
- Motion: 600 ms, `cubic-bezier(0.3`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** nostalgic, sunny, handwritten.

Sounds like captions scribbled on the back of photographs: short, fond and slightly in-jokey. Memories are small and specific.

**Do**

- Write captions like notes on the back of a print
- Name a small detail: the keeper, the cat
- Keep each caption under 14 words

**Do not**

- No travel-blog gloss
- No hashtags
- No long explanations of a photo

## Taglines

1. Summer at Gull Point
2. The keeper waved. We waved back
3. Salt, sand and one good lighthouse
4. Photos of a long weekend
5. Keep the moment, flip it over

**Boilerplate:** Gull Point is a digital summer photo album of lighthouse days, sunsets and a cat silhouette, with handwritten captions on the front and notes on the back.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Shuffle |
| secondaryCta | Tidy up |
| success | Photo flipped, note on the back |
| error | That photo would not move, try again |
| empty | No photos on the desk yet |

---
Source listing key `o:polaroid-scatter`. Rebuild with `python3 scripts/brand-kit/build.py o:polaroid-scatter`.
