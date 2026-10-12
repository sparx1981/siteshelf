# Kernel & Cog — brand kit

*Developer tools for build and deploy.* Generated from the SiteShelf listing **Terminal Footer** (Footer); every value below is read from that page, not invented.

> **Tools that stay out of your way**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Space Grotesk |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **chip** glyph. A chip nods to the machine room and the cog in the name. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#0B0F0D` | Page background |
| surface | `#16201B` | Cards, panels, raised areas |
| text | `#A9BBB0` | Body and heading text |
| textMuted | `#7F968A` | Secondary text, captions |
| primary | `#5DF2A0` | Main actions, links, brand colour |
| secondary | `#FF6B5E` | Highlights, charts, second accent |
| border | `#2C4136` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#2D6C4C` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 9.58:1 | pass | pass |
| Muted text on background | 6.09:1 | pass | pass |
| Primary on background | 13.48:1 | pass | pass |
| Text on primary | 13.73:1 | pass | pass |
| Text on surface | 8.29:1 | pass | pass |

**Colours seen on the page** (share of use): `#0B0F0D` 96.5%, `#16201B` 2.6%, `#5DF2A0` 0.4%, `#A9BBB0` 0.2%, `#7F968A` 0.2%, `#D8E6DD` 0.2%, `#FF6B5E` 0.0%, `#FFC561` 0.0%, `#2C4136` 0.0%, `#2D6C4C` 0.0%

## Typography

- Headings: **Space Grotesk** (weight 700)
- Body: **Space Grotesk**
- Google Fonts: `https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&family=Space+Grotesk:wght@500;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Space Grotesk | 66 px | 700 | 66px | -1.65px |
| Body | Space Grotesk | 18 px | 400 | 28.8px | normal |
| Button | JetBrains Mono | 13 px | 500 | normal | normal |
| Navigation | Space Grotesk | 14 px | 400 | 22.4px | normal |

## Shape, space and motion

- Radius: sm 6 px, md 10 px, lg 14 px, pill (fully rounded)
- Shadows: sm: `rgba(93, 242, 160, 0.04) 0px 0px 0px 1px, rgba(0, 0, 0, 0.9) 0px 30px 80px -30px, rgba(93, 242, 160, 0.04) 0px 0px 80px 0px inset` · md: `rgba(93, 242, 160, 0.04) 0px 0px 0px 1px, rgba(0, 0, 0, 0.9) 0px 30px 80px -30px, rgba(93, 242, 160, 0.04) 0px 0px 80px 0px inset` · lg: `rgba(93, 242, 160, 0.04) 0px 0px 0px 1px, rgba(0, 0, 0, 0.9) 0px 30px 80px -30px, rgba(93, 242, 160, 0.04) 0px 0px 80px 0px inset`
- Spacing: base unit 4 px; common steps 6 px, 8 px, 10 px, 12 px, 14 px, 16 px, 18 px, 20 px, 22 px
- Layout: container 980 px; breakpoints 640 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** dry, competent, hacker-friendly.

Kernel & Cog sounds like a seasoned sysadmin typing in a terminal: dry, exact and quietly funny. It prefers commands and examples to adjectives.

**Do**

- Show the command rather than describing it
- Use lowercase for prompts and imperative verbs
- Keep jokes small and technical

**Do not**

- Do not say 'revolutionise your workflow'
- Do not explain what a terminal is
- Do not hide the clickable link behind the gimmick

## Taglines

1. Tools that stay out of your way
2. Same build on laptop and in prod
3. Cache it, log it, ship it
4. Quiet tools for loud deadlines
5. One command from deployed

**Boilerplate:** Kernel & Cog makes a build cache, a log viewer and a deploy button that behave the same on a developer's laptop and in production.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | help |
| secondaryCta | ls |
| success | ok: theme set to amber |
| error | error: command not found. try help |
| empty | empty: nothing in history yet |

---
Source listing key `o:footer-terminal`. Rebuild with `python3 scripts/brand-kit/build.py o:footer-terminal`.
