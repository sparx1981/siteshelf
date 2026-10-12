# Aethera — brand kit

*Digital studio building havens for deep work.* Generated from the SiteShelf listing **Aethera Studio** (Hero Section); every value below is read from that page, not invented.

> **Beyond silence, we build the eternal**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Instrument Serif |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **peak** glyph on a circle tile. A high peak rising from open space suggests a haven and an eternal summit. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#FFFFFF` | Page background |
| surface | `#000000` | Cards, panels, raised areas |
| text | `#6F6F6F` | Body and heading text |
| textMuted | `#000000` | Secondary text, captions |
| primary | `#6F6F6F` | Main actions, links, brand colour |
| secondary | `#B0B0B0` | Highlights, charts, second accent |
| border | `#EBEBEB` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#B0B0B0` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 5.02:1 | pass | pass |
| Muted text on background | 21.00:1 | pass | pass |
| Primary on background | 5.02:1 | pass | pass |
| Text on primary | 5.02:1 | pass | pass |
| Text on surface | 4.18:1 | fail | pass |

**Colours seen on the page** (share of use): `#FFFFFF` 98.4%, `#000000` 1.3%, `#6F6F6F` 0.3%, `#B0B0B0` 0.0%, `#EBEBEB` 0.0%

## Typography

- Headings: **Instrument Serif** (weight 400)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Instrument+Serif:ital@0;1&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Instrument Serif | 96 px | 400 | 91.2px | -2.46px |
| Body | Inter | 18 px | 400 | 29.7px | normal |
| Navigation | Instrument Serif | 30 px | 400 | 30px | -0.75px |

## Shape, space and motion

- Radius: sm 0 px, md 0 px, lg 0 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 2 px, 8 px, 10 px, 16 px, 20 px, 24 px, 32 px, 48 px, 53 px
- Layout: container 1280 px; breakpoints 480 px, 640 px, 768 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** serene, minimal, assured.

A calm creative director speaking in short, elegant lines: poised, spare and a little philosophical. Silence is treated as a design material.

**Do**

- Use short sentences with room around them
- Refer to work in terms of focus, craft and flow
- Choose one strong noun over two adjectives

**Do not**

- Agency hype like game-changing
- Busy, technical language
- Exclamation marks

## Taglines

1. Beyond silence, we build the eternal
2. Digital havens for deep work
3. Craft for brilliant minds
4. Quiet platforms, lasting impact
5. Where noise ends and flow begins

**Boilerplate:** Aethera is a digital studio building platforms for brilliant minds, fearless makers and thoughtful souls, crafted as quiet havens for deep work and pure flow.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Enter the studio |
| secondaryCta | Our approach |
| success | Message received. We'll reply soon |
| error | That didn't send. Please try again |
| empty | No projects to show yet |

---
Source listing key `m:aethera-studio`. Rebuild with `python3 scripts/brand-kit/build.py m:aethera-studio`.
