# Wayfarer Postcards — brand kit

*Illustrated postcards from five places, one pile.* Generated from the SiteShelf listing **Fanned Card Stack** (Cards); every value below is read from that page, not invented.

> **Five places, one pile**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Fraunces |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **compass** glyph. A compass points at the travelling theme without drifting into airline or tourism clichés. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#0F3B3F` | Page background |
| surface | `#FBF5E6` | Cards, panels, raised areas |
| text | `#B8D9D2` | Body and heading text |
| textMuted | `#EAF6F2` | Secondary text, captions |
| primary | `#FF9F6B` | Main actions, links, brand colour |
| secondary | `#9AD2E6` | Highlights, charts, second accent |
| border | `#E0D3B3` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#714936` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 8.09:1 | pass | pass |
| Muted text on background | 11.04:1 | pass | pass |
| Primary on background | 6.07:1 | pass | pass |
| Text on primary | 9.75:1 | pass | pass |
| Text on surface | 1.39:1 | fail | fail |

**Colours seen on the page** (share of use): `#0F3B3F` 59.2%, `#FBF5E6` 30.2%, `#1D6B70` 7.4%, `#9AD2E6` 0.5%, `#3F8AA3` 0.5%, `#F2A98F` 0.5%, `#D8E6B4` 0.5%, `#F3E7C2` 0.5%, `#8EC17A` 0.5%, `#FF9F6B` 0.5%

## Typography

- Headings: **Fraunces** (weight 700)
- Body: **Karla**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Fraunces:wght@600;700&family=Karla:wght@400;500;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Fraunces | 62 px | 700 | 62px | -1.24px |
| Body | Karla | 18 px | 400 | 27.9px | normal |
| Button | Karla | 16 px | 700 | 24.8px | normal |
| Caption / eyebrow | Karla | 13 px | 700 | normal | 2.08px |

## Shape, space and motion

- Radius: sm 14 px, md 14 px, lg 14 px, pill (fully rounded)
- Shadows: sm: `rgba(0, 0, 0, 0.6) 0px 14px 30px -12px` · md: `rgba(0, 0, 0, 0.6) 0px 14px 30px -12px` · lg: `rgba(0, 0, 0, 0.6) 0px 14px 30px -12px`
- Spacing: base unit 4 px; common steps 2 px, 8 px, 10 px, 11 px, 12 px, 14 px, 16 px, 20 px, 22 px
- Layout: container 1120 px; breakpoints 600 px, 900 px
- Motion: 520 ms, `cubic-bezier(0.3`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** wistful, well-travelled, tidy.

Writes like the back of a postcard: brief, warm and a bit nostalgic, with a travelling friend's eye for detail. It favours place names and small sensory notes over sales language.

**Do**

- Write in postcard-length lines that name a place
- Use warm, informal asides, like wish you were here
- Keep captions to a single image and a feeling

**Do not**

- Holiday-brochure superlatives like breathtaking
- Listing every feature of the stack mechanics
- Exclamation marks beyond a rare one

## Taglines

1. Five places, one pile
2. Wish you were here, in print
3. Postmarked, stamped, sent with love
4. Pick a card, pick a place
5. Little pictures from the long way round

**Boilerplate:** Wayfarer Postcards is an independent stationer that prints illustrated postcards of far-off places, sold as stacks you can fan out and choose from.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Fan out |
| secondaryCta | Stack |
| success | Card on top. Where to next? |
| error | The cards slipped. Give the pile a shuffle |
| empty | The pile is empty. Add a postcard |

---
Source listing key `o:card-fan-stack`. Rebuild with `python3 scripts/brand-kit/build.py o:card-fan-stack`.
