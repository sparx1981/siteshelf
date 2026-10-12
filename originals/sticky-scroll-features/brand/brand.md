# Stash — brand kit

*A calm home for links, notes and ideas.* Generated from the SiteShelf listing **Sticky Scroll Features** (Landing Page); every value below is read from that page, not invented.

> **Everything you save, exactly where you left it**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Instrument Serif |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **stack** glyph. Stacked layers mean a neat pile of saved things. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F7F5F0` | Page background |
| surface | `#FFD9C2` | Cards, panels, raised areas |
| text | `#1B1812` | Body and heading text |
| textMuted | `#6E675A` | Secondary text, captions |
| primary | `#E4572E` | Main actions, links, brand colour |
| secondary | `#22A06B` | Highlights, charts, second accent |
| border | `#E2DDD2` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#662B1C` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 16.25:1 | pass | pass |
| Muted text on background | 5.14:1 | pass | pass |
| Primary on background | 3.38:1 | fail | pass |
| Text on primary | 5.33:1 | pass | pass |
| Text on surface | 13.45:1 | pass | pass |

**Colours seen on the page** (share of use): `#F7F5F0` 91.3%, `#FFD9C2` 7.8%, `#1B1812` 0.5%, `#6E675A` 0.3%, `#E4572E` 0.1%, `#FFE08A` 0.0%, `#22A06B` 0.0%, `#E2DDD2` 0.0%, `#000000` 0.0%, `#B03A17` 0.0%

## Typography

- Headings: **Instrument Serif** (weight 400)
- Body: **Figtree**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600;700&family=Instrument+Serif:ital@0;1&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Instrument Serif | 84 px | 400 | 85.68px | -1.68px |
| Heading / H2 | Instrument Serif | 52 px | 400 | 54.6px | normal |
| Body | Figtree | 20 px | 400 | 32px | normal |
| Button | Figtree | 14 px | 700 | normal | normal |
| Navigation | Figtree | 17 px | 400 | 27.2px | normal |
| Caption / eyebrow | Figtree | 14.2 px | 500 | 22.6667px | normal |

## Shape, space and motion

- Radius: sm 3 px, md 12 px, lg 14 px, pill (fully rounded)
- Shadows: sm: `rgba(0, 0, 0, 0.2) 0px 10px 30px -14px` · md: `rgba(40, 30, 10, 0.35) 0px 40px 80px -30px` · lg: `rgba(0, 0, 0, 0.2) 0px 10px 30px -14px`
- Spacing: base unit 2 px; common steps 2 px, 4 px, 8 px, 9 px, 10 px, 12 px, 14 px, 16 px, 26 px
- Layout: container 1180 px; breakpoints 900 px
- Motion: 300 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** tidy, calm, clever.

A minimalist friend who keeps everything in order: unfussy, light-hearted and confident that less is enough. Feature descriptions are small, concrete moments.

**Do**

- Describe each feature as a single action, such as capture, organise, find, share
- Show the keystroke or click involved
- Keep copy sentence-case and short

**Do not**

- Productivity hype
- Long feature lists
- Overusing words like effortless

## Taglines

1. Everything you save, exactly where you left it
2. One shelf, all your ideas
3. Capture in a keystroke
4. Tidy by default
5. Save it now, find it fast

**Boilerplate:** Stash is a calm home for links, notes and ideas, built on four small habits: capture, organise, find and share a tidy shelf.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Save to Stash |
| secondaryCta | Copy |
| success | Saved to your shelf |
| error | Couldn't save that. Try again |
| empty | Your shelf is empty. Save something |

---
Source listing key `o:sticky-scroll-features`. Rebuild with `python3 scripts/brand-kit/build.py o:sticky-scroll-features`.
