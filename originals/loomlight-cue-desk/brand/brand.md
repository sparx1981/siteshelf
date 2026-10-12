# Loomlight — brand kit

*Rehearsal desk for stage lighting sequences.* Generated from the SiteShelf listing **Loomlight Cue Desk** (Tools); every value below is read from that page, not invented.

> **Shape the next moment**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Space Grotesk |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **bolt** glyph on a circle tile. A bolt of light reflects stage power and a fast crossfade. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#171923` | Page background |
| surface | `#20222E` | Cards, panels, raised areas |
| text | `#B4B1C2` | Body and heading text |
| textMuted | `#F4F1E9` | Secondary text, captions |
| primary | `#DCC480` | Main actions, links, brand colour |
| secondary | `#809CCB` | Highlights, charts, second accent |
| border | `#393B49` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#63593E` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 8.34:1 | pass | pass |
| Muted text on background | 15.51:1 | pass | pass |
| Primary on background | 10.21:1 | pass | pass |
| Text on primary | 11.46:1 | pass | pass |
| Text on surface | 7.53:1 | pass | pass |

**Colours seen on the page** (share of use): `#171923` 93.0%, `#2D2C2C` 2.5%, `#FFFFFF` 0.9%, `#DB9765` 0.7%, `#809CCB` 0.7%, `#000000` 0.6%, `#F4F1E9` 0.5%, `#DCC480` 0.4%, `#393B49` 0.4%, `#B4B1C2` 0.3%

## Typography

- Headings: **Space Grotesk** (weight 500)
- Body: **DM Sans**
- Google Fonts: `https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Space+Grotesk:wght@500;600&family=IBM+Plex+Mono:wght@400&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Space Grotesk | 42 px | 500 | 46.2px | -1.26px |
| Heading / H2 | Space Grotesk | 22 px | 500 | normal | normal |
| Body | DM Sans | 14 px | 400 | 21px | normal |
| Button | DM Sans | 14 px | 700 | 21px | normal |
| Caption / eyebrow | DM Sans | 12 px | 400 | 18px | normal |

## Shape, space and motion

- Radius: sm 4 px, md 6 px, lg 10 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 2 px; common steps 2 px, 7 px, 10 px, 12 px, 14 px, 15 px, 18 px, 20 px, 22 px
- Layout: container 1260 px; breakpoints 700 px, 760 px, 950 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** precise, theatrical, quiet.

Sounds like a stage manager calling cues: terse, ordered and calm. Numbers and times are the language, adjectives are rare.

**Do**

- Number every cue and name it in two words
- Give levels and fade times in figures
- Use present-tense, imperative calls

**Do not**

- No flowery lighting poetry
- No emoji
- No guessing at levels, always show the number

## Taglines

1. Shape the next moment
2. Light in motion, rehearsed
3. Cue by cue, fade by fade
4. A small rehearsal for big light
5. House lights down, story up

**Boilerplate:** Loomlight is a rehearsal desk for stage lighting, letting designers arrange three-channel cues, set levels and run timed crossfades before they ever touch a rig.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Run sequence |
| secondaryCta | Stop |
| success | Cue saved at 55 / 10 / 80 |
| error | Fade could not run, check the cue levels |
| empty | No cues in this sequence yet |

---
Source listing key `o:loomlight-cue-desk`. Rebuild with `python3 scripts/brand-kit/build.py o:loomlight-cue-desk`.
