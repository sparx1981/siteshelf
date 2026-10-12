# Pocket Notes — brand kit

*Quick notes app with a one-thumb menu.* Generated from the SiteShelf listing **Radial Menu** (Navigation); every value below is read from that page, not invented.

> **Notes within thumb's reach**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Outfit |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **dial** glyph on a circle tile. A dial echoes the round button and the arc of actions it fans out. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#162A2E` | Page background |
| surface | `#0D1B1E` | Cards, panels, raised areas |
| text | `#A7C3C0` | Body and heading text |
| textMuted | `#E6F4F2` | Secondary text, captions |
| primary | `#4FE3C1` | Main actions, links, brand colour |
| secondary | `#2B7D6A` | Highlights, charts, second accent |
| border | `#26454B` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#2B7D6A` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 7.98:1 | pass | pass |
| Muted text on background | 13.23:1 | pass | pass |
| Primary on background | 9.32:1 | pass | pass |
| Text on primary | 12.25:1 | pass | pass |
| Text on surface | 9.40:1 | pass | pass |

**Colours seen on the page** (share of use): `#162A2E` 49.7%, `#0D1B1E` 48.7%, `#4FE3C1` 0.6%, `#A7C3C0` 0.6%, `#E6F4F2` 0.3%, `#8FB3B0` 0.2%, `#2B7D6A` 0.0%, `#26454B` 0.0%, `#0B0B0F` 0.0%

## Typography

- Headings: **Outfit** (weight 700)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Outfit:wght@500;600;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Outfit | 32 px | 700 | normal | normal |
| Body | Inter | 13 px | 400 | 20.15px | normal |
| Button | Inter | 15 px | 400 | 23.25px | normal |
| Caption / eyebrow | Inter | 12.5 px | 400 | 19.375px | normal |

## Shape, space and motion

- Radius: sm 4 px, md 14 px, lg 18 px, pill (fully rounded)
- Shadows: sm: `rgba(79, 227, 193, 0.55) 0px 14px 30px -8px` · md: `rgba(79, 227, 193, 0.55) 0px 14px 30px -8px` · lg: `rgba(79, 227, 193, 0.55) 0px 14px 30px -8px`
- Spacing: base unit 4 px; common steps 2 px, 8 px, 10 px, 12 px, 14 px, 16 px, 18 px, 28 px
- Layout: container 1200 px; breakpoints 480 px
- Motion: 300 ms, `cubic-bezier(0.3`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** quick, handy, minimal.

Pocket Notes sounds like a clear-headed friend jotting things down next to you. It keeps labels to one word, states each action as a verb and trusts the thumb more than the manual.

**Do**

- Use single-word action labels: pin, share, delete
- Describe keyboard shortcuts in one sentence
- Show the result of an action immediately

**Do not**

- Do not use productivity-guru language
- Avoid menus nested more than one level
- Never delete without an undo

## Taglines

1. Notes within thumb's reach
2. Tap once, fan out five actions
3. Jot it down. Move on
4. Small notes, quick hands
5. Everything within a swipe

**Boilerplate:** Pocket Notes is a minimalist notes app whose floating radial menu puts pin, share, tag, archive and delete within a single thumb's reach.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | New note |
| secondaryCta | Search notes |
| success | Note pinned. |
| error | Could not save the note. Try again. |
| empty | No notes yet. Tap the round button to add one. |

---
Source listing key `o:nav-radial-menu`. Rebuild with `python3 scripts/brand-kit/build.py o:nav-radial-menu`.
