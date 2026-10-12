# NeoVision — brand kit

*Futuristic digital experiences studio.* Generated from the SiteShelf listing **NeoVision** (Landing Page); every value below is read from that page, not invented.

> **A new digital universe**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter Bold (stand-in for ui-sans-serif) |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **aperture** glyph on a squircle tile. An aperture reflects the vision in the name. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#000000` | Page background |
| surface | `#0F0F0F` | Cards, panels, raised areas |
| text | `#FFFFFF` | Body and heading text |
| textMuted | `#A3A3A3` | Secondary text, captions |
| primary | `#35495F` | Main actions, links, brand colour |
| secondary | `#B7C8D8` | Highlights, charts, second accent |
| border | `#F5F5F5` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#B7C8D8` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 21.00:1 | pass | pass |
| Muted text on background | 8.33:1 | pass | pass |
| Primary on background | 2.27:1 | fail | fail |
| Text on primary | 9.25:1 | pass | pass |
| Text on surface | 19.17:1 | pass | pass |

**Colours seen on the page** (share of use): `#000000` 51.8%, `#0F0F0F` 28.8%, `#FBFDFD` 16.5%, `#222222` 2.2%, `#35495F` 0.2%, `#B7C8D8` 0.1%, `#8AA1B8` 0.1%, `#5D7690` 0.1%, `#A3A3A3` 0.1%, `#DDDDDD` 0.1%

## Typography

- Headings: **ui-sans-serif** (weight 300)
- Body: **ui-sans-serif**

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | ui-sans-serif | 88 px | 300 | 83.6px | -2.2px |
| Heading / H2 | ui-sans-serif | 72 px | 300 | 75.6px | -1.8px |
| Subheading / H3 | ui-sans-serif | 30 px | 300 | 40.5px | normal |
| Body | ui-sans-serif | 14 px | 400 | 21px | normal |
| Button | ui-sans-serif | 14 px | 500 | 21px | normal |
| Navigation | ui-sans-serif | 17 px | 600 | 25.5px | 0.34px |

## Shape, space and motion

- Radius: sm 4 px, md 16 px, lg 16 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 4 px, 8 px, 12 px, 14 px, 16 px, 20 px, 24 px, 28 px, 32 px
- Layout: container 1024 px; breakpoints 420 px, 768 px, 1024 px, 1280 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** bold, futuristic, minimal.

Sounds like a studio from the near future: terse, confident and minimal. Headlines are in capitals, details are sparse.

**Do**

- Use capitals for headlines only
- Keep lines to a few words
- Name the technology plainly

**Do not**

- No hype about the metaverse
- No dense paragraphs
- No cliché sci-fi phrases

## Taglines

1. A new digital universe
2. Look further than the screen
3. Limitless possibilities
4. The digital frontier, opened
5. See what's next

**Boilerplate:** NeoVision is a futuristic studio creating digital experiences, from interfaces to immersive worlds, for brands that want to look beyond the screen.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Get started |
| secondaryCta | Learn more |
| success | Request sent |
| error | Something went wrong, try again |
| empty | Nothing here yet |

---
Source listing key `m:neovision`. Rebuild with `python3 scripts/brand-kit/build.py m:neovision`.
