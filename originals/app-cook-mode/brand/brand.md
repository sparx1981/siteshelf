# Cookline — brand kit

*Step-by-step cooking view for busy kitchens.* Generated from the SiteShelf listing **Recipe Cook Mode** (App UI); every value below is read from that page, not invented.

> **Hands full? We have the next step**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Fraunces |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **dial** glyph. A timer dial reflects the app's core trick of finding and running the countdowns hidden in each step. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#FBF3E4` | Page background |
| surface | `#FFFAF0` | Cards, panels, raised areas |
| text | `#2A1F14` | Body and heading text |
| textMuted | `#6B5A45` | Secondary text, captions |
| primary | `#2A1F14` | Main actions, links, brand colour |
| secondary | `#D6432B` | Highlights, charts, second accent |
| border | `#D8C59D` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#D6432B` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 14.60:1 | pass | pass |
| Muted text on background | 6.00:1 | pass | pass |
| Primary on background | 14.60:1 | pass | pass |
| Text on primary | 16.10:1 | pass | pass |
| Text on surface | 15.47:1 | pass | pass |

**Colours seen on the page** (share of use): `#FBF3E4` 76.9%, `#FFFFFF` 19.9%, `#2A1F14` 1.8%, `#F0E2C3` 0.4%, `#D6432B` 0.4%, `#F0A020` 0.3%, `#CDBB92` 0.1%, `#6B5A45` 0.0%, `#E5D4AD` 0.0%, `#2A1500` 0.0%

## Typography

- Headings: **Fraunces** (weight 700)
- Body: **Fraunces**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Fraunces:wght@600;700&family=Nunito:wght@400;600;800&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Fraunces | 32 px | 700 | 35.2px | normal |
| Heading / H2 | Fraunces | 30 px | 700 | 34.5px | normal |
| Body | Fraunces | 30 px | 600 | 40.5px | normal |
| Button | Nunito | 18 px | 800 | 27px | normal |
| Caption / eyebrow | Nunito | 13 px | 800 | 19.5px | normal |

## Shape, space and motion

- Radius: sm 12 px, md 22 px, lg 28 px, pill (fully rounded)
- Shadows: sm: `rgb(184, 120, 18) 0px 3px 0px 0px` · md: `rgba(80, 50, 10, 0.55) 0px 40px 90px -40px` · lg: `rgb(184, 120, 18) 0px 3px 0px 0px`
- Spacing: base unit 4 px; common steps 4 px, 6 px, 8 px, 9 px, 10 px, 12 px, 14 px, 16 px, 20 px
- Layout: container 1200 px; breakpoints 700 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** steady, encouraging, clear.

Cookline talks like a patient friend reading you the recipe while your hands are full. Sentences are short, verbs come first, and every number (minutes, grams, degrees) is given plainly so it can be read from across the counter.

**Do**

- Lead each step with the action: soften, stir, taste
- Put the time in the sentence, such as 'about 8 minutes'
- Keep text large and one idea per step

**Do not**

- Do not tell stories before the first step
- Avoid vague quantities like 'a bit' or 'some'
- Never pad steps with chef jargon

## Taglines

1. Hands full? We have the next step
2. Cook it one step at a time
3. Read the recipe from across the room
4. Timers that find themselves
5. Dinner, minus the scrolling

**Boilerplate:** Cookline is a hands-free recipe app that breaks dishes into large, readable steps, finds the timers inside them and keeps the screen awake while you cook.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Next step |
| secondaryCta | Ingredients |
| success | Nicely done. Dinner is ready. |
| error | The timer did not start. Tap it again. |
| empty | No timers running. Start one from any step. |

---
Source listing key `o:app-cook-mode`. Rebuild with `python3 scripts/brand-kit/build.py o:app-cook-mode`.
