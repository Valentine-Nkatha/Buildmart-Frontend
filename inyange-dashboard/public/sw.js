if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,i)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let c={};const r=e=>a(e,t),d={module:{uri:t},exports:c,require:r};s[t]=Promise.all(n.map((e=>d[e]||r(e)))).then((e=>(i(...e),c)))}}define(["./workbox-4754cb34"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"10d07ed753b9852f3576b8ff92a6060c"},{url:"/_next/static/Rd217PapneXG41vJAsv6J/_buildManifest.js",revision:"a0ae24e7f29dd3809ab75b5dd91a79dc"},{url:"/_next/static/Rd217PapneXG41vJAsv6J/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/138-2cff8f2a41832add.js",revision:"Rd217PapneXG41vJAsv6J"},{url:"/_next/static/chunks/23-b0df203525265821.js",revision:"Rd217PapneXG41vJAsv6J"},{url:"/_next/static/chunks/338-c12e273036e3af91.js",revision:"Rd217PapneXG41vJAsv6J"},{url:"/_next/static/chunks/363-7c97e5fb18c88f7b.js",revision:"Rd217PapneXG41vJAsv6J"},{url:"/_next/static/chunks/563-685b85952a0fd108.js",revision:"Rd217PapneXG41vJAsv6J"},{url:"/_next/static/chunks/648-ba62d9420d0ee250.js",revision:"Rd217PapneXG41vJAsv6J"},{url:"/_next/static/chunks/795d4814-a7567f639ee50b51.js",revision:"Rd217PapneXG41vJAsv6J"},{url:"/_next/static/chunks/8e1d74a4-257ce91b799cf6d6.js",revision:"Rd217PapneXG41vJAsv6J"},{url:"/_next/static/chunks/966-ab095fc2c239e176.js",revision:"Rd217PapneXG41vJAsv6J"},{url:"/_next/static/chunks/9c4e2130-3de43985223d66b8.js",revision:"Rd217PapneXG41vJAsv6J"},{url:"/_next/static/chunks/app/(dashboard)/dashboard/dashboard/page-fa4556ca0c74f5fe.js",revision:"Rd217PapneXG41vJAsv6J"},{url:"/_next/static/chunks/app/(dashboard)/dashboard/inventory/page-4a0528850e1bb597.js",revision:"Rd217PapneXG41vJAsv6J"},{url:"/_next/static/chunks/app/(dashboard)/dashboard/login/page-e8c0c59ae419b7dc.js",revision:"Rd217PapneXG41vJAsv6J"},{url:"/_next/static/chunks/app/(dashboard)/dashboard/order/page-39a7eca3d2e53515.js",revision:"Rd217PapneXG41vJAsv6J"},{url:"/_next/static/chunks/app/(dashboard)/dashboard/register/page-247710b2e19bc4f9.js",revision:"Rd217PapneXG41vJAsv6J"},{url:"/_next/static/chunks/app/(pwa)/pwa/components/Carpentry/page-e3df9bfb5191a082.js",revision:"Rd217PapneXG41vJAsv6J"},{url:"/_next/static/chunks/app/(pwa)/pwa/components/Cement/page-7f4cc35afec15ac8.js",revision:"Rd217PapneXG41vJAsv6J"},{url:"/_next/static/chunks/app/(pwa)/pwa/components/Homepage/page-1be07ef6dc60f1c4.js",revision:"Rd217PapneXG41vJAsv6J"},{url:"/_next/static/chunks/app/(pwa)/pwa/components/IronSheets/page-8e3913e3a9e10a4e.js",revision:"Rd217PapneXG41vJAsv6J"},{url:"/_next/static/chunks/app/(pwa)/pwa/components/Pages/page-c2c7c29df5aeb610.js",revision:"Rd217PapneXG41vJAsv6J"},{url:"/_next/static/chunks/app/(pwa)/pwa/components/Paint/page-7d0ecc3eca49f15c.js",revision:"Rd217PapneXG41vJAsv6J"},{url:"/_next/static/chunks/app/(pwa)/pwa/components/Steel/page-fb4563d7a4496043.js",revision:"Rd217PapneXG41vJAsv6J"},{url:"/_next/static/chunks/app/(pwa)/pwa/components/Tiles/page-9b9dd7fa6f77a765.js",revision:"Rd217PapneXG41vJAsv6J"},{url:"/_next/static/chunks/app/(pwa)/pwa/components/Wood/page-9565e09fbe6e8d28.js",revision:"Rd217PapneXG41vJAsv6J"},{url:"/_next/static/chunks/app/(pwa)/pwa/otherorders/page-e268f7c91b4d6f00.js",revision:"Rd217PapneXG41vJAsv6J"},{url:"/_next/static/chunks/app/_not-found/page-fac1fb87ff5b9f93.js",revision:"Rd217PapneXG41vJAsv6J"},{url:"/_next/static/chunks/app/layout-282e86e9c27b034d.js",revision:"Rd217PapneXG41vJAsv6J"},{url:"/_next/static/chunks/app/page-d502119e1c6c7f5b.js",revision:"Rd217PapneXG41vJAsv6J"},{url:"/_next/static/chunks/ee560e2c-205505e15eddc39b.js",revision:"Rd217PapneXG41vJAsv6J"},{url:"/_next/static/chunks/fd9d1056-cf087e36e340d363.js",revision:"Rd217PapneXG41vJAsv6J"},{url:"/_next/static/chunks/framework-00a8ba1a63cfdc9e.js",revision:"Rd217PapneXG41vJAsv6J"},{url:"/_next/static/chunks/main-app-f0e2d4791d4f16da.js",revision:"Rd217PapneXG41vJAsv6J"},{url:"/_next/static/chunks/main-f07dccd348de03c6.js",revision:"Rd217PapneXG41vJAsv6J"},{url:"/_next/static/chunks/pages/_app-037b5d058bd9a820.js",revision:"Rd217PapneXG41vJAsv6J"},{url:"/_next/static/chunks/pages/_error-6ae619510b1539d6.js",revision:"Rd217PapneXG41vJAsv6J"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-309f5e5598d8d171.js",revision:"Rd217PapneXG41vJAsv6J"},{url:"/_next/static/css/4e28ad8283ba2b92.css",revision:"4e28ad8283ba2b92"},{url:"/_next/static/media/4473ecc91f70f139-s.p.woff",revision:"78e6fc13ea317b55ab0bd6dc4849c110"},{url:"/_next/static/media/463dafcda517f24f-s.p.woff",revision:"cbeb6d2d96eaa268b4b5beb0b46d9632"},{url:"/images/Tiles.png",revision:"0630d09cabea2c44c33ceff2745167d2"},{url:"/images/bmLogo.png",revision:"2acc9d00cc37eddc10a77e1ff8a93abd"},{url:"/images/bmlogo.png",revision:"768e5339762a05c9903a89c71c827f58"},{url:"/images/bolt.jpg",revision:"5e21d2305918aca6e9fd46b479ec6f33"},{url:"/images/build.png",revision:"0504cd449f63e6985b15d270b8b15dd5"},{url:"/images/cap.jpg",revision:"db105a497f7b478ae5b7a420ad716189"},{url:"/images/carpentry.jpg",revision:"8e86d831e8553c68be23572558ce01d2"},{url:"/images/construction.png",revision:"a04927a1312f0a181bf8a9910d26aa3c"},{url:"/images/duracem.jpg",revision:"d073b4f2c303854e5af30bf7c48a806c"},{url:"/images/google.png",revision:"68b6685d528563ffba5340a324a4bd86"},{url:"/images/hardwaretools.png",revision:"97ab8c49b8b06188d107b07dc11097e9"},{url:"/images/image (7).png",revision:"1a6ec0f7516541daa7cef4f55f7dbf31"},{url:"/images/logo.png",revision:"dff889bd62e61addffd64d15740731b7"},{url:"/images/paint.jpg",revision:"b357036d932ac77c2682a83f16a271a8"},{url:"/images/placeholder-image.png",revision:"6c6baa4fe9fabddd5def58c8c34949b3"},{url:"/images/sheets.jpg",revision:"1742ef191e489f48b813d01eb319c42f"},{url:"/images/steel.png",revision:"8aa3e663f45f219a74f263a114406dad"},{url:"/images/tembo.jpg",revision:"3427efb5aaa0edeaaa6e9fdf26625608"},{url:"/images/tiles.jpg",revision:"bd9da7d0fe39c529ee98ccd126da1aac"},{url:"/images/wood.jpg",revision:"35b474c10e2d7039b0657ebc0ec75768"},{url:"/manifest.json",revision:"acfc376a736d6b076870650b235d823a"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
