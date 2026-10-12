# ClearInvoice — brand kit

*Billing software for online stores.* Generated from the SiteShelf listing **ClearInvoice SaaS Hero** (SaaS); every value below is read from that page, not invented.

> **Billing, without the hassle**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Plus Jakarta Sans |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **coins** glyph on a squircle tile. Coins show the billing purpose at once and look sharp against the dark hero. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#07060D` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#FFFFFF` | Body and heading text |
| textMuted | `#A8A8AA` | Secondary text, captions |
| primary | `#FF3300` | Main actions, links, brand colour |
| secondary | `#E8D8C4` | Highlights, charts, second accent |
| border | `#FFFFFF` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#E8D8C4` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 20.17:1 | pass | pass |
| Muted text on background | 8.50:1 | pass | pass |
| Primary on background | 5.50:1 | pass | pass |
| Text on primary | 5.36:1 | pass | pass |
| Text on surface | 1.00:1 | fail | fail |

**Colours seen on the page** (share of use): `#07060D` 97.2%, `#FFFFFF` 1.2%, `#EA580C` 0.5%, `#DDDDDD` 0.4%, `#E8D8C4` 0.1%, `#FF3300` 0.1%, `#EE7926` 0.1%, `#CCCCFF` 0.1%, `#E7D04C` 0.1%, `#31FB78` 0.1%

## Typography

- Headings: **Plus Jakarta Sans** (weight 500)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Plus+Jakarta+Sans:wght@500;600;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Plus Jakarta Sans | 60 px | 500 | 63px | -2.1px |
| Body | Inter | 20 px | 400 | 31px | normal |
| Navigation | Plus Jakarta Sans | 22 px | 600 | 22px | -0.88px |

## Shape, space and motion

- Radius: sm 10 px, md 14 px, lg 14 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 2 px, 8 px, 9 px, 10 px, 12 px, 14 px, 16 px, 24 px, 28 px
- Layout: container 1280 px; breakpoints 768 px, 1024 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** clear, efficient, confident.

ClearInvoice speaks in clean, practical sentences about billing that does not hurt. It promises less admin and says what it saves.

**Do**

- Name the billing task and the saving
- Use short verbs: bill, chase, reconcile
- Back claims with a number

**Do not**

- Do not use finance jargon
- Avoid empty promises like effortless
- Never hide pricing

## Taglines

1. Billing, without the hassle
2. Invoices that explain themselves
3. Run your store, not your paperwork
4. Get paid, clearly
5. Three times less admin

**Boilerplate:** ClearInvoice takes the hassle out of billing with easy-to-use tools that help online store owners send invoices, get paid and cut their operating costs.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Get started |
| secondaryCta | See pricing |
| success | Invoice sent. |
| error | Could not send that invoice. Please check the email address. |
| empty | No invoices yet. |

---
Source listing key `m:clearinvoice-saas-hero`. Rebuild with `python3 scripts/brand-kit/build.py m:clearinvoice-saas-hero`.
