# Lamplit — brand kit

*Lights Out puzzles for quiet evenings.* Generated from the SiteShelf listing **Lights Out** (Games); every value below is read from that page, not invented.

> **Flip every lamp, one by one**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Sora |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **spark** glyph on a circle tile. A spark is a lit lamp flipping on or off. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#0C1026` | Page background |
| surface | `#1A1630` | Cards, panels, raised areas |
| text | `#F3ECFF` | Body and heading text |
| textMuted | `#9A90B8` | Secondary text, captions |
| primary | `#FFC247` | Main actions, links, brand colour |
| secondary | `#1A2250` | Highlights, charts, second accent |
| border | `#5A5FA0` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#1A2250` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 16.33:1 | pass | pass |
| Muted text on background | 6.31:1 | pass | pass |
| Primary on background | 11.68:1 | pass | pass |
| Text on primary | 12.22:1 | pass | pass |
| Text on surface | 15.19:1 | pass | pass |

**Colours seen on the page** (share of use): `#0C1026` 85.2%, `#4A2E18` 4.3%, `#151A3A` 2.3%, `#000000` 2.0%, `#FFC247` 1.6%, `#3A3F78` 1.3%, `#3A3358` 0.9%, `#2A2540` 0.9%, `#6B4528` 0.8%, `#FFF6D0` 0.7%

## Typography

- Headings: **Sora** (weight 600)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@500&family=Sora:wght@600&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Sora | 56 px | 600 | 56px | normal |
| Body | Inter | 15 px | 400 | 22.5px | normal |
| Button | Arial | 13.3 px | 400 | normal | normal |
| Caption / eyebrow | Inter | 12 px | 700 | normal | 2.16px |

## Shape, space and motion

- Radius: sm 4 px, md 14 px, lg 50 px
- Shadows: sm: `rgb(74, 68, 120) 0px 0px 0px 2px inset, rgba(0, 0, 0, 0.4) 0px -6px 12px 0px inset` · md: `rgb(107, 69, 40) 0px 2px 0px 0px inset, rgba(0, 0, 0, 0.4) 0px -3px 0px 0px inset, rgba(0, 0, 0, 0.55) 0px 24px 50px 0px` · lg: `rgba(255, 194, 71, 0.55) 0px 0px 26px 6px, rgb(255, 220, 138) 0px 0px 0px 2px inset`
- Spacing: base unit 2 px; common steps 4 px, 6 px, 8 px, 10 px, 14 px, 16 px, 22 px
- Layout: container 1200 px; breakpoints 700 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** cosy, patient, mildly mischievous.

Lamplit sounds like a friend leaning over a desk lamp, offering a hint only when asked. It is warm, brief and calm about getting stuck.

**Do**

- Offer help after the player asks, not before
- Count moves plainly and kindly
- Use small night-room images: lamp, moon, desk

**Do not**

- Do not call a stuck player slow
- Do not use 'level up' game slang
- Do not hurry a decision

## Taglines

1. Flip every lamp, one by one
2. A quiet puzzle for the evening
3. Press a lamp, change the room
4. Turn out the lights, slowly
5. Solvable, every single time

**Boilerplate:** Lamplit is a collection of Lights Out puzzles, each guaranteed solvable, played on a glowing lantern board with hints from a real solver.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | New puzzle |
| secondaryCta | Hint |
| success | Lights out in 9 moves. Nicely done. |
| error | That move is not possible. Try a lamp on the board. |
| empty | No moves yet. Press any lamp to begin. |

---
Source listing key `o:game-lights-out`. Rebuild with `python3 scripts/brand-kit/build.py o:game-lights-out`.
