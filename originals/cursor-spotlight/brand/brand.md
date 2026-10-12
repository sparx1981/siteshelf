# Afterglow — brand kit

*Studio for dark-mode interfaces and light effects.* Generated from the SiteShelf listing **Cursor Spotlight Hero** (Hero Section); every value below is read from that page, not invented.

> **Find the light in the dark**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Syne |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **spark** glyph on a squircle tile. A single spark is the light that appears wherever the cursor goes. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#07080C` | Page background |
| surface | `#151824` | Cards, panels, raised areas |
| text | `#F4F1FF` | Body and heading text |
| textMuted | `#A19FAA` | Secondary text, captions |
| primary | `#8B5CF6` | Main actions, links, brand colour |
| secondary | `#22D3EE` | Highlights, charts, second accent |
| border | `#3A3F4D` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#22D3EE` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 17.99:1 | pass | pass |
| Muted text on background | 7.68:1 | pass | pass |
| Primary on background | 4.73:1 | pass | pass |
| Text on primary | 4.64:1 | pass | pass |
| Text on surface | 15.89:1 | pass | pass |

**Colours seen on the page** (share of use): `#07080C` 78.8%, `#151824` 9.8%, `#3B4263` 9.8%, `#8B5CF6` 0.6%, `#22D3EE` 0.6%, `#3A3F4D` 0.2%, `#F4F1FF` 0.1%, `#A19FAA` 0.0%

## Typography

- Headings: **Syne** (weight 800)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Inter:wght@400;500&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Syne | 129.6 px | 800 | 123.12px | -5.184px |
| Body | Inter | 19 px | 400 | 29.45px | normal |
| Button | Inter | 16 px | 500 | normal | normal |

## Shape, space and motion

- Radius: sm 0 px, md 0 px, lg 0 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 14 px, 24 px, 28 px, 36 px, 40 px, 72 px, 140 px
- Layout: container 1100 px; breakpoints 700 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** moody, precise, quiet.

Afterglow writes in low light: few words, lots of space, and one bright idea per line. It invites you to move and discover, treating the reader as someone who enjoys finding things.

**Do**

- Use one short sentence per idea
- Invite action with a verb, such as explore, move, look
- Let whitespace do part of the talking

**Do not**

- Do not over-explain the effect
- Avoid neon-cliché words like 'cyber' or 'glitch'
- Never use more than two lines of body text

## Taglines

1. Find the light in the dark
2. Move closer. It gets brighter
3. Details that wait to be found
4. Dark by design, bright on purpose
5. Follow the glow

**Boilerplate:** Afterglow is a small design studio crafting dark, interactive interfaces where light, motion and hidden details reward the people who explore them.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Start exploring |
| secondaryCta | See the work |
| success | Found it. Nicely done. |
| error | The light went out. Refresh to relight it. |
| empty | Nothing revealed here yet. Keep moving. |

---
Source listing key `o:cursor-spotlight`. Rebuild with `python3 scripts/brand-kit/build.py o:cursor-spotlight`.
