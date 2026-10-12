# Kinetic Type Lab — brand kit

*Playground of moving text effects.* Generated from the SiteShelf listing **Kinetic Type Lab** (Typography); every value below is read from that page, not invented.

> **Six small text effects**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Bricolage Grotesque |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **monogram** glyph on a squircle tile. A bold letter K is itself a moving shape of type. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#0D0D12` | Page background |
| surface | `#14141C` | Cards, panels, raised areas |
| text | `#F5F5FA` | Body and heading text |
| textMuted | `#8D8DA3` | Secondary text, captions |
| primary | `#FFB703` | Main actions, links, brand colour |
| secondary | `#8C6502` | Highlights, charts, second accent |
| border | `#25252F` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#8C6502` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 17.84:1 | pass | pass |
| Muted text on background | 5.97:1 | pass | pass |
| Primary on background | 11.10:1 | pass | pass |
| Text on primary | 11.25:1 | pass | pass |
| Text on surface | 16.85:1 | pass | pass |

**Colours seen on the page** (share of use): `#0D0D12` 99.1%, `#FFB703` 0.5%, `#F5F5FA` 0.2%, `#8D8DA3` 0.1%, `#B4B4C8` 0.1%, `#1A1200` 0.0%, `#8C6502` 0.0%, `#25252F` 0.0%

## Typography

- Headings: **Bricolage Grotesque** (weight 800)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,600;12..96,800&family=JetBrains+Mono:wght@400;500&family=Inter:wght@400;500&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Bricolage Grotesque | 34 px | 800 | normal | -1.02px |
| Body | Inter | 16 px | 400 | 24px | normal |
| Button | JetBrains Mono | 14 px | 500 | normal | normal |

## Shape, space and motion

- Radius: sm 12 px, md 24 px, lg 24 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 6 px, 8 px, 9 px, 12 px, 13 px, 14 px, 16 px, 18 px, 20 px
- Layout: container 980 px; breakpoints 640 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** playful, nerdy, energetic.

Kinetic Type Lab talks like a type designer on a good day: excited about letterforms and quick to share the trick. Sentences are short, active and full of motion verbs.

**Do**

- Describe each effect by what the letters do
- Use motion verbs: type, scramble, sweep, fill
- Show the editable text first

**Do not**

- Do not claim any effect is 'revolutionary'
- Do not explain the code in the headline
- Do not use more than one exclamation mark

## Taglines

1. Six small text effects
2. Pick one, change the words, replay
3. Letters with somewhere to be
4. Type that moves, on your terms
5. Make the words do something

**Boilerplate:** Kinetic Type Lab is a small showcase of six kinetic text effects built with CSS and JavaScript, which visitors can edit and replay.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Replay |
| secondaryCta | Word swap |
| success | Effect applied. Press Replay to watch it again. |
| error | That text is too long for this effect. Try fewer words. |
| empty | Type some words to see them move. |

---
Source listing key `o:text-effects`. Rebuild with `python3 scripts/brand-kit/build.py o:text-effects`.
