# Crewhouse — brand kit

*HR and payroll for remote teams.* Generated from the SiteShelf listing **HR SaaS Hero** (SaaS); every value below is read from that page, not invented.

> **Simple management for your remote team**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter Bold (stand-in for Geist) |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **globe** glyph on a circle tile. A globe expresses a team spread across borders. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#FFFFFF` | Page background |
| surface | `#3A3D47` | Cards, panels, raised areas |
| text | `#14161F` | Body and heading text |
| textMuted | `#373A46` | Secondary text, captions |
| primary | `#F5A524` | Main actions, links, brand colour |
| secondary | `#8A4CF0` | Highlights, charts, second accent |
| border | `#DEDEE0` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#8A4CF0` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 18.04:1 | pass | pass |
| Muted text on background | 11.31:1 | pass | pass |
| Primary on background | 2.04:1 | fail | fail |
| Text on primary | 9.63:1 | pass | pass |
| Text on surface | 1.66:1 | fail | fail |

**Colours seen on the page** (share of use): `#FFFFFF` 99.7%, `#14161F` 0.1%, `#373A46` 0.1%, `#E8F0FF` 0.0%, `#FFE9E0` 0.0%, `#F5A524` 0.0%, `#8A4CF0` 0.0%, `#F0623B` 0.0%, `#3B6CF0` 0.0%, `#1FA45A` 0.0%

## Typography

- Headings: **Geist** (weight 500)
- Body: **Geist**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&family=Inter:wght@400;500;600&family=Instrument+Serif:ital@1&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Geist | 80 px | 500 | 84px | -3.2px |
| Body | Geist | 18 px | 400 | 27.9px | normal |
| Button | Geist | 16 px | 500 | normal | normal |

## Shape, space and motion

- Radius: sm 0 px, md 0 px, lg 0 px, pill (fully rounded)
- Shadows: sm: `rgba(0, 0, 0, 0.08) 0px 2px 6px 0px` · md: `rgba(201, 201, 201, 0.08) -4px -6px 25px 0px inset, rgba(29, 29, 29, 0.24) 4px 4px 10px 0px inset, rgba(20, 22, 31, 0.22) 0px 6px 16px 0px` · lg: `rgba(194, 194, 194, 0.25) 0px 10px 40px 5px`
- Spacing: base unit 4 px; common steps 2 px, 8 px, 12 px, 14 px, 24 px, 32 px
- Layout: container 1200 px; breakpoints 560 px, 900 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** steady, human, calm.

Crewhouse speaks like a competent people-ops lead who wants everyone paid and happy. It is calm, practical and respectful of borders and time zones.

**Do**

- Name the task: hire, onboard, pay
- Mention countries and currencies precisely
- Use people-first words like crew and team

**Do not**

- Do not use 'human capital'
- Do not hide compliance details
- Do not promise 'zero admin'

## Taglines

1. Simple management for your remote team
2. Hire, onboard and pay across borders
3. One calm workspace for your crew
4. Contracts, payroll and time-off, sorted
5. Distributed teams, close to home

**Boilerplate:** Crewhouse is a workspace for hiring, onboarding and paying distributed teams, with contracts, time-off and payroll that work across borders.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Create free account |
| secondaryCta | See pricing |
| success | Account created. Welcome aboard. |
| error | We could not create your account. Check your email and try again. |
| empty | No team members yet. Invite your first hire. |

---
Source listing key `m:hr-saas-hero`. Rebuild with `python3 scripts/brand-kit/build.py m:hr-saas-hero`.
