# Nimbus & Pine — brand kit

*Thoughtful lighting for living rooms.* Generated from the SiteShelf listing **Orbiting Product Hero** (Hero Section); every value below is read from that page, not invented.

> **Light that keeps you company**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Sora |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **orbit** glyph on a squircle tile. An orbit ring mirrors the chips circling the glowing Halo disc on the hero. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#0D0B24` | Page background |
| surface | `#1E1A50` | Cards, panels, raised areas |
| text | `#F2F0FF` | Body and heading text |
| textMuted | `#B6B1E6` | Secondary text, captions |
| primary | `#FFB454` | Main actions, links, brand colour |
| secondary | `#B6B1E6` | Highlights, charts, second accent |
| border | `#FFFFFF` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#71522C` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 17.13:1 | pass | pass |
| Muted text on background | 9.56:1 | pass | pass |
| Primary on background | 10.92:1 | pass | pass |
| Text on primary | 11.14:1 | pass | pass |
| Text on surface | 14.17:1 | pass | pass |

**Colours seen on the page** (share of use): `#0D0B24` 97.5%, `#1E1A50` 0.8%, `#FFB454` 0.4%, `#FFF4C9` 0.3%, `#E0572F` 0.3%, `#F2F0FF` 0.2%, `#B6B1E6` 0.2%, `#FF7A45` 0.1%, `#D9D5FF` 0.1%, `#2A1405` 0.0%

## Typography

- Headings: **Sora** (weight 700)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Sora:wght@600;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Sora | 76 px | 700 | 77.52px | -1.52px |
| Heading / H2 | Sora | 17 px | 700 | normal | normal |
| Body | Inter | 17 px | 400 | 27.2px | normal |
| Button | Inter | 16 px | 600 | normal | normal |
| Navigation | Inter | 15 px | 400 | 24px | normal |

## Shape, space and motion

- Radius: sm 18 px, md 50 px, lg 50 px, pill (fully rounded)
- Shadows: sm: `rgba(255, 140, 60, 0.35) 0px 10px 30px 0px` · md: `rgba(255, 180, 84, 0.45) 0px 0px 120px 0px` · lg: `rgba(255, 140, 60, 0.35) 0px 10px 30px 0px`
- Spacing: base unit 4 px; common steps 4 px, 8 px, 10 px, 14 px, 16 px, 20 px, 22 px, 26 px, 40 px
- Layout: container 1240 px; breakpoints 480 px, 900 px
- Motion: 250 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** soothing, crafted, gentle.

Nimbus & Pine sounds like a calm shop owner explaining a lamp by what it does for your evening. Product features are told as small comforts, with exact figures (40 hours, one touch) to keep the promise honest.

**Do**

- Describe a feature by the moment it improves
- Give exact numbers for battery, time and size
- Write like a note on a gift tag

**Do not**

- Do not use gadget hype or 'smart' as a catch-all
- Avoid superlatives without a measure
- Never hide a spec behind a vague adjective

## Taglines

1. Light that keeps you company
2. Warm mornings, soft evenings
3. A lamp you find in the dark
4. Forty hours of gentle glow
5. Made for slow evenings

**Boilerplate:** Nimbus & Pine designs dimmable lamps and gentle lighting for the home, including Halo, a table lamp with a sunrise mode, a 40 hour battery and a touch ring.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Pre-order |
| secondaryCta | Watch the film |
| success | Added to your order. |
| error | We could not process that. Please try once more. |
| empty | Nothing in your basket yet. |

---
Source listing key `o:hero-orbit-product`. Rebuild with `python3 scripts/brand-kit/build.py o:hero-orbit-product`.
