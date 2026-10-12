# Orbit Notes — brand kit

*Note-taking app letting its users choose what ships first.* Generated from the SiteShelf listing **Feature Vote Coming Soon** (Coming Soon); every value below is read from that page, not invented.

> **Help us choose what ships first**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Space Grotesk |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **orbit** glyph on a squircle tile. An orbit loop hints at ideas circling a central note, matching the product name. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#0C0F14` | Page background |
| surface | `#151A22` | Cards, panels, raised areas |
| text | `#8B97AA` | Body and heading text |
| textMuted | `#F2F5FA` | Secondary text, captions |
| primary | `#3B82F6` | Main actions, links, brand colour |
| secondary | `#1A2130` | Highlights, charts, second accent |
| border | `#232B38` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#1A2130` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 6.49:1 | pass | pass |
| Muted text on background | 17.56:1 | pass | pass |
| Primary on background | 5.22:1 | pass | pass |
| Text on primary | 5.34:1 | pass | pass |
| Text on surface | 5.91:1 | pass | pass |

**Colours seen on the page** (share of use): `#0C0F14` 79.4%, `#1A2130` 19.9%, `#3B82F6` 0.3%, `#8B97AA` 0.2%, `#F2F5FA` 0.2%, `#A3E635` 0.0%

## Typography

- Headings: **Space Grotesk** (weight 700)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=Inter:wght@400;500;600&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Space Grotesk | 48 px | 700 | 50.4px | -0.96px |
| Heading / H2 | Space Grotesk | 14 px | 700 | normal | 1.4px |
| Body | Inter | 15 px | 400 | 22.5px | normal |
| Button | Inter | 15 px | 400 | 22.5px | normal |
| Caption / eyebrow | Inter | 12.5 px | 400 | 18.75px | normal |

## Shape, space and motion

- Radius: sm 12 px, md 14 px, lg 20 px, pill (fully rounded)
- Shadows: sm: `rgb(59, 130, 246) 0px 0px 14px 0px` · md: `rgb(59, 130, 246) 0px 0px 14px 0px` · lg: `rgb(59, 130, 246) 0px 0px 14px 0px`
- Spacing: base unit 4 px; common steps 2 px, 8 px, 10 px, 12 px, 14 px, 16 px, 20 px, 48 px
- Layout: container 1200 px; breakpoints single fluid layout
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** open, dev-friendly, upbeat.

Talks like a small product team building in public: transparent, a little geeky and grateful. Every line makes the visitor feel like a co-author, not a lead.

**Do**

- Be specific about the vote: counts, days left, one vote each
- Thank people in plain words
- Use product-team language such as ships and roadmap

**Do not**

- Hype about revolutionary features
- Hiding how votes are counted
- Pressure tactics around the countdown

## Taglines

1. Help us choose what ships first
2. Your vote shapes the roadmap
3. Build it with the people who use it
4. One vote, real consequences
5. Notes, ordered by you

**Boilerplate:** Orbit Notes is an upcoming note-taking app that lets its first visitors vote on which feature ships first, with one vote each and a launch date in sight.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Cast my vote |
| secondaryCta | Suggest a feature |
| success | Vote counted. Thanks for steering |
| error | That did not register. Try again in a moment |
| empty | No suggestions yet. Be the first |

---
Source listing key `o:coming-soon-feature-vote`. Rebuild with `python3 scripts/brand-kit/build.py o:coming-soon-feature-vote`.
