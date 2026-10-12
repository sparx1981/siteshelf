# Lumen Study — brand kit

*Flashcards and revision planner for students.* Generated from the SiteShelf listing **Student Plan Verifier** (Pricing); every value below is read from that page, not invented.

> **Revise for less**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Space Grotesk |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **book** glyph on a squircle tile. An open book is the study subject and keeps the mark friendly. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F4F7FB` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#0D1B33` | Body and heading text |
| textMuted | `#53627C` | Secondary text, captions |
| primary | `#3D4CF0` | Main actions, links, brand colour |
| secondary | `#0D1B33` | Highlights, charts, second accent |
| border | `#DDE5F0` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#0D1B33` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 16.00:1 | pass | pass |
| Muted text on background | 5.74:1 | pass | pass |
| Primary on background | 5.60:1 | pass | pass |
| Text on primary | 6.02:1 | pass | pass |
| Text on surface | 17.19:1 | pass | pass |

**Colours seen on the page** (share of use): `#F4F7FB` 97.6%, `#3D4CF0` 1.7%, `#0D1B33` 0.6%, `#53627C` 0.2%, `#F59F00` 0.0%, `#8A97AD` 0.0%, `#DDE5F0` 0.0%

## Typography

- Headings: **Space Grotesk** (weight 700)
- Body: **DM Sans**
- Google Fonts: `https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Space+Grotesk:wght@600;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Space Grotesk | 62 px | 700 | 65.1px | -1.24px |
| Heading / H2 | Space Grotesk | 17 px | 700 | normal | normal |
| Subheading / H3 | Space Grotesk | 20 px | 700 | normal | normal |
| Body | DM Sans | 16 px | 400 | 24.8px | normal |
| Button | DM Sans | 15 px | 700 | normal | normal |
| Navigation | DM Sans | 14 px | 500 | 21.7px | normal |
| Caption / eyebrow | DM Sans | 14 px | 500 | normal | normal |

## Shape, space and motion

- Radius: sm 12 px, md 20 px, lg 20 px, pill (fully rounded)
- Shadows: sm: `rgba(13, 27, 51, 0.5) 0px 20px 50px -34px` · md: `rgba(13, 27, 51, 0.5) 0px 20px 50px -34px` · lg: `rgba(13, 27, 51, 0.5) 0px 20px 50px -34px`
- Spacing: base unit 2 px; common steps 2 px, 4 px, 8 px, 10 px, 12 px, 13 px, 14 px, 16 px, 18 px
- Layout: container 1160 px; breakpoints 560 px, 960 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** encouraging, sharp, student-friendly.

Sounds like a smart older student who has already survived finals: upbeat, practical and thrifty. It speaks in short, confident lines about saving money and time.

**Do**

- Mention exam dates and deadlines
- State the discount as a figure
- Use British spelling like revise

**Do not**

- No condescension about studying
- Avoid scare tactics around exams
- Never be vague about verification

## Taglines

1. Revise for less
2. Smarter study, smaller price
3. Flashcards that know your exam date
4. Students save 60 percent
5. Light the way to finals

**Boilerplate:** Lumen Study is a flashcard and revision planner for university students, using spaced repetition and exam dates to plan study, with a verified student discount.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Send code |
| secondaryCta | Verify later |
| success | Verified. Student plan unlocked. |
| error | That code doesn't match. Check it and try again. |
| empty | No student plan unlocked yet. Verify your university email. |

---
Source listing key `o:pricing-student-verify`. Rebuild with `python3 scripts/brand-kit/build.py o:pricing-student-verify`.
