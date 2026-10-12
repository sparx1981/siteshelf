# Sable Studio — brand kit

*Architecture practice in Scotland.* Generated from the SiteShelf listing **Sable Studio Architecture Portfolio Hero** (Hero Section); every value below is read from that page, not invented.

> **Buildings that listen to the weather**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter Bold (stand-in for Instrument Sans) |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **home** glyph. A simple house outline reflects the practice's focus on small buildings. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#E9E6DF` | Page background |
| surface | `#DBD8D2` | Cards, panels, raised areas |
| text | `#1B1B1A` | Body and heading text |
| textMuted | `#63625F` | Secondary text, captions |
| primary | `#D4411E` | Main actions, links, brand colour |
| secondary | `#E79683` | Highlights, charts, second accent |
| border | `#1B1B1A` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#EDAFA0` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 13.83:1 | pass | pass |
| Muted text on background | 4.89:1 | pass | pass |
| Primary on background | 3.68:1 | fail | pass |
| Text on primary | 4.59:1 | pass | pass |
| Text on surface | 12.12:1 | pass | pass |

**Colours seen on the page** (share of use): `#E9E6DF` 97.0%, `#1B1B1A` 2.0%, `#000000` 0.7%, `#7A766D` 0.1%, `#D4411E` 0.1%, `#DBD8D2` 0.0%, `#63625F` 0.0%, `#E79683` 0.0%, `#FFFFFF` 0.0%, `#EDAFA0` 0.0%

## Typography

- Headings: **Instrument Sans** (weight 400)
- Body: **Instrument Sans**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500&family=Instrument+Serif:ital@1&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Instrument Sans | 56 px | 400 | 58.8px | -1.68px |
| Button | Instrument Sans | 16 px | 400 | 24px | normal |

## Shape, space and motion

- Radius: sm 0 px, md 0 px, lg 0 px
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 6 px, 12 px, 24 px, 40 px, 48 px
- Layout: container 1200 px; breakpoints 900 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** measured, spare, attentive.

Speaks like an architect who prefers a section drawing to a sales pitch: quiet, exact and slightly poetic about weather. Project names and places carry the weight.

**Do**

- List project, place and year
- Use a dimension or material in the line
- Keep headlines under eight words

**Do not**

- No bragging about awards
- Avoid design-speak like iconic
- Never describe a building as stunning

## Taglines

1. Buildings that listen to the weather
2. Drawn in the rain, built to last
3. Architecture for wind and slate
4. Small buildings, careful sections
5. Places shaped by their place

**Boilerplate:** Sable Studio is a Scottish architecture practice designing small houses, libraries and chapels that respond carefully to weather, material and site.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | View projects |
| secondaryCta | Start a conversation |
| success | Message received. We'll be in touch. |
| error | Couldn't send your message. Please try again. |
| empty | No projects in this list yet. |

---
Source listing key `o:sable-studio`. Rebuild with `python3 scripts/brand-kit/build.py o:sable-studio`.
