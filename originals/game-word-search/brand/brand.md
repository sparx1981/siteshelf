# Seaside Puzzles — brand kit

*Themed word-search puzzle press.* Generated from the SiteShelf listing **Word Search** (Games); every value below is read from that page, not invented.

> **Find the words, enjoy the view**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Fredoka |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **wave** glyph on a circle tile. A wave carries the seaside name and hints at words that run in every direction. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#E4F2F4` | Page background |
| surface | `#FFFAF0` | Cards, panels, raised areas |
| text | `#1D2433` | Body and heading text |
| textMuted | `#5A6478` | Secondary text, captions |
| primary | `#1F7A8C` | Main actions, links, brand colour |
| secondary | `#FF7A59` | Highlights, charts, second accent |
| border | `#E6D9C0` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#A1C7CF` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 13.54:1 | pass | pass |
| Muted text on background | 5.19:1 | pass | pass |
| Primary on background | 4.34:1 | fail | pass |
| Text on primary | 4.98:1 | pass | pass |
| Text on surface | 14.92:1 | pass | pass |

**Colours seen on the page** (share of use): `#E4F2F4` 69.8%, `#FFFAF0` 26.9%, `#000000` 0.9%, `#1F7A8C` 0.7%, `#7FC4CF` 0.5%, `#4EA9B8` 0.5%, `#1D2433` 0.3%, `#5A6478` 0.1%, `#FF7A59` 0.1%, `#C97A5A` 0.0%

## Typography

- Headings: **Fredoka** (weight 600)
- Body: **Nunito**
- Google Fonts: `https://fonts.googleapis.com/css2?family=DM+Mono:wght@500&family=Fredoka:wght@500;600&family=Nunito:wght@400;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Fredoka | 48 px | 600 | 48px | normal |
| Heading / H2 | Fredoka | 22 px | 600 | normal | normal |
| Body | Nunito | 14 px | 400 | 21px | normal |
| Button | Nunito | 14 px | 700 | normal | normal |
| Caption / eyebrow | Nunito | 12 px | 700 | normal | 1.92px |

## Shape, space and motion

- Radius: sm 10 px, md 16 px, lg 22 px, pill (fully rounded)
- Shadows: sm: `rgba(20, 60, 80, 0.18) 0px 18px 40px 0px` · md: `rgba(20, 60, 80, 0.18) 0px 18px 40px 0px` · lg: `rgba(20, 60, 80, 0.18) 0px 18px 40px 0px`
- Spacing: base unit 2 px; common steps 5 px, 8 px, 10 px, 12 px, 14 px, 16 px, 18 px
- Layout: container 1040 px; breakpoints 860 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** breezy, friendly, tidy.

Seaside Puzzles sounds like a holiday-postcard with a pencil in hand: sunny, short and cheerful. It celebrates finds and never makes a missing word feel like failure.

**Do**

- Keep prompts short and sunny
- Celebrate each found word in a few words
- Mention the theme of the puzzle when helpful

**Do not**

- Do not use timers as pressure
- Do not scold wrong guesses
- Do not use cluttered puzzle jargon

## Taglines

1. Find the words, enjoy the view
2. Puzzles with a salty breeze
3. Garden, ocean, kitchen: pick a theme
4. Twelve by twelve, a hundred small joys
5. Pencil down, sea air in

**Boilerplate:** Seaside Puzzles is a puzzle press publishing themed word searches, with a twelve by twelve grid of hidden words in eight directions.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | New puzzle |
| secondaryCta | Hint |
| success | Found it! SEAGULL is on the board. |
| error | No word starts there. Try another letter. |
| empty | All words found. Start a new puzzle. |

---
Source listing key `o:game-word-search`. Rebuild with `python3 scripts/brand-kit/build.py o:game-word-search`.
