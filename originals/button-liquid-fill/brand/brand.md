# Tidepool UI — brand kit

*Button design system with liquid fills.* Generated from the SiteShelf listing **Liquid Fill Buttons** (Buttons); every value below is read from that page, not invented.

> **Buttons that fill like water**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Sora |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **drop** glyph. A single water drop is the clearest picture of a fill that spreads. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F4F7F9` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#4A5B67` | Body and heading text |
| textMuted | `#0F1B24` | Secondary text, captions |
| primary | `#0B7F99` | Main actions, links, brand colour |
| secondary | `#FF6A4D` | Highlights, charts, second accent |
| border | `#FFFFFF` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#99C9D4` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 6.54:1 | pass | pass |
| Muted text on background | 16.23:1 | pass | pass |
| Primary on background | 4.33:1 | fail | pass |
| Text on primary | 4.66:1 | pass | pass |
| Text on surface | 7.04:1 | pass | pass |

**Colours seen on the page** (share of use): `#F4F7F9` 78.4%, `#0EA5C6` 14.5%, `#0F1B24` 6.6%, `#4A5B67` 0.2%, `#FF6A4D` 0.1%, `#1F8A5B` 0.1%, `#7C4DFF` 0.1%, `#9FB2BF` 0.0%, `#0B7F99` 0.0%, `#99C9D4` 0.0%

## Typography

- Headings: **Sora** (weight 700)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Sora:wght@600;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Sora | 60 px | 700 | 61.2px | -1.5px |
| Body | Inter | 17 px | 400 | 26.35px | normal |
| Button | Sora | 16 px | 700 | normal | normal |
| Caption / eyebrow | Sora | 13 px | 700 | normal | 1.82px |

## Shape, space and motion

- Radius: sm 12 px, md 20 px, lg 48 px, pill (fully rounded)
- Shadows: sm: `rgb(185, 198, 207) 0px 0px 0px 1.5px` · md: `rgb(15, 27, 36) 0px 0px 0px 3px` · lg: `rgb(15, 27, 36) 0px 0px 0px 2px inset`
- Spacing: base unit 4 px; common steps 2 px, 3 px, 8 px, 10 px, 14 px, 16 px, 20 px, 22 px, 24 px
- Layout: container 1100 px; breakpoints 560 px, 980 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** fluid, friendly, crisp.

Talks like a design system maintainer who likes water metaphors but keeps docs crisp. It explains behaviour in one line and lets the demo do the rest.

**Do**

- Describe motion in a verb and a duration
- Name tokens and themes plainly: Ocean, Sunset
- Give each button label two words or fewer

**Do not**

- No vague promises of delight
- No design-speak like synergy or touchpoints
- No paragraphs where a caption will do

## Taglines

1. Buttons that fill like water
2. Hover and the tide comes in
3. Tiny floods, tidy code
4. Press, pour, done
5. Motion with a shoreline

**Boilerplate:** Tidepool UI is a small design system of buttons that flood with colour from wherever the pointer enters, with keyboard fills, themes and speed controls built in.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Get started |
| secondaryCta | See pricing |
| success | Fill complete, theme applied |
| error | That fill failed to start, try again |
| empty | No buttons in this theme yet |

---
Source listing key `o:button-liquid-fill`. Rebuild with `python3 scripts/brand-kit/build.py o:button-liquid-fill`.
