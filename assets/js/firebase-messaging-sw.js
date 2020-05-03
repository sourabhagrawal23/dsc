importScripts("https://www.gstatic.com/firebasejs/7.14.2/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/7.14.2/firebase-messaging.js"
);

var firebaseConfig = {
  apiKey: "<YOUR-API-KEY>",
  authDomain: "<YOUR-AUTH-DOMAIN>",
  databaseURL: "<DB-URL>",
  projectId: "<PROJECT-ID>",
  storageBucket: "<BUCKET-ID>",
  messagingSenderId: "<SENDER-ID>",
  appId: "<APP-ID>",
  measurementId: "<MEASUREMENT-ID>",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
    // Customize notification here
    var data = JSON.parse(payload.data.notification)
    const notificationTitle = data.title;
    const notificationOptions = {
      body: data.body,
      icon: "img/logo.png",
      vibrate: [100, 50, 100]
    };

    self.addEventListener("notificationclick", function (event) {
        event.notification.close();
        clients.openWindow(data.link, "_blank");
      });
    
    return self.registration.showNotification(notificationTitle,
        notificationOptions);
        
  });
  