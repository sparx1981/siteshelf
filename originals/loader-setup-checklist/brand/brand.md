# Kestrel — brand kit

*Workspace platform with guided onboarding.* Generated from the SiteShelf listing **Workspace Setup Loader** (Loaders); every value below is read from that page, not invented.

> **Setting up, one step at a time**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Sora |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **target** glyph on a squircle tile. A target reflects the hovering focus of a kestrel and a setup that hits each step. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#10122B` | Page background |
| surface | `#262A6B` | Cards, panels, raised areas |
| text | `#E9EBFF` | Body and heading text |
| textMuted | `#AAB0E6` | Secondary text, captions |
| primary | `#7C8CFF` | Main actions, links, brand colour |
| secondary | `#262A6B` | Highlights, charts, second accent |
| border | `#FFFFFF` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#262A6B` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 15.56:1 | pass | pass |
| Muted text on background | 8.80:1 | pass | pass |
| Primary on background | 6.17:1 | pass | pass |
| Text on primary | 6.60:1 | pass | pass |
| Text on surface | 10.94:1 | pass | pass |

**Colours seen on the page** (share of use): `#10122B` 79.6%, `#262A6B` 19.9%, `#7C8CFF` 0.2%, `#E9EBFF` 0.1%, `#AAB0E6` 0.1%, `#4ADE80` 0.0%, `#052E16` 0.0%, `#FFFFFF` 0.0%, `#0B0B0F` 0.0%

## Typography

- Headings: **Sora** (weight 700)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Sora:wght@600;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Sora | 26 px | 700 | normal | normal |
| Caption / eyebrow | Inter | 12.5 px | 400 | 18.75px | normal |

## Shape, space and motion

- Radius: sm 22 px, md 22 px, lg 22 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 2 px; common steps 2 px, 3 px, 4 px, 8 px, 10 px, 12 px, 14 px, 22 px, 24 px
- Layout: container 1200 px; breakpoints 480 px
- Motion: 300 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** focused, steady, helpful.

Kestrel keeps onboarding quiet and specific: it names each step, shows what it is doing right now and says how long is left. Failure is explained in plain terms with a clear retry.

**Do**

- Name the step in progress with a real verb
- Give time estimates in seconds or minutes
- Offer a retry on every failure

**Do not**

- Do not say 'magic' or 'just a moment'
- Avoid cute loading jokes
- Never leave a failed step unexplained

## Taglines

1. Setting up, one step at a time
2. Ready in under a minute
3. Your workspace, taking shape
4. Nothing to do but watch
5. Set up properly, then go

**Boilerplate:** Kestrel is a team workspace platform whose guided setup creates projects, invites teammates and connects tools in about a minute, with clear progress at every step.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Open workspace |
| secondaryCta | Retry step |
| success | Workspace ready. |
| error | This step failed. Retry, or skip for now. |
| empty | No steps to run yet. |

---
Source listing key `o:loader-setup-checklist`. Rebuild with `python3 scripts/brand-kit/build.py o:loader-setup-checklist`.
