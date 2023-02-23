import * as data from "../../../../notifications.json";
import { normalize, schema } from "normalizr";

const user = new schema.Entity("users");
const message = new schema.Entity("messages", {}, { idAttribute: "guid" });
const notification = new schema.Entity("d", {
  author: user,
  context: message,
});

const nomralizedData = normalize(data, [d]);

function getAllNotificationsByUser(userId) {
  return data.filter((d) => d.author.id === userId).map((d) => d.context);
}

export default getAllNotificationsByUser;
export { nomralizedData };
