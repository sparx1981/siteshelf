# The Lantern Keeper's Atlas — brand kit

*A novella to read page by page, by lamplight.* Generated from the SiteShelf listing **E-Book Reader** (App UI); every value below is read from that page, not invented.

> **The sea keeps a second map**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Lora |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **book** glyph on a squircle tile. An open book is the most direct picture of a reader built around a single novella. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#CFC8B8` | Page background |
| surface | `#FBF8F1` | Cards, panels, raised areas |
| text | `#231F19` | Body and heading text |
| textMuted | `#5F5A51` | Secondary text, captions |
| primary | `#D6532F` | Main actions, links, brand colour |
| secondary | `#E8A08D` | Highlights, charts, second accent |
| border | `#B7B0A2` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#60291C` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 9.84:1 | pass | pass |
| Muted text on background | 4.11:1 | fail | pass |
| Primary on background | 2.45:1 | fail | fail |
| Text on primary | 4.81:1 | pass | pass |
| Text on surface | 15.45:1 | pass | pass |

**Colours seen on the page** (share of use): `#CFC8B8` 59.1%, `#FBF8F1` 30.6%, `#EFE9DA` 6.0%, `#231F19` 4.2%, `#D6532F` 0.0%, `#5F5A51` 0.0%, `#E8A08D` 0.0%, `#B7B0A2` 0.0%, `#0B0B0F` 0.0%, `#60291C` 0.0%

## Typography

- Headings: **Lora** (weight 700)
- Body: **Lora**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Lora:wght@400;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Heading / H2 | Lora | 30 px | 700 | 36px | normal |
| Body | Lora | 20 px | 400 | 34px | normal |
| Button | Inter | 14 px | 500 | 19.6px | normal |
| Caption / eyebrow | Inter | 12 px | 600 | normal | 2.16px |

## Shape, space and motion

- Radius: sm 12 px, md 18 px, lg 18 px
- Shadows: sm: `rgba(0, 0, 0, 0.55) 0px 40px 90px -30px` · md: `rgba(0, 0, 0, 0.55) 0px 40px 90px -30px` · lg: `rgba(0, 0, 0, 0.55) 0px 40px 90px -30px`
- Spacing: base unit 4 px; common steps 6 px, 8 px, 10 px, 14 px, 16 px, 24 px, 36 px, 48 px, 64 px
- Layout: container 1200 px; breakpoints 560 px, 900 px
- Motion: 300 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** hushed, literary, patient.

Reads like a quiet marginal note in a well-loved book: low-voiced, a little mysterious and never in a hurry. The interface keeps out of the way so the story keeps the spotlight.

**Do**

- Write controls as short, unshowy labels the reader barely notices
- Borrow the novella's lantern and sea imagery sparingly
- Confirm actions in a single calm line

**Do not**

- Gamified streaks or reading targets
- Loud exclamations that break the spell
- Technical jargon about rendering or storage

## Taglines

1. The sea keeps a second map
2. Read on, the lamp is lit
3. One more page by lantern light
4. A story kept at Kestrel Point
5. Turn the page, mind the tide

**Boilerplate:** The Lantern Keeper's Atlas is a novella by Isolde Marchetti, set at a lonely lighthouse, presented in a paged reader with three themes and a chapter drawer.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Begin reading |
| secondaryCta | Open chapters |
| success | Bookmark kept. Your place is saved |
| error | This page would not turn. Try again |
| empty | No bookmarks yet. Tap the corner to keep one |

---
Source listing key `o:app-ebook-reader`. Rebuild with `python3 scripts/brand-kit/build.py o:app-ebook-reader`.
