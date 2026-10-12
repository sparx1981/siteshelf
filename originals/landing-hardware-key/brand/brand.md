# Keystone — brand kit

*Phishing-proof hardware security key.* Generated from the SiteShelf listing **Keystone Security Key** (Landing Page); every value below is read from that page, not invented.

> **Passwords get stolen. This cannot**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Space Grotesk |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **shield** glyph. A shield with a tap target reads instantly as protection and matches the green signal colour. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#0F1214` | Page background |
| surface | `#181C1F` | Cards, panels, raised areas |
| text | `#EEF3F1` | Body and heading text |
| textMuted | `#9AA8A3` | Secondary text, captions |
| primary | `#1FE08A` | Main actions, links, brand colour |
| secondary | `#FF9A9A` | Highlights, charts, second accent |
| border | `#2A3136` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#136443` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 16.77:1 | pass | pass |
| Muted text on background | 7.61:1 | pass | pass |
| Primary on background | 10.82:1 | pass | pass |
| Text on primary | 11.31:1 | pass | pass |
| Text on surface | 15.29:1 | pass | pass |

**Colours seen on the page** (share of use): `#0F1214` 96.9%, `#1FE08A` 2.1%, `#EEF3F1` 0.3%, `#9AA8A3` 0.2%, `#3A454B` 0.1%, `#232A2E` 0.1%, `#8A6A1C` 0.1%, `#D9B24A` 0.1%, `#FF9A9A` 0.0%, `#6C7A75` 0.0%

## Typography

- Headings: **Space Grotesk** (weight 700)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Inter:wght@400;500;600&family=Space+Grotesk:wght@500;600;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Space Grotesk | 80.6 px | 700 | 80.64px | -2.4192px |
| Heading / H2 | Space Grotesk | 46 px | 700 | 48.3px | -0.92px |
| Subheading / H3 | Space Grotesk | 20 px | 600 | normal | normal |
| Body | Inter | 18 px | 400 | 28.8px | normal |
| Button | Inter | 14 px | 600 | normal | normal |
| Navigation | Inter | 15 px | 500 | 24px | normal |

## Shape, space and motion

- Radius: sm 8 px, md 12 px, lg 16 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 2 px; common steps 8 px, 9 px, 10 px, 12 px, 14 px, 18 px, 20 px, 22 px, 26 px
- Layout: container 1240 px; breakpoints 860 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** assured, plain-spoken, protective.

Keystone sounds like a security engineer explaining things to a friend over coffee: confident, blunt about threats and free of fear tactics. It states facts and lets the demo prove them.

**Do**

- State the threat and the fix in one sentence
- Use real numbers, such as price and compatibility
- Let the demo do the persuading

**Do not**

- Use fear-based copy about hackers
- Use security jargon without a gloss
- Claim total invulnerability

## Taglines

1. Passwords get stolen. This cannot
2. Tap once. Phishing gets nothing
3. Proof you are really you
4. Make phishing a non-event
5. The key that checks the site

**Boilerplate:** Keystone is a USB security key from Lockhart Labs that proves identity only to the real website, so phishing pages never receive a usable credential.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Buy for £29 |
| secondaryCta | How it works |
| success | Verified. Signed in to the real site. |
| error | Blocked. This site is not who it claims to be. |
| empty | No keys registered yet. Tap to add one. |

---
Source listing key `o:landing-hardware-key`. Rebuild with `python3 scripts/brand-kit/build.py o:landing-hardware-key`.
