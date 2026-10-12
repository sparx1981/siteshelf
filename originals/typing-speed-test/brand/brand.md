# Keystone Sprint — brand kit

*Thirty-second typing test with a personal best.* Generated from the SiteShelf listing **Typing Speed Test** (Games); every value below is read from that page, not invented.

> **Click, type, beat your best**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Outfit |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **bolt** glyph on a circle tile. A bolt stands for quick fingers and a short, sharp test. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#1C1B19` | Page background |
| surface | `#262420` | Cards, panels, raised areas |
| text | `#ECE6D9` | Body and heading text |
| textMuted | `#F2B84B` | Secondary text, captions |
| primary | `#F2B84B` | Main actions, links, brand colour |
| secondary | `#856529` | Highlights, charts, second accent |
| border | `#3A3732` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#856529` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 13.84:1 | pass | pass |
| Muted text on background | 9.62:1 | pass | pass |
| Primary on background | 9.62:1 | pass | pass |
| Text on primary | 10.98:1 | pass | pass |
| Text on surface | 12.46:1 | pass | pass |

**Colours seen on the page** (share of use): `#1C1B19` 98.2%, `#7A7468` 1.3%, `#38342C` 0.4%, `#ECE6D9` 0.1%, `#F2B84B` 0.1%, `#856529` 0.0%, `#0B0B0F` 0.0%

## Typography

- Headings: **Outfit** (weight 500)
- Body: **Outfit**
- Mono: **JetBrains Mono**
- Google Fonts: `https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&family=Outfit:wght@500;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Body | Outfit | 14 px | 500 | 21px | normal |
| Button | Outfit | 15 px | 500 | normal | normal |
| Caption / eyebrow | Outfit | 12 px | 500 | 18px | 1.2px |
| Mono | JetBrains Mono | 12 px | 500 | normal | normal |

## Shape, space and motion

- Radius: sm 5 px, md 8 px, lg 10 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 3 px, 8 px, 10 px, 12 px, 14 px, 16 px, 20 px, 22 px, 28 px
- Layout: container 1200 px; breakpoints 700 px
- Motion: 150 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** focused, encouraging, lean.

Keystone Sprint coaches like a calm typing instructor: minimal words, steady feedback, and numbers that matter. It highlights wins and treats mistakes as data, not failure.

**Do**

- Show WPM and accuracy as plain numbers
- Use second-person coaching: you typed, you beat
- Keep UI text under four words

**Do not**

- Do not mock mistakes
- Avoid 'speed demon' style slang
- Never hide the personal best

## Taglines

1. Click, type, beat your best
2. Thirty seconds of focus
3. Fingers first, then speed
4. Accuracy over adrenaline
5. How fast is fast enough?

**Boilerplate:** Keystone Sprint is a timed typing test with live words-per-minute and accuracy, selectable word sets and a locally saved personal best.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Start typing |
| secondaryCta | Restart |
| success | New personal best: 78 WPM. |
| error | Test interrupted. Click the text and begin again. |
| empty | No best yet. Take the first test. |

---
Source listing key `o:typing-speed-test`. Rebuild with `python3 scripts/brand-kit/build.py o:typing-speed-test`.
