# Letterbox — brand kit

*Type playground for moving letters.* Generated from the SiteShelf listing **Kinetic Type Playground** (Typography); every value below is read from that page, not invented.

> **Make it move**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **play** glyph on a squircle tile. A play triangle signals motion and sits inside an open-ended letter tile. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#0E0E10` | Page background |
| surface | `#18181B` | Cards, panels, raised areas |
| text | `#F5F5F4` | Body and heading text |
| textMuted | `#C4F1A4` | Secondary text, captions |
| primary | `#E4FF3A` | Main actions, links, brand colour |
| secondary | `#FF5C8A` | Highlights, charts, second accent |
| border | `#2A2A30` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#FF5C8A` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 17.68:1 | pass | pass |
| Muted text on background | 15.12:1 | pass | pass |
| Primary on background | 17.14:1 | pass | pass |
| Text on primary | 17.46:1 | pass | pass |
| Text on surface | 16.24:1 | pass | pass |

**Colours seen on the page** (share of use): `#0E0E10` 92.9%, `#FFFFFF` 4.5%, `#222228` 1.1%, `#E4FF3A` 1.0%, `#FF5C8A` 0.1%, `#6EE7FF` 0.1%, `#FFB347` 0.1%, `#C4F1A4` 0.1%, `#D4D4D8` 0.0%

## Typography

- Headings: **Inter** (weight 700)
- Body: **JetBrains Mono**
- Mono: **JetBrains Mono**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@500&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Inter | 18 px | 700 | 27px | normal |
| Button | Inter | 13 px | 600 | normal | normal |
| Mono | JetBrains Mono | 12 px | 500 | 19.2px | normal |

## Shape, space and motion

- Radius: sm 10 px, md 12 px, lg 12 px
- Shadows: sm: `rgb(14, 14, 16) 0px 0px 0px 2px inset` · md: `rgb(14, 14, 16) 0px 0px 0px 2px inset` · lg: `rgb(14, 14, 16) 0px 0px 0px 2px inset`
- Spacing: base unit 4 px; common steps 2 px, 6 px, 8 px, 12 px, 14 px, 16 px, 20 px, 32 px
- Layout: container 1200 px; breakpoints 860 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** playful, precise, nerdy.

Letterbox sounds like a type nerd with a sense of humour: tight labels, live values and a love for tiny details. It rewards poking around and prints the CSS to prove it.

**Do**

- Use type words exactly: tracking, leading, weight, slant
- Show the live value beside every slider
- Make jokes about letters, never about users

**Do not**

- Do not say fonts when you mean typefaces
- Avoid decorating copy with its own effects
- Never hide the CSS output

## Taglines

1. Make it move
2. Type that wriggles, on command
3. Tweak the letters, copy the CSS
4. Sliders for every serif
5. Play with type properly

**Boilerplate:** Letterbox is an interactive type playground with sliders for size, weight, tracking and slant, plus animation presets and one-click CSS export for designers and developers.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Copy CSS |
| secondaryCta | Reset |
| success | CSS copied. Paste it anywhere. |
| error | Could not copy. Select the CSS by hand. |
| empty | Type something to begin. |

---
Source listing key `o:kinetic-type-playground`. Rebuild with `python3 scripts/brand-kit/build.py o:kinetic-type-playground`.
