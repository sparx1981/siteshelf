# Metroform — brand kit

*Urban planning studio for councils.* Generated from the SiteShelf listing **Isometric City Hero** (Hero Section); every value below is read from that page, not invented.

> **Cities, planned like a conversation**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Space Grotesk |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **cube** glyph on a squircle tile. An isometric cube is the building block of the page's city model. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#EEF3F2` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#10302C` | Body and heading text |
| textMuted | `#4A6560` | Secondary text, captions |
| primary | `#FF8A5B` | Main actions, links, brand colour |
| secondary | `#10302C` | Highlights, charts, second accent |
| border | `#B9CCC8` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#10302C` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 12.65:1 | pass | pass |
| Muted text on background | 5.64:1 | pass | pass |
| Primary on background | 2.07:1 | fail | fail |
| Text on primary | 8.46:1 | pass | pass |
| Text on surface | 14.18:1 | pass | pass |

**Colours seen on the page** (share of use): `#EEF3F2` 89.3%, `#000000` 4.4%, `#FFFFFF` 1.0%, `#10302C` 1.0%, `#3A5FD0` 1.0%, `#2B48A6` 1.0%, `#DFE8E6` 0.7%, `#3FBF84` 0.5%, `#4F7CFF` 0.5%, `#FF8A5B` 0.5%

## Typography

- Headings: **Space Grotesk** (weight 700)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@500;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Space Grotesk | 80 px | 700 | 81.6px | -2.4px |
| Body | Inter | 17 px | 400 | 27.2px | normal |
| Button | Inter | 16 px | 600 | normal | normal |
| Navigation | Inter | 17 px | 500 | 27.2px | normal |

## Shape, space and motion

- Radius: sm 3 px, md 12 px, lg 12 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 2 px; common steps 6 px, 8 px, 10 px, 12 px, 14 px, 18 px, 24 px, 26 px, 30 px
- Layout: container 1300 px; breakpoints 960 px
- Motion: 300 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** clear, collaborative, grounded.

Metroform sounds like a planner who prefers conversation to jargon. It explains where homes, offices and parks could go in short, concrete sentences.

**Do**

- Name the district type before the number
- Explain method steps in everyday words
- Frame planning as a conversation with the council

**Do not**

- Do not use words like stakeholder or smart city
- Avoid promising outcomes before testing
- Never present a model as a final decision

## Taglines

1. Cities, planned like a conversation
2. Test the plan before the first brick
3. Homes, offices and parks, in balance
4. Model it first, build it better
5. Planning councils can talk about

**Boilerplate:** Metroform is a planning studio that helps councils test where homes, offices and parks should go through interactive models, before a single brick is laid.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Explore the model |
| secondaryCta | Our method |
| success | Model updated. |
| error | Could not load that district. Please try again. |
| empty | No districts selected. |

---
Source listing key `o:hero-isometric-city`. Rebuild with `python3 scripts/brand-kit/build.py o:hero-isometric-city`.
