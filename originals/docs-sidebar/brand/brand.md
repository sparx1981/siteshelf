# forge/docs — brand kit

*Developer documentation for the Forge API.* Generated from the SiteShelf listing **Docs Sidebar Layout** (Navigation); every value below is read from that page, not invented.

> **Build it right the first time**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **monogram** glyph on a squircle tile. The name is written like a path, so a plain lowercase wordmark with an F monogram fits the developer audience. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#FFFFFF` | Page background |
| surface | `#F0F0F0` | Cards, panels, raised areas |
| text | `#1F2328` | Body and heading text |
| textMuted | `#656D76` | Secondary text, captions |
| primary | `#0969DA` | Main actions, links, brand colour |
| secondary | `#78ACEB` | Highlights, charts, second accent |
| border | `#D8DEE4` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#78ACEB` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 15.80:1 | pass | pass |
| Muted text on background | 5.25:1 | pass | pass |
| Primary on background | 5.19:1 | pass | pass |
| Text on primary | 5.19:1 | pass | pass |
| Text on surface | 13.86:1 | pass | pass |

**Colours seen on the page** (share of use): `#FFFFFF` 99.2%, `#1F2328` 0.6%, `#656D76` 0.2%, `#0969DA` 0.0%, `#F0F0F0` 0.0%, `#78ACEB` 0.0%, `#D8DEE4` 0.0%

## Typography

- Headings: **Inter** (weight 700)
- Body: **Inter**
- Mono: **JetBrains Mono**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Inter | 40 px | 700 | 46px | -0.8px |
| Heading / H2 | Inter | 26 px | 650 | 33.8px | normal |
| Subheading / H3 | Inter | 20 px | 600 | normal | normal |
| Body | Inter | 18 px | 400 | 30.6px | normal |
| Button | Arial | 17 px | 400 | normal | normal |
| Navigation | Inter | 14 px | 400 | 23.8px | normal |
| Caption / eyebrow | Inter | 13 px | 400 | 22.1px | normal |
| Mono | JetBrains Mono | 12 px | 500 | normal | normal |

## Shape, space and motion

- Radius: sm 5 px, md 8 px, lg 10 px
- Shadows: none used (flat)
- Spacing: base unit 2 px; common steps 2 px, 4 px, 6 px, 8 px, 10 px, 12 px, 14 px, 16 px, 18 px
- Layout: container 1500 px; breakpoints 800 px, 1100 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** exact, terse, dependable.

Writes like a good reference manual with a friendly colleague's sense of what you will trip on. Imperative steps, real code and warnings placed right before the mistake.

**Do**

- Use imperative verbs for every step
- Put the code sample straight after the sentence that needs it
- State what a failure looks like

**Do not**

- No marketing language in a reference page
- Avoid vague phrases like simply or just
- Do not repeat what the code already says

## Taglines

1. Build it right the first time
2. Ship with the docs open
3. Reference you can trust at 2am
4. Keys, requests, responses. Done
5. Docs for people who read code

**Boilerplate:** forge/docs is the documentation home for the Forge API, with guides, an API reference and copy-ready code for developers building on a secret-key model.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Copy |
| secondaryCta | View API reference |
| success | Copied to clipboard. |
| error | Request failed. Check your key and try again. |
| empty | No results. Try a shorter search term. |

---
Source listing key `o:docs-sidebar`. Rebuild with `python3 scripts/brand-kit/build.py o:docs-sidebar`.
