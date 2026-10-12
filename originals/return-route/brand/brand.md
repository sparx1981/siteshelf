# Orra House — brand kit

*Homewares store with a thoughtful returns journey.* Generated from the SiteShelf listing **Return Route** (E-commerce); every value below is read from that page, not invented.

> **Make room for the right things**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Newsreader |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **home** glyph on a squircle tile. A house outline ties the store's name to the home it edits. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F6F5F1` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#252A35` | Body and heading text |
| textMuted | `#5B606C` | Secondary text, captions |
| primary | `#334B8D` | Main actions, links, brand colour |
| secondary | `#B79978` | Highlights, charts, second accent |
| border | `#D8DADC` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#B79978` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 13.17:1 | pass | pass |
| Muted text on background | 5.77:1 | pass | pass |
| Primary on background | 7.60:1 | pass | pass |
| Text on primary | 8.29:1 | pass | pass |
| Text on surface | 14.37:1 | pass | pass |

**Colours seen on the page** (share of use): `#F6F5F1` 96.3%, `#334B8D` 1.1%, `#E3DFD5` 1.1%, `#252A35` 0.8%, `#5B606C` 0.3%, `#B79978` 0.2%, `#918762` 0.2%, `#687993` 0.1%

## Typography

- Headings: **Newsreader** (weight 500)
- Body: **DM Sans**
- Google Fonts: `https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Newsreader:wght@500&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Newsreader | 54 px | 500 | 58.32px | -1.62px |
| Heading / H2 | Newsreader | 27 px | 500 | normal | normal |
| Body | DM Sans | 15 px | 400 | 23.25px | normal |
| Button | DM Sans | 15 px | 700 | 23.25px | normal |
| Caption / eyebrow | DM Sans | 12 px | 400 | 18.6px | normal |

## Shape, space and motion

- Radius: sm 4 px, md 10 px, lg 12 px
- Shadows: none used (flat)
- Spacing: base unit 2 px; common steps 3 px, 5 px, 10 px, 12 px, 13 px, 15 px, 16 px, 20 px, 22 px
- Layout: container 1260 px; breakpoints 600 px, 760 px, 850 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** considered, gracious, clear.

A shopkeeper helping with an awkward moment: gracious, uncluttered and matter-of-fact. It makes returning feel like editing a home, not an apology.

**Do**

- Explain refund options with amounts and timing
- Use three-stage language: select, review, confirm
- Reassure without over-apologising

**Do not**

- Guilt trips about returns
- Legalese
- Chirpy exclamations

## Taglines

1. Make room for the right things
2. A thoughtful home is edited
3. Returns, without the awkwardness
4. Sort it, send it back
5. Less, but better

**Boilerplate:** Orra House is a homewares store for considered interiors, offering a simple returns journey with clear refund methods and confirmation.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Review return |
| secondaryCta | Back to items |
| success | Return confirmed. Your refund is on its way |
| error | Choose a reason to continue |
| empty | No eligible items on this order |

---
Source listing key `o:return-route`. Rebuild with `python3 scripts/brand-kit/build.py o:return-route`.
