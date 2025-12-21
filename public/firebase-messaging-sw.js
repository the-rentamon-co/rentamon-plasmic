// firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js');

const firebaseConfig = {
  apiKey: "AIzaSyCwfbUiQNPQSyL48d0It3MgFOoTwF6AHN4",
  authDomain: "miaan-notify-mn5436.firebaseapp.com",
  projectId: "miaan-notify-mn5436",
  messagingSenderId: "553708011126",
  appId: "1:553708011126:web:dcdff7eacd0ea7b3296957"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

/* دریافت نوتیفیکیشن در پس‌زمینه */
messaging.onBackgroundMessage(function (payload) {
  console.log('[firebase-messaging-sw.js] BG message:', payload);

  const title = payload?.data?.title  "پیام جدید از میان";

  const options = {
    body: payload?.data?.body  "",
    icon: payload?.data?.icon  "https://media.rentamon.com/img%2Flogo-miaan%2Fsign-blue-small.png",
    badge: "https://media.rentamon.com/img%2Flogo-miaan%2Fsign-blue-small.png",
    data: {
      url: payload?.data?.url  "/"
    }
  };

  self.registration.showNotification(title, options);
});

/* هندل کلیک نوتیفیکیشن (Deep Link) */
self.addEventListener('notificationclick', function (event) {
  event.notification.close();

  const targetUrl = event.notification?.data?.url || "/";

  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true })
      .then(function (clientList) {
        for (const client of clientList) {
          if (client.url === targetUrl && 'focus' in client) {
            return client.focus();
          }
        }
        if (clients.openWindow) {
          return clients.openWindow(targetUrl);
        }
      })
  );
});
