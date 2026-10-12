# Recall — brand kit

*Flashcard study app with spaced review.* Generated from the SiteShelf listing **Flashcard Study App** (App UI); every value below is read from that page, not invented.

> **Learn it once, keep it**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Sora |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **book** glyph on a squircle tile. An open book is the quickest picture of study and sits easily beside a card flip. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F4F1FB` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#6C6489` | Body and heading text |
| textMuted | `#1D1636` | Secondary text, captions |
| primary | `#1FA971` | Main actions, links, brand colour |
| secondary | `#F0614F` | Highlights, charts, second accent |
| border | `#E3DDF3` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#134D38` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 4.92:1 | pass | pass |
| Muted text on background | 15.42:1 | pass | pass |
| Primary on background | 2.70:1 | fail | fail |
| Text on primary | 6.52:1 | pass | pass |
| Text on surface | 5.49:1 | pass | pass |

**Colours seen on the page** (share of use): `#F4F1FB` 89.9%, `#6A4DFF` 3.6%, `#4A2FE0` 3.6%, `#1FA971` 1.3%, `#F0614F` 1.2%, `#6C6489` 0.1%, `#1D1636` 0.1%, `#E3DDF3` 0.1%, `#5B3DF5` 0.0%, `#0B0B0F` 0.0%

## Typography

- Headings: **Sora** (weight 700)
- Body: **Sora**
- Mono: **Sora**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Sora | 26 px | 700 | normal | normal |
| Body | Sora | 13 px | 400 | 20.15px | normal |
| Button | Sora | 14 px | 600 | normal | normal |
| Caption / eyebrow | Sora | 14 px | 400 | normal | normal |
| Mono | Sora | 12 px | 600 | normal | normal |

## Shape, space and motion

- Radius: sm 6 px, md 14 px, lg 16 px
- Shadows: sm: `rgba(91, 61, 245, 0.133) 0px 0px 0px 3px` · md: `rgba(60, 30, 150, 0.5) 0px 40px 60px -36px` · lg: `rgba(91, 61, 245, 0.133) 0px 0px 0px 3px`
- Spacing: base unit 2 px; common steps 2 px, 4 px, 8 px, 10 px, 12 px, 13 px, 14 px, 16 px, 22 px
- Layout: container 1200 px; breakpoints 480 px
- Motion: 500 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** focused, encouraging, brisk.

Recall sounds like a good study partner: short prompts, quick praise and no fuss between cards. It keeps attention on the answer instead of on itself.

**Do**

- Use two-word prompts like 'I knew it' and 'Need review'
- Praise effort, not just a perfect score
- Show the shortcut key next to each action

**Do not**

- Use gamified hype about streaks
- Lecture on study technique
- Pad card feedback with extra words

## Taglines

1. Learn it once, keep it
2. Flip, think, remember
3. Little decks, lasting words
4. Review smarter, not longer
5. Say it before you see it

**Boilerplate:** Recall is a flashcard app that uses spaced repetition to bring back the words people are about to forget, with keyboard shortcuts and a short summary after each session.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Start studying |
| secondaryCta | Shuffle |
| success | Deck complete. 10 of 12 known. |
| error | Could not save your progress. Try again. |
| empty | No cards due. Come back tomorrow. |

---
Source listing key `o:flashcards`. Rebuild with `python3 scripts/brand-kit/build.py o:flashcards`.
