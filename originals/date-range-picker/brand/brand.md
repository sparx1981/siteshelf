# Stayfold — brand kit

*Booking widget for short stays.* Generated from the SiteShelf listing **Date Range Picker** (Widgets); every value below is read from that page, not invented.

> **Plan your stay**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Outfit |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **home** glyph on a squircle tile. A small house is the simplest picture of a place to stay. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F4F7F6` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#14231F` | Body and heading text |
| textMuted | `#5F726C` | Secondary text, captions |
| primary | `#0B6F61` | Main actions, links, brand colour |
| secondary | `#79B0A8` | Highlights, charts, second accent |
| border | `#E3EBE8` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#79B0A8` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 15.10:1 | pass | pass |
| Muted text on background | 4.74:1 | pass | pass |
| Primary on background | 5.63:1 | pass | pass |
| Text on primary | 6.07:1 | pass | pass |
| Text on surface | 16.28:1 | pass | pass |

**Colours seen on the page** (share of use): `#F4F7F6` 98.9%, `#C5D3CE` 0.5%, `#14231F` 0.2%, `#D9F3EE` 0.2%, `#5F726C` 0.1%, `#B7C4BF` 0.0%, `#0B6F61` 0.0%, `#79B0A8` 0.0%

## Typography

- Headings: **Outfit** (weight 700)
- Body: **Outfit**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Outfit | 26 px | 700 | normal | -0.52px |
| Button | Outfit | 15 px | 500 | normal | normal |
| Caption / eyebrow | Outfit | 12 px | 400 | 16.8px | 0.96px |

## Shape, space and motion

- Radius: sm 14 px, md 24 px, lg 24 px, pill (fully rounded)
- Shadows: sm: `rgba(15, 157, 138, 0.15) 0px 0px 0px 3px` · md: `rgb(15, 157, 138) 0px 0px 0px 1.5px inset` · lg: `rgba(15, 60, 50, 0.12) 0px 20px 50px 0px`
- Spacing: base unit 4 px; common steps 6 px, 8 px, 14 px, 16 px, 20 px, 22 px, 24 px, 28 px, 32 px
- Layout: container 1200 px; breakpoints 720 px, 721 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** easygoing, clear, considerate.

Stayfold sounds like a good host: welcoming, specific about dates and never pushy. Copy counts nights and totals openly so guests always know what they are choosing.

**Do**

- State nights and dates together, such as '3 nights, 12 to 15 June'
- Use the host's 'you' in short, friendly sentences
- Show the total before the guest asks

**Do not**

- Do not hide fees until checkout
- Avoid hotel-brochure adjectives like 'luxurious'
- Never block dates without saying why

## Taglines

1. Plan your stay
2. Pick the nights, we do the sums
3. Your dates, sorted in two clicks
4. Stay a little longer
5. Nights worth planning

**Boilerplate:** Stayfold is a booking widget for small guesthouses and holiday lets, with a two-month range picker, live night counts and a clear summary of every stay.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Reserve these dates |
| secondaryCta | Clear dates |
| success | Dates saved. Your summary is ready. |
| error | Those dates are not available. Try a nearby range. |
| empty | Choose a check-in date to begin. |

---
Source listing key `o:date-range-picker`. Rebuild with `python3 scripts/brand-kit/build.py o:date-range-picker`.
