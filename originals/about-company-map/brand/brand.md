# Lattice & Loom — brand kit

*Software for textile makers, worldwide.* Generated from the SiteShelf listing **Company Map About Page** (About Page); every value below is read from that page, not invented.

> **Six cities, one long table**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Epilogue |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **globe** glyph. A globe suits a company that works across six time zones by design. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F7F4EE` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#55504A` | Body and heading text |
| textMuted | `#1C1A17` | Secondary text, captions |
| primary | `#FF5A3C` | Main actions, links, brand colour |
| secondary | `#FFA494` | Highlights, charts, second accent |
| border | `#E0D9CA` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#712C22` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 7.27:1 | pass | pass |
| Muted text on background | 15.82:1 | pass | pass |
| Primary on background | 2.82:1 | fail | fail |
| Text on primary | 6.34:1 | pass | pass |
| Text on surface | 7.98:1 | pass | pass |

**Colours seen on the page** (share of use): `#F7F4EE` 98.6%, `#D9D0BC` 0.6%, `#55504A` 0.4%, `#1C1A17` 0.3%, `#6F6A60` 0.1%, `#FF5A3C` 0.1%, `#FFA494` 0.0%, `#0B0B0F` 0.0%, `#712C22` 0.0%

## Typography

- Headings: **Epilogue** (weight 800)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Epilogue:wght@500;700;800&family=Inter:wght@400;500;600&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Epilogue | 64 px | 800 | 65.28px | -1.92px |
| Heading / H2 | Epilogue | 28 px | 800 | normal | normal |
| Body | Inter | 18 px | 400 | 28.8px | normal |
| Button | Arial | 13.3 px | 400 | normal | normal |
| Caption / eyebrow | Epilogue | 13 px | 700 | normal | 1.82px |

## Shape, space and motion

- Radius: sm 14 px, md 24 px, lg 24 px, pill (fully rounded)
- Shadows: sm: `rgb(255, 255, 255) 0px 0px 0px 3px` · md: `rgb(255, 255, 255) 0px 0px 0px 3px` · lg: `rgb(255, 255, 255) 0px 0px 0px 3px`
- Spacing: base unit 4 px; common steps 6 px, 8 px, 10 px, 12 px, 14 px, 16 px, 18 px, 20 px, 36 px
- Layout: container 1100 px; breakpoints 860 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** unhurried, candid, warm.

Lattice & Loom writes like a thoughtful colleague who has already put everything in the shared document. It is plain, a little wry, and always aware that someone reading it is in a different time zone.

**Do**

- Write so a reader in any time zone can act without asking
- Name the city or the person, not 'the team'
- Say what we write down and why, in one clear sentence

**Do not**

- Do not boast about headcount or growth
- Do not use 'rockstar', 'ninja' or 'family' for a team
- Do not assume the reader shares our working hours

## Taglines

1. Six cities, one long table
2. We write it down so you sleep
3. Software for the people who make cloth
4. Eighty-four people, no single time zone
5. Good thread, made patiently

**Boilerplate:** Lattice & Loom is an 84-person company in six cities that builds software for textile makers, working across time zones and documenting everything it does.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Meet the team |
| secondaryCta | Read how we work |
| success | Thanks, we will reply within one working day. |
| error | That did not send. Check your connection and try again. |
| empty | No one is at this desk right now. |

---
Source listing key `o:about-company-map`. Rebuild with `python3 scripts/brand-kit/build.py o:about-company-map`.
