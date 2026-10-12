# Nightjar — brand kit

*Stargazing app that names what's overhead.* Generated from the SiteShelf listing **Constellation CTA Hero** (Hero Section); every value below is read from that page, not invented.

> **Every star has stories**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Fraunces |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **spark** glyph. A small star-shaped spark echoes the drifting points of light on the hero. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#070B1A` | Page background |
| surface | `#0D1633` | Cards, panels, raised areas |
| text | `#A9B8E0` | Body and heading text |
| textMuted | `#EEF3FF` | Secondary text, captions |
| primary | `#FFD37A` | Main actions, links, brand colour |
| secondary | `#A9B8E0` | Highlights, charts, second accent |
| border | `#1E2336` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#715F3C` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 9.91:1 | pass | pass |
| Muted text on background | 17.63:1 | pass | pass |
| Primary on background | 13.86:1 | pass | pass |
| Text on primary | 13.89:1 | pass | pass |
| Text on surface | 9.00:1 | pass | pass |

**Colours seen on the page** (share of use): `#070B1A` 48.8%, `#0D1633` 48.8%, `#FFD37A` 1.6%, `#A9B8E0` 0.4%, `#EEF3FF` 0.3%, `#715F3C` 0.0%

## Typography

- Headings: **Fraunces** (weight 600)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,600;1,600&family=Inter:wght@400;500;600&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Fraunces | 112 px | 600 | 112px | -2.24px |
| Body | Inter | 17 px | 400 | 27.2px | normal |
| Button | Inter | 16 px | 600 | normal | normal |
| Navigation | Inter | 15 px | 400 | 24px | normal |

## Shape, space and motion

- Radius: sm 0 px, md 0 px, lg 0 px, pill (fully rounded)
- Shadows: sm: `rgb(255, 211, 122) 0px 0px 14px 0px` · md: `rgb(255, 211, 122) 0px 0px 14px 0px` · lg: `rgb(255, 211, 122) 0px 0px 14px 0px`
- Spacing: base unit 4 px; common steps 10 px, 16 px, 20 px, 22 px, 24 px, 32 px, 48 px, 56 px
- Layout: container 1200 px; breakpoints 700 px
- Motion: 250 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** wondering, lyrical, clear.

Nightjar talks like an amateur astronomer with a love of myths: soft-spoken, curious and exact about what you are looking at. Facts come with a story attached.

**Do**

- Name the object, then give its myth
- Use present tense: 'above you now'
- Keep sentences short enough to read in the dark

**Do not**

- Do not use astrology language
- Avoid sci-fi hype
- Never present a guess as a fact

## Taglines

1. Every star has stories
2. Point up. We'll name it
3. The sky, explained gently
4. Look up and find a myth
5. Satellites, planets, old legends

**Boilerplate:** Nightjar is a stargazing app that uses your phone's camera and sensors to name the stars, planets and satellites above you and tell the myths behind them.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Join the beta |
| secondaryCta | Sky tonight |
| success | You are on the list. Clear skies ahead. |
| error | We could not save your email. Please try again. |
| empty | No objects found overhead. Try another direction. |

---
Source listing key `o:hero-constellation-cta`. Rebuild with `python3 scripts/brand-kit/build.py o:hero-constellation-cta`.
