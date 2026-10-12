# Parsec OS — brand kit

*A boot-to-launch pre-release for a new operating system.* Generated from the SiteShelf listing **Terminal Boot Coming Soon** (Coming Soon); every value below is read from that page, not invented.

> **Boot sequence in progress**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from VT323 |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **chevrons** glyph on a squircle tile. Stacked chevrons echo a shell prompt, the first thing a terminal fan looks for. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#050805` | Page background |
| surface | `#10281A` | Cards, panels, raised areas |
| text | `#4ADE80` | Body and heading text |
| textMuted | `#2F8F55` | Secondary text, captions |
| primary | `#4ADE80` | Main actions, links, brand colour |
| secondary | `#297A46` | Highlights, charts, second accent |
| border | `#2F8F55` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#297A46` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 11.55:1 | pass | pass |
| Muted text on background | 4.97:1 | pass | pass |
| Primary on background | 11.55:1 | pass | pass |
| Text on primary | 11.27:1 | pass | pass |
| Text on surface | 8.99:1 | pass | pass |

**Colours seen on the page** (share of use): `#050805` 59.4%, `#10281A` 39.6%, `#4ADE80` 0.9%, `#2F8F55` 0.1%, `#297A46` 0.0%

## Typography

- Headings: **VT323** (weight 400)
- Body: **VT323**
- Mono: **VT323**
- Google Fonts: `https://fonts.googleapis.com/css2?family=VT323&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Mono | VT323 | 22 px | 400 | 22px | normal |

## Shape, space and motion

- Radius: sm 10 px, md 10 px, lg 10 px, pill (fully rounded)
- Shadows: sm: `color(srgb 0.290196 0.870588 0.501961 / 0.18) 0px 0px 50px 0px` · md: `color(srgb 0.290196 0.870588 0.501961 / 0.18) 0px 0px 50px 0px` · lg: `color(srgb 0.290196 0.870588 0.501961 / 0.18) 0px 0px 50px 0px`
- Spacing: base unit 4 px; common steps 2 px, 8 px, 12 px, 16 px, 20 px
- Layout: container 1200 px; breakpoints 600 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** terse, nerdy, dry.

Talks in command-line English: lowercase, clipped, with the odd dry joke. It treats the visitor as someone who prefers typing to clicking.

**Do**

- Write messages like system output, one line each
- Use verbs a shell would: boot, notify, launch
- Keep jokes understated and technical

**Do not**

- No marketing adjectives
- No emoji or exclamation marks
- No full paragraphs inside the terminal

## Taglines

1. Boot sequence in progress
2. Launch is a command away
3. Type help to begin
4. Your next OS is compiling
5. Systems nominal, countdown running

**Boilerplate:** Parsec OS is a forthcoming operating system for people who live in the terminal, previewed through a retro boot sequence and a countdown to launch.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | notify me |
| secondaryCta | help |
| success | ok: you are on the list |
| error | error: command not found, type help |
| empty | no history yet, try help |

---
Source listing key `o:coming-soon-terminal-boot`. Rebuild with `python3 scripts/brand-kit/build.py o:coming-soon-terminal-boot`.
