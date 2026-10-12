# VELORA — brand kit

*Luxury car rental.* Generated from the SiteShelf listing **VELORA** (Rent Your Dream Luxury Car); every value below is read from that page, not invented.

> **Rent your dream luxury car**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Archivo |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **diamond** glyph. A diamond signals luxury, and the all-caps wordmark echoes the page. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#0A0A0B` | Page background |
| surface | `#2A2D35` | Cards, panels, raised areas |
| text | `#FFFFFF` | Body and heading text |
| textMuted | `#A9A9AA` | Secondary text, captions |
| primary | `#FFFFFF` | Main actions, links, brand colour |
| secondary | `#8C8C8C` | Highlights, charts, second accent |
| border | `#2C2C2D` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#8C8C8C` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 19.79:1 | pass | pass |
| Muted text on background | 8.43:1 | pass | pass |
| Primary on background | 19.79:1 | pass | pass |
| Text on primary | 19.64:1 | pass | pass |
| Text on surface | 13.77:1 | pass | pass |

**Colours seen on the page** (share of use): `#0A0A0B` 81.4%, `#2A2D35` 11.6%, `#FFFFFF` 3.7%, `#B8B8BD` 3.3%, `#A9A9AA` 0.0%, `#8C8C8C` 0.0%

## Typography

- Headings: **Archivo** (weight 600)
- Body: **Archivo**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700;800&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Archivo | 66 px | 600 | 64.68px | -1.32px |
| Body | Archivo | 15 px | 400 | 22.5px | normal |
| Button | Archivo | 14 px | 600 | normal | normal |
| Navigation | Archivo | 14 px | 500 | normal | normal |

## Shape, space and motion

- Radius: sm 10 px, md 10 px, lg 10 px
- Shadows: none used (flat)
- Spacing: base unit 2 px; common steps 10 px, 11 px, 12 px, 13 px, 18 px, 20 px, 24 px, 32 px, 34 px
- Layout: container 1440 px; breakpoints 820 px
- Motion: 250 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** refined, confident, smooth.

VELORA speaks in short, assured lines like a well-dressed concierge. It sells the drive, not the paperwork, and keeps pricing honest.

**Do**

- Name the car and the experience in one line
- Keep sentences short and assured
- State pricing plainly

**Do not**

- Do not use flashy superlatives
- Avoid jargon about trims
- Never hide fees

## Taglines

1. Rent your dream luxury car
2. Drive the one you daydream about
3. Exclusive cars, honest pricing
4. Book smoothly, drive beautifully
5. The car, the road, the day

**Boilerplate:** VELORA is a luxury car rental service offering a premium selection of exclusive vehicles, with seamless booking and honest pricing for every rental.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Browse cars |
| secondaryCta | Discover now |
| success | Booking confirmed. Your keys are waiting. |
| error | Could not complete that booking. Please try again. |
| empty | No cars available for those dates. |

---
Source listing key `s:6a69da520cd891fdf74d7178`. Rebuild with `python3 scripts/brand-kit/build.py s:6a69da520cd891fdf74d7178`.
