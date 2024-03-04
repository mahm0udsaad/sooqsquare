const cacheName = "v2";
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

self.addEventListener("push", (event) => {
  console.log("Push event received:", event);

  const data = event.data.json();
  const title = data.title || "SooqSquare";
  const body = data.message || "Default Body";
  const icon =
    "https://cloud.sooqsquare.com/apps/sharingpath/nextcloud/upload/Logo.png";
  const notificationOptions = {
    body: body,
    icon: icon,
  };

  event.waitUntil(
    self.registration.showNotification(title, notificationOptions)
  );
});
