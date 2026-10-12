# Brightfield — brand kit

*Team profiles you can edit in place.* Generated from the SiteShelf listing **Inline Profile Editor** (Form); every value below is read from that page, not invented.

> **Edit it right where it is**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **diamond** glyph on a squircle tile. A clean diamond reads as a polished profile card and a bright field of information. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#ECEFF4` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#172033` | Body and heading text |
| textMuted | `#5A6780` | Secondary text, captions |
| primary | `#4F46E5` | Main actions, links, brand colour |
| secondary | `#172033` | Highlights, charts, second accent |
| border | `#D9DFE9` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#172033` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 14.11:1 | pass | pass |
| Muted text on background | 4.94:1 | pass | pass |
| Primary on background | 5.46:1 | pass | pass |
| Text on primary | 6.29:1 | pass | pass |
| Text on surface | 16.27:1 | pass | pass |

**Colours seen on the page** (share of use): `#ECEFF4` 72.2%, `#FFFFFF` 25.1%, `#7C6CF5` 0.6%, `#4F46E5` 0.6%, `#22B8CF` 0.6%, `#FFD1DC` 0.5%, `#172033` 0.2%, `#5A6780` 0.0%, `#D6D9FB` 0.0%, `#3A33B8` 0.0%

## Typography

- Headings: **Inter** (weight 700)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@600;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Button | Inter | 15 px | 700 | normal | normal |

## Shape, space and motion

- Radius: sm 6 px, md 22 px, lg 22 px, pill (fully rounded)
- Shadows: sm: `rgba(23, 32, 51, 0.5) 0px 30px 60px -44px` · md: `rgba(23, 32, 51, 0.5) 0px 30px 60px -44px` · lg: `rgba(23, 32, 51, 0.5) 0px 30px 60px -44px`
- Spacing: base unit 4 px; common steps 2 px, 4 px, 5 px, 6 px, 8 px, 10 px, 12 px, 14 px, 16 px
- Layout: container 1200 px; breakpoints 560 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** efficient, friendly, tidy.

Brightfield sounds like a helpful colleague in an internal tool: short, precise and quietly reassuring. Every edit is acknowledged in one line and every mistake can be undone.

**Do**

- Confirm each save in a single short sentence
- Tell people how to undo, and for how long
- Label fields with plain nouns

**Do not**

- Do not hide the undo behind a menu
- Avoid exclamation marks on routine saves
- Never use legal-sounding validation errors

## Taglines

1. Edit it right where it is
2. Click, type, done
3. Profiles that stay current
4. Small changes, no friction
5. Update anything. Undo anything

**Boilerplate:** Brightfield is a people directory for growing teams, letting anyone update their profile in place with instant validation and a five-second undo for every change.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Save changes |
| secondaryCta | Cancel |
| success | Saved. You can undo for 5 seconds. |
| error | That value is not valid. Check it and try again. |
| empty | Nothing added yet. Click to edit this field. |

---
Source listing key `o:form-inline-profile-edit`. Rebuild with `python3 scripts/brand-kit/build.py o:form-inline-profile-edit`.
