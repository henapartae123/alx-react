import React from "react";
import Footer from "./Footer";
import { shallow } from "enzyme";
import "../setupTests";

describe("Footer", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.exists()).toEqual(true);
  });
  it("should contain copyright", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.text()).toEqual(`Copyright`);
  });
});
