# Orbit Analytics — brand kit

*Behaviour analytics for product teams.* Generated from the SiteShelf listing **Particle Constellation Hero** (Hero Section); every value below is read from that page, not invented.

> **See the shape of your users**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Sora |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **orbit** glyph on a circle tile. Orbit lines match the connected, drifting particles in the hero. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#070B1A` | Page background |
| surface | `#0E1533` | Cards, panels, raised areas |
| text | `#B8C2E6` | Body and heading text |
| textMuted | `#FFFFFF` | Secondary text, captions |
| primary | `#6EE7F9` | Main actions, links, brand colour |
| secondary | `#B8C2E6` | Highlights, charts, second accent |
| border | `#6EE7F9` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#356771` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 11.10:1 | pass | pass |
| Muted text on background | 19.59:1 | pass | pass |
| Primary on background | 13.49:1 | pass | pass |
| Text on primary | 13.53:1 | pass | pass |
| Text on surface | 10.14:1 | pass | pass |

**Colours seen on the page** (share of use): `#070B1A` 82.3%, `#0E1533` 16.5%, `#6EE7F9` 0.6%, `#A78BFA` 0.3%, `#B8C2E6` 0.1%, `#FFFFFF` 0.1%, `#A9F1FB` 0.0%, `#356771` 0.0%

## Typography

- Headings: **Sora** (weight 700)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Sora:wght@300;600;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Sora | 88 px | 700 | 89.76px | -2.64px |
| Body | Inter | 18 px | 400 | 28.8px | normal |
| Button | Inter | 14 px | 500 | normal | normal |
| Navigation | Inter | 15 px | 400 | 24px | normal |

## Shape, space and motion

- Radius: sm 0 px, md 0 px, lg 0 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 2 px; common steps 6 px, 10 px, 12 px, 14 px, 16 px, 18 px, 22 px, 30 px, 40 px
- Layout: container 1100 px; breakpoints 720 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** insightful, modern, precise.

Sounds like a smart analyst explaining a pattern: plain, confident, light on buzzwords. It speaks of shape, patterns and people rather than dashboards.

**Do**

- Talk about users as people with patterns
- Lead with the insight, then the data
- Keep sentences under 18 words

**Do not**

- No big-data buzzwords
- No vague AI claims
- No inflated ROI numbers

## Taglines

1. See the shape of your users
2. Patterns before problems
3. Events become maps
4. Behaviour, made visible
5. Know your users in orbit

**Boilerplate:** Orbit Analytics turns raw product events into living maps of user behaviour, so teams can spot patterns before they become problems.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Start free |
| secondaryCta | Watch the tour |
| success | Event stream connected |
| error | We could not connect to your data source, retry |
| empty | No events yet, send your first one |

---
Source listing key `o:particle-hero`. Rebuild with `python3 scripts/brand-kit/build.py o:particle-hero`.
