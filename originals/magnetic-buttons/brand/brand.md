# Polarpaw — brand kit

*Interaction studio for buttons with pull.* Generated from the SiteShelf listing **Magnetic & Ripple Buttons** (Buttons); every value below is read from that page, not invented.

> **Buttons with a pull**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Space Grotesk |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **bolt** glyph on a squircle tile. A bolt of energy suggests the magnetic pull the studio builds into controls. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#0D0D12` | Page background |
| surface | `#14141C` | Cards, panels, raised areas |
| text | `#9A9AA6` | Body and heading text |
| textMuted | `#F5F5F7` | Secondary text, captions |
| primary | `#FBBF24` | Main actions, links, brand colour |
| secondary | `#8B5CF6` | Highlights, charts, second accent |
| border | `#2A2A36` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#8B5CF6` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 6.97:1 | pass | pass |
| Muted text on background | 17.80:1 | pass | pass |
| Primary on background | 11.61:1 | pass | pass |
| Text on primary | 11.77:1 | pass | pass |
| Text on surface | 6.58:1 | pass | pass |

**Colours seen on the page** (share of use): `#0D0D12` 97.1%, `#2B1620` 0.7%, `#1F6FEB` 0.6%, `#FBBF24` 0.5%, `#FFFFFF` 0.4%, `#8B5CF6` 0.2%, `#9A9AA6` 0.2%, `#EC4899` 0.1%, `#1D1503` 0.1%, `#FFD7E4` 0.0%

## Typography

- Headings: **Space Grotesk** (weight 700)
- Body: **Space Grotesk**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Space Grotesk | 52 px | 700 | 54.6px | -1.04px |
| Body | Space Grotesk | 15 px | 500 | 22.5px | normal |
| Button | Arial | 13.3 px | 400 | normal | normal |

## Shape, space and motion

- Radius: sm 10 px, md 16 px, lg 18 px, pill (fully rounded)
- Shadows: sm: `rgb(22, 79, 168) 0px 3px 0px 0px` · md: `rgb(22, 79, 168) 0px 3px 0px 0px` · lg: `rgb(22, 79, 168) 0px 3px 0px 0px`
- Spacing: base unit 2 px; common steps 2 px, 6 px, 8 px, 10 px, 14 px, 16 px, 18 px, 22 px, 26 px
- Layout: container 1000 px; breakpoints 560 px, 860 px
- Motion: 350 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** playful, crafty, tactile.

Polarpaw sounds like a studio that obsesses over how a button feels under a thumb: playful, precise and fond of physical metaphors such as pull, press and ripple.

**Do**

- Describe interaction in verbs of touch and motion
- Offer a keyboard twin for every effect
- Keep copy short and a little cheeky

**Do not**

- Use UI-trend buzzwords
- Ignore reduced-motion users
- Over-explain the physics

## Taglines

1. Buttons with a pull
2. Feel it before you click
3. Small motion, big difference
4. Every click leaves a ripple
5. Tap, press, hold, feel

**Boilerplate:** Polarpaw is a small interaction design studio that builds magnetic, rippling and press-and-hold controls, with every effect tested for keyboard, touch and reduced-motion users.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Book a demo |
| secondaryCta | Explore work |
| success | Saved. Nice and snappy. |
| error | Hold a little longer to confirm. |
| empty | No buttons here yet. Add one. |

---
Source listing key `o:magnetic-buttons`. Rebuild with `python3 scripts/brand-kit/build.py o:magnetic-buttons`.
