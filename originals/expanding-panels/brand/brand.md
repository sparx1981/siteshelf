# The Long Way Round — brand kit

*Trip planner for places worth the detour.* Generated from the SiteShelf listing **Expanding Panels** (Gallery); every value below is read from that page, not invented.

> **Where next?**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Bricolage Grotesque |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **globe** glyph on a squircle tile. A globe is a simple, readable symbol of choosing between faraway places. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#0E1116` | Page background |
| surface | `#1D3B4F` | Cards, panels, raised areas |
| text | `#FFFFFF` | Body and heading text |
| textMuted | `#ABACAD` | Secondary text, captions |
| primary | `#FF9E6D` | Main actions, links, brand colour |
| secondary | `#8ECAE6` | Highlights, charts, second accent |
| border | `#303237` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#714936` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 18.91:1 | pass | pass |
| Muted text on background | 8.32:1 | pass | pass |
| Primary on background | 9.33:1 | pass | pass |
| Text on primary | 9.69:1 | pass | pass |
| Text on surface | 11.73:1 | pass | pass |

**Colours seen on the page** (share of use): `#0E1116` 70.8%, `#FFFFFF` 7.0%, `#1D3B4F` 5.9%, `#8ECAE6` 5.9%, `#000000` 4.4%, `#7B2D12` 1.2%, `#F4A261` 1.2%, `#3B1D2E` 1.2%, `#E76F88` 1.2%, `#14301F` 1.2%

## Typography

- Headings: **Bricolage Grotesque** (weight 800)
- Body: **DM Sans**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@600;800&family=DM+Sans:wght@400;500&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Bricolage Grotesque | 52 px | 800 | 52px | -1.56px |
| Heading / H2 | Bricolage Grotesque | 56 px | 800 | 56px | -1.68px |
| Body | DM Sans | 16 px | 400 | 24px | normal |
| Button | DM Sans | 14 px | 500 | normal | normal |

## Shape, space and motion

- Radius: sm 22 px, md 22 px, lg 22 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 4 px, 6 px, 8 px, 10 px, 12 px, 14 px, 16 px, 20 px, 24 px
- Layout: container 1280 px; breakpoints 760 px
- Motion: 700 ms, `cubic-bezier(0.3`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** wanderlust, vivid, friendly.

A well-travelled friend with a map on the table: enthusiastic, specific and very slightly smug about knowing the back roads. Sentences are short and place names do the heavy lifting.

**Do**

- Lead with the place name and one sensory detail
- Frame every trip as a conversation, such as pick one and we start the plan
- Keep descriptions to a line or two

**Do not**

- Brochure phrases like bucket list
- Exclamation marks after every place
- Generic claims about unforgettable experiences

## Taglines

1. Where next?
2. Five places worth the detour
3. Pick one, we'll plan the rest
4. Take the long way round
5. Slow journeys, sharply planned

**Boilerplate:** The Long Way Round plans small journeys to destinations such as Iceland, Kyoto and Patagonia, starting from one chosen place and building the route around it.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Plan this trip |
| secondaryCta | Pause |
| success | Trip started. We'll draft the route |
| error | Could not start the plan. Try again |
| empty | No trips chosen. Pick a panel |

---
Source listing key `o:expanding-panels`. Rebuild with `python3 scripts/brand-kit/build.py o:expanding-panels`.
