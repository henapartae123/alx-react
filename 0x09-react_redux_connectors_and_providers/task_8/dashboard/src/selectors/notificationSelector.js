import { createSelector } from "reselect";

export const filterTypeSelected = (data) => {
  return data.get("filter");
};

export const getNotifications = (data) => {
  const notification = Object.values(getNotifications(data).toJS());
  return notification();
};

export const getUnreadNotifications = (data) => {
  const notification = Object.values(getNotifications(data).toJS());
  return notification.filter((not) => {
    not.isRead;
  });
};

const getNotificationsSelector = (state) => state.notifications;

export const getUnreadNotificationsByType = createSelector(
  getNotificationsSelector,
  (notifications) => {
    const messages = notifications.get("messages");
    const filter = notifications.get("filter");

    if (messages) {
      let filtered;

      if (filter === "URGENT") {
        filtered = messages
          .valueSeq()
          .filter(
            (value) =>
              value.get("isRead") === false && value.get("type") === "urgent"
          );
      } else {
        filtered = messages
          .valueSeq()
          .filter((value) => value.get("isRead") === false);
      }

      return filtered;
    }

    return messages;
  }
);
