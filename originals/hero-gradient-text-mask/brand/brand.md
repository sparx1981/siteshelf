# STATIC PARADE — brand kit

*Three-day outdoor music festival.* Generated from the SiteShelf listing **Gradient Mask Headline** (Hero Section); every value below is read from that page, not invented.

> **Loud. Bright. Together.**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Bricolage Grotesque |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **pulse** glyph on a squircle tile. A pulse line is the beat of the weekend and stays legible in all capitals. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#0E0D14` | Page background |
| surface | `#17152A` | Cards, panels, raised areas |
| text | `#F3EFFF` | Body and heading text |
| textMuted | `#FFB84D` | Secondary text, captions |
| primary | `#FFB84D` | Main actions, links, brand colour |
| secondary | `#FF4D8D` | Highlights, charts, second accent |
| border | `#2A2744` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#715429` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 17.12:1 | pass | pass |
| Muted text on background | 11.24:1 | pass | pass |
| Primary on background | 11.24:1 | pass | pass |
| Text on primary | 11.43:1 | pass | pass |
| Text on surface | 15.80:1 | pass | pass |

**Colours seen on the page** (share of use): `#0E0D14` 94.5%, `#17152A` 2.5%, `#FF4D8D` 1.1%, `#FFB84D` 0.7%, `#4DE3FF` 0.7%, `#8A5BFF` 0.4%, `#F3EFFF` 0.1%, `#C9C4E4` 0.0%, `#2A2744` 0.0%, `#715429` 0.0%

## Typography

- Headings: **Bricolage Grotesque** (weight 800)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@800&family=Inter:wght@400;500;600&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Bricolage Grotesque | 144 px | 800 | 129.6px | -5.76px |
| Heading / H2 | Bricolage Grotesque | 30 px | 800 | 33px | normal |
| Navigation | Inter | 14 px | 500 | 22.4px | normal |

## Shape, space and motion

- Radius: sm 14 px, md 14 px, lg 14 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 6 px, 8 px, 9 px, 10 px, 12 px, 16 px, 18 px, 22 px, 40 px
- Layout: container 1500 px; breakpoints 800 px
- Motion: 400 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** loud, joyful, communal.

Shouts in a good way: big, rhythmic and friendly, like a megaphone at the gate. Words repeat and stack, and everything points at being together in the same field.

**Do**

- Use short punchy fragments in capitals
- Repeat key words for rhythm
- Always mention the crowd or the field

**Do not**

- No corporate sponsor speak
- Avoid quiet hedging
- Never use more than two words per beat

## Taglines

1. Loud. Bright. Together.
2. Three days. One very big field
3. Doors open, volume up
4. Bring your friends and a jumper
5. The field is calling

**Boilerplate:** STATIC PARADE is a three-day music weekend held in one very big field, bringing loud, bright, communal performances to thousands of festival-goers.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Get tickets |
| secondaryCta | See the line-up |
| success | You're in. Tickets are on their way. |
| error | Something jammed. Try the ticket button again. |
| empty | No acts announced yet. Check back soon. |

---
Source listing key `o:hero-gradient-text-mask`. Rebuild with `python3 scripts/brand-kit/build.py o:hero-gradient-text-mask`.
