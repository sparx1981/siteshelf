# Cadence Cloud — brand kit

*Team workspace with three pricing plans.* Generated from the SiteShelf listing **Pricing Comparison Table** (Pricing); every value below is read from that page, not invented.

> **Pricing that scales with your team**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Bricolage Grotesque |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **cloud** glyph on a squircle tile. A cloud shape fits a hosted workspace and the product name. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#0F1115` | Page background |
| surface | `#181B22` | Cards, panels, raised areas |
| text | `#F2F4F8` | Body and heading text |
| textMuted | `#9AA3B5` | Secondary text, captions |
| primary | `#C8F169` | Main actions, links, brand colour |
| secondary | `#FFB86B` | Highlights, charts, second accent |
| border | `#272B35` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#5A6C35` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 17.16:1 | pass | pass |
| Muted text on background | 7.45:1 | pass | pass |
| Primary on background | 14.62:1 | pass | pass |
| Text on primary | 15.19:1 | pass | pass |
| Text on surface | 15.65:1 | pass | pass |

**Colours seen on the page** (share of use): `#0F1115` 89.6%, `#1D212B` 7.9%, `#1D2214` 1.2%, `#F2F4F8` 0.6%, `#C8F169` 0.5%, `#9AA3B5` 0.1%, `#D6DBE6` 0.1%, `#FFB86B` 0.0%, `#586070` 0.0%, `#5A6C35` 0.0%

## Typography

- Headings: **Bricolage Grotesque** (weight 800)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@500;700;800&family=Inter:wght@400;500;600&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Bricolage Grotesque | 60 px | 800 | 61.2px | -1.8px |
| Heading / H2 | Bricolage Grotesque | 22 px | 700 | normal | normal |
| Body | Inter | 16 px | 400 | 24.8px | normal |
| Button | Inter | 15 px | 600 | normal | normal |
| Caption / eyebrow | Inter | 14 px | 500 | normal | normal |

## Shape, space and motion

- Radius: sm 14 px, md 20 px, lg 22 px, pill (fully rounded)
- Shadows: sm: `rgb(200, 241, 105) 0px 0px 0px 1px, rgba(200, 241, 105, 0.1) 0px 24px 60px 0px` · md: `rgb(200, 241, 105) 0px 0px 0px 1px, rgba(200, 241, 105, 0.1) 0px 24px 60px 0px` · lg: `rgb(200, 241, 105) 0px 0px 0px 1px, rgba(200, 241, 105, 0.1) 0px 24px 60px 0px`
- Spacing: base unit 2 px; common steps 2 px, 3 px, 6 px, 8 px, 10 px, 14 px, 16 px, 18 px, 20 px
- Layout: container 1120 px; breakpoints 900 px
- Motion: 250 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** confident, transparent, upbeat.

Sounds like a pricing page written by someone who hates hidden fees: clear, a touch cheeky and generous with specifics. Plans are explained by what the team can do, with limits stated up front.

**Do**

- State price, limits and billing period together
- Use team-size language
- Say what the free trial includes

**Do not**

- Do not hide limits in tooltips only
- Do not use contact-sales as a wall
- Do not make 20% savings sound like a catch

## Taglines

1. Pricing that scales with your team
2. Start small, grow without surprises
3. Pick a plan, change it any time
4. Every feature, every plan, laid out
5. Fair prices for growing teams

**Boilerplate:** Cadence Cloud is a team workspace sold on three plans, Starter, Team and Scale, each with unlimited projects, a 14-day trial and a clear comparison of every feature.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Start free trial |
| secondaryCta | Talk to sales |
| success | Trial started. Welcome aboard. |
| error | We couldn't start your trial. Please try again. |
| empty | No plan matches yet. Adjust team size. |

---
Source listing key `o:pricing-compare`. Rebuild with `python3 scripts/brand-kit/build.py o:pricing-compare`.
