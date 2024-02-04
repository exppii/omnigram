(()=>{"use strict";var e={7:()=>{try{self["workbox:core:6.6.0"]&&_()}catch(e){}},361:()=>{try{self["workbox:precaching:6.6.0"]&&_()}catch(e){}},74:()=>{try{self["workbox:routing:6.6.0"]&&_()}catch(e){}},628:()=>{try{self["workbox:strategies:6.6.0"]&&_()}catch(e){}}},t={};function s(a){var n=t[a];if(void 0!==n)return n.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,s),i.exports}(()=>{s(7);const e=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s};class t extends Error{constructor(t,s){super(e(t,s)),this.name=t,this.details=s}}const a={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},n=e=>[a.prefix,e,a.suffix].filter((e=>e&&e.length>0)).join("-"),i=e=>e||n(a.precache),r=e=>e||n(a.runtime);function c(e,t){const s=t();return e.waitUntil(s),s}s(361);function o(e){if(!e)throw new t("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:s,url:a}=e;if(!a)throw new t("add-to-cache-list-unexpected-type",{entry:e});if(!s){const e=new URL(a,location.href);return{cacheKey:e.href,url:e.href}}const n=new URL(a,location.href),i=new URL(a,location.href);return n.searchParams.set("__WB_REVISION__",s),{cacheKey:n.href,url:i.href}}class h{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class l{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=(null==t?void 0:t.cacheKey)||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s,{headers:e.headers}):e},this._precacheController=e}}let u;async function f(e,s){let a=null;if(e.url){a=new URL(e.url).origin}if(a!==self.location.origin)throw new t("cross-origin-copy-response",{origin:a});const n=e.clone(),i={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},r=s?s(i):i,c=function(){if(void 0===u){const e=new Response("");if("body"in e)try{new Response(e.body),u=!0}catch(e){u=!1}u=!1}return u}()?n.body:await n.blob();return new Response(c,r)}function d(e,t){const s=new URL(e);for(const e of t)s.searchParams.delete(e);return s.href}class p{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const g=new Set;s(628);function y(e){return"string"==typeof e?new Request(e):e}class w{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new p,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:s}=this;let a=y(e);if("navigate"===a.mode&&s instanceof FetchEvent&&s.preloadResponse){const e=await s.preloadResponse;if(e)return e}const n=this.hasCallback("fetchDidFail")?a.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))a=await e({request:a.clone(),event:s})}catch(e){if(e instanceof Error)throw new t("plugin-error-request-will-fetch",{thrownErrorMessage:e.message})}const i=a.clone();try{let e;e=await fetch(a,"navigate"===a.mode?void 0:this._strategy.fetchOptions);for(const t of this.iterateCallbacks("fetchDidSucceed"))e=await t({event:s,request:i,response:e});return e}catch(e){throw n&&await this.runCallbacks("fetchDidFail",{error:e,event:s,originalRequest:n.clone(),request:i.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=y(e);let s;const{cacheName:a,matchOptions:n}=this._strategy,i=await this.getCacheKey(t,"read"),r=Object.assign(Object.assign({},n),{cacheName:a});s=await caches.match(i,r);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await e({cacheName:a,matchOptions:n,cachedResponse:s,request:i,event:this.event})||void 0;return s}async cachePut(e,s){const a=y(e);var n;await(n=0,new Promise((e=>setTimeout(e,n))));const i=await this.getCacheKey(a,"write");if(!s)throw new t("cache-put-with-no-response",{url:(r=i.url,new URL(String(r),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var r;const c=await this._ensureResponseSafeToCache(s);if(!c)return!1;const{cacheName:o,matchOptions:h}=this._strategy,l=await self.caches.open(o),u=this.hasCallback("cacheDidUpdate"),f=u?await async function(e,t,s,a){const n=d(t.url,s);if(t.url===n)return e.match(t,a);const i=Object.assign(Object.assign({},a),{ignoreSearch:!0}),r=await e.keys(t,i);for(const t of r)if(n===d(t.url,s))return e.match(t,a)}(l,i.clone(),["__WB_REVISION__"],h):null;try{await l.put(i,u?c.clone():c)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await async function(){for(const e of g)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:o,oldResponse:f,newResponse:c.clone(),request:i,event:this.event});return!0}async getCacheKey(e,t){const s=`${e.url} | ${t}`;if(!this._cacheKeys[s]){let a=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))a=y(await e({mode:t,request:a,event:this.event,params:this.params}));this._cacheKeys[s]=a}return this._cacheKeys[s]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const s=this._pluginStateMap.get(t),a=a=>{const n=Object.assign(Object.assign({},a),{state:s});return t[e](n)};yield a}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class _{constructor(e={}){this.cacheName=r(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,a="params"in e?e.params:void 0,n=new w(this,{event:t,request:s,params:a}),i=this._getResponse(n,s,t);return[i,this._awaitComplete(i,n,s,t)]}async _getResponse(e,s,a){let n;await e.runCallbacks("handlerWillStart",{event:a,request:s});try{if(n=await this._handle(s,e),!n||"error"===n.type)throw new t("no-response",{url:s.url})}catch(t){if(t instanceof Error)for(const i of e.iterateCallbacks("handlerDidError"))if(n=await i({error:t,event:a,request:s}),n)break;if(!n)throw t}for(const t of e.iterateCallbacks("handlerWillRespond"))n=await t({event:a,request:s,response:n});return n}async _awaitComplete(e,t,s,a){let n,i;try{n=await e}catch(i){}try{await t.runCallbacks("handlerDidRespond",{event:a,request:s,response:n}),await t.doneWaiting()}catch(e){e instanceof Error&&(i=e)}if(await t.runCallbacks("handlerDidComplete",{event:a,request:s,response:n,error:i}),t.destroy(),i)throw i}}class v extends _{constructor(e={}){e.cacheName=i(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(v.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const s=await t.cacheMatch(e);return s||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,s){let a;const n=s.params||{};if(!this._fallbackToNetwork)throw new t("missing-precache-entry",{cacheName:this.cacheName,url:e.url});{0;const t=n.integrity,i=e.integrity,r=!i||i===t;if(a=await s.fetch(new Request(e,{integrity:"no-cors"!==e.mode?i||t:void 0})),t&&r&&"no-cors"!==e.mode){this._useDefaultCacheabilityPluginIfNeeded();await s.cachePut(e,a.clone());0}}return a}async _handleInstall(e,s){this._useDefaultCacheabilityPluginIfNeeded();const a=await s.fetch(e);if(!await s.cachePut(e,a.clone()))throw new t("bad-precaching-response",{url:e.url,status:a.status});return a}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,a]of this.plugins.entries())a!==v.copyRedirectedCacheableResponsesPlugin&&(a===v.defaultPrecacheCacheabilityPlugin&&(e=s),a.cacheWillUpdate&&t++);0===t?this.plugins.push(v.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}v.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},v.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await f(e):e};class m{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new v({cacheName:i(e),plugins:[...t,new l({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const s=[];for(const a of e){"string"==typeof a?s.push(a):a&&void 0===a.revision&&s.push(a.url);const{cacheKey:e,url:n}=o(a),i="string"!=typeof a&&a.revision?"reload":"default";if(this._urlsToCacheKeys.has(n)&&this._urlsToCacheKeys.get(n)!==e)throw new t("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(n),secondEntry:e});if("string"!=typeof a&&a.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==a.integrity)throw new t("add-to-cache-list-conflicting-integrities",{url:n});this._cacheKeysToIntegrities.set(e,a.integrity)}if(this._urlsToCacheKeys.set(n,e),this._urlsToCacheModes.set(n,i),s.length>0){const e=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return c(e,(async()=>{const t=new h;this.strategy.plugins.push(t);for(const[t,s]of this._urlsToCacheKeys){const a=this._cacheKeysToIntegrities.get(s),n=this._urlsToCacheModes.get(t),i=new Request(t,{integrity:a,cache:n,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:i,event:e}))}const{updatedURLs:s,notUpdatedURLs:a}=t;return{updatedURLs:s,notUpdatedURLs:a}}))}activate(e){return c(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),a=[];for(const n of t)s.has(n.url)||(await e.delete(n),a.push(n.url));return{deletedURLs:a}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(e){const s=this.getCacheKeyForURL(e);if(!s)throw new t("non-precached-url",{url:e});return t=>(t.request=new Request(e),t.params=Object.assign({cacheKey:s},t.params),this.strategy.handle(t))}}s(74);(async()=>{const e=function(){const e=JSON.parse(new URLSearchParams(self.location.search).get("params"));return e.debug&&console.log("[Docusaurus-PWA][SW]: Service Worker params:",e),e}(),t=[{"revision":"9afe034b698adffdbcfa3c1201edc076","url":"404.html"},{"revision":"b8171430bf33ee71ab711e54d99d0849","url":"assets/css/styles.60290e15.css"},{"revision":"2353739404e3429e614ade8ffcbda018","url":"assets/js/10989d85.f40a3c2f.js"},{"revision":"ebbe6f6cda709b1b29e52f92eadb5b6f","url":"assets/js/13055719.5ccff087.js"},{"revision":"121ba0791226dcd984c176ca153bab31","url":"assets/js/164.cf97450d.js"},{"revision":"ab13569c37c289a0f8bfb567445e6c50","url":"assets/js/17896441.06cd64f7.js"},{"revision":"0ab4ddb81ac57c80e435e482c1571af2","url":"assets/js/1a4e3797.e8588bb0.js"},{"revision":"876b455e1fd9da329144e549b17858f5","url":"assets/js/1df93b7f.12cbc80b.js"},{"revision":"6d55e74fdbe91c60ebe273904eecd488","url":"assets/js/219.be57d843.js"},{"revision":"1c81b611c17bb5ffe6cc65829509da54","url":"assets/js/240.6ee5b06e.js"},{"revision":"5a8ad6b5d9ce92f61a057b11c045578c","url":"assets/js/254aa4f3.e095655a.js"},{"revision":"d3659f579ab74a4d8174e0a2b2c07924","url":"assets/js/306a8c6c.c2373180.js"},{"revision":"65148e649e5d24e7180cef8ea9224acf","url":"assets/js/36d9665f.61077d7b.js"},{"revision":"c0b4815091bf6b8a8ffa46bb40953032","url":"assets/js/400.910b282e.js"},{"revision":"5fc6c1e28d7e399391a0bdbc9b649617","url":"assets/js/5157bbb9.8d3dad60.js"},{"revision":"d6d53c84c7cb2f13e99002504bc0464b","url":"assets/js/528.5e9f7f02.js"},{"revision":"b839d64719212cba4203014646a92a11","url":"assets/js/5deaec57.f3c4eda5.js"},{"revision":"c35ee6fcaad739156eb58bfbbe06ec57","url":"assets/js/5e95c892.871f30e5.js"},{"revision":"7ee5adeeffbeb8043c352e0bc7bd462c","url":"assets/js/639.615031a3.js"},{"revision":"6407325aa40839aaf0a00bc8719f26bd","url":"assets/js/669.5cba9ab0.js"},{"revision":"d336333c4649c70bc42d9dc9693bdaab","url":"assets/js/6fcb0a8b.62550228.js"},{"revision":"43ea12ba344e15866e646e2ebf4d76d1","url":"assets/js/726.81a0a33e.js"},{"revision":"4def14042c320f191c448a3d3bdbff5b","url":"assets/js/810.664603c9.js"},{"revision":"4ef8f4b15a1f9073ad19945250f8cc52","url":"assets/js/8c2fcec2.fd50592e.js"},{"revision":"a1db37ba004b7b430a0126a64a822adb","url":"assets/js/935f2afb.8a6b572e.js"},{"revision":"f1a74860a4023cb33532c9a832a70c11","url":"assets/js/970.8e7cbdb3.js"},{"revision":"06d4cff330a2342cc88a7cdb7c5dab6e","url":"assets/js/a7bd4aaa.d686f22c.js"},{"revision":"5f9ded5afe16473221ba8d4ac6cf4f36","url":"assets/js/a94703ab.089de58e.js"},{"revision":"8db80253ca55b9f53d6403c880ec153b","url":"assets/js/ad32ed03.03ce34ca.js"},{"revision":"175ce7c5e7d0c1abfb0811a621ecd6ab","url":"assets/js/c7257144.4ba8a896.js"},{"revision":"25cbba6b9ad2b6906272e032164f2925","url":"assets/js/dac37d5e.5e06bde2.js"},{"revision":"ab564ffd4ff86bff1370e6a9a3037b3c","url":"assets/js/db3cbd99.31149033.js"},{"revision":"849bc51c3d5039f0cc98b252a4d8cd71","url":"assets/js/e25e564e.378a4e0f.js"},{"revision":"18eb804d7bc9546a986200e084340ea6","url":"assets/js/ec4b1c94.1038c961.js"},{"revision":"05796b001207a4e379df18609e9f28ce","url":"assets/js/f31a8352.38ecfe10.js"},{"revision":"1cf5a0a056a8e3f54f9fc73bed90b5e4","url":"assets/js/faec33b3.b1a3f4b2.js"},{"revision":"86d0bf64a293f352ce3d4dd58bef38f4","url":"assets/js/main.cc13a4e2.js"},{"revision":"ec2befedbfd45d01dda8ef24e0a3e312","url":"assets/js/runtime~main.ce0706d4.js"},{"revision":"ef5117045fc5da0f07c23b9e41b96860","url":"changelog/index.html"},{"revision":"920280c2faa61ec574e687a8390cd697","url":"docs/install/best_practice/index.html"},{"revision":"889e15d179fd3619114f395eff86d5db","url":"docs/install/index.html"},{"revision":"2d6cae5311610e51859355dcf1c52ba1","url":"docs/install/requirements/index.html"},{"revision":"0636ebabcd34b8bd90799e4a6bf3fd98","url":"docs/intro/index.html"},{"revision":"3b1d221ce82c04b058d68cbb283748c8","url":"docs/overviews/getting_start/index.html"},{"revision":"9ee46547df236c99358a096643ef42ad","url":"docs/overviews/index.html"},{"revision":"f8c4ae577e007f68add83e29b372fa37","url":"docs/overviews/support/index.html"},{"revision":"a0916119d4cb5dace611fd7f3fc3981b","url":"downloads/index.html"},{"revision":"3f271fa123d118b869a7fb845059d112","url":"faq/index.html"},{"revision":"9f537a67377d21131769b56ce852262e","url":"index.html"},{"revision":"027e42f2c504032d9b15f1fc3d904647","url":"manifest.json"},{"revision":"08829e9ff13899e689ea4d8b61341ae2","url":"privacypolicy/index.html"},{"revision":"38ff6c877392d99b5aa0b2cfeea237bf","url":"search/index.html"},{"revision":"b560605e92cc356536de6cf33e873d2e","url":"terms-conditions/index.html"},{"revision":"9454d99f4fc5c7aeb3592114ba1f45ea","url":"assets/images/hero-ff6888f3eb11407b2a4a5003fce54f57.png"},{"revision":"7fdbb89d16dfadc22058a4b1ec5ee8ce","url":"img/android-chrome-128x128.png"},{"revision":"4abab60b4e15d2747ec7fc6f306302f6","url":"img/android-chrome-192x192.png"},{"revision":"ae96285c0eb26cdec3647bd2db6e8be5","url":"img/android-chrome-512x512.png"},{"revision":"d5fa55524fab56a82ffcbd25f500b999","url":"img/apple-touch-icon.png"},{"revision":"6dd69b209b34b700b1577bea1dc031bc","url":"img/banner.png"},{"revision":"501b8a977b78e921a28b11c7a1439942","url":"img/banner.svg"},{"revision":"83bf5bb9354d08c16398105994dd18ef","url":"img/docs.png"},{"revision":"a0fa261c27b2e5398f06c257e978c314","url":"img/docs.svg"},{"revision":"7192fcf23f6a321eb2b2d26e75227c8b","url":"img/favicon-16x16.png"},{"revision":"2c4c2d6bbd4e3a6d4200eb894a9fdcac","url":"img/favicon-32x32.png"},{"revision":"c49c4b8624796dca95cb9b927ac27613","url":"img/favicon.ico"},{"revision":"7207ea16e5566fbc8b6cc2c037182752","url":"img/feature-one.svg"},{"revision":"9454d99f4fc5c7aeb3592114ba1f45ea","url":"img/hero.png"},{"revision":"4abab60b4e15d2747ec7fc6f306302f6","url":"img/icon-192x192.png"},{"revision":"a6776d5bb84359ac8a78035c2488cc9c","url":"img/icon-256x256.png"},{"revision":"6c20b0ffe8b4e5f2b4c1efd644b44788","url":"img/icon-384x384.png"},{"revision":"ae96285c0eb26cdec3647bd2db6e8be5","url":"img/icon-512x512.png"},{"revision":"89f1be2f12a55853900819f9bb77beea","url":"img/logo_white.svg"},{"revision":"a9eecbf072460fb4b4f1c6ba7894b398","url":"img/logo_with_letter_dark.svg"},{"revision":"1da80fb8d124735bc8d9789a6b016394","url":"img/logo_with_letter_white.svg"},{"revision":"5ff7217759ad4d2d8b129449c4c467ad","url":"img/logo.png"},{"revision":"ee29ccb0d2be31e1dc65d01f4a9d45ec","url":"img/logo.svg"},{"revision":"5ff7217759ad4d2d8b129449c4c467ad","url":"img/nightly.png"},{"revision":"ee29ccb0d2be31e1dc65d01f4a9d45ec","url":"img/nightly.svg"},{"revision":"bc7ce332372c824fada0bafb40e7a75f","url":"img/powered-by-vercel.svg"},{"revision":"abc4c278dc5ec2aae432c99e2a665eb7","url":"img/safari-pinned-tab.svg"},{"revision":"685912084c24cc86f954158a41de3dc2","url":"img/smart-screen-more-info.png"},{"revision":"b72b446710600e04d134014c8b2aebaf","url":"img/smart-screen.png"},{"revision":"0d453041583da6e119cc9ceab093f0c2","url":"img/struct.svg"},{"revision":"77e10d78d2d46e2c13a2d93f8c7ca0f7","url":"img/undraw_innovative_b409.svg"},{"revision":"432aaadf2e9ebf52f8e045d81d084726","url":"img/undraw_options_re_9vxh.svg"},{"revision":"9a499e966753a62e93f0898734311f30","url":"img/undraw_progressive_app_m-9-ms.svg"},{"revision":"5c777d39f161e891a7f0a9cb30fb8465","url":"img/undraw_sweet_home_dkhr.svg"},{"revision":"e2c3271576c410d8b097ed9809cb6539","url":"Raleway.ttf"},{"revision":"9e06bf8e4155ad3a942a9ff38f59fbc4","url":"RobotoMono.ttf"}],s=new m({fallbackToNetwork:!0});e.offlineMode&&(s.addToCacheList(t),e.debug&&console.log("[Docusaurus-PWA][SW]: addToCacheList",{precacheManifest:t})),await async function(e){}(),self.addEventListener("install",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: install event",{event:t}),t.waitUntil(s.install(t))})),self.addEventListener("activate",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: activate event",{event:t}),t.waitUntil(s.activate(t))})),self.addEventListener("fetch",(async t=>{if(e.offlineMode){const a=t.request.url,n=function(e){const t=new URL(e,self.location.href);return t.origin!==self.location.origin?[]:(t.search="",t.hash="",[t.href,`${t.href}${t.pathname.endsWith("/")?"":"/"}index.html`])}(a);for(const i of n){const r=s.getCacheKeyForURL(i);if(r){const s=caches.match(r);e.debug&&console.log("[Docusaurus-PWA][SW]: serving cached asset",{requestURL:a,possibleURL:i,possibleURLs:n,cacheKey:r,cachedResponse:s}),t.respondWith(s);break}}}})),self.addEventListener("message",(async t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: message event",{event:t});const s=t.data?.type;"SKIP_WAITING"===s&&self.skipWaiting()}))})()})()})();