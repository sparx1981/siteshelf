# Loomwork — brand kit

*Team workspace with a fourteen-day trial.* Generated from the SiteShelf listing **Loomwork Sign-up Form** (Form); every value below is read from that page, not invented.

> **Create your workspace**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Fraunces |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **grid** glyph. A woven grid refers directly to a loom and to a workspace of crossing threads. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#FBFAF7` | Page background |
| surface | `#1F3A34` | Cards, panels, raised areas |
| text | `#1D1B18` | Body and heading text |
| textMuted | `#78726A` | Secondary text, captions |
| primary | `#D9622B` | Main actions, links, brand colour |
| secondary | `#1F3A34` | Highlights, charts, second accent |
| border | `#D9D4CA` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#1F3A34` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 16.46:1 | pass | pass |
| Muted text on background | 4.56:1 | pass | pass |
| Primary on background | 3.51:1 | fail | pass |
| Text on primary | 5.36:1 | pass | pass |
| Text on surface | 1.40:1 | fail | fail |

**Colours seen on the page** (share of use): `#1F3A34` 48.9%, `#FBFAF7` 48.9%, `#D9622B` 1.6%, `#F6ECD9` 0.4%, `#1D1B18` 0.2%, `#78726A` 0.1%, `#EA4335` 0.0%, `#34A853` 0.0%, `#4285F4` 0.0%, `#FBBC05` 0.0%

## Typography

- Headings: **Fraunces** (weight 600)
- Body: **Hanken Grotesk**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,500;0,9..144,600;1,9..144,500&family=Hanken+Grotesk:wght@400;500;600&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Fraunces | 48 px | 600 | 52.8px | -0.96px |
| Button | Hanken Grotesk | 12 px | 600 | normal | normal |

## Shape, space and motion

- Radius: sm 10 px, md 12 px, lg 12 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 3 px, 6 px, 10 px, 12 px, 14 px, 16 px, 18 px, 20 px, 24 px
- Layout: container 1200 px; breakpoints 900 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** warm, crafted, straightforward.

Loomwork speaks like a considerate shopkeeper greeting someone new. It is warm, clear about the trial and gently handy with metaphors from weaving.

**Do**

- Tell new users exactly what happens next
- Use woven imagery sparingly: thread, warp, weave
- State trial length and cost every time

**Do not**

- Do not ask for a card on sign-up
- Do not use dark patterns or pressure
- Do not use passwords jargon like 'entropy'

## Taglines

1. Create your workspace
2. Thread your team together
3. Fourteen days free, no card
4. Start with a few strands
5. Weave your work into one place

**Boilerplate:** Loomwork is a team workspace that is free for fourteen days with no card required, built to weave projects, people and documents into one place.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Create account |
| secondaryCta | Continue with Google |
| success | Workspace created. Welcome to Loomwork. |
| error | That password is too short. Use at least 10 characters. |
| empty | No workspace yet. Create one to begin. |

---
Source listing key `o:loomwork-login`. Rebuild with `python3 scripts/brand-kit/build.py o:loomwork-login`.
