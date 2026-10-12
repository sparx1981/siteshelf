# Lucky Lantern Cafe — brand kit

*Neighbourhood cafe with scratch-card treats.* Generated from the SiteShelf listing **Scratch Reveal Cards** (Cards); every value below is read from that page, not invented.

> **Scratch, sip, smile**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Gloock |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **flame** glyph on a circle tile. A warm lantern flame suits a cosy cafe and the golden glow of its prize cards. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#2A1710` | Page background |
| surface | `#FFF6E4` | Cards, panels, raised areas |
| text | `#E5CFB6` | Body and heading text |
| textMuted | `#FBEEDD` | Secondary text, captions |
| primary | `#FFD36E` | Main actions, links, brand colour |
| secondary | `#C4382C` | Highlights, charts, second accent |
| border | `#E0B04A` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#C4382C` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 11.34:1 | pass | pass |
| Muted text on background | 14.96:1 | pass | pass |
| Primary on background | 12.04:1 | pass | pass |
| Text on primary | 13.84:1 | pass | pass |
| Text on surface | 1.40:1 | fail | fail |

**Colours seen on the page** (share of use): `#2A1710` 65.8%, `#FFF6E4` 17.3%, `#6B3A1E` 16.4%, `#E9D9BA` 0.2%, `#7A5A3A` 0.1%, `#7A4A2A` 0.0%, `#C4382C` 0.0%, `#FFD36E` 0.0%, `#E0B04A` 0.0%, `#000000` 0.0%

## Typography

- Headings: **Gloock** (weight 400)
- Body: **Nunito**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Gloock&family=Nunito:wght@400;600;700;800&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Gloock | 68 px | 400 | 68px | normal |
| Heading / H2 | Gloock | 20 px | 400 | normal | normal |
| Body | Nunito | 18 px | 400 | 27.9px | normal |
| Button | Nunito | 14 px | 800 | 21.7px | normal |
| Caption / eyebrow | Nunito | 13 px | 800 | normal | 2.08px |

## Shape, space and motion

- Radius: sm 6 px, md 12 px, lg 18 px, pill (fully rounded)
- Shadows: sm: `rgba(0, 0, 0, 0.7) 0px 24px 40px -20px` · md: `rgba(0, 0, 0, 0.7) 0px 24px 40px -20px` · lg: `rgba(0, 0, 0, 0.7) 0px 24px 40px -20px`
- Spacing: base unit 2 px; common steps 2 px, 4 px, 7 px, 8 px, 9 px, 10 px, 12 px, 16 px, 18 px
- Layout: container 1100 px; breakpoints 700 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** cosy, festive, cheeky.

Sounds like a cafe owner chalking the specials board: warm, a little theatrical and fond of puns. Everything feels like a small treat handed across the counter.

**Do**

- Use friendly cafe words like sip, treat and lucky dip
- Keep lines short enough for a chalkboard
- Make losing tickets sound kind

**Do not**

- Do not use gambling language like jackpot or odds
- Do not push urgency or pressure
- Do not sound like a coupon site

## Taglines

1. Scratch, sip, smile
2. Every cup comes with a little luck
3. Hot drinks and happy surprises
4. Rub gently. Treats inside.
5. A lantern in the window, luck inside

**Boilerplate:** Lucky Lantern Cafe is a neighbourhood coffee house that hands out scratch-off treat cards with every order, from free biscuits to a surprise cup on the house.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Reveal prize |
| secondaryCta | Reset |
| success | You scratched a winner. Come and collect. |
| error | Foil is stuck. Press Reveal prize instead. |
| empty | No tickets left today. Come back tomorrow. |

---
Source listing key `o:card-scratch-reveal`. Rebuild with `python3 scripts/brand-kit/build.py o:card-scratch-reveal`.
