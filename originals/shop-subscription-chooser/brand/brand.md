# Slow Roast Club — brand kit

*Coffee subscription roasted to order.* Generated from the SiteShelf listing **Subscription Box Chooser** (E-commerce); every value below is read from that page, not invented.

> **Fresh roast, at your door**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Young Serif |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **flame** glyph on a squircle tile. A flame stands for slow roasting. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F7F0E4` | Page background |
| surface | `#FFFAF0` | Cards, panels, raised areas |
| text | `#261A12` | Body and heading text |
| textMuted | `#6A5A4A` | Secondary text, captions |
| primary | `#7A3F1D` | Main actions, links, brand colour |
| secondary | `#3A6B3A` | Highlights, charts, second accent |
| border | `#D9C9A9` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#C7AEA0` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 14.96:1 | pass | pass |
| Muted text on background | 5.84:1 | pass | pass |
| Primary on background | 7.25:1 | pass | pass |
| Text on primary | 8.22:1 | pass | pass |
| Text on surface | 16.29:1 | pass | pass |

**Colours seen on the page** (share of use): `#F7F0E4` 94.2%, `#9A9088` 2.3%, `#7A3F1D` 1.1%, `#000000` 1.0%, `#FFFFFF` 0.5%, `#261A12` 0.3%, `#6A5A4A` 0.2%, `#3A6B3A` 0.1%, `#5A3420` 0.1%, `#C4935A` 0.1%

## Typography

- Headings: **Young Serif** (weight 400)
- Body: **Figtree**
- Google Fonts: `https://fonts.googleapis.com/css2?family=DM+Mono:wght@500&family=Figtree:wght@400;500;700&family=Young+Serif&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Young Serif | 54 px | 400 | 55.08px | normal |
| Heading / H2 | Young Serif | 22 px | 400 | normal | normal |
| Subheading / H3 | Figtree | 14 px | 700 | normal | normal |
| Body | Figtree | 15.5 px | 400 | 23.25px | normal |
| Button | Figtree | 14 px | 700 | normal | normal |
| Caption / eyebrow | Figtree | 12 px | 700 | normal | 1.92px |

## Shape, space and motion

- Radius: sm 8 px, md 14 px, lg 18 px, pill (fully rounded)
- Shadows: sm: `rgb(122, 63, 29) 0px 0px 0px 1.5px inset` · md: `rgba(70, 40, 10, 0.28) 0px 26px 60px 0px` · lg: `rgb(122, 63, 29) 0px 0px 0px 1.5px inset`
- Spacing: base unit 2 px; common steps 2 px, 3 px, 4 px, 6 px, 8 px, 10 px, 12 px, 14 px, 18 px
- Layout: container 1240 px; breakpoints 960 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** cosy, knowledgeable, unhurried.

Slow Roast Club talks like a barista who has time for you. It is warm, specific about beans, roast and grind, and flexible about delivery.

**Do**

- Name the roast, grind and bag size
- State the subscribe-and-save price clearly
- Give control: skip, pause, change

**Do not**

- Do not use 'artisan' or 'curated'
- Do not trap anyone in a subscription
- Do not hide the next delivery date

## Taglines

1. Fresh roast, at your door
2. Coffee on your schedule
3. Roasted slowly, delivered when you want
4. Skip, pause, or sip on
5. A good cup, no commitment

**Boilerplate:** Slow Roast Club is a coffee subscription that roasts to order, with choice of roast, grind, bag size and delivery frequency and easy pause or skip.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Start my subscription |
| secondaryCta | Skip next delivery |
| success | Delivery skipped. Your next bag arrives on 4 July. |
| error | We could not update your plan. Nothing has changed. |
| empty | No deliveries scheduled. Choose a roast to begin. |

---
Source listing key `o:shop-subscription-chooser`. Rebuild with `python3 scripts/brand-kit/build.py o:shop-subscription-chooser`.
