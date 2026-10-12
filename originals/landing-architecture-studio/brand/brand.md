# Plinth Architects — brand kit

*Architecture studio in Rotterdam and Lisbon.* Generated from the SiteShelf listing **Plinth Architects** (Landing Page); every value below is read from that page, not invented.

> **We build quiet places for loud lives**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Archivo |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **stack** glyph. A stacked plinth shape is a literal base for buildings and a strong, simple mark. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#FAFAF8` | Page background |
| surface | `#0F0F0F` | Cards, panels, raised areas |
| text | `#0F0F0F` | Body and heading text |
| textMuted | `#6A6A66` | Secondary text, captions |
| primary | `#FF4A1C` | Main actions, links, brand colour |
| secondary | `#FF9B82` | Highlights, charts, second accent |
| border | `#0F0F0F` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#712514` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 18.34:1 | pass | pass |
| Muted text on background | 5.20:1 | pass | pass |
| Primary on background | 3.22:1 | fail | pass |
| Text on primary | 5.84:1 | pass | pass |
| Text on surface | 1.00:1 | fail | fail |

**Colours seen on the page** (share of use): `#FAFAF8` 98.3%, `#FF4A1C` 1.0%, `#0F0F0F` 0.4%, `#6A6A66` 0.2%, `#FF9B82` 0.0%, `#712514` 0.0%

## Typography

- Headings: **Archivo** (weight 800)
- Body: **Archivo**
- Mono: **DM Mono**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;800&family=DM+Mono:wght@400&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Archivo | 135.4 px | 800 | 124.531px | -5.4144px |
| Heading / H2 | Archivo | 52 px | 800 | 52px | -1.56px |
| Body | Archivo | 17 px | 400 | 26.35px | normal |
| Button | DM Mono | 12 px | 400 | normal | 0.96px |
| Navigation | DM Mono | 12 px | 400 | normal | 0.96px |
| Mono | DM Mono | 12 px | 400 | normal | 0.96px |

## Shape, space and motion

- Radius: sm 0 px, md 0 px, lg 0 px
- Shadows: none used (flat)
- Spacing: base unit 2 px; common steps 7 px, 8 px, 12 px, 14 px, 18 px, 20 px, 26 px, 28 px, 30 px
- Layout: container 1200 px; breakpoints 900 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** stark, assured, quiet.

Plinth speaks in few words and a firm tone, like an architect's drawing note. It favours statements over adjectives and lets projects, years and places do the persuading.

**Do**

- Write in short declarative sentences
- List projects by name, place and year
- Use building words: wall, light, street, room

**Do not**

- Do not use design buzzwords like 'iconic' or 'visionary'
- Avoid exclamation marks
- Never describe a building as 'stunning'

## Taglines

1. We build quiet places for loud lives
2. Housing, schools, public rooms
3. Buildings that disappear into streets
4. Made to last generations
5. Rotterdam. Lisbon. Rooms for all

**Boilerplate:** Plinth Architects is a Rotterdam and Lisbon studio designing housing, schools and public rooms that fit quietly into their streets and last for generations.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | See the index |
| secondaryCta | Contact the studio |
| success | Message sent. We will reply this week. |
| error | That did not send. Please email us directly. |
| empty | No projects in this category yet. |

---
Source listing key `o:landing-architecture-studio`. Rebuild with `python3 scripts/brand-kit/build.py o:landing-architecture-studio`.
