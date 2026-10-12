# Lumen Room — brand kit

*Browser photo editor with presets and sliders.* Generated from the SiteShelf listing **Photo Filter Editor** (App UI); every value below is read from that page, not invented.

> **Light, adjusted by hand**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Outfit |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **spark** glyph on a squircle tile. A small spark of light suits a tool named for lumens and editing by light. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#111214` | Page background |
| surface | `#08090A` | Cards, panels, raised areas |
| text | `#9A9CA5` | Body and heading text |
| textMuted | `#ECECEF` | Secondary text, captions |
| primary | `#FFB454` | Main actions, links, brand colour |
| secondary | `#2C2A55` | Highlights, charts, second accent |
| border | `#2A2C31` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#2C2A55` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 6.85:1 | pass | pass |
| Muted text on background | 15.90:1 | pass | pass |
| Primary on background | 10.63:1 | pass | pass |
| Text on primary | 11.14:1 | pass | pass |
| Text on surface | 7.28:1 | pass | pass |

**Colours seen on the page** (share of use): `#111214` 95.8%, `#FFFFFF` 1.0%, `#4A3566` 0.9%, `#2C2A55` 0.8%, `#000000` 0.8%, `#FFB454` 0.2%, `#FFF3D2` 0.2%, `#9A9CA5` 0.1%, `#ECECEF` 0.1%, `#FFD89A` 0.0%

## Typography

- Headings: **Outfit** (weight 600)
- Body: **Outfit**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Heading / H2 | Outfit | 12 px | 600 | normal | 1.44px |
| Body | Outfit | 12.5 px | 400 | 18.75px | normal |
| Button | Outfit | 14 px | 500 | normal | normal |

## Shape, space and motion

- Radius: sm 6 px, md 10 px, lg 14 px, pill (fully rounded)
- Shadows: sm: `rgba(0, 0, 0, 0.6) 0px 20px 60px 0px` · md: `rgba(0, 0, 0, 0.6) 0px 20px 60px 0px` · lg: `rgba(0, 0, 0, 0.6) 0px 20px 60px 0px`
- Spacing: base unit 2 px; common steps 2 px, 4 px, 6 px, 8 px, 9 px, 10 px, 12 px, 14 px, 16 px
- Layout: container 1400 px; breakpoints 900 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** quiet, skilled, unfussy.

Sounds like a photo editor at the next desk: short, practical and tasteful. Control names stay literal, and tips explain what a slider does to the picture rather than how clever the tool is.

**Do**

- Name each control by its effect, such as warmth or blur
- Show values in plain numbers
- Offer a shortcut as a hint, not a lecture

**Do not**

- Do not use AI hype
- Do not promise instant professional results
- Do not use social-media filter slang

## Taglines

1. Light, adjusted by hand
2. Edit the picture, not the mood
3. Presets to start, sliders to finish
4. A small room for your best light
5. Hold to compare. Release to decide.

**Boilerplate:** Lumen Room is a browser-based photo editing studio with preset filters, five adjustment sliders and a hold-to-compare button, showing the exact CSS output behind every look.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Export |
| secondaryCta | Reset |
| success | Exported. Your edit is in Downloads. |
| error | Export failed. Try again. |
| empty | No edits yet. Pick a preset. |

---
Source listing key `o:photo-filters`. Rebuild with `python3 scripts/brand-kit/build.py o:photo-filters`.
