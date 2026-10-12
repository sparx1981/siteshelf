# Skiff Cloud — brand kit

*Small-boat cloud hosting.* Generated from the SiteShelf listing **500 Server Error Page** (Error Page); every value below is read from that page, not invented.

> **Something broke on our side**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Sora |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **cloud** glyph on a squircle tile. A cloud is the product itself, drawn simply like a small boat's sail. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#0F1720` | Page background |
| surface | `#16212E` | Cards, panels, raised areas |
| text | `#8FA2B7` | Body and heading text |
| textMuted | `#E8EEF5` | Secondary text, captions |
| primary | `#4CC2FF` | Main actions, links, brand colour |
| secondary | `#FFB454` | Highlights, charts, second accent |
| border | `#263648` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#265874` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 6.89:1 | pass | pass |
| Muted text on background | 15.45:1 | pass | pass |
| Primary on background | 9.00:1 | pass | pass |
| Text on primary | 9.79:1 | pass | pass |
| Text on surface | 6.21:1 | pass | pass |

**Colours seen on the page** (share of use): `#0F1720` 79.4%, `#1F3A5F` 18.9%, `#4CC2FF` 0.6%, `#1C2A3B` 0.3%, `#E8EEF5` 0.2%, `#000000` 0.2%, `#8FA2B7` 0.2%, `#2A2113` 0.1%, `#2C5A86` 0.1%, `#8AE0FF` 0.0%

## Typography

- Headings: **Sora** (weight 700)
- Body: **IBM Plex Sans**
- Mono: **IBM Plex Mono**
- Google Fonts: `https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@500&family=IBM+Plex+Sans:wght@400;500&family=Sora:wght@600;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Sora | 60 px | 700 | 63px | -1.2px |
| Body | IBM Plex Sans | 16 px | 400 | 24.8px | normal |
| Button | IBM Plex Sans | 15 px | 500 | normal | normal |
| Caption / eyebrow | IBM Plex Sans | 13.3 px | 400 | 20.6667px | normal |
| Mono | IBM Plex Mono | 15 px | 500 | normal | 0.6px |

## Shape, space and motion

- Radius: sm 8 px, md 12 px, lg 20 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 2 px; common steps 5 px, 6 px, 8 px, 10 px, 11 px, 12 px, 14 px, 16 px, 18 px
- Layout: container 1200 px; breakpoints 480 px
- Motion: 250 ms, `linear`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** steady, honest, reassuring.

Skiff Cloud sounds like a calm harbour pilot when something has gone wrong. It owns the fault, says what is safe, and gives the reader one thing to do next.

**Do**

- Own the problem in the first sentence
- Say plainly that the user's work is safe
- Give a reference code and one next step

**Do not**

- Do not blame the user or their device
- Do not use 'oops' or cheerful puns
- Do not hide how long a retry will take

## Taglines

1. Something broke on our side
2. Your work is safe
3. Steady hands on a rough day
4. Back on the water shortly
5. We will fix it and tell you

**Boilerplate:** Skiff Cloud is a cloud hosting service for small teams, built to be light, quick to launch and open about outages when they happen.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Retry now |
| secondaryCta | Send report |
| success | Report received. Thank you, our engineers will read it. |
| error | We could not send your report. Copy the reference and try again. |
| empty | No incidents reported in the last 24 hours. |

---
Source listing key `o:error-500-page`. Rebuild with `python3 scripts/brand-kit/build.py o:error-500-page`.
