# Tallyfold — brand kit

*Team planning tool with three simple plans.* Generated from the SiteShelf listing **Tally Pricing Section** (Pricing); every value below is read from that page, not invented.

> **Simple plans that grow with you**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Plus Jakarta Sans |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **stack** glyph on a squircle tile. Three stacked layers depict the three plans in rising order. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F6F5F1` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#17171A` | Body and heading text |
| textMuted | `#6B6B73` | Secondary text, captions |
| primary | `#5B4BFF` | Main actions, links, brand colour |
| secondary | `#1F9D6B` | Highlights, charts, second accent |
| border | `#E4E3DC` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#BAB3FF` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 16.40:1 | pass | pass |
| Muted text on background | 4.84:1 | pass | pass |
| Primary on background | 4.94:1 | pass | pass |
| Text on primary | 5.39:1 | pass | pass |
| Text on surface | 17.89:1 | pass | pass |

**Colours seen on the page** (share of use): `#F6F5F1` 97.3%, `#5B4BFF` 1.2%, `#E9E8E1` 0.9%, `#17171A` 0.4%, `#6B6B73` 0.2%, `#1F9D6B` 0.0%, `#BAB3FF` 0.0%

## Typography

- Headings: **Plus Jakarta Sans** (weight 800)
- Body: **Plus Jakarta Sans**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;800&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Plus Jakarta Sans | 64 px | 800 | 67.2px | -2.24px |
| Heading / H2 | Plus Jakarta Sans | 22 px | 800 | normal | -0.44px |
| Body | Plus Jakarta Sans | 18 px | 400 | 27px | normal |
| Button | Plus Jakarta Sans | 15 px | 600 | normal | normal |
| Caption / eyebrow | Plus Jakarta Sans | 14 px | 600 | 21px | 0.56px |

## Shape, space and motion

- Radius: sm 12 px, md 18 px, lg 18 px, pill (fully rounded)
- Shadows: sm: `rgba(0, 0, 0, 0.12) 0px 1px 3px 0px` · md: `rgba(0, 0, 0, 0.12) 0px 1px 3px 0px` · lg: `rgba(0, 0, 0, 0.12) 0px 1px 3px 0px`
- Spacing: base unit 4 px; common steps 4 px, 6 px, 10 px, 12 px, 14 px, 20 px, 22 px, 24 px, 31 px
- Layout: container 1080 px; breakpoints 900 px
- Motion: 250 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** friendly, clear, encouraging.

Sounds like a helpful sales colleague who actually wants you to choose the cheap plan if it fits: easy, reassuring and light on pressure. Prices are round, limits are visible and cancelling is easy.

**Do**

- Pair each plan with who it suits
- Say cancel any time near the price
- Keep the Most popular label modest

**Do not**

- Do not use dark patterns or fake urgency
- Do not hide limits in small print
- Do not push the biggest plan

## Taglines

1. Simple plans that grow with you
2. Start free, upgrade when it makes sense
3. Pay for what your team uses
4. Plans without puzzles
5. Cancel any time, no questions

**Boilerplate:** Tallyfold is a team planning tool sold on three simple plans, Starter, Studio and Scale, starting free, billed monthly or yearly and cancellable at any time.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Start 14-day trial |
| secondaryCta | Talk to sales |
| success | Plan chosen. Your trial has started. |
| error | We couldn't start that plan. Please try again. |
| empty | No plan selected yet. |

---
Source listing key `o:tally-pricing`. Rebuild with `python3 scripts/brand-kit/build.py o:tally-pricing`.
