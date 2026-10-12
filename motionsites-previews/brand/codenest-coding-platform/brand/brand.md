# CodeNest — brand kit

*Online coding school with live mentors.* Generated from the SiteShelf listing **CodeNest Coding Platform** (Landing Page); every value below is read from that page, not invented.

> **Launch your coding career**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **chevrons** glyph on a squircle tile. Angle-bracket chevrons are the universal sign for code and for moving forward. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#070B0A` | Page background |
| surface | `#5ED29C` | Cards, panels, raised areas |
| text | `#FFFFFF` | Body and heading text |
| textMuted | `#5ED29C` | Secondary text, captions |
| primary | `#5ED29C` | Main actions, links, brand colour |
| secondary | `#347456` | Highlights, charts, second accent |
| border | `#2A2D2C` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#347456` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 19.79:1 | pass | pass |
| Muted text on background | 10.53:1 | pass | pass |
| Primary on background | 10.53:1 | pass | pass |
| Text on primary | 10.45:1 | pass | pass |
| Text on surface | 1.88:1 | fail | fail |

**Colours seen on the page** (share of use): `#070B0A` 99.5%, `#5ED29C` 0.3%, `#FFFFFF` 0.2%, `#347456` 0.0%, `#2A2D2C` 0.0%

## Typography

- Headings: **Inter** (weight 800)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Instrument+Serif:ital@1&family=Plus+Jakarta+Sans:wght@700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Inter | 72 px | 800 | 70.56px | -2.16px |
| Heading / H2 | Inter | 18 px | 500 | 21.6px | -0.18px |
| Body | Inter | 11 px | 400 | 15.95px | normal |
| Navigation | Inter | 18 px | 700 | normal | 0.36px |
| Caption / eyebrow | Plus Jakarta Sans | 11 px | 700 | normal | 2.2px |

## Shape, space and motion

- Radius: sm 24 px, md 24 px, lg 24 px, pill (fully rounded)
- Shadows: sm: `rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset` · md: `rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset` · lg: `rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset`
- Spacing: base unit 2 px; common steps 6 px, 10 px, 12 px, 14 px, 15 px, 18 px, 22 px, 24 px, 40 px
- Layout: container 1440 px; breakpoints 480 px, 900 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** driven, approachable, professional.

CodeNest sounds like a senior engineer who volunteers as a mentor: practical, encouraging and clear about the work ahead. It trades hype for real projects and real feedback.

**Do**

- Name concrete outcomes, such as portfolio projects
- Credit mentors by what they ship
- Speak in plain, direct sentences

**Do not**

- Promise guaranteed jobs
- Use bootcamp hype
- Write in developer jargon the learner may not know

## Taglines

1. Launch your coding career
2. Learn from people who ship
3. Code, review, repeat, get hired
4. Build the portfolio first
5. Mentors who build for a living

**Boilerplate:** CodeNest is an online coding school where learners build portfolio projects with live mentoring and code reviews from working engineers.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Start learning |
| secondaryCta | View projects |
| success | Welcome to CodeNest. Your first project awaits. |
| error | Something went wrong. Please try again. |
| empty | No projects yet. Pick your first. |

---
Source listing key `m:codenest-coding-platform`. Rebuild with `python3 scripts/brand-kit/build.py m:codenest-coding-platform`.
