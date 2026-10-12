# Lantern Hours — brand kit

*Photography magazine of long-form visual essays.* Generated from the SiteShelf listing **Photo Essay** (Blog); every value below is read from that page, not invented.

> **Stories told after dark**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Gloock |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **aperture** glyph on a squircle tile. A camera aperture ties the magazine to photography while its glow echoes a lantern. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#1C1920` | Page background |
| surface | `#121014` | Cards, panels, raised areas |
| text | `#B9B0A3` | Body and heading text |
| textMuted | `#EFE9DF` | Secondary text, captions |
| primary | `#FFA23F` | Main actions, links, brand colour |
| secondary | `#111C42` | Highlights, charts, second accent |
| border | `#3A343E` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#111C42` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 8.11:1 | pass | pass |
| Muted text on background | 14.38:1 | pass | pass |
| Primary on background | 8.68:1 | pass | pass |
| Text on primary | 9.81:1 | pass | pass |
| Text on surface | 8.83:1 | pass | pass |

**Colours seen on the page** (share of use): `#1C1920` 79.9%, `#1B2A5A` 4.2%, `#111C42` 4.0%, `#0A122E` 3.8%, `#000000` 2.9%, `#8A8FC0` 1.5%, `#4A4A88` 1.4%, `#6A6AA8` 1.4%, `#FFFFFF` 0.4%, `#D8C8B0` 0.4%

## Typography

- Headings: **Gloock** (weight 400)
- Body: **Karla**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Gloock&family=Karla:wght@400;500;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Gloock | 108 px | 400 | 102.6px | -1.08px |
| Heading / H2 | Karla | 24 px | 700 | 37.2px | normal |
| Body | Karla | 16 px | 400 | 24.8px | normal |
| Button | Karla | 16 px | 400 | 24.8px | normal |
| Caption / eyebrow | Karla | 12 px | 700 | normal | 2.4px |

## Shape, space and motion

- Radius: sm 4 px, md 10 px, lg 14 px
- Shadows: sm: `rgba(0, 0, 0, 0.9) 0px 30px 50px -28px` · md: `rgba(0, 0, 0, 0.9) 0px 30px 50px -28px` · lg: `rgba(0, 0, 0, 0.9) 0px 30px 50px -28px`
- Spacing: base unit 2 px; common steps 6 px, 8 px, 10 px, 14 px, 22 px, 40 px, 44 px, 58 px, 96 px
- Layout: container 1200 px; breakpoints 520 px, 899 px, 1099 px, 1100 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** hushed, observant, warm.

Speaks in short, low-lit captions that notice small things: steam, handwriting, the second a stall owner looks up. It lets the plates carry the story and keeps words quiet and exact.

**Do**

- Write captions as specific observations, not descriptions of the obvious
- Keep sentences short and sensory
- Credit the place and the hour

**Do not**

- Do not explain the emotion of a photograph
- Do not use travel blog clichés like hidden gem
- Do not shout in capitals or exclamation marks

## Taglines

1. Stories told after dark
2. Eleven plates, one long night
3. See the market by lantern light
4. Slow looking, in warm light
5. Photographs worth staying up for

**Boilerplate:** Lantern Hours is a photography magazine that publishes slow visual essays, each a sequence of plates and quiet captions about places that come alive after dark.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Start the essay |
| secondaryCta | Hide captions |
| success | Plate saved to your favourites. |
| error | The viewer could not open. Press Escape and try again. |
| empty | No plates in this chapter yet. |

---
Source listing key `o:blog-photo-essay`. Rebuild with `python3 scripts/brand-kit/build.py o:blog-photo-essay`.
