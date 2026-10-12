# Cadence — brand kit

*Calendar and focus app for freelancers.* Generated from the SiteShelf listing **Three-Way Pricing Toggle** (Pricing); every value below is read from that page, not invented.

> **Simple pricing. Pick how you pay**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Plus Jakarta Sans |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **pulse** glyph on a squircle tile. A steady pulse line reflects rhythm and cadence. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F7F6FB` | Page background |
| surface | `#ECE6FF` | Cards, panels, raised areas |
| text | `#17142A` | Body and heading text |
| textMuted | `#5F5A7A` | Secondary text, captions |
| primary | `#6C4CF1` | Main actions, links, brand colour |
| secondary | `#17142A` | Highlights, charts, second accent |
| border | `#E4E0F3` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#17142A` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 16.69:1 | pass | pass |
| Muted text on background | 6.05:1 | pass | pass |
| Primary on background | 4.95:1 | pass | pass |
| Text on primary | 5.33:1 | pass | pass |
| Text on surface | 14.81:1 | pass | pass |

**Colours seen on the page** (share of use): `#F7F6FB` 97.4%, `#6C4CF1` 1.5%, `#17142A` 0.7%, `#5F5A7A` 0.4%, `#FFB62E` 0.0%, `#B8F0D6` 0.0%, `#1F9D6B` 0.0%, `#3A2600` 0.0%, `#0B4A2F` 0.0%, `#E4E0F3` 0.0%

## Typography

- Headings: **Plus Jakarta Sans** (weight 800)
- Body: **Plus Jakarta Sans**
- Google Fonts: `https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Plus Jakarta Sans | 64 px | 800 | 67.2px | -1.92px |
| Heading / H2 | Plus Jakarta Sans | 22 px | 800 | normal | normal |
| Body | Plus Jakarta Sans | 17 px | 500 | 27.2px | normal |
| Button | Plus Jakarta Sans | 15 px | 700 | 16.5px | normal |

## Shape, space and motion

- Radius: sm 14 px, md 24 px, lg 24 px, pill (fully rounded)
- Shadows: sm: `rgba(108, 76, 241, 0.4) 0px 6px 16px 0px` · md: `rgba(108, 76, 241, 0.6) 0px 30px 60px -30px` · lg: `rgba(108, 76, 241, 0.4) 0px 6px 16px 0px`
- Spacing: base unit 2 px; common steps 2 px, 3 px, 4 px, 6 px, 10 px, 12 px, 14 px, 16 px, 18 px
- Layout: container 1120 px; breakpoints 900 px
- Motion: 500 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** steady, friendly, honest.

Talks like a freelancer friend who has been burned by hidden fees: clear on price, relaxed about choosing. It states the cost per period and leaves the decision with you.

**Do**

- Show price per month and per year side by side
- Say exactly what each plan includes
- Keep reassurance short and specific

**Do not**

- No fake urgency or countdowns
- Avoid vague phrases like best value
- Never bury the Lifetime option

## Taglines

1. Simple pricing. Pick how you pay
2. A calendar that keeps your rhythm
3. Plan, focus, repeat
4. Your time, priced fairly
5. Start free, upgrade when ready

**Boilerplate:** Cadence is a calendar and focus app for freelancers that keeps tasks, schedule and deep-work time in one place, with monthly, annual and lifetime plans.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Start free |
| secondaryCta | Compare plans |
| success | Plan updated. You're on Annual. |
| error | We couldn't update your plan. Please try again. |
| empty | No plan chosen yet. Pick how you want to pay. |

---
Source listing key `o:pricing-ab-toggle`. Rebuild with `python3 scripts/brand-kit/build.py o:pricing-ab-toggle`.
