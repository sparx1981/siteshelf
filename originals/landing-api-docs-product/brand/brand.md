# Relay — brand kit

*Message delivery API for email, SMS and webhooks.* Generated from the SiteShelf listing **Relay API Platform** (Landing Page); every value below is read from that page, not invented.

> **Ship messages, not infrastructure**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **chevrons** glyph on a circle tile. A forward arrow-like chevron matches the arrow in the page's own wordmark and the idea of passing messages along. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#0A0E17` | Page background |
| surface | `#101726` | Cards, panels, raised areas |
| text | `#95A1C4` | Body and heading text |
| textMuted | `#E6EBFA` | Secondary text, captions |
| primary | `#7C83FF` | Main actions, links, brand colour |
| secondary | `#3DDC97` | Highlights, charts, second accent |
| border | `#243050` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#3A3D74` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 7.51:1 | pass | pass |
| Muted text on background | 16.20:1 | pass | pass |
| Primary on background | 6.02:1 | pass | pass |
| Text on primary | 6.12:1 | pass | pass |
| Text on surface | 6.97:1 | pass | pass |

**Colours seen on the page** (share of use): `#0A0E17` 96.6%, `#141B33` 2.1%, `#7C83FF` 0.4%, `#95A1C4` 0.3%, `#E6EBFA` 0.3%, `#3DDC97` 0.2%, `#7A88B3` 0.1%, `#9BE3B0` 0.0%, `#CFD7F3` 0.0%, `#FFFFFF` 0.0%

## Typography

- Headings: **Inter** (weight 700)
- Body: **Inter**
- Mono: **JetBrains Mono**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Inter | 76 px | 700 | 79.8px | -2.28px |
| Heading / H2 | Inter | 11 px | 600 | normal | 1.54px |
| Subheading / H3 | Inter | 38 px | 700 | 41.8px | -0.76px |
| Body | Inter | 18 px | 400 | 28.8px | normal |
| Button | Inter | 14 px | 600 | normal | normal |
| Navigation | Inter | 15 px | 500 | 24px | normal |
| Mono | JetBrains Mono | 14 px | 400 | 23.8px | normal |

## Shape, space and motion

- Radius: sm 8 px, md 12 px, lg 16 px, pill (fully rounded)
- Shadows: sm: `rgba(98, 92, 255, 0.6) 0px 40px 90px -40px` · md: `rgba(98, 92, 255, 0.6) 0px 40px 90px -40px` · lg: `rgba(98, 92, 255, 0.6) 0px 40px 90px -40px`
- Spacing: base unit 4 px; common steps 6 px, 8 px, 10 px, 12 px, 14 px, 16 px, 18 px, 22 px, 24 px
- Layout: container 1040 px; breakpoints 820 px
- Motion: 250 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** technical, direct, dry.

Relay writes like good API documentation with a sense of humour: exact about behaviour, brief about everything else and happy to show a request rather than describe one. Marketing lines stay short and concrete.

**Do**

- Show real endpoints, status codes and latencies
- Prefer code and numbers to adjectives
- Keep headlines to one blunt idea

**Do not**

- Use 'revolutionary' or 'game-changing'
- Describe an API without showing a request
- Hide pricing behind a form

## Taglines

1. Ship messages, not infrastructure
2. Send it. Trace it. Forget it
3. One API for every message
4. Retries and logs, built in
5. Delivery you can actually debug

**Boilerplate:** Relay is a developer API for sending email, SMS and webhooks through one interface, with automatic retries, tracing and per-message logs included in every plan.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Get API key |
| secondaryCta | Read the docs |
| success | Sent in 84 ms. Response 202. |
| error | Request failed with 401. Check your API key. |
| empty | No messages yet. Send your first request. |

---
Source listing key `o:landing-api-docs-product`. Rebuild with `python3 scripts/brand-kit/build.py o:landing-api-docs-product`.
