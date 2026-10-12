# Terra — brand kit

*Geo-mapping platform for teams.* Generated from the SiteShelf listing **Terra Geo Map** (SaaS); every value below is read from that page, not invented.

> **The ultimate geomap builder**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **globe** glyph on a circle tile. A globe is the obvious symbol for a map builder. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#FFFFFF` | Page background |
| surface | `#DBE8F4` | Cards, panels, raised areas |
| text | `#5B6475` | Body and heading text |
| textMuted | `#DC2626` | Secondary text, captions |
| primary | `#2E7DF3` | Main actions, links, brand colour |
| secondary | `#DC2626` | Highlights, charts, second accent |
| border | `#E5E7EB` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#1A3B6F` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 5.96:1 | pass | pass |
| Muted text on background | 4.83:1 | pass | pass |
| Primary on background | 3.93:1 | fail | pass |
| Text on primary | 5.00:1 | pass | pass |
| Text on surface | 4.78:1 | pass | pass |

**Colours seen on the page** (share of use): `#FFFFFF` 85.1%, `#DBE8F4` 13.9%, `#2E7DF3` 0.4%, `#B0B0B0` 0.3%, `#767676` 0.1%, `#D3D3D3` 0.1%, `#5B6475` 0.1%, `#DC2626` 0.0%, `#60A5FA` 0.0%, `#0F172A` 0.0%

## Typography

- Headings: **Inter** (weight 500)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Inter | 72 px | 500 | 77.76px | -2.52px |
| Body | Inter | 18 px | 400 | 28.8px | normal |
| Button | Inter | 14 px | 500 | normal | normal |
| Navigation | Inter | 20 px | 700 | normal | -0.2px |
| Caption / eyebrow | Inter | 10 px | 600 | 11.5px | 0.5px |

## Shape, space and motion

- Radius: sm 8 px, md 12 px, lg 12 px, pill (fully rounded)
- Shadows: sm: `rgba(46, 125, 243, 0.2) 0px 10px 24px 0px` · md: `rgba(46, 125, 243, 0.2) 0px 10px 24px 0px` · lg: `rgba(46, 125, 243, 0.2) 0px 10px 24px 0px`
- Spacing: base unit 4 px; common steps 2 px, 4 px, 6 px, 8 px, 10 px, 12 px, 16 px, 20 px, 32 px
- Layout: container 1280 px; breakpoints 768 px, 1024 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** clear, collaborative, confident.

Sounds like a friendly GIS expert: practical, upbeat and impatient with jargon. It focuses on teams building maps together.

**Do**

- Speak about maps as shared work
- Use verbs: design, collaborate, share
- Define spatial terms once

**Do not**

- No GIS jargon without a gloss
- No hype about intelligence
- No vague 'unlock insights' claims

## Taglines

1. The ultimate geomap builder
2. Build maps together
3. Design, collaborate, share
4. Spatial intelligence for teams
5. Maps that move your work

**Boilerplate:** Terra is a geo-mapping platform where teams design maps, collaborate on spatial intelligence and share their work with everyone in one place.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Get started |
| secondaryCta | See examples |
| success | Map published |
| error | We could not load that layer, try again |
| empty | No maps yet, create your first |

---
Source listing key `m:terra-geo-map`. Rebuild with `python3 scripts/brand-kit/build.py m:terra-geo-map`.
