"""Shape غرس into fixed SVG paths; no device font or network dependency."""
from pathlib import Path
import ctypes as c, ctypes.util, os
from fontTools.ttLib import TTFont
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.boundsPen import BoundsPen
from fontTools.pens.transformPen import TransformPen
root=Path(__file__).parent/'public/icons'
fontpath=os.environ.get('GHARS_ICON_FONT') or '/opt/codex/runtimes/codex-primary-runtime/dependencies/native/libreoffice-headless/libreoffice/share/fonts/truetype/Amiri-Bold.ttf'
hb=c.CDLL(ctypes.util.find_library('harfbuzz'))
def fn(name,args,result):
 f=getattr(hb,name);f.argtypes=args;f.restype=result;return f
ptr=c.c_void_p;uint=c.c_uint
blob=fn('hb_blob_create_from_file_or_fail',[c.c_char_p],ptr)(fontpath.encode())
if not blob:raise RuntimeError('Set GHARS_ICON_FONT to Amiri-Bold.ttf')
face=fn('hb_face_create',[ptr,uint],ptr)(blob,0)
font=fn('hb_font_create',[ptr],ptr)(face)
fn('hb_ot_font_set_funcs',[ptr],None)(font)
buf=fn('hb_buffer_create',[],ptr)()
text='غرس'.encode()
fn('hb_buffer_add_utf8',[ptr,c.c_char_p,c.c_int,uint,c.c_int],None)(buf,text,len(text),0,len(text))
fn('hb_buffer_guess_segment_properties',[ptr],None)(buf)
fn('hb_shape',[ptr,ptr,ptr,uint],None)(font,buf,None,0)
class Info(c.Structure):_fields_=[('codepoint',uint),('mask',uint),('cluster',uint),('v1',uint),('v2',uint)]
class Pos(c.Structure):_fields_=[('xa',c.c_int),('ya',c.c_int),('xo',c.c_int),('yo',c.c_int),('v',uint)]
n=uint()
infos=fn('hb_buffer_get_glyph_infos',[ptr,c.POINTER(uint)],c.POINTER(Info))(buf,c.byref(n))
positions=fn('hb_buffer_get_glyph_positions',[ptr,c.POINTER(uint)],c.POINTER(Pos))(buf,c.byref(n))
tt=TTFont(fontpath);glyphs=tt.getGlyphSet();order=tt.getGlyphOrder()
bounds=BoundsPen(glyphs);pen=SVGPathPen(glyphs);x=y=0
for i in range(n.value):
 p=positions[i];transform=(1,0,0,-1,x+p.xo,-y-p.yo)
 glyphs[order[infos[i].codepoint]].draw(TransformPen(pen,transform))
 glyphs[order[infos[i].codepoint]].draw(TransformPen(bounds,transform))
 x+=p.xa;y+=p.ya
x0,y0,x1,y1=bounds.bounds
scale=min(350/(x1-x0),290/(y1-y0))
tx=256-(x0+x1)/2*scale;ty=256-(y0+y1)/2*scale
svg=f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title>غرس</title><rect width="512" height="512" fill="#f4f0e9"/><path fill="#454e3e" transform="translate({tx} {ty}) scale({scale})" d="{pen.getCommands()}"/></svg>'
(root/'icon.svg').write_text(svg)
