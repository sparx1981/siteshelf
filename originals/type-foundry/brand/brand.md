# Marrow Type — brand kit

*Independent type foundry with variable fonts.* Generated from the SiteShelf listing **Type Foundry Specimen Hero** (Hero Section); every value below is read from that page, not invented.

> **Letters with something to say**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Bricolage Grotesque |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **monogram** glyph on a squircle tile. A bold letterform is the natural mark for a type foundry. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F1EFE9` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#14130F` | Body and heading text |
| textMuted | `#61605B` | Secondary text, captions |
| primary | `#14130F` | Main actions, links, brand colour |
| secondary | `#7E7D7B` | Highlights, charts, second accent |
| border | `#14130F` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#7E7D7B` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 16.17:1 | pass | pass |
| Muted text on background | 5.48:1 | pass | pass |
| Primary on background | 16.17:1 | pass | pass |
| Text on primary | 18.59:1 | pass | pass |
| Text on surface | 18.59:1 | pass | pass |

**Colours seen on the page** (share of use): `#F1EFE9` 98.1%, `#FFFFFF` 1.6%, `#14130F` 0.3%, `#61605B` 0.0%, `#7E7D7B` 0.0%

## Typography

- Headings: **Bricolage Grotesque** (weight 500)
- Body: **Geist Mono**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&family=Geist+Mono:wght@400;500&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Button | Bricolage Grotesque | 36 px | 500 | normal | normal |

## Shape, space and motion

- Radius: sm 0 px, md 0 px, lg 0 px
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 10 px, 12 px, 20 px, 32 px, 40 px
- Layout: container 1200 px; breakpoints 800 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** precise, expressive, bookish.

Marrow Type writes with the dry authority of a type specimen: exact about weight, width and slant, and quietly proud of its drawings. It lets the letters carry the personality.

**Do**

- Use type terms correctly: weight, slant, optical size
- Lead with the glyphs, then the description
- Show real characters instead of describing them

**Do not**

- Do not use fancy words for ordinary shapes
- Avoid design hype like 'timeless'
- Never present a font without a specimen

## Taglines

1. Letters with something to say
2. Weight and slant, in your hands
3. Type drawn, not decorated
4. Try the word. Test the weight
5. Variable by nature

**Boilerplate:** Marrow Type is an independent type foundry releasing variable fonts with live specimens, so designers can test weight, slant and glyphs before they license.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Try the typeface |
| secondaryCta | View specimens |
| success | Specimen copied. |
| error | That character is not in this font. |
| empty | Type a word to see it set. |

---
Source listing key `o:type-foundry`. Rebuild with `python3 scripts/brand-kit/build.py o:type-foundry`.
