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
