# Tabsplit — brand kit

*Bill splitter for dinners with friends.* Generated from the SiteShelf listing **Split The Bill** (App UI); every value below is read from that page, not invented.

> **Dinner for five, settled**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Fraunces |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **coins** glyph on a squircle tile. Coins say money without the stiffness of a bank, and they split nicely. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F3EFE6` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#26231C` | Body and heading text |
| textMuted | `#6A6454` | Secondary text, captions |
| primary | `#C48612` | Main actions, links, brand colour |
| secondary | `#7A4FE0` | Highlights, charts, second accent |
| border | `#CFC6AC` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#593F10` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 13.66:1 | pass | pass |
| Muted text on background | 5.14:1 | pass | pass |
| Primary on background | 2.70:1 | fail | fail |
| Text on primary | 6.33:1 | pass | pass |
| Text on surface | 15.68:1 | pass | pass |

**Colours seen on the page** (share of use): `#F3EFE6` 63.3%, `#FFFFFF` 35.0%, `#26231C` 0.6%, `#E0553A` 0.2%, `#C48612` 0.2%, `#7A4FE0` 0.2%, `#2F7D4F` 0.2%, `#6A6454` 0.2%, `#2A8FB8` 0.2%, `#CFC6AC` 0.0%

## Typography

- Headings: **Fraunces** (weight 700)
- Body: **Nunito**
- Google Fonts: `https://fonts.googleapis.com/css2?family=DM+Mono:wght@400&family=Fraunces:wght@600;700&family=Nunito:wght@400;700;800&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Fraunces | 54 px | 700 | 56.16px | -0.81px |
| Heading / H2 | Fraunces | 20 px | 700 | normal | normal |
| Subheading / H3 | Nunito | 12 px | 800 | normal | 1.44px |
| Body | Nunito | 18 px | 400 | 27px | normal |
| Button | Nunito | 15 px | 800 | 22.5px | normal |
| Caption / eyebrow | Nunito | 13 px | 800 | normal | 2.08px |

## Shape, space and motion

- Radius: sm 8 px, md 12 px, lg 18 px, pill (fully rounded)
- Shadows: sm: `rgba(60, 40, 10, 0.5) 0px 24px 50px -34px` · md: `rgba(60, 40, 10, 0.5) 0px 24px 50px -34px` · lg: `rgba(60, 40, 10, 0.5) 0px 24px 50px -34px`
- Spacing: base unit 2 px; common steps 3 px, 4 px, 6 px, 7 px, 8 px, 9 px, 10 px, 12 px, 16 px
- Layout: container 1100 px; breakpoints 520 px, 900 px
- Motion: 150 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** fair, cheerful, clear.

Tabsplit talks like the friend who is good with money and never makes it awkward. It is light, specific about who owes what, and always rounds in everyone's favour to the exact cent.

**Do**

- Name the person and the amount together
- Keep money words casual: 'owes', 'covers', 'settled'
- Show the maths in one short line

**Do not**

- Do not shame anyone for what they ordered
- Do not use banking jargon
- Do not leave a missing cent unexplained

## Taglines

1. Dinner for five, settled
2. Everyone pays their share, to the cent
3. Tap the dish, skip the spreadsheet
4. Splitting the bill without splitting friends
5. Who owes whom, sorted

**Boilerplate:** Tabsplit is an itemised bill splitter that shares dishes, tax and tip fairly between friends and shows exactly who owes whom.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Copy summary |
| secondaryCta | Everyone |
| success | Settled. Odette gets back 14.20 and nobody is out of pocket. |
| error | The shares do not add up to the total yet. Check the last dish. |
| empty | No dishes yet. Add the first line from the receipt. |

---
Source listing key `o:app-split-bill`. Rebuild with `python3 scripts/brand-kit/build.py o:app-split-bill`.
