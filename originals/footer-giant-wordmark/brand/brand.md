# Grainhouse — brand kit

*Independent design studio.* Generated from the SiteShelf listing **Giant Wordmark Footer** (Footer); every value below is read from that page, not invented.

> **Make it plain, make it big**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Archivo |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **sprout** glyph on a squircle tile. A sprout from grain is the pun the name already makes, set under a huge uppercase wordmark. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F4F1EA` | Page background |
| surface | `#111110` | Cards, panels, raised areas |
| text | `#111110` | Body and heading text |
| textMuted | `#6B675D` | Secondary text, captions |
| primary | `#D4FF3F` | Main actions, links, brand colour |
| secondary | `#758C23` | Highlights, charts, second accent |
| border | `#D4D2CB` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#758C23` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 16.75:1 | pass | pass |
| Muted text on background | 5.00:1 | pass | pass |
| Primary on background | 1.02:1 | fail | fail |
| Text on primary | 17.00:1 | pass | pass |
| Text on surface | 1.00:1 | fail | fail |

**Colours seen on the page** (share of use): `#F4F1EA` 67.3%, `#111110` 29.0%, `#D4FF3F` 1.8%, `#3A3A36` 1.8%, `#A39F94` 0.0%, `#6B675D` 0.0%, `#758C23` 0.0%, `#D4D2CB` 0.0%

## Typography

- Headings: **Archivo** (weight 900)
- Body: **Archivo**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..125,400..900&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Archivo | 64 px | 900 | 64px | -1.28px |
| Heading / H2 | Archivo | 12 px | 600 | 18px | 1.44px |
| Button | Archivo | 13 px | 600 | normal | normal |
| Navigation | Archivo | 15 px | 400 | 22.5px | normal |

## Shape, space and motion

- Radius: sm 0 px, md 0 px, lg 0 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 3 px, 8 px, 10 px, 14 px, 16 px, 18 px, 20 px, 24 px, 40 px
- Layout: container 1200 px; breakpoints 700 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** bold, grounded, lively.

Grainhouse writes like a small studio that is confident enough to let a big word do the talking. Copy is brief, a bit wry and always points to the work.

**Do**

- Keep copy to a line wherever possible
- Point to the work, not to the studio's virtues
- Use warm, human verbs: make, grow, keep

**Do not**

- Do not list services in jargon
- Do not use 'award-winning' as a lead
- Do not explain the joke

## Taglines

1. Make it plain, make it big
2. A studio heard across the room
3. Small team, loud wordmark
4. Good work grows from grain
5. Design, kept honest

**Boilerplate:** Grainhouse is an independent design studio that makes identities, websites and editorial work for small, ambitious companies.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Say hello |
| secondaryCta | See the work |
| success | Message sent. We reply within two working days. |
| error | That did not send. Email us directly instead. |
| empty | No work to show in this category yet. |

---
Source listing key `o:footer-giant-wordmark`. Rebuild with `python3 scripts/brand-kit/build.py o:footer-giant-wordmark`.
