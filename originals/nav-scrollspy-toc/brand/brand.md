# Kiln Docs — brand kit

*Documentation for deploying static sites.* Generated from the SiteShelf listing **Scrollspy Table of Contents** (Navigation); every value below is read from that page, not invented.

> **From laptop to edge in ten minutes**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **flame** glyph on a circle tile. A flame stands for firing a site live, in line with the kiln name. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#FFFFFF` | Page background |
| surface | `#0F172A` | Cards, panels, raised areas |
| text | `#374151` | Body and heading text |
| textMuted | `#111827` | Secondary text, captions |
| primary | `#0D9488` | Main actions, links, brand colour |
| secondary | `#7AC4BE` | Highlights, charts, second accent |
| border | `#E5E7EB` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#0C4542` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 10.31:1 | pass | pass |
| Muted text on background | 17.74:1 | pass | pass |
| Primary on background | 3.74:1 | fail | pass |
| Text on primary | 5.25:1 | pass | pass |
| Text on surface | 1.73:1 | fail | fail |

**Colours seen on the page** (share of use): `#FFFFFF` 91.0%, `#0F172A` 7.3%, `#374151` 1.4%, `#D6E0F5` 0.2%, `#6B7280` 0.1%, `#0D9488` 0.0%, `#7AC4BE` 0.0%, `#0B0B0F` 0.0%, `#0C4542` 0.0%

## Typography

- Headings: **Inter** (weight 700)
- Body: **Inter**
- Mono: **JetBrains Mono**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Inter | 36 px | 700 | 41.4px | -0.72px |
| Heading / H2 | Inter | 26 px | 700 | 44.2px | -0.26px |
| Subheading / H3 | Inter | 19 px | 700 | 32.3px | normal |
| Body | Inter | 16 px | 400 | 27.2px | normal |
| Mono | JetBrains Mono | 13 px | 400 | 20.8px | normal |

## Shape, space and motion

- Radius: sm 12 px, md 12 px, lg 12 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 2 px, 4 px, 8 px, 12 px, 14 px, 16 px, 24 px, 28 px, 48 px
- Layout: container 1040 px; breakpoints 960 px
- Motion: 250 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** clear, practical, technical.

A senior engineer writing a guide for a colleague: direct, numbered and free of fluff. It gives the command, the expected result and the next step.

**Do**

- Use imperative verbs and numbered steps
- Show exact commands and versions, such as Node 20
- State the expected result after each step

**Do not**

- Humour that buries the command
- Undefined jargon
- Long preambles before the first step

## Taglines

1. From laptop to edge in ten minutes
2. Deploy, then relax
3. Docs that get to the point
4. Build it, fire it, ship it
5. Static sites, solid docs

**Boilerplate:** Kiln Docs is the documentation for Kiln, a platform that takes static sites from a laptop to a global edge network in about ten minutes.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Start the guide |
| secondaryCta | Copy command |
| success | Copied to clipboard |
| error | Deploy failed. Check the build log |
| empty | No results. Try another term |

---
Source listing key `o:nav-scrollspy-toc`. Rebuild with `python3 scripts/brand-kit/build.py o:nav-scrollspy-toc`.
