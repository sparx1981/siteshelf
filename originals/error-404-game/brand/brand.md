# Pathfinder Docs — brand kit

*Developer documentation with a sense of humour.* Generated from the SiteShelf listing **404 Mini-Game** (Error Page); every value below is read from that page, not invented.

> **This page wandered off**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Space Grotesk |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **plane** glyph on a squircle tile. A paper plane matches the little runner in the game and the idea of finding your way. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#14121F` | Page background |
| surface | `#1D1A2E` | Cards, panels, raised areas |
| text | `#9D97BD` | Body and heading text |
| textMuted | `#F2F0FF` | Secondary text, captions |
| primary | `#6EF3C5` | Main actions, links, brand colour |
| secondary | `#B9A8FF` | Highlights, charts, second accent |
| border | `#4A4470` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#356C5B` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 6.69:1 | pass | pass |
| Muted text on background | 16.45:1 | pass | pass |
| Primary on background | 13.46:1 | pass | pass |
| Text on primary | 14.30:1 | pass | pass |
| Text on surface | 6.13:1 | pass | pass |

**Colours seen on the page** (share of use): `#14121F` 94.3%, `#6EF3C5` 2.5%, `#B9A8FF` 1.5%, `#FF7A8A` 1.4%, `#9D97BD` 0.2%, `#F2F0FF` 0.1%, `#06251C` 0.0%, `#4A4470` 0.0%, `#356C5B` 0.0%

## Typography

- Headings: **Space Grotesk** (weight 700)
- Body: **DM Sans**
- Google Fonts: `https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&family=Space+Grotesk:wght@500;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Space Grotesk | 200 px | 700 | 180px | -10px |
| Heading / H2 | Space Grotesk | 38 px | 700 | 43.7px | normal |
| Body | DM Sans | 17 px | 400 | 27.2px | normal |
| Button | Space Grotesk | 16 px | 700 | normal | normal |

## Shape, space and motion

- Radius: sm 12 px, md 20 px, lg 20 px, pill (fully rounded)
- Shadows: sm: `rgba(0, 0, 0, 0.8) 0px 30px 60px -40px` · md: `rgba(0, 0, 0, 0.8) 0px 30px 60px -40px` · lg: `rgba(0, 0, 0, 0.8) 0px 30px 60px -40px`
- Spacing: base unit 4 px; common steps 4 px, 6 px, 8 px, 10 px, 12 px, 14 px, 18 px, 20 px, 26 px
- Layout: container 1200 px; breakpoints 480 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** friendly, playful, helpful.

Pathfinder Docs apologises for the missing page with a grin, then immediately points to the right ones. The tone is a helpful senior engineer who still remembers being lost in the docs.

**Do**

- Admit the page is missing in the first line
- Offer three useful links before the joke ends
- Keep puns short and technical

**Do not**

- Do not blame the reader for a broken link
- Avoid long gags that delay the way back
- Never hide the home link behind the game

## Taglines

1. This page wandered off
2. Lost? Outrun a few bugs
3. 404, but we know the way
4. Back to the docs in one jump
5. Not found. Still fun

**Boilerplate:** Pathfinder Docs is the documentation site for a developer toolkit, built to keep readers moving even when a page has gone missing.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Play |
| secondaryCta | Back to home |
| success | New best score. Nicely jumped. |
| error | The game hit a bug. Try refreshing. |
| empty | No score yet. Press space to start. |

---
Source listing key `o:error-404-game`. Rebuild with `python3 scripts/brand-kit/build.py o:error-404-game`.
