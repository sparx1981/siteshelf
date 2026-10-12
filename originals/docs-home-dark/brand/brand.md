# Quillstream — brand kit

*Real-time events API for developers.* Generated from the SiteShelf listing **Dark Docs Home** (Landing Page); every value below is read from that page, not invented.

> **Ship real-time features in an afternoon**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Space Grotesk |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **pulse** glyph. A pulse line suggests a live stream of events. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#0B0D12` | Page background |
| surface | `#12151D` | Cards, panels, raised areas |
| text | `#8D96AB` | Body and heading text |
| textMuted | `#E8EBF3` | Secondary text, captions |
| primary | `#2DE2C4` | Main actions, links, brand colour |
| secondary | `#FFCF70` | Highlights, charts, second accent |
| border | `#232836` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#19655B` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 6.56:1 | pass | pass |
| Muted text on background | 16.30:1 | pass | pass |
| Primary on background | 11.83:1 | pass | pass |
| Text on primary | 11.96:1 | pass | pass |
| Text on surface | 6.16:1 | pass | pass |

**Colours seen on the page** (share of use): `#0B0D12` 96.6%, `#232836` 2.6%, `#8D96AB` 0.4%, `#E8EBF3` 0.2%, `#2DE2C4` 0.1%, `#CFD6E6` 0.1%, `#7EE2A8` 0.0%, `#6B7488` 0.0%, `#FFCF70` 0.0%, `#7AA2FF` 0.0%

## Typography

- Headings: **Space Grotesk** (weight 700)
- Body: **Inter**
- Mono: **JetBrains Mono**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=JetBrains+Mono:wght@400;500&family=Space+Grotesk:wght@500;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Space Grotesk | 64 px | 700 | 67.2px | -1.92px |
| Heading / H2 | Space Grotesk | 28 px | 700 | normal | -0.56px |
| Subheading / H3 | Space Grotesk | 18 px | 700 | normal | normal |
| Body | Inter | 18 px | 400 | 28.8px | normal |
| Button | Inter | 14 px | 500 | normal | normal |
| Navigation | Space Grotesk | 20 px | 700 | normal | normal |
| Caption / eyebrow | Inter | 13 px | 400 | 20.8px | normal |
| Mono | JetBrains Mono | 12 px | 500 | normal | normal |

## Shape, space and motion

- Radius: sm 6 px, md 10 px, lg 14 px, pill (fully rounded)
- Shadows: sm: `rgba(45, 226, 196, 0) 0px 0px 0px 0px` · md: `rgb(45, 226, 196) 0px 0px 10px 0px` · lg: `rgba(45, 226, 196, 0) 0px 0px 0px 0px`
- Spacing: base unit 2 px; common steps 6 px, 8 px, 9 px, 10 px, 12 px, 14 px, 18 px, 20 px, 22 px
- Layout: container 1120 px; breakpoints 560 px, 760 px, 900 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** fast, precise, developer-first.

Quillstream writes like a senior engineer's good README: terse, example-first and respectful of time. It shows the code before explaining it and promises only what the API does.

**Do**

- Show a working snippet before the explanation
- State limits, versions and status exactly
- Use second person and the imperative mood

**Do not**

- Do not claim 'zero latency' or 'infinite scale'
- Do not use jargon without a link
- Do not hide breaking changes

## Taglines

1. Ship real-time features in an afternoon
2. Events in, answers out, quickly
3. Docs you can copy and paste
4. Streams that behave in production
5. Build on a socket you can trust

**Boilerplate:** Quillstream provides a real-time events API with SDKs for Node and Python, along with guides, references and copy-and-paste examples for developers.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Get an API key |
| secondaryCta | Read the guides |
| success | Copied. Paste it into your terminal. |
| error | No results for that search. Try a method name or a guide title. |
| empty | No recent searches yet. |

---
Source listing key `o:docs-home-dark`. Rebuild with `python3 scripts/brand-kit/build.py o:docs-home-dark`.
