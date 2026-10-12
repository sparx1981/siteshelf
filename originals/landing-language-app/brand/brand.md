# parley — brand kit

*Speaking-first language app with patient voice tutors.* Generated from the SiteShelf listing **Parley Language App** (Landing Page); every value below is read from that page, not invented.

> **Talk first. Textbook later**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Bricolage Grotesque |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **chat** glyph on a circle tile. A speech bubble puts conversation at the centre, which is the whole point of the app. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#FFF6E9` | Page background |
| surface | `#4A3AFF` | Cards, panels, raised areas |
| text | `#2A1F3D` | Body and heading text |
| textMuted | `#6A5B7F` | Secondary text, captions |
| primary | `#FFC933` | Main actions, links, brand colour |
| secondary | `#4A3AFF` | Highlights, charts, second accent |
| border | `#2A1F3D` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#4A3AFF` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 14.40:1 | pass | pass |
| Muted text on background | 5.74:1 | pass | pass |
| Primary on background | 1.44:1 | fail | fail |
| Text on primary | 12.77:1 | pass | pass |
| Text on surface | 2.45:1 | fail | fail |

**Colours seen on the page** (share of use): `#FFF6E9` 70.7%, `#4A3AFF` 13.5%, `#FFFFFF` 9.1%, `#E9DCC3` 2.3%, `#FFC933` 1.9%, `#C9C4FF` 0.8%, `#FF9A8E` 0.6%, `#2A1F3D` 0.5%, `#9BE8D2` 0.3%, `#2FC9A0` 0.2%

## Typography

- Headings: **Bricolage Grotesque** (weight 800)
- Body: **Nunito**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@800&family=Nunito:wght@400;700;800&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Bricolage Grotesque | 86.4 px | 800 | 84.672px | -2.592px |
| Heading / H2 | Nunito | 14 px | 800 | normal | 1.68px |
| Body | Nunito | 18 px | 400 | 28.8px | normal |
| Button | Nunito | 14 px | 800 | normal | normal |
| Navigation | Nunito | 15 px | 700 | 24px | normal |

## Shape, space and motion

- Radius: sm 20 px, md 22 px, lg 28 px, pill (fully rounded)
- Shadows: sm: `rgb(42, 31, 61) 4px 4px 0px 0px` · md: `rgb(42, 31, 61) 3px 3px 0px 0px` · lg: `rgb(42, 31, 61) 4px 4px 0px 0px`
- Spacing: base unit 4 px; common steps 4 px, 6 px, 8 px, 10 px, 12 px, 13 px, 16 px, 18 px, 20 px
- Layout: container 1240 px; breakpoints 860 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** playful, encouraging, bold.

parley sounds like a lively friend who would rather you say something wrong than say nothing. It is sticker-bright and encouraging, using short phrases in the target language with the translation right behind.

**Do**

- Show a real phrase before explaining grammar
- Cheer every attempt, even wrong ones
- Keep sentences under twelve words

**Do not**

- Do not lecture about verb tables
- Avoid guilt-inducing streak reminders
- Never use patronising baby talk

## Taglines

1. Talk first. Textbook later
2. Speak real sentences on day one
3. A tutor that never sighs
4. Five minutes to your first chat
5. Say it badly. Say it today

**Boilerplate:** parley is a language app that gets learners speaking real sentences on day one, with short voice lessons, a patient AI tutor and a daily streak to keep things fun.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Start free |
| secondaryCta | See how it works |
| success | Brilliant. That's 5 days in a row. |
| error | We did not catch that. Try saying it again. |
| empty | No phrases yet. Pick a language to begin. |

---
Source listing key `o:landing-language-app`. Rebuild with `python3 scripts/brand-kit/build.py o:landing-language-app`.
