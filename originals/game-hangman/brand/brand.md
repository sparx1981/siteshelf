# Wordlantern — brand kit

*Friendly word puzzles by lantern light.* Generated from the SiteShelf listing **Hangman Words** (Games); every value below is read from that page, not invented.

> **Guess the word before dark**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Fredoka |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **spark** glyph on a squircle tile. A spark of light echoes the lantern that dims and brightens with each guess. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#1F2A5A` | Page background |
| surface | `#181430` | Cards, panels, raised areas |
| text | `#F6F0FF` | Body and heading text |
| textMuted | `#BDB2DC` | Secondary text, captions |
| primary | `#FFC247` | Main actions, links, brand colour |
| secondary | `#BDB2DC` | Highlights, charts, second accent |
| border | `#5A54A0` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#715827` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 12.25:1 | pass | pass |
| Muted text on background | 6.87:1 | pass | pass |
| Primary on background | 8.50:1 | pass | pass |
| Text on primary | 12.22:1 | pass | pass |
| Text on surface | 15.93:1 | pass | pass |

**Colours seen on the page** (share of use): `#1F2A5A` 71.6%, `#181430` 24.6%, `#000000` 1.7%, `#3A2F5A` 1.1%, `#5A4A7A` 0.6%, `#FFC247` 0.2%, `#F6F0FF` 0.1%, `#8A5A2C` 0.1%, `#BDB2DC` 0.0%, `#2F6A44` 0.0%

## Typography

- Headings: **Fredoka** (weight 600)
- Body: **Nunito**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Fredoka:wght@500;600&family=Nunito:wght@400;600;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Fredoka | 52 px | 600 | 52px | normal |
| Button | Nunito | 14 px | 600 | normal | normal |
| Caption / eyebrow | Nunito | 12 px | 700 | normal | 2.16px |

## Shape, space and motion

- Radius: sm 10 px, md 16 px, lg 24 px, pill (fully rounded)
- Shadows: sm: `rgba(232, 255, 154, 0.6) 0px 0px 10px 3px` · md: `rgba(232, 255, 154, 0.6) 0px 0px 10px 3px` · lg: `rgba(232, 255, 154, 0.6) 0px 0px 10px 3px`
- Spacing: base unit 2 px; common steps 2 px, 5 px, 6 px, 8 px, 10 px, 12 px, 14 px, 16 px, 18 px
- Layout: container 1100 px; breakpoints 900 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** cosy, playful, encouraging.

Sounds like a storyteller by a fire: warm, gentle, never grim. Losing a guess is a flicker, not a failure.

**Do**

- Cheer small wins in a few words
- Phrase wrong guesses softly: the light dims
- Keep hints friendly and cost-honest

**Do not**

- No dark or violent wording
- No mocking wrong guesses
- No more than one pun per screen

## Taglines

1. Guess the word before dark
2. Light a word at a time
3. Puzzles by paper lantern
4. Find the word, keep the glow
5. Friendly games for dusk

**Boilerplate:** Wordlantern is a puzzle site of gentle word games, starting with a lantern-lit hangman that dims one flicker at a time instead of keeping score of failure.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Play again |
| secondaryCta | Use a hint |
| success | You lit it up, the word was lantern |
| error | The light went out, the word was lantern. Try another |
| empty | Pick a category to begin |

---
Source listing key `o:game-hangman`. Rebuild with `python3 scripts/brand-kit/build.py o:game-hangman`.
