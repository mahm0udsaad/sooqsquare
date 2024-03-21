self.addEventListener("push", async (event) => {
  if (event.data) {
    const eventData = await event.data.json();
    showLocalNotification(eventData.title, eventData.body, self.registration);
  }
});

const showLocalNotification = (title, body, swRegistration) => {
  swRegistration.showNotification(title, {
    body,
    icon: "https://cloud.sooqsquare.com/apps/sharingpath/nextcloud/upload/Logo.png",
  });
};
