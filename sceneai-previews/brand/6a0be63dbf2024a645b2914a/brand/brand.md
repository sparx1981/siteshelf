# Aurelion — brand kit

*Architecture and design journal.* Generated from the SiteShelf listing **Our feature blogs** (Aurelion); every value below is read from that page, not invented.

> **Good design starts with purpose**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **sprout** glyph on a squircle tile. A sprout reflects living buildings and sustainable materials. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F3F4F4` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#1A1A1A` | Body and heading text |
| textMuted | `#666666` | Secondary text, captions |
| primary | `#F0D9B0` | Main actions, links, brand colour |
| secondary | `#A7C78A` | Highlights, charts, second accent |
| border | `#D5D5D5` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#6B6253` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 15.79:1 | pass | pass |
| Muted text on background | 5.21:1 | pass | pass |
| Primary on background | 1.25:1 | fail | fail |
| Text on primary | 14.27:1 | pass | pass |
| Text on surface | 17.40:1 | pass | pass |

**Colours seen on the page** (share of use): `#F3F4F4` 84.8%, `#3F6B4A` 1.7%, `#A7C78A` 1.7%, `#7C6A55` 1.7%, `#D9C7A8` 1.7%, `#4A5A6B` 1.7%, `#B8C6D4` 1.7%, `#6B5A3A` 1.7%, `#C9B67E` 1.7%, `#F0D9B0` 1.7%

## Typography

- Headings: **Inter** (weight 500)
- Body: **Inter**

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Inter | 72 px | 500 | 73.44px | -2.88px |
| Heading / H2 | Inter | 24 px | 500 | 28.8px | normal |
| Button | Arial | 13.3 px | 400 | normal | normal |

## Shape, space and motion

- Radius: sm 16 px, md 32 px, lg 32 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 6 px, 8 px, 12 px, 16 px, 18 px, 20 px, 24 px, 28 px, 29 px
- Layout: container 1400 px; breakpoints 640 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** considered, earthy, articulate.

Aurelion writes like an architecture journal: measured, informed and mindful of materials. Each post leads with a question and answers it in plain, elegant prose.

**Do**

- Open with a question the building answers
- Name materials and methods concretely
- Date every post

**Do not**

- Do not use buzzwords like 'iconic' or 'game-changing'
- Avoid listicle filler
- Never publish without a clear point

## Taglines

1. Good design starts with purpose
2. Form meets function, plainly
3. Buildings worth reading about
4. Notes on living architecture
5. Build for the next generation

**Boilerplate:** Aurelion is an architecture and design journal publishing essays on sustainable materials, functional spaces and living buildings, written for curious homeowners and professionals.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Read the article |
| secondaryCta | Subscribe |
| success | Subscribed. New essays reach you monthly. |
| error | Could not subscribe. Please try again. |
| empty | No articles yet. Check back soon. |

---
Source listing key `s:6a0be63dbf2024a645b2914a`. Rebuild with `python3 scripts/brand-kit/build.py s:6a0be63dbf2024a645b2914a`.
