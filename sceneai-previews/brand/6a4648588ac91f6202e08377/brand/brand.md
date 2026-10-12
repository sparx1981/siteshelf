# Healcure — brand kit

*Trusted healthcare platform.* Generated from the SiteShelf listing **Healcure** (Healthcare for Good); every value below is read from that page, not invented.

> **Healthcare for good, today and always**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **pulse** glyph on a squircle tile. A heartbeat line is the clearest universal sign for healthcare. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#0B1F24` | Page background |
| surface | `#2C6E72` | Cards, panels, raised areas |
| text | `#FFFFFF` | Body and heading text |
| textMuted | `#FBBF24` | Secondary text, captions |
| primary | `#143B44` | Main actions, links, brand colour |
| secondary | `#FBBF24` | Highlights, charts, second accent |
| border | `#FFFFFF` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#FBBF24` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 16.99:1 | pass | pass |
| Muted text on background | 10.18:1 | pass | pass |
| Primary on background | 1.41:1 | fail | fail |
| Text on primary | 12.08:1 | pass | pass |
| Text on surface | 5.87:1 | pass | pass |

**Colours seen on the page** (share of use): `#0B1F24` 76.7%, `#2C6E72` 11.0%, `#143B44` 11.0%, `#FFFFFF` 1.0%, `#C98B6B` 0.1%, `#8A6A55` 0.1%, `#D4A98A` 0.1%, `#A07A60` 0.1%, `#000000` 0.0%, `#FBBF24` 0.0%

## Typography

- Headings: **Inter** (weight 500)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Inter | 42 px | 500 | 47.04px | -0.84px |
| Body | Inter | 15 px | 400 | 24px | normal |
| Button | Inter | 13 px | 500 | normal | normal |
| Navigation | Inter | 14 px | 400 | normal | normal |
| Caption / eyebrow | Inter | 13 px | 400 | normal | normal |

## Shape, space and motion

- Radius: sm 0 px, md 0 px, lg 0 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 2 px; common steps 3 px, 5 px, 6 px, 8 px, 10 px, 12 px, 16 px, 18 px, 24 px
- Layout: container 1340 px; breakpoints 820 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** caring, reliable, clear.

Healcure speaks like a calm, experienced nurse: reassuring, clear and free of jargon. It puts the next step for the patient first and never overstates what medicine can promise.

**Do**

- Explain every service in plain words
- Put the next step, like booking, first
- Use warm, steady sentences

**Do not**

- Do not make medical claims or guarantees
- Avoid frightening language
- Never use jargon without a gloss

## Taglines

1. Healthcare for good, today and always
2. Care you can count on
3. Take charge of your well-being
4. Modern care, kindly delivered
5. Book today. Feel better tomorrow

**Boilerplate:** Healcure is a trusted healthcare platform helping people book appointments, explore services and take charge of their well-being with modern, accessible care.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Book An Appointment |
| secondaryCta | About Us |
| success | Appointment booked. We will confirm by email. |
| error | We could not book that slot. Please choose another time. |
| empty | No appointments yet. Book your first visit. |

---
Source listing key `s:6a4648588ac91f6202e08377`. Rebuild with `python3 scripts/brand-kit/build.py s:6a4648588ac91f6202e08377`.
