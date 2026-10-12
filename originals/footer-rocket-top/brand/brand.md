# Starling Almanac — brand kit

*Quarterly almanac of small rockets and the people behind them.* Generated from the SiteShelf listing **Rocket Back-To-Top** (Footer); every value below is read from that page, not invented.

> **Every launch begins with a countdown**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Outfit |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **rocket** glyph on a squircle tile. A rocket is the obvious and joyful symbol for an almanac of small launches and a footer that blasts off. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#070B1F` | Page background |
| surface | `#101735` | Cards, panels, raised areas |
| text | `#AAB4E6` | Body and heading text |
| textMuted | `#EEF1FF` | Secondary text, captions |
| primary | `#5CE1FF` | Main actions, links, brand colour |
| secondary | `#C4CCF2` | Highlights, charts, second accent |
| border | `#26306B` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#2D6574` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 9.64:1 | pass | pass |
| Muted text on background | 17.33:1 | pass | pass |
| Primary on background | 12.70:1 | pass | pass |
| Text on primary | 12.79:1 | pass | pass |
| Text on surface | 8.68:1 | pass | pass |

**Colours seen on the page** (share of use): `#070B1F` 72.9%, `#101735` 16.6%, `#4B2AA8` 9.1%, `#5CE1FF` 0.3%, `#AAB4E6` 0.3%, `#FF7A2F` 0.2%, `#1A2250` 0.2%, `#EEF1FF` 0.2%, `#FFD24A` 0.1%, `#C084FC` 0.1%

## Typography

- Headings: **Outfit** (weight 800)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Outfit:wght@600;700;800&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Outfit | 84 px | 800 | 82.32px | -2.1px |
| Heading / H2 | Outfit | 22 px | 700 | normal | normal |
| Subheading / H3 | Outfit | 16 px | 700 | normal | normal |
| Body | Inter | 19 px | 400 | 30.4px | normal |
| Button | Outfit | 18 px | 700 | normal | normal |
| Caption / eyebrow | Inter | 13 px | 600 | normal | 1.3px |

## Shape, space and motion

- Radius: sm 20 px, md 20 px, lg 20 px, pill (fully rounded)
- Shadows: sm: `rgba(255, 122, 47, 0.8) 0px 14px 30px -12px` · md: `rgba(255, 122, 47, 0.8) 0px 14px 30px -12px` · lg: `rgba(255, 122, 47, 0.8) 0px 14px 30px -12px`
- Spacing: base unit 2 px; common steps 2 px, 4 px, 5 px, 10 px, 12 px, 18 px, 20 px, 22 px, 24 px
- Layout: container 1100 px; breakpoints 520 px, 860 px
- Motion: 150 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** wry, enthusiastic, historical.

Starling Almanac writes with the nerdy affection of a space-history society newsletter. Countdowns, mission names and tiny engineering anecdotes carry the story, with a wink at near-failures.

**Do**

- Use mission names and dates as hooks
- Tell the story of the engineers, not just the hardware
- Keep a dry countdown rhythm: three, two, one

**Do not**

- Do not use space-race hype or 'to infinity' puns
- Avoid unexplained acronyms
- Never sound like a launch-day press release

## Taglines

1. Every launch begins with a countdown
2. Small rockets, patient engineers
3. The missions that nearly did not fly
4. Ten, nine, scroll home
5. History from the launch pad up

**Boilerplate:** Starling Almanac is a quarterly publication celebrating small rockets, patient engineers and the missions that nearly did not fly, from Lantern-1 to the Tern Relay.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Launch to top |
| secondaryCta | Read the almanac |
| success | Liftoff. You are back at the top. |
| error | Ignition failed. Please press the button again. |
| empty | No missions in this issue yet. |

---
Source listing key `o:footer-rocket-top`. Rebuild with `python3 scripts/brand-kit/build.py o:footer-rocket-top`.
