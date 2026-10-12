# Slow Tide — brand kit

*Vinyl-style music player with a hand-picked playlist.* Generated from the SiteShelf listing **Vinyl Music Player Widget** (Widgets); every value below is read from that page, not invented.

> **Records that arrive like the tide**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from DM Serif Display |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **wave** glyph. A wave line suggests the tide in the name and the rise and fall of audio. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#1A1410` | Page background |
| surface | `#241C16` | Cards, panels, raised areas |
| text | `#F6EDE2` | Body and heading text |
| textMuted | `#9C8D7C` | Secondary text, captions |
| primary | `#FF7A45` | Main actions, links, brand colour |
| secondary | `#FFB699` | Highlights, charts, second accent |
| border | `#3A2E24` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#713A26` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 15.75:1 | pass | pass |
| Muted text on background | 5.66:1 | pass | pass |
| Primary on background | 7.05:1 | pass | pass |
| Text on primary | 7.60:1 | pass | pass |
| Text on surface | 14.47:1 | pass | pass |

**Colours seen on the page** (share of use): `#1A1410` 97.2%, `#FF7A45` 1.4%, `#CFC6B8` 1.2%, `#F6EDE2` 0.1%, `#9C8D7C` 0.1%, `#000000` 0.0%, `#FFB699` 0.0%, `#3A2E24` 0.0%, `#713A26` 0.0%

## Typography

- Headings: **DM Serif Display** (weight 400)
- Body: **DM Sans**
- Google Fonts: `https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=DM+Sans:wght@400;500;600&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | DM Serif Display | 34 px | 400 | 37.4px | normal |
| Button | Arial | 13.3 px | 400 | normal | normal |

## Shape, space and motion

- Radius: sm 3 px, md 22 px, lg 50 px, pill (fully rounded)
- Shadows: sm: `rgba(0, 0, 0, 0.5) 0px 14px 30px 0px` · md: `rgba(0, 0, 0, 0.5) 0px 14px 30px 0px` · lg: `rgba(0, 0, 0, 0.5) 0px 14px 30px 0px`
- Spacing: base unit 4 px; common steps 2 px, 4 px, 6 px, 9 px, 10 px, 12 px, 14 px, 16 px, 32 px
- Layout: container 1200 px; breakpoints 800 px
- Motion: 500 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** mellow, nostalgic, smooth.

A late-night radio host with a lowered voice: smooth, unhurried and slightly poetic. Track details are given like liner notes.

**Do**

- Credit artist and duration for every track
- Write with a gentle, rolling rhythm
- Describe mood in one line

**Do not**

- Hyped-up streaming slogans
- Algorithm talk like recommended for you
- Emoji

## Taglines

1. Records that arrive like the tide
2. Drop the needle, let it drift
3. Five tracks, nothing rushed
4. Slow songs for long evenings
5. Music with room to breathe

**Boilerplate:** Slow Tide is a vinyl-style music player with a spinning record, tonearm and a short, hand-picked playlist of mellow tracks.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Play |
| secondaryCta | Shuffle |
| success | Now playing: Slow Tide |
| error | This track skipped. Try the next one |
| empty | The playlist is empty. Add a track |

---
Source listing key `o:music-player`. Rebuild with `python3 scripts/brand-kit/build.py o:music-player`.
