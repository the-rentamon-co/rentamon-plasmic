importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwfbUiQNPQSyL48d0It3MgFOoTwF6AHN4",
  authDomain: "miaan-notify-mn5436.firebaseapp.com",
  projectId: "miaan-notify-mn5436",
  storageBucket: "miaan-notify-mn5436.firebasestorage.app",
  messagingSenderId: "553708011126",
  appId: "1:553708011126:web:dcdff7eacd0ea7b3296957",
  measurementId: "G-9TELS8G020"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: 'https://media.rentamon.com/img%2Flogo-miaan%2Fsign-blue-small.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
