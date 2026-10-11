#!/usr/bin/env python3
"""Render each originals/<slug>/preview.html in headless Chromium and check it.

For every page this loads it at desktop (1440x900) and phone (390x844) width and reports:
console and page errors, sideways overflow, and any request to somewhere other than Google Fonts
(previews must be self-contained). Google Fonts is answered from local @fontsource files so the screenshots
use the real typefaces. Writes originals/<slug>/thumb.jpg (desktop, 640x400) and /tmp/shots/<slug>-{d,m}.png.

  python3 scripts/check_originals.py            # every folder
  python3 scripts/check_originals.py slug-a slug-b
Environment: FONT_DIR (default /tmp/fonts/node_modules/@fontsource)
"""
import io, json, os, pathlib, re, sys, urllib.parse
from PIL import Image
from playwright.sync_api import sync_playwright

ROOT = pathlib.Path(__file__).resolve().parent.parent / 'originals'
FONTS = pathlib.Path(os.environ.get('FONT_DIR', '/tmp/fonts/node_modules/@fontsource'))
SHOTS = pathlib.Path('/tmp/shots'); SHOTS.mkdir(exist_ok=True)

def font_css(url):
    fams = re.findall(r'family=([^:&]+)', urllib.parse.unquote(url))
    out = []
    for fam in fams:
        slug = fam.strip().lower().replace('+', '-').replace(' ', '-')
        d = FONTS / slug / 'files'
        if not d.is_dir():
            continue
        for f in sorted(d.glob(f'{slug}-latin-*.woff2')):
            m = re.match(rf'{re.escape(slug)}-latin-(\d+)-(normal|italic)\.woff2', f.name)
            if m:
                out.append(f"@font-face{{font-family:'{fam.replace('+', ' ')}';font-style:{m.group(2)};font-weight:{m.group(1)};src:url(https://fonts.gstatic.com/__local/{slug}/{f.name}) format('woff2')}}")
    return '\n'.join(out)

def check(browser, slug):
    folder = ROOT / slug
    html = folder / 'preview.html'
    report = {'slug': slug, 'errors': [], 'warnings': []}
    if not html.exists():
        report['errors'].append('preview.html missing'); return report
    for tag, (w, h) in (('d', (1440, 900)), ('m', (390, 844))):
        ctx = browser.new_context(viewport={'width': w, 'height': h}, device_scale_factor=1, has_touch=(tag == 'm'), is_mobile=(tag == 'm'))
        page = ctx.new_page()
        blocked, errs = [], []
        def handle(route):
            u = route.request.url
            if u.startswith(('data:', 'blob:', 'about:')):
                return route.continue_()
            if 'fonts.googleapis.com/css' in u:
                return route.fulfill(status=200, content_type='text/css', headers={'access-control-allow-origin': '*'}, body=font_css(u))
            if 'fonts.gstatic.com/__local/' in u:
                slug, name = u.split('__local/')[1].split('/', 1)
                p = FONTS / slug / 'files' / name
                return route.fulfill(status=200, content_type='font/woff2', headers={'access-control-allow-origin': '*'}, body=p.read_bytes()) if p.exists() else route.abort()
            if u.startswith('file://'):
                return route.continue_()
            blocked.append(u); route.abort()
        page.route('**/*', handle)
        page.on('pageerror', lambda e: errs.append(f'pageerror: {e}'))
        page.on('console', lambda m: errs.append(f'console.{m.type}: {m.text}') if m.type == 'error' else None)
        page.goto(html.resolve().as_uri(), wait_until='load')
        page.wait_for_timeout(600)
        if tag == 'd':
            page.mouse.move(520, 380, steps=6); page.mouse.move(930, 430, steps=8)
        page.wait_for_timeout(1100)
        over = page.evaluate('document.documentElement.scrollWidth - window.innerWidth')
        height = page.evaluate('document.documentElement.scrollHeight')
        fonts_ok = page.evaluate("[...document.fonts].filter(f=>f.status==='error').length")
        title = page.title()
        png = page.screenshot(type='png')
        (SHOTS / f'{slug}-{tag}.png').write_bytes(png)
        if tag == 'd':
            im = Image.open(io.BytesIO(png)).convert('RGB').resize((640, 400), Image.LANCZOS)
            im.save(folder / 'thumb.jpg', quality=82, optimize=True, progressive=True)
            report['title'] = title; report['desktop_height'] = height
        if over > 1: report['errors'].append(f'{tag}: sideways overflow {over}px')
        report['errors'] += [f'{tag}: {e}' for e in errs]
        if blocked: report['errors'].append(f'{tag}: external requests {sorted(set(blocked))[:3]}')
        if fonts_ok: report['warnings'].append(f'{tag}: {fonts_ok} font(s) failed to load')
        ctx.close()
    if not report.get('title'): report['errors'].append('missing <title>')
    return report

def main():
    slugs = sys.argv[1:] or sorted(p.name for p in ROOT.iterdir() if p.is_dir())
    bad = 0
    with sync_playwright() as p:
        b = p.chromium.launch()
        for s in slugs:
            r = check(b, s)
            status = 'FAIL' if r['errors'] else 'ok  '
            bad += bool(r['errors'])
            print(status, s, '|', r.get('title', ''), '|', f"{r.get('desktop_height','?')}px tall", *(['\n   ' + e for e in r['errors'] + r['warnings']]))
        b.close()
    sys.exit(1 if bad else 0)

if __name__ == '__main__':
    main()
