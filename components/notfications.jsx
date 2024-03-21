"use client";
const notificationsSupported = () =>
  "Notification" in window &&
  "serviceWorker" in navigator &&
  "PushManager" in window;

export default function Notifications() {
  if (!notificationsSupported()) {
    return <h3>Please install the PWA first!</h3>;
  }

  return <h3>WebPush PWA</h3>;
}
