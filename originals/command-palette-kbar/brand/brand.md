# Parcel — brand kit

*Dashboard for shipments, with a command palette.* Generated from the SiteShelf listing **Command Palette with Nested Pages** (Components); every value below is read from that page, not invented.

> **Search it. Run it. Done.**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **cube** glyph on a squircle tile. A cube is a parcel at its simplest, and it works as a tiny app icon. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#ECEFF4` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#0F172A` | Body and heading text |
| textMuted | `#5C6371` | Secondary text, captions |
| primary | `#4F46E5` | Main actions, links, brand colour |
| secondary | `#9E99F1` | Highlights, charts, second accent |
| border | `#E2E8F0` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#9E99F1` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 15.49:1 | pass | pass |
| Muted text on background | 5.24:1 | pass | pass |
| Primary on background | 5.46:1 | pass | pass |
| Text on primary | 6.29:1 | pass | pass |
| Text on surface | 17.85:1 | pass | pass |

**Colours seen on the page** (share of use): `#ECEFF4` 77.6%, `#FFFFFF` 17.2%, `#4F46E5` 5.1%, `#64748B` 0.1%, `#0F172A` 0.0%, `#5C6371` 0.0%, `#9E99F1` 0.0%

## Typography

- Headings: **Inter** (weight 700)
- Body: **Inter**
- Mono: **JetBrains Mono**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@500&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Inter | 22 px | 700 | 33px | normal |
| Button | Inter | 15 px | 400 | 22.5px | normal |
| Caption / eyebrow | Inter | 12.5 px | 400 | 18.75px | normal |
| Mono | JetBrains Mono | 12 px | 500 | normal | normal |

## Shape, space and motion

- Radius: sm 6 px, md 12 px, lg 14 px
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 6 px, 10 px, 12 px, 14 px, 16 px, 20 px, 28 px
- Layout: container 960 px; breakpoints 640 px
- Motion: 300 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** quick, neat, knowing.

Parcel sounds like a power user's best shortcut: compact, imperative and lightly nerdy. Labels are verbs, hints are keys, and nothing takes longer to read than to press.

**Do**

- Use imperative verbs for every command
- Show the shortcut beside the action
- Keep result groups short and scannable

**Do not**

- Do not explain what the keyboard already shows
- Avoid exclamation marks and emoji
- Never bury the command under a menu name

## Taglines

1. Search it. Run it. Done.
2. Every action, one keystroke away
3. Ship faster from the keyboard
4. Type less, deliver more
5. Press K to go anywhere

**Boilerplate:** Parcel is a shipment-tracking dashboard with a keyboard-first command palette that lets teams jump to any page, theme or action in a few keystrokes.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Search or run a command |
| secondaryCta | Open theme picker |
| success | Command ran. |
| error | No command matches that. Try a shorter word. |
| empty | No recent commands yet. |

---
Source listing key `o:command-palette-kbar`. Rebuild with `python3 scripts/brand-kit/build.py o:command-palette-kbar`.
