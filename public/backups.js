/* Offline backup files. No passwords, keys or financial records leave this module over a network. */
(function(root,factory){const value=factory(typeof module==='object'&&module.exports?require('./core.js'):root.DirhayaCore);if(typeof module==='object'&&module.exports)module.exports=value;else root.DirhayaBackups=value})(globalThis,function(Core){
'use strict';
const MAX_BYTES=35*1024*1024,ITERATIONS=600000;
const header={format:'ghars-encrypted',version:1,cipher:'AES-GCM',kdf:'PBKDF2-SHA256',iterations:ITERATIONS};
const encoder=new TextEncoder();
function cryptoAPI(){if(!globalThis.crypto?.subtle)throw new Error('Encrypted backups need the installed HTTPS app and device encryption support.');return globalThis.crypto}
function passwordOK(password){if(typeof password!=='string'||password.length<12||password.length>1024)throw new Error('Use a backup password of 12–1024 characters. A long, unique passphrase is best.');return password}
function base64(bytes){let s='';for(let i=0;i<bytes.length;i+=8192)s+=String.fromCharCode(...bytes.subarray(i,i+8192));return btoa(s)}
function bytes(text){if(typeof text!=='string'||text.length>MAX_BYTES||text.length%4!==0||!/^[A-Za-z0-9+/]*={0,2}$/.test(text))throw new Error('The encrypted backup is damaged.');return Uint8Array.from(atob(text),x=>x.charCodeAt(0))}
async function key(password,salt,usage){const c=cryptoAPI(),material=await c.subtle.importKey('raw',encoder.encode(passwordOK(password)),'PBKDF2',false,['deriveKey']);return c.subtle.deriveKey({name:'PBKDF2',salt,iterations:ITERATIONS,hash:'SHA-256'},material,{name:'AES-GCM',length:256},false,[usage])}
async function digest(text){return [...new Uint8Array(await cryptoAPI().subtle.digest('SHA-256',encoder.encode(text)))].map(b=>b.toString(16).padStart(2,'0')).join('')}
function parse(text){if(typeof text!=='string'||text.length>MAX_BYTES||encoder.encode(text).length>MAX_BYTES)throw new Error('Choose a Ghars backup smaller than 35 MB.');let data;try{data=JSON.parse(text.replace(/^\uFEFF/,''))}catch{throw new Error('This file is not a readable JSON backup. Choose the .json or older .dirhaya backup.')}if(!data||typeof data!=='object'||Array.isArray(data))throw new Error('This is not a Ghars backup.');return data}
function encrypted(data){return data?.format==='ghars-encrypted'}
async function encode(data,password){
 Core.validate(data);const c=cryptoAPI(),salt=c.getRandomValues(new Uint8Array(16)),iv=c.getRandomValues(new Uint8Array(12));
 const ciphertext=await c.subtle.encrypt({name:'AES-GCM',iv,additionalData:encoder.encode(JSON.stringify(header)),tagLength:128},await key(password,salt,'encrypt'),encoder.encode(JSON.stringify(data)));
 return JSON.stringify({...header,salt:base64(salt),iv:base64(iv),ciphertext:base64(new Uint8Array(ciphertext))});
}
async function decode(text,password){
 const data=parse(text);if(!encrypted(data))return Core.validate(data);
 for(const [name,value] of Object.entries(header))if(data[name]!==value)throw new Error('This encrypted backup version is not supported. Update Ghars or choose another backup.');
 const salt=bytes(data.salt),iv=bytes(data.iv),ciphertext=bytes(data.ciphertext);if(salt.length!==16||iv.length!==12||ciphertext.length<17)throw new Error('The encrypted backup is damaged.');
 const secret=await key(password,salt,'decrypt');let raw;
 try{raw=await cryptoAPI().subtle.decrypt({name:'AES-GCM',iv,additionalData:encoder.encode(JSON.stringify(header)),tagLength:128},secret,ciphertext)}catch{throw new Error('The password is incorrect or the backup is damaged. Your current records are unchanged.')}
 let decoded;try{decoded=new TextDecoder('utf-8',{fatal:true}).decode(raw)}catch{throw new Error('The backup contents are damaged.')}
 return Core.validate(parse(decoded));
}
async function create(state,{password=null,demo=false}={}){
 Core.validate(state);const at=Date.now(),backupId=cryptoAPI().randomUUID(),data={...Core.clone(state),exportedAt:new Date(at).toISOString(),backupId};
 const text=password===null?JSON.stringify(data):await encode(data,password);parse(text);
 const filename=`Ghars-${demo?'DEMO-':''}${Core.localDate()}-${new Date(at).toISOString().slice(11,19).replace(/:/g,'')}-${backupId.slice(0,6)}${password===null?'':'-encrypted'}.json`;
 return {text,record:{at,filename,revision:state.rev,digest:await digest(text),backupId,encrypted:password!==null}};
}
async function inspect(text,password,filename){const data=await decode(text,password);return {data,record:{at:Date.now(),filename:String(filename||'Backup.json').slice(0,240),digest:await digest(text),revision:data.rev,backupId:data.backupId||null,exportedAt:data.exportedAt||null,encrypted:encrypted(parse(text))}}}
return {MAX_BYTES,ITERATIONS,parse,encrypted,encode,decode,create,inspect,digest,passwordOK};
});
