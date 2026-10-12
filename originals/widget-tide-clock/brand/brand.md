# Pennick Bay — brand kit

*Harbour town with a live tide clock.* Generated from the SiteShelf listing **Tide Clock** (Widgets); every value below is read from that page, not invented.

> **Know the tide before you go**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Sora |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **wave** glyph on a squircle tile. A wave line is the most direct mark for a tide clock and harbour town. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#173A42` | Page background |
| surface | `#0A2230` | Cards, panels, raised areas |
| text | `#E8F6F8` | Body and heading text |
| textMuted | `#C9E2E8` | Secondary text, captions |
| primary | `#5FD6E6` | Main actions, links, brand colour |
| secondary | `#FFE29A` | Highlights, charts, second accent |
| border | `#2C6482` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#2E6069` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 11.03:1 | pass | pass |
| Muted text on background | 9.03:1 | pass | pass |
| Primary on background | 7.12:1 | pass | pass |
| Text on primary | 11.46:1 | pass | pass |
| Text on surface | 14.77:1 | pass | pass |

**Colours seen on the page** (share of use): `#173A42` 61.3%, `#0A2230` 33.4%, `#FFFBE8` 1.6%, `#000000` 1.4%, `#FFFFFF` 0.6%, `#5FD6E6` 0.5%, `#4A4A88` 0.5%, `#2C6482` 0.2%, `#E8F6F8` 0.2%, `#BFF6FB` 0.2%

## Typography

- Headings: **Sora** (weight 600)
- Body: **DM Sans**
- Google Fonts: `https://fonts.googleapis.com/css2?family=DM+Mono:wght@500&family=DM+Sans:wght@400;500;700&family=Sora:wght@600&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Sora | 28 px | 600 | 30.8px | normal |
| Body | DM Sans | 14 px | 400 | 21px | normal |
| Button | DM Sans | 14 px | 700 | normal | normal |
| Caption / eyebrow | DM Sans | 12 px | 700 | normal | 2.16px |

## Shape, space and motion

- Radius: sm 12 px, md 16 px, lg 24 px, pill (fully rounded)
- Shadows: sm: `rgba(0, 0, 0, 0.45) 0px 30px 80px 0px` · md: `rgba(0, 0, 0, 0.45) 0px 30px 80px 0px` · lg: `rgba(0, 0, 0, 0.45) 0px 30px 80px 0px`
- Spacing: base unit 2 px; common steps 2 px, 6 px, 8 px, 10 px, 12 px, 14 px, 16 px, 18 px, 24 px
- Layout: container 1060 px; breakpoints 820 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** seaworthy, steady, helpful.

Sounds like the harbourmaster giving the tide at the wall: calm, practical and exact about times. It uses plain guidance for the causeway and slipway, and respects the water.

**Do**

- Give times in 24-hour format with rise or fall
- Say what the tide means for the causeway or slipway
- Keep warnings short and unambiguous

**Do not**

- Do not predict danger without data
- Do not use dramatic sea cliches
- Do not hide the height in metres

## Taglines

1. Know the tide before you go
2. Next high, next low, plainly
3. The harbour wall, at a glance
4. Rising or falling, it's all here
5. Time and tide, told simply

**Boilerplate:** Pennick Bay is a harbour town on the coast whose tide clock shows the current water height, next high and low and a 36-hour curve, with plain guidance for the causeway.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Next high |
| secondaryCta | Next low |
| success | Tide updated to now. |
| error | Tide data unavailable. Check the board at the harbour. |
| empty | No tide times available. |

---
Source listing key `o:widget-tide-clock`. Rebuild with `python3 scripts/brand-kit/build.py o:widget-tide-clock`.
