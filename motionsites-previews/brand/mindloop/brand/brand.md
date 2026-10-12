# Velorah — brand kit

*Tool studio for deep thinkers and quiet rebels.* Generated from the SiteShelf listing **Mindloop** (SaaS); every value below is read from that page, not invented.

> **Focus in a distracted world**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Instrument Serif |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **target** glyph on a squircle tile. A concentric target mark symbolises focus drawn inward. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#000000` | Page background |
| surface | `#0F0F0F` | Cards, panels, raised areas |
| text | `#FFFFFF` | Body and heading text |
| textMuted | `#A6A6A6` | Secondary text, captions |
| primary | `#FFFFFF` | Main actions, links, brand colour |
| secondary | `#8C8C8C` | Highlights, charts, second accent |
| border | `#242424` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#8C8C8C` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 21.00:1 | pass | pass |
| Muted text on background | 8.63:1 | pass | pass |
| Primary on background | 21.00:1 | pass | pass |
| Text on primary | 19.64:1 | pass | pass |
| Text on surface | 19.17:1 | pass | pass |

**Colours seen on the page** (share of use): `#000000` 99.8%, `#FFFFFF` 0.2%, `#0F0F0F` 0.0%, `#A6A6A6` 0.0%, `#8C8C8C` 0.0%, `#242424` 0.0%

## Typography

- Headings: **Instrument Serif** (weight 400)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Instrument+Serif:ital@0;1&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Instrument Serif | 96 px | 400 | 91.2px | -2.46px |
| Body | Inter | 18 px | 400 | 29.25px | normal |
| Button | Inter | 14 px | 400 | normal | normal |
| Navigation | Instrument Serif | 30 px | 400 | 36px | -0.75px |

## Shape, space and motion

- Radius: sm 0 px, md 0 px, lg 0 px, pill (fully rounded)
- Shadows: sm: `rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset` · md: `rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset` · lg: `rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset`
- Spacing: base unit 4 px; common steps 6 px, 10 px, 16 px, 20 px, 24 px, 32 px, 40 px, 48 px, 56 px
- Layout: container 1280 px; breakpoints 480 px, 640 px, 768 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** focused, quiet, defiant.

A calm manifesto read in a low voice: spare, a little rebellious and committed to focus. It uses "we" for the studio and "you" only when inviting someone in.

**Do**

- Write in short declarative lines
- Contrast chaos with focus once, then move on
- Choose plain verbs such as build, think and make

**Do not**

- Productivity tips and hacks
- Exclamation marks
- Tech-startup buzzwords

## Taglines

1. Focus in a distracted world
2. Tools for deep thinkers
3. Quiet rebels, sharp minds
4. Build the space, then do the work
5. Make room to think

**Boilerplate:** Velorah is a studio designing tools for deep thinkers, bold creators and quiet rebels, building digital spaces for sharp focus and inspired work.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Begin journey |
| secondaryCta | Learn more |
| success | You're in. Welcome |
| error | That didn't go through. Try again |
| empty | Nothing here yet. Begin |

---
Source listing key `m:mindloop`. Rebuild with `python3 scripts/brand-kit/build.py m:mindloop`.
