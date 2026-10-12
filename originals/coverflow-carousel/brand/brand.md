# Longway Tapes — brand kit

*Mixtapes for trains, buses and empty roads.* Generated from the SiteShelf listing **Coverflow Carousel** (Gallery); every value below is read from that page, not invented.

> **Mixtapes for the long way home**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Fraunces |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **stack** glyph on a squircle tile. A stack of tapes mirrors the carousel of covers on the page. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#0B0B10` | Page background |
| surface | `#50428C` | Cards, panels, raised areas |
| text | `#F5F3FF` | Body and heading text |
| textMuted | `#A29CC0` | Secondary text, captions |
| primary | `#FF5D8F` | Main actions, links, brand colour |
| secondary | `#1A7F64` | Highlights, charts, second accent |
| border | `#3A3550` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#712D45` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 17.90:1 | pass | pass |
| Muted text on background | 7.53:1 | pass | pass |
| Primary on background | 6.75:1 | pass | pass |
| Text on primary | 6.75:1 | pass | pass |
| Text on surface | 7.66:1 | pass | pass |

**Colours seen on the page** (share of use): `#0B0B10` 80.8%, `#50428C` 9.7%, `#FFFFFF` 3.2%, `#1A7F64` 1.4%, `#B5E48C` 1.2%, `#FF5D8F` 0.7%, `#7AA6C2` 0.7%, `#12F7D6` 0.7%, `#6A00F4` 0.7%, `#FFD23F` 0.7%

## Typography

- Headings: **Fraunces** (weight 600)
- Body: **Manrope**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,600;1,500&family=Manrope:wght@400;500;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Fraunces | 46 px | 600 | 50.6px | -0.46px |
| Heading / H2 | Fraunces | 40 px | 600 | 44px | normal |
| Body | Manrope | 16 px | 400 | 24px | normal |
| Button | Arial | 13.3 px | 400 | normal | normal |

## Shape, space and motion

- Radius: sm 14 px, md 14 px, lg 14 px, pill (fully rounded)
- Shadows: sm: `rgba(0, 0, 0, 0.8) 0px 24px 60px -18px` · md: `rgba(0, 0, 0, 0.8) 0px 24px 60px -18px` · lg: `rgba(0, 0, 0, 0.8) 0px 24px 60px -18px`
- Spacing: base unit 4 px; common steps 2 px, 6 px, 8 px, 10 px, 12 px, 14 px, 18 px, 20 px, 40 px
- Layout: container 1200 px; breakpoints 700 px
- Motion: 300 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** dreamy, nostalgic, slightly wistful.

Longway Tapes sounds like a handwritten note slipped inside a cassette case: intimate, a bit sentimental and specific about when and where to listen. Titles do most of the work.

**Do**

- Name each mix after a place, time or weather
- Say where and when to press play
- Keep the tone personal, like a gift

**Do not**

- Use streaming-service language like 'curated for you'
- Over-explain the music
- Use exclamation marks

## Taglines

1. Mixtapes for the long way home
2. Seven mixes for slow trains
3. Press play, miss your stop
4. Soundtracks for empty motorways
5. Made for the window seat

**Boilerplate:** Longway Tapes is a small label of generated mixtape covers and compilations made for slow journeys, late buses and drives with nowhere to be.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Play this mix |
| secondaryCta | Next tape |
| success | Added to your shelf. |
| error | That tape would not spin. Try another. |
| empty | The shelf is empty. Pick a tape. |

---
Source listing key `o:coverflow-carousel`. Rebuild with `python3 scripts/brand-kit/build.py o:coverflow-carousel`.
