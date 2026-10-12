# Hues — brand kit

*Colour palettes you can lock and ship.* Generated from the SiteShelf listing **Palette Generator** (Tools); every value below is read from that page, not invented.

> **Five colours, one keystroke**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Space Grotesk |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **aperture** glyph. An aperture of overlapping blades makes a colour wheel feel like a camera iris. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#FAFAF7` | Page background |
| surface | `#14F9E3` | Cards, panels, raised areas |
| text | `#111111` | Body and heading text |
| textMuted | `#6C6C66` | Secondary text, captions |
| primary | `#2D4FFA` | Main actions, links, brand colour |
| secondary | `#14F9E3` | Highlights, charts, second accent |
| border | `#111111` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#14F9E3` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 18.06:1 | pass | pass |
| Muted text on background | 5.05:1 | pass | pass |
| Primary on background | 5.56:1 | pass | pass |
| Text on primary | 5.82:1 | pass | pass |
| Text on surface | 14.11:1 | pass | pass |

**Colours seen on the page** (share of use): `#FAFAF7` 53.0%, `#14F9E3` 9.4%, `#17A6F9` 9.4%, `#2D4FFA` 9.4%, `#8757F7` 9.4%, `#D866FB` 9.4%, `#141414` 0.2%, `#6C6C66` 0.0%

## Typography

- Headings: **Space Grotesk** (weight 700)
- Body: **JetBrains Mono**
- Google Fonts: `https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&family=Space+Grotesk:wght@500;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Space Grotesk | 22 px | 700 | normal | -0.66px |
| Button | Space Grotesk | 14 px | 700 | normal | normal |

## Shape, space and motion

- Radius: sm 8 px, md 10 px, lg 10 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 2 px; common steps 2 px, 4 px, 6 px, 8 px, 9 px, 10 px, 12 px, 16 px, 18 px
- Layout: container 1200 px; breakpoints 800 px
- Motion: 350 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** quick, tool-minded, unfussy.

Hues sounds like a handy tool made by designers: clipped, practical and lightly playful. It talks in hex codes, ratios and single keystrokes.

**Do**

- Show the hex, the ratio and the shortcut
- Use one-word actions like 'Lock' and 'Copy'
- Keep microcopy lower in volume than the colours

**Do not**

- Use colour-theory lectures
- Write long toasts
- Use marketing flourishes

## Taglines

1. Five colours, one keystroke
2. Press space, find a palette
3. Lock what you love
4. Palettes that pass contrast
5. Shuffle until it clicks

**Boilerplate:** Hues is a palette generator that creates harmonious five-colour sets, flags contrast against black and white text, and exports CSS variables or JSON in one click.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Generate |
| secondaryCta | Copy hex |
| success | Copied 14f9e3. |
| error | Could not copy. Select the hex instead. |
| empty | No history yet. Press Space. |

---
Source listing key `o:palette-generator`. Rebuild with `python3 scripts/brand-kit/build.py o:palette-generator`.
