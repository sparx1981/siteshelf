# Whirlwork — brand kit

*Pure-CSS loading animations for interfaces.* Generated from the SiteShelf listing **Loader Lab** (Loaders); every value below is read from that page, not invented.

> **Twelve loaders, zero images**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter Bold (stand-in for Inter Tight) |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **orbit** glyph on a circle tile. An orbit path suggests something endlessly turning while it waits. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#0F1115` | Page background |
| surface | `#171A21` | Cards, panels, raised areas |
| text | `#7D8394` | Body and heading text |
| textMuted | `#E8EAF0` | Secondary text, captions |
| primary | `#5EEAD4` | Main actions, links, brand colour |
| secondary | `#818CF8` | Highlights, charts, second accent |
| border | `#232733` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#2E6962` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 4.99:1 | pass | pass |
| Muted text on background | 15.71:1 | pass | pass |
| Primary on background | 12.77:1 | pass | pass |
| Text on primary | 13.28:1 | pass | pass |
| Text on surface | 4.60:1 | pass | pass |

**Colours seen on the page** (share of use): `#0F1115` 98.8%, `#5EEAD4` 0.4%, `#262B38` 0.3%, `#FFFFFF` 0.2%, `#7D8394` 0.1%, `#E8EAF0` 0.1%, `#343A4B` 0.0%, `#818CF8` 0.0%, `#9AA1B5` 0.0%, `#2E6962` 0.0%

## Typography

- Headings: **Inter Tight** (weight 700)
- Body: **Inter Tight**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter+Tight:wght@500;600;700&family=Geist+Mono:wght@400&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Inter Tight | 56 px | 700 | 58.8px | -1.68px |
| Body | Inter Tight | 16 px | 500 | 24px | normal |
| Button | Inter Tight | 14 px | 600 | normal | normal |
| Caption / eyebrow | Geist Mono | 12 px | 400 | normal | 0.96px |

## Shape, space and motion

- Radius: sm 10 px, md 18 px, lg 18 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 2 px, 4 px, 5 px, 6 px, 8 px, 12 px, 16 px, 18 px, 20 px
- Layout: container 1200 px; breakpoints 700 px, 1000 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** technical, playful, tidy.

Sounds like a workshop notebook: short captions, exact numbers, and a bit of love for small moving parts. It names each animation by what it does.

**Do**

- Caption each animation in one or two words
- State speeds and durations in numbers
- Use mono-style, lowercase labels

**Do not**

- No hype about performance
- No emoji
- No claims without a working demo

## Taglines

1. Twelve loaders, zero images
2. Tweak the speed, freeze them all
3. Spin, pulse, wait well
4. Loading, done with taste
5. Little animations, plainly built

**Boilerplate:** Whirlwork is a small lab of twelve pure-CSS loading animations, each labelled, adjustable in speed and easy to pause.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Pause all |
| secondaryCta | Copy CSS |
| success | Speed updated |
| error | Could not copy, select the text instead |
| empty | No loaders match that filter |

---
Source listing key `o:loader-lab`. Rebuild with `python3 scripts/brand-kit/build.py o:loader-lab`.
