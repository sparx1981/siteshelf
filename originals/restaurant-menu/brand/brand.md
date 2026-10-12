# Ember & Olive — brand kit

*Wood-fired restaurant serving Mediterranean plates.* Generated from the SiteShelf listing **Restaurant Menu** (Landing Page); every value below is read from that page, not invented.

> **Fire, olive oil and good company**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Cormorant Garamond |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **flame** glyph on a squircle tile. A flame suits a wood-fired kitchen and the amber of the page. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#1A1410` | Page background |
| surface | `#28221E` | Cards, panels, raised areas |
| text | `#B8A88F` | Body and heading text |
| textMuted | `#F3E9D8` | Secondary text, captions |
| primary | `#E07A3F` | Main actions, links, brand colour |
| secondary | `#EEB695` | Highlights, charts, second accent |
| border | `#E07A3F` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#643A23` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 7.85:1 | pass | pass |
| Muted text on background | 15.16:1 | pass | pass |
| Primary on background | 6.10:1 | pass | pass |
| Text on primary | 6.57:1 | pass | pass |
| Text on surface | 6.75:1 | pass | pass |

**Colours seen on the page** (share of use): `#1A1410` 99.4%, `#B8A88F` 0.4%, `#F3E9D8` 0.2%, `#E07A3F` 0.0%, `#28221E` 0.0%, `#EEB695` 0.0%, `#643A23` 0.0%

## Typography

- Headings: **Cormorant Garamond** (weight 500)
- Body: **Jost**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&family=Jost:wght@400;500&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Cormorant Garamond | 64 px | 500 | 64px | -0.64px |
| Heading / H2 | Cormorant Garamond | 34 px | 600 | 37.4px | normal |
| Subheading / H3 | Cormorant Garamond | 24 px | 600 | 28.8px | normal |
| Body | Jost | 16 px | 400 | 24px | normal |
| Button | Jost | 15 px | 500 | normal | 1.8px |

## Shape, space and motion

- Radius: sm 4 px, md 4 px, lg 4 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 4 px, 6 px, 7 px, 8 px, 10 px, 12 px, 14 px, 16 px, 18 px
- Layout: container 1200 px; breakpoints 600 px
- Motion: 250 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** warm, sensual, assured.

Sounds like a host reading the evening menu: unhurried, appetising and precise about ingredients. Dishes are described by what's on the plate and how it was cooked, with a hint of fire.

**Do**

- Name the main ingredient and method in each dish
- Use warm sensory verbs like charred or slow-roasted
- Write allergens and dietary tags plainly

**Do not**

- Do not use foodie cliches like to die for
- Do not over-adjective
- Do not use ALL CAPS

## Taglines

1. Fire, olive oil and good company
2. Cooked slowly, served late
3. From the embers to your table
4. Open flame, open evenings
5. Eat well, stay late

**Boilerplate:** Ember & Olive is a wood-fired restaurant serving Mediterranean-inspired starters, mains and desserts from a charcoal grill, open Tuesday to Sunday from noon until late.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Starters |
| secondaryCta | Vegetarian |
| success | Filter applied. Showing vegetarian dishes. |
| error | The menu failed to load. Please refresh. |
| empty | Nothing matches those filters. Clear one to see more. |

---
Source listing key `o:restaurant-menu`. Rebuild with `python3 scripts/brand-kit/build.py o:restaurant-menu`.
