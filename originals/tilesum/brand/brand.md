# Tilesum — brand kit

*Sliding-tile number puzzle game.* Generated from the SiteShelf listing **Tilesum Puzzle Game** (Games); every value below is read from that page, not invented.

> **Slide. Merge. Repeat.**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Rubik |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **grid** glyph. A tile grid is the game board in its simplest form. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#0A1E20` | Page background |
| surface | `#17474B` | Cards, panels, raised areas |
| text | `#8BB5B0` | Body and heading text |
| textMuted | `#EAFAF6` | Secondary text, captions |
| primary | `#2FA8A0` | Main actions, links, brand colour |
| secondary | `#0B3B36` | Highlights, charts, second accent |
| border | `#3A6F72` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#0B3B36` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 7.65:1 | pass | pass |
| Muted text on background | 15.99:1 | pass | pass |
| Primary on background | 5.93:1 | pass | pass |
| Text on primary | 6.76:1 | pass | pass |
| Text on surface | 4.58:1 | pass | pass |

**Colours seen on the page** (share of use): `#17474B` 48.0%, `#0F2B2E` 48.0%, `#D7F3EC` 3.4%, `#2FA8A0` 0.5%, `#8BB5B0` 0.1%, `#EAFAF6` 0.1%, `#3A6F72` 0.0%, `#0B0B0F` 0.0%

## Typography

- Headings: **Rubik** (weight 800)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Rubik:wght@500;700;800&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Rubik | 52 px | 800 | 52px | -1.56px |
| Body | Inter | 14 px | 400 | 21px | normal |
| Button | Rubik | 14 px | 700 | normal | normal |
| Caption / eyebrow | Inter | 11 px | 400 | 16.5px | 1.1px |

## Shape, space and motion

- Radius: sm 10 px, md 14 px, lg 14 px
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 6 px, 8 px, 10 px, 12 px, 14 px, 16 px, 20 px
- Layout: container 1200 px; breakpoints single fluid layout
- Motion: 80 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** crisp, playful, satisfying.

Sounds like a puzzle that wants to be played again: short, friendly and slightly smug about a good merge. Instructions fit in one line and wins are celebrated softly.

**Do**

- Explain the rules in one sentence
- Use verbs like slide, merge and spawn
- Show scores as plain numbers

**Do not**

- Do not scold failed attempts
- Do not stack overlay messages
- Do not use casino language

## Taglines

1. Slide. Merge. Repeat.
2. Equal numbers, one bigger tile
3. One more move, always
4. Small board, big streaks
5. Match, combine, climb

**Boilerplate:** Tilesum is a sliding-tile number puzzle where equal tiles merge into larger ones, played with arrow keys or swipes on a responsive board with undo, scores and best-score tracking.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | New game |
| secondaryCta | Undo |
| success | You made 2048. Keep going? |
| error | No moves left. Start a new game. |
| empty | Slide to begin. |

---
Source listing key `o:tilesum`. Rebuild with `python3 scripts/brand-kit/build.py o:tilesum`.
