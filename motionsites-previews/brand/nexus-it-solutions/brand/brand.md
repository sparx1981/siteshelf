# NEXUS — brand kit

*IT strategy and custom technology platforms.* Generated from the SiteShelf listing **Nexus IT Solutions** (Hero Section); every value below is read from that page, not invented.

> **Beyond your biggest obstacles**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **globe** glyph. A node-and-globe mark suits a firm that connects strategy, systems and companies. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#FFFFFF` | Page background |
| surface | `#07182C` | Cards, panels, raised areas |
| text | `#606876` | Body and heading text |
| textMuted | `#29303D` | Secondary text, captions |
| primary | `#0D2C4F` | Main actions, links, brand colour |
| secondary | `#2B88CA` | Highlights, charts, second accent |
| border | `#E9EAEC` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#2B88CA` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 5.62:1 | pass | pass |
| Muted text on background | 13.25:1 | pass | pass |
| Primary on background | 14.09:1 | pass | pass |
| Text on primary | 14.09:1 | pass | pass |
| Text on surface | 3.18:1 | fail | pass |

**Colours seen on the page** (share of use): `#FFFFFF` 97.0%, `#07182C` 1.1%, `#2B88CA` 1.1%, `#0D2C4F` 0.6%, `#606876` 0.1%, `#29303D` 0.0%, `#E9EAEC` 0.0%

## Typography

- Headings: **Inter** (weight 400)
- Body: **Akshar**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Akshar:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Inter | 60 px | 400 | 75px | -3.6px |
| Body | Akshar | 20 px | 400 | normal | normal |
| Button | Akshar | 20 px | 400 | normal | 1px |
| Navigation | Akshar | 20 px | 500 | normal | 1px |

## Shape, space and motion

- Radius: sm 0 px, md 0 px, lg 0 px
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 6 px, 8 px, 16 px, 18 px, 20 px, 24 px, 32 px, 36 px, 44 px
- Layout: container 1280 px; breakpoints 640 px, 768 px, 899 px, 900 px, 1024 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** authoritative, pragmatic, forward-looking.

NEXUS speaks like a consultant who has actually run delivery: clear, steady and focused on outcomes. It addresses business problems first and technology second.

**Do**

- Lead with the business obstacle
- Name services in plain words
- Use confident, short sentences

**Do not**

- Use jargon like 'synergy' or 'paradigm'
- Overpromise on timelines
- Hide the work behind buzzwords

## Taglines

1. Beyond your biggest obstacles
2. Strategy, then the technology
3. Build the platform you need
4. Growth through better IT
5. Clear plans, custom builds

**Boilerplate:** NEXUS is an IT consultancy that helps companies grow through technology strategy, digital innovation and custom-built platforms, delivered by a dedicated team.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Get in touch |
| secondaryCta | Start your journey |
| success | Thanks. A specialist will reply within a day. |
| error | Your message did not send. Please try again. |
| empty | No case studies in this category yet. |

---
Source listing key `m:nexus-it-solutions`. Rebuild with `python3 scripts/brand-kit/build.py m:nexus-it-solutions`.
