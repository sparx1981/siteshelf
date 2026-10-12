# Brand kits

Every listing has a `brand/` folder with a full kit: `brand.md` (readable), `brand.json` and `tokens.json`/`tokens.css` (machine-readable), `palette.svg`, and four logo files (`logo-mark.svg`, `logo-wordmark.svg`, `logo-lockup.svg`, `logo-lockup-mono.svg`). `voice.json` keeps the written part so a kit can be rebuilt.

Where they live: `originals/<slug>/brand/`, `motionsites-previews/brand/<id>/`, `sceneai-previews/brand/<id>/`. The database loaders ignore these folders.

Pipeline (colours, fonts and tokens are read from the real page; only the words and the logo idea are written by hand):

1. `python3 scripts/brand-kit/extract.py` renders each page and saves what it really uses (colours by coverage, type scale, radii, shadows, spacing, motion, copy) to `/tmp/brand/facts`.
2. Write `/tmp/brand/voice/<key>.json` per listing (brand name, personality, voice, five taglines, boilerplate, microcopy, logo motif).
3. `python3 scripts/brand-kit/build.py [key ...]` writes the kit folders. Keys: `o:<slug>`, `m:<id>`, `s:<id>`.

Logos are drawn from a library of hand-built 64x64 glyphs (`logos.py`); wordmarks are outlined from the page's heading font when it is available locally (otherwise Inter Bold, stated in `brand.md`).
