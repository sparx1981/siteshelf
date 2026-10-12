# Keep Studio — brand kit

*Brand, web and product design studio.* Generated from the SiteShelf listing **Project Index with Hover Preview** (Portfolio); every value below is read from that page, not invented.

> **Made to be kept**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Unbounded |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **monogram** glyph on a squircle tile. A strong initial is enough for a studio whose idea is keeping things. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#0E0E0E` | Page background |
| surface | `#ECEBE6` | Cards, panels, raised areas |
| text | `#ECEBE6` | Body and heading text |
| textMuted | `#8F8E88` | Secondary text, captions |
| primary | `#C8F169` | Main actions, links, brand colour |
| secondary | `#6E853A` | Highlights, charts, second accent |
| border | `#3A3A3A` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#6E853A` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 16.17:1 | pass | pass |
| Muted text on background | 5.88:1 | pass | pass |
| Primary on background | 14.93:1 | pass | pass |
| Text on primary | 15.19:1 | pass | pass |
| Text on surface | 1.00:1 | fail | fail |

**Colours seen on the page** (share of use): `#0E0E0E` 99.3%, `#ECEBE6` 0.6%, `#8F8E88` 0.1%, `#C8F169` 0.1%, `#6E853A` 0.0%, `#3A3A3A` 0.0%

## Typography

- Headings: **Unbounded** (weight 400)
- Body: **Hanken Grotesk**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;500;600&family=Unbounded:wght@400;600&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Unbounded | 38 px | 400 | 47.5px | normal |
| Button | Hanken Grotesk | 14 px | 400 | 21px | normal |

## Shape, space and motion

- Radius: sm 0 px, md 0 px, lg 0 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 6 px, 8 px, 12 px, 15 px, 18 px, 20 px, 22 px, 28 px, 36 px
- Layout: container 900 px; breakpoints 700 px
- Motion: 250 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** confident, editorial, spare.

Keep Studio sounds like a design partner who has seen enough fads: direct, a little dry and sure of its taste. It states what it makes and for whom in one line.

**Do**

- Lead with what the studio makes
- Name disciplines and years plainly
- Keep paragraphs to two sentences

**Do not**

- Use agency superlatives like 'award-winning'
- Pitch process buzzwords
- Use exclamation marks

## Taglines

1. Made to be kept
2. Things people keep, designed well
3. Brands, sites and products that last
4. Work worth holding on to
5. Design for the long haul

**Boilerplate:** Keep Studio is an independent studio that designs brands, websites and products for companies that make things people keep, with a project index spanning web, brand, motion and product.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Start a project |
| secondaryCta | See the index |
| success | Message received. We reply within two days. |
| error | That did not send. Email us directly instead. |
| empty | No projects match that filter. |

---
Source listing key `o:portfolio-project-index`. Rebuild with `python3 scripts/brand-kit/build.py o:portfolio-project-index`.
