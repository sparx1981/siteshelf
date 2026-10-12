# Viktor-O — brand kit

*Modern architect portfolio.* Generated from the SiteShelf listing **Viktor Portfolio** (Portfolio); every value below is read from that page, not invented.

> **Clean structure, honest materials**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter Bold (stand-in for Orbitron) |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **monogram** glyph on a squircle tile. A monogram V keeps a personal portfolio spare and architectural. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#000000` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#FFFFFF` | Body and heading text |
| textMuted | `#A6A6A6` | Secondary text, captions |
| primary | `#FFFFFF` | Main actions, links, brand colour |
| secondary | `#8C8C8C` | Highlights, charts, second accent |
| border | `#FFFFFF` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#8C8C8C` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 21.00:1 | pass | pass |
| Muted text on background | 8.63:1 | pass | pass |
| Primary on background | 21.00:1 | pass | pass |
| Text on primary | 19.64:1 | pass | pass |
| Text on surface | 1.00:1 | fail | fail |

**Colours seen on the page** (share of use): `#000000` 99.6%, `#FFFFFF` 0.3%, `#E8F2FF` 0.1%, `#A6A6A6` 0.0%, `#8C8C8C` 0.0%

## Typography

- Headings: **Orbitron** (weight 700)
- Body: **Space Grotesk**
- Google Fonts: `https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&family=Orbitron:wght@500;700;800&family=Space+Grotesk:wght@300;400;500;600&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Orbitron | 72 px | 700 | 68.4px | -3.6px |
| Subheading / H3 | JetBrains Mono | 13 px | 500 | normal | 0.52px |
| Body | Space Grotesk | 17 px | 300 | 27.2px | normal |
| Button | JetBrains Mono | 12 px | 400 | normal | 1.68px |
| Caption / eyebrow | Space Grotesk | 12 px | 400 | normal | normal |

## Shape, space and motion

- Radius: sm 14 px, md 20 px, lg 20 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 7 px, 8 px, 10 px, 12 px, 14 px, 16 px, 20 px, 24 px, 32 px
- Layout: container 1200 px; breakpoints 860 px, 1024 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** minimal, disciplined, cinematic.

Viktor-O writes with the terseness of a drawing set: precise, spare and confident. Every sentence earns its place on the page, like a line on a plan.

**Do**

- State materials and structure plainly
- Use short, declarative sentences
- Name projects and years, nothing more

**Do not**

- Do not use flowery architectural jargon
- Avoid superlatives and awards bragging
- Never pad a project description

## Taglines

1. Clean structure, honest materials
2. Spaces and systems, designed together
3. Nothing that does not earn its place
4. Architecture with discipline
5. Built with intent

**Boilerplate:** Viktor-O is the portfolio of a modern architect designing spaces and systems with clean structure and honest materials, presented as a minimal two-page showcase.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | View Project |
| secondaryCta | Next Project |
| success | Message sent. I will respond shortly. |
| error | That did not send. Please email me directly. |
| empty | No projects in this category. |

---
Source listing key `m:viktor-portfolio`. Rebuild with `python3 scripts/brand-kit/build.py m:viktor-portfolio`.
