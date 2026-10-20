// Рантье переехал с /heroincome/ на /rantie/.
// Этот service worker заменяет старый, установленный по прежнему адресу: удаляет кэш
// старой версии, снимает сам себя и отправляет открытые вкладки на новый адрес.
// Данные портфеля (IndexedDB) он не трогает — они общие для всего сайта и доступны по новому адресу.
self.addEventListener('install', () => self.skipWaiting());

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter((key) => key.includes('/heroincome/')).map((key) => caches.delete(key)));
    await self.registration.unregister();
    const windows = await self.clients.matchAll({ type: 'window' });
    for (const client of windows) client.navigate('/rantie/');
  })());
});
