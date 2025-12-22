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

messaging.onBackgroundMessage(function (payload) {
  console.log('[SW] Background message:', payload);

  var data = payload && payload.data ? payload.data : {};

  var title = data.title ? data.title : "پیام جدید از میان";

  var options = {
    body: data.body ? data.body : "",
    icon: data.icon ? data.icon : "https://media.rentamon.com/img%2Flogo-miaan%2Fsign-blue-small.png",
    badge: "https://media.rentamon.com/img%2Flogo-miaan%2Fsign-blue-small.png",
    data: {
      url: data.url ? data.url : "/"
    }
  };

  self.registration.showNotification(title, options);
});

self.addEventListener('notificationclick', function (event) {
  event.notification.close();

  var targetUrl = "/";
  if (event.notification &&
      event.notification.data &&
      event.notification.data.url) {
    targetUrl = event.notification.data.url;
  }

  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true })
      .then(function (clientList) {
        for (var i = 0; i < clientList.length; i++) {
          var client = clientList[i];
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
