# Fieldline Review — brand kit

*Nature magazine for long, patient reading.* Generated from the SiteShelf listing **Split Feature Article** (Blog); every value below is read from that page, not invented.

> **What the marsh remembers**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Fraunces |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **wave** glyph. A rolling wave line suggests tidal marsh water and the steady pace of the long read. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F6F1E5` | Page background |
| surface | `#1D3D31` | Cards, panels, raised areas |
| text | `#1F2A24` | Body and heading text |
| textMuted | `#4D5A52` | Secondary text, captions |
| primary | `#EFE3C6` | Main actions, links, brand colour |
| secondary | `#1D3D31` | Highlights, charts, second accent |
| border | `#B9D3BF` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#1D3D31` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 13.17:1 | pass | pass |
| Muted text on background | 6.43:1 | pass | pass |
| Primary on background | 1.13:1 | fail | fail |
| Text on primary | 15.41:1 | pass | pass |
| Text on surface | 1.25:1 | fail | fail |

**Colours seen on the page** (share of use): `#F6F1E5` 84.8%, `#1D3D31` 10.1%, `#000000` 1.7%, `#1F2A24` 1.3%, `#FFD1C4` 0.7%, `#FFFFFF` 0.6%, `#4A4A88` 0.2%, `#D9C9AD` 0.2%, `#7FA889` 0.2%, `#4F7D63` 0.2%

## Typography

- Headings: **Fraunces** (weight 600)
- Body: **Newsreader**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Fraunces:wght@600&family=Inter:wght@400;500;600&family=Newsreader:ital,wght@0,400;1,400&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Fraunces | 64 px | 600 | 65.28px | -0.64px |
| Heading / H2 | Fraunces | 38 px | 600 | 41.8px | normal |
| Subheading / H3 | Inter | 12 px | 600 | normal | 2.16px |
| Body | Newsreader | 21 px | 400 | 29.4px | normal |
| Button | Inter | 15 px | 600 | 22.5px | normal |
| Caption / eyebrow | Inter | 12 px | 600 | normal | 2.16px |

## Shape, space and motion

- Radius: sm 10 px, md 12 px, lg 12 px, pill (fully rounded)
- Shadows: sm: `rgba(20, 30, 25, 0.6) 0px 18px 34px -24px` · md: `rgba(20, 30, 25, 0.6) 0px 18px 34px -24px` · lg: `rgba(20, 30, 25, 0.6) 0px 18px 34px -24px`
- Spacing: base unit 2 px; common steps 6 px, 8 px, 10 px, 12 px, 14 px, 16 px, 18 px, 22 px, 30 px
- Layout: container 1292 px; breakpoints 959 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** observant, literary, grounded.

Writes like a good field notebook turned essay: precise about place, patient with detail and gently lyrical. Nothing is shouted, and the landscape does most of the talking.

**Do**

- Anchor sentences in specific places, species and seasons
- Use chapter titles that promise a scene, not a topic
- Let notes and captions add a fact, never a nudge

**Do not**

- Clickbait headlines or listicle numbers
- Urgent calls to subscribe mid-paragraph
- Vague nature clichés like pristine wilderness

## Taglines

1. What the marsh remembers
2. Slow stories from wet places
3. Long reads for people outdoors
4. Mud, tide and patience
5. Read it the way the tide arrives

**Boilerplate:** Fieldline Review is a nature magazine publishing long reads on landscape, restoration and the people who tend them, designed to be read slowly.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Start reading |
| secondaryCta | Open the margin notes |
| success | Text size saved |
| error | We lost the page. Reload to continue |
| empty | No notes in this chapter |

---
Source listing key `o:blog-split-feature`. Rebuild with `python3 scripts/brand-kit/build.py o:blog-split-feature`.
