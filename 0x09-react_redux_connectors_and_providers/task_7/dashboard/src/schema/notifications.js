import * as data from "../../../../notifications.json";
import { normalize, schema } from "normalizr";

const user = new schema.Entity("users");
const message = new schema.Entity("messages", {}, { idAttribute: "guid" });
const notification = new schema.Entity("d", {
  author: user,
  context: message,
});

export const normalizedData = normalize(data, [d]);

export const getAllNotificationsByUser = (userId) => {
  const output = [];
  const notifications = normalizedData.entities.notification;
  const messages = normalizedData.entities.message;

  for (const id in notifications) {
    if (notifications[id].author === userId) {
      output.push(messages[notifications[id].context]);
    }
  }
  return output;
};

export const notificationsNormalizer = (output) => {
  return normalize(output, [notification]).entities;
};
