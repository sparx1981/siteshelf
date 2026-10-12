# Groove Letter — brand kit

*Record club posting one overlooked album a month.* Generated from the SiteShelf listing **Groove Letter Record Club** (Landing Page); every value below is read from that page, not invented.

> **One great record, every month**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from DM Serif Display |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **target** glyph on a squircle tile. Concentric rings read as the grooves of a record, centred on a label. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#17110D` | Page background |
| surface | `#231A14` | Cards, panels, raised areas |
| text | `#F6EAD9` | Body and heading text |
| textMuted | `#BFA98F` | Secondary text, captions |
| primary | `#FFA046` | Main actions, links, brand colour |
| secondary | `#1F6F73` | Highlights, charts, second accent |
| border | `#FFA046` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#1F6F73` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 15.76:1 | pass | pass |
| Muted text on background | 8.27:1 | pass | pass |
| Primary on background | 9.24:1 | pass | pass |
| Text on primary | 9.70:1 | pass | pass |
| Text on surface | 14.39:1 | pass | pass |

**Colours seen on the page** (share of use): `#17110D` 91.9%, `#E9D7B8` 2.8%, `#2E1F12` 1.7%, `#1F6F73` 1.4%, `#FFA046` 1.3%, `#E0642A` 0.3%, `#F6EAD9` 0.2%, `#BFA98F` 0.2%, `#CFC4B4` 0.1%, `#8A7E6E` 0.1%

## Typography

- Headings: **DM Serif Display** (weight 400)
- Body: **DM Sans**
- Google Fonts: `https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=DM+Serif+Display:ital@0;1&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | DM Serif Display | 86.4 px | 400 | 86.4px | -1.728px |
| Heading / H2 | DM Serif Display | 52 px | 400 | 54.6px | normal |
| Subheading / H3 | DM Serif Display | 30 px | 400 | normal | normal |
| Body | DM Sans | 17 px | 400 | 27.2px | normal |
| Button | DM Sans | 14 px | 700 | normal | normal |
| Navigation | DM Sans | 15 px | 500 | 24px | normal |

## Shape, space and motion

- Radius: sm 10 px, md 24 px, lg 50 px, pill (fully rounded)
- Shadows: sm: `rgba(0, 0, 0, 0.4) 0px 6px 12px 0px` · md: `rgba(255, 160, 70, 0.35) 0px 10px 24px 0px` · lg: `rgba(0, 0, 0, 0.8) 0px 30px 70px -20px, rgb(26, 21, 18) 0px 0px 0px 4px inset`
- Spacing: base unit 4 px; common steps 10 px, 12 px, 14 px, 16 px, 18 px, 20 px, 22 px, 26 px, 40 px
- Layout: container 1240 px; breakpoints 860 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** warm, curious, tactile.

A record-shop friend with excellent taste and no snobbery: warm, personal and quietly enthusiastic. It describes pressings and liner notes with affection.

**Do**

- Mention the physical details such as 180g vinyl and liner notes
- Name tracks and durations accurately
- Write as one person to one listener

**Do not**

- Streaming-service speak like content
- Rarity hype or collector pressure
- Algorithm talk

## Taglines

1. One great record, every month
2. Posted with liner notes by a human
3. Listen like it's 1974
4. Overlooked records, carefully chosen
5. Drop the needle on something new

**Boilerplate:** Groove Letter is a record subscription that picks one brilliant, overlooked album each month, presses it on 180g vinyl and posts it with hand-written liner notes.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Join the club |
| secondaryCta | Join from £19 a month |
| success | Welcome aboard. Your first record is on its way |
| error | That card didn't go through. Try again |
| empty | No tracks queued. Press play |

---
Source listing key `o:landing-vinyl-club`. Rebuild with `python3 scripts/brand-kit/build.py o:landing-vinyl-club`.
