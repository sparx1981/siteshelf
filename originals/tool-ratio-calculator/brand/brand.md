# Framewell — brand kit

*Aspect ratio tool for photographers and layout designers.* Generated from the SiteShelf listing **Aspect Ratio Calculator** (Tools); every value below is read from that page, not invented.

> **Frame it right**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Syne |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **aperture** glyph. An aperture symbol points to framing and photography. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#EFECE6` | Page background |
| surface | `#FFFDF9` | Cards, panels, raised areas |
| text | `#1A1A1A` | Body and heading text |
| textMuted | `#57534A` | Secondary text, captions |
| primary | `#0B6E6E` | Main actions, links, brand colour |
| secondary | `#3A1C08` | Highlights, charts, second accent |
| border | `#1A1A1A` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#3A1C08` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 14.76:1 | pass | pass |
| Muted text on background | 6.50:1 | pass | pass |
| Primary on background | 5.13:1 | pass | pass |
| Text on primary | 6.05:1 | pass | pass |
| Text on surface | 17.13:1 | pass | pass |

**Colours seen on the page** (share of use): `#EFECE6` 65.7%, `#FFFDF9` 22.6%, `#101216` 6.9%, `#1E2226` 1.7%, `#D9F0EE` 1.0%, `#1E0E04` 0.6%, `#000000` 0.5%, `#3A1C08` 0.3%, `#5E3010` 0.3%, `#8A4A1A` 0.3%

## Typography

- Headings: **Syne** (weight 700)
- Body: **Inter**
- Mono: **DM Mono**
- Google Fonts: `https://fonts.googleapis.com/css2?family=DM+Mono:wght@500&family=Inter:wght@400;500;600&family=Syne:wght@700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Syne | 54 px | 700 | 55.08px | normal |
| Heading / H2 | Syne | 13 px | 700 | normal | 1.3px |
| Body | Inter | 14.5 px | 400 | 21.75px | normal |
| Button | Arial | 13.3 px | 400 | normal | normal |
| Caption / eyebrow | Inter | 12 px | 600 | normal | 1.92px |
| Mono | DM Mono | 14 px | 500 | 23.8px | normal |

## Shape, space and motion

- Radius: sm 3 px, md 10 px, lg 12 px
- Shadows: sm: `rgb(11, 110, 110) 0px 0px 0px 1px inset` · md: `rgba(8, 10, 14, 0.62) 0px 0px 0px 999px` · lg: `rgba(0, 0, 0, 0.6) 0px 12px 30px 0px`
- Spacing: base unit 2 px; common steps 3 px, 4 px, 6 px, 7 px, 8 px, 10 px, 12 px, 14 px, 16 px
- Layout: container 1240 px; breakpoints 520 px, 980 px
- Motion: 150 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** precise, visual, calm.

Sounds like a studio technician: exact numbers, short explanations, and a love of good framing. Output is always ready to copy.

**Do**

- State ratios and pixel values plainly
- Give the CSS next to the result
- Name preset frames by use

**Do not**

- No lens or camera jargon
- No rounding without saying so
- No unnecessary adjectives

## Taglines

1. Frame it right
2. Every ratio, ready to copy
3. See the crop before you shoot
4. Sizes that match
5. A tidy contact sheet for layout

**Boilerplate:** Framewell is a photography-and-layout tool that calculates matching widths and heights, shows the ratio's crop in a viewfinder and outputs the CSS to use.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Use |
| secondaryCta | Copy CSS |
| success | CSS copied |
| error | Enter a width and height greater than zero |
| empty | No preset selected yet |

---
Source listing key `o:tool-ratio-calculator`. Rebuild with `python3 scripts/brand-kit/build.py o:tool-ratio-calculator`.
