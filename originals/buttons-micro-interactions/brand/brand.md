# Tapback — brand kit

*Button feedback patterns for product interfaces.* Generated from the SiteShelf listing **Button Micro-Interactions** (Buttons); every value below is read from that page, not invented.

> **Small moments that feel answered**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Manrope |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **spark** glyph on a squircle tile. A small spark of feedback captures the instant a button answers back. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F4F5F9` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#141824` | Body and heading text |
| textMuted | `#6D4AFF` | Secondary text, captions |
| primary | `#6D4AFF` | Main actions, links, brand colour |
| secondary | `#E5484D` | Highlights, charts, second accent |
| border | `#E3E6EE` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#C2B3FF` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 16.25:1 | pass | pass |
| Muted text on background | 4.73:1 | pass | pass |
| Primary on background | 4.73:1 | pass | pass |
| Text on primary | 5.15:1 | pass | pass |
| Text on surface | 17.71:1 | pass | pass |

**Colours seen on the page** (share of use): `#F4F5F9` 97.6%, `#141824` 1.3%, `#6D4AFF` 0.8%, `#6B7390` 0.3%, `#E5484D` 0.0%, `#FF4D79` 0.0%, `#E3E6EE` 0.0%, `#C2B3FF` 0.0%

## Typography

- Headings: **Manrope** (weight 800)
- Body: **Manrope**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Manrope:wght@500;700;800&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Manrope | 28 px | 800 | 42px | normal |
| Heading / H2 | Manrope | 16 px | 700 | 24px | normal |
| Body | Manrope | 15 px | 400 | 22.5px | normal |
| Button | Manrope | 14 px | 700 | normal | normal |

## Shape, space and motion

- Radius: sm 14 px, md 20 px, lg 20 px
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 2 px, 4 px, 6 px, 8 px, 10 px, 14 px, 16 px, 20 px, 22 px
- Layout: container 960 px; breakpoints 600 px, 900 px
- Motion: 300 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** playful, precise, reassuring.

Sounds like a design engineer showing you a trick: friendly, a little proud, always clear about what just happened. Copy is tiny because the motion is doing most of the talking.

**Do**

- Describe the state change in a few words
- Confirm the result right after the click
- Use verbs a person would say aloud

**Do not**

- Do not over-explain a one-second interaction
- Do not use technical terms in button labels
- Do not make confirmations sound alarming

## Taglines

1. Small moments that feel answered
2. Every click deserves a reply
3. Feedback you can feel
4. Press, hold, copy, done
5. Buttons that talk back, politely

**Boilerplate:** Tapback is a collection of button micro-interactions, from loading morphs to hold-to-confirm rings, that helps teams make every click feel acknowledged and safe.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Send message |
| secondaryCta | Reset all |
| success | Done. Message sent. |
| error | Something went wrong. Tap to retry. |
| empty | Nothing to show yet. |

---
Source listing key `o:buttons-micro-interactions`. Rebuild with `python3 scripts/brand-kit/build.py o:buttons-micro-interactions`.
