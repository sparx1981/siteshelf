# Driftwave — brand kit

*Asynchronous standups for remote teams.* Generated from the SiteShelf listing **SaaS Landing — Aurora Gradient** (Landing Page); every value below is read from that page, not invented.

> **Standups that do not need a meeting**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Manrope |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **wave** glyph. A drifting wave suggests updates flowing across time zones. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#07070D` | Page background |
| surface | `#11111B` | Cards, panels, raised areas |
| text | `#9A9AB8` | Body and heading text |
| textMuted | `#F4F4FB` | Secondary text, captions |
| primary | `#22D3EE` | Main actions, links, brand colour |
| secondary | `#6D5DFC` | Highlights, charts, second accent |
| border | `#23233A` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#6D5DFC` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 7.36:1 | pass | pass |
| Muted text on background | 18.35:1 | pass | pass |
| Primary on background | 11.12:1 | pass | pass |
| Text on primary | 10.87:1 | pass | pass |
| Text on surface | 6.87:1 | pass | pass |

**Colours seen on the page** (share of use): `#07070D` 80.7%, `#6D5DFC` 6.5%, `#22D3EE` 6.1%, `#F472B6` 5.5%, `#1A1740` 0.5%, `#9A9AB8` 0.2%, `#F4F4FB` 0.2%, `#8B5CF6` 0.1%, `#D5D5EA` 0.1%, `#A78BFA` 0.0%

## Typography

- Headings: **Manrope** (weight 800)
- Body: **Manrope**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700;800&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Manrope | 84 px | 800 | 85.68px | -2.94px |
| Heading / H2 | Manrope | 48 px | 800 | 52.8px | -1.2px |
| Subheading / H3 | Manrope | 20 px | 800 | normal | normal |
| Body | Manrope | 19 px | 400 | 30.4px | normal |
| Button | Manrope | 15 px | 700 | normal | normal |
| Navigation | Manrope | 21 px | 800 | normal | normal |
| Caption / eyebrow | Manrope | 14.2 px | 400 | 22.6667px | normal |

## Shape, space and motion

- Radius: sm 8 px, md 14 px, lg 20 px, pill (fully rounded)
- Shadows: sm: `rgba(109, 93, 252, 0.2) 0px 40px 90px 0px` · md: `rgba(109, 93, 252, 0.2) 0px 40px 90px 0px` · lg: `rgba(109, 93, 252, 0.2) 0px 40px 90px 0px`
- Spacing: base unit 2 px; common steps 6 px, 8 px, 10 px, 12 px, 14 px, 16 px, 17 px, 18 px, 20 px
- Layout: container 1120 px; breakpoints 800 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** breezy, sharp, unpretentious.

Driftwave sounds like a pragmatic team lead who hates a meeting that could be a message. It is crisp, a little wry and always specific about the time it gives back.

**Do**

- Name the saved meeting or minutes
- Use plain verbs: collect, write, surface
- Keep jokes to a clause

**Do not**

- Do not say 'synergy' or 'alignment'
- Do not claim to replace every meeting
- Do not use hype adjectives

## Taglines

1. Standups that do not need a meeting
2. Updates in, digest out
3. Blockers surfaced before they cost a day
4. Three minutes to your first digest
5. Cancel your next standup

**Boilerplate:** Driftwave is an asynchronous standup tool for remote teams that collects updates, writes the digest and surfaces blockers before they cost a day.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Start free |
| secondaryCta | Sign in |
| success | Standup sent. Your digest lands at 9:00. |
| error | We could not post your update. Draft saved, try again. |
| empty | No updates yet. Your team's first one will land here. |

---
Source listing key `o:saas-landing-gradient`. Rebuild with `python3 scripts/brand-kit/build.py o:saas-landing-gradient`.
