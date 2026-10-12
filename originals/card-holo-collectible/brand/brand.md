# Moonfield Cards — brand kit

*Foil collectible trading cards.* Generated from the SiteShelf listing **Holographic Collectible Card** (Cards); every value below is read from that page, not invented.

> **A card that catches the light**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Unbounded |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **diamond** glyph on a squircle tile. A faceted gem stands for foil, rarity and the shine of a collectible. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#120D24` | Page background |
| surface | `#3A2A7A` | Cards, panels, raised areas |
| text | `#EFEAFF` | Body and heading text |
| textMuted | `#C3B8E6` | Secondary text, captions |
| primary | `#FFD86B` | Main actions, links, brand colour |
| secondary | `#2A1560` | Highlights, charts, second accent |
| border | `#4A3B8A` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#2A1560` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 16.13:1 | pass | pass |
| Muted text on background | 10.21:1 | pass | pass |
| Primary on background | 13.79:1 | pass | pass |
| Text on primary | 14.30:1 | pass | pass |
| Text on surface | 9.98:1 | pass | pass |

**Colours seen on the page** (share of use): `#120D24` 62.4%, `#3A2A7A` 17.6%, `#FBF4E2` 7.2%, `#FFFFFF` 4.9%, `#1C1450` 2.0%, `#E8C36A` 1.3%, `#FFF0B8` 1.3%, `#D9A93E` 1.3%, `#FF0080` 1.2%, `#7A2FA0` 0.7%

## Typography

- Headings: **Unbounded** (weight 700)
- Body: **Outfit**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600&family=Unbounded:wght@600;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Unbounded | 54 px | 700 | 58.32px | -1.08px |
| Heading / H2 | Unbounded | 20.8 px | 700 | normal | normal |
| Body | Outfit | 18 px | 400 | 27.9px | normal |
| Button | Outfit | 16 px | 600 | 24.8px | normal |
| Caption / eyebrow | Unbounded | 12 px | 600 | normal | 1.68px |

## Shape, space and motion

- Radius: sm 8 px, md 10 px, lg 18 px, pill (fully rounded)
- Shadows: sm: `rgba(0, 0, 0, 0.3) 0px 0px 0px 1px inset` · md: `rgba(0, 0, 0, 0.7) 0px 30px 60px -20px` · lg: `rgba(0, 0, 0, 0.3) 0px 0px 0px 1px inset`
- Spacing: base unit 4 px; common steps 2 px, 3 px, 4 px, 8 px, 10 px, 11 px, 12 px, 14 px, 16 px
- Layout: container 1100 px; breakpoints 900 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** glittering, playful, collector-minded.

Moonfield Cards writes like a card-shop owner who loves the hobby and the shine. It is excited without being loud, and it handles rarity and condition with a collector's care.

**Do**

- Name the creature and its rarity in the first line
- Use light words: foil, glint, sheen, glare
- Describe condition honestly

**Do not**

- Do not promise investment returns
- Do not use 'epic' or 'legendary' for common cards
- Do not shout in capitals

## Taglines

1. A card that catches the light
2. Tilt it, flip it, keep it
3. Foil worth turning over twice
4. Rare finds from the Moonfield
5. A little night in every card

**Boilerplate:** Moonfield Cards makes foil trading cards with moving holographic finishes, designed to be tilted in the hand and collected by the set.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Flip card |
| secondaryCta | Switch card |
| success | Card flipped. Stats are on the back. |
| error | That card would not load. Pick another from the shelf. |
| empty | Your binder is empty. Find a card to start it. |

---
Source listing key `o:card-holo-collectible`. Rebuild with `python3 scripts/brand-kit/build.py o:card-holo-collectible`.
