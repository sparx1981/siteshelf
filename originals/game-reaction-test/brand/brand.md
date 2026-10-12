# Pole Position Labs — brand kit

*Motorsport-style reaction time test club.* Generated from the SiteShelf listing **Reaction Time Test** (Games); every value below is read from that page, not invented.

> **Lights out and away we go**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Unbounded |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **target** glyph on a squircle tile. A target with a centre dot stands for hitting the moment the lights go out. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#1B2C5A` | Page background |
| surface | `#0E1224` | Cards, panels, raised areas |
| text | `#F4F6FF` | Body and heading text |
| textMuted | `#B3BBE0` | Secondary text, captions |
| primary | `#FFB020` | Main actions, links, brand colour |
| secondary | `#FFD3A0` | Highlights, charts, second accent |
| border | `#5A6498` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#715016` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 12.53:1 | pass | pass |
| Muted text on background | 7.14:1 | pass | pass |
| Primary on background | 7.39:1 | pass | pass |
| Text on primary | 10.74:1 | pass | pass |
| Text on surface | 17.22:1 | pass | pass |

**Colours seen on the page** (share of use): `#1B2C5A` 58.4%, `#0E1224` 30.6%, `#000000` 3.7%, `#FFFFFF` 2.5%, `#1C2244` 2.4%, `#3A3F5C` 1.1%, `#3A8A4A` 0.5%, `#FFF6D0` 0.3%, `#FFB020` 0.3%, `#FFD3A0` 0.2%

## Typography

- Headings: **Unbounded** (weight 600)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@500&family=Unbounded:wght@600&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Unbounded | 46 px | 600 | 46px | normal |
| Button | Inter | 20 px | 700 | normal | normal |
| Caption / eyebrow | Inter | 12 px | 700 | normal | 2.4px |

## Shape, space and motion

- Radius: sm 12 px, md 18 px, lg 22 px, pill (fully rounded)
- Shadows: sm: `rgba(0, 0, 0, 0.4) 0px 8px 20px 0px` · md: `rgba(0, 0, 0, 0.5) 0px 24px 50px 0px` · lg: `rgba(0, 0, 0, 0.4) 0px 8px 20px 0px`
- Spacing: base unit 2 px; common steps 2 px, 3 px, 6 px, 8 px, 10 px, 12 px, 14 px, 16 px, 18 px
- Layout: container 980 px; breakpoints 700 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** competitive, crisp, good-humoured.

Sounds like a race-day commentator: clipped, energetic and fair. It counts in milliseconds, calls a false start clearly and keeps the banter kind.

**Do**

- Report times in milliseconds with the best and average
- Use race words like lights, launch and false start
- Keep instructions to five words or fewer

**Do not**

- Do not mock slow reactions
- Do not use hype that overpromises a prize
- Do not use long explanations before the start

## Taglines

1. Lights out and away we go
2. Five lights. One reaction. No excuses.
3. Find your launch time
4. Fast hands, faster starts
5. How quick off the line are you?

**Boilerplate:** Pole Position Labs is a motorsport-inspired club that runs a start-lights reaction test, measuring your launch time over five attempts and charting your best and average.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Start |
| secondaryCta | Reset |
| success | Lights out. 214 ms, a clean launch. |
| error | False start. Wait for the lights to go out. |
| empty | No attempts yet. Press Start. |

---
Source listing key `o:game-reaction-test`. Rebuild with `python3 scripts/brand-kit/build.py o:game-reaction-test`.
