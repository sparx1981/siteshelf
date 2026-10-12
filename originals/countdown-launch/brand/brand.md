# Kite — brand kit

*Calendar that plans your week around energy.* Generated from the SiteShelf listing **Countdown Launch Page** (Landing Page); every value below is read from that page, not invented.

> **Something light is about to take off**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Space Grotesk |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **diamond** glyph on a circle tile. A diamond reads as a kite shape and stays crisp at small sizes. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#ECE8FF` | Page background |
| surface | `#1A1432` | Cards, panels, raised areas |
| text | `#1A1432` | Body and heading text |
| textMuted | `#645E7A` | Secondary text, captions |
| primary | `#1A1432` | Main actions, links, brand colour |
| secondary | `#FF4F81` | Highlights, charts, second accent |
| border | `#CFC7F5` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#FF4F81` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 14.75:1 | pass | pass |
| Muted text on background | 5.13:1 | pass | pass |
| Primary on background | 14.75:1 | pass | pass |
| Text on primary | 17.65:1 | pass | pass |
| Text on surface | 1.00:1 | fail | fail |

**Colours seen on the page** (share of use): `#ECE8FF` 89.7%, `#1A1432` 7.4%, `#FFFFFF` 2.1%, `#FF4F81` 0.8%, `#645E7A` 0.0%, `#CFC7F5` 0.0%

## Typography

- Headings: **Space Grotesk** (weight 700)
- Body: **Karla**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=Karla:wght@400;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Space Grotesk | 86.4 px | 700 | 86.4px | -3.024px |
| Body | Karla | 18 px | 400 | 27.9px | normal |
| Button | Karla | 17 px | 700 | normal | normal |

## Shape, space and motion

- Radius: sm 4 px, md 16 px, lg 16 px, pill (fully rounded)
- Shadows: sm: `rgba(255, 79, 129, 0.043) 0px 0px 0px 1.54327px` · md: `rgba(255, 79, 129, 0.043) 0px 0px 0px 1.54327px` · lg: `rgba(255, 79, 129, 0.043) 0px 0px 0px 1.54327px`
- Spacing: base unit 2 px; common steps 6 px, 8 px, 10 px, 12 px, 16 px, 18 px, 24 px, 26 px, 30 px
- Layout: container 1200 px; breakpoints 700 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** airy, hopeful, teasing.

Kite sounds like a launch teaser from friendly people: light, a touch mysterious and always specific about the date. It promises calm weeks rather than faster ones.

**Do**

- Tease the idea in one sentence, then name the date
- Talk about energy and time, not inboxes and tasks
- Keep the waitlist ask to a single line

**Do not**

- Do not overpromise features that are not built
- Avoid pressure like 'last chance'
- Never use rocket or hustle metaphors

## Taglines

1. Something light is about to take off
2. Plan the week around your energy
3. A calmer calendar is coming
4. Join the first flight
5. Your week, with a tailwind

**Boilerplate:** Kite is a calendar that plans your week around your energy rather than your inbox, now opening early access to a waitlist ahead of its launch.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Join the waitlist |
| secondaryCta | Add to calendar |
| success | You are on the list. We will write soon. |
| error | That email does not look right. Please check it. |
| empty | No one has joined yet. Be the first. |

---
Source listing key `o:countdown-launch`. Rebuild with `python3 scripts/brand-kit/build.py o:countdown-launch`.
