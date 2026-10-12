# Sealwright — brand kit

*Developer tools for reading signed tokens.* Generated from the SiteShelf listing **Token Decoder** (Tools); every value below is read from that page, not invented.

> **Read the token. Trust nothing.**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Space Grotesk |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **chip** glyph on a circle tile. A chip suggests a small, technical component, matching a tool for reading machine tokens. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#0E1322` | Page background |
| surface | `#161D33` | Cards, panels, raised areas |
| text | `#EEF1FB` | Body and heading text |
| textMuted | `#A9B4D3` | Secondary text, captions |
| primary | `#B9A2FF` | Main actions, links, brand colour |
| secondary | `#FF8F6B` | Highlights, charts, second accent |
| border | `#3A4770` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#544A74` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 16.40:1 | pass | pass |
| Muted text on background | 8.95:1 | pass | pass |
| Primary on background | 8.52:1 | pass | pass |
| Text on primary | 9.05:1 | pass | pass |
| Text on surface | 14.80:1 | pass | pass |

**Colours seen on the page** (share of use): `#0E1322` 96.9%, `#1C2542` 1.5%, `#000000` 0.7%, `#EEF1FB` 0.3%, `#A9B4D3` 0.3%, `#FFFFFF` 0.1%, `#52D6C4` 0.1%, `#9AE6A8` 0.1%, `#B9A2FF` 0.1%, `#FF8F6B` 0.0%

## Typography

- Headings: **Space Grotesk** (weight 600)
- Body: **Inter**
- Mono: **JetBrains Mono**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@500&family=Space+Grotesk:wght@600&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Space Grotesk | 52 px | 600 | 53.56px | normal |
| Heading / H2 | Space Grotesk | 13 px | 600 | normal | 1.3px |
| Body | Inter | 14.5 px | 400 | 21.75px | normal |
| Button | Inter | 13.5 px | 600 | normal | normal |
| Caption / eyebrow | Inter | 12 px | 600 | normal | 1.92px |
| Mono | JetBrains Mono | 12 px | 500 | normal | normal |

## Shape, space and motion

- Radius: sm 10 px, md 14 px, lg 20 px
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 2 px, 4 px, 6 px, 8 px, 10 px, 12 px, 14 px, 16 px, 26 px
- Layout: container 1240 px; breakpoints 640 px, 960 px
- Motion: 300 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** careful, exact, developer-honest.

Sealwright sounds like a careful engineer who respects the difference between decoding and verifying. It is precise, calm and never overclaims what the tool can prove.

**Do**

- Say 'decode' for what it does and 'verify' only when it truly verifies
- Use claim names exactly as in the token
- State expiry in clear time units

**Do not**

- Imply a token is trustworthy because it decodes
- Use cryptography scare language
- Use cute security metaphors beyond the wax seal

## Taglines

1. Read the token. Trust nothing.
2. Decoding is not verifying
3. Every claim, laid out plainly
4. See inside the seal
5. Tokens, taken apart carefully

**Boilerplate:** Sealwright is a developer tool that decodes sample JSON web tokens in the browser, showing header, payload, claims and expiry without ever verifying or transmitting them.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Decode token |
| secondaryCta | Clear |
| success | Decoded. Valid for 2 hours. |
| error | This token is malformed. Check the three parts. |
| empty | Paste a token to begin. |

---
Source listing key `o:tool-jwt-decoder`. Rebuild with `python3 scripts/brand-kit/build.py o:tool-jwt-decoder`.
