# Foldline Labs — brand kit

*Menu animation experiments for interface designers.* Generated from the SiteShelf listing **Hamburger Morph Lab** (Navigation); every value below is read from that page, not invented.

> **Three lines, six ways out**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Space Grotesk |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **bars** glyph on a circle tile. Three horizontal bars are the hamburger itself and the thing the lab bends. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#101216` | Page background |
| surface | `#181B21` | Cards, panels, raised areas |
| text | `#9AA3B2` | Body and heading text |
| textMuted | `#EEF0F4` | Secondary text, captions |
| primary | `#8F74FF` | Main actions, links, brand colour |
| secondary | `#C6F25A` | Highlights, charts, second accent |
| border | `#2A2F38` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#C6F25A` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 7.37:1 | pass | pass |
| Muted text on background | 16.43:1 | pass | pass |
| Primary on background | 5.45:1 | pass | pass |
| Text on primary | 5.72:1 | pass | pass |
| Text on surface | 6.78:1 | pass | pass |

**Colours seen on the page** (share of use): `#101216` 74.6%, `#F3F1EC` 16.8%, `#1F232B` 5.4%, `#FFFFFF` 0.7%, `#E1DCF2` 0.7%, `#DFF0B8` 0.7%, `#F4D9C9` 0.7%, `#8F74FF` 0.3%, `#9AA3B2` 0.2%, `#4B4658` 0.1%

## Typography

- Headings: **Space Grotesk** (weight 700)
- Body: **Space Grotesk**
- Mono: **JetBrains Mono**
- Google Fonts: `https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&family=Space+Grotesk:wght@500;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Space Grotesk | 44 px | 700 | 46.2px | normal |
| Heading / H2 | Space Grotesk | 13 px | 700 | normal | 1.56px |
| Subheading / H3 | Space Grotesk | 36 px | 700 | 37.8px | normal |
| Body | Space Grotesk | 15 px | 400 | 22.5px | normal |
| Button | Space Grotesk | 13 px | 500 | 19.5px | normal |
| Mono | JetBrains Mono | 12.5 px | 400 | normal | normal |

## Shape, space and motion

- Radius: sm 2 px, md 12 px, lg 16 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 2 px; common steps 2 px, 8 px, 9 px, 10 px, 14 px, 16 px, 18 px, 22 px, 24 px
- Layout: container 1180 px; breakpoints 900 px
- Motion: 380 ms, `cubic-bezier(0.3`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** inventive, technical, playful.

Foldline Labs sounds like a design studio's experiment bench: clear instructions, light humour and exact numbers. It labels each animation like a lab sample.

**Do**

- Name each morph and show its speed and easing
- Write short, instructional labels
- Keep jokes to the odd pun on lines and folds

**Do not**

- Do not explain the obvious
- Avoid motion jargon without values
- Never skip the Escape and focus details

## Taglines

1. Three lines, six ways out
2. Pick a morph, tune the timing
3. Menus that move with manners
4. Fold it, flip it, close it
5. Little animations, carefully tested

**Boilerplate:** Foldline Labs is an experiment bench for interface designers, offering six animated menu icon morphs with live speed and easing controls tested on a real slide-in menu.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Try it on the menu |
| secondaryCta | Reset speed |
| success | Morph applied. |
| error | That setting is out of range. Try 100 to 800 ms. |
| empty | No morph selected. |

---
Source listing key `o:nav-hamburger-lab`. Rebuild with `python3 scripts/brand-kit/build.py o:nav-hamburger-lab`.
