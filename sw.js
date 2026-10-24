// Offline cache for the web version. Bump VERSION when files change.
const VERSION = "courtesan-v1";
const FILES = ["./", "index.html", "narration.js", "icon.svg", "manifest.webmanifest",
  "fonts/cormorant-garamond-latin-500-normal.woff2", "fonts/cormorant-garamond-latin-600-normal.woff2", "fonts/cormorant-garamond-latin-700-normal.woff2",
  "fonts/eb-garamond-latin-400-normal.woff2", "fonts/eb-garamond-latin-400-italic.woff2", "fonts/eb-garamond-latin-500-normal.woff2"];
self.addEventListener("install", e => { e.waitUntil(caches.open(VERSION).then(c => c.addAll(FILES))); self.skipWaiting(); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== VERSION).map(k => caches.delete(k))))); self.clients.claim(); });
// Network first so updates arrive when online; fall back to the cache offline.
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  e.respondWith(fetch(e.request).then(r => { const copy = r.clone(); if (r.ok) caches.open(VERSION).then(c => c.put(e.request, copy)); return r; })
    .catch(() => caches.match(e.request).then(m => m || caches.match("index.html"))));
});
