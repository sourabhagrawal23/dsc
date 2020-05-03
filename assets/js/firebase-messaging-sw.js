importScripts("https://www.gstatic.com/firebasejs/7.14.2/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/7.14.2/firebase-messaging.js"
);

var firebaseConfig = {
  apiKey: "AIzaSyDyhweUc4vVq8c-Kp6pN8UYvl1C_1YrICE",
  authDomain: "dsckiit-main.firebaseapp.com",
  databaseURL: "https://dsckiit-main.firebaseio.com",
  projectId: "dsckiit-main",
  storageBucket: "dsckiit-main.appspot.com",
  messagingSenderId: "401113392361",
  appId: "1:401113392361:web:5dffe58ac7a0b9b5ecbc78",
  measurementId: "G-TD77TWCDHN",
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
  