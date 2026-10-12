# Salt & Slate — brand kit

*Hand-finished kitchenware and homewares.* Generated from the SiteShelf listing **Order Confirmation Page** (E-commerce); every value below is read from that page, not invented.

> **Thank you, we're packing it now**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Fraunces |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **bag** glyph on a squircle tile. A simple shopping bag represents the order being packed and sent. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#FAF6EE` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#1F1A14` | Body and heading text |
| textMuted | `#675C4B` | Secondary text, captions |
| primary | `#1D6E5A` | Main actions, links, brand colour |
| secondary | `#6A4A22` | Highlights, charts, second accent |
| border | `#E8DFCC` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#A0C2BA` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 16.02:1 | pass | pass |
| Muted text on background | 6.07:1 | pass | pass |
| Primary on background | 5.68:1 | pass | pass |
| Text on primary | 6.12:1 | pass | pass |
| Text on surface | 17.27:1 | pass | pass |

**Colours seen on the page** (share of use): `#FAF6EE` 79.7%, `#1D6E5A` 11.0%, `#000000` 4.8%, `#D9C29A` 2.2%, `#6A4A22` 1.3%, `#B88650` 0.3%, `#1F1A14` 0.3%, `#D9CDB2` 0.2%, `#E9DFC8` 0.2%, `#675C4B` 0.1%

## Typography

- Headings: **Fraunces** (weight 600)
- Body: **Figtree**
- Google Fonts: `https://fonts.googleapis.com/css2?family=DM+Mono:wght@500&family=Figtree:wght@400;500;700&family=Fraunces:wght@600&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Fraunces | 60 px | 600 | 61.2px | normal |
| Heading / H2 | Fraunces | 22 px | 600 | normal | normal |
| Subheading / H3 | Figtree | 12 px | 700 | normal | 1.44px |
| Body | Figtree | 16 px | 400 | 24.8px | normal |
| Button | Figtree | 13 px | 700 | normal | normal |
| Navigation | Figtree | 16 px | 700 | 24.8px | normal |
| Caption / eyebrow | Figtree | 12 px | 700 | normal | 1.92px |

## Shape, space and motion

- Radius: sm 10 px, md 18 px, lg 22 px, pill (fully rounded)
- Shadows: sm: `rgba(30, 60, 50, 0.25) 0px 10px 24px 0px` · md: `rgba(70, 45, 10, 0.2) 0px 20px 44px 0px` · lg: `rgba(30, 60, 50, 0.25) 0px 10px 24px 0px`
- Spacing: base unit 4 px; common steps 3 px, 4 px, 6 px, 8 px, 10 px, 12 px, 14 px, 16 px, 18 px
- Layout: container 1120 px; breakpoints 900 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** warm, grateful, careful.

Salt & Slate writes like a hand-written note tucked into a parcel: warm, specific and grateful. It names the customer and the items, and tells you exactly when and how they will arrive.

**Do**

- Use the customer's first name
- Name the items and the delivery window
- Thank them once, sincerely

**Do not**

- Do not use gushing exclamations
- Avoid corporate sign-offs
- Never leave delivery dates vague

## Taglines

1. Thank you, we're packing it now
2. Made by hand, sent with care
3. Order confirmed, parcel on its way
4. Packed on slate, wrapped in salt
5. Something good is coming

**Boilerplate:** Salt & Slate is an independent shop selling hand-finished kitchenware and homewares, packed carefully and delivered with a handwritten-style note.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Track order |
| secondaryCta | Download receipt |
| success | Gift note saved. |
| error | We could not update your slot. Please try again. |
| empty | No gift note yet. Add a few words if you like. |

---
Source listing key `o:shop-order-confirmation`. Rebuild with `python3 scripts/brand-kit/build.py o:shop-order-confirmation`.
