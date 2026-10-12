# Obsidian & Oat — brand kit

*Small-batch coffee roasted in a stone barn.* Generated from the SiteShelf listing **Curtain Reveal Footer** (Footer); every value below is read from that page, not invented.

> **Roasted slowly. Delivered warmly.**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Syne |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **flame** glyph on a squircle tile. A flame represents the roast, the thing the brand does slowly and well. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#121212` | Page background |
| surface | `#F3EDE2` | Cards, panels, raised areas |
| text | `#F3EDE2` | Body and heading text |
| textMuted | `#A59D8E` | Secondary text, captions |
| primary | `#E8D3A8` | Main actions, links, brand colour |
| secondary | `#8A4B2A` | Highlights, charts, second accent |
| border | `#E3D9C6` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#8A4B2A` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 16.08:1 | pass | pass |
| Muted text on background | 6.97:1 | pass | pass |
| Primary on background | 12.77:1 | pass | pass |
| Text on primary | 13.39:1 | pass | pass |
| Text on surface | 1.00:1 | fail | fail |

**Colours seen on the page** (share of use): `#121212` 52.8%, `#F3EDE2` 40.6%, `#FFFFFF` 5.8%, `#E8D3A8` 0.3%, `#D9BD87` 0.2%, `#5F574B` 0.1%, `#8A4B2A` 0.1%, `#2F5A47` 0.0%, `#A0432F` 0.0%, `#A59D8E` 0.0%

## Typography

- Headings: **Syne** (weight 800)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Syne:wght@700;800&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Syne | 92 px | 800 | 88.32px | -2.76px |
| Heading / H2 | Syne | 24 px | 700 | normal | normal |
| Subheading / H3 | Inter | 13 px | 700 | normal | 1.82px |
| Body | Inter | 19 px | 400 | 30.4px | normal |
| Button | Inter | 16 px | 600 | normal | normal |
| Navigation | Inter | 15 px | 500 | normal | -0.22px |

## Shape, space and motion

- Radius: sm 12 px, md 24 px, lg 28 px, pill (fully rounded)
- Shadows: sm: `rgba(0, 0, 0, 0.6) 0px 40px 80px -10px` · md: `rgba(0, 0, 0, 0.6) 0px 40px 80px -10px` · lg: `rgba(0, 0, 0, 0.6) 0px 40px 80px -10px`
- Spacing: base unit 4 px; common steps 2 px, 5 px, 6 px, 10 px, 12 px, 16 px, 20 px, 24 px, 28 px
- Layout: container 1180 px; breakpoints 700 px, 860 px
- Motion: 150 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** unhurried, rustic, warm.

Sounds like a roaster talking over the counter: slow, sensory, proud of the farms. Sentences are short and dated by the week, not the year.

**Do**

- Name the farm or origin
- Describe taste with one concrete comparison
- State roast and post days plainly

**Do not**

- No coffee snob jargon unexplained
- No rush or scarcity language
- No superlatives without a reason

## Taglines

1. Roasted slowly. Delivered warmly.
2. Four farms, one barn
3. Coffee that takes its time
4. Roasted twice a week, posted fresh
5. Stone barn, slow roast

**Boilerplate:** Obsidian & Oat is a small coffee roastery that buys from four farms it has visited, roasts twice a week in a stone barn and posts orders the same morning.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Join |
| secondaryCta | Back to top |
| success | You're on the list, expect a note on Thursday |
| error | That email did not go through, try again |
| empty | No beans in your basket yet |

---
Source listing key `o:footer-curtain`. Rebuild with `python3 scripts/brand-kit/build.py o:footer-curtain`.
