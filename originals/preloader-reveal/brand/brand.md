# Kōdo Atelier — brand kit

*Four-person studio making brand systems and sites.* Generated from the SiteShelf listing **Preloader & Curtain Reveal** (Loaders); every value below is read from that page, not invented.

> **Digital craft with a slowburn**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Syne |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **monogram** glyph on a squircle tile. A bold K monogram in vermilion works as a studio seal on a preloader. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#0B0B0C` | Page background |
| surface | `#F2EFE8` | Cards, panels, raised areas |
| text | `#F2EFE8` | Body and heading text |
| textMuted | `#FF4B2B` | Secondary text, captions |
| primary | `#FF4B2B` | Main actions, links, brand colour |
| secondary | `#FF9C8A` | Highlights, charts, second accent |
| border | `#2B2B2B` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#71261B` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 17.13:1 | pass | pass |
| Muted text on background | 5.90:1 | pass | pass |
| Primary on background | 5.90:1 | pass | pass |
| Text on primary | 5.89:1 | pass | pass |
| Text on surface | 1.00:1 | fail | fail |

**Colours seen on the page** (share of use): `#0B0B0C` 51.5%, `#F2EFE8` 48.4%, `#FF4B2B` 0.1%, `#FF9C8A` 0.0%, `#2B2B2B` 0.0%, `#71261B` 0.0%

## Typography

- Headings: **Syne** (weight 800)
- Body: **Space Mono**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Space+Mono&family=Syne:wght@700;800&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Syne | 150 px | 800 | 138px | -4.5px |
| Body | Space Mono | 16 px | 400 | 24px | normal |
| Button | Space Mono | 13 px | 400 | normal | normal |
| Navigation | Space Mono | 12 px | 400 | normal | 1.44px |
| Caption / eyebrow | Syne | 65 px | 800 | 52px | -13px |

## Shape, space and motion

- Radius: sm 0 px, md 0 px, lg 0 px
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 14 px, 16 px, 20 px, 22 px, 24 px, 30 px, 48 px, 54 px
- Layout: container 1200 px; breakpoints 560 px
- Motion: 900 ms, `cubic-bezier(0.2`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** precise, confident, wry.

A small studio that thinks carefully and talks briefly: confident, a little deadpan and obsessed with feel. Copy is short and typeset like a caption.

**Do**

- Use verbs of making, such as design, build and ship
- Keep lines to a breath
- Let the studio's humour show in status lines

**Do not**

- Agency cliches like full-service solutions
- Long client lists
- Hype about awards

## Taglines

1. Digital craft with a slowburn
2. Make it feel right
3. Small studio, long care
4. Brand systems, built to last
5. Warming up, almost there

**Boilerplate:** Kōdo Atelier is a four-person studio making brand systems, websites and small tools for people who care how things feel.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Replay |
| secondaryCta | Skip intro |
| success | Welcome in. The page is ready |
| error | The reveal stalled. Skip to the page |
| empty | No work to show yet |

---
Source listing key `o:preloader-reveal`. Rebuild with `python3 scripts/brand-kit/build.py o:preloader-reveal`.
