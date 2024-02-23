const cacheName = "v1";
self.addEventListener("install", (event) => {
  console.log("Service worker installed");
});

self.addEventListener("activate", (event) => {
  console.log("Service worker activated");
  // Perform activation tasks, such as cleaning up old caches
});

self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);

  // Cache only requests to /ar/chat/id
  if (url.pathname.startsWith("/chat")) {
    event.respondWith(
      caches.open(cacheName).then((cache) => {
        return cache.match(event.request).then((response) => {
          const fetchPromise = fetch(event.request).then((networkResponse) => {
            cache.put(event.request, networkResponse.clone());
            return networkResponse;
          });
          return response || fetchPromise;
        });
      })
    );
  }
});
