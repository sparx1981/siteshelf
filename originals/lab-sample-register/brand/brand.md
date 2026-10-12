# Tern Laboratory — brand kit

*Chain-of-custody register for lab samples.* Generated from the SiteShelf listing **Lab Sample Register** (App UI); every value below is read from that page, not invented.

> **Chain of custody. Clear at every step.**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from DM Sans |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **drop** glyph. A single drop represents a liquid sample, the unit this register protects. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F7FAFB` | Page background |
| surface | `#FFF1DB` | Cards, panels, raised areas |
| text | `#527080` | Body and heading text |
| textMuted | `#163342` | Secondary text, captions |
| primary | `#163342` | Main actions, links, brand colour |
| secondary | `#795020` | Highlights, charts, second accent |
| border | `#D4E0E5` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#9DA9B0` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 5.02:1 | pass | pass |
| Muted text on background | 12.62:1 | pass | pass |
| Primary on background | 12.62:1 | pass | pass |
| Text on primary | 13.24:1 | pass | pass |
| Text on surface | 4.73:1 | pass | pass |

**Colours seen on the page** (share of use): `#F7FAFB` 90.8%, `#FFF1DB` 3.6%, `#E2EEF3` 3.1%, `#075A75` 1.3%, `#163342` 0.8%, `#527080` 0.3%, `#795020` 0.1%, `#D4E0E5` 0.0%, `#9DA9B0` 0.0%

## Typography

- Headings: **DM Sans** (weight 600)
- Body: **DM Sans**
- Google Fonts: `https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | DM Sans | 36 px | 600 | 55.8px | -1.08px |
| Heading / H2 | IBM Plex Mono | 24 px | 400 | normal | normal |
| Subheading / H3 | DM Sans | 16 px | 600 | 24.8px | normal |
| Body | DM Sans | 14 px | 400 | 21.7px | normal |
| Button | DM Sans | 14 px | 400 | 21.7px | normal |
| Caption / eyebrow | DM Sans | 12 px | 400 | 18.6px | normal |

## Shape, space and motion

- Radius: sm 4 px, md 6 px, lg 10 px
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 4 px, 6 px, 8 px, 10 px, 12 px, 14 px, 16 px, 19 px, 20 px
- Layout: container 1260 px; breakpoints 560 px, 760 px, 900 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** exact, calm, accountable.

Sounds like a careful lab manager: clear about who held what and when, without drama. Every instruction is a single plain step, and alerts name the sample, the temperature and the person to tell.

**Do**

- Cite sample ID, location and time in every record
- Use one verb per instruction, such as record or transfer
- State temperatures with units

**Do not**

- Do not use casual language for alerts
- Do not omit who handled a sample
- Do not use emoji or exclamation marks

## Taglines

1. Chain of custody. Clear at every step.
2. Every sample has a story
3. Know who held it, and when
4. Handovers recorded, nothing assumed
5. Care you can trace

**Boilerplate:** Tern Laboratory provides a synthetic sample desk that tracks specimens through intake, cold storage and analysis, with a searchable custody register and temperature alerts for exceptions.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Record transfer |
| secondaryCta | Needs attention |
| success | Transfer recorded for SL-402. |
| error | Transfer blocked. Fill in the receiving location. |
| empty | No samples match this filter. |

---
Source listing key `o:lab-sample-register`. Rebuild with `python3 scripts/brand-kit/build.py o:lab-sample-register`.
