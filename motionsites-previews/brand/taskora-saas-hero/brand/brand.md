# Taskora — brand kit

*Project, task and deadline management for teams.* Generated from the SiteShelf listing **Taskora SaaS Hero** (SaaS); every value below is read from that page, not invented.

> **Simplify your workflow. Stay focused**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **stack** glyph. Stacked layers represent tasks held neatly together. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#050505` | Page background |
| surface | `#F9F9FA` | Cards, panels, raised areas |
| text | `#FFFFFF` | Body and heading text |
| textMuted | `#8A8A93` | Secondary text, captions |
| primary | `#15803D` | Main actions, links, brand colour |
| secondary | `#9A6700` | Highlights, charts, second accent |
| border | `#ECECEF` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#9DCAAE` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 20.38:1 | pass | pass |
| Muted text on background | 5.96:1 | pass | pass |
| Primary on background | 4.06:1 | fail | pass |
| Text on primary | 5.02:1 | pass | pass |
| Text on surface | 1.05:1 | fail | fail |

**Colours seen on the page** (share of use): `#050505` 74.1%, `#F9F9FA` 23.5%, `#18181B` 1.1%, `#B9CDF5` 0.6%, `#E4E4E7` 0.3%, `#CFDDE8` 0.1%, `#E0EDFF` 0.1%, `#8A8A93` 0.1%, `#D4E4D0` 0.0%, `#FFF3D6` 0.0%

## Typography

- Headings: **Inter** (weight 500)
- Body: **Manrope**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Manrope:wght@400;500;600;700&family=Figtree:wght@500;600;700&family=Instrument+Serif:ital@1&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Inter | 80 px | 500 | 84px | -2.8px |
| Heading / H2 | Inter | 18 px | 600 | 27px | -0.18px |
| Subheading / H3 | Inter | 14 px | 600 | 21px | normal |
| Body | Manrope | 18 px | 400 | 27px | normal |
| Button | Inter | 14 px | 400 | 21px | normal |
| Navigation | Inter | 18 px | 600 | 27px | -0.18px |
| Caption / eyebrow | Inter | 12 px | 500 | 18px | normal |

## Shape, space and motion

- Radius: sm 3 px, md 10 px, lg 14 px, pill (fully rounded)
- Shadows: sm: `rgba(255, 255, 255, 0) 0px 0px 0px 0px` · md: `rgba(80, 140, 255, 0.18) 0px 40px 120px 0px` · lg: `rgba(255, 255, 255, 0) 0px 0px 0px 0px`
- Spacing: base unit 2 px; common steps 2 px, 3 px, 4 px, 6 px, 8 px, 10 px, 11 px, 12 px, 14 px
- Layout: container 900 px; breakpoints 640 px, 700 px, 820 px, 1024 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** clear, capable, calm.

A project lead who has simplified everything: clear, upbeat and no-fuss. It promises focus rather than features.

**Do**

- Name outcomes such as clarity and deadlines met
- Use simple verbs such as plan, assign and ship
- Keep headlines to two short sentences

**Do not**

- Enterprise jargon like synergise
- Feature dumping
- Bossy language

## Taglines

1. Simplify your workflow. Stay focused
2. Projects, tasks, deadlines, clear
3. Work that moves, teams that finish
4. Less juggling, more done
5. One place for the whole plan

**Boilerplate:** Taskora helps teams manage projects, tasks and deadlines with clarity, replacing scattered tools with one focused workspace.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Sign up |
| secondaryCta | Sign in |
| success | Welcome to Taskora. Let's plan |
| error | Check your email and password |
| empty | No tasks yet. Add your first |

---
Source listing key `m:taskora-saas-hero`. Rebuild with `python3 scripts/brand-kit/build.py m:taskora-saas-hero`.
