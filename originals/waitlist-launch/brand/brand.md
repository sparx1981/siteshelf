# Drift — brand kit

*Calm email inbox for people who hate email.* Generated from the SiteShelf listing **Waitlist Launch Page** (Coming Soon); every value below is read from that page, not invented.

> **Calm email for people who hate email**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Unbounded |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **cloud** glyph. A soft cloud suggests drifting and a quieter, lighter inbox. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#08070D` | Page background |
| surface | `#22D3EE` | Cards, panels, raised areas |
| text | `#B4AED0` | Body and heading text |
| textMuted | `#F5F3FF` | Secondary text, captions |
| primary | `#EC4899` | Main actions, links, brand colour |
| secondary | `#C4B5FD` | Highlights, charts, second accent |
| border | `#201E28` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#692549` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 9.47:1 | pass | pass |
| Muted text on background | 18.30:1 | pass | pass |
| Primary on background | 5.69:1 | pass | pass |
| Text on primary | 5.57:1 | pass | pass |
| Text on surface | 1.17:1 | fail | fail |

**Colours seen on the page** (share of use): `#08070D` 31.2%, `#22D3EE` 22.3%, `#EC4899` 19.7%, `#7C3AED` 18.0%, `#FFFFFF` 8.1%, `#C4B5FD` 0.3%, `#F9A8D4` 0.3%, `#8B5CF6` 0.1%, `#B4AED0` 0.0%, `#D9D3F5` 0.0%

## Typography

- Headings: **Unbounded** (weight 700)
- Body: **Manrope**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700&family=Unbounded:wght@500;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Unbounded | 104 px | 700 | 104px | -4.16px |
| Body | Manrope | 21 px | 400 | 32.55px | normal |
| Button | Manrope | 16 px | 700 | normal | normal |

## Shape, space and motion

- Radius: sm 12 px, md 24 px, lg 50 px, pill (fully rounded)
- Shadows: sm: `rgba(52, 211, 153, 0) 0px 0px 0px 7.99442px` · md: `rgba(52, 211, 153, 0) 0px 0px 0px 7.99442px` · lg: `rgba(52, 211, 153, 0) 0px 0px 0px 7.99442px`
- Spacing: base unit 4 px; common steps 4 px, 6 px, 8 px, 10 px, 12 px, 14 px, 16 px, 20 px, 26 px
- Layout: container 1200 px; breakpoints 520 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** dreamy, low-key, playful.

Drift talks like someone who has quietly given up on inbox zero and found peace: soft, funny and never urgent. It promises calm and keeps its own emails short.

**Do**

- Use gentle, sentence-case lines
- Be honest about the launch date and queue position
- Use a little self-deprecating humour about email

**Do not**

- Do not use productivity hype
- Avoid 'inbox zero' guilt
- Never send more than one update a week

## Taglines

1. Calm email for people who hate email
2. Float past the noise
3. Email, slowed right down
4. Join the quiet line
5. Less inbox, more drift

**Boilerplate:** Drift is a calm email client for people who hate email, launching soon with a waitlist that rewards referrals with earlier access and extra features.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Join the waitlist |
| secondaryCta | Copy my link |
| success | You are #1,284 in line. Share to move up. |
| error | That email does not look right. Try again. |
| empty | No friends invited yet. Share your link to climb. |

---
Source listing key `o:waitlist-launch`. Rebuild with `python3 scripts/brand-kit/build.py o:waitlist-launch`.
