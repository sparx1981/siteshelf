# Tandem Works — brand kit

*Partner showcase for teams that build together.* Generated from the SiteShelf listing **Logo Marquee** (Testimonials); every value below is read from that page, not invented.

> **Great partners, great products**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Plus Jakarta Sans |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **bars** glyph on a squircle tile. Parallel bars suggest two lines of logos moving together. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#FFFFFF` | Page background |
| surface | `#F4F4F2` | Cards, panels, raised areas |
| text | `#5B6470` | Body and heading text |
| textMuted | `#0F1419` | Secondary text, captions |
| primary | `#5B6470` | Main actions, links, brand colour |
| secondary | `#A5AAB0` | Highlights, charts, second accent |
| border | `#E7E5E4` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#A5AAB0` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 6.00:1 | pass | pass |
| Muted text on background | 18.51:1 | pass | pass |
| Primary on background | 6.00:1 | pass | pass |
| Text on primary | 6.00:1 | pass | pass |
| Text on surface | 5.45:1 | pass | pass |

**Colours seen on the page** (share of use): `#FFFFFF` 98.2%, `#9AA1AB` 1.4%, `#5B6470` 0.2%, `#0F1419` 0.2%, `#E7E5E4` 0.0%

## Typography

- Headings: **Plus Jakarta Sans** (weight 800)
- Body: **Plus Jakarta Sans**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;700;800&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Heading / H2 | Plus Jakarta Sans | 44 px | 800 | 48.4px | -1.32px |
| Body | Plus Jakarta Sans | 18 px | 400 | 27px | normal |
| Button | Plus Jakarta Sans | 14 px | 500 | normal | normal |
| Caption / eyebrow | Plus Jakarta Sans | 13 px | 700 | normal | 1.56px |

## Shape, space and motion

- Radius: sm 12 px, md 12 px, lg 12 px, pill (fully rounded)
- Shadows: sm: `rgba(0, 0, 0, 0.12) 0px 1px 3px 0px` · md: `rgba(0, 0, 0, 0.12) 0px 1px 3px 0px` · lg: `rgba(0, 0, 0, 0.12) 0px 1px 3px 0px`
- Spacing: base unit 4 px; common steps 4 px, 8 px, 10 px, 16 px, 18 px, 24 px, 32 px, 36 px, 40 px
- Layout: container 1120 px; breakpoints 700 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** confident, collaborative, clean.

A confident B2B voice that credits others: short, factual and quietly proud of the company it keeps. It lets the logos and numbers do the persuading.

**Do**

- Lead with the partnership, not the product
- Use real counts and years in stat strips
- Keep headlines to one short claim

**Do not**

- Name-dropping without proof
- Superlatives like world-class
- Pressure to join

## Taglines

1. Great partners, great products
2. Trusted by teams everywhere
3. Built together, shipped together
4. The company we keep
5. Better with the right people

**Boilerplate:** Tandem Works is a platform trusted by teams everywhere, showing the partners and customers it builds alongside through a transparent partner programme.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Become a partner |
| secondaryCta | See all partners |
| success | Request received. We'll be in touch |
| error | We couldn't send that. Try again |
| empty | No partners yet. Add the first |

---
Source listing key `o:logo-marquee`. Rebuild with `python3 scripts/brand-kit/build.py o:logo-marquee`.
