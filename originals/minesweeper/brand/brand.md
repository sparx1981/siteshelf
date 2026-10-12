# Sweep Lane — brand kit

*Retro-modern minesweeper game.* Generated from the SiteShelf listing **Minesweeper** (Games); every value below is read from that page, not invented.

> **Dig carefully, flag firmly**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter Bold (stand-in for Chakra Petch) |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **grid** glyph. A grid of cells is the board itself. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#E8ECEF` | Page background |
| surface | `#F7F9FA` | Cards, panels, raised areas |
| text | `#5D6D76` | Body and heading text |
| textMuted | `#16222B` | Secondary text, captions |
| primary | `#16222B` | Main actions, links, brand colour |
| secondary | `#FF5A4D` | Highlights, charts, second accent |
| border | `#C9D1D6` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#FF5A4D` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 4.52:1 | pass | pass |
| Muted text on background | 13.62:1 | pass | pass |
| Primary on background | 13.62:1 | pass | pass |
| Text on primary | 16.18:1 | pass | pass |
| Text on surface | 5.08:1 | pass | pass |

**Colours seen on the page** (share of use): `#E8ECEF` 72.9%, `#F7F9FA` 11.1%, `#AAB5BC` 8.1%, `#C7D0D6` 7.3%, `#16222B` 0.4%, `#5D6D76` 0.1%, `#46565F` 0.0%, `#FFD54A` 0.0%, `#FF5A4D` 0.0%

## Typography

- Headings: **Chakra Petch** (weight 700)
- Body: **Chakra Petch**
- Mono: **Roboto Mono**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@500;700&family=Roboto+Mono:wght@500;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Chakra Petch | 28 px | 700 | normal | 0.56px |
| Body | Chakra Petch | 13 px | 500 | 18.2px | normal |
| Button | Chakra Petch | 15 px | 600 | normal | normal |
| Mono | Roboto Mono | 12 px | 600 | normal | normal |

## Shape, space and motion

- Radius: sm 5 px, md 8 px, lg 10 px
- Shadows: sm: `rgb(242, 246, 248) 2px 2px 0px 0px inset, rgb(148, 161, 169) -2px -2px 0px 0px inset` · md: `rgba(20, 40, 50, 0.12) 0px 10px 30px 0px` · lg: `rgb(242, 246, 248) 2px 2px 0px 0px inset, rgb(148, 161, 169) -2px -2px 0px 0px inset`
- Spacing: base unit 2 px; common steps 2 px, 6 px, 10 px, 12 px, 13 px, 14 px, 16 px, 18 px, 24 px
- Layout: container 1200 px; breakpoints 700 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** precise, tidy, dry.

Writes like a calm game manual from the desk of a very neat engineer: controls, keys and counts, stated exactly. Wins are quietly satisfying and losses are reported without drama.

**Do**

- List controls using the real keys
- Report counts and times as numbers
- Keep celebratory text to a few words

**Do not**

- No taunting after a loss
- Avoid slang from other games
- Never exaggerate difficulty

## Taglines

1. Dig carefully, flag firmly
2. Every cell tells a story
3. Clear the lane
4. Think first, click second
5. One board, many deductions

**Boilerplate:** Sweep Lane is a retro-modern minesweeper game with three board sizes, keyboard play and best times saved per level, built for careful players.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | New game |
| secondaryCta | Switch to Flag mode |
| success | Board cleared in 1:42. Best time! |
| error | Mine hit. Press N for a new game. |
| empty | No best time yet. Clear a board to set one. |

---
Source listing key `o:minesweeper`. Rebuild with `python3 scripts/brand-kit/build.py o:minesweeper`.
