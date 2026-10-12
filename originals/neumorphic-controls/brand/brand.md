# Softset — brand kit

*Soft-touch control panels for smart homes.* Generated from the SiteShelf listing **Neumorphic Controls** (Form Controls); every value below is read from that page, not invented.

> **Everything the same colour**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Nunito |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **dial** glyph on a circle tile. A dial mirrors the rotary knob at the centre of the panel. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#E4E9F0` | Page background |
| surface | `#BCC3CF` | Cards, panels, raised areas |
| text | `#4A5262` | Body and heading text |
| textMuted | `#808794` | Secondary text, captions |
| primary | `#5B8CFF` | Main actions, links, brand colour |
| secondary | `#A5C0FF` | Highlights, charts, second accent |
| border | `#CED4DC` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#2D4174` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 6.44:1 | pass | pass |
| Muted text on background | 2.96:1 | fail | fail |
| Primary on background | 2.59:1 | fail | fail |
| Text on primary | 6.21:1 | pass | pass |
| Text on surface | 4.43:1 | fail | pass |

**Colours seen on the page** (share of use): `#E4E9F0` 99.6%, `#BCC3CF` 0.1%, `#5B8CFF` 0.1%, `#4A5262` 0.1%, `#808794` 0.0%, `#A5C0FF` 0.0%, `#CED4DC` 0.0%, `#0B0B0F` 0.0%, `#2D4174` 0.0%

## Typography

- Headings: **Nunito** (weight 800)
- Body: **Nunito**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Nunito:wght@600;700;800&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Nunito | 28 px | 800 | normal | normal |
| Body | Nunito | 16 px | 600 | 22.4px | normal |
| Button | Arial | 13.3 px | 400 | normal | normal |

## Shape, space and motion

- Radius: sm 2 px, md 20 px, lg 28 px, pill (fully rounded)
- Shadows: sm: `rgb(91, 140, 255) 0px 0px 6px 0px` · md: `rgb(188, 195, 207) 6px 6px 12px 0px, rgb(255, 255, 255) -6px -6px 12px 0px` · lg: `rgb(188, 195, 207) 8px 8px 18px 0px, rgb(255, 255, 255) -8px -8px 18px 0px`
- Spacing: base unit 4 px; common steps 4 px, 6 px, 12 px, 14 px, 16 px, 18 px, 26 px, 28 px, 30 px
- Layout: container 1200 px; breakpoints 640 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** gentle, tactile, quiet.

Softset sounds like a product that was pressed into clay: calm, short and sensory. Labels describe light, shadow and touch because everything on the panel is one colour.

**Do**

- Use touch words: press, turn, slide, rest
- Keep values large and labels small
- Mention modes by name: Eco, Comfort, Boost

**Do not**

- Do not use techy words like interface or module
- Avoid shouting alerts for normal changes
- Never explain with long sentences

## Taglines

1. Everything the same colour
2. Press, turn, and feel the light
3. Controls that sit quietly
4. Comfort at the turn of a dial
5. Light and shadow, nothing more

**Boilerplate:** Softset makes soft-surface control panels for smart homes, with raised knobs, pressed buttons and a thermostat dial moulded from a single colour.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Boost |
| secondaryCta | Eco |
| success | Set to 21 degrees. |
| error | Panel is not responding. Try again. |
| empty | No devices connected. |

---
Source listing key `o:neumorphic-controls`. Rebuild with `python3 scripts/brand-kit/build.py o:neumorphic-controls`.
