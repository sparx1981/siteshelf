# Digitwist — brand kit

*AI website builder.* Generated from the SiteShelf listing **Digitwist AI Builder** (SaaS); every value below is read from that page, not invented.

> **Build faster**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter Bold (stand-in for Instrument Sans) |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **spark** glyph on a squircle tile. A spark suggests AI and quick creation. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#000000` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#FFFFFF` | Body and heading text |
| textMuted | `#A6A6A6` | Secondary text, captions |
| primary | `#B4C0FF` | Main actions, links, brand colour |
| secondary | `#3054FF` | Highlights, charts, second accent |
| border | `#242424` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#3054FF` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 21.00:1 | pass | pass |
| Muted text on background | 8.63:1 | pass | pass |
| Primary on background | 11.92:1 | pass | pass |
| Text on primary | 11.15:1 | pass | pass |
| Text on surface | 1.00:1 | fail | fail |

**Colours seen on the page** (share of use): `#000000` 98.0%, `#FFFFFF` 1.5%, `#B4C0FF` 0.4%, `#3054FF` 0.0%, `#A6A6A6` 0.0%, `#242424` 0.0%

## Typography

- Headings: **Instrument Sans** (weight 600)
- Body: **Instrument Sans**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600;700&family=Instrument+Serif:ital@0;1&family=DM+Sans:wght@400;500;600;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Instrument Sans | 136 px | 600 | 122.4px | -6.8px |
| Body | Instrument Sans | 20 px | 400 | 33px | normal |
| Button | Instrument Sans | 14 px | 500 | normal | normal |
| Navigation | Instrument Sans | 16 px | 400 | normal | normal |

## Shape, space and motion

- Radius: sm 8 px, md 50 px, lg 50 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 4 px, 6 px, 8 px, 10 px, 16 px, 20 px, 24 px, 32 px, 48 px
- Layout: container 1024 px; breakpoints 380 px, 640 px, 768 px, 1024 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** fast, sleek, assured.

Sounds like a product demo at speed: short, clipped and confident, in the register of a dark-mode launch page. It talks about building rather than tooling.

**Do**

- Lead with the speed claim
- Use short verbs like design, build and ship
- Keep headlines to two or three words

**Do not**

- No jargon like leverage or empower
- Avoid vague AI hype
- Never promise instant perfection

## Taglines

1. Build faster
2. Design at the speed of thought
3. From prompt to published site
4. Sites that build themselves
5. Your next site, drafted in seconds

**Boilerplate:** Digitwist is an AI website builder that turns a short description into a designed, published site, for teams that want to move from idea to launch fast.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Products |
| secondaryCta | See customer stories |
| success | Site published. |
| error | We couldn't build that site. Try rephrasing your prompt. |
| empty | No sites yet. Describe one to begin. |

---
Source listing key `m:digitwist-ai-builder`. Rebuild with `python3 scripts/brand-kit/build.py m:digitwist-ai-builder`.
