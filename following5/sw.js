// install event
self.addEventListener('install', evt => {
  console.log('service worker installed');
});

self.addEventListener('activate', evt => {
  console.log('service worker has been activated');
});

self.addEventListener('fetch', evt => {
  console.log('fetch event', evt);
});