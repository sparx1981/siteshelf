# loamly — brand kit

*Plant delivery with care guides.* Generated from the SiteShelf listing **Illustrated FAQ** (FAQ); every value below is read from that page, not invented.

> **Plant questions, answered**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Gloock |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **sprout** glyph on a squircle tile. A small sprout carries the leaf glyph the page already uses and says plants at once. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F6EFE4` | Page background |
| surface | `#FFFAF1` | Cards, panels, raised areas |
| text | `#2B241B` | Body and heading text |
| textMuted | `#6A5E4F` | Secondary text, captions |
| primary | `#F0A824` | Main actions, links, brand colour |
| secondary | `#F7CF87` | Highlights, charts, second accent |
| border | `#E7DAC3` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#6B4D18` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 13.41:1 | pass | pass |
| Muted text on background | 5.53:1 | pass | pass |
| Primary on background | 1.78:1 | fail | fail |
| Text on primary | 9.66:1 | pass | pass |
| Text on surface | 14.73:1 | pass | pass |

**Colours seen on the page** (share of use): `#F6EFE4` 95.7%, `#2B241B` 1.4%, `#000000` 1.0%, `#FBECCD` 0.5%, `#DFF0F6` 0.4%, `#F0A824` 0.4%, `#CB9A63` 0.2%, `#2F4A35` 0.2%, `#8A6C3A` 0.2%, `#6A5E4F` 0.1%

## Typography

- Headings: **Gloock** (weight 400)
- Body: **Nunito**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Gloock&family=Nunito:wght@400;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Gloock | 72 px | 400 | 72px | normal |
| Heading / H2 | Nunito | 17 px | 400 | 27.2px | normal |
| Body | Nunito | 17 px | 400 | 27.2px | normal |
| Button | Gloock | 22 px | 400 | 27.5px | normal |
| Navigation | Nunito | 15 px | 700 | 24px | normal |

## Shape, space and motion

- Radius: sm 20 px, md 22 px, lg 22 px, pill (fully rounded)
- Shadows: sm: `rgba(47, 74, 53, 0.6) 0px 22px 40px -28px` · md: `rgba(47, 74, 53, 0.6) 0px 22px 40px -28px` · lg: `rgba(47, 74, 53, 0.6) 0px 22px 40px -28px`
- Spacing: base unit 4 px; common steps 8 px, 10 px, 12 px, 16 px, 18 px, 20 px, 22 px, 24 px, 30 px
- Layout: container 1200 px; breakpoints 640 px
- Motion: 300 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** warm, knowledgeable, green-fingered.

loamly sounds like a friendly neighbour with an allotment: generous with tips, relaxed about mistakes and fond of a gentle joke. It answers plant questions in plain language.

**Do**

- Answer the question in the first sentence
- Use everyday plant words, not Latin names
- Reassure after any bad news

**Do not**

- Use plant-shop puns on every line
- Blame the owner when a plant struggles
- Use technical horticulture terms

## Taglines

1. Plant questions, answered
2. Happy plants, delivered right
3. Greenhouse to windowsill, gently
4. Grow something, we will help
5. Roots, light and a little water

**Boilerplate:** loamly is a plant delivery service that sends healthy houseplants from its greenhouse to the windowsill, with care guides and quick answers to every common question.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Read the care guide |
| secondaryCta | Ask us a question |
| success | Question sent. We reply within a day. |
| error | Something went wrong. Please try again. |
| empty | No answers here yet. Ask away. |

---
Source listing key `o:faq-illustrated-accordion`. Rebuild with `python3 scripts/brand-kit/build.py o:faq-illustrated-accordion`.
