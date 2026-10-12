# Vesper — brand kit

*Quarterly on the northern lights.* Generated from the SiteShelf listing **Aurora Ribbon Hero** (Hero Section); every value below is read from that page, not invented.

> **A quarterly for the northern lights**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Instrument Serif |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **wave** glyph on a circle tile. A drifting wave line draws one ribbon of aurora with almost no ink. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#05070D` | Page background |
| surface | `#EEF1FF` | Cards, panels, raised areas |
| text | `#EEF1FF` | Body and heading text |
| textMuted | `#A9B0D0` | Secondary text, captions |
| primary | `#C9BDFF` | Main actions, links, brand colour |
| secondary | `#2EE6C5` | Highlights, charts, second accent |
| border | `#EEF1FF` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#5B5674` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 17.90:1 | pass | pass |
| Muted text on background | 9.41:1 | pass | pass |
| Primary on background | 11.71:1 | pass | pass |
| Text on primary | 11.42:1 | pass | pass |
| Text on surface | 1.00:1 | fail | fail |

**Colours seen on the page** (share of use): `#05070D` 98.5%, `#EEF1FF` 1.1%, `#A9B0D0` 0.2%, `#C9BDFF` 0.1%, `#2EE6C5` 0.0%, `#5B5674` 0.0%

## Typography

- Headings: **Instrument Serif** (weight 400)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Instrument+Serif:ital@0;1&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Instrument Serif | 129.6 px | 400 | 124.416px | -2.592px |
| Body | Inter | 17 px | 400 | 27.2px | normal |
| Button | Inter | 14 px | 500 | normal | normal |
| Navigation | Inter | 15 px | 500 | 24px | normal |

## Shape, space and motion

- Radius: sm 0 px, md 0 px, lg 0 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 8 px, 14 px, 15 px, 16 px, 20 px, 24 px, 26 px, 28 px, 30 px
- Layout: container 1240 px; breakpoints 700 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** literary, hushed, awestruck.

Vesper writes like a field journal read by torchlight: precise about weather and sky, restrained in feeling and wide-eyed at the right moment. Sentences are long enough to breathe.

**Do**

- Anchor sentences in a place, a season or a light condition
- Use understated verbs of watching and waiting
- Prefer one precise image to three adjectives

**Do not**

- Use travel-brochure superlatives
- Use exclamation marks
- Explain the wonder

## Taglines

1. A quarterly for the northern lights
2. Four issues, printed under the sky
3. Essays from people who chase light
4. Field notes from the dark
5. Read by the window, wait for green

**Boilerplate:** Vesper is a quarterly journal of essays, photography and field notes from people who chase the northern lights, printed four times a year on recycled paper.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Subscribe, £28 a year |
| secondaryCta | Read a sample |
| success | Subscribed. Your first issue is on its way. |
| error | Your payment did not go through. Please check the details. |
| empty | No issues in your library yet. |

---
Source listing key `o:hero-aurora-ribbons`. Rebuild with `python3 scripts/brand-kit/build.py o:hero-aurora-ribbons`.
