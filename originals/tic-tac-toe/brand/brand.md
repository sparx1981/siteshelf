# Noughts & Co. — brand kit

*Game studio of tiny classic games.* Generated from the SiteShelf listing **Tic-Tac-Toe vs Computer** (Games); every value below is read from that page, not invented.

> **Three in a row wins**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Baloo 2 |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **grid** glyph on a squircle tile. A three by three grid is the board itself. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#FFF4E6` | Page background |
| surface | `#1F2A44` | Cards, panels, raised areas |
| text | `#1F2A44` | Body and heading text |
| textMuted | `#7A6F5E` | Secondary text, captions |
| primary | `#1F2A44` | Main actions, links, brand colour |
| secondary | `#FF7A59` | Highlights, charts, second accent |
| border | `#F1DFC4` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#FF7A59` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 13.13:1 | pass | pass |
| Muted text on background | 4.54:1 | pass | pass |
| Primary on background | 13.13:1 | pass | pass |
| Text on primary | 14.26:1 | pass | pass |
| Text on surface | 1.00:1 | fail | fail |

**Colours seen on the page** (share of use): `#FFF4E6` 76.6%, `#1F2A44` 11.1%, `#2B3858` 8.5%, `#FFFFFF` 3.7%, `#7A6F5E` 0.0%, `#FF7A59` 0.0%, `#1E9CD0` 0.0%, `#F1DFC4` 0.0%

## Typography

- Headings: **Baloo 2** (weight 800)
- Body: **Nunito**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;800&family=Nunito:wght@600;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Baloo 2 | 48 px | 800 | 48px | -0.48px |
| Button | Nunito | 15 px | 700 | normal | normal |
| Caption / eyebrow | Nunito | 12 px | 700 | normal | 0.96px |

## Shape, space and motion

- Radius: sm 9 px, md 14 px, lg 22 px
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 3 px, 6 px, 8 px, 10 px, 12 px, 14 px, 16 px, 20 px, 24 px
- Layout: container 1200 px; breakpoints single fluid layout
- Motion: 150 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** playful, friendly, competitive.

Talks like a cheerful board-game shop owner: bright, encouraging and happy to lose to you. Jokes are small and scoreboards honest.

**Do**

- Cheer both players equally
- Use short, chunky sentences
- Name scores clearly: You, Draws, Computer

**Do not**

- No smugness after a computer win
- Avoid insider gaming slang
- Never call a draw a loss

## Taglines

1. Three in a row wins
2. Noughts, crosses, no hard feelings
3. Classic games, a little brighter
4. Your move, champion
5. Beat the computer if you can

**Boilerplate:** Noughts & Co. is a game studio making tiny, polished versions of classic games, starting with tic-tac-toe against a computer or a friend.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | New game |
| secondaryCta | Undo |
| success | You win this round! |
| error | Not that square. Pick an empty one. |
| empty | No games yet. Pick a mode to begin. |

---
Source listing key `o:tic-tac-toe`. Rebuild with `python3 scripts/brand-kit/build.py o:tic-tac-toe`.
