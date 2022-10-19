/**
 *
 * @param {string} title
 * @param {object} options
 * @returns
 */
export const useNotification = (title, options) => {
  if ("Notification" in window) {
    return;
  }
  const fireNotification = () => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new NodeFilter(title, options);
        } else {
          return;
        }
      });
    } else {
      new Notification(title, options);
    }
  };
  return fireNotification;
};
