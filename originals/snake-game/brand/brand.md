# Pixel Serpent — brand kit

*Neon arcade snake with a modern feel.* Generated from the SiteShelf listing **Neon Snake** (Games); every value below is read from that page, not invented.

> **Eat. Grow. Don't crash**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter Bold (stand-in for Orbitron) |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **wave** glyph on a circle tile. A wavy line suggests the snake's body and a neon arcade glow. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#0F1430` | Page background |
| surface | `#080A1C` | Cards, panels, raised areas |
| text | `#E8ECFF` | Body and heading text |
| textMuted | `#B8C0EE` | Secondary text, captions |
| primary | `#B8C0EE` | Main actions, links, brand colour |
| secondary | `#1A1F4A` | Highlights, charts, second accent |
| border | `#2C3478` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#1A1F4A` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 15.37:1 | pass | pass |
| Muted text on background | 10.16:1 | pass | pass |
| Primary on background | 10.16:1 | pass | pass |
| Text on primary | 11.05:1 | pass | pass |
| Text on surface | 16.70:1 | pass | pass |

**Colours seen on the page** (share of use): `#1A1F4A` 35.0%, `#0A0D1A` 35.0%, `#0F1430` 29.2%, `#19F0C2` 0.3%, `#2A7BFF` 0.3%, `#E8ECFF` 0.1%, `#B8C0EE` 0.1%, `#8D97D6` 0.1%, `#FFD23F` 0.0%, `#2C3478` 0.0%

## Typography

- Headings: **Orbitron** (weight 700)
- Body: **Rubik**
- Mono: **Rubik**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700&family=Rubik:wght@400;500&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Orbitron | 30 px | 700 | 30px | 1.8px |
| Heading / H2 | Orbitron | 28 px | 700 | normal | 1.68px |
| Button | Orbitron | 15 px | 700 | normal | 0.9px |
| Caption / eyebrow | Rubik | 11 px | 400 | 15.4px | 1.54px |
| Mono | Rubik | 12 px | 500 | normal | normal |

## Shape, space and motion

- Radius: sm 5 px, md 12 px, lg 18 px, pill (fully rounded)
- Shadows: sm: `rgba(25, 240, 194, 0.15) 0px 0px 40px 0px, rgba(42, 123, 255, 0.1) 0px 0px 30px 0px inset` · md: `rgba(25, 240, 194, 0.15) 0px 0px 40px 0px, rgba(42, 123, 255, 0.1) 0px 0px 30px 0px inset` · lg: `rgba(25, 240, 194, 0.15) 0px 0px 40px 0px, rgba(42, 123, 255, 0.1) 0px 0px 30px 0px inset`
- Spacing: base unit 2 px; common steps 5 px, 6 px, 8 px, 10 px, 12 px, 14 px, 16 px, 20 px, 26 px
- Layout: container 1200 px; breakpoints 700 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** electric, punchy, arcade.

Pixel Serpent talks like an arcade cabinet: short, bright and direct. It encourages quick restarts and treats every death as a prompt for one more go.

**Do**

- Use two-word prompts such as 'Press start'
- Show scores as plain numbers
- Suggest replay immediately after game over

**Do not**

- Do not explain controls twice
- Avoid old-arcade parody voices
- Never block the replay button

## Taglines

1. Eat. Grow. Don't crash
2. One more run
3. Neon, speed and appetite
4. Slither into the glow
5. Arcade classics, glowing

**Boilerplate:** Pixel Serpent is a neon arcade snake game with smooth controls, speed levels, power-up pellets and best-score tracking for quick sessions on any device.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Start |
| secondaryCta | Pause |
| success | New best: 42. |
| error | Game over. Press restart to try again. |
| empty | Press an arrow key or swipe to start. |

---
Source listing key `o:snake-game`. Rebuild with `python3 scripts/brand-kit/build.py o:snake-game`.
