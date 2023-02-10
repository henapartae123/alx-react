import React from "react";
import { shallow } from "enzyme";
import CourseList from "./CourseList";

describe("CourseList", () => {
  it("render without crashing", () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.exists()).toEqual(true);
  });
  it("should render 5 different rows", () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.find("thead").children()).toHaveLength(2);
    wrapper.find("thead").forEach((node) => {
      expect(node.equals(<CourseListRow />));
    });

    expect(wrapper.find("tbody").children()).toHaveLength(3);
    wrapper.find("tbody").forEach((node) => {
      expect(node.equals(<CourseListRow />));
    });
  });
});
