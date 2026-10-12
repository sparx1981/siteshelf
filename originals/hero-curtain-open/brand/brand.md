# The Marlowe — brand kit

*Playhouse staging live theatre with a new show tonight.* Generated from the SiteShelf listing **Curtain Reveal Hero** (Hero Section); every value below is read from that page, not invented.

> **Tonight, the curtain rises**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Playfair Display |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **monogram** glyph on a squircle tile. A serif capital M on velvet red suits a playhouse where the name is its own marquee. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#7A1426` | Page background |
| surface | `#120A0C` | Cards, panels, raised areas |
| text | `#FBEFD8` | Body and heading text |
| textMuted | `#E9D9BC` | Secondary text, captions |
| primary | `#E7BB6A` | Main actions, links, brand colour |
| secondary | `#8A5A12` | Highlights, charts, second accent |
| border | `#E7BB6A` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#8A5A12` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 9.43:1 | pass | pass |
| Muted text on background | 7.73:1 | pass | pass |
| Primary on background | 5.99:1 | pass | pass |
| Text on primary | 10.96:1 | pass | pass |
| Text on surface | 17.16:1 | pass | pass |

**Colours seen on the page** (share of use): `#7A1426` 50.1%, `#120A0C` 48.8%, `#E7BB6A` 0.4%, `#8A5A12` 0.3%, `#2B6B3D` 0.2%, `#FBEFD8` 0.1%, `#E9D9BC` 0.1%, `#FFE6B8` 0.0%

## Typography

- Headings: **Playfair Display** (weight 700)
- Body: **DM Sans**
- Google Fonts: `https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Playfair+Display:ital,wght@0,700;1,700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Playfair Display | 120 px | 700 | 120px | normal |
| Body | DM Sans | 17 px | 400 | 27.2px | normal |
| Button | DM Sans | 14 px | 500 | normal | normal |

## Shape, space and motion

- Radius: sm 16 px, md 16 px, lg 16 px, pill (fully rounded)
- Shadows: sm: `rgba(0, 0, 0, 0.5) -30px 0px 40px 0px inset, rgb(212, 162, 76) 0px -8px 0px 0px inset` · md: `rgba(0, 0, 0, 0.5) 30px 0px 40px 0px inset, rgb(212, 162, 76) 0px -8px 0px 0px inset` · lg: `rgba(0, 0, 0, 0.5) -30px 0px 40px 0px inset, rgb(212, 162, 76) 0px -8px 0px 0px inset`
- Spacing: base unit 4 px; common steps 3 px, 8 px, 9 px, 14 px, 15 px, 16 px, 18 px, 20 px, 28 px
- Layout: container 1200 px; breakpoints 700 px
- Motion: 250 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** theatrical, gracious, dramatic.

A front-of-house voice in evening dress: warm, a touch grand and fond of a well-timed pause. Short, stagey lines that make tonight feel like an occasion.

**Do**

- Lead with tonight, with date, show and price
- Use theatre terms like curtain, company and stalls
- Keep the drama to one line, then give the practical detail

**Do not**

- Over-the-top superlatives like best show ever
- Hiding prices
- Casual slang

## Taglines

1. Tonight, the curtain rises
2. Live theatre, close enough to touch
3. A company of fourteen, one stage
4. Take your seats
5. Bring a coat, leave with a story

**Boilerplate:** The Marlowe Playhouse is a theatre staging new productions, currently a new staging of The Lantern Keeper with live music and a company of fourteen.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Book seats from £18 |
| secondaryCta | Cast and crew |
| success | Seats held. See you in the stalls |
| error | We could not hold those seats. Try again |
| empty | No performances tonight. See the listings |

---
Source listing key `o:hero-curtain-open`. Rebuild with `python3 scripts/brand-kit/build.py o:hero-curtain-open`.
