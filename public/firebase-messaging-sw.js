// firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

const firebaseConfig = {
  apiKey: "AIzaSyCwfbUiQNPQSyL48d0It3MgFOoTwF6AHN4",
  authDomain: "miaan-notify-mn5436.firebaseapp.com",
  projectId: "miaan-notify-mn5436",
  storageBucket: "miaan-notify-mn5436.firebasestorage.app",
  messagingSenderId: "553708011126",
  appId: "1:553708011126:web:dcdff7eacd0ea7b3296957"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// ۱. مدیریت دریافت پیام در پس‌زمینه
messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);

  // خواندن اطلاعات از بخش data (چون در n8n در data گذاشتیم)
  const title = payload.data?.title  "پیام جدید از میان";
  const options = {
    body: payload.data?.body  "",
    icon: payload.data?.icon  'https://media.rentamon.com/img%2Flogo-miaan%2Fsign-blue-small.png',
    badge: 'https://media.rentamon.com/img%2Flogo-miaan%2Fsign-blue-small.png',
    data: {
      // ذخیره لینک برای استفاده در رویداد کلیک
      url: payload.data?.url  "/"
    },
    vibrate: [200, 100, 200]
  };

  return self.registration.showNotification(title, options);
});

// ۲. مدیریت کلیک روی نوتیفیکیشن و هندل کردن Deep Link
self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  const urlToOpen = event.notification.data.url;

  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true })
      .then(function(windowClients) {
        // چک کردن اینکه آیا تب سایت از قبل باز هست؟
        for (let i = 0; i < windowClients.length; i++) {
          const client = windowClients[i];
          // اگر تبی با این آدرس پیدا شد، همان را فوکوس کن
          if (client.url === urlToOpen && 'focus' in client) {
            return client.focus();
          }
        }
        // اگر تب باز نبود، یک پنجره جدید باز کن
        if (clients.openWindow) {
          return clients.openWindow(urlToOpen);
        }
      })
  );
});
