# Harbourlight — brand kit

*Uptime monitoring for small websites.* Generated from the SiteShelf listing **Tier Carousel Pricing** (Pricing); every value below is read from that page, not invented.

> **Know the moment your site goes down**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Outfit |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **pulse** glyph on a squircle tile. A pulse line symbolises uptime checks and reads like a lighthouse signal. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#07202B` | Page background |
| surface | `#0E3140` | Cards, panels, raised areas |
| text | `#E9F7F5` | Body and heading text |
| textMuted | `#9BC2C0` | Secondary text, captions |
| primary | `#20C9B0` | Main actions, links, brand colour |
| secondary | `#FF7A59` | Highlights, charts, second accent |
| border | `#3B7487` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#145B53` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 15.26:1 | pass | pass |
| Muted text on background | 8.69:1 | pass | pass |
| Primary on background | 8.03:1 | pass | pass |
| Text on primary | 9.39:1 | pass | pass |
| Text on surface | 12.46:1 | pass | pass |

**Colours seen on the page** (share of use): `#07202B` 67.0%, `#0E3140` 30.7%, `#20C9B0` 0.7%, `#12485A` 0.7%, `#E9F7F5` 0.5%, `#9BC2C0` 0.1%, `#FF7A59` 0.1%, `#2A5B6E` 0.0%, `#2A0D05` 0.0%, `#3B7487` 0.0%

## Typography

- Headings: **Outfit** (weight 700)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Outfit:wght@600;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Outfit | 64 px | 700 | 67.2px | -1.28px |
| Heading / H2 | Outfit | 24 px | 700 | normal | normal |
| Body | Inter | 16 px | 400 | 25.6px | normal |
| Button | Inter | 14 px | 600 | normal | normal |

## Shape, space and motion

- Radius: sm 14 px, md 26 px, lg 26 px, pill (fully rounded)
- Shadows: sm: `rgba(32, 201, 176, 0.6) 0px 30px 70px -30px` · md: `rgba(32, 201, 176, 0.6) 0px 30px 70px -30px` · lg: `rgba(32, 201, 176, 0.6) 0px 30px 70px -30px`
- Spacing: base unit 2 px; common steps 2 px, 4 px, 5 px, 6 px, 10 px, 12 px, 13 px, 14 px, 20 px
- Layout: container 1200 px; breakpoints 600 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** watchful, reassuring, nautical.

Harbourlight sounds like a lighthouse keeper with a pager: calm, specific and a little salty. It promises to know the moment your site goes down and to say so clearly.

**Do**

- Talk about sites going down and coming back in plain terms
- Name plans with boat names and give exact prices
- Use sea metaphors sparingly, one per page

**Do not**

- Do not use fear of downtime as a hook
- Avoid technical alerts jargon
- Never hide currency or billing period

## Taglines

1. Know the moment your site goes down
2. A light on your harbour
3. Alerts that arrive before customers do
4. Pick the plan that fits your harbour
5. Watch the coast, sleep soundly

**Boilerplate:** Harbourlight is an uptime monitoring service for small websites, with SSL checks and instant alerts on every plan, from a solo Dinghy to a team-ready Schooner.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Start free |
| secondaryCta | Choose Skiff |
| success | Plan chosen. Your first check runs now. |
| error | Could not switch currency. Please try again. |
| empty | No monitors yet. Add your first site. |

---
Source listing key `o:pricing-tier-carousel`. Rebuild with `python3 scripts/brand-kit/build.py o:pricing-tier-carousel`.
