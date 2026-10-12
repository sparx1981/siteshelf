# The Lamplight Picture House — brand kit

*Independent cinema with online seat booking.* Generated from the SiteShelf listing **Cinema Seat Picker** (App UI); every value below is read from that page, not invented.

> **Lights down, seats found**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter Bold (stand-in for Barlow Condensed) |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **play** glyph. A play triangle is the quickest sign of a screen, and it sits neatly inside a theatre badge. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#0C0A14` | Page background |
| surface | `#16121F` | Cards, panels, raised areas |
| text | `#F4F1FF` | Body and heading text |
| textMuted | `#9D97B5` | Secondary text, captions |
| primary | `#FFD166` | Main actions, links, brand colour |
| secondary | `#8C7338` | Highlights, charts, second accent |
| border | `#2A2438` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#8C7338` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 17.65:1 | pass | pass |
| Muted text on background | 7.04:1 | pass | pass |
| Primary on background | 13.62:1 | pass | pass |
| Text on primary | 13.62:1 | pass | pass |
| Text on surface | 16.55:1 | pass | pass |

**Colours seen on the page** (share of use): `#0C0A14` 90.8%, `#3A3550` 6.3%, `#FFD166` 1.2%, `#272235` 1.1%, `#E9E4FF` 0.5%, `#9D97B5` 0.2%, `#2B2100` 0.0%, `#5B5478` 0.0%, `#8C7338` 0.0%

## Typography

- Headings: **Barlow Condensed** (weight 700)
- Body: **Barlow**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700&family=Barlow:wght@400;500;600&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Barlow Condensed | 56 px | 700 | 56px | 0.56px |
| Heading / H2 | Barlow Condensed | 24 px | 700 | normal | 0.72px |
| Button | Barlow | 15 px | 600 | normal | normal |
| Caption / eyebrow | Barlow | 11 px | 400 | 12.1px | normal |

## Shape, space and motion

- Radius: sm 5 px, md 8 px, lg 20 px, pill (fully rounded)
- Shadows: sm: `rgb(154, 208, 255) 0px 0px 0px 2px inset` · md: `rgb(154, 208, 255) 0px 0px 0px 2px inset` · lg: `rgb(154, 208, 255) 0px 0px 0px 2px inset`
- Spacing: base unit 2 px; common steps 4 px, 5 px, 6 px, 7 px, 8 px, 10 px, 14 px, 16 px, 18 px
- Layout: container 1180 px; breakpoints 520 px, 900 px
- Motion: 120 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** dim-lit, clear, welcoming.

Speaks like a box office clerk who loves film: quiet, courteous and exact about rows, seats and times. A little cinema romance seeps in but never gets in the way of a clean booking.

**Do**

- Give row, seat and price in a single clear line
- Use film language like screening and interval
- Confirm times and dates in full

**Do not**

- Do not use blockbuster hype
- Do not hide fees until the last step
- Do not use jargon like inventory or allocation

## Taglines

1. Lights down, seats found
2. Your seat is waiting in the dark
3. Pick the row, we'll dim the lights
4. Good seats for good films
5. One screen, every seat chosen

**Boilerplate:** The Lamplight Picture House is an independent single-screen cinema where guests choose their own seats online, from standard rows to recliners, and collect a ticket in seconds.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Choose seats |
| secondaryCta | Change showtime |
| success | Seats held. Your ticket is ready. |
| error | That seat was just taken. Please choose another. |
| empty | No seats selected yet. |

---
Source listing key `o:cinema-seats`. Rebuild with `python3 scripts/brand-kit/build.py o:cinema-seats`.
