# Daybreak — brand kit

*Pocket-size local news app.* Generated from the SiteShelf listing **Pull-to-Refresh Feed** (Loaders); every value below is read from that page, not invented.

> **The day's news, first light**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Manrope |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **spark** glyph on a squircle tile. A rising spark reads as first light over the horizon. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#DFE3EA` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#12151C` | Body and heading text |
| textMuted | `#9D174D` | Secondary text, captions |
| primary | `#FF6A2B` | Main actions, links, brand colour |
| secondary | `#9D174D` | Highlights, charts, second accent |
| border | `#101216` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#9D174D` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 14.19:1 | pass | pass |
| Muted text on background | 6.13:1 | pass | pass |
| Primary on background | 2.22:1 | fail | fail |
| Text on primary | 6.87:1 | pass | pass |
| Text on surface | 18.26:1 | pass | pass |

**Colours seen on the page** (share of use): `#DFE3EA` 78.3%, `#FFFFFF` 20.0%, `#12151C` 0.4%, `#FCE7F3` 0.3%, `#3B82F6` 0.2%, `#8B5CF6` 0.2%, `#EC4899` 0.2%, `#6B7280` 0.2%, `#DCFCE7` 0.2%, `#FFEDD5` 0.1%

## Typography

- Headings: **Manrope** (weight 800)
- Body: **Manrope**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Manrope:wght@500;700;800&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Manrope | 22 px | 800 | normal | -0.44px |
| Heading / H2 | Manrope | 15.5 px | 800 | 20.15px | normal |
| Button | Arial | 13.3 px | 400 | normal | normal |
| Caption / eyebrow | Manrope | 12.5 px | 500 | 18.125px | normal |

## Shape, space and motion

- Radius: sm 12 px, md 16 px, lg 36 px, pill (fully rounded)
- Shadows: sm: `rgba(0, 0, 0, 0.05) 0px 1px 2px 0px` · md: `rgba(16, 18, 22, 0.3) 0px 30px 70px 0px` · lg: `rgba(0, 0, 0, 0.05) 0px 1px 2px 0px`
- Spacing: base unit 2 px; common steps 2 px, 4 px, 6 px, 9 px, 10 px, 12 px, 14 px, 16 px, 18 px
- Layout: container 1200 px; breakpoints 460 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** brisk, fair, neighbourly.

Sounds like a morning radio bulletin: short headlines, plain verbs and no panic. Stories are local, specific and told in the order they matter.

**Do**

- Write headlines in 12 words or fewer, present tense
- Name the town and the thing
- Mark updates with a quiet count

**Do not**

- Do not use outrage bait
- Do not stack exclamation marks
- Do not use vague words like shocking

## Taglines

1. The day's news, first light
2. Pull down, get what's new
3. Local stories before breakfast
4. Small town, big headlines, no noise
5. Fresh stories, no fuss

**Boilerplate:** Daybreak is a mobile news app for local and curious readers that delivers short, carefully edited stories each morning and refreshes with a simple pull of the screen.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Refresh |
| secondaryCta | Open story |
| success | Three new stories added. |
| error | Couldn't refresh. Check your connection. |
| empty | You're all caught up. |

---
Source listing key `o:pull-to-refresh`. Rebuild with `python3 scripts/brand-kit/build.py o:pull-to-refresh`.
