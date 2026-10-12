# Metrolane — brand kit

*Pocket converter for everyday measurements.* Generated from the SiteShelf listing **Unit Converter** (Tools); every value below is read from that page, not invented.

> **Every unit, one tap away**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter Bold (stand-in for Nunito Sans) |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **bars** glyph. Ruler-like bars suggest measurement scales. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#EEF3F1` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#12211C` | Body and heading text |
| textMuted | `#566A62` | Secondary text, captions |
| primary | `#0F8A73` | Main actions, links, brand colour |
| secondary | `#7BBFB2` | Highlights, charts, second accent |
| border | `#D6E0DC` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#0D4039` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 14.86:1 | pass | pass |
| Muted text on background | 5.15:1 | pass | pass |
| Primary on background | 3.82:1 | fail | pass |
| Text on primary | 4.59:1 | pass | pass |
| Text on surface | 16.67:1 | pass | pass |

**Colours seen on the page** (share of use): `#EEF3F1` 70.1%, `#FFFFFF` 29.4%, `#0F8A73` 0.3%, `#12211C` 0.2%, `#566A62` 0.0%, `#7BBFB2` 0.0%, `#D6E0DC` 0.0%, `#0B0B0F` 0.0%, `#0D4039` 0.0%

## Typography

- Headings: **Nunito Sans** (weight 800)
- Body: **Nunito Sans**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Fira+Code:wght@500&family=Nunito+Sans:wght@400;600;800&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Heading / H2 | Nunito Sans | 13 px | 800 | normal | 1.04px |
| Button | Nunito Sans | 14 px | 700 | normal | normal |

## Shape, space and motion

- Radius: sm 6 px, md 10 px, lg 14 px, pill (fully rounded)
- Shadows: sm: `rgba(0, 0, 0, 0.18) 0px 2px 8px 0px` · md: `rgba(18, 33, 28, 0.07) 0px 10px 30px 0px` · lg: `rgba(0, 0, 0, 0.18) 0px 2px 8px 0px`
- Spacing: base unit 4 px; common steps 4 px, 6 px, 8 px, 10 px, 14 px, 16 px, 20 px, 22 px, 24 px
- Layout: container 1200 px; breakpoints single fluid layout
- Motion: 250 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** friendly, exact, helpful.

Sounds like a helpful neighbour with a ruler and a calculator: light, accurate and not afraid of a number. Examples are everyday, like cups and kilometres.

**Do**

- Show the formula result with its units
- Use everyday examples
- Keep labels short

**Do not**

- No technical jargon like SI base unit
- Avoid rounding without saying so
- Never make users do the maths

## Taglines

1. Every unit, one tap away
2. Convert in either direction
3. From metres to miles, easily
4. Right number, right unit
5. Measure up, convert quickly

**Boilerplate:** Metrolane is a pocket unit converter covering length, mass, temperature, volume and speed, with instant two-way conversion and a list of recent results.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Convert |
| secondaryCta | Swap units |
| success | Converted. 1 metre equals 3.2808 feet. |
| error | Enter a number to convert. |
| empty | No recent conversions yet. |

---
Source listing key `o:unit-converter`. Rebuild with `python3 scripts/brand-kit/build.py o:unit-converter`.
