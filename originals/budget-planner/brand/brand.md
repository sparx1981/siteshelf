# Penny Jar — brand kit

*Friendly monthly budget planner.* Generated from the SiteShelf listing **Budget Planner** (Dashboard); every value below is read from that page, not invented.

> **Know where it all went**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Manrope |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **coins** glyph on a squircle tile. Stacked coins say money at a glance, in the same friendly spirit as a jar on a shelf. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F5F6FA` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#1B2033` | Body and heading text |
| textMuted | `#667089` | Secondary text, captions |
| primary | `#4F46E5` | Main actions, links, brand colour |
| secondary | `#F59E0B` | Highlights, charts, second accent |
| border | `#E4E7F0` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#F59E0B` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 14.95:1 | pass | pass |
| Muted text on background | 4.58:1 | pass | pass |
| Primary on background | 5.82:1 | pass | pass |
| Text on primary | 6.29:1 | pass | pass |
| Text on surface | 16.14:1 | pass | pass |

**Colours seen on the page** (share of use): `#F5F6FA` 98.4%, `#F59E0B` 0.3%, `#4F46E5` 0.3%, `#1B2033` 0.3%, `#DC2626` 0.2%, `#0EA5E9` 0.1%, `#667089` 0.1%, `#10B981` 0.1%, `#94A3B8` 0.1%, `#EC4899` 0.1%

## Typography

- Headings: **Manrope** (weight 800)
- Body: **Manrope**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Manrope:wght@500;600;700;800&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Heading / H2 | Manrope | 18 px | 800 | normal | normal |
| Button | Arial | 18 px | 400 | normal | normal |
| Caption / eyebrow | Manrope | 11.7 px | 500 | 17.5px | normal |

## Shape, space and motion

- Radius: sm 3 px, md 12 px, lg 18 px, pill (fully rounded)
- Shadows: sm: `rgba(27, 32, 51, 0.3) 0px 8px 24px -20px` · md: `rgba(27, 32, 51, 0.3) 0px 8px 24px -20px` · lg: `rgba(27, 32, 51, 0.3) 0px 8px 24px -20px`
- Spacing: base unit 2 px; common steps 2 px, 4 px, 6 px, 8 px, 10 px, 11 px, 12 px, 14 px, 20 px
- Layout: container 1160 px; breakpoints 460 px, 900 px
- Motion: 400 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** friendly, encouraging, straight-talking.

Penny Jar talks like a sensible friend who is good with money and never makes you feel small about it. It uses plain pounds and pence and celebrates the small wins.

**Do**

- Say what was spent and what is left, in pounds
- Frame an over-budget alert as a heads-up, not a telling-off
- Use everyday words like 'rent' and 'shop' rather than finance terms

**Do not**

- Shame or scold about spending
- Use banking jargon like 'allocate' or 'expenditure'
- Use exclamation marks on bad news

## Taglines

1. Know where it all went
2. Small jars, big peace of mind
3. Spend with your eyes open
4. Budgeting that does not nag
5. Every penny has a place

**Boilerplate:** Penny Jar is a household budgeting app that turns monthly spending into clear category limits and gentle alerts, so families can see what is left before the month runs out.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Add expense |
| secondaryCta | Edit budgets |
| success | Expense added. £42 left in Food. |
| error | That amount does not look right. Check and retry. |
| empty | No expenses yet this month. |

---
Source listing key `o:budget-planner`. Rebuild with `python3 scripts/brand-kit/build.py o:budget-planner`.
