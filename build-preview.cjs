/* A self-contained, explicitly non-persistent review copy of the actual UI. */
const fs=require('node:fs'),path=require('node:path');
const root=path.join(__dirname,'public');
const read=name=>fs.readFileSync(path.join(root,name),'utf8');
const inline=source=>'<script>'+source.replace(/<\/script/gi,'<\\/script')+'</script>';
let html=read('index.html');
html=html.replace(/<meta http-equiv="Content-Security-Policy"[^>]+>/,'<meta http-equiv="Content-Security-Policy" content="default-src \'none\'; script-src \'unsafe-inline\'; style-src \'unsafe-inline\'; img-src data: blob:; font-src \'self\'; connect-src \'none\'; worker-src \'none\'; object-src \'none\'; base-uri \'none\'; form-action \'none\'">');
html=html.replace(/\s*<link rel="manifest"[^>]+>/,'').replace(/\s*<link rel="apple-touch-icon"[^>]+>/,'');
html=html.replace('href="icons/icon.svg"','href="data:image/svg+xml;base64,'+Buffer.from(read('icons/icon.svg')).toString('base64')+'"');
html=html.replace('<link rel="stylesheet" href="styles.css">',()=>'<style>'+read('styles.css')+'</style>');
html=html.replace('<script src="core.js"></script>',()=>inline('window.DIRHAYA_PREVIEW=true;\n'+read('core.js')));
const memory=`(()=>{const C=DirhayaCore;let state=C.blank(),previous=null;window.DirhayaStorage={async init(){return C.clone(state)},async get(){return C.clone(state)},async mutate(action){state=C.apply(state,action);return C.clone(state)},async restore(data){C.validate(data);previous=C.clone(state);state=C.clone(data);return C.clone(state)},async recover(){if(!previous)throw new Error('No preview snapshot.');const swap=state;state=previous;previous=swap;return C.clone(state)}}})();`;
html=html.replace('<script src="storage.js"></script>',()=>inline(memory));
html=html.replace('<script src="app.js"></script>',()=>inline(read('app.js')));
html=html.replace('<title>Dirhaya · Your money, with a direction</title>','<title>Dirhaya · Interactive preview · changes are not saved</title>');
const destination=process.argv[2]?path.resolve(process.argv[2]):path.join(__dirname,'preview.html');
fs.mkdirSync(path.dirname(destination),{recursive:true});fs.writeFileSync(destination,html);
console.log(destination);
