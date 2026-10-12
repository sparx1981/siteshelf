# Huddle Square — brand kit

*Friendly social feed with expressive reactions.* Generated from the SiteShelf listing **Emoji Reaction Bar** (Form Controls); every value below is read from that page, not invented.

> **React with a flourish**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Figtree |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **grid** glyph. A square grid of cells is a town square seen from above and the name made literal. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F0F2F8` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#1B2133` | Body and heading text |
| textMuted | `#5A6480` | Secondary text, captions |
| primary | `#FFB48A` | Main actions, links, brand colour |
| secondary | `#1B2133` | Highlights, charts, second accent |
| border | `#DFE3EF` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#1B2133` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 14.30:1 | pass | pass |
| Muted text on background | 5.26:1 | pass | pass |
| Primary on background | 1.54:1 | fail | fail |
| Text on primary | 11.36:1 | pass | pass |
| Text on surface | 16.01:1 | pass | pass |

**Colours seen on the page** (share of use): `#F0F2F8` 95.7%, `#FFB48A` 1.0%, `#E9C07A` 0.5%, `#B9772F` 0.5%, `#9BC7E6` 0.5%, `#B7D4E6` 0.5%, `#5B2A6E` 0.5%, `#1B2133` 0.4%, `#D99A4E` 0.3%, `#FFF0B8` 0.3%

## Typography

- Headings: **Figtree** (weight 800)
- Body: **Figtree**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Figtree:wght@500;600;700;800&family=Inter:wght@400;500&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Figtree | 54 px | 800 | 56.16px | -1.62px |
| Body | Figtree | 18 px | 500 | 27px | normal |
| Button | Figtree | 14 px | 700 | normal | normal |
| Caption / eyebrow | Figtree | 13 px | 800 | normal | 2.08px |

## Shape, space and motion

- Radius: sm 6 px, md 14 px, lg 20 px, pill (fully rounded)
- Shadows: sm: `rgb(255, 255, 255) 0px 0px 0px 5px` · md: `rgba(27, 33, 51, 0.5) 0px 18px 40px -30px` · lg: `rgba(27, 33, 51, 0.45) 0px 18px 40px -10px`
- Spacing: base unit 4 px; common steps 2 px, 6 px, 7 px, 8 px, 10 px, 12 px, 16 px, 18 px, 20 px
- Layout: container 1200 px; breakpoints 520 px
- Motion: 150 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** warm, lively, inclusive.

Sounds like a neighbour leaning over the fence: cheerful, informal and generous with praise. It gives people small, delightful ways to say how they feel.

**Do**

- Celebrate other people's posts in the interface text
- Keep reaction labels to one friendly word
- Use contractions and a light touch of humour

**Do not**

- No sarcasm in reaction feedback
- Avoid pressure to react
- Do not use more than one emoji in a sentence

## Taglines

1. React with a flourish
2. Say it with a little pop
3. Every post deserves a reaction
4. Gather round, say something
5. The square where neighbours cheer

**Boilerplate:** Huddle Square is a friendly social feed where neighbours share posts and respond with six hand-drawn reactions that pop, float and are announced for everyone.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Add reaction |
| secondaryCta | Show all reactions |
| success | Reaction added. Your neighbour will love it. |
| error | That reaction did not stick. Try again. |
| empty | No reactions yet. Be the first. |

---
Source listing key `o:control-emoji-reactions`. Rebuild with `python3 scripts/brand-kit/build.py o:control-emoji-reactions`.
