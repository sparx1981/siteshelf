# Quillboard — brand kit

*Project boards for planning, reading and notes.* Generated from the SiteShelf listing **Typewriter Boot Loader** (Loaders); every value below is read from that page, not invented.

> **Good morning. Three boards are ready.**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Bricolage Grotesque |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **chevrons** glyph. A prompt-style chevron nods to the boot log that opens the product. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#0A0D12` | Page background |
| surface | `#F4F1EA` | Cards, panels, raised areas |
| text | `#E9E4D8` | Body and heading text |
| textMuted | `#8D8A80` | Secondary text, captions |
| primary | `#7AD7FF` | Main actions, links, brand colour |
| secondary | `#7BE39A` | Highlights, charts, second accent |
| border | `#3A4658` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#3A6174` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 15.34:1 | pass | pass |
| Muted text on background | 5.63:1 | pass | pass |
| Primary on background | 12.04:1 | pass | pass |
| Text on primary | 12.15:1 | pass | pass |
| Text on surface | 1.12:1 | fail | fail |

**Colours seen on the page** (share of use): `#0A0D12` 49.8%, `#F4F1EA` 39.6%, `#131A24` 9.9%, `#FFFFFF` 0.3%, `#ECE6D6` 0.2%, `#6A6458` 0.1%, `#D9482B` 0.1%, `#4A55E8` 0.0%, `#0F8A73` 0.0%, `#8D8A80` 0.0%

## Typography

- Headings: **Bricolage Grotesque** (weight 800)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@600;700;800&family=Inter:wght@400;500&family=Space+Mono:wght@400;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Bricolage Grotesque | 48 px | 800 | 49.92px | -1.2px |
| Heading / H2 | Bricolage Grotesque | 20 px | 700 | normal | normal |
| Body | Inter | 16 px | 400 | 24px | normal |
| Button | Space Mono | 13 px | 700 | normal | normal |
| Caption / eyebrow | Inter | 13 px | 400 | 19.5px | normal |

## Shape, space and motion

- Radius: sm 8 px, md 12 px, lg 12 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 4 px, 6 px, 8 px, 10 px, 12 px, 14 px, 16 px, 18 px, 20 px
- Layout: container 1000 px; breakpoints 640 px
- Motion: 700 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** quick, wry, tidy.

Sounds like a terminal that likes you: terse boot lines with an occasional dry aside, then a friendly good morning. Status words are precise and the greeting is human.

**Do**

- Write status lines as short verb phrases
- Greet by name and name the day's count of tasks
- Use OK, WARN and READY as tag words

**Do not**

- Do not use real error codes for fun
- Do not overload the boot log with jokes
- Do not use corporate tool jargon

## Taglines

1. Good morning. Three boards are ready.
2. Boot up, start planning
3. Your boards, loaded in order
4. Plan the day. Skip the loading.
5. Quiet tools for tidy minds

**Boilerplate:** Quillboard is a project tool that organises launch plans, reading lists and garden notes into simple boards, greeting each morning with what is moving and what needs doing today.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Skip |
| secondaryCta | Replay |
| success | All systems OK. Boards ready. |
| error | Boot hung at step three. Replay to retry. |
| empty | No boards yet. Start one. |

---
Source listing key `o:loader-typewriter-boot`. Rebuild with `python3 scripts/brand-kit/build.py o:loader-typewriter-boot`.
