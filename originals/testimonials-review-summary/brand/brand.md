# Ridgeline Trail Boots — brand kit

*Hiking boots with honest customer reviews.* Generated from the SiteShelf listing **Review Summary with Filters** (Testimonials); every value below is read from that page, not invented.

> **Boots reviewed by the people wearing them**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter Bold (stand-in for Public Sans) |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **peak** glyph on a squircle tile. A ridge line is the logo of a trail brand. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#FFFFFF` | Page background |
| surface | `#DDE1EE` | Cards, panels, raised areas |
| text | `#334155` | Body and heading text |
| textMuted | `#0F172A` | Secondary text, captions |
| primary | `#2563EB` | Main actions, links, brand colour |
| secondary | `#F5A524` | Highlights, charts, second accent |
| border | `#DDE1EE` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#F5A524` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 10.35:1 | pass | pass |
| Muted text on background | 17.85:1 | pass | pass |
| Primary on background | 5.17:1 | pass | pass |
| Text on primary | 5.17:1 | pass | pass |
| Text on surface | 7.93:1 | pass | pass |

**Colours seen on the page** (share of use): `#FFFFFF` 99.0%, `#334155` 0.4%, `#0F172A` 0.2%, `#DDE1EE` 0.1%, `#6B7488` 0.1%, `#000000` 0.0%, `#2563EB` 0.0%, `#059669` 0.0%, `#C026D3` 0.0%, `#EA580C` 0.0%

## Typography

- Headings: **Public Sans** (weight 700)
- Body: **Public Sans**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;600;800&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Public Sans | 28 px | 700 | 44.8px | normal |
| Subheading / H3 | Public Sans | 16 px | 700 | 25.6px | normal |
| Body | Public Sans | 15 px | 400 | 24px | normal |
| Button | Public Sans | 13 px | 400 | 20.8px | normal |
| Caption / eyebrow | Public Sans | 12.5 px | 400 | 20px | normal |

## Shape, space and motion

- Radius: sm 8 px, md 18 px, lg 18 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 4 px, 5 px, 6 px, 8 px, 10 px, 12 px, 13 px, 14 px, 20 px
- Layout: container 960 px; breakpoints 800 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** straight-talking, outdoorsy, fair.

Sounds like a trail shop owner reading real reviews aloud: even-handed, specific about fit and grip. Praise and complaints get the same weight.

**Do**

- Quote reviewers on fit, grip and comfort
- Show the full rating spread
- Respond to criticism with a fix

**Do not**

- No hiding low ratings
- No inventing reviewer details
- No gear jargon for its own sake

## Taglines

1. Boots reviewed by the people wearing them
2. Twelve reviews, no filter
3. Tested on real trails
4. What walkers actually say
5. Honest feedback, mile by mile

**Boilerplate:** Ridgeline Trail Boots makes hard-wearing hiking boots and publishes every customer review, including the critical ones, with ratings you can filter by keyword.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Write a review |
| secondaryCta | Sort reviews |
| success | Thanks for your review |
| error | Could not submit your review, try again |
| empty | No reviews match that filter |

---
Source listing key `o:testimonials-review-summary`. Rebuild with `python3 scripts/brand-kit/build.py o:testimonials-review-summary`.
