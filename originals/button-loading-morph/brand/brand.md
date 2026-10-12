# Settlebook — brand kit

*Payments tool that confirms every action.* Generated from the SiteShelf listing **Loading Morph Button** (Buttons); every value below is read from that page, not invented.

> **Buttons that tell you what happened**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Plus Jakarta Sans |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **book** glyph on a circle tile. A ledger book signals records that are settled and trustworthy. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#EEF1F4` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#11181F` | Body and heading text |
| textMuted | `#4A5864` | Secondary text, captions |
| primary | `#12805C` | Main actions, links, brand colour |
| secondary | `#2F7BFF` | Highlights, charts, second accent |
| border | `#DDE3E8` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#9BCABB` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 15.77:1 | pass | pass |
| Muted text on background | 6.45:1 | pass | pass |
| Primary on background | 4.34:1 | fail | pass |
| Text on primary | 4.92:1 | pass | pass |
| Text on surface | 17.88:1 | pass | pass |

**Colours seen on the page** (share of use): `#EEF1F4` 71.6%, `#FFFFFF` 15.8%, `#11181F` 10.4%, `#12805C` 0.9%, `#6A3DF0` 0.8%, `#4A5864` 0.2%, `#2F7BFF` 0.2%, `#2457FF` 0.1%, `#B7C2CB` 0.1%, `#9FB0BC` 0.0%

## Typography

- Headings: **Plus Jakarta Sans** (weight 800)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Plus Jakarta Sans | 56 px | 800 | 57.12px | -1.68px |
| Heading / H2 | Plus Jakarta Sans | 17 px | 800 | normal | normal |
| Body | Inter | 17 px | 400 | 26.35px | normal |
| Button | Plus Jakarta Sans | 14 px | 600 | normal | normal |
| Caption / eyebrow | Plus Jakarta Sans | 13 px | 800 | normal | 1.82px |

## Shape, space and motion

- Radius: sm 10 px, md 16 px, lg 20 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 8 px, 9 px, 10 px, 12 px, 14 px, 16 px, 18 px, 22 px, 24 px
- Layout: container 1080 px; breakpoints 860 px
- Motion: 320 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** reassuring, exact, brisk.

Settlebook speaks like a good till operator: calm, quick and clear about what just happened. Every state gets one short sentence in plain language, with the amount and the outcome up front.

**Do**

- State the outcome first, then the next step
- Include the amount or the name that changed
- Use past tense for what is done: 'paid', 'saved', 'sent'

**Do not**

- Do not leave a spinner without a status message
- Do not blame the user for a failure
- Do not use exclamation marks near money

## Taglines

1. Buttons that tell you what happened
2. Paid, saved, sent: you will know
3. Every click gets an answer
4. Payments that never leave you guessing
5. Clear feedback, down to the penny

**Boilerplate:** Settlebook is a payments tool whose buttons show exactly what happened, from taking a payment to saving a profile and inviting a teammate.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Pay £24.00 |
| secondaryCta | Reset all |
| success | Payment received. £24.00 has been taken. |
| error | That did not go through. You have not been charged, so please try again. |
| empty | No payments yet. The first one will show here. |

---
Source listing key `o:button-loading-morph`. Rebuild with `python3 scripts/brand-kit/build.py o:button-loading-morph`.
