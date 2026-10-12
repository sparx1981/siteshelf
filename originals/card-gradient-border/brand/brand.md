# Prismcraft — brand kit

*Design studio for colour, motion and type.* Generated from the SiteShelf listing **Spinning Border Cards** (Cards); every value below is read from that page, not invented.

> **Borders that never sit still**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Sora |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **diamond** glyph on a squircle tile. A faceted gem hints at prisms and polished edges. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#08080F` | Page background |
| surface | `#4B2FD0` | Cards, panels, raised areas |
| text | `#A5A8C8` | Body and heading text |
| textMuted | `#F1F2FF` | Secondary text, captions |
| primary | `#19E6C9` | Main actions, links, brand colour |
| secondary | `#7C5CFF` | Highlights, charts, second accent |
| border | `#3A3D5E` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#7C5CFF` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 8.59:1 | pass | pass |
| Muted text on background | 17.95:1 | pass | pass |
| Primary on background | 12.55:1 | pass | pass |
| Text on primary | 12.35:1 | pass | pass |
| Text on surface | 3.45:1 | fail | pass |

**Colours seen on the page** (share of use): `#08080F` 72.9%, `#4B2FD0` 9.1%, `#0BA8A0` 9.1%, `#7C5CFF` 4.0%, `#19E6C9` 2.0%, `#FF6BD6` 2.0%, `#FFFFFF` 0.4%, `#A5A8C8` 0.3%, `#1E2038` 0.2%, `#3A3D5E` 0.0%

## Typography

- Headings: **Sora** (weight 800)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Sora:wght@600;700;800&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Sora | 66 px | 800 | 66px | -1.98px |
| Heading / H2 | Sora | 22 px | 700 | normal | -0.22px |
| Body | Inter | 18 px | 400 | 27.9px | normal |
| Caption / eyebrow | Sora | 13 px | 700 | normal | 2.08px |

## Shape, space and motion

- Radius: sm 14 px, md 16 px, lg 22 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 2 px, 4 px, 6 px, 8 px, 10 px, 12 px, 14 px, 20 px, 22 px
- Layout: container 1120 px; breakpoints 620 px, 980 px
- Motion: 300 ms, `cubic-bezier(0.3`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** luminous, exact, playful.

Speaks as a studio that treats details like jewellery: confident, a touch theatrical, but always specific about the craft. Short, glowing nouns beat adjectives.

**Do**

- Name the craft: colour systems, motion library
- Use light and edge words sparingly but exactly
- Pair every flourish with a practical point

**Do not**

- No generic creativity clichés
- No walls of adjectives
- No hiding the tool behind the metaphor

## Taglines

1. Borders that never sit still
2. Edges with a pulse
3. Colour, cut to order
4. Craft you can see move
5. Where the gradient meets the grid

**Boilerplate:** Prismcraft is a design studio building colour systems, motion libraries, icon sets and type pairings, with spinning gradient details that make interface edges feel alive.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Explore the library |
| secondaryCta | Compare palettes |
| success | Palette applied |
| error | That setting is not supported here, using the static border |
| empty | No cards in this collection yet |

---
Source listing key `o:card-gradient-border`. Rebuild with `python3 scripts/brand-kit/build.py o:card-gradient-border`.
