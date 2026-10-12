# Vaultsmith — brand kit

*Local password and passphrase generator.* Generated from the SiteShelf listing **Password Generator** (Tools); every value below is read from that page, not invented.

> **Strong passwords, made on your device**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Sora |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **shield** glyph on a squircle tile. A shield expresses safe keeping, with a blacksmith's solidity. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#0F1419` | Page background |
| surface | `#171D25` | Cards, panels, raised areas |
| text | `#8B98A8` | Body and heading text |
| textMuted | `#E6EDF3` | Secondary text, captions |
| primary | `#3DDC97` | Main actions, links, brand colour |
| secondary | `#F5B942` | Highlights, charts, second accent |
| border | `#28313D` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#206348` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 6.31:1 | pass | pass |
| Muted text on background | 15.67:1 | pass | pass |
| Primary on background | 10.47:1 | pass | pass |
| Text on primary | 11.12:1 | pass | pass |
| Text on surface | 5.77:1 | pass | pass |

**Colours seen on the page** (share of use): `#0F1419` 96.7%, `#FFFFFF` 2.0%, `#3DDC97` 0.6%, `#1C242E` 0.3%, `#8B98A8` 0.2%, `#E6EDF3` 0.1%, `#F5B942` 0.0%, `#1FA7D4` 0.0%, `#28313D` 0.0%, `#206348` 0.0%

## Typography

- Headings: **Sora** (weight 700)
- Body: **Sora**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Fira+Mono:wght@400;500&family=Sora:wght@500;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Heading / H2 | Sora | 14 px | 700 | normal | 1.4px |
| Body | Sora | 13 px | 500 | 19.5px | normal |
| Button | Arial | 18 px | 400 | normal | normal |

## Shape, space and motion

- Radius: sm 7 px, md 10 px, lg 12 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 2 px; common steps 2 px, 3 px, 6 px, 8 px, 10 px, 12 px, 14 px, 16 px, 18 px
- Layout: container 1200 px; breakpoints 640 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** careful, plain, trustworthy.

Vaultsmith speaks like a locksmith who tells you exactly what the lock does and doesn't. It is short, factual about security and always clear that nothing leaves the browser.

**Do**

- State what happens locally, every time
- Explain strength with a plain word and the entropy
- Use measured, concrete verbs: forge, copy, clear

**Do not**

- Do not use fear to sell strength
- Do not say 'unhackable'
- Do not hide where the data lives

## Taglines

1. Strong passwords, made on your device
2. Generated here, stored nowhere
3. A good lock needs a good key
4. Forged locally, never sent
5. Long, random and yours

**Boilerplate:** Vaultsmith is a password and passphrase generator that runs entirely in the browser, so nothing is ever sent or stored.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Copy |
| secondaryCta | Regenerate |
| success | Copied. It will clear from your clipboard shortly. |
| error | Pick at least one character type to generate a password. |
| empty | No passwords generated yet. Press Regenerate. |

---
Source listing key `o:password-generator`. Rebuild with `python3 scripts/brand-kit/build.py o:password-generator`.
