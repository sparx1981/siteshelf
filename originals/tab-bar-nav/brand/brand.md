# Tidepool Go — brand kit

*Coastal weather and tide companion app.* Generated from the SiteShelf listing **Bottom Tab Bar Navigation** (Navigation); every value below is read from that page, not invented.

> **Good morning, high at 11:42**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Plus Jakarta Sans |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **wave** glyph on a squircle tile. A wave is the obvious sign for tides and keeps its shape in a tab-bar icon. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#E9ECF5` | Page background |
| surface | `#0F1222` | Cards, panels, raised areas |
| text | `#161A33` | Body and heading text |
| textMuted | `#606477` | Secondary text, captions |
| primary | `#6A4CFF` | Main actions, links, brand colour |
| secondary | `#161A33` | Highlights, charts, second accent |
| border | `#ECEEF6` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#161A33` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 14.46:1 | pass | pass |
| Muted text on background | 4.96:1 | pass | pass |
| Primary on background | 4.35:1 | fail | pass |
| Text on primary | 5.13:1 | pass | pass |
| Text on surface | 1.09:1 | fail | fail |

**Colours seen on the page** (share of use): `#E9ECF5` 72.1%, `#0F1222` 13.9%, `#FBFBFE` 12.8%, `#6A4CFF` 0.7%, `#B06CFF` 0.4%, `#7A809C` 0.1%, `#FF4D6A` 0.0%, `#606477` 0.0%

## Typography

- Headings: **Plus Jakarta Sans** (weight 800)
- Body: **Plus Jakarta Sans**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;700;800&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Plus Jakarta Sans | 26 px | 800 | normal | normal |
| Heading / H2 | Plus Jakarta Sans | 22 px | 800 | normal | normal |
| Body | Plus Jakarta Sans | 15 px | 500 | 22.5px | normal |
| Button | Plus Jakarta Sans | 13 px | 700 | normal | normal |
| Caption / eyebrow | Plus Jakarta Sans | 12.5 px | 500 | 18.75px | normal |

## Shape, space and motion

- Radius: sm 16 px, md 22 px, lg 34 px, pill (fully rounded)
- Shadows: sm: `rgba(30, 40, 90, 0.05) 0px 2px 8px 0px` · md: `rgba(30, 40, 90, 0.18) 0px 10px 30px 0px` · lg: `rgba(30, 40, 90, 0.3) 0px 30px 60px 0px`
- Spacing: base unit 2 px; common steps 2 px, 6 px, 10 px, 12 px, 14 px, 15 px, 16 px, 18 px, 20 px
- Layout: container 1200 px; breakpoints 480 px
- Motion: 150 ms, `cubic-bezier(0.3`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** breezy, useful, friendly.

Tidepool Go speaks like a cheerful local who knows the tides: short, friendly and specific about times. It gives the high tide before the greeting finishes.

**Do**

- Give times in 24-hour form with the place
- Open with a warm greeting, then the data
- Keep tab labels to a single word

**Do not**

- Do not use surf slang or wave puns
- Avoid long weather paragraphs
- Never show a time without a place

## Taglines

1. Good morning, high at 11:42
2. The coast, in your pocket
3. Tides, weather and walks
4. Know before you go
5. Little app, big tides

**Boilerplate:** Tidepool Go is a coastal companion app that shows tide times, weather and quick actions on a bottom tab bar, made for walkers, swimmers and small-boat sailors.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Quick actions |
| secondaryCta | Switch location |
| success | Location switched. |
| error | Could not load tide times. Pull down to retry. |
| empty | No messages in your inbox. |

---
Source listing key `o:tab-bar-nav`. Rebuild with `python3 scripts/brand-kit/build.py o:tab-bar-nav`.
