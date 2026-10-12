# helpline — brand kit

*Help desk with live service-level clocks.* Generated from the SiteShelf listing **Support Queue Dashboard** (Dashboard); every value below is read from that page, not invented.

> **Every ticket has an owner**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Figtree |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **dial** glyph. A dial represents a clock face counting down a service promise. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F2F5FA` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#56647F` | Body and heading text |
| textMuted | `#15203A` | Secondary text, captions |
| primary | `#14935F` | Main actions, links, brand colour |
| secondary | `#D92D3A` | Highlights, charts, second accent |
| border | `#14935F` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#0F4431` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 5.45:1 | pass | pass |
| Muted text on background | 14.79:1 | pass | pass |
| Primary on background | 3.58:1 | fail | pass |
| Text on primary | 5.02:1 | pass | pass |
| Text on surface | 5.96:1 | pass | pass |

**Colours seen on the page** (share of use): `#F2F5FA` 97.1%, `#2F5BEA` 0.7%, `#56647F` 0.6%, `#15203A` 0.5%, `#DFE6FF` 0.4%, `#14935F` 0.2%, `#D92D3A` 0.2%, `#6A7690` 0.2%, `#E8710A` 0.1%, `#2A4BC4` 0.0%

## Typography

- Headings: **Figtree** (weight 700)
- Body: **Figtree**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Figtree:wght@500;600;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Heading / H2 | Figtree | 15 px | 700 | normal | normal |
| Button | Figtree | 14 px | 700 | 20.3px | normal |
| Caption / eyebrow | Figtree | 11.7 px | 600 | 16.9167px | normal |

## Shape, space and motion

- Radius: sm 4 px, md 10 px, lg 14 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 2 px, 3 px, 4 px, 7 px, 8 px, 10 px, 12 px, 14 px, 16 px
- Layout: container 1440 px; breakpoints 700 px, 1100 px
- Motion: 500 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** calm, decisive, kind.

Sounds like an experienced support lead mid-shift: short, clear and never rattled by a ticking clock. It names who owns what and keeps urgency factual.

**Do**

- Lead with ticket, owner and time remaining
- Use human words like reply and hand over
- State urgency as a fact, not a shout

**Do not**

- No all-caps panic
- Avoid blaming agents or customers
- Never hide a breached clock

## Taglines

1. Every ticket has an owner
2. Answers before the clock runs out
3. Support that keeps its promises
4. Calm queue, quick replies
5. Help, handled on time

**Boilerplate:** helpline is a help-desk dashboard for small shops, tracking tickets, response clocks and agent workload so every customer gets a timely reply.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Assign ticket |
| secondaryCta | Open drawer |
| success | Ticket assigned. The clock is yours. |
| error | Could not assign that ticket. Try again. |
| empty | Queue clear. Nice work, nothing waiting. |

---
Source listing key `o:dashboard-support-queue`. Rebuild with `python3 scripts/brand-kit/build.py o:dashboard-support-queue`.
