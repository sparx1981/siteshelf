# Plainsight — brand kit

*Account app whose settings stay simple and visible.* Generated from the SiteShelf listing **Settings Page** (App UI); every value below is read from that page, not invented.

> **Everything you can change, in plain sight**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter Bold (stand-in for Public Sans) |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **diamond** glyph. A clean diamond suggests clarity, like a lens, and stays neutral for a settings brand. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F5F6F8` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#667085` | Body and heading text |
| textMuted | `#101828` | Secondary text, captions |
| primary | `#3B6CFF` | Main actions, links, brand colour |
| secondary | `#D92D20` | Highlights, charts, second accent |
| border | `#E4E7EC` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#1F3474` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 4.60:1 | pass | pass |
| Muted text on background | 16.41:1 | pass | pass |
| Primary on background | 4.07:1 | fail | pass |
| Text on primary | 4.47:1 | fail | pass |
| Text on surface | 4.97:1 | pass | pass |

**Colours seen on the page** (share of use): `#F5F6F8` 96.5%, `#101828` 2.5%, `#3B6CFF` 0.4%, `#D92D20` 0.3%, `#667085` 0.2%, `#7C5CFF` 0.1%, `#12A150` 0.1%, `#E4E7EC` 0.0%, `#0B0B0F` 0.0%, `#1F3474` 0.0%

## Typography

- Headings: **Public Sans** (weight 700)
- Body: **Public Sans**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;500;600;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Public Sans | 28 px | 700 | 33.6px | normal |
| Heading / H2 | Public Sans | 18 px | 600 | normal | normal |
| Subheading / H3 | Public Sans | 16 px | 700 | 24px | normal |
| Body | Public Sans | 15 px | 400 | 22.5px | normal |
| Button | Public Sans | 15 px | 600 | normal | normal |

## Shape, space and motion

- Radius: sm 6 px, md 14 px, lg 16 px, pill (fully rounded)
- Shadows: sm: `rgb(59, 108, 255) 3px 0px 0px 0px inset, rgb(228, 231, 236) 0px 0px 0px 1px` · md: `rgba(0, 0, 0, 0.4) 0px 20px 50px 0px` · lg: `rgb(59, 108, 255) 3px 0px 0px 0px inset, rgb(228, 231, 236) 0px 0px 0px 1px`
- Spacing: base unit 2 px; common steps 2 px, 6 px, 8 px, 9 px, 10 px, 12 px, 14 px, 16 px, 18 px
- Layout: container 1040 px; breakpoints 800 px
- Motion: 300 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** lucid, trustworthy, low-key.

A calm admin voice: clear labels, neutral tone and no surprises. It explains consequences before you click and confirms afterwards.

**Do**

- Explain what each toggle changes
- Warn clearly before destructive actions
- Confirm saved changes with a single sentence

**Do not**

- Playful jokes next to account deletion
- Hidden defaults
- Passive blame like invalid input

## Taglines

1. Everything you can change, in plain sight
2. Your account, your rules
3. Settings that explain themselves
4. Change it. Check it. Done
5. Control without confusion

**Boilerplate:** Plainsight is an account platform whose settings pages group profile, notifications, appearance, security and billing in one clear, reversible place.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Save changes |
| secondaryCta | Discard |
| success | Changes saved |
| error | That email looks invalid. Check and retry |
| empty | No notifications set. Choose what to hear |

---
Source listing key `o:settings-page`. Rebuild with `python3 scripts/brand-kit/build.py o:settings-page`.
