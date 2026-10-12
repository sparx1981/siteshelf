# Drop Four — brand kit

*Arcade Connect Four against the computer.* Generated from the SiteShelf listing **Connect Four vs Computer** (Games); every value below is read from that page, not invented.

> **Drop it. Line them up.**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Fredoka |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **drop** glyph on a circle tile. A falling disc is the one gesture the whole game is built on. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#1F4BD8` | Page background |
| surface | `#1D3566` | Cards, panels, raised areas |
| text | `#F4F7FF` | Body and heading text |
| textMuted | `#FFD23F` | Secondary text, captions |
| primary | `#5EE0FF` | Main actions, links, brand colour |
| secondary | `#FF4D5E` | Highlights, charts, second accent |
| border | `#3D63DD` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#2E6474` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 6.41:1 | pass | pass |
| Muted text on background | 4.76:1 | pass | pass |
| Primary on background | 4.44:1 | fail | pass |
| Text on primary | 12.71:1 | pass | pass |
| Text on surface | 11.18:1 | pass | pass |

**Colours seen on the page** (share of use): `#1D3566` 36.1%, `#12203D` 36.1%, `#1F4BD8` 26.4%, `#5EE0FF` 1.1%, `#FF4D5E` 0.1%, `#F4F7FF` 0.1%, `#9DB0D8` 0.0%, `#FFD23F` 0.0%, `#3D63DD` 0.0%, `#0B0B0F` 0.0%

## Typography

- Headings: **Fredoka** (weight 700)
- Body: **Fredoka**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Fredoka:wght@500;600;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Fredoka | 48 px | 700 | 48px | -0.48px |
| Button | Fredoka | 14 px | 600 | normal | normal |
| Caption / eyebrow | Fredoka | 12 px | 500 | 16.8px | 0.96px |

## Shape, space and motion

- Radius: sm 9 px, md 14 px, lg 18 px, pill (fully rounded)
- Shadows: sm: `rgb(23, 56, 168) 0px -6px 0px 0px inset, rgba(0, 0, 0, 0.45) 0px 18px 40px 0px` · md: `rgba(0, 0, 0, 0.6) 0px 4px 8px 0px inset` · lg: `rgb(23, 56, 168) 0px -6px 0px 0px inset, rgba(0, 0, 0, 0.45) 0px 18px 40px 0px`
- Spacing: base unit 2 px; common steps 3 px, 8 px, 10 px, 12 px, 14 px, 22 px
- Layout: container 1200 px; breakpoints single fluid layout
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** playful, cheeky, competitive.

Drop Four sounds like a friendly arcade rival: quick banter, big short words and a grin when you lose. Every line is built to be read at a glance mid-game.

**Do**

- Keep banter to six words or fewer
- Announce turns and results in bold, plain verbs
- Tease the player, never the effort

**Do not**

- Use long instructions during play
- Sneer at a loss
- Use gamer slang that will date

## Taglines

1. Drop it. Line them up.
2. Four in a row, no excuses
3. Your move, champion
4. Gravity is on your side
5. One more game, surely

**Boilerplate:** Drop Four is a browser Connect Four with a minimax computer opponent, three difficulty levels and a two-player mode, built for quick rounds and playful rivalry.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | New game |
| secondaryCta | Undo |
| success | Four in a row! You win. |
| error | Column is full. Pick another. |
| empty | Board is clear. Drop a disc. |

---
Source listing key `o:connect-four`. Rebuild with `python3 scripts/brand-kit/build.py o:connect-four`.
