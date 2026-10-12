# Giftwise — brand kit

*Gift shop with a recommendation quiz.* Generated from the SiteShelf listing **Gift Finder Quiz** (E-commerce); every value below is read from that page, not invented.

> **Find the right gift**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from DM Serif Display |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **diamond** glyph on a squircle tile. A diamond hints at a gift and a precious choice, in a shape that scales well. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#FBF3EE` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#231820` | Body and heading text |
| textMuted | `#6B5A62` | Secondary text, captions |
| primary | `#6A2C5A` | Main actions, links, brand colour |
| secondary | `#E0A43A` | Highlights, charts, second accent |
| border | `#ECD9DF` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#E0A43A` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 15.66:1 | pass | pass |
| Muted text on background | 5.87:1 | pass | pass |
| Primary on background | 9.03:1 | pass | pass |
| Text on primary | 9.90:1 | pass | pass |
| Text on surface | 17.17:1 | pass | pass |

**Colours seen on the page** (share of use): `#FBF3EE` 93.4%, `#000000` 4.6%, `#E3E8DC` 0.9%, `#231820` 0.3%, `#6B5A62` 0.2%, `#8AA386` 0.2%, `#E0A43A` 0.1%, `#2F7A5A` 0.1%, `#6A2C5A` 0.1%, `#4A2040` 0.1%

## Typography

- Headings: **DM Serif Display** (weight 400)
- Body: **Figtree**
- Google Fonts: `https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Figtree:wght@400;500;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | DM Serif Display | 56 px | 400 | 57.12px | normal |
| Heading / H2 | DM Serif Display | 28 px | 400 | 32.2px | normal |
| Subheading / H3 | DM Serif Display | 20 px | 400 | normal | normal |
| Body | Figtree | 15.5 px | 400 | 23.25px | normal |
| Button | Figtree | 14 px | 700 | normal | normal |
| Caption / eyebrow | Figtree | 12 px | 700 | normal | 1.92px |

## Shape, space and motion

- Radius: sm 10 px, md 14 px, lg 18 px, pill (fully rounded)
- Shadows: sm: `rgba(0, 0, 0, 0.2) 0px 2px 8px 0px` · md: `rgba(0, 0, 0, 0.2) 0px 2px 8px 0px` · lg: `rgba(0, 0, 0, 0.2) 0px 2px 8px 0px`
- Spacing: base unit 4 px; common steps 4 px, 6 px, 8 px, 10 px, 12 px, 14 px, 16 px, 18 px, 20 px
- Layout: container 1300 px; breakpoints 420 px, 960 px
- Motion: 250 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** thoughtful, warm, witty.

Giftwise sounds like the friend who always picks the right present: warm, observant and quietly funny. It asks gentle questions and explains why each gift fits.

**Do**

- Ask about the person, not the product
- Give a reason with every recommendation
- Show the price early and honestly

**Do not**

- Do not use cheesy gift-guide phrases
- Avoid pushing the most expensive match
- Never imply a gift is wrong

## Taglines

1. Find the right gift
2. Gifts that sound like them
3. Tell us who, we will find what
4. A better present in five questions
5. Thoughtful, without the guesswork

**Boilerplate:** Giftwise is an online gift shop with a short quiz about the recipient, occasion, budget and style that ranks gifts by how well they match and explains why.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Next |
| secondaryCta | Skip |
| success | Added to your shortlist. |
| error | Could not save that gift. Please try again. |
| empty | Nothing matches yet. Try loosening a filter. |

---
Source listing key `o:shop-gift-finder`. Rebuild with `python3 scripts/brand-kit/build.py o:shop-gift-finder`.
