# Sprout & Sons — brand kit

*Plant delivery service that asks good questions.* Generated from the SiteShelf listing **One-Question Survey Cards** (Form); every value below is read from that page, not invented.

> **Tell us how you found us**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Young Serif |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **sprout** glyph on a circle tile. A sprout is the plainest sign of a plant delivery shop. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#0F2A24` | Page background |
| surface | `#F7F4EC` | Cards, panels, raised areas |
| text | `#FFFFFF` | Body and heading text |
| textMuted | `#ABB4B2` | Secondary text, captions |
| primary | `#FFFFFF` | Main actions, links, brand colour |
| secondary | `#8C8C8C` | Highlights, charts, second accent |
| border | `#CFD8D2` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#8C8C8C` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 15.25:1 | pass | pass |
| Muted text on background | 7.19:1 | pass | pass |
| Primary on background | 15.25:1 | pass | pass |
| Text on primary | 19.64:1 | pass | pass |
| Text on surface | 1.10:1 | fail | fail |

**Colours seen on the page** (share of use): `#0F2A24` 73.7%, `#F7F4EC` 19.6%, `#FFFFFF` 6.7%, `#5E6F67` 0.0%, `#ABB4B2` 0.0%, `#8C8C8C` 0.0%, `#CFD8D2` 0.0%, `#0B0B0F` 0.0%

## Typography

- Headings: **Young Serif** (weight 400)
- Body: **Instrument Sans**
- Mono: **Instrument Sans**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Young+Serif&family=Instrument+Sans:wght@400;500;600&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Young Serif | 32 px | 400 | 38.4px | normal |
| Button | Instrument Sans | 13.3 px | 400 | normal | normal |
| Mono | Instrument Sans | 13 px | 600 | normal | normal |

## Shape, space and motion

- Radius: sm 6 px, md 12 px, lg 24 px
- Shadows: sm: `rgba(0, 0, 0, 0.4) 0px 30px 70px 0px` · md: `rgba(0, 0, 0, 0.4) 0px 30px 70px 0px` · lg: `rgba(0, 0, 0, 0.4) 0px 30px 70px 0px`
- Spacing: base unit 4 px; common steps 8 px, 10 px, 12 px, 14 px, 20 px, 24 px, 36 px, 56 px
- Layout: container 1200 px; breakpoints 600 px
- Motion: 150 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** curious, cheerful, down-to-earth.

Sprout & Sons asks questions like a neighbour leaning over the fence: short, friendly and genuinely interested in the answer. It thanks people simply and never makes a survey feel like paperwork.

**Do**

- Ask one thing at a time in plain words
- Thank people by name for specific answers
- Mention keyboard shortcuts as a friendly tip

**Do not**

- Do not use 'valuable feedback' or 'your opinion matters'
- Avoid long preambles before a question
- Never push a required answer on a sensitive question

## Taglines

1. Tell us how you found us
2. One question, then another
3. Fresh plants, honest questions
4. Growing better, one answer at a time
5. Short survey, big thanks

**Boilerplate:** Sprout & Sons delivers healthy houseplants and garden starters to your door, and runs short one-question-at-a-time surveys to learn how customers find and love the shop.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | OK |
| secondaryCta | Skip this one |
| success | Thank you. That helps us grow. |
| error | Pick an option before we move on. |
| empty | No answers yet. |

---
Source listing key `o:form-survey-cards`. Rebuild with `python3 scripts/brand-kit/build.py o:form-survey-cards`.
