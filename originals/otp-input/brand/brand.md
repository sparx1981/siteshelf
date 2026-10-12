# Keyring — brand kit

*Secure sign-in with one-time codes.* Generated from the SiteShelf listing **One-Time Code Input** (Form Controls); every value below is read from that page, not invented.

> **Check your email, then you are in**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Manrope |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **shield** glyph. A shield with a keyhole would suit protection and a key, in a shape that stays clean at small size. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F3F5FB` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#151A2E` | Body and heading text |
| textMuted | `#2A56FF` | Secondary text, captions |
| primary | `#2A56FF` | Main actions, links, brand colour |
| secondary | `#151A2E` | Highlights, charts, second accent |
| border | `#DDE2F0` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#151A2E` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 15.80:1 | pass | pass |
| Muted text on background | 4.97:1 | pass | pass |
| Primary on background | 4.97:1 | pass | pass |
| Text on primary | 5.42:1 | pass | pass |
| Text on surface | 17.23:1 | pass | pass |

**Colours seen on the page** (share of use): `#F3F5FB` 98.3%, `#2A56FF` 1.6%, `#69708A` 0.1%, `#151A2E` 0.1%, `#9AA1B8` 0.0%, `#DDE2F0` 0.0%

## Typography

- Headings: **Manrope** (weight 800)
- Body: **Manrope**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Manrope:wght@500;700;800&family=Space+Mono:wght@700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Manrope | 26 px | 800 | 31.2px | -0.52px |
| Body | Manrope | 16 px | 500 | 24px | normal |
| Button | Manrope | 16 px | 700 | normal | normal |

## Shape, space and motion

- Radius: sm 14 px, md 18 px, lg 24 px
- Shadows: sm: `rgba(30, 40, 90, 0.12) 0px 20px 50px 0px` · md: `rgba(30, 40, 90, 0.12) 0px 20px 50px 0px` · lg: `rgba(30, 40, 90, 0.12) 0px 20px 50px 0px`
- Spacing: base unit 4 px; common steps 6 px, 8 px, 10 px, 14 px, 16 px, 18 px, 24 px, 28 px, 32 px
- Layout: container 1200 px; breakpoints 420 px
- Motion: 150 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** careful, calm, brief.

Keyring is short and unflustered, because people using a code are usually in a hurry. It states what was sent, where and how long it lasts, and never makes someone feel suspect.

**Do**

- Say where the code was sent and how long it lasts
- Use one short sentence for every state
- Offer a way out: resend or use another email

**Do not**

- Do not use security scare words
- Avoid blaming the user for a wrong digit
- Never show a full email address

## Taglines

1. Check your email, then you are in
2. Six digits, one door
3. Secure sign-in without the fuss
4. Your code is on its way
5. Open the door, keep the key

**Boilerplate:** Keyring is a sign-in service that uses short-lived six-digit codes sent by email, built for fast, accessible and private access to everyday accounts.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Verify |
| secondaryCta | Resend code |
| success | You are in. Welcome back. |
| error | That code is not right. Check the digits and try again. |
| empty | No code entered yet. |

---
Source listing key `o:otp-input`. Rebuild with `python3 scripts/brand-kit/build.py o:otp-input`.
