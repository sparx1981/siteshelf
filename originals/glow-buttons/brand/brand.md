# Pushlight — brand kit

*Collection of glowing, interactive buttons.* Generated from the SiteShelf listing **Glow Button Collection** (Buttons); every value below is read from that page, not invented.

> **Eight ways to press a button**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Manrope |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **spark** glyph on a circle tile. A spark captures the glow and sudden feedback each button gives. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#0D0D12` | Page background |
| surface | `#8B5CF6` | Cards, panels, raised areas |
| text | `#8A8A9E` | Body and heading text |
| textMuted | `#FFFFFF` | Secondary text, captions |
| primary | `#8B5CF6` | Main actions, links, brand colour |
| secondary | `#22D3EE` | Highlights, charts, second accent |
| border | `#23232E` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#22D3EE` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 5.73:1 | pass | pass |
| Muted text on background | 19.38:1 | pass | pass |
| Primary on background | 4.58:1 | pass | pass |
| Text on primary | 4.64:1 | pass | pass |
| Text on surface | 1.25:1 | fail | fail |

**Colours seen on the page** (share of use): `#0D0D12` 97.2%, `#8B5CF6` 1.6%, `#22D3EE` 0.4%, `#F472B6` 0.4%, `#FFFFFF` 0.2%, `#8A8A9E` 0.1%, `#ECECF3` 0.0%, `#A3E635` 0.0%, `#04222A` 0.0%, `#23232E` 0.0%

## Typography

- Headings: **Manrope** (weight 700)
- Body: **Manrope**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Manrope:wght@500;600;700&family=Geist+Mono:wght@400&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Manrope | 56 px | 700 | 58.8px | -1.68px |
| Button | Manrope | 16 px | 600 | normal | normal |
| Caption / eyebrow | Geist Mono | 12 px | 400 | normal | 0.96px |

## Shape, space and motion

- Radius: sm 14 px, md 20 px, lg 20 px
- Shadows: sm: `rgb(91, 52, 196) 0px 6px 0px 0px` · md: `rgb(91, 52, 196) 0px 6px 0px 0px` · lg: `rgb(91, 52, 196) 0px 6px 0px 0px`
- Spacing: base unit 4 px; common steps 8 px, 16 px, 28 px, 32 px, 40 px, 64 px
- Layout: container 1200 px; breakpoints 560 px, 1000 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** bold, showy, precise.

Writes like a demo reel narrator who knows the effect speaks for itself: clipped and confident. Each button name says what it does and nothing else.

**Do**

- Name the effect in one or two words
- Use present tense
- Keep captions in lowercase technical labels

**Do not**

- No claims about conversion
- Avoid adjectives like stunning
- Never explain a hover state in a paragraph

## Taglines

1. Eight ways to press a button
2. Press it. It glows
3. Interaction with a bit of light
4. Buttons that answer back
5. One dark board, many sparks

**Boilerplate:** Pushlight is a collection of eight glowing button styles, from gradient sweeps to magnetic pulls, built for keyboard and pointer alike.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Get started |
| secondaryCta | See the code |
| success | Success. Button state saved. |
| error | Something broke. Press to try again. |
| empty | No buttons match. Clear the filter. |

---
Source listing key `o:glow-buttons`. Rebuild with `python3 scripts/brand-kit/build.py o:glow-buttons`.
