/* Local passkey screen lock. This does not encrypt IndexedDB or exported backups. */
(function(root){'use strict';
const key='dirhaya-screen-lock:'+root.location.pathname.replace(/[^/]*$/,''),utf8=new TextEncoder();let pending=null;
const bytes=x=>new Uint8Array(x),b64=x=>btoa(String.fromCharCode(...bytes(x))).replace(/\+/g,'-').replace(/\//g,'_').replace(/=+$/,''),un64=x=>Uint8Array.from(atob(x.replace(/-/g,'+').replace(/_/g,'/')),c=>c.charCodeAt(0));
const random=()=>crypto.getRandomValues(new Uint8Array(32)),hash=x=>crypto.subtle.digest('SHA-256',x),fail=()=>{throw Error('The device identity could not be verified. Try again or use your recovery code.')};
function enabled(){return root.localStorage.getItem(key)!==null}
function config(){const c=JSON.parse(root.localStorage.getItem(key)||'null');if(!c||c.version!==1||typeof c.id!=='string'||typeof c.publicKey!=='string'||typeof c.recoveryHash!=='string')fail();return c}
async function supported(){return !!(root.isSecureContext&&root.PublicKeyCredential&&navigator.credentials&&crypto.subtle&&await PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable())}
async function checkData(response,challenge,type){const d=JSON.parse(new TextDecoder().decode(response.clientDataJSON));if(d.type!==type||d.challenge!==b64(challenge)||d.origin!==root.location.origin||d.crossOrigin===true)fail();const a=bytes(response.authenticatorData||response.getAuthenticatorData?.());if(a.length<37||(a[32]&5)!==5)fail();const rp=bytes(await hash(utf8.encode(root.location.hostname)));if(!rp.every((v,i)=>v===a[i]))fail();return a}
function signatureRaw(data){const a=bytes(data);let p=0;if(a[p++]!==48||a[p++]!==a.length-2)fail();const out=new Uint8Array(64);for(let i=0;i<2;i++){if(a[p++]!==2)fail();const length=a[p++];if(length<1||length>33||p+length>a.length)fail();let n=a.slice(p,p+length);p+=length;if(n[0]&128)fail();if(n.length===33){if(n[0]!==0)fail();n=n.slice(1)}out.set(n,32*i+32-n.length)}if(p!==a.length)fail();return out}
async function authenticate(c=config()){
 const challenge=random(),credential=await navigator.credentials.get({publicKey:{challenge,rpId:root.location.hostname,allowCredentials:[{type:'public-key',id:un64(c.id)}],userVerification:'required',timeout:60000}});
 if(!credential||credential.type!=='public-key'||b64(credential.rawId)!==c.id)fail();const auth=await checkData(credential.response,challenge,'webauthn.get'),clientHash=bytes(await hash(credential.response.clientDataJSON)),data=new Uint8Array(auth.length+32);data.set(auth);data.set(clientHash,auth.length);
 const publicKey=await crypto.subtle.importKey('spki',un64(c.publicKey),{name:'ECDSA',namedCurve:'P-256'},false,['verify']);if(!await crypto.subtle.verify({name:'ECDSA',hash:'SHA-256'},publicKey,signatureRaw(credential.response.signature),data))fail();return true;
}
async function prepare(){
 if(enabled())throw Error('The app lock is already enabled.');if(!await supported())throw Error('Device passkeys are unavailable here. Open the installed HTTPS app on a device with Face ID, Touch ID or a screen lock.');
 const challenge=random(),credential=await navigator.credentials.create({publicKey:{challenge,rp:{name:'Ghars',id:root.location.hostname},user:{id:random(),name:'Ghars device lock',displayName:'Ghars device lock'},pubKeyCredParams:[{type:'public-key',alg:-7}],authenticatorSelection:{authenticatorAttachment:'platform',residentKey:'required',userVerification:'required'},attestation:'none',timeout:60000}});
 if(!credential||credential.type!=='public-key'||credential.response.getPublicKeyAlgorithm?.()!==-7||!credential.response.getPublicKey?.())throw Error('This browser does not expose the required passkey verification data. Lock was not enabled.');
 await checkData(credential.response,challenge,'webauthn.create');const recovery=Array.from(random().slice(0,16),x=>x.toString(16).padStart(2,'0')).join('').toUpperCase();
 const candidate={version:1,id:b64(credential.rawId),publicKey:b64(credential.response.getPublicKey()),recoveryHash:b64(await hash(utf8.encode(recovery)))};
 // Verify the newly created credential before enabling a lock that depends on it.
 await authenticate(candidate);pending=candidate;return recovery.match(/.{4}/g).join('-');
}
function activate(){if(!pending)throw Error('Set up your passkey first.');root.localStorage.setItem(key,JSON.stringify(pending));pending=null}
function cancel(){pending=null}
async function disable(){await authenticate();root.localStorage.removeItem(key)}
async function recover(code){const c=config(),normal=String(code).replace(/[\s-]/g,'').toUpperCase();if(!/^[0-9A-F]{32}$/.test(normal)||b64(await hash(utf8.encode(normal)))!==c.recoveryHash)throw Error('Recovery code does not match.');root.localStorage.removeItem(key);return true}
root.DirhayaSecurity={enabled,supported,prepare,activate,cancel,authenticate,disable,recover};
})(globalThis);
