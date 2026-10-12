# Stepwise — brand kit

*Fluid type calculator for designers.* Generated from the SiteShelf listing **Fluid Type Calculator** (Tools); every value below is read from that page, not invented.

> **Type that scales, step by step**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Fraunces |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **chevrons** glyph on a squircle tile. Two stepped chevrons suggest sizes climbing with the screen. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#FFFDF7` | Page background |
| surface | `#F4EFE4` | Cards, panels, raised areas |
| text | `#1D2B26` | Body and heading text |
| textMuted | `#56655F` | Secondary text, captions |
| primary | `#1F6B4F` | Main actions, links, brand colour |
| secondary | `#2A2A5A` | Highlights, charts, second accent |
| border | `#BDB59F` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#A1C1B5` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 14.48:1 | pass | pass |
| Muted text on background | 6.03:1 | pass | pass |
| Primary on background | 6.31:1 | pass | pass |
| Text on primary | 6.41:1 | pass | pass |
| Text on surface | 12.84:1 | pass | pass |

**Colours seen on the page** (share of use): `#FFFDF7` 50.1%, `#F4EFE4` 44.1%, `#E8C7A8` 3.3%, `#16231E` 0.6%, `#EBE4CF` 0.5%, `#1F6B4F` 0.4%, `#2A2A5A` 0.3%, `#000000` 0.2%, `#8A8FC0` 0.2%, `#6A6AA8` 0.2%

## Typography

- Headings: **Fraunces** (weight 600)
- Body: **Inter**
- Mono: **monospace**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Fraunces:wght@600&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@500&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Fraunces | 52 px | 600 | 54.08px | normal |
| Heading / H2 | Inter | 13 px | 600 | normal | 1.3px |
| Subheading / H3 | Fraunces | 42.6 px | 600 | 45.9594px | normal |
| Body | Inter | 14.5 px | 400 | 21.75px | normal |
| Button | Inter | 14 px | 600 | normal | normal |
| Caption / eyebrow | Inter | 12 px | 600 | normal | 1.92px |
| Mono | monospace | 14.5 px | 400 | 21.75px | normal |

## Shape, space and motion

- Radius: sm 10 px, md 12 px, lg 14 px, pill (fully rounded)
- Shadows: sm: `rgba(30, 40, 35, 0.04) 0px 1px 0px 0px` · md: `rgba(20, 40, 30, 0.5) 0px 18px 40px -22px` · lg: `rgba(30, 40, 35, 0.04) 0px 1px 0px 0px`
- Spacing: base unit 4 px; common steps 2 px, 4 px, 6 px, 8 px, 10 px, 12 px, 14 px, 16 px, 18 px
- Layout: container 1260 px; breakpoints 420 px, 1000 px
- Motion: 150 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** precise, calm, practical.

Stepwise sounds like a patient senior designer at the next desk. It states the number, shows the working, and never hides behind jargon.

**Do**

- Lead with the value, then the reason
- Use plain units (px, rem, vw)
- Keep sentences under 20 words

**Do not**

- Do not use hype or exclamation marks
- Do not say 'simply' or 'just'
- Do not leave an error without a fix

## Taglines

1. Type that scales, step by step
2. Every size, exactly where it belongs
3. From phone to widescreen, in one line
4. Fluid type without the maths
5. Set it once, read it everywhere

**Boilerplate:** Stepwise turns two sizes and two screen widths into one precise clamp() value and a full fluid type scale.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Copy clamp() |
| secondaryCta | Copy as CSS variables |
| success | Copied. Paste it into your stylesheet. |
| error | Max viewport must be larger than min viewport. |
| empty | Enter two sizes and two widths to begin. |

---
Source listing key `o:tool-clamp-calculator`. Rebuild with `python3 scripts/brand-kit/build.py o:tool-clamp-calculator`.
