# Slowcast — brand kit

*Narrative podcast player with a patient queue.* Generated from the SiteShelf listing **Podcast Queue Player** (App UI); every value below is read from that page, not invented.

> **Good stories take their time**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Fraunces |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **wave** glyph on a squircle tile. A single soft wave suggests an audio waveform slowed right down. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#14110F` | Page background |
| surface | `#FFB454` | Cards, panels, raised areas |
| text | `#F6EFE6` | Body and heading text |
| textMuted | `#B3A99A` | Secondary text, captions |
| primary | `#FFB454` | Main actions, links, brand colour |
| secondary | `#2A2A5A` | Highlights, charts, second accent |
| border | `#FFFFFF` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#2A2A5A` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 16.48:1 | pass | pass |
| Muted text on background | 8.11:1 | pass | pass |
| Primary on background | 10.66:1 | pass | pass |
| Text on primary | 11.14:1 | pass | pass |
| Text on surface | 1.55:1 | fail | fail |

**Colours seen on the page** (share of use): `#14110F` 86.9%, `#2A2A5A` 4.0%, `#000000` 2.2%, `#4A4A88` 1.7%, `#6A6AA8` 1.6%, `#8A8FC0` 1.5%, `#FFFFFF` 0.7%, `#FFB454` 0.7%, `#FFFBE8` 0.5%, `#B3A99A` 0.2%

## Typography

- Headings: **Fraunces** (weight 700)
- Body: **Manrope**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Fraunces:wght@600;700&family=Manrope:wght@400;500;700;800&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Fraunces | 30 px | 700 | 34.5px | -0.3px |
| Heading / H2 | Fraunces | 20 px | 700 | normal | normal |
| Button | Manrope | 12.5 px | 700 | 18.75px | normal |
| Caption / eyebrow | Manrope | 13 px | 800 | normal | 2.34px |

## Shape, space and motion

- Radius: sm 8 px, md 14 px, lg 28 px, pill (fully rounded)
- Shadows: sm: `rgba(0, 0, 0, 0.5) 0px 2px 8px 0px` · md: `rgba(0, 0, 0, 0.7) 0px 30px 60px -20px` · lg: `rgba(0, 0, 0, 0.5) 0px 2px 8px 0px`
- Spacing: base unit 2 px; common steps 2 px, 4 px, 6 px, 8 px, 10 px, 12 px, 14 px, 22 px, 26 px
- Layout: container 1060 px; breakpoints 900 px
- Motion: 180 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** intimate, unhurried, literary.

Slowcast talks like a late-night host leaning toward the microphone: warm, low-key and fond of a well-placed pause. It would rather set a scene than shout a feature.

**Do**

- Write chapter and episode names like short story titles
- Keep controls described in plain, quiet verbs
- Use the second person sparingly and softly

**Do not**

- Use hype words like 'binge' or 'must-listen'
- Fill silence with extra explanation
- Use all caps or exclamation marks

## Taglines

1. Good stories take their time
2. Press play, then let go
3. Listening, the long way round
4. Up next, whenever you are ready
5. Stories worth the whole walk home

**Boilerplate:** Slowcast is a podcast player for long, story-driven shows, with a reorderable queue, chapter markers and a sleep timer that lets listeners drift off mid-episode.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Play next |
| secondaryCta | Add to queue |
| success | Queue saved. Sleep well. |
| error | That episode will not load. Try again in a moment. |
| empty | Your queue is empty. Choose something slow. |

---
Source listing key `o:app-podcast-queue`. Rebuild with `python3 scripts/brand-kit/build.py o:app-podcast-queue`.
