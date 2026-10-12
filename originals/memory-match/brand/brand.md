# Pair Up — brand kit

*Card-flipping memory game.* Generated from the SiteShelf listing **Memory Match** (Games); every value below is read from that page, not invented.

> **Flip two, find the pairs**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Baloo 2 |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **diamond** glyph on a circle tile. A diamond card suit stands for the classic matching deck. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#FFE8C8` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#1F1B2E` | Body and heading text |
| textMuted | `#6D6364` | Secondary text, captions |
| primary | `#FF6B4A` | Main actions, links, brand colour |
| secondary | `#FFD23C` | Highlights, charts, second accent |
| border | `#1F1B2E` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#713328` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 14.05:1 | pass | pass |
| Muted text on background | 4.87:1 | pass | pass |
| Primary on background | 2.37:1 | fail | fail |
| Text on primary | 6.97:1 | pass | pass |
| Text on surface | 16.74:1 | pass | pass |

**Colours seen on the page** (share of use): `#FFF7EC` 41.9%, `#FFE8C8` 39.7%, `#FF6B4A` 8.4%, `#FF9A3C` 7.8%, `#1F1B2E` 1.1%, `#FFD23C` 0.5%, `#F5B400` 0.2%, `#22A06B` 0.2%, `#7C3AED` 0.2%, `#EC4899` 0.1%

## Typography

- Headings: **Baloo 2** (weight 800)
- Body: **Nunito**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;700;800&family=Nunito:wght@500;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Baloo 2 | 48 px | 800 | 48px | -0.96px |
| Body | Nunito | 14 px | 500 | 21px | normal |
| Button | Baloo 2 | 15 px | 700 | normal | normal |
| Caption / eyebrow | Nunito | 11 px | 700 | normal | 0.88px |

## Shape, space and motion

- Radius: sm 12 px, md 20 px, lg 20 px
- Shadows: sm: `rgb(255, 255, 255) 0px 0px 0px 4px inset` · md: `rgb(31, 27, 46) 3px 3px 0px 0px` · lg: `rgb(255, 255, 255) 0px 0px 0px 4px inset`
- Spacing: base unit 2 px; common steps 2 px, 6 px, 8 px, 10 px, 12 px, 14 px, 16 px, 20 px, 22 px
- Layout: container 1200 px; breakpoints 420 px
- Motion: 400 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** cheerful, quick, friendly.

Sounds like a game-show host who is on your side: short, playful, big on tiny celebrations. Instructions fit in a single line.

**Do**

- Use two or three words for each button
- Celebrate a match with a short cheer
- Show moves and time as plain numbers

**Do not**

- No sarcasm about misses
- No long rules
- No more than one exclamation mark

## Taglines

1. Flip two, find the pairs
2. Fewest moves wins
3. Match them all
4. Remember, flip, repeat
5. A small game for a short break

**Boilerplate:** Pair Up is a card-flipping memory game with 3D flips, a move counter, best scores and a hard mode, built for quick breaks.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Restart |
| secondaryCta | Hard 4×4 |
| success | Pair found, nice one |
| error | Those two don't match, try again |
| empty | Flip a card to begin |

---
Source listing key `o:memory-match`. Rebuild with `python3 scripts/brand-kit/build.py o:memory-match`.
