# Sonar — brand kit

*Endpoint and cloud threat detection.* Generated from the SiteShelf listing **Sonar Security Radar Hero** (Hero Section); every value below is read from that page, not invented.

> **See the attack before it lands**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter Bold (stand-in for Schibsted Grotesk) |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **shield** glyph on a circle tile. A shield is the clearest sign of protection for a security product. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#040806` | Page background |
| surface | `#4DFF9A` | Cards, panels, raised areas |
| text | `#C9F7DC` | Body and heading text |
| textMuted | `#6F9A83` | Secondary text, captions |
| primary | `#4DFF9A` | Main actions, links, brand colour |
| secondary | `#2A8C55` | Highlights, charts, second accent |
| border | `#4DFF9A` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#2A8C55` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 17.09:1 | pass | pass |
| Muted text on background | 6.36:1 | pass | pass |
| Primary on background | 15.43:1 | pass | pass |
| Text on primary | 15.05:1 | pass | pass |
| Text on surface | 1.11:1 | fail | fail |

**Colours seen on the page** (share of use): `#040806` 95.2%, `#4DFF9A` 4.6%, `#C9F7DC` 0.1%, `#6F9A83` 0.1%, `#2A8C55` 0.0%

## Typography

- Headings: **Schibsted Grotesk** (weight 700)
- Body: **Schibsted Grotesk**
- Mono: **JetBrains Mono**
- Google Fonts: `https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&family=Schibsted+Grotesk:wght@500;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Schibsted Grotesk | 72 px | 700 | 73.44px | -1.8px |
| Body | Schibsted Grotesk | 18 px | 400 | 27px | normal |
| Button | Schibsted Grotesk | 16 px | 700 | 24px | normal |
| Navigation | Schibsted Grotesk | 14 px | 400 | 21px | normal |
| Mono | JetBrains Mono | 12 px | 500 | normal | 1.2px |

## Shape, space and motion

- Radius: sm 50 px, md 50 px, lg 50 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 2 px; common steps 9 px, 10 px, 14 px, 18 px, 20 px, 26 px, 28 px, 30 px, 36 px
- Layout: container 1200 px; breakpoints 960 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** vigilant, terse, confident.

Speaks like a security operations room at 3am: short, factual, no drama. Times are in milliseconds and every threat is named.

**Do**

- State the time to detect or isolate
- Name the threat type and severity
- Use present tense and imperative verbs

**Do not**

- No fear marketing
- No vague claims of total security
- No jargon dumps without a definition

## Taglines

1. See the attack before it lands
2. Every endpoint, always watched
3. Breach contained in under a second
4. Quiet until it matters
5. Threats found, threats stopped

**Boilerplate:** Sonar monitors every endpoint and cloud account, detects threats in real time and isolates a breach in under a second.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Start free trial |
| secondaryCta | Watch the demo |
| success | Threat isolated in 0.8 seconds |
| error | Sensor offline, check the agent |
| empty | No threats detected |

---
Source listing key `o:sonar-security`. Rebuild with `python3 scripts/brand-kit/build.py o:sonar-security`.
