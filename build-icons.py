from pathlib import Path
from PIL import Image, ImageDraw, ImageFont
root=Path(__file__).parent/'public/icons'
for name,size in [('icon-192.png',192),('icon-512.png',512),('apple-touch-icon.png',180),('maskable-512.png',512)]:
 im=Image.new('RGB',(size,size),'#f4f0e9');d=ImageDraw.Draw(im)
 font=ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf',int(size*.34))
 d.text((size*.5,size*.49),'غرس',font=font,anchor='mm',direction='rtl',fill='#454e3e',language='ar')
 d.line([(size*.47,size*.2),(size*.5,size*.1)],fill='#78816c',width=max(1,int(size*.009)))
 d.ellipse((size*.48,size*.09,size*.53,size*.13),fill='#78816c')
 im.save(root/name)
(root/'icon.svg').write_text('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><rect width="512" height="512" rx="100" fill="#f4f0e9"/><text x="256" y="280" text-anchor="middle" font-size="174" font-family="serif" fill="#454e3e" direction="rtl">غرس</text><path d="M241 103L256 52" stroke="#78816c" stroke-width="5"/><ellipse cx="260" cy="55" rx="13" ry="8" fill="#78816c"/></svg>')
