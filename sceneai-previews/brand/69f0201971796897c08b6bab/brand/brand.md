# Alumica — brand kit

*Automation and payments layer for finance teams.* Generated from the SiteShelf listing **Alumica** (Automation &amp; Fintech); every value below is read from that page, not invented.

> **Redefining automation and fintech**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **bolt** glyph on a circle tile. A bolt suggests fast automation and energetic payments. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#000000` | Page background |
| surface | `#7A2A08` | Cards, panels, raised areas |
| text | `#FFFFFF` | Body and heading text |
| textMuted | `#FF8A00` | Secondary text, captions |
| primary | `#FF8A00` | Main actions, links, brand colour |
| secondary | `#3B82F6` | Highlights, charts, second accent |
| border | `#242424` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#714009` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 21.00:1 | pass | pass |
| Muted text on background | 8.89:1 | pass | pass |
| Primary on background | 8.89:1 | pass | pass |
| Text on primary | 8.31:1 | pass | pass |
| Text on surface | 9.71:1 | pass | pass |

**Colours seen on the page** (share of use): `#000000` 79.7%, `#7A2A08` 8.5%, `#1A0A02` 8.5%, `#FFFFFF` 0.9%, `#FF8A00` 0.8%, `#EA580C` 0.8%, `#9A9A9A` 0.8%, `#F97316` 0.0%, `#A855F7` 0.0%, `#22C55E` 0.0%

## Typography

- Headings: **Inter** (weight 600)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Inter | 84 px | 600 | 85.68px | -3.36px |
| Body | Inter | 18 px | 300 | 28.8px | normal |
| Button | Inter | 14 px | 500 | normal | normal |
| Navigation | Inter | 14 px | 400 | normal | normal |

## Shape, space and motion

- Radius: sm 10 px, md 10 px, lg 10 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 2 px; common steps 4 px, 5 px, 8 px, 9 px, 10 px, 16 px, 18 px, 22 px, 26 px
- Layout: container 1200 px; breakpoints 860 px
- Motion: 300 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** bold, precise, forward.

Sounds like a fintech founder pitching on stage: confident and concrete, with an eye on the busywork. It speaks of one layer for payments, workflows and data, and moves money with confidence.

**Do**

- Name the three connected things: payments, workflows, data
- Pair automation claims with a clear benefit
- Keep CTAs short and active

**Do not**

- Do not use buzz like disruptive
- Do not oversimplify compliance
- Do not promise autopilot finance

## Taglines

1. Redefining automation and fintech
2. One layer for money and work
3. Automate the busywork, move money
4. Payments, workflows and data, connected
5. Move money with confidence

**Boilerplate:** Alumica is an intelligent automation and fintech layer that connects payments, workflows and data so finance and operations teams can automate busywork and move money with confidence.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Join Today |
| secondaryCta | Sign In |
| success | Welcome to Alumica. Your workspace is ready. |
| error | Sign in failed. Check your details and try again. |
| empty | No automations yet. Create your first. |

---
Source listing key `s:69f0201971796897c08b6bab`. Rebuild with `python3 scripts/brand-kit/build.py s:69f0201971796897c08b6bab`.
