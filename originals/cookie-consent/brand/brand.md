# The Slow Journal — brand kit

*Magazine about reading and attention.* Generated from the SiteShelf listing **Cookie Consent** (Components); every value below is read from that page, not invented.

> **The case for reading one thing slowly**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter Bold (stand-in for Libre Baskerville) |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **book** glyph on a squircle tile. An open book is the plainest symbol of slow reading. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#FBFAF7` | Page background |
| surface | `#1F6F5C` | Cards, panels, raised areas |
| text | `#34322D` | Body and heading text |
| textMuted | `#6A665C` | Secondary text, captions |
| primary | `#1F6F5C` | Main actions, links, brand colour |
| secondary | `#B8791F` | Highlights, charts, second accent |
| border | `#E6E2D8` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#A1C3BB` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 12.27:1 | pass | pass |
| Muted text on background | 5.49:1 | pass | pass |
| Primary on background | 5.77:1 | pass | pass |
| Text on primary | 6.02:1 | pass | pass |
| Text on surface | 2.13:1 | fail | fail |

**Colours seen on the page** (share of use): `#FBFAF7` 98.0%, `#34322D` 0.9%, `#1F6F5C` 0.5%, `#1E1D1A` 0.3%, `#6A665C` 0.3%, `#B8791F` 0.0%, `#C4BFB2` 0.0%, `#E6E2D8` 0.0%, `#A1C3BB` 0.0%

## Typography

- Headings: **Libre Baskerville** (weight 700)
- Body: **Libre Baskerville**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&family=Libre+Franklin:wght@400;500;600;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Libre Baskerville | 46 px | 700 | 52.9px | normal |
| Heading / H2 | Libre Franklin | 17 px | 700 | 22.1px | normal |
| Body | Libre Baskerville | 16 px | 400 | 27.2px | normal |
| Button | Libre Franklin | 14 px | 500 | normal | normal |

## Shape, space and motion

- Radius: sm 10 px, md 16 px, lg 16 px, pill (fully rounded)
- Shadows: sm: `rgba(30, 29, 26, 0.35) 0px 20px 60px -20px` · md: `rgba(30, 29, 26, 0.35) 0px 20px 60px -20px` · lg: `rgba(30, 29, 26, 0.35) 0px 20px 60px -20px`
- Spacing: base unit 2 px; common steps 2 px, 6 px, 10 px, 11 px, 14 px, 18 px, 19 px, 20 px, 22 px
- Layout: container 960 px; breakpoints 600 px
- Motion: 300 ms, `cubic-bezier(0.2`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** thoughtful, candid, unhurried.

Speaks in the measured voice of an essayist who respects the reader's time and attention. Even a cookie notice is plain, honest and free of nudging.

**Do**

- Say exactly what each cookie does
- Give Reject and Accept equal weight
- Use calm full sentences

**Do not**

- No dark patterns or guilt-trip wording
- Avoid legal fog
- Do not bury the reject option

## Taglines

1. The case for reading one thing slowly
2. Read it once, read it well
3. Attention is worth protecting
4. A quiet place for long reading
5. One article, no rush

**Boilerplate:** The Slow Journal is an independent magazine publishing essays that make the case for reading deliberately, one article at a time and without distraction.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Accept all |
| secondaryCta | Reject non-essential |
| success | Preferences saved. Thank you. |
| error | Your choice did not save. Please try again. |
| empty | No optional cookies are in use on this page. |

---
Source listing key `o:cookie-consent`. Rebuild with `python3 scripts/brand-kit/build.py o:cookie-consent`.
