# Marigold Press — brand kit

*Independent bookshop and café.* Generated from the SiteShelf listing **Footer with Newsletter Split** (Footer); every value below is read from that page, not invented.

> **Letters from the back room**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Bricolage Grotesque |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **book** glyph on a circle tile. A book mark is the clearest shorthand for a bookshop and sits well on mustard yellow. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#FAF6EA` | Page background |
| surface | `#17140D` | Cards, panels, raised areas |
| text | `#5D5646` | Body and heading text |
| textMuted | `#17140D` | Secondary text, captions |
| primary | `#FFD84D` | Main actions, links, brand colour |
| secondary | `#4ADE80` | Highlights, charts, second accent |
| border | `#3A3628` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#716129` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 6.74:1 | pass | pass |
| Muted text on background | 17.01:1 | pass | pass |
| Primary on background | 1.28:1 | fail | fail |
| Text on primary | 14.20:1 | pass | pass |
| Text on surface | 2.53:1 | fail | fail |

**Colours seen on the page** (share of use): `#FAF6EA` 61.5%, `#17140D` 21.2%, `#FFD84D` 16.3%, `#FFFFFF` 0.7%, `#5D5646` 0.2%, `#A39D8D` 0.1%, `#4ADE80` 0.0%, `#3A3628` 0.0%, `#716129` 0.0%

## Typography

- Headings: **Bricolage Grotesque** (weight 800)
- Body: **DM Sans**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@700;800&family=DM+Sans:wght@400;500;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Bricolage Grotesque | 56 px | 800 | 58.8px | normal |
| Heading / H2 | Bricolage Grotesque | 56 px | 800 | 56px | -1.12px |
| Subheading / H3 | DM Sans | 13 px | 700 | normal | 1.82px |
| Body | DM Sans | 16 px | 400 | 25.6px | normal |
| Button | DM Sans | 17 px | 700 | normal | normal |
| Navigation | DM Sans | 13.5 px | 400 | 21.6px | normal |

## Shape, space and motion

- Radius: sm 10 px, md 14 px, lg 14 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 2 px, 8 px, 10 px, 12 px, 14 px, 16 px, 18 px, 20 px, 30 px
- Layout: container 1100 px; breakpoints 700 px, 1000 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** bookish, cheerful, cosy.

Marigold Press writes like a bookseller leaning on the counter: friendly, a bit self-deprecating about the to-read pile, and generous with recommendations. It sounds like someone who actually read the book.

**Do**

- Recommend with a real reason in one line
- Joke gently about unread books and long lists
- Use shop words: shelf, counter, stack, cup

**Do not**

- Do not use marketing words like content or engagement
- Avoid hard sells and discount shouting
- Never promise more email than you send

## Taglines

1. Letters from the back room
2. Books, coffee and a long to-read pile
3. Read something slow today
4. Independent shelves, strong coffee
5. Come in, pull up a chair

**Boilerplate:** Marigold Press is an independent bookshop and café with a loyal mailing list, sending occasional letters about new arrivals, events and what the staff are reading.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Subscribe |
| secondaryCta | Visit the shop |
| success | You are on the list. Pull up a chair. |
| error | That email does not look right. Please check it. |
| empty | No letters yet. The next one is coming. |

---
Source listing key `o:footer-newsletter-split`. Rebuild with `python3 scripts/brand-kit/build.py o:footer-newsletter-split`.
