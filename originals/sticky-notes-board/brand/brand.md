# Pinboard Lane — brand kit

*Digital corkboard for quick thoughts.* Generated from the SiteShelf listing **Sticky Notes Board** (Widgets); every value below is read from that page, not invented.

> **Pin it before you forget**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Nunito |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **target** glyph on a squircle tile. A pin-like target dot matches the pushpin and the notes it holds. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#2A2118` | Page background |
| surface | `#C8A574` | Cards, panels, raised areas |
| text | `#FFF8EA` | Body and heading text |
| textMuted | `#D9C9A8` | Secondary text, captions |
| primary | `#D2B6FF` | Main actions, links, brand colour |
| secondary | `#9BD5FF` | Highlights, charts, second accent |
| border | `#FFF8EA` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#5F5374` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 14.95:1 | pass | pass |
| Muted text on background | 9.68:1 | pass | pass |
| Primary on background | 8.93:1 | pass | pass |
| Text on primary | 11.11:1 | pass | pass |
| Text on surface | 2.19:1 | fail | fail |

**Colours seen on the page** (share of use): `#2A2118` 47.1%, `#C8A574` 41.7%, `#BF9863` 3.5%, `#D2B6FF` 1.5%, `#9BD5FF` 1.5%, `#FFF176` 1.4%, `#FF9EC7` 1.4%, `#9DF2C0` 1.4%, `#FFF8EA` 0.5%, `#FF8A8A` 0.0%

## Typography

- Headings: **Nunito** (weight 700)
- Body: **Caveat**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Caveat:wght@600&family=Nunito:wght@600;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Button | Nunito | 14 px | 700 | normal | normal |

## Shape, space and motion

- Radius: sm 2 px, md 12 px, lg 18 px, pill (fully rounded)
- Shadows: sm: `rgb(255, 255, 255) 0px 0px 0px 3px` · md: `rgba(0, 0, 0, 0.4) 0px 3px 4px 0px` · lg: `rgba(40, 25, 5, 0.3) 0px 10px 18px 0px, rgba(40, 25, 5, 0.25) 0px 2px 3px 0px`
- Spacing: base unit 4 px; common steps 6 px, 8 px, 10 px, 12 px, 14 px, 16 px
- Layout: container 1200 px; breakpoints 560 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** casual, scrappy, friendly.

Pinboard Lane sounds like a flatmate leaving notes on the fridge: casual, quick and a bit messy in the best way. Labels are short and the interface never tells you how to organise.

**Do**

- Use handwriting-friendly, small words
- Say what the action does: pin, move, bin
- Keep guidance to one line

**Do not**

- Do not enforce structure or tags
- Avoid corporate-productivity language
- Never delete without an undo

## Taglines

1. Pin it before you forget
2. A corkboard for your head
3. Notes, scattered on purpose
4. Stick it, move it, bin it
5. Thoughts, within reach

**Boilerplate:** Pinboard Lane is a digital corkboard where people pin, colour and rearrange sticky notes freely, with undo for deletions and keyboard control for quick moves.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Add note |
| secondaryCta | Undo |
| success | Note pinned to the board. |
| error | Could not move that note. Try again. |
| empty | The board is empty. Add your first note. |

---
Source listing key `o:sticky-notes-board`. Rebuild with `python3 scripts/brand-kit/build.py o:sticky-notes-board`.
