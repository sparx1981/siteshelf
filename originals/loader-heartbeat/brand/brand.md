# Pulse Ledger — brand kit

*Patient-data platform with a calm loading monitor.* Generated from the SiteShelf listing **Heartbeat Loader** (Loaders); every value below is read from that page, not invented.

> **A steady beat while we load**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Space Grotesk |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **pulse** glyph on a squircle tile. A pulse line is literally the heartbeat trace the product is built on. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#06180F` | Page background |
| surface | `#0A2A22` | Cards, panels, raised areas |
| text | `#8EC9AE` | Body and heading text |
| textMuted | `#D4F5E5` | Secondary text, captions |
| primary | `#FF5A6E` | Main actions, links, brand colour |
| secondary | `#3DFFA0` | Highlights, charts, second accent |
| border | `#1F5A45` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#3DFFA0` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 9.71:1 | pass | pass |
| Muted text on background | 15.71:1 | pass | pass |
| Primary on background | 6.06:1 | pass | pass |
| Text on primary | 6.49:1 | pass | pass |
| Text on surface | 8.13:1 | pass | pass |

**Colours seen on the page** (share of use): `#0A2A22` 49.1%, `#04100D` 49.1%, `#FFFFFF` 0.8%, `#8EC9AE` 0.4%, `#D4F5E5` 0.3%, `#3DFFA0` 0.2%, `#BFEED7` 0.1%, `#FF5A6E` 0.1%, `#D98A94` 0.0%, `#1F5A45` 0.0%

## Typography

- Headings: **Space Grotesk** (weight 700)
- Body: **Space Grotesk**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=VT323&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Space Grotesk | 54 px | 700 | 56.16px | -1.08px |
| Body | Space Grotesk | 17 px | 500 | 25.5px | normal |
| Button | Space Grotesk | 16 px | 700 | 24px | normal |
| Caption / eyebrow | Space Grotesk | 13 px | 700 | normal | 2.34px |

## Shape, space and motion

- Radius: sm 6 px, md 10 px, lg 16 px, pill (fully rounded)
- Shadows: sm: `rgba(61, 255, 160, 0.06) 0px 0px 0px 1px, rgb(0, 0, 0) 0px 30px 70px -30px, rgba(61, 255, 160, 0.05) 0px 0px 90px 0px inset` · md: `rgb(61, 255, 160) 0px 0px 8px 0px` · lg: `rgba(61, 255, 160, 0.06) 0px 0px 0px 1px, rgb(0, 0, 0) 0px 30px 70px -30px, rgba(61, 255, 160, 0.05) 0px 0px 90px 0px inset`
- Spacing: base unit 2 px; common steps 2 px, 6 px, 8 px, 9 px, 10 px, 12 px, 14 px, 18 px, 20 px
- Layout: container 1020 px; breakpoints 760 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** steady, clinical, reassuring.

A monitor in a quiet ward: precise, level and never alarmed. Short phrases that tell the user the system is alive and working.

**Do**

- Keep status lines literal, such as loading records
- Use clinical terms correctly, such as bpm and trace
- Reassure in as few words as possible

**Do not**

- Dramatic medical language
- Cute heart emoji
- Promising timings it cannot keep

## Taglines

1. A steady beat while we load
2. Records on their way
3. Every pulse, accounted for
4. Calm data, steady rhythm
5. Hold on, we have a pulse

**Boilerplate:** Pulse Ledger is a patient-data platform with a monitor-style loader, designed to keep users calmly informed while records load. All data shown is fictional.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Pause |
| secondaryCta | Resume |
| success | Records loaded |
| error | Connection dropped. Reconnecting |
| empty | No readings yet |

---
Source listing key `o:loader-heartbeat`. Rebuild with `python3 scripts/brand-kit/build.py o:loader-heartbeat`.
