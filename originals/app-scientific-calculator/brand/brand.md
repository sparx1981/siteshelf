# Slideway — brand kit

*A scientific calculator that shows its working.* Generated from the SiteShelf listing **Scientific Calculator** (App UI); every value below is read from that page, not invented.

> **A calculator that shows its working**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Space Grotesk |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **dial** glyph on a squircle tile. A dial reads as an instrument-panel control, fitting the brass workshop feel of the calculator. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#3A3A44` | Page background |
| surface | `#16181C` | Cards, panels, raised areas |
| text | `#F1F3F7` | Body and heading text |
| textMuted | `#9CC8FF` | Secondary text, captions |
| primary | `#FFD37A` | Main actions, links, brand colour |
| secondary | `#9CC8FF` | Highlights, charts, second accent |
| border | `#343A46` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#715F3C` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 10.12:1 | pass | pass |
| Muted text on background | 6.49:1 | pass | pass |
| Primary on background | 7.95:1 | pass | pass |
| Text on primary | 13.89:1 | pass | pass |
| Text on surface | 16.00:1 | pass | pass |

**Colours seen on the page** (share of use): `#3A3A44` 44.1%, `#16181C` 44.1%, `#262B33` 8.3%, `#3A2F1C` 1.6%, `#4A2326` 0.8%, `#F1F3F7` 0.3%, `#8C93A3` 0.2%, `#F0C262` 0.2%, `#D9982F` 0.2%, `#FFD37A` 0.1%

## Typography

- Headings: **Space Grotesk** (weight 700)
- Body: **Space Grotesk**
- Google Fonts: `https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Space+Grotesk:wght@500;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Space Grotesk | 44 px | 700 | 46.2px | -0.88px |
| Heading / H2 | Space Grotesk | 16 px | 700 | normal | normal |
| Body | Space Grotesk | 16 px | 400 | 24px | normal |
| Button | DM Mono | 15 px | 500 | normal | normal |
| Caption / eyebrow | Space Grotesk | 13 px | 700 | normal | 2.34px |

## Shape, space and motion

- Radius: sm 5 px, md 9 px, lg 12 px
- Shadows: sm: `rgb(20, 22, 26) 0px 3px 0px 0px` · md: `rgba(0, 0, 0, 0.6) 0px 2px 8px 0px inset` · lg: `rgb(0, 0, 0) 0px 40px 80px -30px, rgba(255, 255, 255, 0.08) 0px 1px 0px 0px inset`
- Spacing: base unit 4 px; common steps 4 px, 6 px, 8 px, 9 px, 10 px, 12 px, 16 px, 20 px, 22 px
- Layout: container 960 px; breakpoints 400 px, 860 px
- Motion: 60 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** exact, workshop, transparent.

Talks like a well-kept brass instrument manual: exact, a touch dry and proud of showing every step. It trusts the user to be numerate and never hides how an answer was reached.

**Do**

- Show the expression before the result
- Use correct mathematical terms such as radians and memory recall
- State the mode, DEG or RAD, whenever it matters

**Do not**

- Cute maths puns
- Vague error text like something went wrong
- Hiding working behind a single answer

## Taglines

1. A calculator that shows its working
2. Every step on the tape
3. Brass keys, honest sums
4. Slide the rule forward
5. Check the working, then trust the answer

**Boilerplate:** Slideway is a brass-and-slate scientific calculator that keeps a reusable history tape, offers memory keys and degree or radian modes, and parses expressions safely.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Calculate |
| secondaryCta | Clear history |
| success | Result copied to memory |
| error | Check the expression, a bracket is missing |
| empty | The tape is empty. Work something out |

---
Source listing key `o:app-scientific-calculator`. Rebuild with `python3 scripts/brand-kit/build.py o:app-scientific-calculator`.
