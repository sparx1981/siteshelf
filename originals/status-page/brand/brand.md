# Northwind Cloud — brand kit

*Cloud platform with a public status page.* Generated from the SiteShelf listing **Service Status Page** (Dashboard); every value below is read from that page, not invented.

> **All systems operational**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from IBM Plex Sans |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **cloud** glyph. A cloud is the shape that says cloud infrastructure to every engineer. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F7F9FB` | Page background |
| surface | `#16A34A` | Cards, panels, raised areas |
| text | `#33455A` | Body and heading text |
| textMuted | `#14202E` | Secondary text, captions |
| primary | `#16A34A` | Main actions, links, brand colour |
| secondary | `#F59E0B` | Highlights, charts, second accent |
| border | `#E1E7EE` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#104B28` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 9.30:1 | pass | pass |
| Muted text on background | 15.60:1 | pass | pass |
| Primary on background | 3.12:1 | fail | pass |
| Text on primary | 5.96:1 | pass | pass |
| Text on surface | 2.98:1 | fail | fail |

**Colours seen on the page** (share of use): `#F7F9FB` 93.9%, `#16A34A` 4.3%, `#DCFCE7` 0.5%, `#14202E` 0.4%, `#33455A` 0.3%, `#5B6B7C` 0.2%, `#F59E0B` 0.1%, `#DBEAFE` 0.1%, `#DC2626` 0.1%, `#FEF3C7` 0.1%

## Typography

- Headings: **IBM Plex Sans** (weight 600)
- Body: **IBM Plex Sans**
- Google Fonts: `https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:wght@400;500;600&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | IBM Plex Sans | 26 px | 600 | 31.2px | normal |
| Heading / H2 | IBM Plex Sans | 18 px | 600 | normal | normal |
| Subheading / H3 | IBM Plex Mono | 13 px | 500 | normal | normal |
| Body | IBM Plex Sans | 15 px | 400 | 23.25px | normal |
| Button | IBM Plex Sans | 14 px | 500 | normal | normal |

## Shape, space and motion

- Radius: sm 2 px, md 8 px, lg 14 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 2 px; common steps 2 px, 6 px, 8 px, 10 px, 12 px, 14 px, 16 px, 18 px, 20 px
- Layout: container 1200 px; breakpoints 640 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** trustworthy, factual, measured.

Northwind Cloud sounds like a calm incident commander: clear on what is affected, steady in tone and never defensive. It posts time, scope and next update every time.

**Do**

- State what is affected, when and what happens next
- Use plain status words such as 'Operational' and 'Degraded'
- Give times in UTC

**Do not**

- Soften an outage with euphemism
- Use marketing tone on a status page
- Promise a fix time you cannot meet

## Taglines

1. All systems operational
2. Honest about every minute
3. Uptime you can verify
4. Status, without the spin
5. Know before your customers do

**Boilerplate:** Northwind Cloud is a cloud infrastructure provider that publishes real-time service status, 90-day uptime history and incident reports for customers and engineers.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Subscribe to updates |
| secondaryCta | View history |
| success | Subscribed. We will email you about incidents. |
| error | Enter a valid email address to subscribe. |
| empty | No incidents reported. |

---
Source listing key `o:status-page`. Rebuild with `python3 scripts/brand-kit/build.py o:status-page`.
