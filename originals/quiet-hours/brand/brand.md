# Quiet Hours — brand kit

*Four-minute wind-down for sleep.* Generated from the SiteShelf listing **Quiet Hours Wellness Hero** (Hero Section); every value below is read from that page, not invented.

> **Find your quiet hour**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Instrument Serif |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **cloud** glyph on a squircle tile. A soft cloud suggests dusk, drifting and rest. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#3B2A63` | Page background |
| surface | `#1B1740` | Cards, panels, raised areas |
| text | `#F6EFE9` | Body and heading text |
| textMuted | `#B5AABA` | Secondary text, captions |
| primary | `#1B1740` | Main actions, links, brand colour |
| secondary | `#C46B7A` | Highlights, charts, second accent |
| border | `#F6EFE9` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#C46B7A` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 10.87:1 | pass | pass |
| Muted text on background | 5.55:1 | pass | pass |
| Primary on background | 1.37:1 | fail | fail |
| Text on primary | 16.89:1 | pass | pass |
| Text on surface | 14.83:1 | pass | pass |

**Colours seen on the page** (share of use): `#3B2A63` 77.0%, `#1B1740` 11.0%, `#C46B7A` 11.0%, `#F6EFE9` 0.6%, `#FFD6C9` 0.4%, `#FFFFFF` 0.0%, `#B5AABA` 0.0%

## Typography

- Headings: **Instrument Serif** (weight 400)
- Body: **Albert Sans**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Albert+Sans:wght@400;500&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Instrument Serif | 86.4 px | 400 | 88.128px | -0.864px |
| Body | Albert Sans | 18 px | 400 | 27.9px | normal |
| Button | Albert Sans | 17 px | 500 | normal | normal |

## Shape, space and motion

- Radius: sm 50 px, md 50 px, lg 50 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 2 px, 20 px, 24 px, 28 px, 32 px, 36 px, 44 px
- Layout: container 1200 px; breakpoints single fluid layout
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** soothing, soft-spoken, unhurried.

Quiet Hours speaks the way a good lullaby sounds: slow, low and kind. It uses short sentences with plenty of room between them, never pushing the listener toward anything.

**Do**

- Use gentle verbs like 'settle' and 'slow'
- Keep sentences short and unhurried
- Address the reader as 'you' and nothing more

**Do not**

- Use urgency or streaks
- Use clinical sleep jargon
- Use bright exclamation marks

## Taglines

1. Find your quiet hour
2. Slow your breath, slow your thoughts
3. Four minutes to settle
4. Ready whenever the day is not
5. Breathe in, breathe out, rest

**Boilerplate:** Quiet Hours is a sleep app that guides a four-minute breathing wind-down on a 4-7-8 rhythm, helping people slow down before bed.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Begin now |
| secondaryCta | Not tonight |
| success | Well done. Rest easy. |
| error | We could not start the session. Try once more. |
| empty | No sessions yet. Begin one when you are ready. |

---
Source listing key `o:quiet-hours`. Rebuild with `python3 scripts/brand-kit/build.py o:quiet-hours`.
