# Inkwell & Co. — brand kit

*Independent type foundry and lab.* Generated from the SiteShelf listing **Type Playground** (Typography); every value below is read from that page, not invented.

> **Click the text to edit it**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Fraunces |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **drop** glyph. An ink drop is the classic mark of type and print. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#FAF8F4` | Page background |
| surface | `#1C1A17` | Cards, panels, raised areas |
| text | `#1C1A17` | Body and heading text |
| textMuted | `#77715F` | Secondary text, captions |
| primary | `#D4472B` | Main actions, links, brand colour |
| secondary | `#E79A8A` | Highlights, charts, second accent |
| border | `#E8E3D9` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#EDB2A6` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 16.37:1 | pass | pass |
| Muted text on background | 4.59:1 | pass | pass |
| Primary on background | 4.18:1 | fail | pass |
| Text on primary | 4.43:1 | fail | pass |
| Text on surface | 1.00:1 | fail | fail |

**Colours seen on the page** (share of use): `#FAF8F4` 82.9%, `#1C1A17` 16.8%, `#77715F` 0.2%, `#EFE9D9` 0.1%, `#D4472B` 0.0%, `#E79A8A` 0.0%, `#EDB2A6` 0.0%

## Typography

- Headings: **Fraunces** (weight 600)
- Body: **Fraunces**
- Google Fonts: `https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Fraunces:wght@100..900&family=Inter:wght@100..900&family=Playfair+Display:wght@400..900&family=Space+Grotesk:wght@300..700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Subheading / H3 | Fraunces | 22 px | 600 | 25.3px | normal |
| Body | Fraunces | 18 px | 400 | 28.8px | normal |
| Button | Fraunces | 17 px | 400 | normal | normal |
| Caption / eyebrow | Inter | 11 px | 500 | normal | normal |

## Shape, space and motion

- Radius: sm 5 px, md 10 px, lg 14 px, pill (fully rounded)
- Shadows: sm: `rgba(0, 0, 0, 0.12) 0px 1px 3px 0px` · md: `rgba(0, 0, 0, 0.12) 0px 1px 3px 0px` · lg: `rgba(0, 0, 0, 0.12) 0px 1px 3px 0px`
- Spacing: base unit 4 px; common steps 2 px, 3 px, 4 px, 6 px, 8 px, 10 px, 12 px, 16 px, 18 px
- Layout: container 1200 px; breakpoints 900 px
- Motion: 250 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** curious, tasteful, tactile.

Inkwell & Co. sounds like a foundry owner showing a friend a specimen sheet. It is knowledgeable, quietly opinionated and always more interested in the letters than in itself.

**Do**

- Name the typeface, weight and size
- Use specimen language: ascender, counter, tracking
- Invite the reader to type and test

**Do not**

- Do not call fonts 'beautiful' without a reason
- Do not mention trends
- Do not use more than one adjective per feature

## Taglines

1. Click the text to edit it
2. Set it, test it, copy the CSS
3. Type, tried at every size
4. A specimen sheet that listens
5. Letters worth looking at twice

**Boilerplate:** Inkwell & Co. is an independent type foundry whose Type Lab lets designers test fonts, pairings and settings live and copy the resulting CSS.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Copy CSS |
| secondaryCta | Reset |
| success | CSS copied. Paste it into your stylesheet. |
| error | That weight is not available for this family. |
| empty | Type something to preview it. |

---
Source listing key `o:type-playground`. Rebuild with `python3 scripts/brand-kit/build.py o:type-playground`.
