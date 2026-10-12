# Tonewheel Audio — brand kit

*Boutique guitar effects pedals.* Generated from the SiteShelf listing **Rotary Knob Control** (Form Controls); every value below is read from that page, not invented.

> **Turn it up. Gently.**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Oswald |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **dial** glyph on a circle tile. A knob with an indicator line is the most honest picture of what the company builds. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#26262C` | Page background |
| surface | `#121214` | Cards, panels, raised areas |
| text | `#E8E8EE` | Body and heading text |
| textMuted | `#9A9AA6` | Secondary text, captions |
| primary | `#FFB020` | Main actions, links, brand colour |
| secondary | `#3FE0FF` | Highlights, charts, second accent |
| border | `#3A3A44` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#715016` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 12.33:1 | pass | pass |
| Muted text on background | 5.41:1 | pass | pass |
| Primary on background | 8.23:1 | pass | pass |
| Text on primary | 10.74:1 | pass | pass |
| Text on surface | 15.33:1 | pass | pass |

**Colours seen on the page** (share of use): `#26262C` 48.8%, `#121214` 48.8%, `#E9E9EE` 1.2%, `#9A9AA4` 0.6%, `#FFB020` 0.2%, `#5DF29A` 0.1%, `#8A8A96` 0.1%, `#3FE0FF` 0.1%, `#C8C8D2` 0.0%, `#FF5BD0` 0.0%

## Typography

- Headings: **Oswald** (weight 700)
- Body: **Inconsolata**
- Mono: **Inconsolata**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inconsolata:wght@400;600&family=Oswald:wght@500;600;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Oswald | 60 px | 700 | 60px | 0.6px |
| Body | Inconsolata | 18 px | 400 | 27px | normal |
| Button | Oswald | 15 px | 600 | normal | 1.2px |
| Caption / eyebrow | Oswald | 14 px | 600 | normal | 2.8px |
| Mono | Inconsolata | 13 px | 600 | normal | normal |

## Shape, space and motion

- Radius: sm 5 px, md 24 px, lg 50 px, pill (fully rounded)
- Shadows: sm: `rgb(0, 0, 0) 0px 0px 0px 1px inset` · md: `rgba(0, 0, 0, 0.6) 0px 8px 14px 0px, rgb(74, 74, 82) 0px 0px 0px 3px inset, rgb(198, 198, 207) 0px 0px 0px 5px inset, rgba(0, 0, 0, 0.35) 0px 0px 14px 0px inset` · lg: `rgb(0, 0, 0) 0px 40px 80px -30px, rgba(255, 255, 255, 0.06) 0px 1px 0px 0px inset`
- Spacing: base unit 2 px; common steps 6 px, 8 px, 10 px, 12 px, 14 px, 18 px, 20 px, 22 px, 24 px
- Layout: container 1200 px; breakpoints 480 px, 760 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** gritty, tactile, confident.

Sounds like a pedal builder at the bench: dry humour, hands-on detail and a love for knobs that feel right. It talks tone and touch, never specs for their own sake.

**Do**

- Describe sound in plain terms like warm, crunchy or wide
- Mention the physical control, such as turn, nudge or double-click
- Keep lines punchy, like a pedal label

**Do not**

- Do not use audiophile jargon without explaining it
- Do not oversell with words like legendary
- Do not write long paragraphs

## Taglines

1. Turn it up. Gently.
2. Built by ear, tuned by hand
3. Tone you can feel in the knob
4. Clean to crunch in one twist
5. Pedals for people who listen

**Boilerplate:** Tonewheel Audio designs and hand-builds guitar effects pedals with machined knobs and carefully voiced circuits for players who care about feel as much as sound.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Try the pedal |
| secondaryCta | Reset all |
| success | Setting saved to this preset. |
| error | Signal lost. Check the knob and try again. |
| empty | No presets saved yet. |

---
Source listing key `o:control-knob-dial`. Rebuild with `python3 scripts/brand-kit/build.py o:control-knob-dial`.
