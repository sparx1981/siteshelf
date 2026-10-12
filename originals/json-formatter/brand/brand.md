# Bracewell — brand kit

*JSON formatter and tree viewer for developers.* Generated from the SiteShelf listing **JSON Formatter & Tree Viewer** (Tools); every value below is read from that page, not invented.

> **Valid JSON, instantly**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **stack** glyph on a squircle tile. Stacked bars suggest nested levels of a JSON tree in a very compact mark. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#0F1115` | Page background |
| surface | `#171A21` | Cards, panels, raised areas |
| text | `#8B93A3` | Body and heading text |
| textMuted | `#7DD3FC` | Secondary text, captions |
| primary | `#38BDF8` | Main actions, links, brand colour |
| secondary | `#86EFAC` | Highlights, charts, second accent |
| border | `#272C36` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#1E5671` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 6.12:1 | pass | pass |
| Muted text on background | 11.33:1 | pass | pass |
| Primary on background | 8.82:1 | pass | pass |
| Text on primary | 9.17:1 | pass | pass |
| Text on surface | 5.64:1 | pass | pass |

**Colours seen on the page** (share of use): `#0F1115` 99.3%, `#38BDF8` 0.2%, `#232836` 0.1%, `#8B93A3` 0.1%, `#7DD3FC` 0.1%, `#555D6E` 0.1%, `#E6E9EF` 0.1%, `#86EFAC` 0.0%, `#4ADE80` 0.0%, `#04202E` 0.0%

## Typography

- Headings: **Inter** (weight 600)
- Body: **JetBrains Mono**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@500;600;700&family=JetBrains+Mono:wght@400;500&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Button | Inter | 13.5 px | 600 | normal | normal |

## Shape, space and motion

- Radius: sm 5 px, md 9 px, lg 12 px
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 4 px, 6 px, 8 px, 10 px, 12 px, 14 px, 16 px, 18 px, 20 px
- Layout: container 1200 px; breakpoints 900 px
- Motion: 150 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** terse, exact, developer-grade.

Writes error messages like a good linter and nothing else: terse, exact and slightly dry. If it can give a line and column, it will.

**Do**

- Report errors with line, column and the offending token
- Use correct JSON terms such as key, value and array
- Keep labels to a single verb

**Do not**

- Cutesy error text
- Vague words like invalid data
- Marketing copy inside the tool

## Taglines

1. Valid JSON, instantly
2. Format, minify, move on
3. See the error where it lives
4. Brace for clean data
5. Trees you can actually read

**Boilerplate:** Bracewell is a developer tool that validates, formats and minifies JSON, shows exact error positions and renders a collapsible, searchable tree.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Format |
| secondaryCta | Copy path |
| success | Formatted. 214 lines |
| error | Unexpected token at line 12, column 5 |
| empty | Paste JSON to begin |

---
Source listing key `o:json-formatter`. Rebuild with `python3 scripts/brand-kit/build.py o:json-formatter`.
