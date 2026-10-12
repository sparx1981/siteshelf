# Lakeside Collective — brand kit

*Twelve-person creative collective.* Generated from the SiteShelf listing **Team Profile Cards** (Cards); every value below is read from that page, not invented.

> **Twelve humans, one collective**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Fraunces |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **drop** glyph on a squircle tile. A drop of lake water is a quiet symbol for a local, friendly group. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F3F1EC` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#6C6862` | Body and heading text |
| textMuted | `#1C1B1A` | Secondary text, captions |
| primary | `#0F766E` | Main actions, links, brand colour |
| secondary | `#FBBF24` | Highlights, charts, second accent |
| border | `#E6E2D9` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#FBBF24` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 4.90:1 | pass | pass |
| Muted text on background | 15.24:1 | pass | pass |
| Primary on background | 4.85:1 | pass | pass |
| Text on primary | 5.47:1 | pass | pass |
| Text on surface | 5.53:1 | pass | pass |

**Colours seen on the page** (share of use): `#F3F1EC` 51.0%, `#FFFFFF` 32.1%, `#0F766E` 16.3%, `#6C6862` 0.2%, `#1C1B1A` 0.2%, `#000000` 0.0%, `#34D399` 0.0%, `#4338CA` 0.0%, `#A78BFA` 0.0%, `#BE185D` 0.0%

## Typography

- Headings: **Fraunces** (weight 600)
- Body: **Manrope**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Fraunces:wght@600&family=Manrope:wght@400;500;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Fraunces | 46 px | 600 | 48.3px | -0.46px |
| Subheading / H3 | Fraunces | 20 px | 600 | 23px | normal |
| Body | Manrope | 14 px | 400 | 21px | normal |
| Button | Manrope | 13 px | 700 | normal | normal |

## Shape, space and motion

- Radius: sm 8 px, md 10 px, lg 20 px, pill (fully rounded)
- Shadows: sm: `rgba(0, 0, 0, 0.04) 0px 1px 2px 0px` · md: `rgba(0, 0, 0, 0.04) 0px 1px 2px 0px` · lg: `rgba(0, 0, 0, 0.04) 0px 1px 2px 0px`
- Spacing: base unit 2 px; common steps 3 px, 4 px, 6 px, 8 px, 9 px, 10 px, 14 px, 16 px, 20 px
- Layout: container 1100 px; breakpoints 520 px
- Motion: 250 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** friendly, communal, unfussy.

Lakeside Collective talks like a neighbourly studio that knows each member by name and favourite biscuit. It is casual, inclusive and light on job-title ceremony.

**Do**

- Introduce people by what they like doing
- Use first names
- Keep job titles plain

**Do not**

- Do not call anyone a 'guru' or 'wizard'
- Do not use corporate org-chart language
- Do not hide contact details

## Taglines

1. Twelve humans, one collective
2. Say hello to the people of Lakeside
3. Meet the people behind the work
4. A team you can actually contact
5. Small crew, big kettle

**Boilerplate:** Lakeside Collective is a twelve-person creative collective covering design, engineering, support and operations, with an open directory of its people.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Say hello |
| secondaryCta | Follow |
| success | Following Ines. That is 42 people. |
| error | We could not follow that person. Try again in a moment. |
| empty | No one matches that filter. Try another team. |

---
Source listing key `o:profile-cards`. Rebuild with `python3 scripts/brand-kit/build.py o:profile-cards`.
