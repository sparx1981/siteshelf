# Pipewise — brand kit

*CI pipeline monitoring for developers.* Generated from the SiteShelf listing **CI Pipeline Dashboard** (Dashboard); every value below is read from that page, not invented.

> **Every stage, every job, one view**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **chevrons** glyph on a circle tile. Chevrons mark the forward stages of a pipeline, and the lowercase wordmark matches the page. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#0D1117` | Page background |
| surface | `#151B23` | Cards, panels, raised areas |
| text | `#E6EDF3` | Body and heading text |
| textMuted | `#8B98A9` | Secondary text, captions |
| primary | `#3FB950` | Main actions, links, brand colour |
| secondary | `#D29922` | Highlights, charts, second accent |
| border | `#283241` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#21542A` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 16.02:1 | pass | pass |
| Muted text on background | 6.45:1 | pass | pass |
| Primary on background | 7.45:1 | pass | pass |
| Text on primary | 7.73:1 | pass | pass |
| Text on surface | 14.65:1 | pass | pass |

**Colours seen on the page** (share of use): `#0D1117` 97.5%, `#1C2430` 0.9%, `#E6EDF3` 0.5%, `#3FB950` 0.3%, `#3A4658` 0.2%, `#238636` 0.2%, `#8B98A9` 0.2%, `#283241` 0.1%, `#D29922` 0.1%, `#F85149` 0.0%

## Typography

- Headings: **Inter** (weight 700)
- Body: **JetBrains Mono**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Inter | 20 px | 700 | normal | normal |
| Heading / H2 | Inter | 15 px | 600 | normal | normal |
| Subheading / H3 | Inter | 11 px | 600 | normal | 1.1px |
| Button | Inter | 13 px | 600 | normal | normal |
| Caption / eyebrow | JetBrains Mono | 12 px | 500 | normal | normal |

## Shape, space and motion

- Radius: sm 7 px, md 10 px, lg 12 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 2 px, 4 px, 6 px, 8 px, 9 px, 10 px, 12 px, 14 px, 16 px
- Layout: container 1320 px; breakpoints single fluid layout
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** terse, technical, calm.

Pipewise talks like an on-call colleague who has already read the logs. It states the stage, the job and the duration, and keeps its tone even when a build is red.

**Do**

- Lead with the status and the job name
- Give durations in seconds or minutes, exactly
- Use code font for hashes, branches and commands

**Do not**

- Do not blame the author of a failing commit
- Do not hide flaky tests behind a green tick
- Do not use exclamation marks in logs

## Taglines

1. Every stage, every job, one view
2. Green builds, honest reds
3. Catch the flaky test first
4. Pipelines you can read at a glance
5. Fewer reruns, clearer runs

**Boilerplate:** Pipewise is a CI dashboard that shows staged pipelines, parallel jobs and flaky tests so developers can see exactly where a build slowed or failed.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Run pipeline |
| secondaryCta | Rerun failed jobs |
| success | Run #2842 passed in 6m 48s. |
| error | Run #2839 failed at Unit tests. Open the log for details. |
| empty | No runs yet. Push a commit to start one. |

---
Source listing key `o:dashboard-ci-pipeline`. Rebuild with `python3 scripts/brand-kit/build.py o:dashboard-ci-pipeline`.
