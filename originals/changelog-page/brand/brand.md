# Gridwork — brand kit

*Spreadsheet software with a public changelog.* Generated from the SiteShelf listing **Product Changelog** (Blog); every value below is read from that page, not invented.

> **New features, improvements and fixes**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter Bold (stand-in for Inter Tight) |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **grid** glyph on a squircle tile. A simple grid is both the product and the structure of the changelog. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#FCFCFD` | Page background |
| surface | `#12141A` | Cards, panels, raised areas |
| text | `#111318` | Body and heading text |
| textMuted | `#656B78` | Secondary text, captions |
| primary | `#4F46E5` | Main actions, links, brand colour |
| secondary | `#B45309` | Highlights, charts, second accent |
| border | `#D6D9E0` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#B5B1F4` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 18.12:1 | pass | pass |
| Muted text on background | 5.21:1 | pass | pass |
| Primary on background | 6.13:1 | pass | pass |
| Text on primary | 6.29:1 | pass | pass |
| Text on surface | 1.01:1 | fail | fail |

**Colours seen on the page** (share of use): `#FCFCFD` 96.0%, `#12141A` 2.9%, `#656B78` 0.4%, `#DFF6EA` 0.2%, `#E0E9FF` 0.2%, `#FDECD2` 0.2%, `#4F46E5` 0.2%, `#1D4ED8` 0.0%, `#9096A3` 0.0%, `#8FD6A8` 0.0%

## Typography

- Headings: **Inter Tight** (weight 700)
- Body: **Inter**
- Mono: **JetBrains Mono**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600;700&family=Inter:wght@400;500&family=JetBrains+Mono:wght@400;500&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Inter Tight | 42 px | 700 | 46.2px | -1.26px |
| Heading / H2 | Inter Tight | 26 px | 600 | 31.2px | -0.52px |
| Body | Inter | 16 px | 400 | 25.6px | normal |
| Button | Inter | 14 px | 500 | normal | normal |
| Navigation | Inter | 14 px | 400 | 22.4px | normal |
| Caption / eyebrow | Inter | 12 px | 400 | normal | normal |
| Mono | JetBrains Mono | 13 px | 400 | 21.45px | normal |

## Shape, space and motion

- Radius: sm 6 px, md 10 px, lg 12 px, pill (fully rounded)
- Shadows: sm: `rgba(79, 70, 229, 0.45) 0px 6px 16px -6px` · md: `rgba(79, 70, 229, 0.45) 0px 6px 16px -6px` · lg: `rgba(79, 70, 229, 0.45) 0px 6px 16px -6px`
- Spacing: base unit 2 px; common steps 2 px, 6 px, 7 px, 8 px, 9 px, 10 px, 12 px, 14 px, 16 px
- Layout: container 1040 px; breakpoints 820 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** straightforward, developer-friendly, honest.

Gridwork writes release notes the way a good engineer would explain them to a teammate: what changed, why it matters, and what to do about it. It is concise, specific and unembarrassed by bug fixes.

**Do**

- Start each entry with the user's benefit
- Mark breaking changes clearly and say how to migrate
- Use version numbers and dates exactly

**Do not**

- Do not hide fixes under 'general improvements'
- Do not use marketing adjectives in release notes
- Do not announce features that are not shipped

## Taglines

1. New features, improvements and fixes
2. Shipped, fixed and explained
3. Every release, newest first
4. What changed in Gridwork this week
5. Small changes, written down properly

**Boilerplate:** Gridwork is a spreadsheet and data tool for teams, and publishes a plain-spoken changelog covering every new feature, improvement and fix.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Subscribe |
| secondaryCta | Back to app |
| success | Subscribed. Release notes will arrive in your inbox. |
| error | That email address does not look right. Check it and try again. |
| empty | No releases match this filter. Try another tag. |

---
Source listing key `o:changelog-page`. Rebuild with `python3 scripts/brand-kit/build.py o:changelog-page`.
