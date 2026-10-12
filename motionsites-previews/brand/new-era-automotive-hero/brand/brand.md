# New Era Automotive — brand kit

*Certified used car marketplace.* Generated from the SiteShelf listing **New Era Automotive Hero** (Automotive); every value below is read from that page, not invented.

> **Find the car that fits your journey**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Bebas Neue |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **chevrons** glyph on a squircle tile. Forward chevrons suggest motion and the road ahead. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#010101` | Page background |
| surface | `#0A1020` | Cards, panels, raised areas |
| text | `#FFFFFF` | Body and heading text |
| textMuted | `#EEEFF2` | Secondary text, captions |
| primary | `#141B2E` | Main actions, links, brand colour |
| secondary | `#FF6A5A` | Highlights, charts, second accent |
| border | `#EEEFF2` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#FF6A5A` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 20.87:1 | pass | pass |
| Muted text on background | 18.15:1 | pass | pass |
| Primary on background | 1.22:1 | fail | fail |
| Text on primary | 17.13:1 | pass | pass |
| Text on surface | 18.96:1 | pass | pass |

**Colours seen on the page** (share of use): `#010101` 92.0%, `#0A1020` 4.4%, `#FFFFFF` 3.4%, `#7F88A3` 0.1%, `#555D73` 0.1%, `#EEEFF2` 0.0%, `#272835` 0.0%, `#9AA3BD` 0.0%, `#FF6A5A` 0.0%

## Typography

- Headings: **Bebas Neue** (weight 400)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Bebas+Neue&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Bebas Neue | 64 px | 400 | 64px | normal |
| Body | Inter | 20 px | 400 | 30px | normal |
| Button | Inter | 16 px | 500 | 16px | normal |
| Navigation | Inter | 24 px | 500 | normal | -0.4px |

## Shape, space and motion

- Radius: sm 8 px, md 8 px, lg 8 px
- Shadows: sm: `rgba(0, 0, 0, 0.18) 0px 1px 2px 0px, rgba(0, 0, 0, 0.18) 0px 4px 14px 0px` · md: `rgba(0, 0, 0, 0.18) 0px 1px 2px 0px, rgba(0, 0, 0, 0.18) 0px 4px 14px 0px` · lg: `rgba(0, 0, 0, 0.18) 0px 1px 2px 0px, rgba(0, 0, 0, 0.18) 0px 4px 14px 0px`
- Spacing: base unit 4 px; common steps 2 px, 6 px, 8 px, 10 px, 20 px, 24 px, 28 px, 32 px, 36 px
- Layout: container 1073 px; breakpoints 639 px, 640 px, 1023 px, 1024 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** confident, transparent, enthusiastic.

Sounds like a straight-talking dealer who actually likes cars: upbeat, honest about prices and keen to make buying exciting. Headlines are bold, body copy is plain.

**Do**

- Show the price and the certification
- Use big, short headlines
- Talk about the journey, not the transaction

**Do not**

- No pushy sales lines
- Avoid hidden-fee language
- Never mock the buyer's budget

## Taglines

1. Find the car that fits your journey
2. Certified cars, honest prices
3. Buying a car should feel exciting
4. Drive away with confidence
5. Thousands of cars you can trust

**Boilerplate:** New Era Automotive is a certified used car marketplace offering thousands of transparently priced vehicles, with a buying experience designed to feel exciting and trustworthy.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Shop now |
| secondaryCta | View cart |
| success | Added to your cart. |
| error | Couldn't add that car. Please try again. |
| empty | Your cart is empty. Start browsing. |

---
Source listing key `m:new-era-automotive-hero`. Rebuild with `python3 scripts/brand-kit/build.py m:new-era-automotive-hero`.
