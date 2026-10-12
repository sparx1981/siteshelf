# Brandly — brand kit

*Brand design agency launching memorable identities.* Generated from the SiteShelf listing **xPortfolio Hero** (Hero Section); every value below is read from that page, not invented.

> **Building brands that resonate**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter Bold (stand-in for Anton) |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **spark** glyph on a squircle tile. A single spark expresses an agency's creative ignition and a brand being born. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F5F3EE` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#080808` | Body and heading text |
| textMuted | `#5B5A58` | Secondary text, captions |
| primary | `#F2A900` | Main actions, links, brand colour |
| secondary | `#E8453C` | Highlights, charts, second accent |
| border | `#000000` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#6C4D09` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 18.06:1 | pass | pass |
| Muted text on background | 6.21:1 | pass | pass |
| Primary on background | 1.81:1 | fail | fail |
| Text on primary | 9.78:1 | pass | pass |
| Text on surface | 20.03:1 | pass | pass |

**Colours seen on the page** (share of use): `#F5F3EE` 92.4%, `#FFFFFF` 6.3%, `#000000` 1.2%, `#111111` 0.1%, `#E8453C` 0.0%, `#F2A900` 0.0%, `#1A8F6A` 0.0%, `#6D5DFC` 0.0%, `#FFB74D` 0.0%, `#2F80ED` 0.0%

## Typography

- Headings: **Anton** (weight 700)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Anton&family=Oswald:wght@500;600;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Anton | 72 px | 700 | 60.48px | -0.72px |
| Heading / H2 | Anton | 52 px | 700 | 49.4px | -0.52px |
| Body | Inter | 20 px | 400 | 29px | normal |
| Navigation | Inter | 30 px | 700 | normal | -0.3px |

## Shape, space and motion

- Radius: sm 4 px, md 8 px, lg 8 px, pill (fully rounded)
- Shadows: sm: `rgba(0, 0, 0, 0.04) 0px 1px 0px 0px` · md: `rgba(0, 0, 0, 0.04) 0px 1px 0px 0px` · lg: `rgba(0, 0, 0, 0.04) 0px 1px 0px 0px`
- Spacing: base unit 4 px; common steps 2 px, 6 px, 8 px, 10 px, 12 px, 16 px, 20 px, 24 px, 32 px
- Layout: container 1200 px; breakpoints 480 px, 640 px, 768 px, 1024 px, 1280 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** bold, energetic, confident.

A punchy creative director: loud on headline, precise on detail. Big short words, uppercase energy and a clear track record.

**Do**

- Use big, short verbs such as build, launch and resonate
- Back claims with a number, such as 50+ brands
- Keep body copy to a single line

**Do not**

- Vague creative mush
- Long case-study paragraphs
- Buzzwords such as holistic

## Taglines

1. Building brands that resonate
2. Thoughtful design with lasting impact
3. Fifty brands launched, and counting
4. Bold identities, built to last
5. Brands people remember

**Boilerplate:** Brandly is a brand design agency with more than five years of experience and over 50 launched brands, creating thoughtful identities that captivate and empower.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Start a project |
| secondaryCta | See our work |
| success | Message sent. We'll be in touch |
| error | The form didn't send. Retry |
| empty | No brands to show yet |

---
Source listing key `m:xportfolio-hero`. Rebuild with `python3 scripts/brand-kit/build.py m:xportfolio-hero`.
