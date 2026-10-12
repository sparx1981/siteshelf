# Northfold — brand kit

*Independent design and engineering studio.* Generated from the SiteShelf listing **Team Page** (About Page); every value below is read from that page, not invented.

> **Eleven people who care about the details**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Fraunces |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **peak** glyph. A simple peak echoes the north in the name and a studio aiming high without noise. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F3EFE8` | Page background |
| surface | `#1C1B19` | Cards, panels, raised areas |
| text | `#1C1B19` | Body and heading text |
| textMuted | `#6F6A60` | Secondary text, captions |
| primary | `#F2B134` | Main actions, links, brand colour |
| secondary | `#3B6EA5` | Highlights, charts, second accent |
| border | `#1C1B19` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#3B6EA5` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 15.02:1 | pass | pass |
| Muted text on background | 4.69:1 | pass | pass |
| Primary on background | 1.65:1 | fail | fail |
| Text on primary | 10.40:1 | pass | pass |
| Text on surface | 1.00:1 | fail | fail |

**Colours seen on the page** (share of use): `#F3EFE8` 56.6%, `#1C1B19` 26.3%, `#E4572E` 3.6%, `#F2B134` 2.5%, `#3B6EA5` 2.4%, `#7A9E7E` 2.4%, `#B08BBB` 2.4%, `#000000` 2.1%, `#FFFFFF` 1.8%, `#B9B2A3` 0.1%

## Typography

- Headings: **Fraunces** (weight 700)
- Body: **Manrope**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,600;0,700;1,500&family=Manrope:wght@400;500;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Fraunces | 96 px | 700 | 96px | -2.88px |
| Heading / H2 | Fraunces | 32 px | 700 | 36.8px | -0.64px |
| Subheading / H3 | Fraunces | 22 px | 700 | normal | normal |
| Body | Manrope | 19 px | 400 | 30.4px | normal |
| Button | Manrope | 14 px | 700 | normal | normal |
| Caption / eyebrow | Manrope | 11.7 px | 400 | 17.5px | normal |

## Shape, space and motion

- Radius: sm 18 px, md 18 px, lg 18 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 6 px, 8 px, 12 px, 14 px, 16 px, 18 px, 20 px, 24 px, 44 px
- Layout: container 1160 px; breakpoints 700 px, 1000 px
- Motion: 300 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** thoughtful, direct, collegial.

Northfold speaks like an experienced studio lead: relaxed, specific and proud of being small. It describes people by what they actually do on projects and keeps the language light on titles.

**Do**

- Describe teammates by the work they do
- Use 'we' and mention team size honestly
- Be specific about how projects are run

**Do not**

- Do not use agency boilerplate
- Avoid inflated titles like 'guru'
- Never hide who works on a client project

## Taglines

1. Eleven people who care about the details
2. Small team, everyone knows the project
3. Design and engineering, side by side
4. Craft, kept small on purpose
5. Come and join us

**Boilerplate:** Northfold is an independent design and engineering studio of eleven people, deliberately small so that everyone working on a project truly knows it.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | See open roles |
| secondaryCta | Meet the team |
| success | Message sent. We will be in touch. |
| error | That did not send. Please try again. |
| empty | No one in this department yet. |

---
Source listing key `o:team-page`. Rebuild with `python3 scripts/brand-kit/build.py o:team-page`.
