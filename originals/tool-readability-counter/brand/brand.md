# Plainpage — brand kit

*Writing tools for clear prose.* Generated from the SiteShelf listing **Readability Counter** (Tools); every value below is read from that page, not invented.

> **Write it plain, then read it again**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Lora |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **book** glyph on a squircle tile. An open book stands for readers and clear pages. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F6F1E6` | Page background |
| surface | `#FFFDF8` | Cards, panels, raised areas |
| text | `#1C1A17` | Body and heading text |
| textMuted | `#5B564B` | Secondary text, captions |
| primary | `#0F6B66` | Main actions, links, brand colour |
| secondary | `#B88A10` | Highlights, charts, second accent |
| border | `#C9BEA4` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#9AC1BF` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 15.41:1 | pass | pass |
| Muted text on background | 6.48:1 | pass | pass |
| Primary on background | 5.62:1 | pass | pass |
| Text on primary | 6.33:1 | pass | pass |
| Text on surface | 17.08:1 | pass | pass |

**Colours seen on the page** (share of use): `#F6F1E6` 62.5%, `#FFFDF8` 32.2%, `#000000` 3.1%, `#9FB6D6` 0.8%, `#1C1A17` 0.4%, `#5A3515` 0.3%, `#EFE3CF` 0.2%, `#0F6B66` 0.2%, `#2A3A6A` 0.1%, `#B88A10` 0.1%

## Typography

- Headings: **Lora** (weight 600)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@500&family=Inter:wght@400;500;600&family=Lora:wght@400;600&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Lora | 52 px | 600 | 54.08px | normal |
| Heading / H2 | Inter | 13 px | 600 | normal | 1.3px |
| Body | Inter | 16 px | 400 | 24px | normal |
| Button | Inter | 14 px | 600 | normal | normal |
| Caption / eyebrow | Inter | 12 px | 600 | normal | 1.92px |

## Shape, space and motion

- Radius: sm 10 px, md 16 px, lg 20 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 4 px, 6 px, 8 px, 10 px, 12 px, 14 px, 16 px, 26 px, 44 px
- Layout: container 1240 px; breakpoints 560 px, 700 px, 980 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** plain, encouraging, exact.

Plainpage sounds like a good editor who would rather cut a word than praise one. It is direct, kind about drafts and specific about which sentence is too long.

**Do**

- Quote the sentence you are flagging
- Give counts and times as numbers
- Suggest one fix at a time

**Do not**

- Do not use grammar jargon
- Do not scold long sentences
- Do not claim to write for the user

## Taglines

1. Write it plain, then read it again
2. Count the words, trim the rest
3. Clear sentences, one at a time
4. See where readers get lost
5. Tighten the draft, keep your voice

**Boilerplate:** Plainpage is a writing workspace that counts words, estimates reading and speaking time, scores readability and flags overlong sentences, all without uploading any text.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Copy stats |
| secondaryCta | Clear |
| success | Stats copied. 412 words, a 3 minute read. |
| error | Nothing to copy yet. Paste or write some text first. |
| empty | Write or paste text to see your score. |

---
Source listing key `o:tool-readability-counter`. Rebuild with `python3 scripts/brand-kit/build.py o:tool-readability-counter`.
