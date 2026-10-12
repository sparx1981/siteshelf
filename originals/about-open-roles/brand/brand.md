# Hearthwick — brand kit

*Candle makers with a four-day week.* Generated from the SiteShelf listing **Careers: Open Roles** (About Page); every value below is read from that page, not invented.

> **Candles, and a calm place to work**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Young Serif |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **flame** glyph on a squircle tile. A candle flame says warmth and craft in one shape, matching a company built on slow, careful making. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#FBF7F0` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#566860` | Body and heading text |
| textMuted | `#1D2A24` | Secondary text, captions |
| primary | `#12372A` | Main actions, links, brand colour |
| secondary | `#E9A487` | Highlights, charts, second accent |
| border | `#ECE6D8` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#E9A487` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 5.55:1 | pass | pass |
| Muted text on background | 13.96:1 | pass | pass |
| Primary on background | 12.25:1 | pass | pass |
| Text on primary | 13.08:1 | pass | pass |
| Text on surface | 5.92:1 | pass | pass |

**Colours seen on the page** (share of use): `#FBF7F0` 78.0%, `#12372A` 21.6%, `#566860` 0.2%, `#D1603D` 0.2%, `#C3D3C9` 0.0%, `#E9A487` 0.0%, `#ECE6D8` 0.0%

## Typography

- Headings: **Young Serif** (weight 400)
- Body: **Figtree**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Figtree:wght@400;600&family=Young+Serif&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Young Serif | 56 px | 400 | 61.6px | normal |
| Heading / H2 | Young Serif | 34 px | 400 | normal | normal |
| Subheading / H3 | Figtree | 17 px | 700 | 27.2px | normal |
| Button | Figtree | 14 px | 600 | 22.4px | normal |

## Shape, space and motion

- Radius: sm 4 px, md 10 px, lg 14 px, pill (fully rounded)
- Shadows: sm: `rgba(18, 55, 42, 0.1) 0px 8px 24px 0px` · md: `rgba(18, 55, 42, 0.1) 0px 8px 24px 0px` · lg: `rgba(18, 55, 42, 0.1) 0px 8px 24px 0px`
- Spacing: base unit 4 px; common steps 3 px, 4 px, 7 px, 8 px, 10 px, 12 px, 15 px, 18 px, 20 px
- Layout: container 1000 px; breakpoints 560 px, 860 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** warm, unhurried, honest.

Hearthwick sounds like a kind colleague talking across a workbench: plain sentences, a little dry humour, no hype about 'rockstars'. It treats work as something a calm person does well, so the copy never rushes the reader.

**Do**

- Write short, concrete sentences about real perks, like Fridays off and same pay
- Name the place and the craft: Porto, wax, wicks
- Say what a role involves before saying what it demands

**Do not**

- Never use hustle language such as 'fast-paced' or 'rockstar'
- Do not hide pay, hours or location behind vague phrases
- Avoid exclamation marks and urgency timers

## Taglines

1. Candles, and a calm place to work
2. Fridays are ours. Same pay
3. Light a small, steady fire
4. Good wax, good hours, good people
5. Come and make something slow

**Boilerplate:** Hearthwick is a small independent candle maker in Porto with a four-day week, a team of 46, and a habit of hiring people who like careful work.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | See open roles |
| secondaryCta | Meet the team |
| success | Application sent. We will reply within a week. |
| error | That did not send. Please try again, or email us directly. |
| empty | No roles match yet. Try another team or clear the search. |

---
Source listing key `o:about-open-roles`. Rebuild with `python3 scripts/brand-kit/build.py o:about-open-roles`.
