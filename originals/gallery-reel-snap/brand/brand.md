# Night Reel — brand kit

*Photographer collective and vertical story archive.* Generated from the SiteShelf listing **Vertical Reel Gallery** (Gallery); every value below is read from that page, not invented.

> **Shot at dusk, shared at speed**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Syne |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **play** glyph on a circle tile. A play triangle suits a vertical reel that is watched frame by frame. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#0C0C0F` | Page background |
| surface | `#000000` | Cards, panels, raised areas |
| text | `#D9D6E6` | Body and heading text |
| textMuted | `#FFFFFF` | Secondary text, captions |
| primary | `#F77F00` | Main actions, links, brand colour |
| secondary | `#C8B6FF` | Highlights, charts, second accent |
| border | `#FFFFFF` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#6E3C09` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 13.68:1 | pass | pass |
| Muted text on background | 19.53:1 | pass | pass |
| Primary on background | 7.43:1 | pass | pass |
| Text on primary | 7.47:1 | pass | pass |
| Text on surface | 14.71:1 | pass | pass |

**Colours seen on the page** (share of use): `#0C0C0F` 90.9%, `#F77F00` 1.2%, `#219EBC` 1.2%, `#C8B6FF` 1.0%, `#FFD6A5` 1.0%, `#5BC0BE` 1.0%, `#118AB2` 1.0%, `#FFD166` 1.0%, `#C77DFF` 1.0%, `#F4F1DE` 0.9%

## Typography

- Headings: **Syne** (weight 800)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Syne:wght@700;800&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Heading / H2 | Syne | 120 px | 800 | 114px | -3.6px |
| Subheading / H3 | Syne | 24 px | 800 | normal | normal |
| Body | Inter | 17 px | 400 | 26.35px | normal |
| Button | Arial | 18 px | 400 | normal | normal |

## Shape, space and motion

- Radius: sm 10 px, md 10 px, lg 10 px, pill (fully rounded)
- Shadows: sm: `rgb(0, 0, 0) 0px 0px 0px 6px` · md: `rgb(0, 0, 0) 0px 0px 0px 6px` · lg: `rgb(0, 0, 0) 0px 0px 0px 6px`
- Spacing: base unit 2 px; common steps 4 px, 6 px, 7 px, 8 px, 10 px, 12 px, 18 px, 26 px, 30 px
- Layout: container 900 px; breakpoints 600 px
- Motion: 450 ms, `cubic-bezier(0.2`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** moody, punchy, street-smart.

Speaks in tight, tactile captions: where, when and on what film. It treats each panel like a single beat in a night shoot and keeps comment short enough to read between swipes.

**Do**

- Caption with place, time and gear in one line
- Use vivid verbs and sparse adjectives
- Credit the photographer

**Do not**

- Do not describe the obvious in the image
- Do not use filter-app language
- Do not write paragraphs

## Taglines

1. Shot at dusk, shared at speed
2. One frame at a time, all night
3. City light, collected
4. The night shift of photography
5. Swipe up into the evening

**Boilerplate:** Night Reel is a photographer collective that publishes an archive of dusk and night stories as full-screen vertical panels, each with a short note on where and how it was shot.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | View details |
| secondaryCta | Close |
| success | Panel saved to your reel. |
| error | This panel failed to load. Swipe on. |
| empty | No panels in this reel yet. |

---
Source listing key `o:gallery-reel-snap`. Rebuild with `python3 scripts/brand-kit/build.py o:gallery-reel-snap`.
