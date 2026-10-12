# Harbour Library Redesign — brand kit

*Project plan drawn as a metro map.* Generated from the SiteShelf listing **Subway Map Timeline** (Timeline); every value below is read from that page, not invented.

> **Every milestone has a station**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Young Serif |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **chevrons** glyph on a squircle tile. Chevrons suggest travel along a line and keep the mark transit-like. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#EFE8D8` | Page background |
| surface | `#F7F1E3` | Cards, panels, raised areas |
| text | `#5E5444` | Body and heading text |
| textMuted | `#1C1812` | Secondary text, captions |
| primary | `#2F56D4` | Main actions, links, brand colour |
| secondary | `#C4532F` | Highlights, charts, second accent |
| border | `#1C1812` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#A8B8ED` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 6.08:1 | pass | pass |
| Muted text on background | 14.47:1 | pass | pass |
| Primary on background | 5.06:1 | pass | pass |
| Text on primary | 6.17:1 | pass | pass |
| Text on surface | 6.59:1 | pass | pass |

**Colours seen on the page** (share of use): `#EFE8D8` 90.5%, `#000000` 3.4%, `#5E5444` 1.0%, `#2F56D4` 0.9%, `#CFE3C0` 0.8%, `#BCD8E6` 0.7%, `#9CC0D2` 0.7%, `#DDD0B3` 0.7%, `#C9BB9A` 0.7%, `#DFE7F2` 0.7%

## Typography

- Headings: **Young Serif** (weight 400)
- Body: **Figtree**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600;700&family=Young+Serif&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Young Serif | 40 px | 400 | 44px | normal |
| Heading / H2 | Young Serif | 24 px | 400 | 27.6px | normal |
| Body | Figtree | 15 px | 500 | 22.5px | normal |
| Button | Figtree | 14 px | 700 | normal | normal |
| Caption / eyebrow | Figtree | 12 px | 700 | normal | 1.92px |

## Shape, space and motion

- Radius: sm 7 px, md 14 px, lg 22 px, pill (fully rounded)
- Shadows: sm: `rgb(247, 241, 227) 0px 0px 0px 3px` · md: `rgb(247, 241, 227) 0px 0px 0px 3px, rgb(255, 255, 255) 0px 0px 0px 4px inset` · lg: `rgb(247, 241, 227) 0px 0px 0px 3px, rgb(28, 24, 18) 0px 0px 0px 7px`
- Spacing: base unit 2 px; common steps 2 px, 4 px, 6 px, 8 px, 10 px, 12 px, 14 px, 16 px, 18 px
- Layout: container 1240 px; breakpoints 900 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** clear, civic, methodical.

Harbour Library Redesign writes like a well-run project office with a map habit. It names milestones as stations, workstreams as lines and keeps updates short and dated.

**Do**

- Name each milestone as a station with a date
- Say which line a task belongs to
- Keep updates under twenty words

**Do not**

- Do not use project jargon like leverage
- Avoid vague phases without dates
- Never hide a delay

## Taglines

1. Every milestone has a station
2. Plan the project like a metro
3. Four lines, one library
4. Next stop: prototype
5. Follow the line to opening day

**Boilerplate:** Harbour Library Redesign is a project plan drawn as a transit map, with coloured lines for discovery, design and build and stations for each shared milestone.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | View map |
| secondaryCta | View list |
| success | Station selected. |
| error | Could not load that milestone. Please try again. |
| empty | No stations on this line. |

---
Source listing key `o:timeline-subway-map`. Rebuild with `python3 scripts/brand-kit/build.py o:timeline-subway-map`.
