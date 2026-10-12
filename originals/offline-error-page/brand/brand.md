# Harbourline — brand kit

*Messaging app that stays useful without a connection.* Generated from the SiteShelf listing **Offline Error Page** (Error Page); every value below is read from that page, not invented.

> **You're offline, but not stranded**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Space Grotesk |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **bolt** glyph on a squircle tile. A bolt of connection and breaking contact fits the plug-and-socket story of the offline page. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#0A1A1F` | Page background |
| surface | `#12272E` | Cards, panels, raised areas |
| text | `#8FB0B0` | Body and heading text |
| textMuted | `#E8F6F4` | Secondary text, captions |
| primary | `#FFB020` | Main actions, links, brand colour |
| secondary | `#1D3B44` | Highlights, charts, second accent |
| border | `#1D2F33` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#1D3B44` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 7.63:1 | pass | pass |
| Muted text on background | 16.03:1 | pass | pass |
| Primary on background | 9.73:1 | pass | pass |
| Text on primary | 10.74:1 | pass | pass |
| Text on surface | 6.64:1 | pass | pass |

**Colours seen on the page** (share of use): `#0A1A1F` 99.0%, `#FFB020` 0.4%, `#8FB0B0` 0.3%, `#E8F6F4` 0.1%, `#000000` 0.1%, `#1D3B44` 0.1%, `#FFE08A` 0.0%, `#2A1C00` 0.0%, `#3DDC97` 0.0%, `#CFD8DC` 0.0%

## Typography

- Headings: **Space Grotesk** (weight 700)
- Body: **Space Grotesk**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Space Grotesk | 44 px | 700 | 48.4px | normal |
| Heading / H2 | Space Grotesk | 14 px | 700 | 21.7px | 1.12px |
| Body | Space Grotesk | 16 px | 400 | 24.8px | normal |
| Button | Space Grotesk | 13.3 px | 400 | normal | normal |

## Shape, space and motion

- Radius: sm 12 px, md 16 px, lg 16 px, pill (fully rounded)
- Shadows: sm: `rgb(61, 220, 151) 0px 0px 12px 0px` · md: `rgb(61, 220, 151) 0px 0px 12px 0px` · lg: `rgb(61, 220, 151) 0px 0px 12px 0px`
- Spacing: base unit 4 px; common steps 3 px, 8 px, 10 px, 12 px, 16 px, 18 px, 22 px, 24 px, 40 px
- Layout: container 1200 px; breakpoints 480 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** friendly, resilient, calm.

A harbour pilot's steady voice when the signal drops: unbothered, practical and a little wry. It names the problem, says what still works and keeps you company while you wait.

**Do**

- Say what still works while offline
- Give one concrete thing to try, such as check your Wi-Fi
- Keep the humour light and the instructions clear

**Do not**

- Blaming the user's connection
- Panic words like failure or crash
- Technical codes without translation

## Taglines

1. You're offline, but not stranded
2. Back in a ripple
3. Recent pages still work
4. Plugged out, not shut down
5. Hold the line, we'll reconnect

**Boilerplate:** Harbourline is a messaging and reading app that keeps recent pages available offline and reconnects automatically when the network returns.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Try again |
| secondaryCta | Open cached pages |
| success | Back online. Welcome back |
| error | Still offline. Try again in a moment |
| empty | No cached pages yet |

---
Source listing key `o:offline-error-page`. Rebuild with `python3 scripts/brand-kit/build.py o:offline-error-page`.
