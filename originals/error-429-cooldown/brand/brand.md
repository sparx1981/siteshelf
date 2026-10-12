# Quillpost — brand kit

*Messaging API for developers.* Generated from the SiteShelf listing **Too Many Requests Page** (Error Page); every value below is read from that page, not invented.

> **Slow down a little**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Space Grotesk |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **bars** glyph on a squircle tile. Rising bars mirror the request meter that the page itself displays. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#120D2B` | Page background |
| surface | `#7C5CFF` | Cards, panels, raised areas |
| text | `#F1EEFF` | Body and heading text |
| textMuted | `#B5ACDF` | Secondary text, captions |
| primary | `#7C5CFF` | Main actions, links, brand colour |
| secondary | `#38E1C6` | Highlights, charts, second accent |
| border | `#FFFFFF` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#38E1C6` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 16.47:1 | pass | pass |
| Muted text on background | 8.88:1 | pass | pass |
| Primary on background | 4.32:1 | fail | pass |
| Text on primary | 4.52:1 | pass | pass |
| Text on surface | 3.81:1 | fail | pass |

**Colours seen on the page** (share of use): `#120D2B` 78.5%, `#7C5CFF` 20.4%, `#38E1C6` 0.4%, `#FFB84D` 0.3%, `#F1EEFF` 0.2%, `#B5ACDF` 0.1%, `#D8D2FF` 0.0%, `#FFFFFF` 0.0%, `#0B0B0F` 0.0%

## Typography

- Headings: **Space Grotesk** (weight 700)
- Body: **Inter**
- Mono: **monospace**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400&family=Space+Grotesk:wght@600;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Space Grotesk | 42 px | 700 | 46.2px | -0.84px |
| Body | Inter | 16 px | 400 | 25.6px | normal |
| Button | Arial | 13.3 px | 400 | normal | normal |
| Mono | monospace | 13 px | 400 | normal | normal |

## Shape, space and motion

- Radius: sm 8 px, md 14 px, lg 22 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 2 px; common steps 4 px, 6 px, 10 px, 12 px, 14 px, 16 px, 18 px, 20 px, 22 px
- Layout: container 1200 px; breakpoints single fluid layout
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** calm, exact, friendly.

Sounds like documentation that cares: precise numbers, a light touch of humour, and instructions in order. Even rate limits get a gentle tone.

**Do**

- State the number and the limit in the same sentence
- Tell the developer what to do next
- Allow one light line per error

**Do not**

- No blame for hitting a limit
- No red alarm wording
- No unexplained error codes

## Taglines

1. Slow down a little
2. Every request, in its own time
3. APIs with manners
4. Send fast, stay within limits
5. Rate limits, kindly explained

**Boilerplate:** Quillpost is a messaging API for developers, with clear limits, honest error pages and tools that explain exactly how to stay within a plan.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Retry now |
| secondaryCta | Upgrade plan |
| success | Limit cleared, you can send again |
| error | Still over the limit, wait a moment and retry |
| empty | No requests in the last minute |

---
Source listing key `o:error-429-cooldown`. Rebuild with `python3 scripts/brand-kit/build.py o:error-429-cooldown`.
