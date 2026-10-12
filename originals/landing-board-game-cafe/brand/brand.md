# Meeple & Mug — brand kit

*Leeds board-game cafe with 400 games and cake.* Generated from the SiteShelf listing **Meeple & Mug** (Landing Page); every value below is read from that page, not invented.

> **Roll in. Play more. Stay for cake**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Fredoka |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **cube** glyph on a squircle tile. A die-like cube is the simplest picture of a board game and a friendly cafe. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#FFF3D6` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#2B2340` | Body and heading text |
| textMuted | `#5E5476` | Secondary text, captions |
| primary | `#FFBF2F` | Main actions, links, brand colour |
| secondary | `#14A79B` | Highlights, charts, second accent |
| border | `#2B2340` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#71571C` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 13.44:1 | pass | pass |
| Muted text on background | 6.34:1 | pass | pass |
| Primary on background | 1.49:1 | fail | fail |
| Text on primary | 11.92:1 | pass | pass |
| Text on surface | 14.82:1 | pass | pass |

**Colours seen on the page** (share of use): `#FFF3D6` 64.8%, `#FFFFFF` 21.6%, `#6A3FB5` 3.5%, `#FFBF2F` 2.1%, `#14A79B` 2.0%, `#FF5A43` 1.8%, `#2B2340` 1.7%, `#BFF0DC` 1.6%, `#ECE3FF` 0.6%, `#5E5476` 0.2%

## Typography

- Headings: **Fredoka** (weight 700)
- Body: **Nunito**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Fredoka:wght@600;700&family=Nunito:wght@400;700;800&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Fredoka | 89.3 px | 700 | 89.28px | normal |
| Heading / H2 | Fredoka | 56 px | 700 | 56px | normal |
| Subheading / H3 | Fredoka | 19 px | 700 | 21.85px | normal |
| Body | Nunito | 18 px | 400 | 28.8px | normal |
| Button | Fredoka | 15 px | 700 | normal | normal |
| Navigation | Nunito | 15 px | 700 | 24px | normal |

## Shape, space and motion

- Radius: sm 8 px, md 18 px, lg 40 px, pill (fully rounded)
- Shadows: sm: `rgb(43, 35, 64) 4px 4px 0px 0px` · md: `rgb(43, 35, 64) 3px 3px 0px 0px` · lg: `rgb(43, 35, 64) 5px 5px 0px 0px`
- Spacing: base unit 4 px; common steps 2 px, 4 px, 6 px, 8 px, 12 px, 13 px, 14 px, 18 px, 20 px
- Layout: container 1240 px; breakpoints 520 px, 860 px
- Motion: 250 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** playful, hospitable, cheeky.

Talks like the loudest, friendliest host at the game table: jokey, welcoming and happy to explain the rules twice. Exclamation is allowed, shouting is not.

**Do**

- Use game verbs like roll, play and teach
- Mention cake and tea as freely as games
- Give players, time and vibe in plain numbers

**Do not**

- Rules jargon without explanation
- Snobbery about complex games
- Corporate booking language

## Taglines

1. Roll in. Play more. Stay for cake
2. Four hundred games, zero judgement
3. Your table is waiting
4. Learn it, play it, win it
5. Leeds' friendliest place to roll

**Boilerplate:** Meeple & Mug is a board-game cafe in Leeds with 400 games, expert hosts who teach the rules, and a proper cake menu.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Book a table |
| secondaryCta | Find a game |
| success | Table saved. We'll deal you in |
| error | No tables at that time. Pick another slot |
| empty | No games match. Loosen the filters |

---
Source listing key `o:landing-board-game-cafe`. Rebuild with `python3 scripts/brand-kit/build.py o:landing-board-game-cafe`.
