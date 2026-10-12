# Harbor Ops — brand kit

*Infrastructure monitoring for fast-moving teams.* Generated from the SiteShelf listing **Server Monitor Dashboard** (Dashboard); every value below is read from that page, not invented.

> **Calm waters, clear signals**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Sora |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **pulse** glyph. A pulse trace is the classic picture of a system's live heartbeat. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#0B0F14` | Page background |
| surface | `#121820` | Cards, panels, raised areas |
| text | `#E6EDF5` | Body and heading text |
| textMuted | `#8795A8` | Secondary text, captions |
| primary | `#38D5FF` | Main actions, links, brand colour |
| secondary | `#3DDC97` | Highlights, charts, second accent |
| border | `#1F2833` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#1E6074` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 16.29:1 | pass | pass |
| Muted text on background | 6.31:1 | pass | pass |
| Primary on background | 11.10:1 | pass | pass |
| Text on primary | 11.35:1 | pass | pass |
| Text on surface | 15.12:1 | pass | pass |

**Colours seen on the page** (share of use): `#0B0F14` 95.8%, `#3DDC97` 2.0%, `#38D5FF` 0.6%, `#9A7CFF` 0.5%, `#E6EDF5` 0.4%, `#FFB454` 0.3%, `#FF5D6C` 0.2%, `#8795A8` 0.1%, `#10283A` 0.1%, `#6B7A8E` 0.1%

## Typography

- Headings: **Sora** (weight 700)
- Body: **Sora**
- Mono: **JetBrains Mono**
- Google Fonts: `https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&family=Sora:wght@500;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Sora | 20 px | 700 | normal | normal |
| Heading / H2 | Sora | 14 px | 700 | normal | normal |
| Button | Sora | 13 px | 500 | normal | normal |
| Mono | JetBrains Mono | 13 px | 400 | 19.5px | normal |

## Shape, space and motion

- Radius: sm 2 px, md 12 px, lg 14 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 2 px; common steps 2 px, 3 px, 6 px, 8 px, 10 px, 12 px, 14 px, 16 px, 20 px
- Layout: container 1280 px; breakpoints 700 px, 1000 px
- Motion: 300 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** vigilant, level, technical.

Harbor Ops reads like a good incident report: calm, specific and timestamped. It names the host, the metric and the threshold, and never raises its voice above what the graph shows.

**Do**

- Name host, metric and value together
- Timestamp every alert
- Use severity words consistently: ok, warn, critical

**Do not**

- Do not use dramatic words such as 'catastrophic'
- Avoid vague 'issues detected'
- Never alert without a next step

## Taglines

1. Calm waters, clear signals
2. Watch every host, every second
3. See trouble before it lands
4. Ops, without the noise
5. Your fleet at a glance

**Boilerplate:** Harbor Ops is an infrastructure monitoring service that streams CPU, memory, request and latency data for production services and raises clear, prioritised alerts.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Simulate incident |
| secondaryCta | View alerts |
| success | Incident resolved. Latency back to normal. |
| error | Lost connection to api-1. Retrying. |
| empty | No alerts in this time range. |

---
Source listing key `o:server-monitor`. Rebuild with `python3 scripts/brand-kit/build.py o:server-monitor`.
