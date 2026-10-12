# Phosphor — brand kit

*Developer portfolio built as a green-screen terminal.* Generated from the SiteShelf listing **Terminal Portfolio** (Portfolio); every value below is read from that page, not invented.

> **Type help to begin**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from IBM Plex Mono |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **chevrons** glyph on a squircle tile. A prompt chevron is the pure symbol of a command line. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#050805` | Page background |
| surface | `#0C130C` | Cards, panels, raised areas |
| text | `#39FF88` | Body and heading text |
| textMuted | `#27A95A` | Secondary text, captions |
| primary | `#39FF88` | Main actions, links, brand colour |
| secondary | `#1F8C4B` | Highlights, charts, second accent |
| border | `#1D2A1D` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#1F8C4B` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 15.18:1 | pass | pass |
| Muted text on background | 6.62:1 | pass | pass |
| Primary on background | 15.18:1 | pass | pass |
| Text on primary | 14.81:1 | pass | pass |
| Text on surface | 14.21:1 | pass | pass |

**Colours seen on the page** (share of use): `#050805` 99.4%, `#39FF88` 0.5%, `#1D2A1D` 0.1%, `#27A95A` 0.0%, `#1F8C4B` 0.0%

## Typography

- Headings: **IBM Plex Mono** (weight 500)
- Body: **IBM Plex Mono**
- Google Fonts: `https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;700&family=VT323&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Button | IBM Plex Mono | 12 px | 500 | normal | normal |

## Shape, space and motion

- Radius: sm 6 px, md 14 px, lg 14 px, pill (fully rounded)
- Shadows: sm: `color(srgb 0.223529 1 0.533333 / 0.3) 0px 0px 60px -10px` · md: `color(srgb 0.223529 1 0.533333 / 0.3) 0px 0px 60px -10px` · lg: `color(srgb 0.223529 1 0.533333 / 0.3) 0px 0px 60px -10px`
- Spacing: base unit 4 px; common steps 2 px, 4 px, 8 px, 10 px, 12 px, 14 px, 16 px, 18 px, 20 px
- Layout: container 1200 px; breakpoints 600 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** dry, technical, nostalgic.

Phosphor writes like a man page with a sense of humour: terse, lowercase-friendly and full of understated commands. It uses dry in-jokes for those who recognise them and plain help text for everyone else.

**Do**

- Answer commands with one clear line
- Offer help text without asking
- Use technical words accurately and sparingly

**Do not**

- Do not fake hacker slang
- Avoid long paragraphs in the terminal
- Never leave a command without feedback

## Taglines

1. Type help to begin
2. A portfolio you run
3. Booting a better CV
4. Green screens never die
5. Commands, not clicks

**Boilerplate:** Phosphor is a developer's portfolio disguised as a green-screen terminal, where projects, skills and contact details are all one typed command away.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Run help |
| secondaryCta | Switch theme |
| success | Theme set to amber. |
| error | Command not found. Type help for a list. |
| empty | No history yet. Type a command and press Enter. |

---
Source listing key `o:retro-terminal`. Rebuild with `python3 scripts/brand-kit/build.py o:retro-terminal`.
