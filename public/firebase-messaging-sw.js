/* FILENAME: firebase-messaging-sw.js 
   LOCATION: Root directory (e.g., https://your-site.com/firebase-messaging-sw.js)
*/

importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js');

// --- 1. CONFIGURATION (REPLACE WITH YOURS) ---
const firebaseConfig = {
  apiKey: "AIzaSyCwfbUiQNPQSyL48d0It3MgFOoTwF6AHN4",
  authDomain: "miaan-notify-mn5436.firebaseapp.com",
  projectId: "miaan-notify-mn5436",
  storageBucket: "miaan-notify-mn5436.firebasestorage.app",
  messagingSenderId: "553708011126",
  appId: "1:553708011126:web:dcdff7eacd0ea7b3296957" 
};

// Initialize Firebase
try {
  firebase.initializeApp(firebaseConfig);
  const messaging = firebase.messaging();

  // --- 2. BACKGROUND MESSAGE HANDLER ---
  messaging.onBackgroundMessage(function(payload) {
    console.log('[SW] Background message received:', payload);

    const title = payload.notification?.title  payload.data?.title  'پیام جدید';
    const body = payload.notification?.body  payload.data?.body  '';
    const icon = 'https://media.rentamon.com/img%2Flogo-miaan%2Fsign-blue-small.png';
    
    // استخراج لینک برای باز شدن
    const linkUrl = payload.data?.url  payload.data?.link  self.registration.scope;

    const notificationOptions = {
      body: body,
      icon: icon,
      badge: icon, // آیکون کوچک کنار ساعت
      data: { url: linkUrl },
      tag: 'miaan-single-notification', // این خط باعث می‌شود نوتیف‌های تکراری روی هم بازنویسی شوند (جلوگیری از دوگانگی)
      renotify: true
    };

    return self.registration.showNotification(title, notificationOptions);
  });

  // --- 3. NOTIFICATION CLICK HANDLER (DEEP LINKING) ---
  self.addEventListener('notificationclick', function(event) {
    console.log('[SW] Notification clicked');
    event.notification.close(); // بستن نوتیفیکیشن

    // لینکی که باید باز شود
    const targetUrl = event.notification.data.url;

    // این بخش تضمین می‌کند که اپلیکیشن باز شود (نه کروم)
    event.waitUntil(
      clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function(windowClients) {
        // 1. اگر اپ باز است، آن را پیدا کن و به لینک هدایت کن
        for (let i = 0; i < windowClients.length; i++) {
          const client = windowClients[i];
          // چک میکنیم آیا پنجره متعلق به همین سایت است
          if (client.url.startsWith(self.registration.scope) && 'focus' in client) {
            return client.focus().then(() => {
                if ('navigate' in client) {
                    return client.navigate(targetUrl);
                }
            });
          }
        }
        // 2. اگر اپ بسته است، آن را باز کن
        if (clients.openWindow) {
          return clients.openWindow(targetUrl);
        }
      })
    );
  });

} catch (err) {
  console.error('[SW] Error in Service Worker:', err);
}
