# Michael Smith — brand kit

*Designer portfolio with a cosmic feel.* Generated from the SiteShelf listing **Portfolio Cosmic** (Portfolio); every value below is read from that page, not invented.

> **Design in dusk light**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Instrument Serif |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **orbit** glyph on a circle tile. An orbit suggests the cosmic theme and circling ideas. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#0A0A0A` | Page background |
| surface | `#141414` | Cards, panels, raised areas |
| text | `#F5F5F5` | Body and heading text |
| textMuted | `#999999` | Secondary text, captions |
| primary | `#111C42` | Main actions, links, brand colour |
| secondary | `#D9824A` | Highlights, charts, second accent |
| border | `#1F1F1F` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#D9824A` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 18.16:1 | pass | pass |
| Muted text on background | 6.95:1 | pass | pass |
| Primary on background | 1.20:1 | fail | fail |
| Text on primary | 16.55:1 | pass | pass |
| Text on surface | 16.90:1 | pass | pass |

**Colours seen on the page** (share of use): `#0A0A0A` 97.7%, `#111C42` 0.4%, `#1B2A5A` 0.4%, `#0A122E` 0.3%, `#5A2A22` 0.3%, `#F5F5F5` 0.3%, `#8A4230` 0.2%, `#B8603A` 0.1%, `#D9824A` 0.1%, `#D8D4CC` 0.1%

## Typography

- Headings: **Instrument Serif** (weight 400)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Instrument+Serif:ital@0;1&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Instrument Serif | 128 px | 400 | 115.2px | -3.2px |
| Heading / H2 | Inter | 64 px | 400 | 64px | -0.64px |
| Body | Inter | 16 px | 400 | 26.4px | normal |
| Button | Inter | 14 px | 500 | normal | normal |
| Navigation | Inter | 16 px | 400 | normal | normal |
| Caption / eyebrow | Inter | 12 px | 400 | normal | 3.6px |

## Shape, space and motion

- Radius: sm 20 px, md 20 px, lg 20 px, pill (fully rounded)
- Shadows: sm: `rgba(0, 0, 0, 0.5) 0px 20px 50px 0px` · md: `rgba(0, 0, 0, 0.5) 0px 20px 50px 0px` · lg: `rgba(0, 0, 0, 0.5) 0px 20px 50px 0px`
- Spacing: base unit 4 px; common steps 2 px, 8 px, 10 px, 12 px, 16 px, 20 px, 24 px, 28 px, 32 px
- Layout: container 1200 px; breakpoints 560 px, 640 px, 768 px, 1024 px
- Motion: 300 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** dreamy, precise, confident.

Sounds like a designer's quiet voice-over at dusk: reflective, brief and a bit poetic. It names the projects, then lets the work breathe.

**Do**

- Write in first person, in short lines
- Name the project and the year
- Use space and light imagery sparingly

**Do not**

- Do not use cosmic cliches like infinite
- Do not list tools in the intro
- Do not use exclamation marks

## Taglines

1. Design in dusk light
2. Selected work from 2026
3. Quiet projects, bright ideas
4. Thoughts, play and polished work
5. See the work. Then say hello.

**Boilerplate:** Michael Smith is a designer whose portfolio gathers featured projects, recent thoughts and visual experiments in a dark, cosmic setting with quiet type.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | See Works |
| secondaryCta | Reach out |
| success | Message sent. I'll be in touch. |
| error | That didn't send. Please try again. |
| empty | No projects in this collection yet. |

---
Source listing key `m:portfolio-cosmic`. Rebuild with `python3 scripts/brand-kit/build.py m:portfolio-cosmic`.
