# Cipherdesk — brand kit

*Puzzle-and-learning site for classic ciphers.* Generated from the SiteShelf listing **Cipher Playground** (Tools); every value below is read from that page, not invented.

> **Turn the wheel, learn the code**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Cormorant Garamond |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **dial** glyph on a squircle tile. A cipher wheel dial is the icon of the whole site. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#16110C` | Page background |
| surface | `#231A12` | Cards, panels, raised areas |
| text | `#F5EAD2` | Body and heading text |
| textMuted | `#CDBF9F` | Secondary text, captions |
| primary | `#D6AB4C` | Main actions, links, brand colour |
| secondary | `#66D0B6` | Highlights, charts, second accent |
| border | `#4A3A28` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#604E29` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 15.70:1 | pass | pass |
| Muted text on background | 10.32:1 | pass | pass |
| Primary on background | 8.74:1 | pass | pass |
| Text on primary | 9.16:1 | pass | pass |
| Text on surface | 14.32:1 | pass | pass |

**Colours seen on the page** (share of use): `#16110C` 89.3%, `#000000` 3.5%, `#D6AB4C` 2.4%, `#EFE3C8` 2.0%, `#FFFFFF` 0.8%, `#6A4A15` 0.7%, `#3A2D1E` 0.6%, `#2A1C08` 0.3%, `#8D7448` 0.2%, `#E1CD9C` 0.2%

## Typography

- Headings: **Cormorant Garamond** (weight 700)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@700&family=IBM+Plex+Mono:wght@500&family=Inter:wght@400;500;600&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Cormorant Garamond | 58 px | 700 | 58px | normal |
| Heading / H2 | Inter | 13 px | 700 | normal | 1.56px |
| Body | Inter | 14.5 px | 400 | 21.75px | normal |
| Button | Inter | 14 px | 600 | normal | normal |
| Caption / eyebrow | Inter | 12 px | 600 | normal | 2.16px |

## Shape, space and motion

- Radius: sm 3 px, md 12 px, lg 16 px
- Shadows: sm: `rgba(0, 0, 0, 0.4) 0px 10px 24px 0px` · md: `rgba(0, 0, 0, 0.4) 0px 10px 24px 0px` · lg: `rgba(0, 0, 0, 0.4) 0px 10px 24px 0px`
- Spacing: base unit 2 px; common steps 2 px, 4 px, 6 px, 8 px, 10 px, 12 px, 14 px, 16 px, 18 px
- Layout: container 1240 px; breakpoints 980 px
- Motion: 400 ms, `cubic-bezier(0.3`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** curious, studious, playful.

Sounds like a detective's tutor: patient, precise, with a hint of mystery. It explains one letter at a time and invites you to try.

**Do**

- Explain each step with the letters involved
- Name the cipher and key in answers
- Invite experiment with a sample

**Do not**

- No real-world security claims
- No heavy math jargon
- No spoilers without a Play step

## Taglines

1. Turn the wheel, learn the code
2. One letter at a time
3. Ciphers, explained slowly
4. The detective's study, online
5. Encode it, then explain it

**Boilerplate:** Cipherdesk is a puzzle-and-learning site where visitors encrypt and decrypt with classic ciphers on a brass wheel, with every step explained for learning only.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Play |
| secondaryCta | Sample |
| success | Result copied |
| error | Key must be letters only, try again |
| empty | Enter a message to begin |

---
Source listing key `o:tool-cipher-playground`. Rebuild with `python3 scripts/brand-kit/build.py o:tool-cipher-playground`.
