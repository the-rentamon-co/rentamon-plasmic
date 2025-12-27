// firebase-messaging-sw.js
// --------------------------------------------------------
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

// تنظیمات فایربیس
firebase.initializeApp({
  apiKey: "AIzaSyCwfbUiQNPQSyL48d0It3MgFOoTwF6AHN4",
  authDomain: "miaan-notify-mn5436.firebaseapp.com",
  projectId: "miaan-notify-mn5436",
  storageBucket: "miaan-notify-mn5436.firebasestorage.app",
  messagingSenderId: "553708011126",
  appId: "1:553708011126:web:dcdff7eacd0ea7b3296957"
});

const messaging = firebase.messaging();
const MANDATORY_ICON = "https://media.rentamon.com/img%2Flogo-miaan%2Fsign-blue-small.png";

// --------------------------------------------------------
// 1. BACKGROUND MESSAGE HANDLER
// --------------------------------------------------------
messaging.onBackgroundMessage((payload) => {
  console.log('[SW] Background Message:', payload);

  // اصلاحیه مهم: اضافه کردن  که در کد قبلی شما نبود
  const notificationTitle = payload.notification?.title  payload.data?.title  'پیام جدید';
  const notificationOptions = {
    body: payload.notification?.body  payload.data?.body  '',
    icon: MANDATORY_ICON,
    data: {
      url: payload.data?.url  payload.data?.link || '/' 
    }
  };

  return self.registration.showNotification(notificationTitle, notificationOptions);
});

// --------------------------------------------------------
// 2. NOTIFICATION CLICK HANDLER
// --------------------------------------------------------
self.addEventListener('notificationclick', function(event) {
  console.log('[SW] Notification Clicked');
  
  event.notification.close();

  let urlToOpen = '/';
  if (event.notification.data && event.notification.data.url) {
    urlToOpen = event.notification.data.url;
  }

  event.waitUntil(
    clients.matchAll({
      type: 'window',
      includeUncontrolled: true
    }).then(function(clientList) {
      for (let i = 0; i < clientList.length; i++) {
        const client = clientList[i];
        if (client.url && 'focus' in client) {
          return client.focus().then(focusedClient => {
             if (urlToOpen !== '/' && focusedClient.navigate) {
                 return focusedClient.navigate(urlToOpen);
             }
             return focusedClient;
          });
        }
      }
      if (clients.openWindow) {
        return clients.openWindow(urlToOpen);
      }
    })
  );
});
