# Studio Mara — brand kit

*Independent design studio portfolio, 2026.* Generated from the SiteShelf listing **Loader Animation** (Component); every value below is read from that page, not invented.

> **Design, create, inspire**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Instrument Serif |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **orbit** glyph on a circle tile. A simple orbiting ring reflects a circling loader and a small studio mark. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#0A0A0A` | Page background |
| surface | `#141414` | Cards, panels, raised areas |
| text | `#F5F5F5` | Body and heading text |
| textMuted | `#A2A2A2` | Secondary text, captions |
| primary | `#111C42` | Main actions, links, brand colour |
| secondary | `#89AACC` | Highlights, charts, second accent |
| border | `#1F1F1F` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#89AACC` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 18.16:1 | pass | pass |
| Muted text on background | 7.76:1 | pass | pass |
| Primary on background | 1.20:1 | fail | fail |
| Text on primary | 16.55:1 | pass | pass |
| Text on surface | 16.90:1 | pass | pass |

**Colours seen on the page** (share of use): `#0A0A0A` 96.2%, `#111C42` 0.8%, `#1B2A5A` 0.8%, `#0A122E` 0.7%, `#FFFFFF` 0.5%, `#C9724A` 0.3%, `#7A3A7E` 0.2%, `#522C68` 0.2%, `#2F1C4D` 0.2%, `#A2A2A2` 0.1%

## Typography

- Headings: **Instrument Serif** (weight 400)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Instrument Serif | 112 px | 400 | 106.4px | -2.24px |
| Subheading / H3 | Instrument Serif | 26 px | 400 | normal | normal |
| Body | Inter | 17 px | 400 | 27.2px | normal |
| Button | Inter | 14 px | 500 | 14px | normal |
| Navigation | Instrument Serif | 26 px | 400 | normal | normal |
| Caption / eyebrow | Inter | 17 px | 400 | 27.2px | 5.1px |

## Shape, space and motion

- Radius: sm 14 px, md 14 px, lg 14 px, pill (fully rounded)
- Shadows: sm: `rgba(137, 170, 204, 0.35) 0px 0px 8px 0px` · md: `rgba(137, 170, 204, 0.35) 0px 0px 8px 0px` · lg: `rgba(137, 170, 204, 0.35) 0px 0px 8px 0px`
- Spacing: base unit 4 px; common steps 2 px, 6 px, 8 px, 14 px, 16 px, 22 px, 24 px, 28 px, 32 px
- Layout: container 1280 px; breakpoints 560 px, 620 px, 768 px, 1024 px
- Motion: 200 ms, `cubic-bezier(0.4`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** elegant, minimal, assured.

Sounds like a studio statement in italic serif: brief, composed and never loud. It lets the reveal, the pause and the work do the persuading.

**Do**

- Use fewer than ten words per line
- Favour verbs like design, create and inspire
- Let whitespace carry the pause

**Do not**

- Do not overexplain the work
- Do not use agency jargon
- Do not add exclamation marks

## Taglines

1. Design, create, inspire
2. Quiet studio, considered work
3. Made with care in 2026
4. Less noise, more intention
5. Work that arrives gently

**Boilerplate:** Studio Mara is an independent design studio whose 2026 portfolio presents selected work with a minimal, motion-led reveal and an unhurried, italic serif voice.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | View selected work |
| secondaryCta | Replay loading screen |
| success | Welcome. The studio is ready. |
| error | Something paused. Please reload. |
| empty | No work to show yet. |

---
Source listing key `m:loader-animation`. Rebuild with `python3 scripts/brand-kit/build.py m:loader-animation`.
