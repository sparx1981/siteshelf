# Pencil & Page — brand kit

*Puzzle press with a compact six-by-six sudoku.* Generated from the SiteShelf listing **Mini Sudoku** (Games); every value below is read from that page, not invented.

> **A small puzzle, a good pencil**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Newsreader |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **grid** glyph on a squircle tile. A simple grid matches the sudoku board and the ruled lines of a puzzle book. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#4A2E18` | Page background |
| surface | `#FBF5E6` | Cards, panels, raised areas |
| text | `#FFFFFF` | Body and heading text |
| textMuted | `#C0B6AE` | Secondary text, captions |
| primary | `#FFF1B8` | Main actions, links, brand colour |
| secondary | `#A8743E` | Highlights, charts, second accent |
| border | `#1F1B16` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#A8743E` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 12.39:1 | pass | pass |
| Muted text on background | 6.22:1 | pass | pass |
| Primary on background | 10.93:1 | pass | pass |
| Text on primary | 17.33:1 | pass | pass |
| Text on surface | 1.09:1 | fail | fail |

**Colours seen on the page** (share of use): `#4A2E18` 60.9%, `#FBF5E6` 23.1%, `#F3EAD2` 3.3%, `#FFFFFF` 3.3%, `#000000` 3.1%, `#2A1608` 2.9%, `#A8743E` 2.4%, `#F2C94A` 0.5%, `#FFF1B8` 0.3%, `#2A2A2E` 0.2%

## Typography

- Headings: **Newsreader** (weight 600)
- Body: **Figtree**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Caveat:wght@700&family=DM+Mono:wght@500&family=Figtree:wght@500;700&family=Newsreader:wght@600&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Newsreader | 38 px | 600 | 39.9px | normal |
| Button | Figtree | 14 px | 700 | normal | normal |
| Caption / eyebrow | Figtree | 12 px | 700 | normal | 1.92px |

## Shape, space and motion

- Radius: sm 4 px, md 12 px, lg 16 px
- Shadows: sm: `rgba(0, 0, 0, 0.3) 0px 2px 3px 0px, rgba(0, 0, 0, 0.5) 0px 24px 48px 0px, rgba(150, 110, 50, 0.12) 0px 0px 60px 0px inset` · md: `rgba(0, 0, 0, 0.3) 0px 8px 20px 0px` · lg: `rgba(0, 0, 0, 0.3) 0px 2px 3px 0px, rgba(0, 0, 0, 0.5) 0px 24px 48px 0px, rgba(150, 110, 50, 0.12) 0px 0px 60px 0px inset`
- Spacing: base unit 2 px; common steps 2 px, 6 px, 8 px, 10 px, 12 px, 14 px, 18 px
- Layout: container 1200 px; breakpoints 560 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** quiet, bookish, encouraging.

Speaks like a puzzle-book editor in cardigan sleeves: gentle, dry and happy to let you think. Hints are offered like a friendly nod, not a lecture.

**Do**

- Give instructions in one clear line, such as digits 1 to 6
- Keep hints kind and never reveal more than asked
- Use pencil and paper vocabulary

**Do not**

- Scoring pressure or timers that shame
- Jargon like algorithm or solver
- Cheerful emoji

## Taglines

1. A small puzzle, a good pencil
2. Six squares by six, no rush
3. Think it through, then ink it in
4. Puzzles for pen-and-paper people
5. Quiet minutes on a wooden desk

**Boilerplate:** Pencil & Page is a puzzle press publishing compact logic games, starting with a six-by-six sudoku with unique solutions, pencil notes and three difficulties.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | New game |
| secondaryCta | Hint |
| success | Solved. Nicely done |
| error | That digit clashes. Take a look |
| empty | Nothing pencilled in yet |

---
Source listing key `o:game-sudoku-mini`. Rebuild with `python3 scripts/brand-kit/build.py o:game-sudoku-mini`.
