#!/usr/bin/env python3
"""Contact sheet of checked previews so a batch can be reviewed in one look.
  python3 scripts/montage.py out.png d slug-a slug-b ...    (d = desktop, m = phone)"""
import sys
from PIL import Image, ImageDraw
out, kind, slugs = sys.argv[1], sys.argv[2], sys.argv[3:]
tw, th = (480, 300) if kind == 'd' else (170, 370)
cols = 4 if kind == 'd' else 10
rows = -(-len(slugs) // cols)
sheet = Image.new('RGB', (cols * tw, rows * (th + 22)), '#111')
dr = ImageDraw.Draw(sheet)
for i, s in enumerate(slugs):
    im = Image.open(f'/tmp/shots/{s}-{kind}.png').convert('RGB')
    im.thumbnail((tw, th))
    x, y = (i % cols) * tw, (i // cols) * (th + 22)
    sheet.paste(im, (x, y + 22)); dr.text((x + 4, y + 5), s, fill='#ddd')
sheet.save(out)
print(out, sheet.size)
