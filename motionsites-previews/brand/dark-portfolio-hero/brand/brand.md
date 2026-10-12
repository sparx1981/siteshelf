# Michael Smith — brand kit

*Photographer and designer, Collection '26.* Generated from the SiteShelf listing **Dark Portfolio Hero** (Portfolio); every value below is read from that page, not invented.

> **See works, slowly**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Instrument Serif |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **diamond** glyph on a squircle tile. A polished diamond suits a portfolio of carefully cut work. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#0A0A0A` | Page background |
| surface | `#141414` | Cards, panels, raised areas |
| text | `#F5F5F5` | Body and heading text |
| textMuted | `#888888` | Secondary text, captions |
| primary | `#4E85BF` | Main actions, links, brand colour |
| secondary | `#9EBCDC` | Highlights, charts, second accent |
| border | `#1F1F1F` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#273E59` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 18.16:1 | pass | pass |
| Muted text on background | 5.58:1 | pass | pass |
| Primary on background | 5.12:1 | pass | pass |
| Text on primary | 5.08:1 | pass | pass |
| Text on surface | 16.90:1 | pass | pass |

**Colours seen on the page** (share of use): `#0A0A0A` 99.3%, `#F5F5F5` 0.3%, `#1F1F1F` 0.1%, `#888888` 0.1%, `#89AACC` 0.1%, `#4E85BF` 0.1%, `#9EBCDC` 0.0%, `#273E59` 0.0%

## Typography

- Headings: **Instrument Serif** (weight 400)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Instrument+Serif:ital@0;1&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Instrument Serif | 128 px | 400 | 115.2px | -3.2px |
| Body | Inter | 16 px | 400 | 26px | normal |
| Button | Inter | 14 px | 400 | normal | normal |
| Navigation | Inter | 16 px | 400 | normal | normal |
| Caption / eyebrow | Inter | 12 px | 400 | normal | 3.6px |

## Shape, space and motion

- Radius: sm 0 px, md 0 px, lg 0 px, pill (fully rounded)
- Shadows: sm: `rgba(137, 170, 204, 0.35) 0px 0px 8px 0px` · md: `rgba(137, 170, 204, 0.35) 0px 0px 8px 0px` · lg: `rgba(137, 170, 204, 0.35) 0px 0px 8px 0px`
- Spacing: base unit 4 px; common steps 2 px, 8 px, 12 px, 14 px, 16 px, 24 px, 26 px, 28 px, 32 px
- Layout: container 1200 px; breakpoints 480 px, 640 px, 768 px, 1024 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** minimal, editorial, confident.

Michael Smith writes in the hushed, confident register of a gallery catalogue. Names, years and one precise adjective carry the introduction, with serif italics for emphasis.

**Do**

- Introduce work with collection name and year
- Use one precise adjective per sentence
- Keep calls to action to two words

**Do not**

- Do not boast with 'award-winning'
- Avoid portfolio clichés like 'passionate creative'
- Never write more than two lines of bio

## Taglines

1. See works, slowly
2. Collection '26, in progress
3. Stills, studies and quiet frames
4. Work that waits to be seen
5. Reach out, anytime

**Boilerplate:** Michael Smith is an independent creative whose Collection '26 gathers recent photography and design in a dark, editorial portfolio.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | See Works |
| secondaryCta | Reach out |
| success | Message sent. Thank you. |
| error | That did not send. Please try again. |
| empty | No works in this collection yet. |

---
Source listing key `m:dark-portfolio-hero`. Rebuild with `python3 scripts/brand-kit/build.py m:dark-portfolio-hero`.
