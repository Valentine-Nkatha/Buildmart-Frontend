if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,t)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let c={};const o=e=>a(e,n),r={module:{uri:n},exports:c,require:o};s[n]=Promise.all(i.map((e=>r[e]||o(e)))).then((e=>(t(...e),c)))}}define(["./workbox-4d767a27"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"3e7dbbb36be214b3d7c6937e8564a020"},{url:"/_next/static/OSt88io9ph9zVVLAL1F8f/_buildManifest.js",revision:"a0ae24e7f29dd3809ab75b5dd91a79dc"},{url:"/_next/static/OSt88io9ph9zVVLAL1F8f/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/138-d134ff15ffbc84d9.js",revision:"OSt88io9ph9zVVLAL1F8f"},{url:"/_next/static/chunks/23-4605e3eb844ab933.js",revision:"OSt88io9ph9zVVLAL1F8f"},{url:"/_next/static/chunks/291-d83037f072599847.js",revision:"OSt88io9ph9zVVLAL1F8f"},{url:"/_next/static/chunks/563-7c61ac022cf8907e.js",revision:"OSt88io9ph9zVVLAL1F8f"},{url:"/_next/static/chunks/648-3071c77f605f397b.js",revision:"OSt88io9ph9zVVLAL1F8f"},{url:"/_next/static/chunks/795d4814-a7567f639ee50b51.js",revision:"OSt88io9ph9zVVLAL1F8f"},{url:"/_next/static/chunks/807-bf0a39f80f67549c.js",revision:"OSt88io9ph9zVVLAL1F8f"},{url:"/_next/static/chunks/8e1d74a4-257ce91b799cf6d6.js",revision:"OSt88io9ph9zVVLAL1F8f"},{url:"/_next/static/chunks/945-4afa4e49738b97ac.js",revision:"OSt88io9ph9zVVLAL1F8f"},{url:"/_next/static/chunks/966-d8011ede4d362318.js",revision:"OSt88io9ph9zVVLAL1F8f"},{url:"/_next/static/chunks/9c4e2130-3de43985223d66b8.js",revision:"OSt88io9ph9zVVLAL1F8f"},{url:"/_next/static/chunks/app/(dashboard)/dashboard/dashboard/page-7a21d1944ffc5d69.js",revision:"OSt88io9ph9zVVLAL1F8f"},{url:"/_next/static/chunks/app/(dashboard)/dashboard/inventory/page-fea3f6d1a6f39aba.js",revision:"OSt88io9ph9zVVLAL1F8f"},{url:"/_next/static/chunks/app/(dashboard)/dashboard/login/page-c907fa59375b1889.js",revision:"OSt88io9ph9zVVLAL1F8f"},{url:"/_next/static/chunks/app/(dashboard)/dashboard/register/page-f29b32092dfbd658.js",revision:"OSt88io9ph9zVVLAL1F8f"},{url:"/_next/static/chunks/app/(pwa)/pwa/carpentry/page-1cbbceaa332139fd.js",revision:"OSt88io9ph9zVVLAL1F8f"},{url:"/_next/static/chunks/app/(pwa)/pwa/cement/page-274c81403451d94b.js",revision:"OSt88io9ph9zVVLAL1F8f"},{url:"/_next/static/chunks/app/(pwa)/pwa/homepage/page-809c20c406cd4a84.js",revision:"OSt88io9ph9zVVLAL1F8f"},{url:"/_next/static/chunks/app/(pwa)/pwa/ironsheets/page-26118e5158be721c.js",revision:"OSt88io9ph9zVVLAL1F8f"},{url:"/_next/static/chunks/app/(pwa)/pwa/otherorders/page-7da2837a67289495.js",revision:"OSt88io9ph9zVVLAL1F8f"},{url:"/_next/static/chunks/app/(pwa)/pwa/pages/page-ff3dd2b99185b0f5.js",revision:"OSt88io9ph9zVVLAL1F8f"},{url:"/_next/static/chunks/app/(pwa)/pwa/paint/page-d23b4e652d411afb.js",revision:"OSt88io9ph9zVVLAL1F8f"},{url:"/_next/static/chunks/app/(pwa)/pwa/steel/page-a8fdde349233ab73.js",revision:"OSt88io9ph9zVVLAL1F8f"},{url:"/_next/static/chunks/app/(pwa)/pwa/tiles/page-73d63694614cdfd5.js",revision:"OSt88io9ph9zVVLAL1F8f"},{url:"/_next/static/chunks/app/(pwa)/pwa/wood/page-ca35f6c2658090dc.js",revision:"OSt88io9ph9zVVLAL1F8f"},{url:"/_next/static/chunks/app/_not-found/page-7e5dc8d8ca77c9dd.js",revision:"OSt88io9ph9zVVLAL1F8f"},{url:"/_next/static/chunks/app/layout-282e86e9c27b034d.js",revision:"OSt88io9ph9zVVLAL1F8f"},{url:"/_next/static/chunks/app/page-7161a7a17aadb3e3.js",revision:"OSt88io9ph9zVVLAL1F8f"},{url:"/_next/static/chunks/ee560e2c-705022327db09300.js",revision:"OSt88io9ph9zVVLAL1F8f"},{url:"/_next/static/chunks/fd9d1056-a07d1daddc8fbc84.js",revision:"OSt88io9ph9zVVLAL1F8f"},{url:"/_next/static/chunks/framework-cf2d8f6f8d843863.js",revision:"OSt88io9ph9zVVLAL1F8f"},{url:"/_next/static/chunks/main-7dcb68bcfcac2d2c.js",revision:"OSt88io9ph9zVVLAL1F8f"},{url:"/_next/static/chunks/main-app-f0e2d4791d4f16da.js",revision:"OSt88io9ph9zVVLAL1F8f"},{url:"/_next/static/chunks/pages/_app-037b5d058bd9a820.js",revision:"OSt88io9ph9zVVLAL1F8f"},{url:"/_next/static/chunks/pages/_error-6ae619510b1539d6.js",revision:"OSt88io9ph9zVVLAL1F8f"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-af7eeae2300f45d6.js",revision:"OSt88io9ph9zVVLAL1F8f"},{url:"/_next/static/css/29d516231421e882.css",revision:"29d516231421e882"},{url:"/_next/static/css/5a56e3c1761e58ad.css",revision:"5a56e3c1761e58ad"},{url:"/_next/static/media/4473ecc91f70f139-s.p.woff",revision:"78e6fc13ea317b55ab0bd6dc4849c110"},{url:"/_next/static/media/463dafcda517f24f-s.p.woff",revision:"cbeb6d2d96eaa268b4b5beb0b46d9632"},{url:"/images/Tiles.png",revision:"0630d09cabea2c44c33ceff2745167d2"},{url:"/images/bmLogo.png",revision:"2acc9d00cc37eddc10a77e1ff8a93abd"},{url:"/images/bmlogo.png",revision:"768e5339762a05c9903a89c71c827f58"},{url:"/images/bolt.jpg",revision:"5e21d2305918aca6e9fd46b479ec6f33"},{url:"/images/brick.jpeg",revision:"69f21ac869958734c8d3a830344e16d4"},{url:"/images/build.png",revision:"0504cd449f63e6985b15d270b8b15dd5"},{url:"/images/cap.jpg",revision:"db105a497f7b478ae5b7a420ad716189"},{url:"/images/carpentry.jpg",revision:"8e86d831e8553c68be23572558ce01d2"},{url:"/images/construction.png",revision:"a04927a1312f0a181bf8a9910d26aa3c"},{url:"/images/duracem.jpg",revision:"d073b4f2c303854e5af30bf7c48a806c"},{url:"/images/google.png",revision:"68b6685d528563ffba5340a324a4bd86"},{url:"/images/hardwaretools.png",revision:"97ab8c49b8b06188d107b07dc11097e9"},{url:"/images/image (7).png",revision:"1a6ec0f7516541daa7cef4f55f7dbf31"},{url:"/images/kokoto.jpeg",revision:"d0d3c7b1343460cc4d74ae90832c6b6d"},{url:"/images/logo.png",revision:"dff889bd62e61addffd64d15740731b7"},{url:"/images/paint.jpg",revision:"b357036d932ac77c2682a83f16a271a8"},{url:"/images/placeholder-image.png",revision:"6c6baa4fe9fabddd5def58c8c34949b3"},{url:"/images/sand.jpeg",revision:"42dc0669c53dd98b1e7492e9b370ceb3"},{url:"/images/sheets.jpg",revision:"1742ef191e489f48b813d01eb319c42f"},{url:"/images/steel.png",revision:"8aa3e663f45f219a74f263a114406dad"},{url:"/images/tembo.jpg",revision:"3427efb5aaa0edeaaa6e9fdf26625608"},{url:"/images/tiles.jpg",revision:"bd9da7d0fe39c529ee98ccd126da1aac"},{url:"/images/wood.jpg",revision:"35b474c10e2d7039b0657ebc0ec75768"},{url:"/manifest.json",revision:"acfc376a736d6b076870650b235d823a"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
