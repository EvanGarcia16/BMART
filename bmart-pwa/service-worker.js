self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('bmart-cache').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/dashboard.html',
        '/reviews.html',
        '/css/style.css',
        '/js/app.js',
        '/images/logo.png',
        '/images/chart.png' // Add any other images you are using
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
