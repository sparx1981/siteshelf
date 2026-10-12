# Ember — brand kit

*Account sign-in for a creative platform.* Generated from the SiteShelf listing **Welcome back** (Sign in); every value below is read from that page, not invented.

> **Welcome back**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **flame** glyph on a circle tile. A small flame matches the name and warms a plain black sign-in screen. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#000000` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#9CA3AF` | Body and heading text |
| textMuted | `#656A72` | Secondary text, captions |
| primary | `#FF512F` | Main actions, links, brand colour |
| secondary | `#7A2A10` | Highlights, charts, second accent |
| border | `#E5E7EB` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#7A2A10` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 8.27:1 | pass | pass |
| Muted text on background | 3.86:1 | fail | pass |
| Primary on background | 6.47:1 | pass | pass |
| Text on primary | 6.05:1 | pass | pass |
| Text on surface | 2.54:1 | fail | fail |

**Colours seen on the page** (share of use): `#000000` 51.4%, `#FFFFFF` 28.7%, `#7A2A10` 7.3%, `#1A0F1C` 7.3%, `#FF512F` 2.6%, `#2A1030` 2.0%, `#F09819` 0.6%, `#6B7280` 0.0%, `#9CA3AF` 0.0%, `#EA4335` 0.0%

## Typography

- Headings: **Inter** (weight 600)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Inter | 40 px | 600 | normal | -1.2px |
| Button | Inter | 15 px | 500 | normal | normal |

## Shape, space and motion

- Radius: sm 20 px, md 40 px, lg 50 px, pill (fully rounded)
- Shadows: sm: `rgba(255, 255, 255, 0.2) 0px 2px 8px 0px inset` · md: `rgba(0, 0, 0, 0.45) 0px 30px 80px 0px` · lg: `rgba(255, 255, 255, 0.2) 0px 2px 8px 0px inset`
- Spacing: base unit 2 px; common steps 2 px, 6 px, 8 px, 10 px, 12 px, 14 px, 16 px, 18 px, 20 px
- Layout: container 1040 px; breakpoints 820 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** welcoming, brief, warm.

Ember greets people by name and gets out of the way. It is short, warm and clear about what happens next, with a glow that never shouts.

**Do**

- Greet in one short line
- Name the sign-in method on each button
- Explain errors without blame

**Do not**

- Do not add marketing to a sign-in screen
- Avoid long privacy paragraphs
- Never ask for more than needed

## Taglines

1. Welcome back
2. Pick up where you left off
3. Sign in, then get going
4. Your work is waiting
5. Back to the glow

**Boilerplate:** Ember is a creative platform whose sign-in screen welcomes returning users with one-tap Google and X sign-in and nothing else in the way.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Continue with Google |
| secondaryCta | Continue with X |
| success | Signed in. Welcome back. |
| error | Could not sign you in. Please try again. |
| empty | No account found for that email. |

---
Source listing key `s:6a27f1f0c2f1ff85c871fc6c`. Rebuild with `python3 scripts/brand-kit/build.py s:6a27f1f0c2f1ff85c871fc6c`.
