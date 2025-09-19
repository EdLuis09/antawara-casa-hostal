// Service Worker para Antawara Casa Hostal
const CACHE_NAME = 'antawara-v1.0.0';
const urlsToCache = [
  '/',
  '/index.html',
  '/src/css/reset.css',
  '/src/css/variables.css',
  '/src/css/base.css',
  '/src/css/components.css',
  '/src/css/layout.css',
  '/src/css/responsive.css',
  '/src/js/data.js',
  '/src/js/utils.js',
  '/src/js/components.js',
  '/src/js/main.js',
  '/src/assets/images/logo.png',
  '/manifest.json'
];

// Instalación del Service Worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Cache abierto');
        return cache.addAll(urlsToCache);
      })
  );
});

// Interceptar peticiones de red
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Devolver del cache si está disponible
        if (response) {
          return response;
        }
        
        // Hacer petición a la red
        return fetch(event.request).then(response => {
          // Verificar si la respuesta es válida
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }
          
          // Clonar la respuesta
          const responseToCache = response.clone();
          
          caches.open(CACHE_NAME)
            .then(cache => {
              cache.put(event.request, responseToCache);
            });
          
          return response;
        });
      })
  );
});

// Actualización del Service Worker
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Eliminando cache antiguo:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});