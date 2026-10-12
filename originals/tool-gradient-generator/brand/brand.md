# Hue Bench — brand kit

*CSS gradient workbench for designers.* Generated from the SiteShelf listing **Gradient Generator** (Tools); every value below is read from that page, not invented.

> **Build gradients you can ship**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Space Grotesk |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **drop** glyph. A drop of colour is how every blend begins. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#12141C` | Page background |
| surface | `#1B1F2B` | Cards, panels, raised areas |
| text | `#FFFFFF` | Body and heading text |
| textMuted | `#EEF1FA` | Secondary text, captions |
| primary | `#FF6A88` | Main actions, links, brand colour |
| secondary | `#FFB86C` | Highlights, charts, second accent |
| border | `#3A4260` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#713342` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 18.38:1 | pass | pass |
| Muted text on background | 16.28:1 | pass | pass |
| Primary on background | 6.71:1 | pass | pass |
| Text on primary | 7.17:1 | pass | pass |
| Text on surface | 16.44:1 | pass | pass |

**Colours seen on the page** (share of use): `#12141C` 64.5%, `#E9ECF3` 14.5%, `#FFFFFF` 12.9%, `#FF6A88` 1.8%, `#FFB86C` 1.8%, `#6A7BFF` 1.8%, `#232838` 1.7%, `#D6969B` 0.6%, `#5B4BD8` 0.4%, `#D6DCF5` 0.1%

## Typography

- Headings: **Space Grotesk** (weight 600)
- Body: **Inter**
- Mono: **JetBrains Mono**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@500&family=Space+Grotesk:wght@600&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Space Grotesk | 44 px | 600 | 46.2px | normal |
| Heading / H2 | Space Grotesk | 14 px | 600 | normal | 1.12px |
| Subheading / H3 | Space Grotesk | 52 px | 600 | 52px | normal |
| Body | Inter | 17 px | 400 | 25.5px | normal |
| Button | Arial | 13.3 px | 400 | normal | normal |
| Caption / eyebrow | Inter | 12 px | 600 | normal | 1.92px |
| Mono | JetBrains Mono | 13 px | 500 | 20.8px | normal |

## Shape, space and motion

- Radius: sm 8 px, md 12 px, lg 16 px, pill (fully rounded)
- Shadows: sm: `rgba(0, 0, 0, 0.5) 0px 2px 8px 0px` · md: `rgba(20, 30, 60, 0.2) 0px 14px 30px 0px` · lg: `rgba(20, 30, 60, 0.3) 0px 18px 40px 0px`
- Spacing: base unit 2 px; common steps 2 px, 3 px, 4 px, 6 px, 8 px, 10 px, 12 px, 14 px, 16 px
- Layout: container 1280 px; breakpoints 560 px, 980 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** practical, cool, exact.

Sounds like a designer's bench notes: terse labels, helpful warnings and zero fluff. It explains contrast ratios and stops in numbers, and leaves taste to the user.

**Do**

- Name controls by function, such as stops, angle and type
- Give contrast ratios as numbers
- Provide copyable code, never screenshots

**Do not**

- Do not describe gradients with poetic filler
- Do not hide the CSS output
- Do not say perfect

## Taglines

1. Build gradients you can ship
2. Stops, angles, contrast, copy
3. The workbench for colour blends
4. See it on a real page first
5. Clean CSS from a clean bench

**Boilerplate:** Hue Bench is a compact gradient generator that lets designers build multi-stop linear, radial and conic gradients, test text contrast on the result and copy clean CSS.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Add stop |
| secondaryCta | Random |
| success | CSS copied to the clipboard. |
| error | Contrast too low. Try a darker stop. |
| empty | No stops yet. Add one to start. |

---
Source listing key `o:tool-gradient-generator`. Rebuild with `python3 scripts/brand-kit/build.py o:tool-gradient-generator`.
