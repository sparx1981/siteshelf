# Halo — brand kit

*Calm workspace for tasks, docs and chat.* Generated from the SiteShelf listing **Mesh Gradient Hero** (Hero Section); every value below is read from that page, not invented.

> **Software that feels like light**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Instrument Serif |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **aperture** glyph on a squircle tile. A soft aperture opens like light through a ring, echoing the name. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#FDF7F2` | Page background |
| surface | `#FFB48A` | Cards, panels, raised areas |
| text | `#1D1530` | Body and heading text |
| textMuted | `#3C3350` | Secondary text, captions |
| primary | `#1D1530` | Main actions, links, brand colour |
| secondary | `#FFB48A` | Highlights, charts, second accent |
| border | `#FFFFFF` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#FFB48A` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 16.44:1 | pass | pass |
| Muted text on background | 11.09:1 | pass | pass |
| Primary on background | 16.44:1 | pass | pass |
| Text on primary | 17.47:1 | pass | pass |
| Text on surface | 10.10:1 | pass | pass |

**Colours seen on the page** (share of use): `#FDF7F2` 42.4%, `#FFB48A` 14.4%, `#A98BFF` 13.1%, `#FF7AA8` 10.8%, `#7CC4FF` 9.8%, `#8BE8C4` 8.8%, `#1D1530` 0.6%, `#3C3350` 0.1%, `#4A4060` 0.0%

## Typography

- Headings: **Instrument Serif** (weight 400)
- Body: **DM Sans**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:wght@400;500;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Instrument Serif | 128 px | 400 | 121.6px | -2.56px |
| Body | DM Sans | 20 px | 400 | 30px | normal |
| Button | DM Sans | 15 px | 700 | normal | normal |
| Navigation | DM Sans | 15 px | 500 | 22.5px | normal |

## Shape, space and motion

- Radius: sm 20 px, md 50 px, lg 50 px, pill (fully rounded)
- Shadows: sm: `rgba(80, 40, 140, 0.12) 0px 10px 40px 0px` · md: `rgba(80, 40, 140, 0.14) 0px 18px 44px 0px` · lg: `rgba(80, 40, 140, 0.12) 0px 10px 40px 0px`
- Spacing: base unit 4 px; common steps 6 px, 7 px, 8 px, 9 px, 10 px, 16 px, 22 px, 24 px, 32 px
- Layout: container 1152 px; breakpoints 600 px, 900 px, 901 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** soft, luminous, assured.

Halo sounds like a quietly confident product designer introducing a tool they love. Its sentences are airy, warm and light on feature lists, and it favours feeling over specification.

**Do**

- Describe how the product feels before what it does
- Use light imagery sparingly: glow, ease, air
- Keep sentences under eighteen words

**Do not**

- Do not list integrations in the hero
- Do not use 'supercharge' or 'unleash'
- Do not shout the call to action

## Taglines

1. Software that feels like light
2. One calm place for the team
3. Tasks, docs and talk, together
4. Work that is a pleasure to open
5. Quiet speed for busy teams

**Boilerplate:** Halo brings a team's tasks, documents and conversations into one calm, fast workspace that people actually enjoy opening.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Join the waitlist |
| secondaryCta | See pricing |
| success | You are on the list. We will email you when Halo opens. |
| error | That email does not look right. Check it and try again. |
| empty | Nothing here yet. Your first task will glow here. |

---
Source listing key `o:mesh-gradient-hero`. Rebuild with `python3 scripts/brand-kit/build.py o:mesh-gradient-hero`.
