import * as data from "../../../../notifications.json";

function getAllNotificationsByUser(userId) {
  return data.filter((d) => d.author.id === userId).map((d) => d.context);
}

export default getAllNotificationsByUser;
