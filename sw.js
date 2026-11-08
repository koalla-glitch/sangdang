// 앱 설치용 최소 서비스워커. 예약 현황은 항상 최신이어야 하므로 아무것도 캐시하지 않습니다.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(clients.claim()));
self.addEventListener("fetch", () => {});
