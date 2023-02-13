import React from "react";
import NotificationItem from "./NotificationItem";
import { shallow } from "enzyme";

describe("rendering components", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<NotificationItem />);

    expect(wrapper.exists()).toBe(true);
  });

  it('renders correct html for type="default" value="val" props', () => {
    const wrapper = shallow(<NotificationItem />);

    wrapper.setProps({ type: "default", value: "val" });
    expect(wrapper.html()).toEqual(
      '<li data-notification-type="default">val</li>'
    );
  });

  it('renders correct html from  html="<u>test</u>" props', () => {
    const wrapper = shallow(<NotificationItem />);

    wrapper.setProps({ html: "<u>test</u>" });
    expect(wrapper.html()).toEqual('<li data-urgent="true"><u>test</u></li>');
  });
});
