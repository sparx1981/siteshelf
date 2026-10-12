# Starlight Arcade — brand kit

*Night-sky arcade with polished classic games.* Generated from the SiteShelf listing **Brick Breaker** (Games); every value below is read from that page, not invented.

> **Break the sky, one brick at a time**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Sora |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **spark** glyph. A spark reads as a star or a ball strike, fitting the starlit arcade and the glowing ball. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#0B1030` | Page background |
| surface | `#12163C` | Cards, panels, raised areas |
| text | `#B9B4DE` | Body and heading text |
| textMuted | `#F3F0FF` | Secondary text, captions |
| primary | `#FFB347` | Main actions, links, brand colour |
| secondary | `#B9B4DE` | Highlights, charts, second accent |
| border | `#3A3F8A` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#715227` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 9.41:1 | pass | pass |
| Muted text on background | 16.55:1 | pass | pass |
| Primary on background | 10.43:1 | pass | pass |
| Text on primary | 11.03:1 | pass | pass |
| Text on surface | 8.83:1 | pass | pass |

**Colours seen on the page** (share of use): `#0B1030` 97.6%, `#1C1040` 0.8%, `#000000` 0.8%, `#FFB347` 0.5%, `#FFF3D0` 0.1%, `#B9B4DE` 0.1%, `#F3F0FF` 0.1%, `#3A3F8A` 0.0%, `#715227` 0.0%

## Typography

- Headings: **Sora** (weight 600)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@500&family=Sora:wght@600&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Sora | 44 px | 600 | 44px | normal |
| Heading / H2 | Sora | 36 px | 600 | 39.6px | normal |
| Body | Inter | 14 px | 400 | 21px | normal |
| Button | Inter | 16 px | 700 | normal | normal |
| Caption / eyebrow | Inter | 12 px | 700 | normal | 2.16px |

## Shape, space and motion

- Radius: sm 12 px, md 18 px, lg 18 px
- Shadows: sm: `rgba(255, 255, 255, 0.04) 0px 0px 0px 1px, rgba(120, 100, 255, 0.25) 0px 0px 60px 0px, rgba(120, 100, 255, 0.15) 0px 0px 40px 0px inset` · md: `rgba(255, 255, 255, 0.04) 0px 0px 0px 1px, rgba(120, 100, 255, 0.25) 0px 0px 60px 0px, rgba(120, 100, 255, 0.15) 0px 0px 40px 0px inset` · lg: `rgba(255, 255, 255, 0.04) 0px 0px 0px 1px, rgba(120, 100, 255, 0.25) 0px 0px 60px 0px, rgba(120, 100, 255, 0.15) 0px 0px 40px 0px inset`
- Spacing: base unit 4 px; common steps 2 px, 4 px, 6 px, 8 px, 10 px, 12 px, 16 px, 18 px, 20 px
- Layout: container 1200 px; breakpoints single fluid layout
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** bright, playful, competitive.

A friendly arcade attendant under neon: encouraging, quick and fond of high scores. Copy is punchy and games-first, with a little starry wonder.

**Do**

- Use arcade verbs like launch, smash and clear
- Show lives and scores as plain numbers
- Celebrate in one line then get back to the game

**Do not**

- Gambling language such as jackpot
- Long tutorials before play
- Insults for losing

## Taglines

1. Break the sky, one brick at a time
2. Starlight on every high score
3. Paddle up, ball away
4. Classic play, clean glow
5. One more round under the stars

**Boilerplate:** Starlight Arcade is an invented arcade of polished browser games, led by Brick Breaker, with power-ups, three levels and a saved high score.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Start game |
| secondaryCta | Pause |
| success | New high score. Look at you |
| error | Game over. One more go? |
| empty | No high score yet. Set the first |

---
Source listing key `o:game-breakout`. Rebuild with `python3 scripts/brand-kit/build.py o:game-breakout`.
