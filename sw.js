self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  // PWAのインストール条件（Service Workerによる通信制御）を満たすためのパススルー処理
  return;
});