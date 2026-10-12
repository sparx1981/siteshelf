# Pacewise — brand kit

*All-in-one project management for modern teams.* Generated from the SiteShelf listing **Think Ahead. Move Fast. Exceed Expectations.** (Landing Page); every value below is read from that page, not invented.

> **Think ahead. Move fast**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **rocket** glyph on a squircle tile. A rocket suggests thinking ahead and moving fast, which is the product's promise. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#EEF1F0` | Page background |
| surface | `#C9E8D6` | Cards, panels, raised areas |
| text | `#374151` | Body and heading text |
| textMuted | `#1A2E24` | Secondary text, captions |
| primary | `#22C55E` | Main actions, links, brand colour |
| secondary | `#BCD4E6` | Highlights, charts, second accent |
| border | `#9CA3AF` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#155930` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 9.07:1 | pass | pass |
| Muted text on background | 12.65:1 | pass | pass |
| Primary on background | 2.00:1 | fail | fail |
| Text on primary | 8.62:1 | pass | pass |
| Text on surface | 7.85:1 | pass | pass |

**Colours seen on the page** (share of use): `#EEF1F0` 88.6%, `#C9E8D6` 5.5%, `#BCD4E6` 5.5%, `#22C55E` 0.2%, `#374151` 0.1%, `#FFFFFF` 0.1%, `#1A2E24` 0.0%, `#0A0A0A` 0.0%, `#111827` 0.0%, `#6B7280` 0.0%

## Typography

- Headings: **Inter** (weight 700)
- Body: **Inter**

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Inter | 46 px | 700 | 50.6px | -1.15px |
| Body | Inter | 15 px | 400 | 24.375px | normal |
| Button | Inter | 14 px | 400 | normal | normal |
| Navigation | Inter | 16 px | 400 | normal | normal |

## Shape, space and motion

- Radius: sm 0 px, md 0 px, lg 0 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 4 px, 6 px, 8 px, 10 px, 12 px, 20 px, 24 px, 32 px, 112 px
- Layout: container 1280 px; breakpoints 768 px, 1024 px
- Motion: 500 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** decisive, energetic, clear.

Pacewise talks like a sharp team lead on a Monday: decisive, upbeat and short on words. It promises pace and clarity together and keeps every claim practical.

**Do**

- Write headlines as three short commands
- Name the real feature, such as tracking or sharing
- Keep tone confident, never loud

**Do not**

- Use 'seamless' or 'revolutionary'
- Pile up nouns
- Overstate time saved

## Taglines

1. Think ahead. Move fast
2. Track progress, hit every deadline
3. One workspace, one pace
4. Work at the speed of the plan
5. Exceed what was expected

**Boilerplate:** Pacewise is an all-in-one project management platform for modern teams, combining progress tracking, collaboration and deadline planning in a single workspace.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Try for Free |
| secondaryCta | See Pricing |
| success | Project created. Your team is in. |
| error | Could not create the project. Please try again. |
| empty | No projects yet. Create your first. |

---
Source listing key `s:6a3a7b9c8ac91f6202e080e1`. Rebuild with `python3 scripts/brand-kit/build.py s:6a3a7b9c8ac91f6202e080e1`.
