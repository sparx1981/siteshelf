# Inkwell & Ox — brand kit

*Type studio for variable serif.* Generated from the SiteShelf listing **Variable Weight Wave** (Typography); every value below is read from that page, not invented.

> **Weight is just another way to move**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Fraunces |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **wave** glyph. A single wave makes visible the weight ripple the studio sets in motion. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#10142E` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#FFF3DF` | Body and heading text |
| textMuted | `#C9C2E8` | Secondary text, captions |
| primary | `#FFB347` | Main actions, links, brand colour |
| secondary | `#3A6AFF` | Highlights, charts, second accent |
| border | `#3A4286` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#3A6AFF` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 16.48:1 | pass | pass |
| Muted text on background | 10.65:1 | pass | pass |
| Primary on background | 10.15:1 | pass | pass |
| Text on primary | 11.03:1 | pass | pass |
| Text on surface | 1.10:1 | fail | fail |

**Colours seen on the page** (share of use): `#10142E` 90.6%, `#FFFFFF` 3.5%, `#000000` 1.7%, `#FFB347` 1.4%, `#FF5A3C` 0.6%, `#2F56D4` 0.6%, `#7A3FA0` 0.6%, `#3A6AFF` 0.6%, `#FFF3DF` 0.4%, `#C9C2E8` 0.2%

## Typography

- Headings: **Fraunces** (weight 400)
- Body: **DM Mono**
- Google Fonts: `https://fonts.googleapis.com/css2?family=DM+Mono:wght@500&family=Fraunces:opsz,wght@9..144,100..900&family=Space+Grotesk:wght@400;500;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Fraunces | 123.8 px | 400 | 123.84px | -1.2384px |
| Body | DM Mono | 12 px | 500 | normal | normal |
| Button | Space Grotesk | 14 px | 700 | normal | normal |
| Caption / eyebrow | Space Grotesk | 12 px | 700 | normal | 2.4px |

## Shape, space and motion

- Radius: sm 12 px, md 18 px, lg 18 px
- Shadows: none used (flat)
- Spacing: base unit 2 px; common steps 2 px, 3 px, 4 px, 6 px, 8 px, 10 px, 12 px, 14 px, 16 px
- Layout: container 1180 px; breakpoints 420 px, 700 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** inky, exacting, playful.

Inkwell & Ox sounds like a type foundry that likes to show off in the nicest way: precise about axes and weights, but joyful when a sentence starts to move.

**Do**

- Name the axis and the value when describing type
- Treat letters as living things
- Use one sharp specimen sentence

**Do not**

- Use font-industry hype
- Over-explain the animation
- Use exclamation marks

## Taglines

1. Weight is just another way to move
2. Letters that breathe
3. Heavy, light and everything between
4. Specimen sheets that move
5. Set it. Then watch it swell

**Boilerplate:** Inkwell & Ox is a type studio that designs and tests variable serif typefaces, publishing numbered specimens that show every weight moving in a single line.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Reset the wave |
| secondaryCta | Try your own text |
| success | Wave reset to the pointer. |
| error | Weight out of range. Slide back a little. |
| empty | No specimen loaded. |

---
Source listing key `o:type-weight-wave`. Rebuild with `python3 scripts/brand-kit/build.py o:type-weight-wave`.
