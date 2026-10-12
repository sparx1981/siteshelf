# Tabstop — brand kit

*Keyboard-first workspace with a command palette.* Generated from the SiteShelf listing **Command Palette** (App UI); every value below is read from that page, not invented.

> **Everything is one keystroke away**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **bolt** glyph on a squircle tile. A bolt of lightning signals speed, the one promise a command palette makes. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#0E0F13` | Page background |
| surface | `#16181E` | Cards, panels, raised areas |
| text | `#8A90A0` | Body and heading text |
| textMuted | `#E7E9EE` | Secondary text, captions |
| primary | `#8A90A0` | Main actions, links, brand colour |
| secondary | `#BFC2CB` | Highlights, charts, second accent |
| border | `#262932` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#40434C` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 6.00:1 | pass | pass |
| Muted text on background | 15.77:1 | pass | pass |
| Primary on background | 6.00:1 | pass | pass |
| Text on primary | 6.15:1 | pass | pass |
| Text on surface | 5.56:1 | pass | pass |

**Colours seen on the page** (share of use): `#0E0F13` 99.8%, `#8A90A0` 0.1%, `#E7E9EE` 0.1%, `#BFC2CB` 0.0%, `#262932` 0.0%, `#40434C` 0.0%

## Typography

- Headings: **Inter** (weight 600)
- Body: **Inter**
- Mono: **JetBrains Mono**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Inter | 30 px | 600 | 36px | -0.6px |
| Body | Inter | 15 px | 400 | 22.5px | normal |
| Button | Inter | 15 px | 400 | 22.5px | normal |
| Caption / eyebrow | Inter | 12.5 px | 400 | 18.75px | normal |
| Mono | JetBrains Mono | 12 px | 500 | normal | normal |

## Shape, space and motion

- Radius: sm 6 px, md 8 px, lg 12 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 6 px, 8 px, 9 px, 10 px, 14 px, 16 px, 18 px, 20 px, 28 px
- Layout: container 1200 px; breakpoints 700 px
- Motion: 250 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** efficient, terse, dry.

Writes like a good terminal: minimal, literal and quietly witty. Every word earns its keystroke, and keyboard hints are part of the sentence.

**Do**

- Name actions as verbs a user would type
- Show the shortcut alongside the label
- Keep toast messages under six words

**Do not**

- No mouse-first instructions
- Avoid decoration or filler adjectives
- Never explain a shortcut the user just used

## Taglines

1. Everything is one keystroke away
2. Type less, do more
3. Press K to begin
4. The workspace that listens to your keys
5. Fast hands, calm screen

**Boilerplate:** Tabstop is a keyboard-first team workspace built around a command palette that finds any page, person or action in a couple of keystrokes.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Open command palette |
| secondaryCta | Switch theme |
| success | Done. Theme set to light. |
| error | No such command. Try another word. |
| empty | No recent commands. Press Cmd K to start. |

---
Source listing key `o:command-palette`. Rebuild with `python3 scripts/brand-kit/build.py o:command-palette`.
