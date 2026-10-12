# Fourfold — brand kit

*Paper-plane making workshops for curious grown-ups.* Generated from the SiteShelf listing **Paper Planes Playful Hero** (Hero Section); every value below is read from that page, not invented.

> **Learn to make it fly**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Fraunces |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **plane** glyph. A folded paper plane is both the product and the personality. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#FFF4E0` | Page background |
| surface | `#E8D5B0` | Cards, panels, raised areas |
| text | `#2B2118` | Body and heading text |
| textMuted | `#756B5E` | Secondary text, captions |
| primary | `#FF5A36` | Main actions, links, brand colour |
| secondary | `#2B2118` | Highlights, charts, second accent |
| border | `#E1D6C4` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#2B2118` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 14.45:1 | pass | pass |
| Muted text on background | 4.79:1 | pass | pass |
| Primary on background | 2.85:1 | fail | fail |
| Text on primary | 6.33:1 | pass | pass |
| Text on surface | 10.93:1 | pass | pass |

**Colours seen on the page** (share of use): `#FFF4E0` 79.2%, `#E8D5B0` 19.8%, `#FF5A36` 0.7%, `#2B2118` 0.3%, `#FFFFFF` 0.0%, `#3AA6FF` 0.0%, `#FFC933` 0.0%, `#3FBF7F` 0.0%, `#756B5E` 0.0%, `#0B0B0F` 0.0%

## Typography

- Headings: **Fraunces** (weight 800)
- Body: **Figtree**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,600;0,9..144,800;1,9..144,800&family=Figtree:wght@400;500;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Fraunces | 115.2 px | 800 | 109.44px | -3.456px |
| Body | Figtree | 20 px | 400 | 30px | normal |
| Button | Figtree | 20 px | 700 | 56px | normal |
| Caption / eyebrow | Figtree | 14 px | 700 | 21px | 1.68px |

## Shape, space and motion

- Radius: sm 0 px, md 0 px, lg 0 px, pill (fully rounded)
- Shadows: sm: `rgb(43, 33, 24) 4px 4px 0px 0px` · md: `rgb(43, 33, 24) 4px 4px 0px 0px` · lg: `rgb(43, 33, 24) 4px 4px 0px 0px`
- Spacing: base unit 4 px; common steps 12 px, 20 px, 24 px, 28 px, 32 px, 34 px, 40 px
- Layout: container 1200 px; breakpoints 700 px
- Motion: 150 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** playful, hands-on, warm.

Fourfold sounds like an enthusiastic workshop leader with flour-dusted hands and a pocketful of paper. It is simple, funny about failed first folds and always confident that your plane will fly.

**Do**

- Count the folds: four, always
- Talk about the afternoon, not the lesson
- Cheer attempts as warmly as successes

**Do not**

- Do not use jargon about aerodynamics
- Avoid childish baby talk
- Never promise a perfect flight

## Taglines

1. Learn to make it fly
2. Four folds, one afternoon
3. Plane crash? Fold again
4. Folding, with friends
5. A seat at the folding table

**Boilerplate:** Fourfold runs paper-plane workshops for adults and families, teaching four classic folds in one afternoon and sending everyone home with a plane that actually flies.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Book a seat |
| secondaryCta | See the folds |
| success | Seat booked. Bring a steady hand. |
| error | That date is full. Try another afternoon. |
| empty | No workshops this week. Check back soon. |

---
Source listing key `o:paper-planes`. Rebuild with `python3 scripts/brand-kit/build.py o:paper-planes`.
