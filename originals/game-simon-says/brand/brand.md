# Colour Memory — brand kit

*Four-pad memory game with tones.* Generated from the SiteShelf listing **Colour Memory Pads** (Games); every value below is read from that page, not invented.

> **Watch. Remember. Repeat.**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter Bold (stand-in for Chakra Petch) |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **dial** glyph on a circle tile. A round pad board is a dial-shaped target that echoes the game's circular layout. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#15171C` | Page background |
| surface | `#0C0D10` | Cards, panels, raised areas |
| text | `#9AA0B4` | Body and heading text |
| textMuted | `#E8EAF0` | Secondary text, captions |
| primary | `#EAB308` | Main actions, links, brand colour |
| secondary | `#3B82F6` | Highlights, charts, second accent |
| border | `#23262E` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#69520C` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 6.88:1 | pass | pass |
| Muted text on background | 14.91:1 | pass | pass |
| Primary on background | 9.35:1 | pass | pass |
| Text on primary | 10.24:1 | pass | pass |
| Text on surface | 7.46:1 | pass | pass |

**Colours seen on the page** (share of use): `#15171C` 93.1%, `#22C55E` 1.6%, `#EF4444` 1.6%, `#EAB308` 1.6%, `#3B82F6` 1.6%, `#FFFFFF` 0.2%, `#23262E` 0.2%, `#9AA0B4` 0.0%, `#E8EAF0` 0.0%, `#C4C8D8` 0.0%

## Typography

- Headings: **Chakra Petch** (weight 700)
- Body: **Chakra Petch**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@500;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Chakra Petch | 28 px | 700 | normal | 1.68px |
| Button | Chakra Petch | 15 px | 500 | 21px | normal |

## Shape, space and motion

- Radius: sm 8 px, md 50 px, lg 50 px, pill (fully rounded)
- Shadows: sm: `rgb(35, 38, 46) 0px 0px 0px 6px, rgba(0, 0, 0, 0.5) 0px 20px 50px 0px` · md: `rgb(35, 38, 46) 0px 0px 0px 6px, rgba(0, 0, 0, 0.5) 0px 20px 50px 0px` · lg: `rgb(35, 38, 46) 0px 0px 0px 6px, rgba(0, 0, 0, 0.5) 0px 20px 50px 0px`
- Spacing: base unit 2 px; common steps 3 px, 5 px, 6 px, 8 px, 10 px, 14 px, 16 px, 18 px, 20 px
- Layout: container 1200 px; breakpoints single fluid layout
- Motion: 100 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** sharp, arcadey, encouraging.

Colour Memory sounds like a dry arcade announcer: very short, slightly robotic and quietly impressed. It speaks in rounds, scores and one-word instructions.

**Do**

- Announce the round in two words
- Give feedback in a single short phrase
- Keep labels uppercase-friendly

**Do not**

- Use long instructions during play
- Mock a wrong answer
- Use American spellings, since the page uses colour

## Taglines

1. Watch. Remember. Repeat.
2. How long can you keep up?
3. Four colours, one memory
4. Listen, then play it back
5. Round after round after round

**Boilerplate:** Colour Memory is a browser memory game with four glowing pads, synthesised tones and strict mode, tracking each player's best round across sessions.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Start |
| secondaryCta | Strict mode |
| success | Round 7. Nicely done. |
| error | Wrong pad. Press Start to try again. |
| empty | No score yet. Press Start. |

---
Source listing key `o:game-simon-says`. Rebuild with `python3 scripts/brand-kit/build.py o:game-simon-says`.
