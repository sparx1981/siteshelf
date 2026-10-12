# Chirpwise — brand kit

*Social reach analytics for small teams.* Generated from the SiteShelf listing **Social Reach Analytics** (Dashboard); every value below is read from that page, not invented.

> **See who you reached and why**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Plus Jakarta Sans |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **chat** glyph on a squircle tile. A speech bubble represents posts and the conversation behind reach. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#FBF6F1` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#231A2E` | Body and heading text |
| textMuted | `#6B5D78` | Secondary text, captions |
| primary | `#D6246E` | Main actions, links, brand colour |
| secondary | `#127046` | Highlights, charts, second accent |
| border | `#EADFD3` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#EEA3C2` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 15.54:1 | pass | pass |
| Muted text on background | 5.65:1 | pass | pass |
| Primary on background | 4.51:1 | pass | pass |
| Text on primary | 4.84:1 | pass | pass |
| Text on surface | 16.68:1 | pass | pass |

**Colours seen on the page** (share of use): `#FBF6F1` 97.6%, `#231A2E` 0.8%, `#D6246E` 0.7%, `#A89BB5` 0.5%, `#E3F6EC` 0.2%, `#8D7E9A` 0.1%, `#6B5D78` 0.1%, `#5B2A86` 0.0%, `#FF8A3D` 0.0%, `#1FA3A3` 0.0%

## Typography

- Headings: **Plus Jakarta Sans** (weight 800)
- Body: **Plus Jakarta Sans**
- Google Fonts: `https://fonts.googleapis.com/css2?family=DM+Mono:wght@400&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Plus Jakarta Sans | 30 px | 800 | 33px | -0.6px |
| Heading / H2 | Plus Jakarta Sans | 17 px | 800 | normal | normal |
| Button | Plus Jakarta Sans | 13 px | 700 | normal | normal |
| Caption / eyebrow | Plus Jakarta Sans | 11.7 px | 600 | 17.5px | normal |

## Shape, space and motion

- Radius: sm 9 px, md 12 px, lg 18 px, pill (fully rounded)
- Shadows: sm: `rgba(0, 0, 0, 0.12) 0px 1px 4px 0px` · md: `rgba(0, 0, 0, 0.12) 0px 1px 4px 0px` · lg: `rgba(0, 0, 0, 0.12) 0px 1px 4px 0px`
- Spacing: base unit 2 px; common steps 2 px, 4 px, 6 px, 8 px, 10 px, 11 px, 12 px, 14 px, 16 px
- Layout: container 1240 px; breakpoints 900 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** bright, plainspoken, encouraging.

Chirpwise explains numbers the way a friendly strategist would over coffee. It leads with what rose or fell, names the post, and never buries a bad week under vanity metrics.

**Do**

- Say what changed and by how much
- Name the network and the post
- Compare with the previous period in plain words

**Do not**

- Do not call a small dip a 'crisis'
- Do not use 'engagement' without saying what was counted
- Do not celebrate vanity metrics

## Taglines

1. See who you reached and why
2. Reach, explained in plain words
3. Know which post earned its keep
4. Your audience, without the guesswork
5. Numbers that talk back kindly

**Boilerplate:** Chirpwise is an analytics tool that tracks reach across Loop, Frame and Chirp and shows small teams which posts are actually growing their audience.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Export |
| secondaryCta | Compare to previous period |
| success | Report exported. Your CSV is ready. |
| error | We could not load Frame data. Try again in a minute. |
| empty | No posts in this range. Try 28 days. |

---
Source listing key `o:dashboard-social-analytics`. Rebuild with `python3 scripts/brand-kit/build.py o:dashboard-social-analytics`.
