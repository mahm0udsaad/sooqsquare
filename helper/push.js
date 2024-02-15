'use server'
const webpush = require('web-push');
// Set your VAPID keys
const vapidKeys = {
 publicKey: 'BK3k4umk71d0mq9x1RHS9FOGLc6zHt8fFVnPg2dKxYpZwLURqgazKGX4sx1T8INcWd3onjw1cve6cTseW7ojCXo',
 privateKey: '8bw9PpNnTxHagt6mpEAbZH4HRPDd0iPo2M3mYuc85Sc',
};

// Configure web-push with your VAPID keys
webpush.setVapidDetails(
  'mailto:101mahm0udsaad@gmail.com',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

// Payload for the push notification
const pushPayload = {
  title: 'Example Notification',
  message: 'This is a test notification!',
};

// Subscription details obtained from the client
const pushSubscription = {
    endpoint: 'https://fcm.googleapis.com/fcm/send/exX97Wn4t4Q:APA91bGP6PCBB_5kaD56lwuBggySCnoTv0DdXlHzTW3YlLSfd28SEAK5dMx1KiPvlgulbeRNHilYD3Rx88Ve-iAQUBhjk40xPzoGyfuP8MAClFPXeSSMdlBanEYJTKhw1pht6Wq_kcmr',
    keys: {
      p256dh: 'BHaY6NNAafLqpdqqAlhv0klsyZOygqGh_QJ-muHS_7pOyg0YQPP4JikyixEj7q4yrcsFoEzL3bP1r89grXaxywY',
      auth: 'mfimBp8QKOFJTl1jOamE2Q'
    },
  };

// Send the push notification
webpush.sendNotification(pushSubscription, JSON.stringify(pushPayload));
