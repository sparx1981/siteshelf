# Kettlewood Bakehouse — brand kit

*Family bakery feeding Marrow Bridge since 1998.* Generated from the SiteShelf listing **About Us Story Page** (About Page); every value below is read from that page, not invented.

> **We bake for the street we live on**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Young Serif |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **sprout** glyph on a squircle tile. A sprouting grain stem nods to local flour and the slow rise of the dough. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#FBF6EE` | Page background |
| surface | `#F2E8D8` | Cards, panels, raised areas |
| text | `#4D4033` | Body and heading text |
| textMuted | `#2A2118` | Secondary text, captions |
| primary | `#C4572E` | Main actions, links, brand colour |
| secondary | `#FFD27A` | Highlights, charts, second accent |
| border | `#2A2118` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#FFD27A` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 9.31:1 | pass | pass |
| Muted text on background | 14.68:1 | pass | pass |
| Primary on background | 4.11:1 | fail | pass |
| Text on primary | 4.44:1 | fail | pass |
| Text on surface | 8.26:1 | pass | pass |

**Colours seen on the page** (share of use): `#FBF6EE` 63.4%, `#F2E8D8` 26.9%, `#2A2118` 6.3%, `#C4572E` 0.9%, `#D9A066` 0.4%, `#6F8F6A` 0.4%, `#A8805A` 0.4%, `#E0B86A` 0.4%, `#8A6F9A` 0.4%, `#F0C9A0` 0.3%

## Typography

- Headings: **Young Serif** (weight 400)
- Body: **Karla**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Karla:wght@400;500;700&family=Young+Serif&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Young Serif | 84 px | 400 | 84px | -1.68px |
| Heading / H2 | Young Serif | 48 px | 400 | 52.8px | normal |
| Subheading / H3 | Karla | 17 px | 400 | 28.05px | normal |
| Body | Karla | 17 px | 400 | 28.05px | normal |
| Button | Young Serif | 24 px | 400 | normal | normal |
| Navigation | Karla | 15 px | 500 | 24.75px | normal |

## Shape, space and motion

- Radius: sm 14 px, md 28 px, lg 32 px, pill (fully rounded)
- Shadows: sm: `rgba(42, 33, 24, 0.08) 0px 8px 24px 0px` · md: `rgba(42, 33, 24, 0.2) 0px 20px 40px 0px` · lg: `rgba(42, 33, 24, 0.08) 0px 8px 24px 0px`
- Spacing: base unit 4 px; common steps 2 px, 4 px, 8 px, 10 px, 12 px, 16 px, 20 px, 24 px, 26 px
- Layout: container 1120 px; breakpoints 620 px, 860 px
- Motion: 250 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** warm, neighbourly, unhurried.

Speaks like the baker leaning on the counter at seven in the morning: plain, kind and a little proud of the crust. Sentences are short and sensory, and the street always comes before the brand.

**Do**

- Name the real things: flour, doorsteps, the four o'clock start
- Use we and our, and say neighbour instead of customer
- Keep sentences short enough to say with flour on your hands

**Do not**

- Corporate phrases like artisan experience or premium offering
- Exclamation marks and hard-sell urgency
- Talking about scale when the story is one oven and one street

## Taglines

1. We bake for the street we live on
2. Slow dough, warm doorstep
3. Up at four, open at seven
4. Honest bread from Marrow Bridge
5. Every loaf ends on a doorstep

**Boilerplate:** Kettlewood Bakehouse is a family bakery in Marrow Bridge that has made slow-risen loaves, honest pastries and the occasional too-warm cinnamon bun since 1998.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Come in at seven |
| secondaryCta | Meet the early shift |
| success | Thanks, we will save you a loaf |
| error | The oven door stuck. Try that again? |
| empty | No loaves left on this shelf yet |

---
Source listing key `o:about-story`. Rebuild with `python3 scripts/brand-kit/build.py o:about-story`.
