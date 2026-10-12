# Velorah — brand kit

*Studio designing tools for deep thinkers.* Generated from the SiteShelf listing **Velorah** (Agency); every value below is read from that page, not invented.

> **Where dreams rise through the silence**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Instrument Serif |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **cloud** glyph. A soft cloud suggests rising dreams and quiet. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#002B42` | Page background |
| surface | `#0F384D` | Cards, panels, raised areas |
| text | `#A5A5AC` | Body and heading text |
| textMuted | `#FFFFFF` | Secondary text, captions |
| primary | `#A5A5AC` | Main actions, links, brand colour |
| secondary | `#CECED1` | Highlights, charts, second accent |
| border | `#173C51` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#4C4C51` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 6.02:1 | pass | pass |
| Muted text on background | 14.74:1 | pass | pass |
| Primary on background | 6.02:1 | pass | pass |
| Text on primary | 8.02:1 | pass | pass |
| Text on surface | 5.07:1 | pass | pass |

**Colours seen on the page** (share of use): `#002B42` 99.5%, `#A5A5AC` 0.4%, `#FFFFFF` 0.1%, `#0F384D` 0.0%, `#CECED1` 0.0%, `#0B0B0F` 0.0%, `#4C4C51` 0.0%

## Typography

- Headings: **Instrument Serif** (weight 400)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Instrument+Serif:ital@0;1&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Instrument Serif | 96 px | 400 | 91.2px | -2.46px |
| Body | Inter | 18 px | 400 | 29.25px | normal |
| Button | Inter | 16 px | 400 | normal | normal |
| Navigation | Instrument Serif | 30 px | 400 | 30px | -0.75px |

## Shape, space and motion

- Radius: sm 0 px, md 0 px, lg 0 px, pill (fully rounded)
- Shadows: sm: `rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset` · md: `rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset` · lg: `rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset`
- Spacing: base unit 4 px; common steps 2 px, 6 px, 10 px, 16 px, 20 px, 24 px, 32 px, 48 px, 56 px
- Layout: container 1280 px; breakpoints 420 px, 640 px, 768 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** quiet, poetic, cinematic.

Speaks like a manifesto read at dawn: slow, elevated and serene, with lyrical short lines. It talks to thinkers and quiet rebels, not customers.

**Do**

- Use short, lyrical sentences
- Speak to thinkers and makers
- Let space and silence carry weight

**Do not**

- No hustle language
- Avoid features lists
- Never shout

## Taglines

1. Where dreams rise through the silence
2. Tools for deep thinkers
3. Sharp focus in a loud world
4. Quiet rebels, inspired work
5. Begin the journey inward

**Boilerplate:** Velorah designs digital tools and spaces for deep thinkers, bold creators and quiet rebels who want sharp focus amid the chaos.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Begin journey |
| secondaryCta | Learn more |
| success | Welcome in. Your space is ready. |
| error | Something drifted. Please try again. |
| empty | Nothing here yet. Begin when you're ready. |

---
Source listing key `m:velorah`. Rebuild with `python3 scripts/brand-kit/build.py m:velorah`.
