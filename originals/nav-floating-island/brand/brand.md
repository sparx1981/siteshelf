# Orbit Studio — brand kit

*Studio designing calm, useful software.* Generated from the SiteShelf listing **Floating Island Nav** (Navigation); every value below is read from that page, not invented.

> **We shape calm digital products**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Sora |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **orbit** glyph. An orbit stands for a small studio circling around a client's needs. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F3F1EC` | Page background |
| surface | `#E8EEF5` | Cards, panels, raised areas |
| text | `#15171C` | Body and heading text |
| textMuted | `#4A4D57` | Secondary text, captions |
| primary | `#FF6A3D` | Main actions, links, brand colour |
| secondary | `#FFAD94` | Highlights, charts, second accent |
| border | `#D4D2CF` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#713322` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 15.88:1 | pass | pass |
| Muted text on background | 7.47:1 | pass | pass |
| Primary on background | 2.52:1 | fail | fail |
| Text on primary | 6.90:1 | pass | pass |
| Text on surface | 15.35:1 | pass | pass |

**Colours seen on the page** (share of use): `#F3F1EC` 95.4%, `#FFFFFF` 3.8%, `#15171C` 0.6%, `#4A4D57` 0.1%, `#AAA69B` 0.0%, `#FF6A3D` 0.0%, `#FF9A78` 0.0%, `#C9C5BB` 0.0%, `#FFAD94` 0.0%, `#D4D2CF` 0.0%

## Typography

- Headings: **Sora** (weight 700)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Sora:wght@600;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Sora | 88 px | 700 | 88px | -2.64px |
| Heading / H2 | Sora | 60 px | 700 | 60px | -1.8px |
| Body | Inter | 19 px | 400 | 30.4px | normal |
| Button | Arial | 13.3 px | 400 | normal | normal |
| Navigation | Sora | 18 px | 700 | normal | normal |

## Shape, space and motion

- Radius: sm 14 px, md 20 px, lg 26 px, pill (fully rounded)
- Shadows: sm: `rgb(255, 106, 61) 0px 0px 10px 0px` · md: `rgba(0, 0, 0, 0.45) 0px 14px 40px -10px` · lg: `rgb(255, 106, 61) 0px 0px 10px 0px`
- Spacing: base unit 4 px; common steps 6 px, 8 px, 12 px, 16 px, 19 px, 20 px, 24 px, 40 px, 86 px
- Layout: container 1200 px; breakpoints 700 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** unhurried, thoughtful, deft.

Orbit Studio writes like a small studio that prefers to be useful rather than loud. Copy is short, plainly confident and ready to step aside so the work can speak.

**Do**

- Start with the work and the person it helps
- Keep introductions to two sentences
- Use plain verbs: shape, build, ship

**Do not**

- Do not use 'digital transformation'
- Do not list tools or frameworks in the intro
- Do not claim to be 'passionate'

## Taglines

1. We shape calm digital products
2. Useful software, quietly made
3. A small studio on purpose
4. Design that gets out of the way
5. Better things to do? Us too

**Boilerplate:** Orbit Studio is a small design and engineering studio that builds quiet, useful software for people who have better things to do.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Let's talk |
| secondaryCta | See selected work |
| success | Message sent. We will be in touch this week. |
| error | That did not send. Email hello@orbit.studio instead. |
| empty | No journal posts yet. Check back soon. |

---
Source listing key `o:nav-floating-island`. Rebuild with `python3 scripts/brand-kit/build.py o:nav-floating-island`.
