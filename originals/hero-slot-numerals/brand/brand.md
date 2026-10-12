# Tallyho — brand kit

*Analytics for teams that watch numbers.* Generated from the SiteShelf listing **Slot Machine Numerals** (Hero Section); every value below is read from that page, not invented.

> **Numbers that move your team**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Space Grotesk |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **bars** glyph on a squircle tile. Rising bars represent tallies and the rolling digits of the page. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#0F0F0F` | Page background |
| surface | `#1A1A18` | Cards, panels, raised areas |
| text | `#FFE14D` | Body and heading text |
| textMuted | `#F5F5F0` | Secondary text, captions |
| primary | `#FFE14D` | Main actions, links, brand colour |
| secondary | `#8C7C2A` | Highlights, charts, second accent |
| border | `#2E2E2A` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#8C7C2A` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 14.72:1 | pass | pass |
| Muted text on background | 17.53:1 | pass | pass |
| Primary on background | 14.72:1 | pass | pass |
| Text on primary | 15.09:1 | pass | pass |
| Text on surface | 13.39:1 | pass | pass |

**Colours seen on the page** (share of use): `#0F0F0F` 96.1%, `#FFE14D` 3.7%, `#F5F5F0` 0.1%, `#A8A89C` 0.1%, `#8C7C2A` 0.0%, `#2E2E2A` 0.0%

## Typography

- Headings: **Space Grotesk** (weight 700)
- Body: **Space Grotesk**
- Google Fonts: `https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Inter:wght@400;600&family=Space+Grotesk:wght@500;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Space Grotesk | 56 px | 700 | 60.48px | -1.4px |
| Button | DM Mono | 14 px | 500 | normal | normal |
| Navigation | Inter | 15 px | 400 | 24px | normal |

## Shape, space and motion

- Radius: sm 12 px, md 18 px, lg 18 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 2 px; common steps 6 px, 8 px, 10 px, 12 px, 14 px, 15 px, 18 px, 20 px, 26 px
- Layout: container 1180 px; breakpoints 560 px
- Motion: 200 ms, `cubic-bezier(0.2`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** punchy, upbeat, numerate.

Tallyho talks like a sharp sports commentator who adores a good number. It is short, energetic and always gives the figure first, then the reason.

**Do**

- Lead with the figure, then explain
- Use verbs of motion: climb, roll, land
- Keep every line short enough for a headline

**Do not**

- Do not bury the number in a sentence
- Do not use 'insights' as a noun more than once
- Do not exaggerate a change

## Taglines

1. Numbers that move your team
2. Watch the reels land on your figures
3. Your metrics, rolling in
4. Know the score before the meeting
5. Count on it, every day

**Boilerplate:** Tallyho is an analytics tool that turns a team's key metrics into clear, live figures everyone can read at a glance.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Get early access |
| secondaryCta | Spin again |
| success | You are on the list. Check your inbox. |
| error | That email address is not valid. Try again. |
| empty | No numbers yet. Connect a source to begin. |

---
Source listing key `o:hero-slot-numerals`. Rebuild with `python3 scripts/brand-kit/build.py o:hero-slot-numerals`.
