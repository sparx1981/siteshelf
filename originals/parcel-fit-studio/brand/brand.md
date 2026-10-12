# Foldwell — brand kit

*Packing workshop that finds the smallest safe carton.* Generated from the SiteShelf listing **Parcel Fit Studio** (Tools); every value below is read from that page, not invented.

> **A smaller box. A better fit**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Fraunces |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **cube** glyph on a squircle tile. A cube is a box, drawn the way a packing diagram would show it. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F4EFE5` | Page background |
| surface | `#E7D9C7` | Cards, panels, raised areas |
| text | `#302A23` | Body and heading text |
| textMuted | `#665D51` | Secondary text, captions |
| primary | `#A33E25` | Main actions, links, brand colour |
| secondary | `#E7D9C7` | Highlights, charts, second accent |
| border | `#9B8C77` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#E7D9C7` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 12.37:1 | pass | pass |
| Muted text on background | 5.64:1 | pass | pass |
| Primary on background | 5.60:1 | pass | pass |
| Text on primary | 6.42:1 | pass | pass |
| Text on surface | 10.23:1 | pass | pass |

**Colours seen on the page** (share of use): `#F4EFE5` 77.8%, `#E7D9C7` 14.2%, `#A33E25` 4.9%, `#302A23` 2.1%, `#715237` 0.8%, `#665D51` 0.2%, `#FFFFFF` 0.0%, `#9B8C77` 0.0%

## Typography

- Headings: **Fraunces** (weight 500)
- Body: **DM Sans**
- Google Fonts: `https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Fraunces:wght@500;600&family=IBM+Plex+Mono:wght@400&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Fraunces | 52 px | 500 | 54.6px | -1.56px |
| Heading / H2 | Fraunces | 26 px | 500 | normal | normal |
| Body | DM Sans | 15 px | 400 | 23.25px | normal |
| Button | DM Sans | 15 px | 700 | 23.25px | normal |
| Caption / eyebrow | DM Sans | 12 px | 400 | 18.6px | normal |

## Shape, space and motion

- Radius: sm 3 px, md 4 px, lg 6 px
- Shadows: none used (flat)
- Spacing: base unit 2 px; common steps 3 px, 6 px, 10 px, 12 px, 15 px, 16 px, 18 px, 20 px, 22 px
- Layout: container 1260 px; breakpoints 650 px, 760 px, 1080 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** methodical, craftsmanlike, reassuring.

A packing-bench craftsperson who measures twice: precise, plain and fond of a neat fit. Numbers are given in centimetres and every warning arrives with a fix.

**Do**

- Give dimensions in centimetres with the unit every time
- Explain cushioning as added to every side
- When nothing fits, say what to try next

**Do not**

- Vague words like roughly or about
- Shipping jargon without explanation
- Blame for wrong measurements

## Taglines

1. A smaller box. A better fit
2. Measure once, pack once
3. Right-sized cartons, safely cushioned
4. Less air, more protection
5. Fit it snug, ship it safe

**Boilerplate:** Foldwell is a packing workshop that finds the smallest stocked carton for an item, based on its dimensions, cushioning and rotation.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Find a carton |
| secondaryCta | Compare boxes |
| success | Best fit found: Moss, 18 × 14 × 12 cm |
| error | Check the measurements, one is missing |
| empty | Enter your item to see cartons |

---
Source listing key `o:parcel-fit-studio`. Rebuild with `python3 scripts/brand-kit/build.py o:parcel-fit-studio`.
