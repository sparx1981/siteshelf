# The Slow Hour — brand kit

*Journal of essays on slowness, read letter by letter.* Generated from the SiteShelf listing **Letter Scroll Reveal** (Typography); every value below is read from that page, not invented.

> **Slow mornings are a kind of wealth**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Instrument Serif |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **spark** glyph. A small spark of light suggests a sunrise and attention catching. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F7F1E6` | Page background |
| surface | `#FFFAF0` | Cards, panels, raised areas |
| text | `#1D1A16` | Body and heading text |
| textMuted | `#6B6253` | Secondary text, captions |
| primary | `#D9692B` | Main actions, links, brand colour |
| secondary | `#F0DFC4` | Highlights, charts, second accent |
| border | `#E6DAC2` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#F0DFC4` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 15.42:1 | pass | pass |
| Muted text on background | 5.34:1 | pass | pass |
| Primary on background | 3.11:1 | fail | pass |
| Text on primary | 5.62:1 | pass | pass |
| Text on surface | 16.66:1 | pass | pass |

**Colours seen on the page** (share of use): `#F7F1E6` 96.0%, `#000000` 1.2%, `#FFFFFF` 0.7%, `#2A2A5A` 0.6%, `#183A2C` 0.4%, `#8A8FC0` 0.2%, `#6A6AA8` 0.2%, `#4A4A88` 0.2%, `#F0DFC4` 0.2%, `#7FA889` 0.2%

## Typography

- Headings: **Instrument Serif** (weight 400)
- Body: **Newsreader**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@500;600&family=Instrument+Serif:ital@0;1&family=Newsreader:ital,wght@0,400;0,500;1,400&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Instrument Serif | 120 px | 400 | 117.6px | normal |
| Heading / H2 | Instrument Serif | 44 px | 400 | 48.4px | normal |
| Body | Newsreader | 20 px | 400 | 34px | normal |
| Button | Inter | 13 px | 600 | normal | normal |
| Caption / eyebrow | Inter | 12 px | 600 | normal | 2.16px |

## Shape, space and motion

- Radius: sm 12 px, md 14 px, lg 14 px, pill (fully rounded)
- Shadows: sm: `rgba(70, 45, 10, 0.2) 0px 18px 40px 0px` · md: `rgba(70, 45, 10, 0.2) 0px 18px 40px 0px` · lg: `rgba(70, 45, 10, 0.2) 0px 18px 40px 0px`
- Spacing: base unit 4 px; common steps 6 px, 8 px, 10 px, 16 px, 20 px, 22 px, 24 px, 48 px, 70 px
- Layout: container 1320 px; breakpoints 760 px
- Motion: 520 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** reflective, literary, gentle.

A quiet essayist at the kitchen table: reflective, unhurried and a little wry. Sentences are long enough to breathe, and every claim is something you could try tomorrow.

**Do**

- Write in the first person plural, inviting the reader along
- Let paragraphs build slowly, with one image each
- Keep calls to action soft and rare

**Do not**

- Productivity hacks and listicles
- Urgent subscribe prompts
- Heavy jargon about mindfulness

## Taglines

1. Slow mornings are a kind of wealth
2. Read slowly, live slowly
3. Essays for the quiet hour
4. Let each letter arrive
5. Take the long way to breakfast

**Boilerplate:** The Slow Hour is an independent journal of essays on slowness and attention, with an hourly newsletter and long-form reading in a gentle rhythm.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Get the next hour |
| secondaryCta | Replay letters |
| success | You're on the list. See you at dawn |
| error | That address didn't work. Try again |
| empty | Nothing to read yet |

---
Source listing key `o:type-letter-scroll`. Rebuild with `python3 scripts/brand-kit/build.py o:type-letter-scroll`.
