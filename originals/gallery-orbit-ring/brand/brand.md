# Ring Room — brand kit

*Online gallery of twelve artworks.* Generated from the SiteShelf listing **Orbit Ring Gallery** (Gallery); every value below is read from that page, not invented.

> **Twelve pieces, one orbit**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Syne |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **orbit** glyph on a squircle tile. An orbit mirrors the rotating ring of artworks. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#0A0B14` | Page background |
| surface | `#6E5AFF` | Cards, panels, raised areas |
| text | `#F1F0FF` | Body and heading text |
| textMuted | `#A6A3CC` | Secondary text, captions |
| primary | `#FF9F1C` | Main actions, links, brand colour |
| secondary | `#CBF3F0` | Highlights, charts, second accent |
| border | `#FFFFFF` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#714914` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 17.41:1 | pass | pass |
| Muted text on background | 8.15:1 | pass | pass |
| Primary on background | 9.55:1 | pass | pass |
| Text on primary | 9.57:1 | pass | pass |
| Text on surface | 4.08:1 | fail | pass |

**Colours seen on the page** (share of use): `#0A0B14` 87.8%, `#CBF3F0` 2.2%, `#E9C46A` 2.1%, `#FF9F1C` 1.7%, `#F4A261` 1.6%, `#FF7A59` 1.1%, `#2EC4B6` 1.1%, `#264653` 1.0%, `#6A4C93` 0.8%, `#6E5AFF` 0.6%

## Typography

- Headings: **Syne** (weight 800)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Syne:wght@700;800&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Syne | 80 px | 800 | 80px | -2.4px |
| Heading / H2 | Syne | 28 px | 800 | normal | normal |
| Body | Inter | 15 px | 400 | 24px | normal |
| Button | Inter | 15 px | 400 | 24px | normal |

## Shape, space and motion

- Radius: sm 12 px, md 12 px, lg 12 px, pill (fully rounded)
- Shadows: sm: `rgba(0, 0, 0, 0.8) 0px 20px 50px -20px` · md: `rgba(0, 0, 0, 0.8) 0px 20px 50px -20px` · lg: `rgba(0, 0, 0, 0.8) 0px 20px 50px -20px`
- Spacing: base unit 2 px; common steps 2 px, 4 px, 6 px, 8 px, 10 px, 14 px, 18 px, 20 px, 48 px
- Layout: container 1200 px; breakpoints 700 px
- Motion: 300 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** curious, hushed, spacious.

Ring Room speaks like a gallery attendant who lets visitors look first and talk second. It gives titles and artists plainly and offers just a line of context.

**Do**

- Give the title, the artist and the year first
- Invite looking before explaining
- Keep captions to one or two sentences

**Do not**

- Do not use art-speak like 'interrogates' or 'liminal'
- Do not rank the pieces
- Do not crowd a caption with links

## Taglines

1. Twelve pieces, one orbit
2. Turn the ring, find the piece
3. Art that circles back
4. A small gallery that keeps moving
5. Look closer, then look again

**Boilerplate:** Ring Room is an online gallery showing twelve invented artworks in a rotating ring, each presented with its title and artist.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Auto-rotate |
| secondaryCta | Look closer |
| success | Opened. Press Esc to return to the ring. |
| error | That piece could not open. Pick another from the ring. |
| empty | The ring is empty. Add a piece to start. |

---
Source listing key `o:gallery-orbit-ring`. Rebuild with `python3 scripts/brand-kit/build.py o:gallery-orbit-ring`.
