# MIRA.OKAFOR — brand kit

*Independent designer and developer portfolio.* Generated from the SiteShelf listing **Brutalist Portfolio** (Landing Page); every value below is read from that page, not invented.

> **I make loud little websites**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Space Grotesk |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **monogram** glyph. The name is the brand, so a heavy block initial in the page's hard-edged style fits best. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#FFF6D6` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#111111` | Body and heading text |
| textMuted | `#000000` | Secondary text, captions |
| primary | `#B8FF4F` | Main actions, links, brand colour |
| secondary | `#FF4FA3` | Highlights, charts, second accent |
| border | `#111111` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#FF4FA3` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 17.45:1 | pass | pass |
| Muted text on background | 19.41:1 | pass | pass |
| Primary on background | 1.11:1 | fail | fail |
| Text on primary | 16.33:1 | pass | pass |
| Text on surface | 18.88:1 | pass | pass |

**Colours seen on the page** (share of use): `#FFF6D6` 63.3%, `#FFFFFF` 16.6%, `#111111` 10.8%, `#3B5BFF` 5.2%, `#FF4FA3` 2.6%, `#B8FF4F` 1.6%, `#000000` 0.0%

## Typography

- Headings: **Space Grotesk** (weight 700)
- Body: **Space Grotesk**
- Mono: **Space Mono**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=Space+Mono:wght@400;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Space Grotesk | 104 px | 700 | 95.68px | -4.16px |
| Heading / H2 | Space Grotesk | 56 px | 700 | 56px | -1.68px |
| Subheading / H3 | Space Grotesk | 22 px | 700 | normal | normal |
| Body | Space Grotesk | 20 px | 500 | 30px | normal |
| Button | Space Grotesk | 15 px | 700 | normal | normal |
| Navigation | Space Grotesk | 15 px | 700 | 22.5px | normal |
| Mono | Space Mono | 13 px | 400 | normal | 0.78px |

## Shape, space and motion

- Radius: sm 0 px, md 0 px, lg 0 px, pill (fully rounded)
- Shadows: sm: `rgb(17, 17, 17) 6px 6px 0px 0px` · md: `rgb(17, 17, 17) 4px 4px 0px 0px` · lg: `rgb(17, 17, 17) 6px 6px 0px 0px`
- Spacing: base unit 4 px; common steps 4 px, 6 px, 8 px, 10 px, 12 px, 14 px, 16 px, 24 px, 28 px
- Layout: container 1160 px; breakpoints 600 px, 900 px
- Motion: 120 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** loud, cheeky, direct.

Talks like a designer who is good and knows it: short punchy lines, jokes with the volume up and no hedging. It is playful about the work and dead serious about shipping it.

**Do**

- Use short declarative sentences, one idea per line
- Let a joke land once, then get to the point
- Name the real project, client type and result

**Do not**

- Do not use corporate agency language
- Do not apologise for being bold
- Do not pad a line with soft qualifiers

## Taglines

1. I make loud little websites
2. Bold brands, strange layouts, fast pages
3. Weird on purpose, fast by default
4. Boring is the only bad brief
5. Big type. Hard shadows. Real results.

**Boilerplate:** MIRA.OKAFOR is the portfolio of an independent designer and developer who builds bold brands, strange layouts and fast websites for clients who want to be remembered.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Hire me |
| secondaryCta | See the work |
| success | Sent. I will write back soon. |
| error | That did not send. Try again or email me. |
| empty | Nothing here yet. Check back soon. |

---
Source listing key `o:brutalist-portfolio`. Rebuild with `python3 scripts/brand-kit/build.py o:brutalist-portfolio`.
