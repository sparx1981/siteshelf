# The Meridian Society — brand kit

*Imaginary exploration club with four centuries of milestones.* Generated from the SiteShelf listing **Horizontal History Timeline** (Timeline); every value below is read from that page, not invented.

> **Four centuries of imaginary exploration**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Cormorant Garamond |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **compass** glyph on a circle tile. A compass rose captures exploration and a society that charts its own history. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F3E9D6` | Page background |
| surface | `#2A2118` | Cards, panels, raised areas |
| text | `#4A3D2A` | Body and heading text |
| textMuted | `#241C12` | Secondary text, captions |
| primary | `#C9973F` | Main actions, links, brand colour |
| secondary | `#3F8FA6` | Highlights, charts, second accent |
| border | `#14110F` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#5B4623` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 8.75:1 | pass | pass |
| Muted text on background | 13.95:1 | pass | pass |
| Primary on background | 2.18:1 | fail | fail |
| Text on primary | 7.47:1 | pass | pass |
| Text on surface | 1.50:1 | fail | fail |

**Colours seen on the page** (share of use): `#F3E9D6` 55.4%, `#14110F` 21.3%, `#2A2118` 21.1%, `#4A3D2A` 0.9%, `#9A7CE0` 0.3%, `#3F8FA6` 0.2%, `#A89C86` 0.2%, `#C9973F` 0.2%, `#D97A4A` 0.1%, `#E5D3A8` 0.1%

## Typography

- Headings: **Cormorant Garamond** (weight 600)
- Body: **Work Sans**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,600&family=Work+Sans:wght@400;500;600&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Cormorant Garamond | 56 px | 600 | 56px | normal |
| Subheading / H3 | Cormorant Garamond | 20 px | 700 | 23px | normal |
| Body | Work Sans | 16 px | 400 | 24.8px | normal |
| Button | Work Sans | 14 px | 600 | normal | normal |

## Shape, space and motion

- Radius: sm 9 px, md 12 px, lg 16 px, pill (fully rounded)
- Shadows: sm: `rgba(0, 0, 0, 0.4) 0px 14px 30px 0px` · md: `rgba(0, 0, 0, 0.4) 0px 14px 30px 0px` · lg: `rgba(0, 0, 0, 0.4) 0px 14px 30px 0px`
- Spacing: base unit 4 px; common steps 2 px, 4 px, 6 px, 8 px, 10 px, 16 px, 18 px, 20 px, 22 px
- Layout: container 1200 px; breakpoints 700 px
- Motion: 250 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** learned, adventurous, dignified.

A learned society's secretary, writing in a quill-and-brass register: formal, a little whimsical and precise about dates. Every milestone has a year, a place and a small flourish.

**Do**

- Lead each entry with the year and the era
- Keep prose in a slightly period register without pastiche
- Use era names Dawn, Sail, Steam and Signal consistently

**Do not**

- Modern slang
- Treating the fictional events as real history
- Over-decorated archaic spellings

## Taglines

1. Four centuries of imaginary exploration
2. Drag the timeline, follow the stars
3. Dawn to Signal, charted in brass
4. Members since 1620, in spirit
5. History for armchair navigators

**Boilerplate:** The Meridian Society is an imaginary exploration club, with a timeline of invented expeditions from 1620 to 2020 across the Dawn, Sail, Steam and Signal eras.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Open the record |
| secondaryCta | All eras |
| success | Entry opened |
| error | The timeline stuck. Drag or use the arrow keys |
| empty | No events in this era |

---
Source listing key `o:timeline-horizontal`. Rebuild with `python3 scripts/brand-kit/build.py o:timeline-horizontal`.
