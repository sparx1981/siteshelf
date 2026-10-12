# Stellar.ai — brand kit

*AI automation for teams.* Generated from the SiteShelf listing **Stellar AI** (Hero Section); every value below is read from that page, not invented.

> **Work smarter. Move faster**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **spark** glyph. A spark suggests a star and the instant of automation. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#FFFFFF` | Page background |
| surface | `#1B1740` | Cards, panels, raised areas |
| text | `#000000` | Body and heading text |
| textMuted | `#4B5563` | Secondary text, captions |
| primary | `#1A1033` | Main actions, links, brand colour |
| secondary | `#7A3A7E` | Highlights, charts, second accent |
| border | `#D1D5DB` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#7A3A7E` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 21.00:1 | pass | pass |
| Muted text on background | 7.56:1 | pass | pass |
| Primary on background | 18.01:1 | pass | pass |
| Text on primary | 18.01:1 | pass | pass |
| Text on surface | 1.24:1 | fail | fail |

**Colours seen on the page** (share of use): `#FFFFFF` 84.8%, `#1B1740` 13.2%, `#000000` 0.8%, `#6B7280` 0.2%, `#7A3A7E` 0.2%, `#522C68` 0.2%, `#2F1C4D` 0.2%, `#9CA3AF` 0.2%, `#4B5563` 0.1%, `#FFF0C4` 0.0%

## Typography

- Headings: **Inter** (weight 400)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Inter | 80 px | 400 | 88px | -2px |
| Subheading / H3 | Inter | 17 px | 600 | normal | normal |
| Body | Inter | 20 px | 400 | 31px | normal |
| Button | Inter | 14 px | 400 | normal | normal |
| Navigation | Inter | 18 px | 600 | normal | normal |

## Shape, space and motion

- Radius: sm 4 px, md 8 px, lg 16 px, pill (fully rounded)
- Shadows: sm: `rgba(0, 0, 0, 0.08) 0px 1px 2px 0px` · md: `rgba(0, 0, 0, 0.35) 0px 24px 60px 0px` · lg: `rgba(0, 0, 0, 0.08) 0px 1px 2px 0px`
- Spacing: base unit 4 px; common steps 4 px, 6 px, 8 px, 10 px, 12 px, 14 px, 16 px, 20 px, 24 px
- Layout: container 1280 px; breakpoints 480 px, 768 px, 1024 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** energetic, clear, approachable.

Talks like a friendly product marketer who respects your time: confident, plain and a bit upbeat. It focuses on tasks, time saved and tools you already use.

**Do**

- Lead with the saved time
- Mention the tools it syncs with
- Use short verbs like analyse and train

**Do not**

- No vague AI mystique
- Avoid acronym overload
- Never promise to replace people

## Taglines

1. Work smarter. Move faster
2. AI that powers you up
3. Automation that syncs with your tools
4. Save time, boost output
5. Less busywork, more finished work

**Boilerplate:** Stellar.ai is an AI automation platform that syncs with the tools teams already use, streamlining tasks, boosting output and saving time.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Get started free |
| secondaryCta | Begin free trial |
| success | Workflow created. You're live. |
| error | Couldn't connect that tool. Try again. |
| empty | No automations yet. Create your first workflow. |

---
Source listing key `m:stellar-ai`. Rebuild with `python3 scripts/brand-kit/build.py m:stellar-ai`.
