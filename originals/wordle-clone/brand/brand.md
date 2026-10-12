# LETTERLANE — brand kit

*Daily five-letter word puzzle.* Generated from the SiteShelf listing **Five-Letter Word Game** (Games); every value below is read from that page, not invented.

> **One word a day, five letters**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter Bold (stand-in for Libre Franklin) |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **monogram** glyph on a squircle tile. A bold initial suits a game whose name is stamped in capitals on every tile. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#FFFFFF` | Page background |
| surface | `#D3D6DA` | Cards, panels, raised areas |
| text | `#1A1A1B` | Body and heading text |
| textMuted | `#6A6A6B` | Secondary text, captions |
| primary | `#1A1A1B` | Main actions, links, brand colour |
| secondary | `#818182` | Highlights, charts, second accent |
| border | `#D3D6DA` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#818182` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 17.39:1 | pass | pass |
| Muted text on background | 5.40:1 | pass | pass |
| Primary on background | 17.39:1 | pass | pass |
| Text on primary | 17.39:1 | pass | pass |
| Text on surface | 11.93:1 | pass | pass |

**Colours seen on the page** (share of use): `#FFFFFF` 95.0%, `#D3D6DA` 4.9%, `#1A1A1B` 0.1%, `#6A6A6B` 0.0%, `#818182` 0.0%

## Typography

- Headings: **Libre Franklin** (weight 800)
- Body: **Rubik**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@400;600;800&family=Rubik:wght@500;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Libre Franklin | 28 px | 800 | normal | 0.56px |
| Button | Arial | 20 px | 400 | normal | normal |

## Shape, space and motion

- Radius: sm 5 px, md 8 px, lg 8 px
- Shadows: none used (flat)
- Spacing: base unit 2 px; common steps 2 px, 4 px, 5 px, 6 px, 8 px, 14 px
- Layout: container 1200 px; breakpoints 420 px
- Motion: 120 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** bookish, cheerful, gently competitive.

LETTERLANE sounds like a crossword-loving friend with a pencil behind one ear: pleased when you get it, kind when you do not. Messages are one short line.

**Do**

- Respond to guesses in five words or fewer
- Keep colour-blind friendly wording, such as 'in the word'
- Congratulate with quiet pride

**Do not**

- Mock a bad guess
- Use gaming jargon
- Add exclamation marks to every reply

## Taglines

1. One word a day, five letters
2. Guess, glow, grin
3. Six tries to find it
4. Your daily dose of letters
5. Small word, big satisfaction

**Boilerplate:** LETTERLANE is a daily five-letter word game with six guesses, colour-blind friendly feedback and a shareable emoji result, built for a short moment of play each day.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Enter |
| secondaryCta | Share result |
| success | Solved in 4. Well played. |
| error | Not in the word list. |
| empty | No games played yet. |

---
Source listing key `o:wordle-clone`. Rebuild with `python3 scripts/brand-kit/build.py o:wordle-clone`.
