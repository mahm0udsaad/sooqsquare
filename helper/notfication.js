import { addSubscriptionToUser } from "@/app/[lng]/(chat)/chat/action";

const applicationServerKey =
  "BK3k4umk71d0mq9x1RHS9FOGLc6zHt8fFVnPg2dKxYpZwLURqgazKGX4sx1T8INcWd3onjw1cve6cTseW7ojCXo";

const subscribeToPushNotifications = async (userId) => {
  try {
    const registration = await navigator.serviceWorker.register(
      "/service-worker.js",
      { scope: "/" }
    );
    const subscription = await registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: applicationServerKey,
    });

    const subscriptionData = {
      endpoint: subscription.endpoint,
      p256dh: subscription.p256dh,
      auth: subscription.auth,
    };

    const addedSubscription = await addSubscriptionToUser(
      userId,
      subscriptionData
    );
  } catch (error) {
    console.error("Error subscribing to push notifications:", error);
  }
};

const unregisterServiceWorkers = async () => {
  const registrations = await navigator.serviceWorker.getRegistrations();
  await Promise.all(registrations.map((r) => r.unregister()));
};
export default subscribeToPushNotifications;
