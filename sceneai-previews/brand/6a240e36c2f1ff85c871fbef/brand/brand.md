# Plety — brand kit

*Speech-to-text and conversation intelligence API.* Generated from the SiteShelf listing **Plety** (The intelligence layer for clear decisions); every value below is read from that page, not invented.

> **The intelligence layer for clear decisions**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **pulse** glyph. A pulse line looks like an audio waveform. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#000000` | Page background |
| surface | `#3B2A7A` | Cards, panels, raised areas |
| text | `#9CA3AF` | Body and heading text |
| textMuted | `#FFFFFF` | Secondary text, captions |
| primary | `#0E4B6B` | Main actions, links, brand colour |
| secondary | `#FACC15` | Highlights, charts, second accent |
| border | `#FFFFFF` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#FACC15` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 8.27:1 | pass | pass |
| Muted text on background | 21.00:1 | pass | pass |
| Primary on background | 2.24:1 | fail | fail |
| Text on primary | 9.39:1 | pass | pass |
| Text on surface | 4.60:1 | pass | pass |

**Colours seen on the page** (share of use): `#000000` 89.6%, `#3B2A7A` 3.4%, `#0E4B6B` 3.4%, `#1C1C1E` 1.6%, `#0E7490` 1.3%, `#FFFFFF` 0.4%, `#9CA3AF` 0.3%, `#D1D5DB` 0.0%, `#6B7280` 0.0%, `#4ADE80` 0.0%

## Typography

- Headings: **Inter** (weight 500)
- Body: **Inter**

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Inter | 72 px | 500 | 77.76px | -2.16px |
| Heading / H2 | Inter | 48 px | 600 | 52.8px | -0.96px |
| Body | Inter | 16 px | 400 | normal | normal |
| Button | Inter | 16 px | 500 | normal | normal |
| Navigation | Inter | 20 px | 700 | normal | normal |

## Shape, space and motion

- Radius: sm 12 px, md 16 px, lg 24 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 3 px, 6 px, 8 px, 10 px, 12 px, 16 px, 20 px, 24 px, 32 px
- Layout: container 1280 px; breakpoints 768 px, 800 px, 1024 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** fast, precise, developer-friendly.

Sounds like an engineer explaining their API at a meetup: quick, exact and a touch dry. It talks about accuracy, speed and data privacy in numbers.

**Do**

- Quote accuracy and latency figures
- Answer privacy questions plainly
- Use short, technical sentences

**Do not**

- No vague claims about seamless integration
- Avoid anthropomorphising the AI
- Never promise perfect transcription

## Taglines

1. The intelligence layer for clear decisions
2. Speech to text, precisely
3. Real-time understanding, not guesses
4. Conversations your stack can use
5. Fast transcripts, honest accuracy

**Boilerplate:** Plety is a speech-to-text and conversation intelligence API that gives teams real-time understanding of calls and meetings, with transparent pricing and privacy.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Get started |
| secondaryCta | Read the docs |
| success | Transcript ready. |
| error | Transcription failed. Check the audio and retry. |
| empty | No transcripts yet. Send your first audio file. |

---
Source listing key `s:6a240e36c2f1ff85c871fbef`. Rebuild with `python3 scripts/brand-kit/build.py s:6a240e36c2f1ff85c871fbef`.
