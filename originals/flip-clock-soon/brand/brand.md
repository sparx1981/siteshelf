# Hourglass & Hearth — brand kit

*Candle shop counting down to opening day.* Generated from the SiteShelf listing **Flip-Clock Coming Soon** (Coming Soon); every value below is read from that page, not invented.

> **The shop opens in 36 days**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Bebas Neue |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **flame** glyph on a squircle tile. A single flame is the shop's product and the hearth in its name. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#EFE9DC` | Page background |
| surface | `#2A2723` | Cards, panels, raised areas |
| text | `#231F1A` | Body and heading text |
| textMuted | `#6E665A` | Secondary text, captions |
| primary | `#F26A1B` | Main actions, links, brand colour |
| secondary | `#F8AD82` | Highlights, charts, second accent |
| border | `#D9D0BD` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#6C3314` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 13.54:1 | pass | pass |
| Muted text on background | 4.68:1 | pass | pass |
| Primary on background | 2.53:1 | fail | fail |
| Text on primary | 6.41:1 | pass | pass |
| Text on surface | 1.10:1 | fail | fail |

**Colours seen on the page** (share of use): `#EFE9DC` 86.5%, `#2A2723` 12.3%, `#F26A1B` 0.6%, `#D9D0BD` 0.3%, `#FFF8E8` 0.2%, `#6E665A` 0.1%, `#1C0F04` 0.0%, `#F8AD82` 0.0%, `#6C3314` 0.0%

## Typography

- Headings: **Bebas Neue** (weight 400)
- Body: **Work Sans**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Work+Sans:wght@400;500;600&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Bebas Neue | 92 px | 400 | 87.4px | 1.84px |
| Body | Work Sans | 17 px | 400 | 26.35px | normal |
| Button | Arial | 13.3 px | 400 | normal | normal |

## Shape, space and motion

- Radius: sm 8 px, md 12 px, lg 12 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 4 px, 8 px, 10 px, 12 px, 16 px, 17 px, 18 px, 22 px, 28 px
- Layout: container 1200 px; breakpoints 480 px
- Motion: 300 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** cosy, anticipatory, crafted.

A shopkeeper chalking the opening date on a board: warm, slightly theatrical and quietly excited. It counts the time out loud and promises light, not hype.

**Do**

- State the date and remaining time precisely
- Use candlelit vocabulary such as wick, glow and hearth
- Keep the tone cosy, never salesy

**Do not**

- Countdown pressure like hurry or last chance
- Overpromising launch discounts
- Cold techy wording

## Taglines

1. The shop opens in 36 days
2. Light a candle for opening day
3. Good things burn slowly
4. Wicks trimmed, doors almost open
5. Be first through the door

**Boilerplate:** Hourglass & Hearth is a candle shop opening on 14 November, selling hand-poured candles and warm-lit home goods made in small batches.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Notify me |
| secondaryCta | Switch to midnight |
| success | You're on the list. We'll send word |
| error | That email looks off. Check and retry |
| empty | No time left. We're open |

---
Source listing key `o:flip-clock-soon`. Rebuild with `python3 scripts/brand-kit/build.py o:flip-clock-soon`.
