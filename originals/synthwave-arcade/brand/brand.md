# Last Quarter Arcade — brand kit

*Retro arcade with high-score tables.* Generated from the SiteShelf listing **Synthwave Arcade** (Landing Page); every value below is read from that page, not invented.

> **Retro arcade, rebooted**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter Bold (stand-in for Orbitron) |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **coins** glyph. A coin is the heart of the arcade and the call to action. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#12002B` | Page background |
| surface | `#FF2E93` | Cards, panels, raised areas |
| text | `#FFFFFF` | Body and heading text |
| textMuted | `#B79AD6` | Secondary text, captions |
| primary | `#FFE14D` | Main actions, links, brand colour |
| secondary | `#22E3FF` | Highlights, charts, second accent |
| border | `#FF2E93` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#716529` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 19.80:1 | pass | pass |
| Muted text on background | 8.11:1 | pass | pass |
| Primary on background | 15.21:1 | pass | pass |
| Text on primary | 15.09:1 | pass | pass |
| Text on surface | 3.46:1 | fail | pass |

**Colours seen on the page** (share of use): `#12002B` 88.5%, `#FF2E93` 5.4%, `#2A0650` 5.3%, `#22E3FF` 0.4%, `#FFE14D` 0.2%, `#FFFFFF` 0.1%, `#B79AD6` 0.1%, `#F5EAFF` 0.0%, `#0B0B0F` 0.0%, `#716529` 0.0%

## Typography

- Headings: **Orbitron** (weight 900)
- Body: **Rajdhani**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Orbitron:wght@700;900&family=Rajdhani:wght@500;600;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Orbitron | 104 px | 900 | 98.8px | 2.08px |
| Heading / H2 | Orbitron | 44 px | 900 | normal | 2.64px |
| Body | Rajdhani | 20 px | 500 | 30px | normal |
| Button | Orbitron | 18 px | 700 | normal | 2.16px |
| Navigation | Rajdhani | 15 px | 700 | 22.5px | 1.5px |

## Shape, space and motion

- Radius: sm 4 px, md 6 px, lg 6 px, pill (fully rounded)
- Shadows: sm: `rgb(34, 227, 255) 0px 0px 16px 0px, rgba(34, 227, 255, 0.3) 0px 0px 16px 0px inset` · md: `rgba(255, 46, 147, 0.55) 0px 0px 18px 0px, rgba(255, 46, 147, 0.15) 0px 0px 18px 0px inset` · lg: `rgba(34, 227, 255, 0.55) 0px 0px 18px 0px, rgba(34, 227, 255, 0.15) 0px 0px 18px 0px inset`
- Spacing: base unit 4 px; common steps 6 px, 14 px, 16 px, 20 px, 22 px, 24 px, 28 px, 30 px, 32 px
- Layout: container 1100 px; breakpoints 800 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** electric, nostalgic, cheeky.

Shouts in neon capitals with a wink: arcade-cabinet language, high scores and sound-effect energy. It is loud and friendly, all quarters and combos.

**Do**

- Use arcade phrases like insert coin and high score
- Write headings in capitals
- Keep every line to a punchy burst

**Do not**

- No modern gaming slang
- Avoid long sentences
- Never lose the neon fun

## Taglines

1. Retro arcade, rebooted
2. Insert coin to play
3. Chase the high score
4. Rewind to 1985
5. Neon nights, last quarter in

**Boilerplate:** Last Quarter Arcade is a retro arcade bringing 1980s cabinets, a scrolling high-score table and neon style to a modern landing page.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | INSERT COIN |
| secondaryCta | VIEW SCORES |
| success | COIN ACCEPTED. PLAYER ONE READY. |
| error | INSERT COIN AGAIN. SOMETHING JAMMED. |
| empty | NO SCORES YET. BE FIRST. |

---
Source listing key `o:synthwave-arcade`. Rebuild with `python3 scripts/brand-kit/build.py o:synthwave-arcade`.
