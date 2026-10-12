# Stitch & Solve — brand kit

*Craft puzzle studio for picture logic.* Generated from the SiteShelf listing **Nonogram Puzzle** (Games); every value below is read from that page, not invented.

> **Fill the grid, reveal the picture**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Young Serif |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **grid** glyph on a squircle tile. A cross-stitch grid is both the puzzle and the craft behind it. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#E9DCC4` | Page background |
| surface | `#F6ECD6` | Cards, panels, raised areas |
| text | `#2B2218` | Body and heading text |
| textMuted | `#8A4B1F` | Secondary text, captions |
| primary | `#D9453A` | Main actions, links, brand colour |
| secondary | `#2B2218` | Highlights, charts, second accent |
| border | `#2B2218` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#2B2218` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 11.53:1 | pass | pass |
| Muted text on background | 4.99:1 | pass | pass |
| Primary on background | 3.19:1 | fail | pass |
| Text on primary | 4.55:1 | pass | pass |
| Text on surface | 13.30:1 | pass | pass |

**Colours seen on the page** (share of use): `#E9DCC4` 73.2%, `#F6ECD6` 12.7%, `#8A6A3A` 4.2%, `#D9A864` 2.8%, `#B98A52` 2.8%, `#000000` 2.1%, `#FFFFFF` 1.0%, `#D9453A` 0.8%, `#2B2218` 0.2%, `#9AA2AA` 0.2%

## Typography

- Headings: **Young Serif** (weight 400)
- Body: **Figtree**
- Google Fonts: `https://fonts.googleapis.com/css2?family=DM+Mono:wght@500&family=Figtree:wght@500;700&family=Young+Serif&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Young Serif | 50 px | 400 | 50px | normal |
| Button | Figtree | 14 px | 700 | normal | normal |
| Caption / eyebrow | Figtree | 12 px | 700 | normal | 1.92px |

## Shape, space and motion

- Radius: sm 6 px, md 10 px, lg 16 px
- Shadows: sm: `rgba(0, 0, 0, 0.12) 0px 0px 0px 3px inset, rgba(120, 80, 30, 0.22) 0px 0px 30px 0px inset` · md: `rgba(60, 40, 10, 0.2) 0px 8px 20px 0px` · lg: `rgba(60, 40, 10, 0.45) 0px 20px 40px 0px, rgba(255, 255, 255, 0.12) 0px 0px 0px 4px inset, rgba(0, 0, 0, 0.25) 0px -6px 14px 0px inset`
- Spacing: base unit 2 px; common steps 2 px, 6 px, 8 px, 10 px, 12 px, 14 px, 16 px, 34 px
- Layout: container 1200 px; breakpoints 700 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** patient, crafty, gentle.

Stitch & Solve talks like a craft-club host: warm, unhurried and full of thread and needle talk. It treats every puzzle as a small piece of embroidery, and a mistake as a thread to pull out.

**Do**

- Use sewing words: stitch, thread, hoop, pattern
- Offer hints as a quiet nudge, never an answer
- Celebrate a solve with a quiet flourish

**Do not**

- Do not use arcade language like score or combo
- Avoid timers and pressure
- Never mock a wrong cell

## Taglines

1. Fill the grid, reveal the picture
2. One stitch at a time
3. Logic you can hang on a wall
4. Pull the thread, solve the puzzle
5. Puzzles worked in cross-stitch

**Boilerplate:** Stitch & Solve is a craft-puzzle studio making picture-logic nonograms that finish as coloured cross-stitch designs, from a simple heart to a house.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Check |
| secondaryCta | Hint |
| success | Solved. Your stitching is complete. |
| error | That row does not match its clue yet. |
| empty | The hoop is empty. Pick a picture to begin. |

---
Source listing key `o:game-nonogram`. Rebuild with `python3 scripts/brand-kit/build.py o:game-nonogram`.
