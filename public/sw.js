'use strict';
const BUILD='dirhaya-v1-20260923-05';
const CACHE=BUILD+'-'+encodeURIComponent(self.registration.scope);
const FILES=['./','index.html','styles.css','core.js','storage.js','security.js','reminders.js','backups.js','i18n.js','app.js','manifest.webmanifest','icons/icon.svg','icons/apple-touch-icon.png','icons/icon-192.png','icons/icon-512.png','icons/maskable-512.png'];
const URLS=FILES.map(f=>new URL(f,self.registration.scope).href);
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(URLS.map(url=>new Request(url,{cache:'reload'})))).then(()=>self.skipWaiting())));
self.addEventListener('activate',event=>event.waitUntil((async()=>{const suffix='-'+encodeURIComponent(self.registration.scope);for(const name of await caches.keys())if(name.startsWith('dirhaya-v')&&name.endsWith(suffix)&&name!==CACHE)await caches.delete(name);await self.clients.claim()})()));
self.addEventListener('fetch',event=>{
 if(event.request.method!=='GET')return;const url=new URL(event.request.url);if(url.origin!==self.location.origin||!url.href.startsWith(self.registration.scope))return;
 if(event.request.mode==='navigate'){event.respondWith(caches.open(CACHE).then(async cache=>(await cache.match(new URL('index.html',self.registration.scope).href))||fetch(event.request)));return}
 if(URLS.includes(url.href))event.respondWith(caches.open(CACHE).then(async cache=>(await cache.match(event.request))||fetch(event.request)));
});
self.addEventListener('message',event=>{if(event.data?.type==='OFFLINE_STATUS')event.waitUntil((async()=>{const cache=await caches.open(CACHE);const complete=(await Promise.all(URLS.map(u=>cache.match(u)))).every(Boolean);event.ports[0]?.postMessage({ready:complete,build:BUILD})})())});
