# Frame by Frame — brand kit

*Small studio showing twelve generated artworks.* Generated from the SiteShelf listing **Grid To Detail Morph** (Gallery); every value below is read from that page, not invented.

> **Twelve frames, closely looked at**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Instrument Serif |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **aperture** glyph. An aperture mark nods to frames, lenses and looking closely. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#0E0E10` | Page background |
| surface | `#000000` | Cards, panels, raised areas |
| text | `#F2F0EB` | Body and heading text |
| textMuted | `#A3A09A` | Secondary text, captions |
| primary | `#FF9F1C` | Main actions, links, brand colour |
| secondary | `#FFD6A5` | Highlights, charts, second accent |
| border | `#26262B` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#714914` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 16.93:1 | pass | pass |
| Muted text on background | 7.39:1 | pass | pass |
| Primary on background | 9.39:1 | pass | pass |
| Text on primary | 9.57:1 | pass | pass |
| Text on surface | 18.44:1 | pass | pass |

**Colours seen on the page** (share of use): `#0E0E10` 86.2%, `#5BC0BE` 2.4%, `#F4F1DE` 2.1%, `#FF9F1C` 2.1%, `#000000` 2.1%, `#D0D0D0` 1.2%, `#CBF3F0` 1.1%, `#F4A261` 1.0%, `#6A6A6A` 1.0%, `#FFD6A5` 0.8%

## Typography

- Headings: **Instrument Serif** (weight 400)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Instrument+Serif:ital@0;1&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Instrument Serif | 110 px | 400 | 104.5px | -2.2px |
| Body | Inter | 15 px | 400 | 24px | normal |
| Button | Inter | 13 px | 500 | normal | normal |

## Shape, space and motion

- Radius: sm 14 px, md 14 px, lg 14 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 2 px; common steps 6 px, 10 px, 12 px, 14 px, 16 px, 18 px, 20 px, 30 px, 48 px
- Layout: container 1300 px; breakpoints 800 px, 1000 px
- Motion: 250 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** contemplative, precise, gallery-quiet.

A gallery guide speaking at a low volume: measured, observant and a touch literary. It points at the work and then lets you look.

**Do**

- Use title, year and palette in captions
- Describe what the eye does, not what to feel
- Keep sentences short with generous silence

**Do not**

- Art-speak words like oeuvre or interrogates
- Superlatives about the work
- Calls to buy or follow

## Taglines

1. Twelve frames, closely looked at
2. Choose a frame, enter the room
3. Slow looking, in warm light
4. One work at a time
5. Look closer, then closer again

**Boilerplate:** Frame by Frame is a studio that presents twelve generated artworks in a dark gallery, each opening into a large, close-looking detail view.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Open the frame |
| secondaryCta | Back to gallery |
| success | Filter applied: Warm |
| error | That frame would not open. Try the next one |
| empty | No frames in this palette |

---
Source listing key `o:gallery-grid-morph`. Rebuild with `python3 scripts/brand-kit/build.py o:gallery-grid-morph`.
