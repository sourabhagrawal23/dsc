self.addEventListener("notificationclick", function (event) {
  event.notification.close();
  clients.openWindow("https://www.youtube.com/watch?v=Y_f7YnQfBAk", "_blank");
});
