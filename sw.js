/* Santoto Noticias - actualización automática y modo sin conexión */
const CACHE_NAME = 'sn-santoto-shell-v1';
const CACHE_PREFIX = 'sn-santoto-shell-';

self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(
      keys.filter(key => key.startsWith(CACHE_PREFIX) && key !== CACHE_NAME)
          .map(key => caches.delete(key))
    );
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', event => {
  const request = event.request;
  const url = new URL(request.url);
  if (request.method !== 'GET' || url.origin !== self.location.origin) return;

  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);
    try {
      // Consultar primero la red para entregar siempre la versión publicada.
      const freshRequest = new Request(request, { cache: 'no-store' });
      const response = await fetch(freshRequest);
      if (response && response.ok && response.type !== 'opaque') {
        try { await cache.put(request, response.clone()); }
        catch (cacheError) { console.warn('No se pudo guardar en caché:', cacheError); }
      }
      return response;
    } catch (error) {
      // Sin conexión, mostrar la última versión disponible.
      const cached = await cache.match(request);
      if (cached) return cached;
      if (request.mode === 'navigate') {
        const home = new URL('./index.html', self.registration.scope).href;
        const fallback = await cache.match(home);
        if (fallback) return fallback;
      }
      return new Response('No hay conexión y este recurso aún no está guardado.', {
        status: 503,
        headers: { 'Content-Type': 'text/plain; charset=utf-8' }
      });
    }
  })());
});
