/* Atomic local commits. A successful promise means the IndexedDB transaction committed. */
(function(root){'use strict';const Core=root.DirhayaCore;let db;let channel;
function open(){return new Promise((resolve,reject)=>{const r=indexedDB.open('dirhaya-private',1);r.onupgradeneeded=()=>r.result.createObjectStore('vault',{keyPath:'id'});r.onsuccess=()=>{db=r.result;db.onversionchange=()=>db.close();resolve()};r.onerror=()=>reject(r.error);r.onblocked=()=>reject(new Error('Close other Dirhaya windows and reopen the app.'))})}
function get(id='main'){return new Promise((resolve,reject)=>{const r=db.transaction('vault').objectStore('vault').get(id);r.onsuccess=()=>resolve(r.result?.data||null);r.onerror=()=>reject(r.error)})}
function commit(transform,{backup=false,clearVault=false}={}){return new Promise((resolve,reject)=>{const tx=db.transaction('vault','readwrite');const store=tx.objectStore('vault');const req=store.get('main');let next,error;req.onsuccess=()=>{try{const current=req.result?.data||Core.blank();next=transform(current);Core.validate(next);if(clearVault)store.clear();if(backup)store.put({id:'before-restore',data:current});store.put({id:'main',data:next})}catch(e){error=e;tx.abort()}};tx.oncomplete=()=>{channel?.postMessage({rev:next.rev});resolve(next)};tx.onabort=tx.onerror=()=>reject(error||tx.error||new Error('The change could not be saved.'))})}
async function init(){await open();let data=await get();if(!data)data=await commit(x=>x);Core.validate(data);try{channel=new BroadcastChannel('dirhaya-changes');channel.onmessage=()=>root.dispatchEvent(new CustomEvent('dirhaya-external-change'))}catch{}return data}
function mutate(action){return commit(current=>Core.apply(current,action))}
function restore(data){Core.validate(data);return commit(current=>({...Core.clone(data),rev:current.rev+1}),{backup:true})}
async function recover(){const data=await get('before-restore');if(!data)throw new Error('No earlier restore snapshot is available.');return restore(data)}
function resetMoney(){return commit(current=>Core.resetMoney(current),{clearVault:true})}
root.DirhayaStorage={init,get,mutate,restore,recover,resetMoney};
})(globalThis);
