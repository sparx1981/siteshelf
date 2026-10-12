# Merge Lane — brand kit

*Sliding tile puzzle with cosy colours.* Generated from the SiteShelf listing **2048 Tile Puzzle** (Games); every value below is read from that page, not invented.

> **Slide, merge, smile**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Nunito |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **cube** glyph on a squircle tile. A simple cube echoes the tiles that slide and merge on the board. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#FAF3E7` | Page background |
| surface | `#B9A58B` | Cards, panels, raised areas |
| text | `#7A6A52` | Body and heading text |
| textMuted | `#5A4A33` | Secondary text, captions |
| primary | `#E8603E` | Main actions, links, brand colour |
| secondary | `#EADFCA` | Highlights, charts, second accent |
| border | `#E8E0D2` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#EADFCA` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 4.75:1 | pass | pass |
| Muted text on background | 7.73:1 | pass | pass |
| Primary on background | 3.08:1 | fail | pass |
| Text on primary | 5.78:1 | pass | pass |
| Text on surface | 2.20:1 | fail | fail |

**Colours seen on the page** (share of use): `#FAF3E7` 78.4%, `#B9A58B` 12.2%, `#CDBCA3` 8.7%, `#8F7A65` 0.5%, `#EADFCA` 0.2%, `#7A6A52` 0.0%, `#E8603E` 0.0%, `#FFFFFF` 0.0%, `#5A4A33` 0.0%, `#0B0B0F` 0.0%

## Typography

- Headings: **Nunito** (weight 800)
- Body: **Nunito**
- Mono: **Rubik**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Nunito:wght@600;800&family=Rubik:wght@500;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Nunito | 60 px | 800 | 60px | -1.8px |
| Button | Nunito | 15 px | 800 | normal | normal |
| Caption / eyebrow | Nunito | 11 px | 800 | normal | 1.1px |
| Mono | Rubik | 12 px | 700 | normal | normal |

## Shape, space and motion

- Radius: sm 5 px, md 10 px, lg 14 px
- Shadows: none used (flat)
- Spacing: base unit 2 px; common steps 6 px, 7 px, 8 px, 10 px, 12 px, 14 px, 15 px, 18 px, 24 px
- Layout: container 1200 px; breakpoints single fluid layout
- Motion: 120 ms, `ease-in-out`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** cosy, encouraging, crisp.

Merge Lane talks like a friendly game host: quick, upbeat and never smug about a loss. It celebrates a good merge and treats a stuck board as a reason to try again.

**Do**

- Keep prompts to four words or fewer
- Celebrate merges with a short, specific cheer
- Say what to do next after every outcome

**Do not**

- Do not mock a loss
- Avoid long tutorial text
- Never use competitive trash talk

## Taglines

1. Slide, merge, smile
2. One more move
3. Tiny numbers, big feelings
4. Make it to the top tile
5. A tidy little puzzle

**Boilerplate:** Merge Lane is a cosy sliding tile puzzle with soft colours, smooth animations and a colour-blind-friendly palette, made for a few relaxing minutes.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | New game |
| secondaryCta | Undo |
| success | You reached 2048. Keep playing? |
| error | No more moves. Try a new board. |
| empty | Swipe or press an arrow key to begin. |

---
Source listing key `o:game-2048`. Rebuild with `python3 scripts/brand-kit/build.py o:game-2048`.
