# Ember & Oak — brand kit

*Home and outdoor goods shop.* Generated from the SiteShelf listing **Flash Sale Countdown** (E-commerce); every value below is read from that page, not invented.

> **Up to 40 percent off, one afternoon**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Bricolage Grotesque |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **bolt** glyph on a circle tile. A quick bolt signals a short, energetic sale. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#1B1320` | Page background |
| surface | `#261B2E` | Cards, panels, raised areas |
| text | `#FFF3DF` | Body and heading text |
| textMuted | `#E6D9EA` | Secondary text, captions |
| primary | `#FFC247` | Main actions, links, brand colour |
| secondary | `#4A3226` | Highlights, charts, second accent |
| border | `#3D2E4A` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#4A3226` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 16.49:1 | pass | pass |
| Muted text on background | 13.34:1 | pass | pass |
| Primary on background | 11.25:1 | pass | pass |
| Text on primary | 12.22:1 | pass | pass |
| Text on surface | 14.97:1 | pass | pass |

**Colours seen on the page** (share of use): `#1B1320` 87.9%, `#FF6A2B` 7.3%, `#000000` 2.3%, `#3D2E4A` 0.7%, `#FFC247` 0.6%, `#4A3226` 0.3%, `#2A3A38` 0.3%, `#4A5A3A` 0.3%, `#FFF3DF` 0.2%, `#6FE0A8` 0.2%

## Typography

- Headings: **Bricolage Grotesque** (weight 800)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@700;800&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@500&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Bricolage Grotesque | 92 px | 800 | 87.4px | normal |
| Heading / H2 | Bricolage Grotesque | 18 px | 700 | normal | normal |
| Body | Inter | 14 px | 400 | 21px | normal |
| Button | Inter | 14 px | 700 | normal | normal |
| Caption / eyebrow | Inter | 12 px | 700 | normal | 2.4px |

## Shape, space and motion

- Radius: sm 8 px, md 12 px, lg 18 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 2 px; common steps 2 px, 6 px, 8 px, 9 px, 10 px, 12 px, 14 px, 16 px, 20 px
- Layout: container 1240 px; breakpoints 420 px, 900 px
- Motion: 400 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** warm, energetic, honest.

Sounds like a shopkeeper who truly wants you to enjoy a good afternoon: excited but straightforward, and upfront that counts are simulated. No pressure beyond the clock.

**Do**

- Say how many are left in plain numbers
- Be transparent that the sale ends
- Keep urgency friendly, never panicked

**Do not**

- No fake scarcity
- Avoid shouting in capitals
- Never guilt a shopper for leaving

## Taglines

1. Up to 40 percent off, one afternoon
2. Good things, for a short time
3. Warm deals while the fire's lit
4. One afternoon, honest prices
5. Grab it before the embers fade

**Boilerplate:** Ember & Oak is a shop selling well-made home and outdoor goods, running an honest one-afternoon flash sale with real countdowns and a short cart hold.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Add to bag |
| secondaryCta | Notify me |
| success | Added to your bag. Held for 10 minutes. |
| error | That one just sold out. Tap notify me. |
| empty | Your bag is empty. Have a look around. |

---
Source listing key `o:shop-flash-sale`. Rebuild with `python3 scripts/brand-kit/build.py o:shop-flash-sale`.
