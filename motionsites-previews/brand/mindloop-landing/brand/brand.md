# Mindloop — brand kit

*Newsletter about technology, depth and direction.* Generated from the SiteShelf listing **Mindloop Landing** (Landing Page); every value below is read from that page, not invented.

> **Get inspired with us**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **spark** glyph on a squircle tile. A small spark suggests an idea looping back to inspire another. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#000000` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#F0F2F4` | Body and heading text |
| textMuted | `#A6A6A6` | Secondary text, captions |
| primary | `#3A2A1F` | Main actions, links, brand colour |
| secondary | `#C9A58A` | Highlights, charts, second accent |
| border | `#FFFFFF` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#C9A58A` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 18.71:1 | pass | pass |
| Muted text on background | 8.63:1 | pass | pass |
| Primary on background | 1.53:1 | fail | fail |
| Text on primary | 13.72:1 | pass | pass |
| Text on surface | 1.12:1 | fail | fail |

**Colours seen on the page** (share of use): `#000000` 99.0%, `#FFFFFF` 0.5%, `#F0F2F4` 0.2%, `#A6A6A6` 0.2%, `#555555` 0.1%, `#222222` 0.1%, `#444444` 0.0%, `#3A2A1F` 0.0%, `#6B5B4B` 0.0%, `#8A6A55` 0.0%

## Typography

- Headings: **Inter** (weight 500)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Instrument+Serif:ital@0;1&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Inter | 96 px | 500 | 100.8px | -2px |
| Subheading / H3 | Inter | 16 px | 600 | normal | normal |
| Body | Inter | 18 px | 400 | 27.9px | normal |
| Button | Inter | 14 px | 600 | normal | 0.56px |
| Navigation | Inter | 18 px | 700 | normal | normal |

## Shape, space and motion

- Radius: sm 8 px, md 8 px, lg 8 px, pill (fully rounded)
- Shadows: sm: `rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset` · md: `rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset` · lg: `rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset`
- Spacing: base unit 4 px; common steps 4 px, 6 px, 8 px, 10 px, 12 px, 14 px, 16 px, 20 px, 24 px
- Layout: container 1152 px; breakpoints 480 px, 640 px, 768 px, 1024 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** thoughtful, literate, quiet.

Mindloop writes like a considered long-form newsletter: unhurried, slightly literary and curious about meaning. It prefers one italic word of emphasis to any exclamation mark.

**Do**

- Use one italic accent word per headline
- Write to the reader as a thinker, not a customer
- Give a clear reason for each issue

**Do not**

- Do not use clickbait or growth hacks
- Avoid hype about technology
- Never fill a line with filler adjectives

## Taglines

1. Get inspired with us
2. Depth, direction, and a weekly note
3. Read less, mean more
4. Technology, with a point of view
5. Where curiosity loops back

**Boilerplate:** Mindloop is a content platform and newsletter sharing meaningful updates and essays about technology for readers who want depth and direction.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Subscribe now |
| secondaryCta | Start writing |
| success | You're subscribed. First issue arrives Sunday. |
| error | That email did not look right. Please try again. |
| empty | No issues yet. Subscribe to get the first one. |

---
Source listing key `m:mindloop-landing`. Rebuild with `python3 scripts/brand-kit/build.py m:mindloop-landing`.
