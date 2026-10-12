# Wren & Lodge — brand kit

*Small-batch furniture, made to be repaired.* Generated from the SiteShelf listing **Founders Letter About Page** (About Page); every value below is read from that page, not invented.

> **Honest wood, plainly made**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Newsreader |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **home** glyph on a squircle tile. A simple house-and-roof shape reads as a workshop and a home, matching a furniture maker that speaks like a neighbour. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F8F3EA` | Page background |
| surface | `#FFE58A` | Cards, panels, raised areas |
| text | `#241F19` | Body and heading text |
| textMuted | `#243B9C` | Secondary text, captions |
| primary | `#243B9C` | Main actions, links, brand colour |
| secondary | `#FFE58A` | Highlights, charts, second accent |
| border | `#241F19` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#FFE58A` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 14.79:1 | pass | pass |
| Muted text on background | 8.71:1 | pass | pass |
| Primary on background | 8.71:1 | pass | pass |
| Text on primary | 9.63:1 | pass | pass |
| Text on surface | 13.09:1 | pass | pass |

**Colours seen on the page** (share of use): `#F8F3EA` 96.6%, `#FFE58A` 2.3%, `#241F19` 1.0%, `#243B9C` 0.1%, `#7A6F60` 0.0%, `#E0D6C2` 0.0%, `#FFFFFF` 0.0%

## Typography

- Headings: **Newsreader** (weight 500)
- Body: **Newsreader**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Newsreader:ital,wght@0,400;0,500;0,600;1,400&family=Work+Sans:wght@500;600&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Newsreader | 56 px | 500 | 61.6px | normal |
| Heading / H2 | Work Sans | 13 px | 600 | normal | 1.82px |
| Body | Newsreader | 20 px | 400 | 34px | normal |
| Button | Newsreader | 20 px | 400 | 34px | normal |

## Shape, space and motion

- Radius: sm 3 px, md 6 px, lg 6 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 4 px, 8 px, 10 px, 12 px, 16 px, 20 px, 24 px, 28 px, 52 px
- Layout: container 1200 px; breakpoints 600 px, 1000 px
- Motion: 300 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** candid, warm, unhurried.

Wren & Lodge writes the way a maker talks across a workbench: plainly, in the first person plural, with the occasional admission of a mistake. Sentences are long enough to breathe and short enough to be believed.

**Do**

- Write in letter form, as 'we' speaking to 'you', and sign off with names
- Give the real cost or the real flaw before the benefit
- Use workshop nouns: oak, joint, glue, offcut, bench

**Do not**

- Never use words like premium, curated or bespoke
- Do not hide a price or a delay behind soft phrasing
- Avoid exclamation marks and sales urgency

## Taglines

1. Honest wood, plainly made
2. Built to be mended, not replaced
3. Furniture that keeps its word
4. A chair you can fix yourself
5. Small batches, long lives

**Boilerplate:** Wren & Lodge is a small furniture maker building repairable pieces from honest materials in limited batches, with fair pay and visible costs on every order.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Read the full letter |
| secondaryCta | Print this letter |
| success | Thank you for reading. Write back any time. |
| error | That did not go through. Please try once more. |
| empty | Nothing here yet, but we are working on it. |

---
Source listing key `o:about-founders-letter`. Rebuild with `python3 scripts/brand-kit/build.py o:about-founders-letter`.
