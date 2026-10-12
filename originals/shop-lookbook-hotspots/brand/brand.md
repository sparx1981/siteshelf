# Hearth & Hollow — brand kit

*Homeware brand with shoppable room scenes.* Generated from the SiteShelf listing **Lookbook Hotspots** (E-commerce); every value below is read from that page, not invented.

> **A quiet corner, lit well**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from DM Serif Display |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **home** glyph. A little house shape suits a homeware brand and its cosy room scenes. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F7F2EA` | Page background |
| surface | `#FFFDF8` | Cards, panels, raised areas |
| text | `#231D17` | Body and heading text |
| textMuted | `#6C6153` | Secondary text, captions |
| primary | `#A0451F` | Main actions, links, brand colour |
| secondary | `#F1E2C6` | Highlights, charts, second accent |
| border | `#231D17` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#F1E2C6` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 14.96:1 | pass | pass |
| Muted text on background | 5.43:1 | pass | pass |
| Primary on background | 5.60:1 | pass | pass |
| Text on primary | 6.24:1 | pass | pass |
| Text on surface | 16.40:1 | pass | pass |

**Colours seen on the page** (share of use): `#F7F2EA` 87.4%, `#000000` 7.0%, `#FFFFFF` 1.0%, `#A0451F` 1.0%, `#F1E2C6` 0.8%, `#C97A4A` 0.7%, `#BFDCF0` 0.7%, `#B8532D` 0.6%, `#2A2018` 0.5%, `#7D9A77` 0.4%

## Typography

- Headings: **DM Serif Display** (weight 400)
- Body: **Figtree**
- Google Fonts: `https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Figtree:wght@400;500;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | DM Serif Display | 64 px | 400 | 64px | normal |
| Heading / H2 | DM Serif Display | 26 px | 400 | normal | normal |
| Body | Figtree | 15 px | 400 | 22.5px | normal |
| Button | Figtree | 14 px | 700 | normal | normal |
| Navigation | Figtree | 15 px | 500 | 22.5px | normal |
| Caption / eyebrow | Figtree | 12 px | 700 | normal | 1.92px |

## Shape, space and motion

- Radius: sm 10 px, md 20 px, lg 22 px, pill (fully rounded)
- Shadows: sm: `rgba(0, 0, 0, 0.4) 0px 2px 10px 0px, rgba(184, 83, 45, 0.9) 0px 0px 0px 3px` · md: `rgba(60, 40, 20, 0.25) 0px 26px 60px 0px` · lg: `rgba(0, 0, 0, 0.4) 0px 2px 10px 0px, rgba(184, 83, 45, 0.9) 0px 0px 0px 3px`
- Spacing: base unit 4 px; common steps 3 px, 4 px, 6 px, 8 px, 10 px, 12 px, 16 px, 18 px, 20 px
- Layout: container 1240 px; breakpoints 900 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** cosy, tasteful, calm.

Sounds like a stylist describing a corner of her own home: soft, specific and reassuring. It tells you why a lamp works in the room rather than praising it, and lists prices up front.

**Do**

- Describe the piece in the context of the room
- Give the price and material plainly
- Use quiet verbs like settle, glow and layer

**Do not**

- Do not use influencer superlatives
- Do not pressure with scarcity
- Do not abbreviate prices

## Taglines

1. A quiet corner, lit well
2. Shop the room, not the shelf
3. Pieces that settle in
4. Warm light, soft textures, slow evenings
5. Homes made of small things

**Boilerplate:** Hearth & Hollow is a homeware brand that styles whole rooms and lets shoppers tap any piece, from the sofa to the lamp, to see its price and add it to a basket.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Add the whole look |
| secondaryCta | Add |
| success | Added to your basket. |
| error | We couldn't add that. Please try again. |
| empty | Your basket is empty. Tap a hotspot to begin. |

---
Source listing key `o:shop-lookbook-hotspots`. Rebuild with `python3 scripts/brand-kit/build.py o:shop-lookbook-hotspots`.
