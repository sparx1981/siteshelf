# Slidewell — brand kit

*Colourful sliding tile puzzles in three sizes.* Generated from the SiteShelf listing **Sliding Tile Puzzle** (Games); every value below is read from that page, not invented.

> **Slide it into place**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Fredoka |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **chevrons** glyph. Stacked chevrons show tiles shifting in a direction, the essence of sliding. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#1E1530` | Page background |
| surface | `#2A1F42` | Cards, panels, raised areas |
| text | `#FFFFFF` | Body and heading text |
| textMuted | `#B3A6D6` | Secondary text, captions |
| primary | `#4A3880` | Main actions, links, brand colour |
| secondary | `#B3A6D6` | Highlights, charts, second accent |
| border | `#3E364D` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#B3A6D6` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 17.43:1 | pass | pass |
| Muted text on background | 7.75:1 | pass | pass |
| Primary on background | 1.80:1 | fail | fail |
| Text on primary | 9.68:1 | pass | pass |
| Text on surface | 15.29:1 | pass | pass |

**Colours seen on the page** (share of use): `#1E1530` 68.6%, `#3A2468` 17.1%, `#2A1F42` 13.1%, `#4A3880` 0.4%, `#ECEB51` 0.1%, `#97DA2F` 0.1%, `#67EC51` 0.1%, `#2FDA5A` 0.1%, `#6751EC` 0.1%, `#8D2FDA` 0.1%

## Typography

- Headings: **Fredoka** (weight 600)
- Body: **Fredoka**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Fredoka:wght@500;600&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Fredoka | 28 px | 600 | 39.2px | normal |
| Button | Fredoka | 15 px | 600 | normal | normal |
| Caption / eyebrow | Fredoka | 12 px | 500 | 16.8px | 0.96px |

## Shape, space and motion

- Radius: sm 9 px, md 12 px, lg 16 px
- Shadows: sm: `rgba(0, 0, 0, 0.2) 0px -4px 0px 0px inset, rgba(0, 0, 0, 0.267) 0px 3px 8px 0px` · md: `rgba(0, 0, 0, 0.4) 0px 20px 50px 0px` · lg: `rgba(0, 0, 0, 0.2) 0px -4px 0px 0px inset, rgba(0, 0, 0, 0.267) 0px 3px 8px 0px`
- Spacing: base unit 4 px; common steps 4 px, 6 px, 8 px, 10 px, 12 px, 16 px, 18 px, 20 px
- Layout: container 1200 px; breakpoints single fluid layout
- Motion: 180 ms, `cubic-bezier(0.3`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** bubbly, encouraging, bright.

Slidewell has the cheerful voice of a children's puzzle book for grown-ups. Instructions are tiny, praise is generous and every number is tied to the satisfaction of a tile clicking home.

**Do**

- Use big friendly verbs: slide, solve, shuffle
- Praise progress with specific numbers
- Keep each hint to one line

**Do not**

- Do not shame slow solves
- Avoid overly technical words like 'permutation'
- Never hide the best-score tracker

## Taglines

1. Slide it into place
2. Shuffle. Solve. Repeat
3. Every tile has a home
4. Three sizes, endless fun
5. A puzzle that clicks

**Boilerplate:** Slidewell is a sliding tile puzzle with 3×3, 4×4 and 5×5 boards, guaranteed solvable shuffles and a built-in tracker for moves, time and best score.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | New game |
| secondaryCta | Change size |
| success | Solved in 42 moves. New best. |
| error | That tile cannot move. Try one next to the gap. |
| empty | No best score yet for this size. |

---
Source listing key `o:game-sliding-puzzle`. Rebuild with `python3 scripts/brand-kit/build.py o:game-sliding-puzzle`.
