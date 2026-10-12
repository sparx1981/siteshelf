# Stillbank — brand kit

*Fictional field journal of fen, ridge and estuary.* Generated from the SiteShelf listing **Fieldnote Index** (Blog); every value below is read from that page, not invented.

> **Notes from the edges**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Newsreader |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **wave** glyph on a squircle tile. A gently rippled line suggests reeds bending in wind over still water. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F5F2E9` | Page background |
| surface | `#E7E9DC` | Cards, panels, raised areas |
| text | `#292F29` | Body and heading text |
| textMuted | `#62685A` | Secondary text, captions |
| primary | `#E1E7D3` | Main actions, links, brand colour |
| secondary | `#7C7F74` | Highlights, charts, second accent |
| border | `#D5D3C4` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#7C7F74` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 12.24:1 | pass | pass |
| Muted text on background | 5.14:1 | pass | pass |
| Primary on background | 1.13:1 | fail | fail |
| Text on primary | 15.50:1 | pass | pass |
| Text on surface | 11.15:1 | pass | pass |

**Colours seen on the page** (share of use): `#F5F2E9` 95.3%, `#E1E7D3` 3.2%, `#292F29` 1.2%, `#62685A` 0.1%, `#70815B` 0.1%, `#3C5840` 0.0%, `#7C7F74` 0.0%, `#D5D3C4` 0.0%, `#0B0B0F` 0.0%

## Typography

- Headings: **Newsreader** (weight 500)
- Body: **Newsreader**
- Google Fonts: `https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Newsreader:wght@400;500;600&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Newsreader | 60 px | 500 | 63px | -1.8px |
| Heading / H2 | Newsreader | 38 px | 500 | 43.7px | -0.76px |
| Body | Newsreader | 19 px | 400 | 32.3px | normal |
| Button | DM Sans | 14 px | 400 | 21px | normal |
| Caption / eyebrow | DM Sans | 12 px | 400 | 18px | normal |

## Shape, space and motion

- Radius: sm 2 px, md 6 px, lg 6 px
- Shadows: none used (flat)
- Spacing: base unit 2 px; common steps 4 px, 6 px, 7 px, 8 px, 9 px, 12 px, 14 px, 18 px, 22 px
- Layout: container 1260 px; breakpoints 700 px, 760 px, 900 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** quiet, attentive, literary.

Reads like a naturalist's notebook kept on a damp morning: precise observation, soft verbs and room to breathe. Dates, places and weather are always part of the sentence.

**Do**

- Open with place, date and weather
- Use concrete nouns from the landscape
- Keep paragraphs short and slow

**Do not**

- No hype or marketing verbs
- Avoid explaining the feeling of a place
- Do not use exclamation marks

## Taglines

1. Notes from the edges
2. Written where the land goes quiet
3. Reeds, ridges and tidelines
4. Field reports for slow readers
5. Keep a little of the fen

**Boilerplate:** Stillbank is a fictional field journal publishing reports from fen, ridge and estuary, with a reading notebook for collecting the passages that stay with you.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Save this passage |
| secondaryCta | Hide notebook |
| success | Passage saved to your notebook. |
| error | Could not save that passage. Please try again. |
| empty | Your notebook is empty. Save a passage as you read. |

---
Source listing key `o:fieldnote-index`. Rebuild with `python3 scripts/brand-kit/build.py o:fieldnote-index`.
