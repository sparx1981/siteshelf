# VIKTORODDY — brand kit

*Designer portfolio.* Generated from the SiteShelf listing **Bold Portfolio Hero** (Portfolio); every value below is read from that page, not invented.

> **New design era**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter Bold (stand-in for Anton) |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **spark** glyph on a squircle tile. A bold asterisk-like spark matches the star glyph in the logo text. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F37E1C` | Page background |
| surface | `#FD2601` | Cards, panels, raised areas |
| text | `#FFFFFF` | Body and heading text |
| textMuted | `#FBD2B0` | Secondary text, captions |
| primary | `#FD2601` | Main actions, links, brand colour |
| secondary | `#2A1C14` | Highlights, charts, second accent |
| border | `#FFFFFF` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#2A1C14` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 2.69:1 | fail | fail |
| Muted text on background | 1.91:1 | fail | fail |
| Primary on background | 1.43:1 | fail | fail |
| Text on primary | 5.10:1 | pass | pass |
| Text on surface | 3.85:1 | fail | pass |

**Colours seen on the page** (share of use): `#F37E1C` 80.3%, `#FD2601` 16.1%, `#FFFFFF` 0.9%, `#2A1710` 0.7%, `#D9A07C` 0.5%, `#EE8442` 0.5%, `#1C1C24` 0.5%, `#000000` 0.5%, `#A04A3A` 0.0%, `#FBD2B0` 0.0%

## Typography

- Headings: **Anton** (weight 400)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Anton&family=Bebas+Neue&family=Inter:wght@400;500;600;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Anton | 172.8 px | 400 | 164.16px | 10.368px |
| Navigation | Inter | 14 px | 500 | normal | 1.96px |

## Shape, space and motion

- Radius: sm 50 px, md 50 px, lg 50 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 6 px, 12 px, 14 px, 18 px, 20 px, 24 px, 28 px, 40 px, 48 px
- Layout: container 1440 px; breakpoints 900 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** loud, restless, self-assured.

VIKTORODDY sounds like a designer who has stopped being modest. It is short, large and bold, with massive words in capitals and almost nothing after them.

**Do**

- Use one big word instead of a sentence
- Write in capitals for headlines only
- Let the projects carry the proof

**Do not**

- Do not write a biography paragraph
- Do not use 'passionate' or 'creative'
- Do not apologise for the size

## Taglines

1. New design era
2. Big ideas, bigger type
3. Design that refuses to whisper
4. See what comes next
5. Projects with a pulse

**Boilerplate:** VIKTORODDY is the portfolio of a designer working in bold, energetic visuals, showing selected projects and a blog.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | View projects |
| secondaryCta | Read the blog |
| success | Message sent. I reply within a day. |
| error | That did not send. Try again. |
| empty | No projects in this category. |

---
Source listing key `m:bold-portfolio-hero`. Rebuild with `python3 scripts/brand-kit/build.py m:bold-portfolio-hero`.
