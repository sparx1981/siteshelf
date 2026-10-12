# Orbit Engineers — brand kit

*Space engineering consultancy.* Generated from the SiteShelf listing **Orbit Engineers** (Agency); every value below is read from that page, not invented.

> **Tactical excellence through space engineering**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **orbit** glyph on a squircle tile. An orbit is the engineer's native curve, set in uppercase to match the name. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#050B14` | Page background |
| surface | `#141A22` | Cards, panels, raised areas |
| text | `#FFFFFF` | Body and heading text |
| textMuted | `#A8AAAD` | Secondary text, captions |
| primary | `#3EBAF4` | Main actions, links, brand colour |
| secondary | `#95D9F9` | Highlights, charts, second accent |
| border | `#282D35` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#20546F` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 19.73:1 | pass | pass |
| Muted text on background | 8.47:1 | pass | pass |
| Primary on background | 8.96:1 | pass | pass |
| Text on primary | 8.92:1 | pass | pass |
| Text on surface | 17.49:1 | pass | pass |

**Colours seen on the page** (share of use): `#050B14` 99.6%, `#FFFFFF` 0.4%, `#3EBAF4` 0.0%, `#141A22` 0.0%, `#A8AAAD` 0.0%, `#95D9F9` 0.0%, `#282D35` 0.0%, `#20546F` 0.0%

## Typography

- Headings: **Inter** (weight 400)
- Body: **Inter**
- Mono: **JetBrains Mono**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Inter | 60 px | 400 | 63px | -3px |
| Button | Inter | 12 px | 500 | normal | 2.4px |
| Navigation | Inter | 16 px | 400 | normal | normal |
| Mono | JetBrains Mono | 12 px | 400 | 18px | 1.2px |

## Shape, space and motion

- Radius: sm 0 px, md 0 px, lg 0 px
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 2 px, 4 px, 6 px, 8 px, 12 px, 16 px, 32 px, 40 px
- Layout: container 1200 px; breakpoints 480 px, 640 px, 768 px, 900 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** rigorous, tactical, assured.

Orbit Engineers sounds like a flight director in a quiet control room: precise, measured and sure. It speaks in missions and margins, not slogans.

**Do**

- Use mission language: payload, margin, window
- Give numbers with units
- Keep sentences declarative

**Do not**

- Do not use sci-fi clichés
- Do not promise unflown capability
- Do not hide the engineering behind buzzwords

## Taglines

1. Tactical excellence through space engineering
2. Engineered for orbit, built for margin
3. We are Orbit Engineers
4. Mission-ready engineering
5. Precision above the atmosphere

**Boilerplate:** Orbit Engineers is a space engineering consultancy providing mission analysis, systems design and flight hardware support to the aerospace industry.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Scroll to explore |
| secondaryCta | Contact us |
| success | Message received. An engineer will reply within two days. |
| error | We could not send your message. Please email us directly. |
| empty | No industries selected. Choose one to continue. |

---
Source listing key `m:orbit-engineers`. Rebuild with `python3 scripts/brand-kit/build.py m:orbit-engineers`.
