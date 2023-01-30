import React from "react";
import { shallow } from "enzyme";
import CourseList from "./CourseList";
import CourseListRow from "./CourseListRow";

const listCourses = [
  { id: 1, name: "ES6", credit: 60 },
  { id: 2, name: "Webpack", credit: 20 },
  { id: 3, name: "React", credit: 40 },
];

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

  it("renders correctely when passed a list of courses", () => {
    const wrapper = shallow(<CourseList listCourses={listCourses} />);

    expect(wrapper.find("tbody").children()).toHaveLength(3);
    expect(wrapper.find("tbody").childAt(0).html()).toEqual(
      "<tr><td>ES6</td><td>60</td></tr>"
    );
    expect(wrapper.find("tbody").childAt(1).html()).toEqual(
      "<tr><td>Webpack</td><td>20</td></tr>"
    );
    expect(wrapper.find("tbody").childAt(2).html()).toEqual(
      "<tr><td>React</td><td>40</td></tr>"
    );
  });
});
