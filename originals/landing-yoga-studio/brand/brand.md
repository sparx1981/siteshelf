# Stillwater Yoga — brand kit

*Small-class yoga studio in Bath.* Generated from the SiteShelf listing **Stillwater Yoga** (Landing Page); every value below is read from that page, not invented.

> **Slow down. Start here.**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Cormorant Garamond |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **drop** glyph on a squircle tile. A still water drop signals calm and ripples. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#3D5A45` | Page background |
| surface | `#EEF1E6` | Cards, panels, raised areas |
| text | `#F6EFE3` | Body and heading text |
| textMuted | `#FFFFFF` | Secondary text, captions |
| primary | `#C8643C` | Main actions, links, brand colour |
| secondary | `#FBD8BC` | Highlights, charts, second accent |
| border | `#DFE5D4` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#FBD8BC` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 6.69:1 | pass | pass |
| Muted text on background | 7.65:1 | pass | pass |
| Primary on background | 1.95:1 | fail | fail |
| Text on primary | 5.00:1 | pass | pass |
| Text on surface | 1.00:1 | fail | fail |

**Colours seen on the page** (share of use): `#EEF1E6` 50.5%, `#3D5A45` 32.6%, `#FFFFFF` 14.9%, `#FBD8BC` 0.7%, `#E59A72` 0.7%, `#2C3A2E` 0.3%, `#5D6E5F` 0.3%, `#C8643C` 0.1%, `#3A1A0A` 0.0%, `#DFE5D4` 0.0%

## Typography

- Headings: **Cormorant Garamond** (weight 500)
- Body: **Karla**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;1,500&family=Karla:wght@400;500;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Cormorant Garamond | 100 px | 500 | 100px | normal |
| Heading / H2 | Cormorant Garamond | 52 px | 500 | 54.6px | normal |
| Body | Karla | 18 px | 400 | 28.8px | normal |
| Button | Karla | 15 px | 700 | normal | normal |
| Navigation | Karla | 15 px | 500 | 24px | normal |
| Caption / eyebrow | Karla | 11 px | 400 | normal | normal |

## Shape, space and motion

- Radius: sm 20 px, md 50 px, lg 50 px, pill (fully rounded)
- Shadows: sm: `rgba(200, 100, 60, 0.18) 0px 0px 0px 4px` · md: `rgba(200, 100, 60, 0.45) 0px 20px 60px -10px` · lg: `rgba(200, 100, 60, 0.18) 0px 0px 0px 4px`
- Spacing: base unit 4 px; common steps 2 px, 8 px, 9 px, 10 px, 12 px, 16 px, 18 px, 20 px, 24 px
- Layout: container 1008 px; breakpoints 700 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** calm, kind, grounded.

Speaks softly and slowly, like a teacher at the start of class. Short sentences, no hype, lots of room to breathe.

**Do**

- Keep sentences short with room for a pause
- Use sensory words: warm, soft, steady
- Say what to expect before asking for anything

**Do not**

- No wellness-guru claims
- No pressure or countdown deals
- No exclamation marks

## Taglines

1. Slow down. Start here.
2. Small classes, warm rooms
3. Breathe in, you've arrived
4. Teachers who never rush you
5. A studio for steady breath

**Boilerplate:** Stillwater Yoga is a small-class studio in Bath offering warm rooms, unhurried teachers and a weekly timetable that welcomes beginners, with a first class free.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Book a class |
| secondaryCta | Start breathing |
| success | You're booked in, see you on the mat |
| error | That class is full, try another time |
| empty | No classes booked yet this week |

---
Source listing key `o:landing-yoga-studio`. Rebuild with `python3 scripts/brand-kit/build.py o:landing-yoga-studio`.
