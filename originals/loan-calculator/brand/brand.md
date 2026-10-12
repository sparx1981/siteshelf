# Fernlane Finance — brand kit

*Plain-English mortgage and loan calculators.* Generated from the SiteShelf listing **Loan Calculator** (Tools); every value below is read from that page, not invented.

> **Know your repayments before you ask**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Figtree |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **coins** glyph on a squircle tile. Coins signal money at once while keeping the mark friendly and uncomplicated. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F4F6F3` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#17261F` | Body and heading text |
| textMuted | `#5B6B62` | Secondary text, captions |
| primary | `#0F6B4A` | Main actions, links, brand colour |
| secondary | `#D98A1C` | Highlights, charts, second accent |
| border | `#CDD5CB` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#D98A1C` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 14.49:1 | pass | pass |
| Muted text on background | 5.19:1 | pass | pass |
| Primary on background | 6.00:1 | pass | pass |
| Text on primary | 6.52:1 | pass | pass |
| Text on surface | 15.75:1 | pass | pass |

**Colours seen on the page** (share of use): `#F4F6F3` 97.1%, `#0F6B4A` 1.6%, `#17261F` 0.9%, `#5B6B62` 0.3%, `#D98A1C` 0.1%, `#CDD5CB` 0.0%

## Typography

- Headings: **Figtree** (weight 700)
- Body: **Figtree**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600;700&family=Fraunces:wght@600&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Figtree | 38 px | 700 | 43.7px | -0.76px |
| Heading / H2 | Figtree | 13 px | 600 | 19.5px | 0.78px |
| Body | Figtree | 16 px | 400 | 24px | normal |
| Button | Figtree | 14 px | 600 | normal | normal |
| Caption / eyebrow | Figtree | 18 px | 500 | normal | normal |

## Shape, space and motion

- Radius: sm 3 px, md 10 px, lg 12 px
- Shadows: sm: `rgba(20, 40, 30, 0.05) 0px 1px 2px 0px` · md: `rgba(0, 0, 0, 0.12) 0px 1px 3px 0px` · lg: `rgba(20, 40, 30, 0.05) 0px 1px 2px 0px`
- Spacing: base unit 4 px; common steps 4 px, 6 px, 8 px, 10 px, 11 px, 12 px, 18 px, 20 px, 22 px
- Layout: container 1100 px; breakpoints 520 px, 860 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** steady, transparent, friendly.

Fernlane Finance explains loans the way a patient adviser would over tea: figures first, jargon translated, nothing scary. Every number is shown with its meaning and every assumption is stated.

**Do**

- Show the monthly payment first, then how it is made up
- Define terms like APR in one plain sentence
- State that figures are illustrative

**Do not**

- Do not use scare phrases like 'trapped in debt'
- Avoid hidden assumptions
- Never recommend a product without the numbers

## Taglines

1. Know your repayments before you ask
2. Move a slider, see the number
3. Loans without the jargon
4. Borrowing, shown clearly
5. Every pound explained

**Boilerplate:** Fernlane Finance is a set of plain-English tools for understanding mortgages and loans, with live repayment figures, interest breakdowns and a full amortisation table.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | See my repayments |
| secondaryCta | Show full table |
| success | Calculation updated. |
| error | Enter an amount between £1,000 and £1,000,000. |
| empty | Enter your loan details to see the monthly payment. |

---
Source listing key `o:loan-calculator`. Rebuild with `python3 scripts/brand-kit/build.py o:loan-calculator`.
