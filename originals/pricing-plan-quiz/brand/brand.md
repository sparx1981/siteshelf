# Parcelo — brand kit

*Shipping software priced by seats.* Generated from the SiteShelf listing **Find-Your-Plan Pricing Quiz** (Pricing); every value below is read from that page, not invented.

> **Find the plan that fits your team**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Plus Jakarta Sans |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **bag** glyph on a squircle tile. A shopping bag stands for parcels and packages in transit. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F3F0FB` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#241A3D` | Body and heading text |
| textMuted | `#6B5E8A` | Secondary text, captions |
| primary | `#241A3D` | Main actions, links, brand colour |
| secondary | `#878194` | Highlights, charts, second accent |
| border | `#E6DEFA` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#878194` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 14.47:1 | pass | pass |
| Muted text on background | 5.20:1 | pass | pass |
| Primary on background | 14.47:1 | pass | pass |
| Text on primary | 16.28:1 | pass | pass |
| Text on surface | 16.28:1 | pass | pass |

**Colours seen on the page** (share of use): `#F3F0FB` 99.5%, `#E6DEFA` 0.2%, `#241A3D` 0.1%, `#6B5E8A` 0.1%, `#5B2EA6` 0.1%, `#878194` 0.0%

## Typography

- Headings: **Plus Jakarta Sans** (weight 800)
- Body: **Plus Jakarta Sans**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;800&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Heading / H2 | Plus Jakarta Sans | 28 px | 800 | 33.6px | normal |
| Caption / eyebrow | Plus Jakarta Sans | 14 px | 400 | 21px | normal |

## Shape, space and motion

- Radius: sm 14 px, md 20 px, lg 20 px, pill (fully rounded)
- Shadows: sm: `rgba(91, 46, 166, 0.15) 0px 18px 50px 0px` · md: `rgba(91, 46, 166, 0.15) 0px 18px 50px 0px` · lg: `rgba(91, 46, 166, 0.15) 0px 18px 50px 0px`
- Spacing: base unit 4 px; common steps 6 px, 8 px, 10 px, 16 px, 18 px, 20 px, 22 px, 24 px, 32 px
- Layout: container 1200 px; breakpoints 600 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** helpful, upbeat, clear.

Parcelo sounds like a friendly adviser who asks three questions and gives one answer. It is brisk, jargon-free and open about price, and it never makes the reader feel they chose the wrong plan.

**Do**

- Ask one question at a time in plain words
- Recommend one plan and say why
- State the price per seat per month, with annual savings

**Do not**

- Do not hide alternatives
- Do not use 'enterprise-grade'
- Do not push the dearest plan

## Taglines

1. Find the plan that fits your team
2. Three questions, one clear answer
3. Priced by seats, nothing sneaky
4. Right-sized shipping for your crew
5. Pick a plan, not a puzzle

**Boilerplate:** Parcelo is shipping and parcel software priced by seat, helping teams pick the right plan with a three-question quiz.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | See my plan |
| secondaryCta | Retake the quiz |
| success | Based on your answers, we recommend Studio. |
| error | Pick an answer to continue. |
| empty | No answers yet. Start with team size. |

---
Source listing key `o:pricing-plan-quiz`. Rebuild with `python3 scripts/brand-kit/build.py o:pricing-plan-quiz`.
