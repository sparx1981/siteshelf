# Fieldhouse — brand kit

*Country-inspired clothing and bags.* Generated from the SiteShelf listing **Shopping Cart Drawer** (E-commerce); every value below is read from that page, not invented.

> **Made for weather and for walking**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter Bold (stand-in for Instrument Sans) |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **home** glyph. A house shape ties to the name and works as a simple store icon. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#FFFFFF` | Page background |
| surface | `#9AB08A` | Cards, panels, raised areas |
| text | `#1C1B19` | Body and heading text |
| textMuted | `#000000` | Secondary text, captions |
| primary | `#1F5E4A` | Main actions, links, brand colour |
| secondary | `#E5D3B3` | Highlights, charts, second accent |
| border | `#1C1B19` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#E5D3B3` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 17.21:1 | pass | pass |
| Muted text on background | 21.00:1 | pass | pass |
| Primary on background | 7.61:1 | pass | pass |
| Text on primary | 7.61:1 | pass | pass |
| Text on surface | 7.34:1 | pass | pass |

**Colours seen on the page** (share of use): `#FFFFFF` 76.7%, `#9AB08A` 5.3%, `#E5D3B3` 4.8%, `#D8C7A2` 4.8%, `#C79A6D` 4.8%, `#1C1B19` 2.2%, `#1F5E4A` 1.0%, `#DDE8E1` 0.2%, `#C2410C` 0.1%, `#7C776B` 0.0%

## Typography

- Headings: **Instrument Sans** (weight 700)
- Body: **Instrument Sans**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;600&family=Instrument+Serif&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Heading / H2 | Instrument Sans | 16 px | 700 | 24px | normal |
| Button | Instrument Sans | 15 px | 600 | 22.5px | normal |
| Caption / eyebrow | Instrument Sans | 12.5 px | 400 | 18.75px | normal |

## Shape, space and motion

- Radius: sm 8 px, md 14 px, lg 20 px, pill (fully rounded)
- Shadows: sm: `rgba(0, 0, 0, 0.05) 0px 2px 10px 0px` · md: `rgba(0, 0, 0, 0.15) 0px 8px 20px 0px` · lg: `rgba(0, 0, 0, 0.05) 0px 2px 10px 0px`
- Spacing: base unit 2 px; common steps 3 px, 6 px, 8 px, 9 px, 10 px, 12 px, 13 px, 14 px, 18 px
- Layout: container 1100 px; breakpoints 480 px, 900 px
- Motion: 300 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** grounded, tidy, warm.

Fieldhouse writes like a country outfitter with a good eye: concrete about cloth, stitching and weight, light on adjectives. Cart text is short and tells you exactly how far you are from free shipping.

**Do**

- Name the fabric and the make in a few words
- Show the total and the shipping gap in dollars
- Keep cart labels to a single verb

**Do not**

- Do not invent heritage claims
- Avoid 'trendy' and 'must-have'
- Never push add-ons inside the cart

## Taglines

1. Made for weather and for walking
2. Honest cloth, well cut
3. Wear it in, wear it out
4. Good kit, no fuss
5. Waxed, woven, built to last

**Boilerplate:** Fieldhouse is an online outfitter selling waxed jackets, merino knitwear, canvas totes and leather goods, with a simple slide-out cart and clear shipping thresholds.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Checkout |
| secondaryCta | Add |
| success | Added to your cart. |
| error | Could not add that item. Please try again. |
| empty | Your cart is empty. |

---
Source listing key `o:ecommerce-cart-drawer`. Rebuild with `python3 scripts/brand-kit/build.py o:ecommerce-cart-drawer`.
