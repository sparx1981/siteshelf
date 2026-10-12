# Harborlight Outfitters — brand kit

*Outdoor kit shop for all weathers.* Generated from the SiteShelf listing **Mega Footer** (Footer); every value below is read from that page, not invented.

> **Kit for whatever the forecast says**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Epilogue |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **peak** glyph. A mountain peak is the simplest sign of hills, weather and getting outside. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F6F3EC` | Page background |
| surface | `#10201C` | Cards, panels, raised areas |
| text | `#566660` | Body and heading text |
| textMuted | `#1E2A26` | Secondary text, captions |
| primary | `#5FE0B7` | Main actions, links, brand colour |
| secondary | `#17302A` | Highlights, charts, second accent |
| border | `#25423A` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#17302A` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 5.47:1 | pass | pass |
| Muted text on background | 13.40:1 | pass | pass |
| Primary on background | 1.48:1 | fail | fail |
| Text on primary | 12.00:1 | pass | pass |
| Text on surface | 2.78:1 | fail | fail |

**Colours seen on the page** (share of use): `#F6F3EC` 67.3%, `#10201C` 30.5%, `#17302A` 1.7%, `#5FE0B7` 0.2%, `#9DB8AE` 0.1%, `#CFE1D9` 0.1%, `#566660` 0.1%, `#FFC666` 0.0%, `#2AA6C9` 0.0%, `#2B1C00` 0.0%

## Typography

- Headings: **Epilogue** (weight 800)
- Body: **Public Sans**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Epilogue:wght@500;700;800&family=Public+Sans:wght@400;500;600&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Epilogue | 60 px | 800 | 63px | -1.8px |
| Heading / H2 | Epilogue | 40 px | 800 | 44px | -0.8px |
| Subheading / H3 | Epilogue | 13 px | 700 | normal | 1.3px |
| Body | Public Sans | 16 px | 400 | 25.6px | normal |
| Button | Epilogue | 15 px | 700 | normal | normal |

## Shape, space and motion

- Radius: sm 4 px, md 10 px, lg 12 px, pill (fully rounded)
- Shadows: sm: `rgba(0, 0, 0, 0) 0px 0px 0px 5.23376px` · md: `rgba(0, 0, 0, 0) 0px 0px 0px 5.23376px` · lg: `rgba(0, 0, 0, 0) 0px 0px 0px 5.23376px`
- Spacing: base unit 4 px; common steps 4 px, 6 px, 8 px, 10 px, 12 px, 14 px, 18 px, 22 px, 24 px
- Layout: container 1160 px; breakpoints 720 px, 1000 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** rugged, friendly, dry-humoured.

Talks like a shop owner who has been out in the rain and says so: practical, a little wry and honest about gear. Sentences are short and boots-on-the-ground.

**Do**

- Name the weather or terrain in the copy
- Recommend gear by what it does, not what it is
- Keep humour dry and short

**Do not**

- No hype about extreme adventure
- Avoid fashion language
- Never pretend a forecast is a promise

## Taglines

1. Kit for whatever the forecast says
2. Go outside. We've got you
3. Gear that's been out in it
4. Rain-tested, shop-approved
5. Out the door, prepared for anything

**Boilerplate:** Harborlight Outfitters is an independent outdoor kit shop supplying jackets, boots and camp gear to people who go outside whatever the forecast says.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Subscribe |
| secondaryCta | Shop the range |
| success | You're on the list. See you fortnightly. |
| error | That didn't go through. Check your email and retry. |
| empty | Nothing in your bag yet. Time to gear up. |

---
Source listing key `o:footer-mega`. Rebuild with `python3 scripts/brand-kit/build.py o:footer-mega`.
