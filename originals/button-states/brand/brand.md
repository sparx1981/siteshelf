# Pressline — brand kit

*Interface buttons that show what they are doing.* Generated from the SiteShelf listing **Button Loading States** (Buttons); every value below is read from that page, not invented.

> **Every click deserves an answer**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter Bold (stand-in for Onest) |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **pulse** glyph on a squircle tile. A pulse line suggests a button's heartbeat as it moves through states. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F5F4F1` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#1D1C1A` | Body and heading text |
| textMuted | `#696865` | Secondary text, captions |
| primary | `#4338FF` | Main actions, links, brand colour |
| secondary | `#E5484D` | Highlights, charts, second accent |
| border | `#E6E3DC` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#B0ABFF` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 15.48:1 | pass | pass |
| Muted text on background | 5.07:1 | pass | pass |
| Primary on background | 5.88:1 | pass | pass |
| Text on primary | 6.46:1 | pass | pass |
| Text on surface | 17.03:1 | pass | pass |

**Colours seen on the page** (share of use): `#F5F4F1` 94.4%, `#4338FF` 2.2%, `#1D1C1A` 1.8%, `#2A2A3A` 1.3%, `#77736A` 0.2%, `#E5484D` 0.0%, `#E6E3DC` 0.0%, `#B0ABFF` 0.0%

## Typography

- Headings: **Onest** (weight 700)
- Body: **Onest**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Onest:wght@500;600;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Onest | 44 px | 700 | 46.2px | -1.32px |
| Body | Onest | 16 px | 500 | 24px | normal |
| Button | Onest | 15 px | 600 | normal | normal |

## Shape, space and motion

- Radius: sm 12 px, md 14 px, lg 18 px
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 6 px, 8 px, 16 px, 18 px, 20 px, 22 px, 26 px, 40 px
- Layout: container 1000 px; breakpoints 560 px, 860 px
- Motion: 100 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** exact, tactile, friendly.

Pressline speaks like a craftsperson who obsesses over a single click. It describes states in plain verbs and short beats: sending, sent, failed, undone.

**Do**

- Describe each state with one present or past verb
- Say what happens next in under six words
- Keep humour dry and tiny

**Do not**

- Do not use vague progress words like processing
- Avoid blaming the user when something fails
- Never over-celebrate a success

## Taglines

1. Every click deserves an answer
2. Six ways to say working
3. Buttons that tell the truth
4. Idle, loading, done, or failed
5. Feedback, one press at a time

**Boilerplate:** Pressline is a specimen collection of action buttons that move cleanly between idle, loading, success and error, designed for teams who care about feedback.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Replay all |
| secondaryCta | Reset |
| success | Sent. That was quick. |
| error | Did not send. Try again. |
| empty | No demos running. Press replay. |

---
Source listing key `o:button-states`. Rebuild with `python3 scripts/brand-kit/build.py o:button-states`.
