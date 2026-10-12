# Sunday Supper — brand kit

*Neighbourhood restaurant with honest feedback.* Generated from the SiteShelf listing **Emoji Feedback Form** (Form); every value below is read from that page, not invented.

> **How was your supper?**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Baloo 2 |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **home** glyph on a squircle tile. A little house keeps the supper-at-home feeling the name promises. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#FFF1E0` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#2A1810` | Body and heading text |
| textMuted | `#6B4A3A` | Secondary text, captions |
| primary | `#E8452C` | Main actions, links, brand colour |
| secondary | `#FFD9B5` | Highlights, charts, second accent |
| border | `#2A1810` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#FFD9B5` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 15.29:1 | pass | pass |
| Muted text on background | 7.09:1 | pass | pass |
| Primary on background | 3.56:1 | fail | pass |
| Text on primary | 4.98:1 | pass | pass |
| Text on surface | 16.98:1 | pass | pass |

**Colours seen on the page** (share of use): `#FFF1E0` 61.4%, `#FFFFFF` 21.2%, `#FFD9B5` 15.4%, `#E8452C` 1.4%, `#2A1810` 0.3%, `#6B4A3A` 0.1%, `#FF9A62` 0.0%, `#FFD23F` 0.0%, `#7BCF8E` 0.0%, `#6AB7F2` 0.0%

## Typography

- Headings: **Baloo 2** (weight 700)
- Body: **Nunito**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Baloo+2:wght@700&family=Nunito:wght@400;700;800&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Baloo 2 | 52 px | 700 | 54.6px | normal |
| Heading / H2 | Baloo 2 | 24 px | 700 | normal | normal |
| Button | Nunito | 17 px | 400 | 26.35px | normal |

## Shape, space and motion

- Radius: sm 16 px, md 20 px, lg 28 px, pill (fully rounded)
- Shadows: sm: `rgba(0, 0, 0, 0.15) -4px -4px 0px 0px inset` · md: `rgb(42, 24, 16) 6px 6px 0px 0px` · lg: `rgb(42, 24, 16) 4px 4px 0px 0px`
- Spacing: base unit 2 px; common steps 2 px, 6 px, 8 px, 10 px, 12 px, 14 px, 18 px, 20 px, 26 px
- Layout: container 1200 px; breakpoints 480 px
- Motion: 250 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** cosy, cheerful, honest.

Sunday Supper sounds like a host who really does want to know how the evening went. The voice is cheerful, short and food-first, and never defensive about a bad night.

**Do**

- Ask about the meal, not the service desk
- Thank people for criticism as much as praise
- Keep questions under twelve words

**Do not**

- Use survey-speak like 'rate your experience'
- Get defensive about a low score
- Make people type more than they want to

## Taglines

1. How was your supper?
2. Two taps and a note
3. Tell us how it felt
4. We read every one
5. Good food deserves a good word

**Boilerplate:** Sunday Supper is a neighbourhood restaurant that asks every guest how the meal felt, then reads each reply to improve the cooking and the welcome.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Send feedback |
| secondaryCta | Skip for now |
| success | Thank you. We read every note. |
| error | That did not send. Please try again. |
| empty | No notes yet. Tell us how it was. |

---
Source listing key `o:form-feedback-emoji`. Rebuild with `python3 scripts/brand-kit/build.py o:form-feedback-emoji`.
