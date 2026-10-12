# League Night — brand kit

*Floodlit football scoreboard for Millstone Park.* Generated from the SiteShelf listing **Match Scoreboard** (Widgets); every value below is read from that page, not invented.

> **League night under the lights**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Oswald |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **shield** glyph on a squircle tile. A club-crest shield marks the match and the fixture. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#0B1030` | Page background |
| surface | `#121A46` | Cards, panels, raised areas |
| text | `#F1F4FF` | Body and heading text |
| textMuted | `#A9B3E0` | Secondary text, captions |
| primary | `#FFD84D` | Main actions, links, brand colour |
| secondary | `#3FD0E0` | Highlights, charts, second accent |
| border | `#232C63` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#716129` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 16.91:1 | pass | pass |
| Muted text on background | 9.03:1 | pass | pass |
| Primary on background | 13.42:1 | pass | pass |
| Text on primary | 14.20:1 | pass | pass |
| Text on surface | 15.16:1 | pass | pass |

**Colours seen on the page** (share of use): `#0B1030` 75.0%, `#121A46` 17.7%, `#FFFFFF` 2.6%, `#232C63` 1.3%, `#000000` 1.2%, `#FFF6D0` 0.8%, `#3FD0E0` 0.6%, `#FF8A3D` 0.6%, `#FFD84D` 0.3%, `#A9B3E0` 0.1%

## Typography

- Headings: **Oswald** (weight 600)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Oswald:wght@500;600&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Heading / H2 | Oswald | 28 px | 600 | 30.8px | 0.56px |
| Subheading / H3 | Inter | 13 px | 600 | normal | 1.82px |
| Button | Arial | 13.3 px | 400 | normal | normal |
| Caption / eyebrow | Inter | 12 px | 600 | normal | 2.4px |

## Shape, space and motion

- Radius: sm 12 px, md 14 px, lg 24 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 2 px; common steps 2 px, 4 px, 6 px, 8 px, 9 px, 10 px, 12 px, 14 px, 18 px
- Layout: container 1000 px; breakpoints 820 px
- Motion: 500 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** lively, fair, matchday.

Sounds like a stadium announcer: crisp, rhythmic and impartial, with just enough drama for a late equaliser. Minutes, scorers and stats are read out cleanly.

**Do**

- Announce minute and scorer in that order
- Use short matchday phrases
- Keep stats numerical

**Do not**

- No taking sides between the teams
- Avoid cliches like game of two halves
- Never invent real players or clubs

## Taglines

1. League night under the lights
2. Every minute, every goal
3. Ninety minutes, played live
4. Floodlights on, kick off
5. Full time at Millstone Park

**Boilerplate:** League Night is a live-style football scoreboard for fictional fixtures at Millstone Park, with a match clock, event feed, timeline and team statistics.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Play |
| secondaryCta | Jump to full time |
| success | Goal! Harbord Rovers lead. |
| error | Match feed interrupted. Press reset. |
| empty | No events yet. Kick-off is coming. |

---
Source listing key `o:widget-scoreboard`. Rebuild with `python3 scripts/brand-kit/build.py o:widget-scoreboard`.
