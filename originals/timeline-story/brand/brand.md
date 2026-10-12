# Weekhouse — brand kit

*Weekly planning software, twelve years in.* Generated from the SiteShelf listing **Scrollytelling Timeline** (Timeline); every value below is read from that page, not invented.

> **Twelve years, one idea, still going**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Fraunces |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **stack** glyph. Stacked layers suggest years building on years. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#0E1116` | Page background |
| surface | `#151922` | Cards, panels, raised areas |
| text | `#B6BDCC` | Body and heading text |
| textMuted | `#EEF1F6` | Secondary text, captions |
| primary | `#FFB454` | Main actions, links, brand colour |
| secondary | `#8C632E` | Highlights, charts, second accent |
| border | `#EEF1F6` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#8C632E` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 10.03:1 | pass | pass |
| Muted text on background | 16.70:1 | pass | pass |
| Primary on background | 10.72:1 | pass | pass |
| Text on primary | 11.14:1 | pass | pass |
| Text on surface | 9.33:1 | pass | pass |

**Colours seen on the page** (share of use): `#0E1116` 99.5%, `#B6BDCC` 0.3%, `#EEF1F6` 0.2%, `#FFB454` 0.1%, `#8B94A7` 0.0%, `#8C632E` 0.0%

## Typography

- Headings: **Fraunces** (weight 400)
- Body: **Instrument Sans**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;1,9..144,400&family=Instrument+Sans:wght@400;500;600&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Fraunces | 100.8 px | 400 | 100.8px | -2.016px |
| Heading / H2 | Fraunces | 24 px | 600 | 28.8px | normal |
| Body | Instrument Sans | 16 px | 400 | 24.8px | normal |
| Caption / eyebrow | Instrument Sans | 13 px | 600 | normal | 2.08px |

## Shape, space and motion

- Radius: sm 18 px, md 18 px, lg 18 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 3 px, 8 px, 10 px, 12 px, 14 px, 18 px, 24 px, 32 px, 56 px
- Layout: container 1100 px; breakpoints 800 px
- Motion: 300 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** reflective, candid, proud.

Sounds like a founder telling the story at a long dinner: honest about the spare room, the borrowed monitor and the stubborn idea. Years anchor each paragraph.

**Do**

- Anchor each story in a year
- Name the people and objects
- Keep humour self-deprecating

**Do not**

- No growth-hacking language
- Avoid vague claims about changing the world
- Never skip the hard years

## Taglines

1. Twelve years, one idea, still going
2. Planning a week shouldn't be a job
3. Started in a spare room
4. A stubborn idea that stuck
5. Built slowly, planned well

**Boilerplate:** Weekhouse is a weekly planning tool founded in a spare room twelve years ago on the idea that planning a week should not feel like a second job.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Read our story |
| secondaryCta | Join the team |
| success | Subscribed. We'll write rarely and well. |
| error | Couldn't subscribe. Please try again. |
| empty | No milestones to show yet. |

---
Source listing key `o:timeline-story`. Rebuild with `python3 scripts/brand-kit/build.py o:timeline-story`.
