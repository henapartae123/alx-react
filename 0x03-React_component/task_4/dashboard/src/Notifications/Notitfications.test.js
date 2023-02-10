import React from "react";
import { shallow } from "enzyme";
import Notifications from "./Notifications";
import { getLatestNotification } from "../utils/utils";

const listNotifications = [
  { id: 1, type: "default", value: "New course available" },
  { id: 2, type: "urgent", value: "New resume available" },
  { id: 3, type: "urgent", html: getLatestNotification() },
];

describe("Notification component tests", () => {
  it("renders Notification component without crashing", () => {
    const notification = shallow(<Notifications />);

    expect(notification).toBeDefined();
  });

  it("renders ul", () => {
    const notification = shallow(<Notifications />);

    expect(notification.find("ul")).toBeDefined();
  });

  it("renders three list items", () => {
    const notification = shallow(<Notifications />);

    expect(notification.find("li")).toHaveLength(3);
  });

  it("renders correct text", () => {
    const notification = shallow(<Notifications />);

    expect(notification.find("p").text()).toBe(
      "Here is the list of notifications"
    );
  });

  it("does not display menuItem and notifications divs when displayDrawer is false", () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);

    expect(wrapper.find("div.menuItem").exists()).toBe(true);
    expect(wrapper.find("div.Notifications").exists()).toBe(false);
  });

  it("displays menuItem and Notifications when displayDrawer is true", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);

    expect(wrapper.find("div.menuItem").exists()).toBe(true);
    expect(wrapper.find("div.Notifications").exists()).toBe(true);
  });

  it("renders correctly if you pass an empty array", () => {
    const wrapper = shallow(
      <Notifications displayDrawer={true} listNotifications={[]} />
    );

    expect(
      wrapper.containsMatchingElement(
        <li data-notification-type="default">No new notificatins</li>
      )
    );
  });

  it("renders correctly when listCourses is not passed", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);

    expect(
      wrapper.containsMatchingElement(
        <li data-notification-type="default">No new notification for now</li>
      )
    );
  });

  it('renders "No new notifications for now" instead of "Here is the list of notifications" when listNotifications is empty', () => {
    const wrapper = shallow(
      <Notifications displayDrawer={true} listNotifications={[]} />
    );

    expect(
      wrapper.containsMatchingElement(<p>Here is the list of notifications</p>)
    ).toBe(false);

    expect(
      wrapper.containsMatchingElement(
        <li data-notification-type="default">No new notification for now</li>
      )
    );
  });

  it('renders "No new notifications for now" instead of "Here is the list of notifications" when listNotifications is empty', () => {
    const wrapper = shallow(
      <Notifications displayDrawer={true} listNotifications={[]} />
    );

    expect(
      wrapper.containsMatchingElement(<p>Here is the list of notifications</p>)
    ).toBe(false);

    expect(
      wrapper.containsMatchingElement(
        <li data-notification-type="default">No new notification for now</li>
      )
    );
  });
});

describe("spy as mark as read", () => {
  it("should call console.log", () => {
    const wrapper = shallow(<Notifications />);
    const spy = jest.spyOn(console, "log").mockImplementation();

    wrapper.instance().markAsRead = spy;
    wrapper.instance().markAsRead(1);
    expect(wrapper.instance().markAsRead).toBeCalledWith(1);
    expect(spy).toBeCalledTimes(1);
    expect(spy).toBeCalledWith(1);
    spy.mockRestore();
  });
});
