# Pairhouse — brand kit

*Font pairing tool with live editorial samples.* Generated from the SiteShelf listing **Font Pairing Picker** (Typography); every value below is read from that page, not invented.

> **Find the pair that reads right**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **monogram** glyph on a squircle tile. A serif P stands in for the typographic subject of the product itself. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#FAF6EE` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#1F1B16` | Body and heading text |
| textMuted | `#7A6F5C` | Secondary text, captions |
| primary | `#B4451F` | Main actions, links, brand colour |
| secondary | `#D69984` | Highlights, charts, second accent |
| border | `#E9E1D2` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#D69984` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 15.88:1 | pass | pass |
| Muted text on background | 4.58:1 | pass | pass |
| Primary on background | 5.11:1 | pass | pass |
| Text on primary | 5.51:1 | pass | pass |
| Text on surface | 17.12:1 | pass | pass |

**Colours seen on the page** (share of use): `#FAF6EE` 92.4%, `#1F1B16` 6.3%, `#B4451F` 0.8%, `#F3E9D6` 0.1%, `#7A6F5C` 0.1%, `#5D5445` 0.1%, `#D69984` 0.0%

## Typography

- Headings: **Inter** (weight 700)
- Body: **Source Sans 3**
- Mono: **monospace**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500&family=DM+Serif+Display&family=Fraunces:wght@400;600;800&family=Inter:wght@400;600&family=Lora:ital,wght@0,400;1,400&family=Playfair+Display:wght@400;700;900&family=Source+Sans+3:wght@400;600&family=Space+Grotesk:wght@400;500;700&family=Work+Sans:wght@400;500&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Inter | 16 px | 700 | 24px | normal |
| Heading / H2 | Playfair Display | 52 px | 700 | 54.6px | normal |
| Body | Source Sans 3 | 18 px | 400 | 30.6px | normal |
| Button | Inter | 14 px | 600 | normal | normal |
| Caption / eyebrow | Inter | 12.5 px | 400 | 18.75px | normal |
| Mono | monospace | 12 px | 400 | 18px | normal |

## Shape, space and motion

- Radius: sm 8 px, md 10 px, lg 10 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 2 px; common steps 2 px, 8 px, 9 px, 10 px, 12 px, 14 px, 18 px, 20 px, 22 px
- Layout: container 1200 px; breakpoints 860 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** thoughtful, tasteful, hands-on.

A type designer teaching by example: precise about weights and sizes, relaxed about taste. It always shows the pair before it explains it.

**Do**

- Name typefaces, sizes and weights exactly
- Describe a pairing by its effect on reading
- Offer the CSS right away

**Do not**

- Declaring a font right or wrong
- Jargon without an example
- Hype about trends

## Taglines

1. Find the pair that reads right
2. Type that disappears into reading
3. Try before you copy
4. Two fonts, one good page
5. Headings and body, in harmony

**Boilerplate:** Pairhouse is a font pairing tool that lets designers browse curated heading and body combinations on a live editorial sample and copy the CSS.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Copy CSS |
| secondaryCta | Continue reading |
| success | CSS copied to clipboard |
| error | Couldn't copy. Select the code by hand |
| empty | No pair selected. Choose one |

---
Source listing key `o:typography-pairing-picker`. Rebuild with `python3 scripts/brand-kit/build.py o:typography-pairing-picker`.
