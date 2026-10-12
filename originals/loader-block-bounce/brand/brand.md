# Tumble & Toss — brand kit

*Toy-shop loading animations that bounce.* Generated from the SiteShelf listing **Block Bounce Loader** (Loaders); every value below is read from that page, not invented.

> **Please bounce responsibly**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Baloo 2 |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **stack** glyph on a squircle tile. A stack of blocks is both the toy and the animation. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#FFF3D6` | Page background |
| surface | `#FFFAF0` | Cards, panels, raised areas |
| text | `#2A2118` | Body and heading text |
| textMuted | `#6E5A3F` | Secondary text, captions |
| primary | `#FFC531` | Main actions, links, brand colour |
| secondary | `#D1432F` | Highlights, charts, second accent |
| border | `#2A2118` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#D1432F` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 14.33:1 | pass | pass |
| Muted text on background | 5.96:1 | pass | pass |
| Primary on background | 1.43:1 | fail | fail |
| Text on primary | 12.43:1 | pass | pass |
| Text on surface | 15.19:1 | pass | pass |

**Colours seen on the page** (share of use): `#FFF3D6` 68.6%, `#F0D9A0` 17.2%, `#FFFAF0` 12.5%, `#FFC531` 0.4%, `#2A2118` 0.4%, `#D9A65C` 0.4%, `#2F9BFF` 0.2%, `#FF5A4D` 0.2%, `#8A5CFF` 0.2%, `#3FCF8E` 0.1%

## Typography

- Headings: **Baloo 2** (weight 800)
- Body: **Nunito**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;700;800&family=Nunito:wght@400;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Baloo 2 | 68 px | 800 | 68px | -0.68px |
| Body | Nunito | 18 px | 400 | 27px | normal |
| Button | Nunito | 16 px | 400 | 24px | normal |
| Caption / eyebrow | Nunito | 13 px | 700 | normal | 2.34px |

## Shape, space and motion

- Radius: sm 10 px, md 12 px, lg 24 px, pill (fully rounded)
- Shadows: sm: `rgba(255, 255, 255, 0.4) 0px 4.48px 0px 0px inset, rgba(0, 0, 0, 0.14) 0px -4.48px 0px 0px inset` · md: `rgb(184, 133, 63) 0px 3px 0px 0px` · lg: `rgba(90, 60, 10, 0.5) 0px 24px 50px -30px`
- Spacing: base unit 2 px; common steps 2 px, 6 px, 8 px, 9 px, 10 px, 12 px, 14 px, 20 px, 22 px
- Layout: container 1200 px; breakpoints 560 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** silly, bouncy, warm.

Tumble & Toss talks like a toy-shop owner with a wink: cheerful, bouncy and fond of small puns. Waiting is treated as a game, not an apology.

**Do**

- Write loading messages as short playful actions
- Keep puns light and kind
- Use warm primary-colour imagery

**Do not**

- Use technical loading jargon
- Apologise for the wait
- Use cynicism or sarcasm

## Taglines

1. Please bounce responsibly
2. Good things take a few bounces
3. Stacking up something nice
4. Wait with a wiggle
5. Blocks are on the way

**Boilerplate:** Tumble & Toss is a toy-shop-inspired set of loading animations in which stacked blocks bounce, squash and stretch while cheerful messages keep the wait light.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Pause |
| secondaryCta | Bounce again |
| success | All blocks landed. Ready! |
| error | A block rolled away. Let us try again. |
| empty | No blocks yet. Add a few. |

---
Source listing key `o:loader-block-bounce`. Rebuild with `python3 scripts/brand-kit/build.py o:loader-block-bounce`.
