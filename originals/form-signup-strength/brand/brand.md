# Nimbus Notes — brand kit

*Note-taking app for personal use.* Generated from the SiteShelf listing **Sign-Up With Strength Meter** (Form); every value below is read from that page, not invented.

> **Notes that float with you**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Outfit |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **cloud** glyph on a squircle tile. A cloud is the app's name and the idea that notes follow you everywhere. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#0B0A1F` | Page background |
| surface | `#6D4AFF` | Cards, panels, raised areas |
| text | `#F1F0FF` | Body and heading text |
| textMuted | `#B4B2E0` | Secondary text, captions |
| primary | `#8FE6FF` | Main actions, links, brand colour |
| secondary | `#6D4AFF` | Highlights, charts, second accent |
| border | `#6C69A0` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#6D4AFF` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 17.31:1 | pass | pass |
| Muted text on background | 9.64:1 | pass | pass |
| Primary on background | 13.86:1 | pass | pass |
| Text on primary | 13.97:1 | pass | pass |
| Text on surface | 4.58:1 | pass | pass |

**Colours seen on the page** (share of use): `#0B0A1F` 46.2%, `#6D4AFF` 26.8%, `#20D6FF` 26.8%, `#F1F0FF` 0.1%, `#B4B2E0` 0.0%, `#9B98C8` 0.0%, `#8FE6FF` 0.0%, `#D4D2F5` 0.0%, `#6C69A0` 0.0%

## Typography

- Headings: **Outfit** (weight 700)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Outfit:wght@600;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Outfit | 38 px | 700 | 41.8px | -0.76px |
| Button | Inter | 13 px | 600 | normal | normal |

## Shape, space and motion

- Radius: sm 10 px, md 16 px, lg 50 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 2 px; common steps 6 px, 8 px, 10 px, 12 px, 13 px, 14 px, 15 px, 16 px, 18 px
- Layout: container 1200 px; breakpoints 420 px
- Motion: 250 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** soft, clear, reassuring.

Sounds like a gentle guide: light, friendly and firm about safety. It cheers a strong password and explains weak ones without scolding.

**Do**

- Say what is missing, not that something failed
- Use friendly second person
- Keep reassurance short, like Free for personal use

**Do not**

- No scolding about weak passwords
- Avoid security jargon
- Never hide the cost

## Taglines

1. Notes that float with you
2. Your thoughts, safely in the cloud
3. Light notes, strong passwords
4. Sign up and start jotting
5. Think freely, write easily

**Boilerplate:** Nimbus Notes is a note-taking app, free for personal use, that keeps ideas in sync across devices with a sign-up flow that helps you choose a strong password.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Create account |
| secondaryCta | Show password |
| success | Account created. Welcome to Nimbus. |
| error | We couldn't create your account. Check the details and try again. |
| empty | Add a password to see how strong it is. |

---
Source listing key `o:form-signup-strength`. Rebuild with `python3 scripts/brand-kit/build.py o:form-signup-strength`.
