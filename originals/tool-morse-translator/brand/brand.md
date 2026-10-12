# Lampwick — brand kit

*Signalling-history site with a silent Morse translator.* Generated from the SiteShelf listing **Morse Translator** (Tools); every value below is read from that page, not invented.

> **Say it with light**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Space Grotesk |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **flame** glyph on a circle tile. A lamp flame ties the name to the flashing lighthouse lamp. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#07121F` | Page background |
| surface | `#0F2236` | Cards, panels, raised areas |
| text | `#A9BDD2` | Body and heading text |
| textMuted | `#E8F1FA` | Secondary text, captions |
| primary | `#FFD166` | Main actions, links, brand colour |
| secondary | `#A9BDD2` | Highlights, charts, second accent |
| border | `#26415E` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#715E34` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 9.77:1 | pass | pass |
| Muted text on background | 16.49:1 | pass | pass |
| Primary on background | 13.06:1 | pass | pass |
| Text on primary | 13.62:1 | pass | pass |
| Text on surface | 8.37:1 | pass | pass |

**Colours seen on the page** (share of use): `#07121F` 62.1%, `#0F2236` 34.4%, `#FFD166` 1.8%, `#000000` 0.8%, `#FFFFFF` 0.4%, `#E8EEFF` 0.2%, `#A9BDD2` 0.1%, `#F7DC8E` 0.1%, `#B8892F` 0.1%, `#6E4D14` 0.1%

## Typography

- Headings: **Space Grotesk** (weight 600)
- Body: **Inter**
- Mono: **JetBrains Mono**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@500&family=Space+Grotesk:wght@600&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Space Grotesk | 54 px | 600 | 55.62px | normal |
| Heading / H2 | Inter | 13 px | 600 | normal | 1.56px |
| Body | Inter | 13 px | 400 | 19.5px | normal |
| Button | Inter | 14 px | 600 | normal | normal |
| Caption / eyebrow | Inter | 12 px | 600 | normal | 1.92px |
| Mono | JetBrains Mono | 11.5 px | 500 | normal | normal |

## Shape, space and motion

- Radius: sm 5 px, md 10 px, lg 16 px, pill (fully rounded)
- Shadows: sm: `rgb(74, 53, 12) 0px 8px 0px 0px, rgba(0, 0, 0, 0.5) 0px 14px 20px 0px` · md: `rgb(255, 255, 255) 0px 0px 6px 0px` · lg: `rgb(74, 53, 12) 0px 8px 0px 0px, rgba(0, 0, 0, 0.5) 0px 14px 20px 0px`
- Spacing: base unit 2 px; common steps 2 px, 3 px, 4 px, 6 px, 8 px, 10 px, 12 px, 14 px, 16 px
- Layout: container 1240 px; breakpoints 560 px, 1000 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** patient, maritime, playful.

A lighthouse keeper's quiet wit: patient, dry and fond of old signalling lore. It is exact about dots and dashes and says clearly that the demo makes no sound.

**Do**

- Show dots and dashes accurately
- Use maritime and signalling vocabulary
- Say plainly that playback is light only, not audio

**Do not**

- Spy-thriller language
- Claiming sound that does not exist
- Jargon without explanation

## Taglines

1. Say it with light
2. Dots, dashes and a patient lamp
3. Learn the old signals, silently
4. Every message is a flash
5. A lighthouse for your words

**Boilerplate:** Lampwick is a signalling-history site with a silent Morse translator, a painted lighthouse lamp that flashes messages and a tap pad for practice.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Play |
| secondaryCta | Swap |
| success | Message decoded |
| error | That symbol isn't in the code. Try again |
| empty | Nothing to translate. Type a message |

---
Source listing key `o:tool-morse-translator`. Rebuild with `python3 scripts/brand-kit/build.py o:tool-morse-translator`.
