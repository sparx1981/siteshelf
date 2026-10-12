# Relayline — brand kit

*AI workflow automation for busy businesses.* Generated from the SiteShelf listing **AI Automation Hero** (AI / SaaS); every value below is read from that page, not invented.

> **Automate the work, keep the thinking**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **chip** glyph on a circle tile. A chip mark nods to automation and AI hardware. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#070612` | Page background |
| surface | `#F5F5F7` | Cards, panels, raised areas |
| text | `#FFFFFF` | Body and heading text |
| textMuted | `#A8A8AC` | Secondary text, captions |
| primary | `#FFFFFF` | Main actions, links, brand colour |
| secondary | `#8C8C8C` | Highlights, charts, second accent |
| border | `#2A2933` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#8C8C8C` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 20.12:1 | pass | pass |
| Muted text on background | 8.49:1 | pass | pass |
| Primary on background | 20.12:1 | pass | pass |
| Text on primary | 19.64:1 | pass | pass |
| Text on surface | 1.09:1 | fail | fail |

**Colours seen on the page** (share of use): `#070612` 99.7%, `#F5F5F7` 0.3%, `#A8A8AC` 0.0%, `#8C8C8C` 0.0%, `#2A2933` 0.0%

## Typography

- Headings: **Inter** (weight 500)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Instrument+Serif:ital@0;1&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Inter | 60 px | 500 | 72px | -0.6px |
| Body | Inter | 18 px | 400 | 29.25px | normal |
| Button | Inter | 16 px | 500 | normal | normal |

## Shape, space and motion

- Radius: sm 0 px, md 0 px, lg 0 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 6 px, 8 px, 12 px, 14 px, 16 px, 20 px, 24 px, 32 px, 48 px
- Layout: container 1280 px; breakpoints 700 px, 768 px, 1024 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** confident, direct, capable.

Sounds like a sharp operations lead: confident, concrete about hours saved, light on jargon. It promises time back and shows how.

**Do**

- Name the task that gets automated
- Put hours or steps saved in numbers
- Offer a call as the next step

**Do not**

- No promises of magic
- No stacking of AI buzzwords
- No vague 'transform your business' language

## Taglines

1. Automate the work, keep the thinking
2. Workflows that run themselves
3. Less admin, more business
4. AI that does the busywork
5. Hand off the repetitive

**Boilerplate:** Relayline builds AI automations that analyse data, route tasks and speed up repetitive workflows, so small and mid-sized businesses can focus on what matters.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Book a free call |
| secondaryCta | Learn more |
| success | Request received, we will call within a day |
| error | Something went wrong, please try again |
| empty | No workflows set up yet |

---
Source listing key `m:ai-automation-hero`. Rebuild with `python3 scripts/brand-kit/build.py m:ai-automation-hero`.
