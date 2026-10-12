# Parcel Hill Press — brand kit

*Worker-owned print shop and bindery.* Generated from the SiteShelf listing **Culture Values Grid** (About Page); every value below is read from that page, not invented.

> **Six rules we actually follow**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Young Serif |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **stack** glyph on a circle tile. A stack of paper sheets nods to the press room and the idea of layers of people building one thing. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#FBF5EA` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#1C2230` | Body and heading text |
| textMuted | `#38405A` | Secondary text, captions |
| primary | `#FFCB52` | Main actions, links, brand colour |
| secondary | `#B9A4FF` | Highlights, charts, second accent |
| border | `#1C2230` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#715C2B` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 14.65:1 | pass | pass |
| Muted text on background | 9.44:1 | pass | pass |
| Primary on background | 1.39:1 | fail | fail |
| Text on primary | 13.02:1 | pass | pass |
| Text on surface | 15.90:1 | pass | pass |

**Colours seen on the page** (share of use): `#FBF5EA` 57.2%, `#FFFFFF` 17.9%, `#1C2230` 7.2%, `#E6DFD0` 5.2%, `#000000` 4.4%, `#FFCB52` 1.8%, `#FF8A73` 1.6%, `#B9A4FF` 1.6%, `#FF9FC2` 1.6%, `#5FDCB4` 1.5%

## Typography

- Headings: **Young Serif** (weight 400)
- Body: **Figtree**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;700&family=Young+Serif&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Young Serif | 72 px | 400 | 73.44px | normal |
| Heading / H2 | Young Serif | 34 px | 400 | 37.4px | normal |
| Subheading / H3 | Young Serif | 24 px | 400 | 26.4px | normal |
| Body | Figtree | 18 px | 400 | 27.9px | normal |
| Button | Figtree | 14 px | 700 | normal | normal |
| Caption / eyebrow | Figtree | 12 px | 700 | normal | 1.92px |

## Shape, space and motion

- Radius: sm 18 px, md 20 px, lg 20 px, pill (fully rounded)
- Shadows: sm: `rgb(28, 34, 48) 4px 4px 0px 0px` · md: `rgb(28, 34, 48) 5px 5px 0px 0px` · lg: `rgb(28, 34, 48) 4px 10px 0px 0px`
- Spacing: base unit 4 px; common steps 4 px, 8 px, 10 px, 12 px, 14 px, 16 px, 18 px, 22 px, 24 px
- Layout: container 1240 px; breakpoints 420 px, 959 px
- Motion: 150 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** warm, plain-spoken, proud.

Sounds like a crew talking over the press at the end of a shift: first person plural, short sentences, ink-under-the-fingernails honesty. Principles are stated as things we do, never as slogans we aspire to.

**Do**

- Use we and our, and name the actual job (sweeping, proofing, folding)
- Tell each principle as a small story with a person in it
- Keep sentences short enough to read aloud over a noisy press

**Do not**

- No corporate values language like synergy or excellence
- Never claim a rule without an example of it in practice
- Avoid sounding like a manifesto or a recruitment ad

## Taglines

1. Six rules we actually follow
2. Everyone sweeps, everyone owns
3. Printed by people who own the press
4. Small shop, fair pay, good paper
5. Ink, paper and a shared broom

**Boilerplate:** Parcel Hill Press is a worker-owned print shop and bindery where every member shares the profits, the decisions and the cleaning rota.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Read our story |
| secondaryCta | Meet the crew |
| success | Story pinned. Click again to let it go. |
| error | That one slipped off the press. Try again. |
| empty | No stories here yet, pick another rule. |

---
Source listing key `o:about-culture-grid`. Rebuild with `python3 scripts/brand-kit/build.py o:about-culture-grid`.
