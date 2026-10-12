# ledgerly — brand kit

*Recurring revenue analytics for SaaS teams.* Generated from the SiteShelf listing **Recurring Revenue Dashboard** (Dashboard); every value below is read from that page, not invented.

> **Revenue health, at a glance**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Manrope |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **bars** glyph on a squircle tile. Rising bars say revenue growth directly, and sit well beside a lowercase wordmark. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#07120F` | Page background |
| surface | `#0D1D18` | Cards, panels, raised areas |
| text | `#E7F5EE` | Body and heading text |
| textMuted | `#8FB1A2` | Secondary text, captions |
| primary | `#3EE0A0` | Main actions, links, brand colour |
| secondary | `#9D8CFF` | Highlights, charts, second accent |
| border | `#1B3A30` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#20644C` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 16.96:1 | pass | pass |
| Muted text on background | 8.14:1 | pass | pass |
| Primary on background | 11.22:1 | pass | pass |
| Text on primary | 11.58:1 | pass | pass |
| Text on surface | 15.50:1 | pass | pass |

**Colours seen on the page** (share of use): `#07120F` 93.9%, `#0E8F5A` 1.6%, `#000000` 1.3%, `#9D8CFF` 0.9%, `#1CB574` 0.5%, `#3EE0A0` 0.5%, `#8FB1A2` 0.3%, `#E7F5EE` 0.3%, `#A4E07A` 0.3%, `#BFDB71` 0.3%

## Typography

- Headings: **Manrope** (weight 800)
- Body: **DM Mono**
- Google Fonts: `https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Manrope:wght@500;600;700;800&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Manrope | 32 px | 800 | 35.2px | -0.64px |
| Heading / H2 | Manrope | 17 px | 800 | normal | normal |
| Button | Manrope | 13 px | 700 | normal | normal |
| Caption / eyebrow | Manrope | 11.7 px | 600 | 17.5px | normal |

## Shape, space and motion

- Radius: sm 8 px, md 12 px, lg 16 px, pill (fully rounded)
- Shadows: sm: `rgba(62, 224, 160, 0.6) 0px 0px 14px 0px` · md: `rgba(62, 224, 160, 0.6) 0px 0px 14px 0px` · lg: `rgba(62, 224, 160, 0.6) 0px 0px 14px 0px`
- Spacing: base unit 2 px; common steps 2 px, 3 px, 4 px, 6 px, 7 px, 10 px, 12 px, 14 px, 16 px
- Layout: container 1260 px; breakpoints 900 px
- Motion: 150 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** analytical, candid, calm.

ledgerly speaks like a trusted finance lead presenting at a board meeting: numbers first, adjectives last. It reports good and bad movements with the same level tone and always says what moved and by how much.

**Do**

- Report changes as exact amounts and percentages
- Name the period, such as Q3 2026
- Explain what a metric means once, in one clause

**Do not**

- Do not dress up churn as 'opportunity'
- Avoid unlabelled charts or unexplained acronyms
- Never round a number that is later reconciled

## Taglines

1. Revenue health, at a glance
2. See where every pound moved
3. MRR without the mystery
4. Know your numbers cold
5. Growth you can audit

**Boilerplate:** ledgerly is a revenue analytics tool for subscription businesses, showing monthly recurring revenue movement, cohort retention and quarterly trends in one clear dashboard.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | View Q3 report |
| secondaryCta | Export CSV |
| success | Report exported. |
| error | Could not load the cohort data. Try again in a moment. |
| empty | No data for this quarter yet. |

---
Source listing key `o:dashboard-mrr-growth`. Rebuild with `python3 scripts/brand-kit/build.py o:dashboard-mrr-growth`.
