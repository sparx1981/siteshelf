# Pedalo — brand kit

*City bike-share for everyday rides.* Generated from the SiteShelf listing **FAQ With Helpful Votes** (FAQ); every value below is read from that page, not invented.

> **Questions riders actually ask**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Fraunces |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **orbit** glyph on a circle tile. A circle with an orbiting dot reads as a wheel and a hub in motion. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F6FAF6` | Page background |
| surface | `#0F3D24` | Cards, panels, raised areas |
| text | `#2F4A39` | Body and heading text |
| textMuted | `#14281C` | Secondary text, captions |
| primary | `#0F3D24` | Main actions, links, brand colour |
| secondary | `#FFE66D` | Highlights, charts, second accent |
| border | `#BCD5C1` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#FFE66D` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 9.23:1 | pass | pass |
| Muted text on background | 14.76:1 | pass | pass |
| Primary on background | 11.63:1 | pass | pass |
| Text on primary | 12.26:1 | pass | pass |
| Text on surface | 1.26:1 | fail | fail |

**Colours seen on the page** (share of use): `#F6FAF6` 77.1%, `#0F3D24` 18.1%, `#E6EFE7` 1.7%, `#1F9D57` 1.4%, `#2F4A39` 0.9%, `#14281C` 0.4%, `#50685A` 0.2%, `#BCD9C6` 0.1%, `#FFE66D` 0.0%

## Typography

- Headings: **Fraunces** (weight 600)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Fraunces:wght@600&family=Inter:wght@400;500;600&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Fraunces | 60 px | 600 | 63px | -1.2px |
| Heading / H2 | Inter | 16 px | 700 | 25.6px | normal |
| Body | Inter | 16 px | 400 | 25.6px | normal |
| Button | Inter | 14 px | 600 | normal | normal |

## Shape, space and motion

- Radius: sm 10 px, md 12 px, lg 16 px, pill (fully rounded)
- Shadows: sm: `rgba(15, 61, 36, 0.6) 0px 14px 30px -24px` · md: `rgba(31, 157, 87, 0.7) 0px 18px 34px -26px` · lg: `rgba(15, 61, 36, 0.6) 0px 14px 30px -24px`
- Spacing: base unit 2 px; common steps 2 px, 3 px, 6 px, 8 px, 10 px, 12 px, 14 px, 16 px, 18 px
- Layout: container 1200 px; breakpoints single fluid layout
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** friendly, straight, upbeat.

Sounds like a helpful rider who has fixed a puncture or two: cheerful, direct and short on small print. Answers are in plain words with real numbers, and it openly asks if they helped.

**Do**

- Answer the question in the first sentence
- Give prices, times and distances as figures
- Ask for feedback without begging for it

**Do not**

- Do not hide answers behind terms and conditions
- Do not use cycling jargon
- Do not blame riders for faults

## Taglines

1. Questions riders actually ask
2. Unlock, ride, park, done
3. Bikes for the short way round
4. Your city, one pedal at a time
5. Straight answers, quick rides

**Boilerplate:** Pedalo is a city bike-share scheme in the UK offering unlockable bikes at docks and designated parking bays, priced per ride and supported by a plain-language help centre.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Find a bike |
| secondaryCta | Report a fault |
| success | Thanks. Your vote helps us fix the answers. |
| error | We couldn't save your vote. Try again. |
| empty | No questions match your search. |

---
Source listing key `o:faq-helpful-votes`. Rebuild with `python3 scripts/brand-kit/build.py o:faq-helpful-votes`.
