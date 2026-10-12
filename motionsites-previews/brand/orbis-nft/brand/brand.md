# Orbis.Nft — brand kit

*Space-object NFT collection.* Generated from the SiteShelf listing **Orbis NFT** (Landing Page); every value below is read from that page, not invented.

> **Beyond earth and its familiar boundaries**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter Bold (stand-in for Anton) |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **orbit** glyph. Orbit rings echo the brand's name and its space theme. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#010828` | Page background |
| surface | `#6FFF00` | Cards, panels, raised areas |
| text | `#EFF4FF` | Body and heading text |
| textMuted | `#6FFF00` | Secondary text, captions |
| primary | `#6FFF00` | Main actions, links, brand colour |
| secondary | `#B724FF` | Highlights, charts, second accent |
| border | `#222946` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#B724FF` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 17.86:1 | pass | pass |
| Muted text on background | 14.98:1 | pass | pass |
| Primary on background | 14.98:1 | pass | pass |
| Text on primary | 14.95:1 | pass | pass |
| Text on surface | 1.19:1 | fail | fail |

**Colours seen on the page** (share of use): `#010828` 99.7%, `#EFF4FF` 0.2%, `#6FFF00` 0.1%, `#B724FF` 0.0%, `#7C3AED` 0.0%, `#222946` 0.0%, `#0B0B0F` 0.0%

## Typography

- Headings: **Anton** (weight 400)
- Body: **ui-monospace**
- Mono: **ui-monospace**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Anton&family=Caveat:wght@500&family=Condiment&family=Oswald:wght@500&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Anton | 90 px | 400 | 90px | 0.45px |
| Heading / H2 | Anton | 60 px | 400 | 61.2px | normal |
| Body | ui-monospace | 16 px | 400 | 24px | 0.16px |
| Button | Anton | 16 px | 400 | normal | normal |
| Navigation | Anton | 16 px | 400 | normal | 0.32px |
| Caption / eyebrow | ui-monospace | 11 px | 400 | normal | 0.44px |
| Mono | ui-monospace | 16 px | 400 | 24px | 0.16px |

## Shape, space and motion

- Radius: sm 16 px, md 24 px, lg 32 px, pill (fully rounded)
- Shadows: sm: `rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset` · md: `rgba(168, 85, 247, 0.5) 0px 10px 15px -3px, rgba(168, 85, 247, 0.5) 0px 4px 6px -4px` · lg: `rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset`
- Spacing: base unit 4 px; common steps 2 px, 6 px, 8 px, 12 px, 16 px, 18 px, 20 px, 24 px, 32 px
- Layout: container 1200 px; breakpoints 420 px, 640 px, 768 px, 1024 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** cosmic, enigmatic, minimal.

Sounds like a signal from deep space: spare, mysterious and a little poetic. Sentences are short and often end with a quiet beat.

**Do**

- Use space and distance imagery
- Keep to two short lines per idea
- Use the cursive voice only for accents

**Do not**

- No crypto hype or price talk
- No exclamation marks
- No overexplaining the mystery

## Taglines

1. Beyond earth and its familiar boundaries
2. Follow the signal
3. Reveal what's hidden
4. Define what's next
5. Objects fixed beyond time

**Boilerplate:** Orbis.Nft is a collection of digital space objects, each a quiet study of distance, form and silence, released for collectors who follow the signal.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Join us |
| secondaryCta | Explore the gallery |
| success | Signal received |
| error | Signal lost, please try again |
| empty | The collection is empty for now |

---
Source listing key `m:orbis-nft`. Rebuild with `python3 scripts/brand-kit/build.py m:orbis-nft`.
