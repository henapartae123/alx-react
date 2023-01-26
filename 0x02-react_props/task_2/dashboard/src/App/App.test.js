import React from "react";
import App from "./App";
import Login from "../Login/Login";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Notifications from "../Notifications/Notifications";
import { shallow } from "enzyme";

describe("App Componeent Tests", () => {
  it("Renders without crashing", () => {
    const app = shallow(<App />);
    expect(app).toBeDefined();
  });
  it("should have header conent", () => {
    const component = shallow(<App />);
    expect(component.contains(<Header />)).toBe(true);
  });
  it("should have login component", () => {
    const component = shallow(<App />);
    expect(component.contains(<Login />)).toBe(true);
  });
  it("should have Notifications component", () => {
    const component = shallow(<App />);
    expect(component.contains(<Notifications />)).toBe(true);
  });
  it("should have footer component", () => {
    const component = shallow(<App />);
    expect(component.contains(<Footer />)).toBe(true);
  });
});
