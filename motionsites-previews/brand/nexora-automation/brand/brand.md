# Nexora — brand kit

*AI agents that automate repetitive work.* Generated from the SiteShelf listing **Nexora Automation** (SaaS); every value below is read from that page, not invented.

> **Automation that works while you don't**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Instrument Serif |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **spark** glyph. A spark shows an intelligent assistant and fits the star in the page's logo. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#FFFFFF` | Page background |
| surface | `#252B31` | Cards, panels, raised areas |
| text | `#252B31` | Body and heading text |
| textMuted | `#5C6566` | Secondary text, captions |
| primary | `#6467F2` | Main actions, links, brand colour |
| secondary | `#16A34A` | Highlights, charts, second accent |
| border | `#E6E6E6` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#30326E` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 14.30:1 | pass | pass |
| Muted text on background | 5.99:1 | pass | pass |
| Primary on background | 4.41:1 | fail | pass |
| Text on primary | 4.46:1 | fail | pass |
| Text on surface | 1.00:1 | fail | fail |

**Colours seen on the page** (share of use): `#FFFFFF` 99.2%, `#252B31` 0.4%, `#6467F2` 0.2%, `#5C6566` 0.1%, `#DCFCE7` 0.1%, `#FEF3C7` 0.0%, `#166534` 0.0%, `#16A34A` 0.0%, `#DC2626` 0.0%, `#92400E` 0.0%

## Typography

- Headings: **Instrument Serif** (weight 400)
- Body: **Inter**
- Mono: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Instrument Serif | 80 px | 400 | 76px | -2px |
| Subheading / H3 | Inter | 14 px | 600 | normal | normal |
| Body | Inter | 18 px | 400 | 29.25px | normal |
| Button | Inter | 14 px | 500 | normal | normal |
| Navigation | Inter | 20 px | 600 | normal | -0.5px |
| Caption / eyebrow | Inter | 12 px | 400 | normal | -0.44px |
| Mono | Inter | 10 px | 400 | normal | normal |

## Shape, space and motion

- Radius: sm 4 px, md 8 px, lg 10 px, pill (fully rounded)
- Shadows: sm: `rgba(0, 0, 0, 0.08) 0px 2px 12px 0px` · md: `rgba(0, 0, 0, 0.08) 0px 25px 80px -12px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px` · lg: `rgba(0, 0, 0, 0.08) 0px 2px 12px 0px`
- Spacing: base unit 2 px; common steps 2 px, 4 px, 5 px, 6 px, 7 px, 8 px, 10 px, 12 px, 14 px
- Layout: container 1024 px; breakpoints 600 px, 640 px, 768 px, 1024 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** bright, capable, friendly.

Sounds like a smart colleague explaining automation without jargon: calm, optimistic and specific about busywork. It promises time back for what matters and avoids sci-fi hype.

**Do**

- Name the busywork being removed, such as follow-ups
- Use verbs like learn, adapt and execute
- Keep the CTA to two or three words

**Do not**

- Do not say replace your team
- Do not use sci-fi or doom language
- Do not use unexplained AI terms

## Taglines

1. Automation that works while you don't
2. Let agents handle the busywork
3. Smarter workflows, calmer teams
4. Learn once, automate always
5. Your team, free for what matters

**Boilerplate:** Nexora builds intelligent agents that learn, adapt and execute repetitive tasks so teams can spend their time on the work that matters most.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Get started |
| secondaryCta | Book a demo |
| success | Agent created. It's learning your workflow. |
| error | The agent couldn't run. Please retry. |
| empty | No agents yet. Create your first. |

---
Source listing key `m:nexora-automation`. Rebuild with `python3 scripts/brand-kit/build.py m:nexora-automation`.
