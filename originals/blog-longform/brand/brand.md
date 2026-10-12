# Field Notes Quarterly — brand kit

*Quarterly journal of land, food and place.* Generated from the SiteShelf listing **Longform Article with TOC** (Blog); every value below is read from that page, not invented.

> **Notes from the orchard and beyond**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter Bold (stand-in for Literata) |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **sprout** glyph on a circle tile. A young shoot stands for the orchard coming back and the quiet growth of a long read. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#FDFCF9` | Page background |
| surface | `#6B4A2B` | Cards, panels, raised areas |
| text | `#1C1B1F` | Body and heading text |
| textMuted | `#6A6872` | Secondary text, captions |
| primary | `#0F766E` | Main actions, links, brand colour |
| secondary | `#FBD4A4` | Highlights, charts, second accent |
| border | `#E8E5DE` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#FBD4A4` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 16.70:1 | pass | pass |
| Muted text on background | 5.34:1 | pass | pass |
| Primary on background | 5.33:1 | pass | pass |
| Text on primary | 5.47:1 | pass | pass |
| Text on surface | 2.15:1 | fail | fail |

**Colours seen on the page** (share of use): `#FDFCF9` 95.2%, `#1C1B1F` 0.9%, `#6B4A2B` 0.7%, `#FFE9C9` 0.7%, `#FBD4A4` 0.7%, `#9FCF8E` 0.7%, `#5FA05B` 0.7%, `#6A6872` 0.2%, `#FFF3B0` 0.1%, `#0F766E` 0.0%

## Typography

- Headings: **Literata** (weight 600)
- Body: **Literata**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@500;600&family=Literata:ital,wght@0,400;0,600;1,400&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Literata | 60 px | 600 | 64.8px | -0.9px |
| Heading / H2 | Inter | 12 px | 600 | normal | 1.68px |
| Body | Literata | 23 px | 400 | 34.5px | normal |
| Button | Inter | 14 px | 600 | normal | normal |
| Navigation | Inter | 14 px | 500 | 18.9px | normal |
| Caption / eyebrow | Inter | 14 px | 500 | normal | normal |

## Shape, space and motion

- Radius: sm 4 px, md 16 px, lg 18 px, pill (fully rounded)
- Shadows: sm: `rgba(255, 243, 176, 0.467) 0px 0px 40px 14px` · md: `rgba(255, 243, 176, 0.467) 0px 0px 40px 14px` · lg: `rgba(255, 243, 176, 0.467) 0px 0px 40px 14px`
- Spacing: base unit 2 px; common steps 6 px, 7 px, 8 px, 10 px, 12 px, 14 px, 18 px, 20 px, 22 px
- Layout: container 1180 px; breakpoints 1000 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** observant, unhurried, grounded.

Writes in the patient present tense of a naturalist's notebook, with exact detail and little ornament. Paragraphs earn their length and the tone invites reading with tea.

**Do**

- Anchor every claim in a named place or object
- Use sensory detail before abstraction
- Let paragraphs breathe, one idea each

**Do not**

- No hype words or marketing cadence
- Avoid listicles and subheads that shout
- Do not rush to a moral

## Taglines

1. Notes from the orchard and beyond
2. Slow reading about living places
3. The land, written down carefully
4. What the fruit remembers
5. Long reads from the valley

**Boilerplate:** Field Notes Quarterly is an independent journal publishing long-form essays on orchards, gardens, food and the landscapes people still tend by hand.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Keep reading |
| secondaryCta | Copy link |
| success | Link copied. Share it kindly. |
| error | That did not copy. Select the link and try again. |
| empty | No related essays yet. More are on the way. |

---
Source listing key `o:blog-longform`. Rebuild with `python3 scripts/brand-kit/build.py o:blog-longform`.
