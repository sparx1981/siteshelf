# Casa Marren — brand kit

*Nine-room boutique hotel behind the old tobacco factory.* Generated from the SiteShelf listing **Doorway Zoom Hero** (Hero Section); every value below is read from that page, not invented.

> **Come in, the light is on**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Cormorant Garamond |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **home** glyph on a squircle tile. An arched door shape inside a home outline mirrors the doorway on the page. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#2A1D16` | Page background |
| surface | `#D9C9B4` | Cards, panels, raised areas |
| text | `#D9C9B4` | Body and heading text |
| textMuted | `#F7ECDC` | Secondary text, captions |
| primary | `#F6C98A` | Main actions, links, brand colour |
| secondary | `#8A4B2A` | Highlights, charts, second accent |
| border | `#F7ECDC` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#8A4B2A` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 10.08:1 | pass | pass |
| Muted text on background | 13.99:1 | pass | pass |
| Primary on background | 10.61:1 | pass | pass |
| Text on primary | 12.76:1 | pass | pass |
| Text on surface | 1.00:1 | fail | fail |

**Colours seen on the page** (share of use): `#2A1D16` 76.4%, `#D9C9B4` 21.4%, `#F6C98A` 1.1%, `#8A4B2A` 1.0%, `#F7ECDC` 0.0%, `#8A5A3B` 0.0%, `#0B0B0F` 0.0%

## Typography

- Headings: **Cormorant Garamond** (weight 500)
- Body: **Karla**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;1,500&family=Karla:wght@400;600&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Cormorant Garamond | 115.2 px | 500 | 115.2px | normal |
| Heading / H2 | Cormorant Garamond | 112 px | 500 | 112px | normal |
| Body | Karla | 17 px | 400 | 27.2px | normal |

## Shape, space and motion

- Radius: sm 0 px, md 0 px, lg 0 px, pill (fully rounded)
- Shadows: sm: `rgba(0, 0, 0, 0.4) 0px 0px 40px 0px inset, rgba(138, 90, 59, 0.3) 0px 0px 0px 6px` · md: `rgba(0, 0, 0, 0.4) 0px 0px 40px 0px inset, rgba(138, 90, 59, 0.3) 0px 0px 0px 6px` · lg: `rgba(0, 0, 0, 0.4) 0px 0px 40px 0px inset, rgba(138, 90, 59, 0.3) 0px 0px 0px 6px`
- Spacing: base unit 2 px; common steps 6 px, 8 px, 14 px, 16 px, 24 px, 30 px, 63 px, 90 px
- Layout: container 1200 px; breakpoints 700 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** inviting, quiet, refined.

Speaks like a host leading you in: soft, specific and lightly lyrical. It describes the room, the courtyard and the hour rather than the amenities.

**Do**

- Name the place and the time of day
- Use short, hospitable sentences
- Let one image carry each paragraph

**Do not**

- No star-rating boasting
- No exclamation marks
- No generic luxury adjectives

## Taglines

1. Come in, the light is on
2. Nine rooms, one open roof
3. A quiet street, a warm door
4. Breakfast in the courtyard
5. Stay behind the old factory

**Boilerplate:** Casa Marren is a nine-room boutique hotel on a quiet street behind the old tobacco factory, serving breakfast in its courtyard and keeping the roof terrace open late.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Book a room |
| secondaryCta | See the rooms |
| success | Thank you, we will hold your room for two days |
| error | We could not reach the desk, please try again |
| empty | No rooms available on those dates |

---
Source listing key `o:hero-scroll-doorway`. Rebuild with `python3 scripts/brand-kit/build.py o:hero-scroll-doorway`.
