const fs=require('node:fs'),path=require('node:path');
const root=__dirname,dest=path.join(root,'docs');
fs.rmSync(dest,{recursive:true,force:true});
fs.cpSync(path.join(root,'public'),dest,{recursive:true});
console.log('Generated docs/ from public/ for GitHub Pages.');
