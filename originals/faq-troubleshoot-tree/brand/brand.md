# brightwire — brand kit

*Broadband that helps you fix it yourself.* Generated from the SiteShelf listing **Troubleshooting Flowchart** (FAQ); every value below is read from that page, not invented.

> **Let's get you back online**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Figtree |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **wave** glyph on a circle tile. A wave line looks like a signal and keeps the lowercase wordmark friendly. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F3F7FC` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#0E2038` | Body and heading text |
| textMuted | `#4F6280` | Secondary text, captions |
| primary | `#1D5FE0` | Main actions, links, brand colour |
| secondary | `#0E2038` | Highlights, charts, second accent |
| border | `#1D5FE0` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#0E2038` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 15.22:1 | pass | pass |
| Muted text on background | 5.76:1 | pass | pass |
| Primary on background | 5.18:1 | pass | pass |
| Text on primary | 5.58:1 | pass | pass |
| Text on surface | 16.38:1 | pass | pass |

**Colours seen on the page** (share of use): `#F3F7FC` 97.8%, `#C9D4E6` 0.9%, `#000000` 0.6%, `#0E2038` 0.3%, `#4F6280` 0.2%, `#1D5FE0` 0.1%

## Typography

- Headings: **Figtree** (weight 700)
- Body: **Figtree**
- Mono: **Figtree**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Figtree | 58 px | 700 | 61.48px | -1.16px |
| Heading / H2 | Figtree | 30 px | 700 | 36px | normal |
| Body | Figtree | 16 px | 400 | 24.8px | normal |
| Button | Figtree | 18 px | 600 | normal | normal |
| Navigation | Figtree | 15 px | 600 | 23.25px | normal |
| Mono | Figtree | 12 px | 600 | normal | normal |

## Shape, space and motion

- Radius: sm 6 px, md 14 px, lg 22 px, pill (fully rounded)
- Shadows: sm: `rgba(14, 32, 56, 0.5) 0px 24px 50px -36px` · md: `rgba(14, 32, 56, 0.5) 0px 24px 50px -36px` · lg: `rgba(14, 32, 56, 0.5) 0px 24px 50px -36px`
- Spacing: base unit 4 px; common steps 6 px, 8 px, 10 px, 12 px, 14 px, 16 px, 18 px, 22 px, 24 px
- Layout: container 1120 px; breakpoints 900 px
- Motion: 300 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** patient, clear, reassuring.

Sounds like a calm engineer on the phone: asks one question at a time, never makes you feel silly. Steps are short and numbered.

**Do**

- Ask one yes or no question at a time
- Describe lights and cables by what you can see
- Say how long each fix takes

**Do not**

- No jargon like DHCP or latency
- No blaming the customer's setup
- No more than three sentences per step

## Taglines

1. Let's get you back online
2. Fix it in a few questions
3. Your connection, explained simply
4. Lights on, worries off
5. Help that starts with a question

**Boilerplate:** brightwire is a broadband provider whose help centre walks customers through a simple yes or no flowchart to fix the router themselves, with an engineer on hand if not.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Yes |
| secondaryCta | Contact us |
| success | Back online, glad that worked |
| error | That did not fix it, let's try the next step |
| empty | You have not answered any questions yet |

---
Source listing key `o:faq-troubleshoot-tree`. Rebuild with `python3 scripts/brand-kit/build.py o:faq-troubleshoot-tree`.
