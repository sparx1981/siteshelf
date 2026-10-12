# Lanternworks — brand kit

*Lighting studio and lantern makers by the harbour.* Generated from the SiteShelf listing **Self-Drawing Timeline** (Timeline); every value below is read from that page, not invented.

> **Twelve years of small lights**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Young Serif |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **spark** glyph. A bright spark stands for a small light that kept growing. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F6EFE2` | Page background |
| surface | `#DCEBE1` | Cards, panels, raised areas |
| text | `#4A4132` | Body and heading text |
| textMuted | `#1C1812` | Secondary text, captions |
| primary | `#C4532F` | Main actions, links, brand colour |
| secondary | `#1A1033` | Highlights, charts, second accent |
| border | `#C4532F` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#1A1033` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 8.77:1 | pass | pass |
| Muted text on background | 15.45:1 | pass | pass |
| Primary on background | 3.97:1 | fail | pass |
| Text on primary | 4.54:1 | pass | pass |
| Text on surface | 8.13:1 | pass | pass |

**Colours seen on the page** (share of use): `#F6EFE2` 92.5%, `#000000` 3.2%, `#1A1033` 1.1%, `#C4532F` 0.7%, `#E8D8C4` 0.6%, `#CFDDE8` 0.6%, `#7A4A9A` 0.4%, `#FFFFFF` 0.4%, `#1B2A5A` 0.3%, `#4A4132` 0.2%

## Typography

- Headings: **Young Serif** (weight 400)
- Body: **Figtree**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;700&family=Young+Serif&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Young Serif | 92 px | 400 | 90.16px | normal |
| Heading / H2 | Young Serif | 28 px | 400 | 32.2px | normal |
| Body | Figtree | 17 px | 400 | 27.2px | normal |
| Button | Figtree | 16 px | 700 | normal | normal |

## Shape, space and motion

- Radius: sm 10 px, md 14 px, lg 14 px, pill (fully rounded)
- Shadows: sm: `rgba(0, 0, 0, 0.08) 0px 0px 0px 1px inset` · md: `rgba(0, 0, 0, 0.08) 0px 0px 0px 1px inset` · lg: `rgba(0, 0, 0, 0.08) 0px 0px 0px 1px inset`
- Spacing: base unit 2 px; common steps 2 px, 6 px, 8 px, 10 px, 16 px, 17 px, 18 px, 20 px, 24 px
- Layout: container 1080 px; breakpoints 520 px, 860 px
- Motion: 300 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** warm, humble, storytelling.

Sounds like a founder telling the story over a cup of tea: warm, specific and funny about the early days. Years and details carry the story, and the tone stays modest even when the studio is not.

**Do**

- Anchor each milestone to a year and a concrete detail
- Use plain words like desk, kettle and lantern
- Let the founders appear as we

**Do not**

- Do not claim to have changed the world
- Do not use startup origin-myth cliches
- Do not skip the hard years

## Taglines

1. Twelve years of small lights
2. Two desks, a kettle, a lantern
3. Made by the harbour, for any room
4. Small lights, kept burning
5. Our story, one lantern at a time

**Boilerplate:** Lanternworks is a lighting studio by the harbour that has made hand-built lanterns for twelve years, growing from two desks and a kettle to a team of twelve.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Sign up for the 2027 letter |
| secondaryCta | Read our story |
| success | You're on the list. Thank you. |
| error | That email didn't go through. Please try again. |
| empty | No milestones yet. Scroll to begin. |

---
Source listing key `o:timeline-vertical-draw`. Rebuild with `python3 scripts/brand-kit/build.py o:timeline-vertical-draw`.
