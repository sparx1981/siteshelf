# Footpath — brand kit

*Four-step account setup for new users.* Generated from the SiteShelf listing **Onboarding Wizard** (Form); every value below is read from that page, not invented.

> **Create your account in a minute**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Manrope |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **stack** glyph on a squircle tile. Stacked slabs read as stepping stones in a progress rail. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F3F1FF` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#6D6A85` | Body and heading text |
| textMuted | `#1C1A2E` | Secondary text, captions |
| primary | `#5B46F0` | Main actions, links, brand colour |
| secondary | `#A599F7` | Highlights, charts, second accent |
| border | `#D9D4F7` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#A599F7` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 4.65:1 | pass | pass |
| Muted text on background | 15.23:1 | pass | pass |
| Primary on background | 5.26:1 | pass | pass |
| Text on primary | 5.87:1 | pass | pass |
| Text on surface | 5.18:1 | pass | pass |

**Colours seen on the page** (share of use): `#F3F1FF` 79.6%, `#E0DBFF` 19.9%, `#5B46F0` 0.4%, `#6D6A85` 0.1%, `#1C1A2E` 0.1%, `#A599F7` 0.0%

## Typography

- Headings: **Manrope** (weight 800)
- Body: **Manrope**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Manrope:wght@500;600;700;800&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Manrope | 30 px | 800 | 34.5px | -0.9px |
| Body | Manrope | 16 px | 500 | 24px | normal |
| Button | Manrope | 16 px | 500 | 24px | normal |

## Shape, space and motion

- Radius: sm 8 px, md 12 px, lg 24 px, pill (fully rounded)
- Shadows: sm: `rgba(91, 70, 240, 0.15) 0px 0px 0px 5px` · md: `rgba(91, 70, 240, 0.3) 0px 8px 20px 0px` · lg: `rgba(60, 40, 160, 0.12) 0px 24px 60px 0px`
- Spacing: base unit 2 px; common steps 6 px, 8 px, 10 px, 12 px, 13 px, 14 px, 17 px, 18 px, 24 px
- Layout: container 1200 px; breakpoints 640 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** welcoming, efficient, calm.

Sounds like a quick, friendly receptionist: tells you how long it will take and what is next. No fluff, no card required.

**Do**

- State time and effort up front
- Explain why each field is asked
- End each step with a clear next action

**Do not**

- No dark patterns
- No jargon about activation
- No celebratory confetti language

## Taglines

1. Create your account in a minute
2. One step, then the next
3. Set up, then get going
4. Four steps, no card needed
5. Small steps to a first win

**Boilerplate:** Stepstone is a four-step setup flow that gets new users from account to goals to review in about a minute, without asking for a card.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Continue |
| secondaryCta | Back |
| success | Account created, welcome in |
| error | Check the highlighted fields and try again |
| empty | Choose an option to continue |

---
Source listing key `o:onboarding-wizard`. Rebuild with `python3 scripts/brand-kit/build.py o:onboarding-wizard`.
