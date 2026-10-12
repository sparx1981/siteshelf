# Doorstep — brand kit

*Delivery address entry that does the typing.* Generated from the SiteShelf listing **Address Form with Autocomplete** (Form); every value below is read from that page, not invented.

> **Where should we deliver?**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Fraunces |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **home** glyph on a circle tile. A simple house shape says delivery destination at a glance. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F6F3EE` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#1D2A2F` | Body and heading text |
| textMuted | `#5B6B70` | Secondary text, captions |
| primary | `#0F766E` | Main actions, links, brand colour |
| secondary | `#7BB4AF` | Highlights, charts, second accent |
| border | `#CFD8D6` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#7BB4AF` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 13.32:1 | pass | pass |
| Muted text on background | 5.02:1 | pass | pass |
| Primary on background | 4.95:1 | pass | pass |
| Text on primary | 5.47:1 | pass | pass |
| Text on surface | 14.74:1 | pass | pass |

**Colours seen on the page** (share of use): `#F6F3EE` 82.8%, `#FFFFFF` 15.6%, `#0F766E` 1.5%, `#1D2A2F` 0.1%, `#5B6B70` 0.1%, `#7BB4AF` 0.0%, `#CFD8D6` 0.0%

## Typography

- Headings: **Fraunces** (weight 600)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Fraunces:wght@600&family=Inter:wght@400;600&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Fraunces | 28 px | 600 | normal | normal |
| Body | Inter | 16 px | 400 | 24px | normal |
| Button | Inter | 16 px | 600 | 24px | normal |

## Shape, space and motion

- Radius: sm 10 px, md 12 px, lg 16 px
- Shadows: sm: `rgba(29, 42, 47, 0.12) 0px 12px 40px 0px` · md: `rgba(29, 42, 47, 0.12) 0px 12px 40px 0px` · lg: `rgba(29, 42, 47, 0.12) 0px 12px 40px 0px`
- Spacing: base unit 4 px; common steps 4 px, 6 px, 11 px, 12 px, 13 px, 14 px, 16 px, 18 px, 24 px
- Layout: container 1200 px; breakpoints 520 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** helpful, brisk, careful.

Sounds like a courier who just wants to get it right: short questions, instant confirmation and no jargon. Errors are specific and always say how to fix them.

**Do**

- Ask one thing at a time
- Confirm the address back in full
- Name the field when something is wrong

**Do not**

- No generic invalid input messages
- Avoid abbreviations like addr
- Never make people retype what we already know

## Taglines

1. Where should we deliver?
2. Type less, arrive sooner
3. Your door, found in seconds
4. Right address, first time
5. Delivery starts at your doorstep

**Boilerplate:** Doorstep is an address form component that suggests matching addresses as you type, fills in street, city and postcode, and confirms the result before checkout.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Confirm address |
| secondaryCta | Enter manually |
| success | Address confirmed. We'll deliver there. |
| error | We couldn't find that address. Check it or enter it manually. |
| empty | Start typing to see matching addresses. |

---
Source listing key `o:form-address-autocomplete`. Rebuild with `python3 scripts/brand-kit/build.py o:form-address-autocomplete`.
