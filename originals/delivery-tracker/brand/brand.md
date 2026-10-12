# Fleetwing — brand kit

*Same-day courier with live order tracking.* Generated from the SiteShelf listing **Delivery Tracker** (Timeline); every value below is read from that page, not invented.

> **Fast, and you can watch it**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter Bold (stand-in for Red Hat Display) |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **bolt** glyph on a squircle tile. A bolt signals speed and electric couriers in one quick stroke. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F4F6FB` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#14213D` | Body and heading text |
| textMuted | `#626C80` | Secondary text, captions |
| primary | `#14213D` | Main actions, links, brand colour |
| secondary | `#FF5A3C` | Highlights, charts, second accent |
| border | `#E3E8F2` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#FF5A3C` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 14.77:1 | pass | pass |
| Muted text on background | 4.88:1 | pass | pass |
| Primary on background | 14.77:1 | pass | pass |
| Text on primary | 15.97:1 | pass | pass |
| Text on surface | 15.97:1 | pass | pass |

**Colours seen on the page** (share of use): `#F4F6FB` 94.5%, `#D4DCEC` 1.5%, `#FF5A3C` 0.9%, `#14213D` 0.9%, `#BCD9F5` 0.8%, `#CFE9D6` 0.6%, `#1F9D6B` 0.3%, `#6B7896` 0.2%, `#000000` 0.2%, `#FF9A3C` 0.1%

## Typography

- Headings: **Red Hat Display** (weight 800)
- Body: **Red Hat Text**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@500;700;800&family=Red+Hat+Text:wght@400;500;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Red Hat Display | 22 px | 800 | normal | normal |
| Heading / H2 | Red Hat Display | 52 px | 800 | 54.6px | -1.04px |
| Button | Red Hat Text | 14 px | 700 | normal | normal |
| Caption / eyebrow | Red Hat Text | 12 px | 700 | 18px | 1.2px |

## Shape, space and motion

- Radius: sm 10 px, md 12 px, lg 18 px, pill (fully rounded)
- Shadows: sm: `rgba(255, 90, 60, 0.18) 0px 0px 0px 6px` · md: `rgba(255, 90, 60, 0.18) 0px 0px 0px 6px` · lg: `rgba(255, 90, 60, 0.18) 0px 0px 0px 6px`
- Spacing: base unit 4 px; common steps 2 px, 4 px, 6 px, 8 px, 10 px, 12 px, 14 px, 16 px, 20 px
- Layout: container 1140 px; breakpoints 520 px, 900 px
- Motion: 400 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** quick, friendly, reassuring.

Talks like a courier who texts ahead: brisk, specific about minutes and distance, a little human. It always says where the parcel is and who has it.

**Do**

- Give the driver's name and the distance
- Round times to the minute and say when
- Keep status lines to one short sentence

**Do not**

- No vague 'soon' or 'shortly'
- No blame when a delay happens
- No corporate logistics terms like last-mile

## Taglines

1. Fast, and you can watch it
2. Your order, one road away
3. Arriving when we said
4. Never wonder where it is
5. Same-day, in sight

**Boilerplate:** Fleetwing is a same-day courier that shows every order on a live route, with a countdown, a named driver and updates at each step from collection to your door.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Notify me |
| secondaryCta | Call driver |
| success | Order delivered, enjoy |
| error | We lost the signal, retrying the route |
| empty | No active orders to track right now |

---
Source listing key `o:delivery-tracker`. Rebuild with `python3 scripts/brand-kit/build.py o:delivery-tracker`.
