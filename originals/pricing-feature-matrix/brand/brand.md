# Beacon Analytics — brand kit

*Analytics software with clear plans and fair pricing.* Generated from the SiteShelf listing **Pricing Feature Matrix** (Pricing); every value below is read from that page, not invented.

> **Start free. Upgrade when you grow**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from DM Sans |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **bars** glyph on a squircle tile. Rising bars say analytics and, as steps, the climb through plans. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#FFFFFF` | Page background |
| surface | `#EEF2FF` | Cards, panels, raised areas |
| text | `#111827` | Body and heading text |
| textMuted | `#6B7280` | Secondary text, captions |
| primary | `#4F46E5` | Main actions, links, brand colour |
| secondary | `#16A34A` | Highlights, charts, second accent |
| border | `#111827` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#B5B1F4` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 17.74:1 | pass | pass |
| Muted text on background | 4.83:1 | pass | pass |
| Primary on background | 6.29:1 | pass | pass |
| Text on primary | 6.29:1 | pass | pass |
| Text on surface | 15.86:1 | pass | pass |

**Colours seen on the page** (share of use): `#FFFFFF` 99.1%, `#4F46E5` 0.4%, `#111827` 0.3%, `#D1D5DB` 0.0%, `#6B7280` 0.0%, `#16A34A` 0.0%, `#B5B1F4` 0.0%

## Typography

- Headings: **DM Sans** (weight 700)
- Body: **DM Sans**
- Google Fonts: `https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | DM Sans | 34 px | 700 | 51px | -0.68px |
| Body | DM Sans | 15 px | 400 | 22.5px | normal |
| Button | DM Sans | 14 px | 700 | normal | normal |
| Caption / eyebrow | DM Sans | 13 px | 400 | 19.5px | -0.6px |

## Shape, space and motion

- Radius: sm 10 px, md 10 px, lg 10 px, pill (fully rounded)
- Shadows: sm: `rgba(0, 0, 0, 0.133) 0px 1px 4px 0px` · md: `rgba(0, 0, 0, 0.133) 0px 1px 4px 0px` · lg: `rgba(0, 0, 0, 0.133) 0px 1px 4px 0px`
- Spacing: base unit 4 px; common steps 3 px, 4 px, 6 px, 8 px, 10 px, 12 px, 16 px, 18 px, 20 px
- Layout: container 1040 px; breakpoints 760 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** clear, straightforward, confident.

A product manager who is happy to put prices on the table: factual, direct and unpretentious. Differences between plans are stated plainly, without tricks.

**Do**

- State plan limits and prices explicitly
- Describe features by what they let teams do
- Say the yearly saving as a number

**Do not**

- Enterprise jargon
- Hidden fees or asterisks
- Pushy upgrade nudges

## Taglines

1. Start free. Upgrade when you grow
2. Compare plans, skip the surprises
3. Analytics that scale with you
4. See every difference, side by side
5. Pick the plan that fits

**Boilerplate:** Beacon Analytics is a product analytics platform with Free, Pro, Business and Enterprise plans, offered monthly or yearly with 20 percent off annual billing.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Start free |
| secondaryCta | Contact sales |
| success | Plan updated. Welcome to Pro |
| error | We couldn't change your plan. Try again |
| empty | No differences in this group |

---
Source listing key `o:pricing-feature-matrix`. Rebuild with `python3 scripts/brand-kit/build.py o:pricing-feature-matrix`.
