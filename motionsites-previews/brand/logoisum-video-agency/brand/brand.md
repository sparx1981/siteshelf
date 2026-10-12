# Logoisum — brand kit

*Short-form video editing for creators.* Generated from the SiteShelf listing **Logoisum Video Agency** (Agency); every value below is read from that page, not invented.

> **Make your reels impossible to scroll**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter Bold (stand-in for Barlow) |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **play** glyph on a circle tile. A play triangle is the universal symbol for video. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#120C2B` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#FFFFFF` | Body and heading text |
| textMuted | `#ACAAB5` | Secondary text, captions |
| primary | `#FF7A45` | Main actions, links, brand colour |
| secondary | `#C2306E` | Highlights, charts, second accent |
| border | `#332E49` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#713A26` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 18.86:1 | pass | pass |
| Muted text on background | 8.24:1 | pass | pass |
| Primary on background | 7.30:1 | pass | pass |
| Text on primary | 7.60:1 | pass | pass |
| Text on surface | 1.00:1 | fail | fail |

**Colours seen on the page** (share of use): `#120C2B` 96.3%, `#FFFFFF` 3.4%, `#222222` 0.3%, `#111111` 0.0%, `#FF7A45` 0.0%, `#C2306E` 0.0%, `#4B2A9A` 0.0%, `#ACAAB5` 0.0%, `#332E49` 0.0%, `#713A26` 0.0%

## Typography

- Headings: **Barlow** (weight 600)
- Body: **Barlow**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Barlow:wght@500;600;700&family=Instrument+Serif:ital@0;1&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Barlow | 32 px | 600 | 32px | normal |
| Body | Barlow | 18 px | 500 | 27px | normal |
| Button | Barlow | 17 px | 600 | normal | normal |
| Navigation | Barlow | 21 px | 700 | normal | -0.42px |

## Shape, space and motion

- Radius: sm 9 px, md 12 px, lg 16 px, pill (fully rounded)
- Shadows: sm: `rgba(0, 0, 0, 0.18) 0px 8px 30px 0px` · md: `rgba(0, 0, 0, 0.25) 0px 10px 36px 0px` · lg: `rgba(0, 0, 0, 0.18) 0px 8px 30px 0px`
- Spacing: base unit 2 px; common steps 6 px, 9 px, 10 px, 12 px, 16 px, 18 px, 20 px, 26 px, 34 px
- Layout: container 1180 px; breakpoints 879 px, 880 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** punchy, trend-aware, confident.

Logoisum sounds like an editor who lives in the timeline: fast, direct and fluent in creator slang without overdoing it. It speaks in hooks, cuts and views.

**Do**

- Use creator vocabulary like hooks, cuts and reels
- Lead with results for the creator
- Keep sentences short and rhythmic

**Do not**

- Use agency jargon
- Promise virality as a guarantee
- Over-explain the editing

## Taglines

1. Make your reels impossible to scroll
2. Cuts that keep people watching
3. Edited for the first three seconds
4. Short videos, big reach
5. Your story, cut to go viral

**Boilerplate:** Logoisum is a video editing agency that cuts short-form videos and reels for influencers, creators and brands, built around strong hooks and fast turnarounds.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | See Our Workreel |
| secondaryCta | Book a call |
| success | Brief received. We will be in touch. |
| error | That did not send. Please try again. |
| empty | No projects here yet. |

---
Source listing key `m:logoisum-video-agency`. Rebuild with `python3 scripts/brand-kit/build.py m:logoisum-video-agency`.
