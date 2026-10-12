# Huebox — brand kit

*Colour picker with live contrast checks.* Generated from the SiteShelf listing **HSL Colour Picker** (Form Controls); every value below is read from that page, not invented.

> **Find a colour you can stand behind**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Bricolage Grotesque |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **dial** glyph on a squircle tile. A dial echoes the hue ring that sits at the heart of the tool. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F4F2EE` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#1C1A17` | Body and heading text |
| textMuted | `#5F5A50` | Secondary text, captions |
| primary | `#E85F3C` | Main actions, links, brand colour |
| secondary | `#8DDDF2` | Highlights, charts, second accent |
| border | `#D6D1C4` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#8DDDF2` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 15.53:1 | pass | pass |
| Muted text on background | 6.13:1 | pass | pass |
| Primary on background | 3.06:1 | fail | pass |
| Text on primary | 5.74:1 | pass | pass |
| Text on surface | 17.36:1 | pass | pass |

**Colours seen on the page** (share of use): `#F4F2EE` 63.6%, `#FFFFFF` 30.6%, `#E85F3C` 3.2%, `#FF0000` 0.6%, `#1C1A17` 0.5%, `#FFFF00` 0.3%, `#00FF00` 0.3%, `#00FFFF` 0.3%, `#0000FF` 0.3%, `#FF00FF` 0.3%

## Typography

- Headings: **Bricolage Grotesque** (weight 800)
- Body: **Inter**
- Mono: **JetBrains Mono**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@600;700;800&family=Inter:wght@400;500&family=JetBrains+Mono:wght@400;500&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Bricolage Grotesque | 56 px | 800 | 58.24px | -1.68px |
| Body | Inter | 17 px | 400 | 25.5px | normal |
| Button | Inter | 14 px | 600 | normal | normal |
| Caption / eyebrow | Bricolage Grotesque | 13 px | 800 | normal | 2.08px |
| Mono | JetBrains Mono | 15 px | 500 | normal | normal |

## Shape, space and motion

- Radius: sm 9 px, md 12 px, lg 14 px, pill (fully rounded)
- Shadows: sm: `rgba(0, 0, 0, 0.1) 0px 0px 0px 1px inset` · md: `rgba(0, 0, 0, 0.4) 0px 0px 0px 1.5px, rgba(0, 0, 0, 0.3) 0px 3px 8px 0px` · lg: `rgba(40, 30, 10, 0.45) 0px 30px 70px -40px`
- Spacing: base unit 2 px; common steps 2 px, 4 px, 6 px, 7 px, 8 px, 9 px, 10 px, 12 px, 14 px
- Layout: container 1040 px; breakpoints 360 px, 860 px
- Motion: 150 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** bright, exact, encouraging.

Huebox talks like a friendly art teacher who also checks the contrast ratio. It is enthusiastic about colour and strictly honest about readability.

**Do**

- Pair every colour value with its plain name
- State contrast as a ratio and a pass or fail
- Encourage experiments with short prompts

**Do not**

- Do not call a failing combination 'okay'
- Avoid colour jargon without a hint
- Never hide the copy-ready value

## Taglines

1. Find a colour you can stand behind
2. Pick it. Check it. Copy it
3. Colour with the contrast to prove it
4. Hue, saturation, and a clear conscience
5. A palette that passes

**Boilerplate:** Huebox is a browser colour tool with a hue ring, live WCAG contrast badges and generated harmony palettes, built for designers who want accessible colour fast.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Random colour |
| secondaryCta | Copy |
| success | Copied to clipboard. |
| error | That value is not a colour. Try HEX, RGB or HSL. |
| empty | No palette yet. Pick a colour. |

---
Source listing key `o:control-hsl-picker`. Rebuild with `python3 scripts/brand-kit/build.py o:control-hsl-picker`.
