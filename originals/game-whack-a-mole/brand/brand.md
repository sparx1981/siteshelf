# Tuft & Burrow — brand kit

*Garden games with cheerful characters.* Generated from the SiteShelf listing **Whack A Mole** (Games); every value below is read from that page, not invented.

> **Thirty seconds, nine holes**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Baloo 2 |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **target** glyph on a squircle tile. A target ring is the one thing every player is aiming at. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#8FD0F0` | Page background |
| surface | `#6FBF4A` | Cards, panels, raised areas |
| text | `#1C2A16` | Body and heading text |
| textMuted | `#1F5A2C` | Secondary text, captions |
| primary | `#FFCF3D` | Main actions, links, brand colour |
| secondary | `#6FBF4A` | Highlights, charts, second accent |
| border | `#1C2A16` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#715D22` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 8.94:1 | pass | pass |
| Muted text on background | 4.87:1 | pass | pass |
| Primary on background | 1.14:1 | fail | fail |
| Text on primary | 13.33:1 | pass | pass |
| Text on surface | 6.63:1 | pass | pass |

**Colours seen on the page** (share of use): `#8FD0F0` 63.7%, `#6FBF4A` 15.9%, `#1C2A16` 9.5%, `#FFFFFF` 5.7%, `#000000` 1.9%, `#D4A770` 0.9%, `#B88A58` 0.8%, `#3F8A2E` 0.6%, `#A9763F` 0.5%, `#9FD68A` 0.5%

## Typography

- Headings: **Baloo 2** (weight 700)
- Body: **Nunito**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;700&family=Nunito:wght@400;600;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Baloo 2 | 56 px | 700 | 56px | normal |
| Heading / H2 | Baloo 2 | 30 px | 700 | normal | normal |
| Body | Nunito | 14 px | 400 | 21px | normal |
| Button | Arial | 13.3 px | 400 | normal | normal |
| Caption / eyebrow | Nunito | 12 px | 700 | normal | 1.92px |

## Shape, space and motion

- Radius: sm 10 px, md 14 px, lg 18 px, pill (fully rounded)
- Shadows: sm: `rgba(20, 60, 20, 0.3) 0px 20px 40px 0px` · md: `rgba(20, 60, 20, 0.3) 0px 20px 40px 0px` · lg: `rgba(20, 60, 20, 0.3) 0px 20px 40px 0px`
- Spacing: base unit 4 px; common steps 2 px, 4 px, 8 px, 10 px, 12 px, 14 px, 16 px, 22 px, 24 px
- Layout: container 1200 px; breakpoints 520 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** bouncy, sunny, silly.

Sounds like a garden fete announcer: bright, quick and slightly daft. Scores arrive with a grin and decoys get a gentle warning.

**Do**

- Use short exclamations for hits, one per round
- Name the garden things: moles, gnomes, mounds
- Keep instructions to three words

**Do not**

- No violence beyond a bonk
- No sarcasm about low scores
- No long rules text mid-game

## Taglines

1. Thirty seconds, nine holes
2. Pop up, whack, repeat
3. Garden games, no weeding
4. Mind the gnomes
5. Mole mayhem on the lawn

**Boilerplate:** Tuft & Burrow makes garden games for a sunny afternoon, from a thirty-second whack-a-mole with decoy gnomes to quieter lawn puzzles, all painted by hand.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Start |
| secondaryCta | Pause |
| success | Nice whack, combo x3 |
| error | Oops, that was a gnome |
| empty | Press start to dig in |

---
Source listing key `o:game-whack-a-mole`. Rebuild with `python3 scripts/brand-kit/build.py o:game-whack-a-mole`.
