# Ripplekit — brand kit

*Interactive UI kit of tactile buttons.* Generated from the SiteShelf listing **Ripple Button Set** (Buttons); every value below is read from that page, not invented.

> **Feedback you can feel**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Plus Jakarta Sans |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **wave** glyph on a squircle tile. Concentric ripple lines on water are the exact effect the kit is named for. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F5F4FB` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#1B1740` | Body and heading text |
| textMuted | `#51507A` | Secondary text, captions |
| primary | `#4A3DF0` | Main actions, links, brand colour |
| secondary | `#1B1740` | Highlights, charts, second accent |
| border | `#E3E1F2` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#1B1740` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 15.46:1 | pass | pass |
| Muted text on background | 6.92:1 | pass | pass |
| Primary on background | 5.97:1 | pass | pass |
| Text on primary | 6.53:1 | pass | pass |
| Text on surface | 16.89:1 | pass | pass |

**Colours seen on the page** (share of use): `#F5F4FB` 92.0%, `#1B1740` 6.3%, `#4A3DF0` 1.0%, `#FFB020` 0.4%, `#51507A` 0.2%, `#6A6990` 0.1%, `#0AA89A` 0.1%, `#AAA7E0` 0.0%, `#2A1A00` 0.0%, `#E3E1F2` 0.0%

## Typography

- Headings: **Plus Jakarta Sans** (weight 800)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Plus Jakarta Sans | 56 px | 800 | 57.12px | -1.68px |
| Heading / H2 | Plus Jakarta Sans | 15 px | 800 | normal | 0.15px |
| Body | Inter | 17 px | 400 | 26.35px | normal |
| Button | Plus Jakarta Sans | 13 px | 700 | normal | normal |
| Caption / eyebrow | Plus Jakarta Sans | 13 px | 800 | normal | 1.82px |

## Shape, space and motion

- Radius: sm 12 px, md 16 px, lg 20 px, pill (fully rounded)
- Shadows: sm: `rgb(255, 255, 255) 0px 0px 0px 2px, rgb(184, 181, 220) 0px 0px 0px 3.5px` · md: `rgb(74, 61, 240) 0px 0px 0px 2px inset` · lg: `rgb(255, 255, 255) 0px 0px 0px 2px, rgb(27, 23, 64) 0px 0px 0px 5px`
- Spacing: base unit 4 px; common steps 2 px, 3 px, 8 px, 10 px, 12 px, 14 px, 16 px, 20 px, 22 px
- Layout: container 1100 px; breakpoints 600 px, 980 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** tactile, playful, crisp.

Talks like a designer's demo day: short, confident and slightly delighted. It explains what you feel under your finger and keeps claims concrete.

**Do**

- Describe the sensation, not the technology
- Use short imperative button labels
- Give numbers for timing like 400 ms

**Do not**

- No vague words like seamless or delightful
- Avoid long paragraphs next to buttons
- Do not oversell a ripple

## Taglines

1. Feedback you can feel
2. Every press answers back
3. Buttons with a pulse
4. Press. Ripple. Done
5. Small motion, clear response

**Boilerplate:** Ripplekit is a UI kit of accessible, ripple-based buttons for filled, outlined, text and icon styles, built so every press visibly answers back.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Add to basket |
| secondaryCta | Share |
| success | Added to basket. |
| error | Something went wrong. Try that again. |
| empty | Nothing here yet. Add your first item. |

---
Source listing key `o:button-ripple-set`. Rebuild with `python3 scripts/brand-kit/build.py o:button-ripple-set`.
