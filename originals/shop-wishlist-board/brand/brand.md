# Fieldnote Goods — brand kit

*Shop for notebooks, tools and tidy things.* Generated from the SiteShelf listing **Wishlist Board** (E-commerce); every value below is read from that page, not invented.

> **Things worth waiting for**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Fraunces |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **bag** glyph on a squircle tile. A shopping bag marks the shop and the list of things saved. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F6F1E8` | Page background |
| surface | `#FFFDF8` | Cards, panels, raised areas |
| text | `#1F1B16` | Body and heading text |
| textMuted | `#A8281C` | Secondary text, captions |
| primary | `#1F6B52` | Main actions, links, brand colour |
| secondary | `#F0DCA0` | Highlights, charts, second accent |
| border | `#E5DCCB` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#F0DCA0` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 15.22:1 | pass | pass |
| Muted text on background | 6.25:1 | pass | pass |
| Primary on background | 5.69:1 | pass | pass |
| Text on primary | 6.40:1 | pass | pass |
| Text on surface | 16.84:1 | pass | pass |

**Colours seen on the page** (share of use): `#F6F1E8` 74.8%, `#FFFFFF` 13.0%, `#D8CCB4` 4.9%, `#000000` 3.7%, `#5A3A1A` 0.7%, `#E8DCC4` 0.7%, `#C7CED6` 0.7%, `#1F6B52` 0.7%, `#1F1B16` 0.5%, `#2A2A2A` 0.4%

## Typography

- Headings: **Fraunces** (weight 600)
- Body: **Figtree**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;700&family=Fraunces:wght@600&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Fraunces | 52 px | 600 | 52px | normal |
| Heading / H2 | Fraunces | 26 px | 600 | normal | normal |
| Body | Figtree | 15 px | 500 | 22.5px | normal |
| Button | Arial | 13.3 px | 400 | normal | normal |
| Caption / eyebrow | Figtree | 12 px | 700 | normal | 1.92px |

## Shape, space and motion

- Radius: sm 8 px, md 14 px, lg 16 px, pill (fully rounded)
- Shadows: sm: `rgba(0, 0, 0, 0.2) 0px 2px 8px 0px` · md: `rgba(0, 0, 0, 0.2) 0px 2px 8px 0px` · lg: `rgba(0, 0, 0, 0.2) 0px 2px 8px 0px`
- Spacing: base unit 4 px; common steps 2 px, 4 px, 6 px, 8 px, 10 px, 12 px, 14 px, 16 px, 18 px
- Layout: container 1320 px; breakpoints 760 px
- Motion: 150 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** thoughtful, patient, considered.

Sounds like a shop owner who wants you to buy once and keep it: gentle, specific and in no hurry. It celebrates waiting for the right thing and a price drop.

**Do**

- Talk about keeping and using, not buying
- Mention price drops as plain facts
- Use phrases like saved for later

**Do not**

- No pressure to buy now
- Avoid sale hype
- Never use stock-ticker language

## Taglines

1. Things worth waiting for
2. Save it now, decide later
3. Good things come to your list
4. A wishlist that watches prices
5. Collect the things you'll keep

**Boilerplate:** Fieldnote Goods is a shop for notebooks, desk tools and well-made everyday objects, with shareable wishlists that tell you when a saved price drops.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Add to bag |
| secondaryCta | New list |
| success | Moved to your list. |
| error | Couldn't move that item. Try again. |
| empty | This list is empty. Save something from the shop. |

---
Source listing key `o:shop-wishlist-board`. Rebuild with `python3 scripts/brand-kit/build.py o:shop-wishlist-board`.
