# Slow Signal — brand kit

*Podcast about quiet people and their craft.* Generated from the SiteShelf listing **Podcast Show Notes** (Blog); every value below is read from that page, not invented.

> **Listen slowly**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Bricolage Grotesque |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **wave** glyph on a squircle tile. A single soft wave stands for a signal traveling slowly, like the show's audio and its pace. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F3EFE8` | Page background |
| surface | `#FFFDF9` | Cards, panels, raised areas |
| text | `#231F1A` | Body and heading text |
| textMuted | `#5A5348` | Secondary text, captions |
| primary | `#B83F1C` | Main actions, links, brand colour |
| secondary | `#0D4A4A` | Highlights, charts, second accent |
| border | `#DDD5C6` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#E1AEA0` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 14.29:1 | pass | pass |
| Muted text on background | 6.63:1 | pass | pass |
| Primary on background | 4.87:1 | pass | pass |
| Text on primary | 5.58:1 | pass | pass |
| Text on surface | 16.12:1 | pass | pass |

**Colours seen on the page** (share of use): `#F3EFE8` 65.2%, `#FFFDF9` 26.7%, `#0D4A4A` 4.4%, `#E8CF94` 1.4%, `#231F1A` 0.6%, `#000000` 0.6%, `#E0D3B5` 0.4%, `#FF8A63` 0.4%, `#5A5348` 0.2%, `#E7DFCF` 0.2%

## Typography

- Headings: **Bricolage Grotesque** (weight 700)
- Body: **Inter**
- Mono: **IBM Plex Mono**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@700&family=IBM+Plex+Mono:wght@500&family=Inter:wght@400;500;600&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Bricolage Grotesque | 54 px | 700 | 55.62px | normal |
| Heading / H2 | Bricolage Grotesque | 20 px | 700 | normal | normal |
| Body | Inter | 16.5 px | 400 | 25.575px | normal |
| Button | Arial | 13.3 px | 400 | normal | normal |
| Caption / eyebrow | Inter | 12 px | 600 | normal | 1.92px |
| Mono | IBM Plex Mono | 13 px | 500 | normal | normal |

## Shape, space and motion

- Radius: sm 8 px, md 12 px, lg 16 px, pill (fully rounded)
- Shadows: sm: `rgb(221, 213, 198) 0px 0px 0px 1.5px` · md: `rgba(13, 74, 74, 0.7) 0px 26px 44px -26px` · lg: `rgb(221, 213, 198) 0px 0px 0px 1.5px`
- Spacing: base unit 2 px; common steps 2 px, 3 px, 6 px, 8 px, 10 px, 12 px, 14 px, 16 px, 18 px
- Layout: container 1240 px; breakpoints 520 px, 980 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** curious, unhurried, literate.

Slow Signal writes the way its host talks: patient, observant and a little wry. Show notes read like a good caption in a field notebook, precise about who said what and when.

**Do**

- Give timestamps and speaker names for every claim
- Open with the question the guest answers, not the guest's CV
- Keep descriptions to a calm paragraph

**Do not**

- No clickbait titles or 'you will not believe'
- Do not summarise a quote that can simply be quoted
- Avoid 'epic', 'amazing' and other podcast filler

## Taglines

1. Listen slowly
2. Conversations worth the long way round
3. Episodes for the unhurried
4. Maps, makers and quiet minds
5. Turn it down and lean in

**Boilerplate:** Slow Signal is a long-form podcast of unhurried conversations with makers, mapmakers and other careful people, with full transcripts, chapters and resource lists for every episode.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Play episode |
| secondaryCta | Read transcript |
| success | Link copied to your clipboard. |
| error | The transcript did not load. Refresh and try again. |
| empty | No matches in this transcript. Try another word. |

---
Source listing key `o:blog-show-notes`. Rebuild with `python3 scripts/brand-kit/build.py o:blog-show-notes`.
