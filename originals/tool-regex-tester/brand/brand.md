# Caret — brand kit

*Regular expression workbench.* Generated from the SiteShelf listing **Regex Tester** (Tools); every value below is read from that page, not invented.

> **Test patterns, see matches**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **chip** glyph on a circle tile. A chip glyph hints at code and precision. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#EEF2F7` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#14213D` | Body and heading text |
| textMuted | `#000000` | Secondary text, captions |
| primary | `#2563EB` | Main actions, links, brand colour |
| secondary | `#14213D` | Highlights, charts, second accent |
| border | `#D3DBE8` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#14213D` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 14.21:1 | pass | pass |
| Muted text on background | 18.68:1 | pass | pass |
| Primary on background | 4.60:1 | pass | pass |
| Text on primary | 5.17:1 | pass | pass |
| Text on surface | 15.97:1 | pass | pass |

**Colours seen on the page** (share of use): `#EEF2F7` 64.1%, `#FFFFFF` 35.3%, `#FDE68A` 0.4%, `#14213D` 0.1%, `#2563EB` 0.0%, `#000000` 0.0%, `#5B6B88` 0.0%, `#7B8AA6` 0.0%, `#D3DBE8` 0.0%

## Typography

- Headings: **Inter** (weight 700)
- Body: **Inter**
- Mono: **JetBrains Mono**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=JetBrains+Mono:wght@400;600&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Inter | 24 px | 700 | 36px | normal |
| Button | JetBrains Mono | 13 px | 600 | normal | normal |
| Mono | JetBrains Mono | 14 px | 400 | 22.4px | normal |

## Shape, space and motion

- Radius: sm 3 px, md 6 px, lg 14 px, pill (fully rounded)
- Shadows: sm: `rgba(20, 33, 61, 0.07) 0px 4px 16px 0px` · md: `rgba(20, 33, 61, 0.07) 0px 4px 16px 0px` · lg: `rgba(20, 33, 61, 0.07) 0px 4px 16px 0px`
- Spacing: base unit 4 px; common steps 2 px, 4 px, 5 px, 6 px, 8 px, 10 px, 12 px, 14 px, 16 px
- Layout: container 1040 px; breakpoints 800 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** exact, terse, developer-friendly.

Writes like a good linter: precise, minimal and impatient with fluff. Errors point at the character and the reason.

**Do**

- Quote the exact character or token that failed
- Use regex terms like group and flag
- Keep messages under ten words

**Do not**

- No friendly filler like oops
- Avoid long explanations
- Never hide the real error message

## Taglines

1. Test patterns, see matches
2. Regex without guesswork
3. Match first, ship second
4. Every group, highlighted
5. Know what your pattern catches

**Boilerplate:** Caret is a live regular expression workbench with flag toggles, highlighted matches and a capture-group table, built for developers who test patterns before shipping.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Copy regex |
| secondaryCta | Load sample |
| success | Regex copied. |
| error | Unterminated group at position 7. |
| empty | No matches. Check your pattern and flags. |

---
Source listing key `o:tool-regex-tester`. Rebuild with `python3 scripts/brand-kit/build.py o:tool-regex-tester`.
