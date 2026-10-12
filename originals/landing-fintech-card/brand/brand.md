# Quill — brand kit

*Spend card with rules you set yourself.* Generated from the SiteShelf listing **Quill Spend Card** (Landing Page); every value below is read from that page, not invented.

> **A card that follows your rules**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Sora |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **shield** glyph on a circle tile. A shield expresses protection by rules, and the lowercase name matches the page. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#071A1F` | Page background |
| surface | `#0E2A31` | Cards, panels, raised areas |
| text | `#9EC2BD` | Body and heading text |
| textMuted | `#E8FBF6` | Secondary text, captions |
| primary | `#36E2B8` | Main actions, links, brand colour |
| secondary | `#244A53` | Highlights, charts, second accent |
| border | `#1B4650` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#244A53` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 9.27:1 | pass | pass |
| Muted text on background | 16.63:1 | pass | pass |
| Primary on background | 10.82:1 | pass | pass |
| Text on primary | 11.91:1 | pass | pass |
| Text on surface | 7.82:1 | pass | pass |

**Colours seen on the page** (share of use): `#071A1F` 82.3%, `#0E2A31` 13.2%, `#0F5C52` 1.3%, `#1B9C86` 1.3%, `#36E2B8` 1.0%, `#9EC2BD` 0.3%, `#E8FBF6` 0.3%, `#FFFFFF` 0.3%, `#244A53` 0.2%, `#0B0B0F` 0.0%

## Typography

- Headings: **Sora** (weight 700)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=DM+Mono:wght@400&family=Inter:wght@400;500;600&family=Sora:wght@600;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Sora | 80 px | 700 | 81.6px | -2.4px |
| Heading / H2 | Sora | 48 px | 700 | 52.8px | normal |
| Body | Inter | 17 px | 400 | 27.2px | normal |
| Button | Inter | 14 px | 600 | normal | normal |
| Navigation | Inter | 15 px | 500 | 24px | normal |
| Caption / eyebrow | Inter | 13 px | 400 | 20.8px | normal |

## Shape, space and motion

- Radius: sm 20 px, md 22 px, lg 22 px, pill (fully rounded)
- Shadows: sm: `rgba(0, 0, 0, 0.7) 0px 40px 80px -30px, rgba(255, 255, 255, 0.3) 0px 1px 0px 0px inset` · md: `rgba(0, 0, 0, 0.7) 0px 40px 80px -30px, rgba(255, 255, 255, 0.3) 0px 1px 0px 0px inset` · lg: `rgba(0, 0, 0, 0.7) 0px 40px 80px -30px, rgba(255, 255, 255, 0.3) 0px 1px 0px 0px inset`
- Spacing: base unit 4 px; common steps 2 px, 6 px, 8 px, 14 px, 18 px, 20 px, 24 px, 26 px, 28 px
- Layout: container 1240 px; breakpoints 900 px
- Motion: 250 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** assured, clear, modern.

Sounds like a smart friend who happens to build payments: confident, brief and rule-minded. It talks control, limits and the till, and avoids bank-speak.

**Do**

- Use verbs like set, block and freeze
- Show limits and categories as concrete examples
- Keep promises about spending to what the card does

**Do not**

- Do not use jargon like leveraging financial solutions
- Do not imply guaranteed savings
- Do not use fear to sell

## Taglines

1. A card that follows your rules
2. Set the limit. Spend with ease.
3. Freeze it in one tap
4. Your money. Your rules.
5. Enforced at the till, not after

**Boilerplate:** Quill is a spend card whose owners set their own rules, with weekly limits, blocked categories and an instant freeze enforced at the till rather than after the fact.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Get the card |
| secondaryCta | See how rules work |
| success | Rule saved. It applies from the next purchase. |
| error | Rule not saved. Check your connection and retry. |
| empty | No rules yet. Add a limit to start. |

---
Source listing key `o:landing-fintech-card`. Rebuild with `python3 scripts/brand-kit/build.py o:landing-fintech-card`.
