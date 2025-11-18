self.addEventListener('install', (e)=>{
  self.skipWaiting()
})
self.addEventListener('activate', (e)=>{
  clients.claim()
})
// cache-first for app shell
self.addEventListener('fetch', (e)=>{
  // opcional: implementar caching de recursos
})
