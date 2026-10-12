# Railroad.ai — brand kit

*Attention-focus guide for a distracted world.* Generated from the SiteShelf listing **Railroad.ai** (Hero Section); every value below is read from that page, not invented.

> **Focus in a constantly distracted world**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter Bold (stand-in for -apple-system) |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **chevrons** glyph on a circle tile. Chevrons read as rails stretching ahead, matching the railroad name and the forward focus. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#85A7D1` | Page background |
| surface | `#081428` | Cards, panels, raised areas |
| text | `#2D3939` | Body and heading text |
| textMuted | `#060E13` | Secondary text, captions |
| primary | `#0F2346` | Main actions, links, brand colour |
| secondary | `#7B8699` | Highlights, charts, second accent |
| border | `#7998BC` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#7B8699` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 4.81:1 | pass | pass |
| Muted text on background | 7.82:1 | pass | pass |
| Primary on background | 6.26:1 | pass | pass |
| Text on primary | 15.57:1 | pass | pass |
| Text on surface | 1.54:1 | fail | fail |

**Colours seen on the page** (share of use): `#85A7D1` 97.7%, `#FFFFFF` 0.8%, `#081428` 0.7%, `#0F2346` 0.5%, `#2D3939` 0.3%, `#000000` 0.0%, `#7B8699` 0.0%, `#7998BC` 0.0%

## Typography

- Headings: **-apple-system** (weight 400)
- Body: **-apple-system**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Barlow:wght@300;400;500;600&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | -apple-system | 88 px | 400 | 74.8px | -4px |
| Body | -apple-system | 21 px | 400 | 24.15px | -1.05px |
| Button | -apple-system | 14 px | 500 | normal | normal |
| Navigation | -apple-system | 24 px | 500 | normal | -0.6px |

## Shape, space and motion

- Radius: sm 0 px, md 0 px, lg 0 px, pill (fully rounded)
- Shadows: sm: `rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset` · md: `rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset` · lg: `rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset`
- Spacing: base unit 4 px; common steps 4 px, 6 px, 8 px, 10 px, 12 px, 16 px, 20 px, 24 px, 32 px
- Layout: container 1200 px; breakpoints 520 px, 768 px, 1024 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** steady, clear, contrarian.

A guide pulling you away from the noise: calm, direct and quietly firm. It uses railway imagery for routes and momentum, never urgency.

**Do**

- Name distractions plainly, such as notifications and feeds
- Offer one clear next step
- Use travel and track metaphors lightly

**Do not**

- Alarmist claims about technology
- Hustle culture talk
- Hard-sell waitlist pressure

## Taglines

1. Focus in a constantly distracted world
2. Stay on track, ignore the noise
3. Reclaim your attention, one route at a time
4. Meaningful work, full steam
5. Quiet tracks to deep work

**Boilerplate:** Railroad.ai helps people cut through notifications, endless feeds and interruptions to reclaim attention and do meaningful work that matters.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Get started |
| secondaryCta | Join waitlist |
| success | You're on the waitlist. All aboard |
| error | That didn't work. Please try again |
| empty | No voyages yet. Start your first |

---
Source listing key `m:railroad-ai`. Rebuild with `python3 scripts/brand-kit/build.py m:railroad-ai`.
