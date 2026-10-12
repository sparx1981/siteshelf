# Corner Table Cafe — brand kit

*Neighbourhood cafe that asks its regulars.* Generated from the SiteShelf listing **Live Poll Widget** (Widgets); every value below is read from that page, not invented.

> **Pull up a chair, cast a vote**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Bricolage Grotesque |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **cube** glyph on a squircle tile. A small cube reads as a table seen from the corner, which is the cafe's namesake. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#FFF7EA` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#2A1E0F` | Body and heading text |
| textMuted | `#C1330F` | Secondary text, captions |
| primary | `#F2512A` | Main actions, links, brand colour |
| secondary | `#F89F8A` | Highlights, charts, second accent |
| border | `#F0E2C8` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#6C281A` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 15.29:1 | pass | pass |
| Muted text on background | 5.27:1 | pass | pass |
| Primary on background | 3.30:1 | fail | pass |
| Text on primary | 5.60:1 | pass | pass |
| Text on surface | 16.27:1 | pass | pass |

**Colours seen on the page** (share of use): `#FFF7EA` 67.6%, `#FFFFFF` 31.2%, `#F2512A` 1.0%, `#2A1E0F` 0.2%, `#8A7656` 0.0%, `#C1330F` 0.0%, `#F89F8A` 0.0%, `#F0E2C8` 0.0%, `#0B0B0F` 0.0%, `#6C281A` 0.0%

## Typography

- Headings: **Bricolage Grotesque** (weight 800)
- Body: **Figtree**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@600;700;800&family=Figtree:wght@400;500;600;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Bricolage Grotesque | 34 px | 800 | 37.4px | -0.68px |
| Heading / H2 | Bricolage Grotesque | 16 px | 700 | normal | normal |
| Button | Figtree | 14 px | 600 | normal | normal |

## Shape, space and motion

- Radius: sm 9 px, md 14 px, lg 16 px, pill (fully rounded)
- Shadows: sm: `rgba(0, 0, 0, 0.12) 0px 1px 4px 0px` · md: `rgba(120, 70, 0, 0.12) 0px 20px 50px 0px` · lg: `rgba(0, 0, 0, 0.12) 0px 1px 4px 0px`
- Spacing: base unit 4 px; common steps 3 px, 6 px, 8 px, 10 px, 12 px, 14 px, 16 px, 18 px, 20 px
- Layout: container 1200 px; breakpoints 480 px
- Motion: 150 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** chatty, inclusive, sunny.

Sounds like the cafe owner chatting while pouring a coffee: curious, open and keen to hear everyone. Questions are short, results are shared openly and there's never a wrong answer.

**Do**

- Ask one short question at a time
- Show results as percentages and votes
- Thank people for voting by name of the menu item

**Do not**

- Do not use survey-speak like respondents
- Do not guilt people into voting
- Do not hide results

## Taglines

1. Pull up a chair, cast a vote
2. What should we cook next?
3. Your cafe, your menu
4. Vote for the pie. Or the soup.
5. The regulars decide

**Boilerplate:** Corner Table Cafe is a neighbourhood cafe that lets regulars vote on new menu items, from autumn soups to seasonal cakes, and shares the results openly in the shop.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Vote |
| secondaryCta | See results |
| success | Vote counted. Thanks for chipping in. |
| error | We couldn't record your vote. Please try again. |
| empty | No votes yet. Be the first. |

---
Source listing key `o:live-poll`. Rebuild with `python3 scripts/brand-kit/build.py o:live-poll`.
