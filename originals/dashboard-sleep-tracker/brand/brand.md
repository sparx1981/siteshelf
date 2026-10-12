# dozeful — brand kit

*Sleep insights app for night owls and early birds.* Generated from the SiteShelf listing **Sleep Insights Dashboard** (Dashboard); every value below is read from that page, not invented.

> **Sleep, understood gently**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Outfit |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **cloud** glyph on a squircle tile. A soft cloud suits a brand about rest and keeps the lowercase wordmark gentle. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#0F0B24` | Page background |
| surface | `#181238` | Cards, panels, raised areas |
| text | `#EFEAFF` | Body and heading text |
| textMuted | `#A99FD6` | Secondary text, captions |
| primary | `#A78BFA` | Main actions, links, brand colour |
| secondary | `#FF8FA3` | Highlights, charts, second accent |
| border | `#2D2466` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#4D4172` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 16.35:1 | pass | pass |
| Muted text on background | 7.88:1 | pass | pass |
| Primary on background | 7.06:1 | pass | pass |
| Text on primary | 7.22:1 | pass | pass |
| Text on surface | 15.12:1 | pass | pass |

**Colours seen on the page** (share of use): `#0F0B24` 60.6%, `#181238` 38.1%, `#A78BFA` 0.3%, `#EFEAFF` 0.2%, `#FFE08A` 0.2%, `#A99FD6` 0.2%, `#7A6FD0` 0.1%, `#4338CA` 0.1%, `#FF8FA3` 0.1%, `#7DD3FC` 0.1%

## Typography

- Headings: **Outfit** (weight 700)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Outfit:wght@500;600;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Outfit | 36 px | 700 | 39.6px | normal |
| Heading / H2 | Outfit | 16 px | 600 | normal | normal |
| Subheading / H3 | Outfit | 22 px | 600 | normal | normal |
| Body | Inter | 14 px | 400 | 21px | normal |
| Button | Inter | 14 px | 400 | 21px | normal |
| Caption / eyebrow | Inter | 12 px | 400 | 18px | normal |

## Shape, space and motion

- Radius: sm 3 px, md 16 px, lg 20 px, pill (fully rounded)
- Shadows: sm: `rgb(255, 224, 138) -6px -2px 0px 0px inset` · md: `rgb(255, 224, 138) -6px -2px 0px 0px inset` · lg: `rgb(255, 224, 138) -6px -2px 0px 0px inset`
- Spacing: base unit 4 px; common steps 2 px, 4 px, 5 px, 6 px, 8 px, 10 px, 12 px, 14 px, 20 px
- Layout: container 1200 px; breakpoints 900 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** gentle, reassuring, quiet.

Sounds like a soft lamp: low voice, no scolding, plain-language insights. Numbers are shown, then explained in a single kind sentence.

**Do**

- Explain every score in one gentle sentence
- Use sleep stage names consistently
- Lowercase the brand and keep it quiet

**Do not**

- No shaming for a bad night
- No medical claims or diagnoses
- No loud celebration of a high score

## Taglines

1. Sleep, understood gently
2. Last night, in plain words
3. Rest is a rhythm
4. Learn your nights, kindly
5. Every night tells you something

**Boilerplate:** dozeful is a sleep tracking app that turns each night into a stage chart, a score and a few plain-language insights, with no shaming and no jargon.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | See last night |
| secondaryCta | Compare nights |
| success | Night saved |
| error | We could not read last night's data, try syncing again |
| empty | No sleep data for this night yet |

---
Source listing key `o:dashboard-sleep-tracker`. Rebuild with `python3 scripts/brand-kit/build.py o:dashboard-sleep-tracker`.
