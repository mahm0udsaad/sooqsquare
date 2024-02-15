import { addSubscriptionToUser } from "@/app/[lng]/(chat)/chat/action";

const applicationServerKey = 'BK3k4umk71d0mq9x1RHS9FOGLc6zHt8fFVnPg2dKxYpZwLURqgazKGX4sx1T8INcWd3onjw1cve6cTseW7ojCXo'

const subscribeToPushNotifications = async (userId) => {
    try {
      const registration = await navigator.serviceWorker.register('/service-worker.js', { scope: '/' });
      const subscription = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: applicationServerKey
      });

      const addedSubscription = await addSubscriptionToUser(userId, subscription);

      if (Notification.permission === 'granted') {
        const notificationOptions = {
          body: 'Subscribed to notifications successfully!',
          icon: '/logo.png'
        };
        const notification = new Notification('Notification Subscription', notificationOptions);
      }
    } catch (error) {
      console.error('Error subscribing to push notifications:', error);
    }
  };

  export default subscribeToPushNotifications
  