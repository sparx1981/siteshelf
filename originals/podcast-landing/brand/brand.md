# Static & Stories — brand kit

*Weekly podcast about the strange corners of the internet.* Generated from the SiteShelf listing **Podcast Landing Page** (Landing Page); every value below is read from that page, not invented.

> **Forty minutes with the internet's tinkerers**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Syne |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **chat** glyph. A speech bubble stands for conversation, the heart of the show. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#14091F` | Page background |
| surface | `#1E1230` | Cards, panels, raised areas |
| text | `#B3A4CC` | Body and heading text |
| textMuted | `#F5F0FF` | Secondary text, captions |
| primary | `#FF7A59` | Main actions, links, brand colour |
| secondary | `#A78BFA` | Highlights, charts, second accent |
| border | `#35244D` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#713A2E` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 8.36:1 | pass | pass |
| Muted text on background | 17.26:1 | pass | pass |
| Primary on background | 7.51:1 | pass | pass |
| Text on primary | 7.65:1 | pass | pass |
| Text on surface | 7.68:1 | pass | pass |

**Colours seen on the page** (share of use): `#14091F` 92.3%, `#7C3AED` 5.9%, `#FF7A59` 0.9%, `#B3A4CC` 0.5%, `#FFFFFF` 0.3%, `#A78BFA` 0.1%, `#35244D` 0.0%, `#713A2E` 0.0%

## Typography

- Headings: **Syne** (weight 800)
- Body: **Figtree**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600&family=Syne:wght@700;800&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Syne | 112 px | 800 | 106.4px | -3.36px |
| Heading / H2 | Syne | 34 px | 800 | 37.4px | -0.68px |
| Subheading / H3 | Syne | 21 px | 700 | 26.25px | normal |
| Body | Figtree | 19 px | 400 | 29.45px | normal |
| Button | Figtree | 15 px | 600 | normal | normal |
| Caption / eyebrow | Figtree | 13 px | 600 | 20.15px | 1.82px |

## Shape, space and motion

- Radius: sm 16 px, md 16 px, lg 16 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 4 px, 6 px, 8 px, 10 px, 11 px, 12 px, 14 px, 16 px, 18 px
- Layout: container 1080 px; breakpoints 700 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** curious, warm, slightly offbeat.

A friendly host with a nerd's enthusiasm: conversational, quick and delighted by small odd things. Titles carry the joke and the descriptions carry the substance.

**Do**

- Open with who the guest is and what they built
- Keep show notes conversational
- Give times and lengths in minutes

**Do not**

- Industry buzzwords
- Clickbait episode titles
- Overpromising about life-changing conversations

## Taglines

1. Forty minutes with the internet's tinkerers
2. Stories from the small, strange web
3. Press play on something odd
4. Weekly signal, minimal noise
5. Builders, makers and their weirdest ideas

**Boilerplate:** Static & Stories is a weekly podcast with forty-minute conversations with the people who build the strange, small corners of the internet.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Listen on Apple |
| secondaryCta | Read the transcript |
| success | Subscribed. New episode every week |
| error | The audio didn't load. Try again |
| empty | No episodes match your search |

---
Source listing key `o:podcast-landing`. Rebuild with `python3 scripts/brand-kit/build.py o:podcast-landing`.
