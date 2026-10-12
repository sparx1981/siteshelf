# Fieldwork Creative — brand kit

*Design studio for brands and campaigns.* Generated from the SiteShelf listing **Quote Request Chips** (Form); every value below is read from that page, not invented.

> **Tell us what you are making**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Epilogue |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **compass** glyph on a circle tile. A compass points the way from a vague idea to a definite project. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F4F0FF` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#1A1530` | Body and heading text |
| textMuted | `#5A5278` | Secondary text, captions |
| primary | `#F5E642` | Main actions, links, brand colour |
| secondary | `#1A1530` | Highlights, charts, second accent |
| border | `#1A1530` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#1A1530` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 15.71:1 | pass | pass |
| Muted text on background | 6.44:1 | pass | pass |
| Primary on background | 1.15:1 | fail | fail |
| Text on primary | 15.23:1 | pass | pass |
| Text on surface | 17.59:1 | pass | pass |

**Colours seen on the page** (share of use): `#F4F0FF` 73.9%, `#D9D0F5` 18.4%, `#1A1530` 6.4%, `#F5E642` 1.0%, `#6C3CFF` 0.2%, `#FF7A66` 0.0%, `#5A5278` 0.0%, `#BDA9FF` 0.0%, `#8F87B8` 0.0%, `#2A0B05` 0.0%

## Typography

- Headings: **Epilogue** (weight 800)
- Body: **Epilogue**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Epilogue:wght@700;800&family=Inter:wght@400;500;600&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Epilogue | 64 px | 800 | 64px | -1.92px |
| Heading / H2 | Epilogue | 19 px | 800 | normal | normal |
| Body | Epilogue | 20 px | 600 | 32px | normal |
| Button | Epilogue | 16 px | 700 | normal | normal |
| Caption / eyebrow | Inter | 11 px | 600 | normal | 1.54px |

## Shape, space and motion

- Radius: sm 6 px, md 16 px, lg 20 px, pill (fully rounded)
- Shadows: sm: `rgb(26, 21, 48) 5px 5px 0px 0px` · md: `rgb(26, 21, 48) 2px 2px 0px 0px` · lg: `rgb(108, 60, 255) 5px 5px 0px 0px`
- Spacing: base unit 2 px; common steps 6 px, 8 px, 9 px, 10 px, 12 px, 13 px, 14 px, 18 px, 22 px
- Layout: container 1160 px; breakpoints 520 px, 960 px
- Motion: 150 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** lively, direct, collaborative.

Fieldwork Creative sounds like a studio founder who wants the brief in plain English. It is chatty, a bit cheeky, and clear about price ranges and timelines from the first message.

**Do**

- Write the form as sentences a person would say
- Show a price range early and be honest about it
- Use 'we' and 'you' freely

**Do not**

- Do not ask for a 'scope of work' document
- Do not hide budget behind a 'contact us'
- Do not use agency buzzwords

## Taglines

1. Tell us what you are making
2. Brief us in plain English
3. Chips in, quote out
4. Start with a sentence
5. Make something together, on time

**Boilerplate:** Fieldwork Creative is a design studio making brand identities, websites, apps, campaigns and packaging, with transparent estimates from the first conversation.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Send the brief |
| secondaryCta | Copy brief |
| success | Brief sent. We will reply with a plan within two days. |
| error | Choose what you are making before sending. |
| empty | Nothing picked yet. Tap a chip to begin. |

---
Source listing key `o:form-quote-chips`. Rebuild with `python3 scripts/brand-kit/build.py o:form-quote-chips`.
