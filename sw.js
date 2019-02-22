importScripts('/cache-polyfill.js');

self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('bootstrap-resto-website').then(function(cache) {
     return cache.addAll([
       '/',
       '/index.html',
       '/index.html?homescreen=1',
       '/?homescreen=1',
       '/assets/style.css',
       '/assets/Js.script_accueil.js',
     ]);
   })
 );
});
