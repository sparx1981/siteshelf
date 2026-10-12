# Chirpwell — brand kit

*Friendly social network with small, readable feeds.* Generated from the SiteShelf listing **Social Post Cards** (Cards); every value below is read from that page, not invented.

> **Say it, share it, chirp on**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Plus Jakarta Sans |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **chat** glyph on a squircle tile. A speech bubble is the network's core act of posting. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#EAF0F8` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#0F1A2B` | Body and heading text |
| textMuted | `#5B6B82` | Secondary text, captions |
| primary | `#2F6BFF` | Main actions, links, brand colour |
| secondary | `#FFB86B` | Highlights, charts, second accent |
| border | `#DDE5F0` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#FFB86B` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 15.23:1 | pass | pass |
| Muted text on background | 4.73:1 | pass | pass |
| Primary on background | 3.92:1 | fail | pass |
| Text on primary | 4.50:1 | fail | pass |
| Text on surface | 17.46:1 | pass | pass |

**Colours seen on the page** (share of use): `#EAF0F8` 70.1%, `#FFFFFF` 27.3%, `#FFB86B` 0.5%, `#FF5E7E` 0.5%, `#2B3A67` 0.4%, `#1B2547` 0.4%, `#0F1A2B` 0.4%, `#FFF3C4` 0.2%, `#5B6B82` 0.1%, `#2F6BFF` 0.0%

## Typography

- Headings: **Plus Jakarta Sans** (weight 700)
- Body: **Plus Jakarta Sans**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Plus Jakarta Sans | 22 px | 700 | 33px | normal |
| Body | Plus Jakarta Sans | 15 px | 400 | 22.5px | normal |
| Button | Plus Jakarta Sans | 13.3 px | 400 | normal | normal |
| Caption / eyebrow | Plus Jakarta Sans | 12.5 px | 400 | 18.75px | normal |

## Shape, space and motion

- Radius: sm 10 px, md 12 px, lg 16 px, pill (fully rounded)
- Shadows: sm: `rgb(255, 233, 168) 0px 0px 60px 0px` · md: `rgb(255, 233, 168) 0px 0px 60px 0px` · lg: `rgb(255, 233, 168) 0px 0px 60px 0px`
- Spacing: base unit 4 px; common steps 6 px, 8 px, 10 px, 12 px, 14 px, 16 px
- Layout: container 1200 px; breakpoints 600 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** chatty, lighthearted, quick.

Sounds like a friend writing a quick post: casual, brief and happy to react. It keeps feedback instant and tidy, never pushy about engagement.

**Do**

- Use short, conversational verbs like repost and mute
- Acknowledge actions immediately and offer undo
- Keep counts in plain numbers

**Do not**

- Engagement bait like smash that like
- Algorithm talk
- Shaming for muting or leaving

## Taglines

1. Say it, share it, chirp on
2. Home to small good conversations
3. Posts that feel like people
4. Your feed, your pace
5. Where the quay gets chatty

**Boilerplate:** Chirpwell is a friendly social network built around short posts, polls and link previews, with quick reactions and an easy way to mute what you do not want.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Post |
| secondaryCta | Show more |
| success | Reposted. Nicely shared |
| error | Couldn't post. Try again |
| empty | Nothing here yet. Follow someone |

---
Source listing key `o:social-post-cards`. Rebuild with `python3 scripts/brand-kit/build.py o:social-post-cards`.
