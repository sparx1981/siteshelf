# Clackworks — brand kit

*Pressable keycaps with real weight.* Generated from the SiteShelf listing **3D Keycap Buttons** (Buttons); every value below is read from that page, not invented.

> **Keys with real weight**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Space Grotesk |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **cube** glyph on a circle tile. A keycap is essentially a cube with a dished top, so the cube is the literal product. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#14161C` | Page background |
| surface | `#1D2029` | Cards, panels, raised areas |
| text | `#A9AFC4` | Body and heading text |
| textMuted | `#E8EAF2` | Secondary text, captions |
| primary | `#FFB020` | Main actions, links, brand colour |
| secondary | `#CFD3E6` | Highlights, charts, second accent |
| border | `#3A3F55` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#715016` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 8.28:1 | pass | pass |
| Muted text on background | 15.05:1 | pass | pass |
| Primary on background | 9.89:1 | pass | pass |
| Text on primary | 10.74:1 | pass | pass |
| Text on surface | 7.45:1 | pass | pass |

**Colours seen on the page** (share of use): `#14161C` 79.1%, `#B6AE96` 9.2%, `#5A6496` 6.6%, `#D8D1BE` 4.0%, `#A8451A` 0.4%, `#E8EAF2` 0.3%, `#E0662F` 0.2%, `#A9AFC4` 0.1%, `#2A2A2A` 0.0%, `#8890AA` 0.0%

## Typography

- Headings: **Space Grotesk** (weight 700)
- Body: **Space Grotesk**
- Google Fonts: `https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&family=Space+Grotesk:wght@600;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Space Grotesk | 60 px | 700 | 61.2px | -1.5px |
| Body | Space Grotesk | 17 px | 400 | 26.35px | normal |
| Button | Space Grotesk | 15 px | 400 | 23.25px | normal |
| Caption / eyebrow | Space Grotesk | 13 px | 700 | normal | 2.08px |

## Shape, space and motion

- Radius: sm 10 px, md 14 px, lg 24 px, pill (fully rounded)
- Shadows: sm: `rgba(255, 255, 255, 0.5) 0px 1px 0px 0px inset, rgba(0, 0, 0, 0.12) 0px -2px 4px 0px inset, rgba(0, 0, 0, 0) 0px 0px 25.6px 0px` · md: `rgba(0, 0, 0, 0.5) 0px 2px 8px 0px inset, rgb(0, 0, 0) 0px 30px 60px -30px` · lg: `rgba(0, 0, 0, 0.55) 0px 7.68px 10.24px 0px`
- Spacing: base unit 2 px; common steps 8 px, 9 px, 10 px, 14 px, 16 px, 18 px, 20 px, 22 px, 26 px
- Layout: container 1100 px; breakpoints 900 px
- Motion: 120 ms, `cubic-bezier(0.3`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** tactile, nerdy, playful.

Sounds like an enthusiast on a keyboard forum who has actually bottomed out the switches: affectionate, specific and a little funny. Every line is about feel, travel and weight.

**Do**

- Use switch and keycap vocabulary such as travel, legend and bottom out
- Keep lines short, like a keystroke
- Be silent in claims: the demo makes no sound, so say so

**Do not**

- Gaming-gear hype like ultimate or insane
- Claims about audio the page does not make
- Long sentences that slow the rhythm

## Taglines

1. Keys with real weight
2. Press it. Feel it sink
3. Legends worth looking at
4. Every keystroke has a bottom
5. Type something. Anything

**Boilerplate:** Clackworks is a studio for keycap sets, offering Retro, Neon and Paper designs that sink convincingly under the finger and mirror a real keyboard.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Press ENTER |
| secondaryCta | Clear |
| success | Typed. Nice action on that one |
| error | Key stuck. Press it again |
| empty | Nothing typed yet. Hit a key |

---
Source listing key `o:button-keycap-3d`. Rebuild with `python3 scripts/brand-kit/build.py o:button-keycap-3d`.
