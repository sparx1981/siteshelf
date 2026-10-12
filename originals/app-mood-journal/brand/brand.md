# Dayglow — brand kit

*Private mood journal with a monthly mosaic.* Generated from the SiteShelf listing **Mood Journal** (App UI); every value below is read from that page, not invented.

> **How did today feel?**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Young Serif |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **spark** glyph on a squircle tile. A little spark of light echoes the name and the idea that even a rough day leaves a glow. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#EFEAF7` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#261F3A` | Body and heading text |
| textMuted | `#6A6285` | Secondary text, captions |
| primary | `#8FC7F0` | Main actions, links, brand colour |
| secondary | `#FFCF4A` | Highlights, charts, second accent |
| border | `#CFC6E6` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#425A6E` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 13.28:1 | pass | pass |
| Muted text on background | 4.81:1 | pass | pass |
| Primary on background | 1.53:1 | fail | fail |
| Text on primary | 10.85:1 | pass | pass |
| Text on surface | 15.68:1 | pass | pass |

**Colours seen on the page** (share of use): `#EFEAF7` 64.9%, `#FFFFFF` 31.4%, `#8FC7F0` 0.9%, `#8FD18A` 0.9%, `#B9A2E8` 0.6%, `#F08AA0` 0.3%, `#FFCF4A` 0.3%, `#6B3FB8` 0.3%, `#261F3A` 0.2%, `#6A6285` 0.1%

## Typography

- Headings: **Young Serif** (weight 400)
- Body: **Figtree**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;700&family=Young+Serif&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Young Serif | 52 px | 400 | 54.6px | normal |
| Heading / H2 | Young Serif | 26 px | 400 | normal | normal |
| Body | Figtree | 18 px | 400 | 27px | normal |
| Button | Figtree | 12.5 px | 700 | 18.75px | normal |
| Caption / eyebrow | Figtree | 13 px | 700 | normal | 2.08px |

## Shape, space and motion

- Radius: sm 12 px, md 16 px, lg 28 px, pill (fully rounded)
- Shadows: sm: `rgb(38, 31, 58) 0px 0px 0px 3px` · md: `rgba(60, 30, 120, 0.5) 0px 30px 60px -38px` · lg: `rgb(38, 31, 58) 0px 0px 0px 3px`
- Spacing: base unit 4 px; common steps 2 px, 4 px, 5 px, 6 px, 8 px, 10 px, 12 px, 13 px, 16 px
- Layout: container 1100 px; breakpoints 480 px, 900 px
- Motion: 150 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** gentle, reflective, soft.

Writes like a kind friend asking how you are at the end of the day, with no hurry and no diagnosis. Sentences are short, lowercase-friendly in tone and never clinical.

**Do**

- Ask open, low-pressure questions
- Name feelings in everyday words like low or rough
- Remind people their entries stay on their own device

**Do not**

- No clinical or therapy language
- Never score or judge a mood
- Avoid pushy streak guilt

## Taglines

1. How did today feel?
2. Every colour of today, kept
3. A small light at day's end
4. Your mood, one tile at a time
5. Write it down. Let it glow

**Boilerplate:** Dayglow is a private daily mood journal that turns five drawn faces and a few lines of writing into a colourful monthly mosaic, stored only on your device.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Save entry |
| secondaryCta | See the month |
| success | Saved. See you tomorrow. |
| error | That did not save. Your words are still here, try again. |
| empty | No entry for this day. Pick a face to begin. |

---
Source listing key `o:app-mood-journal`. Rebuild with `python3 scripts/brand-kit/build.py o:app-mood-journal`.
