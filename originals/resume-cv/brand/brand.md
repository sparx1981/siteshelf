# Maren Okafor-Lind — brand kit

*Product designer with a printable CV.* Generated from the SiteShelf listing **Résumé / CV Page** (Portfolio); every value below is read from that page, not invented.

> **Product design, made practical**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Newsreader |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **peak** glyph on a squircle tile. A rising peak signals career progress without cliche. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#E9E7E2` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#1C1C1F` | Body and heading text |
| textMuted | `#62626B` | Secondary text, captions |
| primary | `#0E7C7B` | Main actions, links, brand colour |
| secondary | `#C2410C` | Highlights, charts, second accent |
| border | `#E4E2DC` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#9AC8C8` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 13.76:1 | pass | pass |
| Muted text on background | 4.88:1 | pass | pass |
| Primary on background | 4.06:1 | fail | pass |
| Text on primary | 5.01:1 | pass | pass |
| Text on surface | 17.00:1 | pass | pass |

**Colours seen on the page** (share of use): `#E9E7E2` 63.7%, `#FFFFFF` 34.6%, `#1C1C1F` 0.7%, `#0E7C7B` 0.6%, `#62626B` 0.2%, `#3B3B42` 0.1%, `#4338CA` 0.0%, `#C2410C` 0.0%, `#9AC8C8` 0.0%

## Typography

- Headings: **Newsreader** (weight 500)
- Body: **Hanken Grotesk**
- Mono: **Newsreader**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;500;600&family=Newsreader:ital,wght@0,400;0,500;0,600;1,400&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Newsreader | 48 px | 500 | 50.4px | -0.48px |
| Heading / H2 | Newsreader | 16 px | 600 | normal | 2.24px |
| Subheading / H3 | Newsreader | 18 px | 600 | normal | normal |
| Body | Hanken Grotesk | 14 px | 400 | 22.4px | normal |
| Button | Arial | 13.3 px | 400 | normal | normal |
| Navigation | Hanken Grotesk | 13 px | 400 | 20.8px | normal |
| Mono | Newsreader | 30 px | 500 | normal | 0.6px |

## Shape, space and motion

- Radius: sm 6 px, md 6 px, lg 6 px, pill (fully rounded)
- Shadows: sm: `rgb(185, 182, 174) 0px 0px 0px 1px` · md: `rgb(28, 28, 31) 0px 0px 0px 2px` · lg: `rgba(0, 0, 0, 0.3) 0px 20px 50px -20px`
- Spacing: base unit 2 px; common steps 2 px, 3 px, 4 px, 6 px, 8 px, 9 px, 10 px, 12 px, 18 px
- Layout: container 1200 px; breakpoints 760 px
- Motion: 900 ms, `cubic-bezier(0.2`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** capable, clear, personable.

Maren Okafor-Lind writes like a designer who edits hard: direct, specific and quietly confident. Every line shows what she did and what changed because of it.

**Do**

- Start bullets with an action verb and an outcome
- Use specific numbers where they exist
- Keep to the sheet, one idea per line

**Do not**

- Use buzzwords like 'passionate' or 'synergy'
- Pad with soft skills
- Write in third person

## Taglines

1. Product design, made practical
2. Clear thinking, careful details
3. Designing things people can use
4. Work you can check on a page
5. Systems, craft and plain speech

**Boilerplate:** Maren Okafor-Lind is a product designer whose online CV presents her experience, skills and tools on a clean, print-ready sheet, ready to download as a PDF.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Download PDF |
| secondaryCta | Get in touch |
| success | PDF ready. Check your downloads. |
| error | Could not create the PDF. Use your browser's print option. |
| empty | No experience listed yet. |

---
Source listing key `o:resume-cv`. Rebuild with `python3 scripts/brand-kit/build.py o:resume-cv`.
