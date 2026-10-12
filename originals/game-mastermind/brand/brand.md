# Brass & Marble — brand kit

*Games room for classic table games.* Generated from the SiteShelf listing **Code Breaker** (Games); every value below is read from that page, not invented.

> **Crack the code, one guess at a time**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Playfair Display |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **target** glyph. A target ring suggests aiming at the hidden code and the round shape of a marble. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#1F5A3A` | Page background |
| surface | `#6A4528` | Cards, panels, raised areas |
| text | `#FDF6E3` | Body and heading text |
| textMuted | `#E6DCC0` | Secondary text, captions |
| primary | `#E0B04A` | Main actions, links, brand colour |
| secondary | `#4A2410` | Highlights, charts, second accent |
| border | `#6A3A48` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#4A2410` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 7.54:1 | pass | pass |
| Muted text on background | 5.95:1 | pass | pass |
| Primary on background | 4.06:1 | fail | pass |
| Text on primary | 9.80:1 | pass | pass |
| Text on surface | 7.80:1 | pass | pass |

**Colours seen on the page** (share of use): `#1F5A3A` 73.4%, `#6A4528` 6.9%, `#4A2E18` 6.9%, `#1A1208` 2.8%, `#5A1A28` 2.7%, `#3A0F1A` 2.7%, `#000000` 2.2%, `#E0B04A` 1.3%, `#FFFFFF` 0.5%, `#A8802A` 0.5%

## Typography

- Headings: **Playfair Display** (weight 700)
- Body: **Figtree**
- Mono: **DM Mono**
- Google Fonts: `https://fonts.googleapis.com/css2?family=DM+Mono:wght@500&family=Figtree:wght@500;700&family=Playfair+Display:wght@700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Playfair Display | 52 px | 700 | 52px | normal |
| Heading / H2 | Figtree | 14 px | 700 | normal | 1.96px |
| Body | Figtree | 13 px | 500 | 19.5px | normal |
| Button | Arial | 13.3 px | 400 | normal | normal |
| Caption / eyebrow | Figtree | 12 px | 700 | normal | 2.4px |
| Mono | DM Mono | 11 px | 500 | normal | normal |

## Shape, space and motion

- Radius: sm 10 px, md 12 px, lg 18 px, pill (fully rounded)
- Shadows: sm: `rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset` · md: `rgba(0, 0, 0, 0.6) 0px 2px 3px 0px inset` · lg: `rgba(0, 0, 0, 0.7) 0px 3px 6px 0px inset, rgb(138, 106, 60) 0px 0px 0px 3px`
- Spacing: base unit 2 px; common steps 2 px, 3 px, 5 px, 6 px, 8 px, 10 px, 12 px, 14 px, 16 px
- Layout: container 980 px; breakpoints 760 px
- Motion: 800 ms, `cubic-bezier(0.4`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** clubby, polished, playful.

Sounds like a smoking-room host at a good club: warm, slightly formal and fond of understatement. Rules are stated with a wink and wins are praised with restraint.

**Do**

- Address the player as a guest
- Use game-room words like table, baize and guess
- Keep rule text crisp and warm

**Do not**

- No gamer slang
- Avoid shouting about wins
- Never mock a bad guess

## Taglines

1. Crack the code, one guess at a time
2. A game of marbles and manners
3. Ten guesses, one hidden code
4. Brass fittings, glass marbles
5. Take your seat at the table

**Boilerplate:** Brass & Marble is an invented games room offering classic table games, beginning with Code Breaker, played with glass marbles on painted baize.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Submit guess |
| secondaryCta | Show a hint |
| success | Cracked it. Well played. |
| error | That guess isn't complete. Fill all four marbles. |
| empty | No guesses yet. Place your first marbles. |

---
Source listing key `o:game-mastermind`. Rebuild with `python3 scripts/brand-kit/build.py o:game-mastermind`.
