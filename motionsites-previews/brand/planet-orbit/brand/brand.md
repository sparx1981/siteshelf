# APEX — brand kit

*Revenue growth platform for sales teams.* Generated from the SiteShelf listing **Planet Orbit** (SaaS); every value below is read from that page, not invented.

> **Accelerate your revenue growth now**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter Bold (stand-in for Geist) |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **rocket** glyph on a squircle tile. A rocket suits growth and acceleration, and works against a dark planetary backdrop. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#05010E` | Page background |
| surface | `#88FC8A` | Cards, panels, raised areas |
| text | `#F3F3F1` | Body and heading text |
| textMuted | `#D4D2CE` | Secondary text, captions |
| primary | `#88FC8A` | Main actions, links, brand colour |
| secondary | `#4B8B4C` | Highlights, charts, second accent |
| border | `#313135` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#4B8B4C` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 18.58:1 | pass | pass |
| Muted text on background | 13.67:1 | pass | pass |
| Primary on background | 16.06:1 | pass | pass |
| Text on primary | 15.28:1 | pass | pass |
| Text on surface | 1.16:1 | fail | fail |

**Colours seen on the page** (share of use): `#05010E` 99.4%, `#88FC8A` 0.5%, `#F3F3F1` 0.1%, `#D4D2CE` 0.1%, `#27272A` 0.0%, `#4B8B4C` 0.0%

## Typography

- Headings: **Geist** (weight 600)
- Body: **Geist**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Geist | 72 px | 600 | 75.6px | -1.8px |
| Body | Geist | 18 px | 400 | 32px | normal |
| Button | Geist | 16 px | 400 | normal | normal |
| Navigation | Geist | 16 px | 400 | normal | normal |

## Shape, space and motion

- Radius: sm 8 px, md 12 px, lg 24 px, pill (fully rounded)
- Shadows: sm: `rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset` · md: `rgba(136, 252, 138, 0.25) 0px 0px 28px 0px` · lg: `rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset`
- Spacing: base unit 4 px; common steps 2 px, 4 px, 8 px, 12 px, 16 px, 20 px, 24 px, 32 px, 48 px
- Layout: container 1024 px; breakpoints 640 px, 700 px, 768 px, 1024 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** driven, sharp, practical.

APEX talks like a sales operator who respects time: short, active and focused on pipeline. It names workflows and lead stages directly.

**Do**

- Lead with the growth outcome
- Name workflows, funnels and leads plainly
- Use active verbs: drive, track, close

**Do not**

- Do not use buzzwords like synergy
- Avoid vague claims of growth
- Never promise guaranteed revenue

## Taglines

1. Accelerate your revenue growth now
2. Drive the funnel forward
3. Leads in, revenue out
4. Workflows that close deals
5. Grow faster, with fewer tools

**Boilerplate:** APEX is a revenue growth platform that helps sales teams drive their funnel with clever workflows, analytics and seamless lead management.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Start Free Right Now |
| secondaryCta | Schedule a Consult |
| success | You are signed up. Welcome aboard. |
| error | Could not sign you up. Please try again. |
| empty | No leads yet. Import some to begin. |

---
Source listing key `m:planet-orbit`. Rebuild with `python3 scripts/brand-kit/build.py m:planet-orbit`.
