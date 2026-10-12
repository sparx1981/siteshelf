# Tessel — brand kit

*Embeddable open-source SQL database.* Generated from the SiteShelf listing **Tessel Database** (Landing Page); every value below is read from that page, not invented.

> **A database small enough to hold**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from IBM Plex Mono |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **grid** glyph on a circle tile. A tessellating grid of tiles is the pun in the name and suits tabular data. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F6F3EA` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#5A584F` | Body and heading text |
| textMuted | `#121212` | Secondary text, captions |
| primary | `#FF6A13` | Main actions, links, brand colour |
| secondary | `#8FB4FF` | Highlights, charts, second accent |
| border | `#121212` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#713311` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 6.43:1 | pass | pass |
| Muted text on background | 16.88:1 | pass | pass |
| Primary on background | 2.58:1 | fail | fail |
| Text on primary | 6.85:1 | pass | pass |
| Text on surface | 7.13:1 | pass | pass |

**Colours seen on the page** (share of use): `#F6F3EA` 67.3%, `#FFFFFF` 25.0%, `#121212` 6.9%, `#FF6A13` 0.4%, `#5A584F` 0.3%, `#000000` 0.0%, `#FF9D57` 0.0%, `#14532D` 0.0%, `#8FB4FF` 0.0%, `#9BE3B0` 0.0%

## Typography

- Headings: **IBM Plex Mono** (weight 500)
- Body: **IBM Plex Sans**
- Mono: **monospace**
- Google Fonts: `https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:wght@400;500;600&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | IBM Plex Mono | 72 px | 500 | 75.6px | -2.88px |
| Heading / H2 | IBM Plex Mono | 42 px | 500 | 46.2px | -1.26px |
| Body | IBM Plex Sans | 18 px | 400 | 28.8px | normal |
| Button | IBM Plex Mono | 13 px | 500 | normal | normal |
| Navigation | IBM Plex Mono | 14 px | 400 | normal | normal |
| Mono | monospace | 14 px | 400 | normal | normal |

## Shape, space and motion

- Radius: sm 0 px, md 0 px, lg 0 px
- Shadows: sm: `rgb(18, 18, 18) 4px 4px 0px 0px` · md: `rgb(18, 18, 18) 6px 6px 0px 0px` · lg: `rgb(18, 18, 18) 4px 4px 0px 0px`
- Spacing: base unit 4 px; common steps 4 px, 6 px, 8 px, 10 px, 12 px, 14 px, 18 px, 20 px, 30 px
- Layout: container 1280 px; breakpoints 860 px
- Motion: 120 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** dry, technical, friendly.

Sounds like an engineer writing a README for a friend: precise, understated and a bit wry. It states sizes, guarantees and commands, and trusts code samples to do the persuading.

**Do**

- Give real numbers like 1.2MB and ten seconds
- Show a command or query instead of an adjective
- Keep jokes to one dry line

**Do not**

- Do not claim to be the fastest without a benchmark
- Do not use enterprise buzzwords
- Do not hide the install command

## Taglines

1. A database small enough to hold
2. One binary. No server. Real SQL.
3. Small enough to read, strong to ship
4. ACID, embedded, entirely yours
5. A query planner on a postcard

**Boilerplate:** Tessel is an open-source, embeddable SQL database delivered as a single 1.2MB binary with no server, ACID transactions and a query planner small enough to read in one sitting.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Install |
| secondaryCta | Quick start |
| success | Query ran. Three rows returned. |
| error | Syntax error near line 1. Check the query. |
| empty | No rows. Run a query to see results. |

---
Source listing key `o:landing-open-source-db`. Rebuild with `python3 scripts/brand-kit/build.py o:landing-open-source-db`.
