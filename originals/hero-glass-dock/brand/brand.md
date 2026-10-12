# Lattice — brand kit

*Calm workspace for small studios.* Generated from the SiteShelf listing **Glass Dock Hero** (Hero Section); every value below is read from that page, not invented.

> **Everything within reach**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Manrope |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **diamond** glyph on a circle tile. A lattice cell, tilted into a diamond, is a small and tidy frame for everything. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#0B1020` | Page background |
| surface | `#5A6BFF` | Cards, panels, raised areas |
| text | `#F4F6FF` | Body and heading text |
| textMuted | `#B9C0E6` | Secondary text, captions |
| primary | `#5A6BFF` | Main actions, links, brand colour |
| secondary | `#FF6FB5` | Highlights, charts, second accent |
| border | `#FFFFFF` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#2C3374` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 17.56:1 | pass | pass |
| Muted text on background | 10.59:1 | pass | pass |
| Primary on background | 4.49:1 | fail | pass |
| Text on primary | 4.66:1 | pass | pass |
| Text on surface | 3.91:1 | fail | pass |

**Colours seen on the page** (share of use): `#0B1020` 36.5%, `#5A6BFF` 21.1%, `#FF6FB5` 21.0%, `#2FE0C0` 21.0%, `#FFFFFF` 0.3%, `#B9C0E6` 0.1%, `#FF9A5A` 0.0%, `#FF5D7A` 0.0%, `#5AD1FF` 0.0%, `#A45CFF` 0.0%

## Typography

- Headings: **Manrope** (weight 800)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Manrope:wght@600;800&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Manrope | 88 px | 800 | 89.76px | -2.64px |
| Body | Inter | 17 px | 400 | 27.2px | normal |
| Button | Manrope | 16 px | 600 | normal | normal |
| Navigation | Inter | 15 px | 400 | 24px | normal |

## Shape, space and motion

- Radius: sm 7 px, md 28 px, lg 50 px, pill (fully rounded)
- Shadows: sm: `rgba(0, 0, 0, 0.3) 0px 6px 16px 0px, rgba(255, 255, 255, 0.35) 0px 1px 0px 0px inset` · md: `rgba(0, 0, 0, 0.3) 0px 6px 16px 0px, rgba(255, 255, 255, 0.35) 0px 1px 0px 0px inset` · lg: `rgba(0, 0, 0, 0.3) 0px 6px 16px 0px, rgba(255, 255, 255, 0.35) 0px 1px 0px 0px inset`
- Spacing: base unit 2 px; common steps 7 px, 10 px, 12 px, 15 px, 16 px, 20 px, 22 px, 26 px, 28 px
- Layout: container 1200 px; breakpoints 700 px
- Motion: 150 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** calm, considered, soft-spoken.

Lattice speaks in the hush of a well-organised studio. Its sentences are gentle and short, and it promises quiet rather than productivity.

**Do**

- Describe features by how they feel to use
- Keep headings to a short, plain phrase
- Name the four things: notes, tasks, files, calendar

**Do not**

- Do not promise to '10x' anyone
- Do not use exclamation marks
- Do not describe the app as 'powerful'

## Taglines

1. Everything within reach
2. One quiet place for your work
3. Notes, tasks, files and time
4. A workspace that does not shout
5. Small studio, steady day

**Boilerplate:** Lattice is a calm workspace for small studios that keeps notes, tasks, files and calendar together in one quiet app for Mac.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Download for Mac |
| secondaryCta | See it in action |
| success | Welcome to Lattice. Your workspace is ready. |
| error | We could not start the download. Try again in a moment. |
| empty | Nothing here yet. Press N to start a note. |

---
Source listing key `o:hero-glass-dock`. Rebuild with `python3 scripts/brand-kit/build.py o:hero-glass-dock`.
