# Tidyloop — brand kit

*Home-cleaning bookings made simple.* Generated from the SiteShelf listing **Searchable FAQ Centre** (FAQ); every value below is read from that page, not invented.

> **Clean homes, simple answers**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Nunito |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **drop** glyph on a squircle tile. A clean drop of water suggests freshness and cleaning without resorting to a cliché mop. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F4F7FB` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#14213A` | Body and heading text |
| textMuted | `#5D6B86` | Secondary text, captions |
| primary | `#2F7BFF` | Main actions, links, brand colour |
| secondary | `#14213A` | Highlights, charts, second accent |
| border | `#DFE6F1` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#14213A` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 14.94:1 | pass | pass |
| Muted text on background | 4.99:1 | pass | pass |
| Primary on background | 3.62:1 | fail | pass |
| Text on primary | 5.05:1 | pass | pass |
| Text on surface | 16.05:1 | pass | pass |

**Colours seen on the page** (share of use): `#F4F7FB` 80.0%, `#11284B` 15.3%, `#2A56A8` 3.8%, `#2F7BFF` 0.7%, `#5D6B86` 0.2%, `#7FD6B2` 0.0%, `#BCD0F0` 0.0%, `#DFE6F1` 0.0%, `#0B0B0F` 0.0%

## Typography

- Headings: **Nunito** (weight 800)
- Body: **Source Sans 3**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Nunito:wght@600;700;800&family=Source+Sans+3:wght@400;600&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Nunito | 54 px | 800 | 56.7px | -1.08px |
| Heading / H2 | Source Sans 3 | 17 px | 400 | 27.2px | normal |
| Subheading / H3 | Nunito | 18 px | 800 | normal | normal |
| Body | Source Sans 3 | 17 px | 400 | 27.2px | normal |
| Button | Source Sans 3 | 14 px | 600 | normal | normal |

## Shape, space and motion

- Radius: sm 6 px, md 12 px, lg 16 px, pill (fully rounded)
- Shadows: sm: `rgba(0, 0, 0, 0.25) 0px 14px 34px 0px` · md: `rgba(0, 0, 0, 0.25) 0px 14px 34px 0px` · lg: `rgba(0, 0, 0, 0.25) 0px 14px 34px 0px`
- Spacing: base unit 4 px; common steps 2 px, 4 px, 8 px, 10 px, 12 px, 14 px, 16 px, 18 px, 20 px
- Layout: container 1100 px; breakpoints 900 px
- Motion: 250 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** cheerful, reassuring, straightforward.

Tidyloop answers questions the way a friendly cleaner would on the doorstep: directly, kindly and without small print. Policies on refunds, pets and rescheduling are explained in everyday words.

**Do**

- Answer the question in the first sentence
- Explain policies with an example, such as 'cancel 24 hours before'
- Use 'you' and 'we' to keep it human

**Do not**

- Do not bury the answer under legal wording
- Avoid cleaning clichés like 'spotless perfection'
- Never leave a question without a next step

## Taglines

1. Clean homes, simple answers
2. Book it, forget it, enjoy it
3. Your home, on a loop
4. Questions answered, floors sparkling
5. Help that does not go in circles

**Boilerplate:** Tidyloop is a home-cleaning booking service offering one-off and recurring visits, with transparent pricing and a help centre that answers questions in plain English.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Contact support |
| secondaryCta | Browse all questions |
| success | Thanks for the feedback. |
| error | Search failed. Please try again in a moment. |
| empty | No answers match that. Ask our team and we will reply today. |

---
Source listing key `o:faq-search`. Rebuild with `python3 scripts/brand-kit/build.py o:faq-search`.
