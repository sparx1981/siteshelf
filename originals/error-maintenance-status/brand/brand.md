# Orrin Cloud — brand kit

*Cloud storage platform with a public status page.* Generated from the SiteShelf listing **Maintenance Page with Live Status** (Error Page); every value below is read from that page, not invented.

> **Back shortly. Nothing is lost**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Space Grotesk |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **cloud** glyph on a squircle tile. A cloud shape says storage at a glance and keeps the status page familiar. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#0B1220` | Page background |
| surface | `#121C31` | Cards, panels, raised areas |
| text | `#E8EDF7` | Body and heading text |
| textMuted | `#9FB0CC` | Secondary text, captions |
| primary | `#F5B84B` | Main actions, links, brand colour |
| secondary | `#1B2740` | Highlights, charts, second accent |
| border | `#23314E` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#1B2740` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 15.95:1 | pass | pass |
| Muted text on background | 8.52:1 | pass | pass |
| Primary on background | 10.56:1 | pass | pass |
| Text on primary | 11.08:1 | pass | pass |
| Text on surface | 14.47:1 | pass | pass |

**Colours seen on the page** (share of use): `#0B1220` 79.5%, `#1B2740` 19.9%, `#F5B84B` 0.4%, `#E8EDF7` 0.1%, `#9FB0CC` 0.1%, `#1A1205` 0.0%, `#7F93B4` 0.0%

## Typography

- Headings: **Space Grotesk** (weight 700)
- Body: **IBM Plex Sans**
- Google Fonts: `https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500&family=Space+Grotesk:wght@500;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Space Grotesk | 48 px | 700 | normal | normal |
| Body | IBM Plex Sans | 16 px | 400 | 24.8px | normal |
| Button | Space Grotesk | 15 px | 600 | normal | normal |

## Shape, space and motion

- Radius: sm 10 px, md 14 px, lg 16 px, pill (fully rounded)
- Shadows: sm: `rgba(245, 184, 75, 0.063) 0px 0px 0px 8.71716px` · md: `rgba(245, 184, 75, 0.063) 0px 0px 0px 8.71716px` · lg: `rgba(245, 184, 75, 0.063) 0px 0px 0px 8.71716px`
- Spacing: base unit 4 px; common steps 6 px, 8 px, 10 px, 12 px, 14 px, 16 px, 18 px, 20 px, 24 px
- Layout: container 1200 px; breakpoints 520 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** transparent, measured, reassuring.

Orrin Cloud tells people what is happening during downtime in plain sentences, with times and service names rather than apologies. It is reassuring because it is specific: nothing is lost, and here is the clock.

**Do**

- State what is happening, what is safe and when we return
- Show countdowns and service states in exact terms
- Apologise once, briefly, and move on

**Do not**

- Do not blame gremlins or glitches
- Avoid vague 'soon' without a time
- Never use cheerful emoji during an outage

## Taglines

1. Back shortly. Nothing is lost
2. Upgrading storage, protecting your data
3. Quiet now, faster after
4. We will say when we are back
5. Planned work, plainly explained

**Boilerplate:** Orrin Cloud is a storage platform whose maintenance page shows a live countdown, per-service status and email notification, so customers always know what is happening.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Notify me |
| secondaryCta | View status history |
| success | You will get an email when we are back. |
| error | That email does not look right. Please check it. |
| empty | No incidents to report. |

---
Source listing key `o:error-maintenance-status`. Rebuild with `python3 scripts/brand-kit/build.py o:error-maintenance-status`.
