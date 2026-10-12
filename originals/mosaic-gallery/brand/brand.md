# Pinwheel Press — brand kit

*Posters and patterns drawn in code.* Generated from the SiteShelf listing **Mosaic Portfolio Gallery** (Gallery); every value below is read from that page, not invented.

> **Selected work, 2024 to now**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Bricolage Grotesque |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **grid** glyph on a squircle tile. A tight grid matches the mosaic of tiles and the programmatic drawing process. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#FAF8F5` | Page background |
| surface | `#DDDDDD` | Cards, panels, raised areas |
| text | `#1C1A17` | Body and heading text |
| textMuted | `#6A6865` | Secondary text, captions |
| primary | `#FF6B4A` | Main actions, links, brand colour |
| secondary | `#1F3A5F` | Highlights, charts, second accent |
| border | `#CFC9BF` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#1F3A5F` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 16.38:1 | pass | pass |
| Muted text on background | 5.24:1 | pass | pass |
| Primary on background | 2.66:1 | fail | fail |
| Text on primary | 6.97:1 | pass | pass |
| Text on surface | 12.78:1 | pass | pass |

**Colours seen on the page** (share of use): `#FAF8F5` 55.6%, `#DDDDDD` 30.4%, `#FFD9B8` 2.6%, `#2A2A6B` 2.5%, `#000000` 2.2%, `#F4ECE1` 2.1%, `#19756B` 1.7%, `#1C1A17` 1.1%, `#F7E7C9` 1.1%, `#FF6B4A` 0.8%

## Typography

- Headings: **Bricolage Grotesque** (weight 700)
- Body: **Albert Sans**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,700&family=Albert+Sans:wght@400;500;600&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Bricolage Grotesque | 79.2 px | 700 | 79.2px | -3.168px |
| Body | Albert Sans | 16 px | 400 | 24px | normal |
| Button | Albert Sans | 14 px | 500 | normal | normal |

## Shape, space and motion

- Radius: sm 14 px, md 14 px, lg 14 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 8 px, 16 px, 18 px, 28 px, 32 px, 44 px, 64 px
- Layout: container 1240 px; breakpoints 700 px, 1100 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** crafty, bright, unfussy.

Pinwheel Press sounds like a small print studio that loves its ink: direct, visual and happy to say how things are made. Captions name the pattern and the medium plainly.

**Do**

- Caption works with title, type and year
- Mention process in plain words
- Keep the tone friendly and a little proud

**Do not**

- Use art-speak like 'explores themes of'
- Over-describe each piece
- Use superlatives about the work

## Taglines

1. Selected work, 2024 to now
2. Drawn in code, printed on paper
3. Patterns with a pulse
4. Posters made one function at a time
5. Colour, line and a little maths

**Boilerplate:** Pinwheel Press is a small studio that draws posters, patterns and experiments in code and prints them on paper, showing selected work from 2024 to now.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Explore work |
| secondaryCta | Get in touch |
| success | Message sent. We will reply soon. |
| error | That did not send. Please try again. |
| empty | Nothing in this category yet. |

---
Source listing key `o:mosaic-gallery`. Rebuild with `python3 scripts/brand-kit/build.py o:mosaic-gallery`.
