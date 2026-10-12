# Fieldwork — brand kit

*Outdoor and workwear store with fast checkout.* Generated from the SiteShelf listing **Checkout Flow** (E-commerce); every value below is read from that page, not invented.

> **Pay once, and be done**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter Bold (stand-in for Inter Tight) |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **bag** glyph on a squircle tile. A bag mark says store at a glance and suits a no-nonsense checkout. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F7F7F9` | Page background |
| surface | `#0F766E` | Cards, panels, raised areas |
| text | `#16161D` | Body and heading text |
| textMuted | `#6B6B7B` | Secondary text, captions |
| primary | `#0F766E` | Main actions, links, brand colour |
| secondary | `#D5B98F` | Highlights, charts, second accent |
| border | `#DCDCE4` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#D5B98F` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 16.82:1 | pass | pass |
| Muted text on background | 4.89:1 | pass | pass |
| Primary on background | 5.12:1 | pass | pass |
| Text on primary | 5.47:1 | pass | pass |
| Text on surface | 3.29:1 | fail | pass |

**Colours seen on the page** (share of use): `#F7F7F9` 98.0%, `#0F766E` 1.2%, `#16161D` 0.3%, `#E3E8DC` 0.2%, `#6B6B7B` 0.1%, `#5D6B45` 0.1%, `#D5B98F` 0.1%, `#A9A9B5` 0.1%, `#4A4A58` 0.0%, `#000000` 0.0%

## Typography

- Headings: **Inter Tight** (weight 650)
- Body: **Inter Tight**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Heading / H2 | Inter Tight | 22 px | 650 | normal | -0.44px |
| Subheading / H3 | Inter Tight | 18 px | 650 | normal | normal |
| Button | Inter Tight | 17 px | 700 | normal | normal |
| Caption / eyebrow | Inter Tight | 13.3 px | 400 | 20px | normal |

## Shape, space and motion

- Radius: sm 4 px, md 14 px, lg 20 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 2 px; common steps 3 px, 5 px, 6 px, 8 px, 10 px, 12 px, 14 px, 16 px, 24 px
- Layout: container 1100 px; breakpoints 900 px, 901 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** clear, steady, trustworthy.

Fieldwork keeps checkout copy short and calm so people never wonder what happens next. Every step says what it needs, why, and what it will cost in pounds.

**Do**

- Label every field with the exact thing needed
- State totals, delivery and dates in plain numbers
- Explain an error in the field where it occurred

**Do not**

- Do not use urgency timers or pressure
- Avoid jargon like authorisation hold
- Never hide delivery costs until the last step

## Taglines

1. Pay once, and be done
2. Checkout without the guesswork
3. Gear for the job, paid for simply
4. Four steps, no surprises
5. Careful orders, honestly priced

**Boilerplate:** Fieldwork is a UK outdoor and workwear store with a clear four-step checkout, honest delivery options and an order summary that always shows the real total.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Pay £177.00 |
| secondaryCta | Apply |
| success | Order placed. A receipt is on its way. |
| error | That card number looks wrong. Check it and try again. |
| empty | Your bag is empty. |

---
Source listing key `o:checkout-flow`. Rebuild with `python3 scripts/brand-kit/build.py o:checkout-flow`.
