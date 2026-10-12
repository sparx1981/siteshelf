# Web Wits — brand kit

*Timed quiz about the web, CSS and design history.* Generated from the SiteShelf listing **Timed Quiz App** (App UI); every value below is read from that page, not invented.

> **Think fast, the clock is ticking**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Bricolage Grotesque |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **bolt** glyph on a circle tile. A lightning bolt expresses speed and the ticking clock at the heart of the quiz. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#FFF4DC` | Page background |
| surface | `#E8D8B0` | Cards, panels, raised areas |
| text | `#5D5A52` | Body and heading text |
| textMuted | `#111111` | Secondary text, captions |
| primary | `#FFD95E` | Main actions, links, brand colour |
| secondary | `#8C7734` | Highlights, charts, second accent |
| border | `#111111` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#8C7734` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 6.30:1 | pass | pass |
| Muted text on background | 17.29:1 | pass | pass |
| Primary on background | 1.25:1 | fail | fail |
| Text on primary | 14.35:1 | pass | pass |
| Text on surface | 4.88:1 | pass | pass |

**Colours seen on the page** (share of use): `#FFF4DC` 71.3%, `#E8D8B0` 17.8%, `#FFFFFF` 10.3%, `#FFD95E` 0.4%, `#5D5A52` 0.1%, `#111111` 0.0%, `#000000` 0.0%, `#8C7734` 0.0%

## Typography

- Headings: **Bricolage Grotesque** (weight 800)
- Body: **Bricolage Grotesque**
- Mono: **Space Mono**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@500;700;800&family=Space+Mono:wght@400;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Bricolage Grotesque | 56 px | 800 | 56px | -1.68px |
| Body | Bricolage Grotesque | 17 px | 500 | 24.65px | normal |
| Button | Bricolage Grotesque | 18 px | 800 | normal | normal |
| Mono | Space Mono | 17 px | 500 | 24.65px | normal |

## Shape, space and motion

- Radius: sm 14 px, md 20 px, lg 20 px
- Shadows: sm: `rgb(17, 17, 17) 6px 6px 0px 0px` · md: `rgb(17, 17, 17) 4px 4px 0px 0px` · lg: `rgb(17, 17, 17) 6px 6px 0px 0px`
- Spacing: base unit 4 px; common steps 12 px, 14 px, 18 px, 24 px, 26 px, 28 px
- Layout: container 1200 px; breakpoints 480 px
- Motion: 80 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** quick, cheeky, clever.

Web Wits is a game-show host with a stopwatch: fast, cheeky and quick with a groan-worthy pun. It cheers right answers loudly and explains wrong ones kindly.

**Do**

- Keep questions and feedback to one line
- Reward streaks with short exclamations
- Explain wrong answers in one sentence

**Do not**

- Do not lecture after a wrong answer
- Avoid long intros
- Never mock slow thinkers

## Taglines

1. Think fast, the clock is ticking
2. Test your web wits
3. Quick questions, quicker feedback
4. CSS trivia with a timer
5. Beat the countdown

**Boilerplate:** Web Wits is a timed quiz game about the web, CSS and design history, with streak bonuses, instant feedback and a results screen that reviews what you missed.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Start quiz |
| secondaryCta | Review misses |
| success | Correct. That's a 3 streak. |
| error | Not quite. The answer was grid. |
| empty | No missed questions. A perfect round. |

---
Source listing key `o:quiz-app`. Rebuild with `python3 scripts/brand-kit/build.py o:quiz-app`.
