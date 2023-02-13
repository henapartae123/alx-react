import React from "react";
import { shallow } from "enzyme";
import Notifications from "./Notifications";

describe("Notification component tests", () => {
  it("renders Notification component without crashing", () => {
    const notification = shallow(<Notifications />);

    expect(notification).toBeDefined();
  });

  it("renders ul items", () => {
    const wrapper = shallow(<Notifications />);

    expect(wrapper.find("ul").children()).toHaveLength(3);
    expect(wrapper.find("ul").childAt(0).html()).toEqual(
      '<li data-notification-type="default">New course available</li>'
    );
    expect(wrapper.find("ul").childAt(1).html()).toEqual(
      '<li data-notification-type="urgent">New resume available</li>'
    );
    expect(wrapper.find("ul").childAt(2).html()).toEqual(
      `<li data-urgent=\"true\">${getLatestNotification()}</li>`
    );
  });

  it("renders three list items", () => {
    const wrapper = shallow(<Notifications />);

    expect(wrapper.find("ul").children()).toHaveLength(3);
    wrapper.find("ul").forEach((node) => {
      expect(node.equals(<NotificationItem />));
    });
  });

  it("renders correct text", () => {
    const notification = shallow(<Notifications />);

    expect(notification.find("p").text()).toBe(
      "Here is the list of notifications"
    );
  });
});
