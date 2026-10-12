# Harrow Observatory — brand kit

*Public observatory with sixty years of history.* Generated from the SiteShelf listing **Scroll-Linked History Timeline** (Timeline); every value below is read from that page, not invented.

> **Sixty years under one dome**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Space Grotesk |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **aperture** glyph on a squircle tile. A telescope aperture is the observatory's eye on the sky. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#0B1220` | Page background |
| surface | `#111B33` | Cards, panels, raised areas |
| text | `#93A0C0` | Body and heading text |
| textMuted | `#E9EEFC` | Secondary text, captions |
| primary | `#FBBF24` | Main actions, links, brand colour |
| secondary | `#818CF8` | Highlights, charts, second accent |
| border | `#FBBF24` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#705718` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 7.16:1 | pass | pass |
| Muted text on background | 16.14:1 | pass | pass |
| Primary on background | 11.22:1 | pass | pass |
| Text on primary | 11.77:1 | pass | pass |
| Text on surface | 6.54:1 | pass | pass |

**Colours seen on the page** (share of use): `#0B1220` 99.2%, `#93A0C0` 0.4%, `#1D2A45` 0.2%, `#E9EEFC` 0.1%, `#FBBF24` 0.1%, `#5EEAD4` 0.0%, `#818CF8` 0.0%, `#16100A` 0.0%, `#705718` 0.0%

## Typography

- Headings: **Space Grotesk** (weight 700)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&family=Inter:wght@400;500&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Space Grotesk | 60 px | 700 | 63px | -1.2px |
| Heading / H2 | Space Grotesk | 20 px | 700 | 25px | normal |
| Body | Inter | 15 px | 400 | 24px | normal |
| Button | Space Grotesk | 13 px | 600 | normal | normal |

## Shape, space and motion

- Radius: sm 4 px, md 10 px, lg 16 px, pill (fully rounded)
- Shadows: sm: `rgb(251, 191, 36) 0px 0px 18px 0px` · md: `rgb(251, 191, 36) 0px 0px 18px 0px` · lg: `rgb(251, 191, 36) 0px 0px 18px 0px`
- Spacing: base unit 4 px; common steps 6 px, 8 px, 10 px, 16 px, 20 px, 44 px, 56 px, 64 px
- Layout: container 980 px; breakpoints 760 px
- Motion: 600 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** curious, grateful, grounded.

Harrow Observatory writes like an amateur astronomer sharing a hard-won story over tea. It is warm, factual about dates and instruments, and quietly awed rather than grand.

**Do**

- Give the year and the instrument for each event
- Use plain observing language: night, dome, plate
- Credit the volunteers by name

**Do not**

- Do not exaggerate discoveries
- Do not use space-opera adjectives
- Do not skip the people behind the telescope

## Taglines

1. Sixty years under one dome
2. From a borrowed refractor to a survey
3. Looking up since 1962
4. A small dome with long memory
5. Every clear night, a little more

**Boilerplate:** Harrow Observatory is a volunteer-run public observatory that has welcomed stargazers for sixty years, growing from a borrowed refractor to a robotic survey telescope.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Book a viewing night |
| secondaryCta | Read the story |
| success | Booked. Wrap up warm and bring a torch. |
| error | Cloud has cancelled tonight's viewing. Choose another date. |
| empty | No events in this decade yet. |

---
Source listing key `o:timeline-scroll-history`. Rebuild with `python3 scripts/brand-kit/build.py o:timeline-scroll-history`.
