# Lumina Vision — brand kit

*Decision intelligence for automated systems.* Generated from the SiteShelf listing **Lumina Vision** (Intelligence Unbound); every value below is read from that page, not invented.

> **Intelligence, unbound**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **aperture** glyph. An aperture is an eye on the signals the product watches. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#000000` | Page background |
| surface | `#16397A` | Cards, panels, raised areas |
| text | `#FFFFFF` | Body and heading text |
| textMuted | `#A6A6A6` | Secondary text, captions |
| primary | `#16397A` | Main actions, links, brand colour |
| secondary | `#F97316` | Highlights, charts, second accent |
| border | `#FFFFFF` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#F97316` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 21.00:1 | pass | pass |
| Muted text on background | 8.63:1 | pass | pass |
| Primary on background | 1.90:1 | fail | fail |
| Text on primary | 11.05:1 | pass | pass |
| Text on surface | 11.05:1 | pass | pass |

**Colours seen on the page** (share of use): `#000000` 81.6%, `#16397A` 9.1%, `#050A1A` 9.1%, `#FFFFFF` 0.2%, `#4285F4` 0.0%, `#A855F7` 0.0%, `#F97316` 0.0%, `#EF4444` 0.0%, `#D97706` 0.0%, `#A6A6A6` 0.0%

## Typography

- Headings: **Inter** (weight 700)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Inter | 80 px | 700 | 80px | -3.2px |
| Body | Inter | 16 px | 400 | 24.8px | normal |
| Button | Arial | 13.3 px | 400 | normal | normal |
| Navigation | Inter | 13.6 px | 400 | normal | normal |
| Caption / eyebrow | Inter | 9 px | 700 | normal | 5.4px |

## Shape, space and motion

- Radius: sm 4 px, md 4 px, lg 4 px, pill (fully rounded)
- Shadows: sm: `rgba(255, 255, 255, 0.2) 0px 0px 18px 0px inset` · md: `rgba(255, 255, 255, 0.2) 0px 0px 18px 0px inset` · lg: `rgba(255, 255, 255, 0.2) 0px 0px 18px 0px inset`
- Spacing: base unit 2 px; common steps 6 px, 8 px, 10 px, 12 px, 14 px, 16 px, 27 px, 28 px, 30 px
- Layout: container 1200 px; breakpoints 900 px
- Motion: 250 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** calm, clear, authoritative.

Sounds like a steady operator in a control room: low-key, exact and reassuring. It turns raw signals into decisions without the drama of AI hype.

**Do**

- Say what the system sees and decides
- Use short, calm declaratives
- Keep the interface in view

**Do not**

- No sci-fi mystique
- Avoid claims about replacing judgement
- Never use hype adjectives

## Taglines

1. Intelligence, unbound
2. Raw signals to clear decisions
3. Every system in view
4. Calm control for automated work
5. See clearly, decide well

**Boilerplate:** Lumina Vision turns raw signals into clear decisions with a calm interface that keeps every automated system in view.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Begin |
| secondaryCta | Learn more |
| success | Signal received. Decision ready. |
| error | We lost the signal. Please try again. |
| empty | No signals yet. Connect a source. |

---
Source listing key `s:69ef909999cd4ecd6fe807ba`. Rebuild with `python3 scripts/brand-kit/build.py s:69ef909999cd4ecd6fe807ba`.
