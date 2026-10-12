# Steepline — brand kit

*Single-garden tea club with a brewing timer.* Generated from the SiteShelf listing **Steepline Tea Club** (Landing Page); every value below is read from that page, not invented.

> **A slower, better cup**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Newsreader |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **sprout** glyph. A young tea shoot ties the brand to leaf, garden and a slow, living ritual. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F6F1E6` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#1E2A22` | Body and heading text |
| textMuted | `#5C6A5F` | Secondary text, captions |
| primary | `#1F3A2D` | Main actions, links, brand colour |
| secondary | `#B5532E` | Highlights, charts, second accent |
| border | `#E4DCC8` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#B5532E` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 13.23:1 | pass | pass |
| Muted text on background | 5.06:1 | pass | pass |
| Primary on background | 10.96:1 | pass | pass |
| Text on primary | 12.34:1 | pass | pass |
| Text on surface | 14.90:1 | pass | pass |

**Colours seen on the page** (share of use): `#F6F1E6` 82.2%, `#FFFFFF` 15.6%, `#1F3A2D` 1.0%, `#D9CFB8` 0.4%, `#E6EFC9` 0.4%, `#5C6A5F` 0.2%, `#000000` 0.1%, `#B9B2A0` 0.0%, `#B5532E` 0.0%, `#C7DD7A` 0.0%

## Typography

- Headings: **Newsreader** (weight 500)
- Body: **Karla**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Karla:wght@400;500;700&family=Newsreader:ital,wght@0,500;1,500&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Newsreader | 84 px | 500 | 85.68px | -1.26px |
| Heading / H2 | Newsreader | 50 px | 500 | 52.5px | normal |
| Body | Karla | 18 px | 400 | 28.8px | normal |
| Button | Karla | 14 px | 700 | normal | normal |
| Navigation | Karla | 15 px | 500 | 24px | normal |

## Shape, space and motion

- Radius: sm 18 px, md 20 px, lg 24 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 4 px, 6 px, 8 px, 10 px, 14 px, 16 px, 20 px, 22 px, 26 px
- Layout: container 1200 px; breakpoints 860 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** unhurried, knowledgeable, warm.

Steepline sounds like a tea buyer who loves the details but never talks down. It gives temperatures and times as plainly as a recipe and treats the daily cup as a small ceremony.

**Do**

- Give exact temperature and time for every tea
- Name the garden and the season
- Use sensory words: toasty, floral, malty

**Do not**

- Do not use wellness claims like 'detox'
- Avoid snobbery about milk or sugar
- Never rush the reader towards a purchase

## Taglines

1. A slower, better cup
2. Brew it right, every time
3. Four teas, one tin
4. Tea from small gardens
5. Wait for the colour to deepen

**Boilerplate:** Steepline Tea Club is a subscription that posts four single-garden teas each month in a tin, with a brewing guide and timer so every cup is steeped at the right temperature.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Join the club |
| secondaryCta | Choose your blends |
| success | Your tin is on its way. |
| error | The timer could not start. Please try again. |
| empty | No blends chosen yet. Pick up to four. |

---
Source listing key `o:landing-tea-ritual`. Rebuild with `python3 scripts/brand-kit/build.py o:landing-tea-ritual`.
