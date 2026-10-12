# Paper Lanterns — brand kit

*Now-playing card for an original song by Maren Vale.* Generated from the SiteShelf listing **Lyrics Now Playing** (Widgets); every value below is read from that page, not invented.

> **Low tide letters, lantern light**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Fraunces |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **play** glyph on a circle tile. A play triangle fits a now-playing card. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#14183A` | Page background |
| surface | `#0B0D22` | Cards, panels, raised areas |
| text | `#FFFFFF` | Body and heading text |
| textMuted | `#D9DCF5` | Secondary text, captions |
| primary | `#FFE9A8` | Main actions, links, brand colour |
| secondary | `#8A2A1A` | Highlights, charts, second accent |
| border | `#FFF3D6` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#8A2A1A` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 17.19:1 | pass | pass |
| Muted text on background | 12.69:1 | pass | pass |
| Primary on background | 14.30:1 | pass | pass |
| Text on primary | 16.35:1 | pass | pass |
| Text on surface | 19.18:1 | pass | pass |

**Colours seen on the page** (share of use): `#14183A` 65.5%, `#0B0D22` 29.7%, `#000000` 1.6%, `#FFFFFF` 1.5%, `#FFF3D6` 0.8%, `#FFC86E` 0.6%, `#FFE9A8` 0.3%, `#8A2A1A` 0.1%, `#D9DCF5` 0.0%, `#2A1A00` 0.0%

## Typography

- Headings: **Fraunces** (weight 600)
- Body: **DM Sans**
- Google Fonts: `https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Fraunces:opsz,wght@9..144,600&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Fraunces | 32 px | 600 | 35.2px | normal |
| Button | Arial | 13.3 px | 400 | normal | normal |
| Caption / eyebrow | DM Sans | 12 px | 700 | normal | 2.16px |

## Shape, space and motion

- Radius: sm 12 px, md 28 px, lg 50 px, pill (fully rounded)
- Shadows: sm: `rgba(0, 0, 0, 0.55) 0px 26px 60px 0px` · md: `rgba(0, 0, 0, 0.55) 0px 26px 60px 0px` · lg: `rgba(0, 0, 0, 0.55) 0px 26px 60px 0px`
- Spacing: base unit 2 px; common steps 2 px, 6 px, 8 px, 10 px, 14 px, 18 px, 20 px, 26 px, 28 px
- Layout: container 1060 px; breakpoints 900 px
- Motion: 300 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** dreamy, soft, poetic.

Speaks like liner notes: gentle, image-led and a little hushed. Lyrics are the star, so interface text stays small and warm.

**Do**

- Quote a lyric line when you can
- Keep controls to a verb or a symbol
- Credit artist and album every time

**Do not**

- No streaming-service jargon
- No hype about play counts
- No spoilers of the whole lyric in a tagline

## Taglines

1. Low tide letters, lantern light
2. Sing along, word by word
3. Folding into mist
4. A song you can watch
5. Listen with the lights down

**Boilerplate:** Paper Lanterns is an original song by Maren Vale from the album Low Tide Letters, presented as a now-playing card with lyrics that light up word by word.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Karaoke fill |
| secondaryCta | Announce lines |
| success | Lyrics synced to the song |
| error | Playback paused, tap play to continue |
| empty | Press play to start the lyrics |

---
Source listing key `o:widget-lyrics-player`. Rebuild with `python3 scripts/brand-kit/build.py o:widget-lyrics-player`.
