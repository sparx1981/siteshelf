# Hearth & Key Mortgages — brand kit

*Independent mortgage broker with plain-English advice.* Generated from the SiteShelf listing **Mortgage Enquiry Steps** (Form); every value below is read from that page, not invented.

> **Find out what you could borrow**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Fraunces |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **home** glyph on a circle tile. A home outline stands for the goal behind every mortgage enquiry. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#FAF7F1` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#1D2A24` | Body and heading text |
| textMuted | `#5B6B62` | Secondary text, captions |
| primary | `#1F6B4C` | Main actions, links, brand colour |
| secondary | `#84AE9D` | Highlights, charts, second accent |
| border | `#E6DFCF` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#84AE9D` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 13.94:1 | pass | pass |
| Muted text on background | 5.27:1 | pass | pass |
| Primary on background | 6.01:1 | pass | pass |
| Text on primary | 6.43:1 | pass | pass |
| Text on surface | 14.91:1 | pass | pass |

**Colours seen on the page** (share of use): `#FAF7F1` 99.1%, `#1F6B4C` 0.5%, `#1D2A24` 0.2%, `#5B6B62` 0.2%, `#84AE9D` 0.0%, `#E6DFCF` 0.0%

## Typography

- Headings: **Fraunces** (weight 600)
- Body: **DM Sans**
- Google Fonts: `https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Fraunces:wght@600&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Fraunces | 56 px | 600 | 58.8px | -0.56px |
| Heading / H2 | Fraunces | 28 px | 600 | normal | normal |
| Body | DM Sans | 16 px | 400 | 24.8px | normal |
| Button | DM Sans | 16 px | 700 | normal | normal |

## Shape, space and motion

- Radius: sm 12 px, md 24 px, lg 24 px, pill (fully rounded)
- Shadows: sm: `rgba(31, 107, 76, 0.15) 0px 0px 0px 4px` · md: `rgba(40, 50, 30, 0.6) 0px 30px 60px -44px` · lg: `rgba(31, 107, 76, 0.15) 0px 0px 0px 4px`
- Spacing: base unit 2 px; common steps 4 px, 5 px, 6 px, 10 px, 12 px, 13 px, 14 px, 18 px, 26 px
- Layout: container 1200 px; breakpoints 560 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** trustworthy, clear, unhurried.

Speaks like a patient broker at a kitchen table: no pressure, no jargon, every step explained before it is asked. Money words are always spelled out.

**Do**

- Explain why each question is asked
- Say what happens next at every step
- Spell out terms like loan-to-value on first use

**Do not**

- No fear-based urgency
- No unexplained jargon
- No promises about approval

## Taglines

1. Find out what you could borrow
2. Mortgages, minus the maze
3. Four short steps to an answer
4. A key, a hearth, a plan
5. Home loans without the jargon

**Boilerplate:** Hearth & Key Mortgages is an independent broker that helps first-time and moving buyers see what they could borrow in four short steps, with no credit check at the enquiry stage.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Continue |
| secondaryCta | Edit this step |
| success | Enquiry sent, we will call within a day |
| error | Check the highlighted fields and try again |
| empty | No answers yet, start with the first step |

---
Source listing key `o:form-mortgage-stepper`. Rebuild with `python3 scripts/brand-kit/build.py o:form-mortgage-stepper`.
