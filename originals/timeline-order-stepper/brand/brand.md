# Kiln & Co. — brand kit

*Homeware shop for pots, linen and lamps.* Generated from the SiteShelf listing **Order History Stepper** (Timeline); every value below is read from that page, not invented.

> **Your parcel is on its way**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Fraunces |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **cube** glyph. A parcel cube suits an order-tracking page. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F6F0E6` | Page background |
| surface | `#FFFDF8` | Cards, panels, raised areas |
| text | `#211C16` | Body and heading text |
| textMuted | `#675D4E` | Secondary text, captions |
| primary | `#1F6B4A` | Main actions, links, brand colour |
| secondary | `#B8532D` | Highlights, charts, second accent |
| border | `#E6DAC5` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#A1C1B3` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 14.91:1 | pass | pass |
| Muted text on background | 5.70:1 | pass | pass |
| Primary on background | 5.68:1 | pass | pass |
| Text on primary | 6.44:1 | pass | pass |
| Text on surface | 16.63:1 | pass | pass |

**Colours seen on the page** (share of use): `#F6F0E6` 66.5%, `#FFFDF8` 30.6%, `#000000` 1.1%, `#B6D6A4` 0.3%, `#1F6B4A` 0.3%, `#7D746A` 0.3%, `#4A443D` 0.3%, `#211C16` 0.2%, `#FFF6D0` 0.2%, `#B8532D` 0.1%

## Typography

- Headings: **Fraunces** (weight 600)
- Body: **Figtree**
- Google Fonts: `https://fonts.googleapis.com/css2?family=DM+Mono:wght@500&family=Figtree:wght@400;500;700&family=Fraunces:wght@600&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Fraunces | 52 px | 600 | 53.04px | normal |
| Heading / H2 | Fraunces | 28 px | 600 | 32.2px | normal |
| Subheading / H3 | Figtree | 12 px | 700 | normal | 1.44px |
| Body | Figtree | 15 px | 400 | 22.5px | normal |
| Button | Figtree | 15 px | 400 | 22.5px | normal |
| Navigation | Figtree | 15 px | 700 | 22.5px | normal |
| Caption / eyebrow | Figtree | 12 px | 700 | normal | 1.92px |

## Shape, space and motion

- Radius: sm 10 px, md 14 px, lg 18 px, pill (fully rounded)
- Shadows: sm: `rgba(70, 45, 10, 0.22) 0px 20px 44px 0px` · md: `rgba(70, 45, 10, 0.22) 0px 20px 44px 0px` · lg: `rgba(70, 45, 10, 0.22) 0px 20px 44px 0px`
- Spacing: base unit 4 px; common steps 2 px, 4 px, 6 px, 8 px, 10 px, 12 px, 14 px, 16 px, 18 px
- Layout: container 1180 px; breakpoints 700 px, 900 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** warm, dependable, homely.

Sounds like a shop assistant who rings ahead: calm, precise about days and windows, and a little homely. Parcels have progress, not just status.

**Do**

- Say the day and the time window
- Name the stage in plain words
- Offer help where it helps

**Do not**

- No delivery jargon like last-mile
- No vague 'soon'
- No blame for delays

## Taglines

1. Your parcel is on its way
2. Made, packed, on the road
3. Homeware that arrives on time
4. From our kiln to your door
5. Every step, in plain sight

**Boilerplate:** Kiln & Co. is a homeware shop selling pots, linen and lamps, with an order page that tracks each parcel from packing to your door.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Simulate next step |
| secondaryCta | Help |
| success | Out for delivery, arriving Thursday |
| error | We can't find that order, check the number |
| empty | No orders to show yet |

---
Source listing key `o:timeline-order-stepper`. Rebuild with `python3 scripts/brand-kit/build.py o:timeline-order-stepper`.
