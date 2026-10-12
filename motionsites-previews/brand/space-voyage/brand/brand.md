# Aphelion Voyages — brand kit

*Deep-space travel for private passengers.* Generated from the SiteShelf listing **Space Voyage** (Landing Page); every value below is read from that page, not invented.

> **Venture past our sky**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Instrument Serif |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **rocket** glyph on a squircle tile. A rocket gives the journey's direction and the brand's ambition. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#85A7D1` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#000000` | Body and heading text |
| textMuted | `#2F3A49` | Secondary text, captions |
| primary | `#000000` | Main actions, links, brand colour |
| secondary | `#737373` | Highlights, charts, second accent |
| border | `#7290B4` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#737373` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 8.45:1 | pass | pass |
| Muted text on background | 4.63:1 | pass | pass |
| Primary on background | 8.45:1 | pass | pass |
| Text on primary | 21.00:1 | pass | pass |
| Text on surface | 21.00:1 | pass | pass |

**Colours seen on the page** (share of use): `#85A7D1` 98.9%, `#FFFFFF` 1.1%, `#000000` 0.0%, `#2F3A49` 0.0%, `#737373` 0.0%, `#7290B4` 0.0%

## Typography

- Headings: **Instrument Serif** (weight 400)
- Body: **Barlow**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Barlow:wght@300;400;500;600&family=Archivo:wght@300;400;500;600&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Instrument Serif | 88 px | 400 | 70.4px | -4px |
| Body | Barlow | 16 px | 300 | 20px | normal |
| Button | Barlow | 14 px | 500 | normal | normal |
| Navigation | Barlow | 16 px | 400 | normal | normal |

## Shape, space and motion

- Radius: sm 8 px, md 8 px, lg 8 px, pill (fully rounded)
- Shadows: sm: `rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset` · md: `rgba(0, 0, 0, 0.05) 4px 4px 4px 0px, rgba(255, 255, 255, 0.15) 0px 1px 1px 0px inset` · lg: `rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset`
- Spacing: base unit 4 px; common steps 4 px, 6 px, 8 px, 10 px, 12 px, 14 px, 16 px, 20 px, 24 px
- Layout: container 1200 px; breakpoints 768 px, 1024 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** awestruck, poised, confident.

Aphelion Voyages speaks with the quiet awe of a veteran pilot describing the first view of the Earth from orbit. It is cinematic and spare, with an italic serif accent for the big moments.

**Do**

- Use concrete spaceflight images
- Pair wonder with plain logistics
- Reserve italics for the headline words

**Do not**

- Do not use 'galaxy-brain' or 'to infinity'
- Do not promise safety guarantees
- Do not overuse exclamation marks

## Taglines

1. Venture past our sky
2. Across the universe, within reach
3. Take your seat among the stars
4. Voyages to worlds beyond
5. Claim a spot, leave the atmosphere

**Boilerplate:** Aphelion Voyages is a private spaceflight company offering seats on deep-space voyages, built with pioneering vessels and extraordinary engineering.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Claim a spot |
| secondaryCta | View liftoff |
| success | Seat reserved. Your voyage coordinator will call you. |
| error | We could not hold that seat. Please try again. |
| empty | No voyages scheduled. Check back soon. |

---
Source listing key `m:space-voyage`. Rebuild with `python3 scripts/brand-kit/build.py m:space-voyage`.
