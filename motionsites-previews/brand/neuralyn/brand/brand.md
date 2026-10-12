# Neuralyn — brand kit

*Analytics dashboard for goals and metrics.* Generated from the SiteShelf listing **Neuralyn** (SaaS); every value below is read from that page, not invented.

> **Your insights, one clear overview**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **spark** glyph on a squircle tile. A spark suggests insight at the centre of the dashboard. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#000000` | Page background |
| surface | `#0D0F14` | Cards, panels, raised areas |
| text | `#FFFFFF` | Body and heading text |
| textMuted | `#F0F2F4` | Secondary text, captions |
| primary | `#071A4A` | Main actions, links, brand colour |
| secondary | `#C58C66` | Highlights, charts, second accent |
| border | `#FFFFFF` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#C58C66` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 21.00:1 | pass | pass |
| Muted text on background | 18.71:1 | pass | pass |
| Primary on background | 1.26:1 | fail | fail |
| Text on primary | 16.72:1 | pass | pass |
| Text on surface | 19.17:1 | pass | pass |

**Colours seen on the page** (share of use): `#000000` 89.5%, `#0D0F14` 5.3%, `#0A1A48` 2.0%, `#123A86` 2.0%, `#FFFFFF` 0.8%, `#595959` 0.1%, `#6B7080` 0.1%, `#262A35` 0.1%, `#7D8FB5` 0.0%, `#2A1A12` 0.0%

## Typography

- Headings: **Inter** (weight 500)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Instrument+Serif:ital@0;1&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Inter | 72 px | 500 | 82.8px | -2px |
| Body | Inter | 18 px | 400 | 24px | normal |
| Button | Inter | 14 px | 500 | 14px | normal |
| Navigation | Inter | 20 px | 700 | normal | -0.5px |
| Caption / eyebrow | Inter | 10 px | 400 | normal | normal |

## Shape, space and motion

- Radius: sm 4 px, md 8 px, lg 10 px, pill (fully rounded)
- Shadows: sm: `rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset` · md: `rgba(0, 0, 0, 0.5) 0px 30px 80px 0px` · lg: `rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset`
- Spacing: base unit 4 px; common steps 4 px, 6 px, 7 px, 8 px, 10 px, 12 px, 16 px, 32 px, 40 px
- Layout: container 1024 px; breakpoints 420 px, 700 px, 768 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** sharp, calm, precise.

Neuralyn writes like a data lead in a dark room: calm, exact and short on hype. It sets one clear overview above many numbers and uses one italic word for emphasis.

**Do**

- Lead with the single clear overview
- Use precise metric names
- Use italic for one word only

**Do not**

- Do not say 'AI-powered' without saying what it does
- Do not clutter the headline
- Do not use stock chart language

## Taglines

1. Your insights, one clear overview
2. Metrics, goals and progress in view
3. Precision for teams that measure
4. See the full picture, faster
5. Track what matters, ignore the rest

**Boilerplate:** Neuralyn is an analytics dashboard that helps teams track metrics, goals and progress with precision in a single clear overview.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Get started for free |
| secondaryCta | Sign in |
| success | Dashboard ready. Your first metrics are loading. |
| error | We could not connect that source. Check your key. |
| empty | No metrics yet. Connect a data source. |

---
Source listing key `m:neuralyn`. Rebuild with `python3 scripts/brand-kit/build.py m:neuralyn`.
