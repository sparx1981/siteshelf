# Mono & Moss — brand kit

*Loud independent studio for brands and sites.* Generated from the SiteShelf listing **Bold Agency Landing** (Landing Page); every value below is read from that page, not invented.

> **Brands that refuse to whisper**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter Bold (stand-in for Anton) |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **spark** glyph. A spark stands for the loud idea, and it sits comfortably next to a lime highlight block. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F2EFE8` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#0E0E0E` | Body and heading text |
| textMuted | `#6A675F` | Secondary text, captions |
| primary | `#C8FF2E` | Main actions, links, brand colour |
| secondary | `#FF5A36` | Highlights, charts, second accent |
| border | `#0E0E0E` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#FF5A36` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 16.81:1 | pass | pass |
| Muted text on background | 4.92:1 | pass | pass |
| Primary on background | 1.03:1 | fail | fail |
| Text on primary | 16.65:1 | pass | pass |
| Text on surface | 19.30:1 | pass | pass |

**Colours seen on the page** (share of use): `#F2EFE8` 50.6%, `#FFFFFF` 15.0%, `#C8FF2E` 13.1%, `#0E0E0E` 7.7%, `#1F4D3A` 3.0%, `#FF5A36` 3.0%, `#3B3BD6` 3.0%, `#F6C945` 3.0%, `#FFD8A8` 0.8%, `#7BE0C3` 0.8%

## Typography

- Headings: **Anton** (weight 400)
- Body: **DM Sans**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Anton&family=DM+Sans:wght@400;500;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Anton | 180 px | 400 | 165.6px | normal |
| Heading / H2 | Anton | 88 px | 400 | 83.6px | normal |
| Body | DM Sans | 18 px | 400 | 27.9px | normal |
| Button | Anton | 72 px | 400 | 72px | normal |
| Navigation | Anton | 22 px | 400 | normal | normal |
| Caption / eyebrow | DM Sans | 14 px | 700 | normal | normal |

## Shape, space and motion

- Radius: sm 18 px, md 50 px, lg 50 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 2 px, 6 px, 8 px, 12 px, 14 px, 16 px, 18 px, 20 px, 24 px
- Layout: container 1300 px; breakpoints 700 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** brash, playful, confident.

Mono & Moss shouts on purpose, in short capitalised punches and verbs that start fights with boring design. It sounds like a studio that knows it is good and would rather be remembered than liked.

**Do**

- Lead with a verb and cut every sentence to its loudest half
- Pair one big claim with one small, dry joke
- Name the work (brand, site, motion) before the adjective

**Do not**

- Do not whisper or hedge with maybe or perhaps
- Never pad with corporate phrases like synergy or solutions
- Avoid long paragraphs; stop at three lines

## Taglines

1. Brands that refuse to whisper
2. Make noise. Get remembered
3. Loud work for quiet categories
4. Designers, writers and engineers, turned up
5. Beige is not a strategy

**Boilerplate:** Mono & Moss is an independent studio of designers, writers and engineers making identities, websites, motion, packaging and campaigns with a very loud voice.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Start a project |
| secondaryCta | Copy email |
| success | Copied. Now say something loud. |
| error | Nope. Try that again, louder. |
| empty | No work here yet. Rude, we know. |

---
Source listing key `o:agency-landing-bold`. Rebuild with `python3 scripts/brand-kit/build.py o:agency-landing-bold`.
