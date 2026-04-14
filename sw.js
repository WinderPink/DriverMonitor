const CACHE_NAME = 'dms-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/manifest.json'
];

// Cài đặt và lưu cache các file quan trọng
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// Chạy ứng dụng ngay cả khi offline
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});