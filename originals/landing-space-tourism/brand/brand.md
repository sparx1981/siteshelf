# Perigee Lines — brand kit

*Orbital tourism with a window seat.* Generated from the SiteShelf listing **Perigee Lines** (Landing Page); every value below is read from that page, not invented.

> **The Earth looks better from here**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Unbounded |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **orbit** glyph on a squircle tile. Orbit rings draw the low Earth path the company flies and suit its wide capital wordmark. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#05060D` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#A6ABD0` | Body and heading text |
| textMuted | `#EEF0FF` | Secondary text, captions |
| primary | `#FFB347` | Main actions, links, brand colour |
| secondary | `#7FC8FF` | Highlights, charts, second accent |
| border | `#FFB347` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#715227` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 9.01:1 | pass | pass |
| Muted text on background | 17.86:1 | pass | pass |
| Primary on background | 11.36:1 | pass | pass |
| Text on primary | 11.03:1 | pass | pass |
| Text on surface | 2.24:1 | fail | fail |

**Colours seen on the page** (share of use): `#05060D` 74.4%, `#FFFFFF` 10.7%, `#3A2A7A` 5.3%, `#FFE6C4` 3.2%, `#BCD8FF` 3.2%, `#F2EFE6` 0.9%, `#CFC9BD` 0.9%, `#8F8A82` 0.9%, `#FFB347` 0.4%, `#A6ABD0` 0.2%

## Typography

- Headings: **Unbounded** (weight 600)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Unbounded:wght@500;600&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Unbounded | 76 px | 600 | 79.8px | -1.52px |
| Heading / H2 | Unbounded | 46 px | 600 | 50.6px | -0.92px |
| Subheading / H3 | Unbounded | 12 px | 500 | normal | 1.92px |
| Body | Inter | 17 px | 400 | 27.2px | normal |
| Button | Inter | 14 px | 600 | normal | normal |
| Navigation | Inter | 15 px | 500 | 24px | normal |
| Caption / eyebrow | Unbounded | 12 px | 500 | normal | 1.2px |

## Shape, space and motion

- Radius: sm 16 px, md 26 px, lg 50 px, pill (fully rounded)
- Shadows: sm: `rgba(0, 0, 0, 0.22) 3px 3px 8px 0px inset` · md: `rgba(0, 0, 0, 0.45) -40px -30px 80px 0px inset, rgba(190, 200, 255, 0.18) 0px 0px 120px 0px` · lg: `rgba(0, 0, 0, 0.22) 3px 3px 8px 0px inset`
- Spacing: base unit 2 px; common steps 6 px, 8 px, 9 px, 10 px, 14 px, 18 px, 22 px, 26 px, 50 px
- Layout: container 1280 px; breakpoints 860 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** awed, precise, unshowy.

Perigee Lines sounds like a mission commander who also happens to love poetry: measured numbers, then one line that makes you look up. It never raises its voice, because the view does that.

**Do**

- Pair a hard number with a human image
- State times in hours and days
- Keep sentences short and level

**Do not**

- Use sci-fi cliches like 'the final frontier'
- Hide the price
- Use exclamation marks

## Taglines

1. The Earth looks better from here
2. Sixteen sunrises a day
3. Your window seat is waiting
4. Three days in low orbit
5. Hour by hour, to the stars

**Boilerplate:** Perigee Lines is an orbital tourism operator offering three-day flights in low Earth orbit with window seats, dome cabins and a full hour-by-hour flight plan.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Reserve a seat |
| secondaryCta | Watch the flight |
| success | Seat reserved. Your launch date is confirmed. |
| error | We could not hold that seat. Please choose again. |
| empty | No flights available for that month. |

---
Source listing key `o:landing-space-tourism`. Rebuild with `python3 scripts/brand-kit/build.py o:landing-space-tourism`.
