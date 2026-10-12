# Basecamp Nine — brand kit

*Project workspace for small teams.* Generated from the SiteShelf listing **Collapsible Sidebar Navigation** (Navigation); every value below is read from that page, not invented.

> **Your projects, one clean sidebar**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Figtree |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **peak** glyph on a circle tile. A peak recalls a base camp and gives the workspace a simple, memorable symbol. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F4F5F9` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#3A4160` | Body and heading text |
| textMuted | `#1A1F36` | Secondary text, captions |
| primary | `#087467` | Main actions, links, brand colour |
| secondary | `#1A1F36` | Highlights, charts, second accent |
| border | `#E4E6EE` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#1A1F36` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 9.16:1 | pass | pass |
| Muted text on background | 14.91:1 | pass | pass |
| Primary on background | 5.20:1 | pass | pass |
| Text on primary | 5.67:1 | pass | pass |
| Text on surface | 9.98:1 | pass | pass |

**Colours seen on the page** (share of use): `#F4F5F9` 99.6%, `#3A4160` 0.1%, `#6B7390` 0.1%, `#0E9F8E` 0.1%, `#6A4CFF` 0.1%, `#1A1F36` 0.1%, `#087467` 0.0%, `#F2B01E` 0.0%, `#E4E6EE` 0.0%

## Typography

- Headings: **Figtree** (weight 700)
- Body: **Figtree**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Figtree | 28 px | 700 | normal | normal |
| Body | Figtree | 14 px | 500 | 19.6px | normal |
| Button | Figtree | 13.3 px | 400 | normal | normal |

## Shape, space and motion

- Radius: sm 5 px, md 10 px, lg 14 px
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 2 px, 4 px, 5 px, 6 px, 10 px, 12 px, 14 px, 20 px, 24 px
- Layout: container 1200 px; breakpoints 820 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** organised, practical, upbeat.

Basecamp Nine speaks in tidy labels and short, helpful hints. It prefers plain nouns for places and verbs for actions, and keeps the workspace feeling light.

**Do**

- Use one-word nouns for navigation items
- Show shortcuts as hints, never as lectures
- Name workspaces and projects in sentence case

**Do not**

- Do not use corporate words like synergy
- Avoid cute mascots or slang
- Never bury a route under a vague label

## Taglines

1. Your projects, one clean sidebar
2. Find your way, fast
3. Work that stays on the map
4. Small teams, tidy workspaces
5. Every route within reach

**Boilerplate:** Basecamp Nine is a project workspace for small teams, with a collapsible sidebar, nested project groups, favourites and a workspace switcher that remembers your layout.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | New project |
| secondaryCta | Collapse sidebar |
| success | Workspace switched. |
| error | Could not open that route. Please try again. |
| empty | No favourites pinned yet. |

---
Source listing key `o:sidebar-nav`. Rebuild with `python3 scripts/brand-kit/build.py o:sidebar-nav`.
