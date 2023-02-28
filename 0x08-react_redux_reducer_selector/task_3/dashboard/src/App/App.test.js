import React from "react";
import App from "./App";
import Login from "../Login/Login";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Notifications from "../Notifications/Notifications";
import { shallow, mount } from "enzyme";
import { StyleSheetTestUtils } from "aphrodite";
import { AppContext, user, logOut } from "./AppContext";

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe("App Componeent Tests", () => {
  it("Renders without crashing", () => {
    const app = shallow(<App />);
    expect(app).toBeDefined();
  });
  it("should render Notifications component", () => {
    const component = shallow(<App />);

    expect(component.contains(<Notifications />)).toBe(true);
  });
  it("should render Header component", () => {
    const component = shallow(<App />);

    expect(component.contains(<Header />)).toBe(true);
  });
  it("should render Login Component", () => {
    const component = shallow(<App />);

    expect(component.contains(<Login />)).toBe(true);
  });
  it("should render Footer component", () => {
    const component = shallow(<App />);

    expect(component.contains(<Footer />)).toBe(true);
  });
  it("does not render courselist if logged out", () => {
    const component = shallow(<App />);

    component.setProps({ isLogedIn: false });

    expect(component.contains(<CourseList />)).toBe(false);
  });
  it("renders courselist if logged in", () => {
    const component = shallow(<App isLoggedIn={true} />);

    expect(component.containsMatchingElement(<CourseList />)).toEqual(false);
    expect(component.contains(<Login />)).toBe(false);
  });
});

describe("When ctrl + h is pressed", () => {
  it("calls logOut function", () => {
    const mocked = jest.fn();
    const wrapper = mount(<App logOut={mocked} />);
    const event = new KeyboardEvent("keydown", { ctrlKey: true, key: "h" });
    document.dispatchEvent(event);

    expect(mocked).toHaveBeenCalledTimes(1);
    wrapper.unmount();
  });

  document.alert = jest.fn();
  it("checks that alert function is called", () => {
    const wrapper = mount(<App />);
    const spy = jest.spyOn(window, "alert");
    const event = new KeyboardEvent("keydown", { ctrlKey: true, key: "h" });
    document.dispatchEvent(event);

    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
    wrapper.unmount();
  });

  it('checks that the alert is "Logging you out"', () => {
    const wrapper = mount(<App />);
    const spy = jest.spyOn(window, "alert");
    const event = new KeyboardEvent("keydown", { ctrlKey: true, key: "h" });
    document.dispatchEvent(event);

    expect(spy).toHaveBeenCalledWith("Logging you out");
    jest.restoreAllMocks();
    wrapper.unmount();
  });
  document.alert.mockClear();
});
it("default state for displayDrawer is false", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.state().displayDrawer).toEqual(false);
});

it("displayDrawer changes to true when calling handleDisplayDrawer", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.state().displayDrawer).toEqual(false);

  const instance = wrapper.instance();

  instance.handleDisplayDrawer();

  expect(wrapper.state().displayDrawer).toEqual(true);
});

it("displayDrawer changes to false when calling handleHideDrawer", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.state().displayDrawer).toEqual(false);

  // const instance = wrapper.instance();

  wrapper.instance().handleDisplayDrawer();

  expect(wrapper.state().displayDrawer).toEqual(true);

  wrapper.instance().handleHideDrawer();

  expect(wrapper.state().displayDrawer).toEqual(false);
});

describe("Testing <App logOut={function} />", () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  it("verify that when the keys control and h are pressed the logOut function, passed as a prop, is called and the alert function is called with the string Logging you out", () => {
    const wrapper = mount(
      <App
        logOut={() => {
          console.log("ctrl and h are pressed");
        }}
      />
    );
    window.alert = jest.fn();
    const inst = wrapper.instance();
    const logout = jest.spyOn(inst, "logOut");
    const alert = jest.spyOn(window, "alert");
    const event = new KeyboardEvent("keydown", {
      bubbles: true,
      ctrlKey: true,
      key: "h",
    });
    document.dispatchEvent(event);
    expect(alert).toBeCalledWith("Logging you out");
    expect(logout).toBeCalled();
    alert.mockRestore();
  });
});

describe("Testing App Component's State />", () => {
  let wrapper;

  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
    wrapper = shallow(<App />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("check if default value of displayDrawer in state is false", () => {
    expect(wrapper.state("displayDrawer")).toBe(false);
  });

  it("Verify that after calling handleDisplayDrawer, the state displayDrawer should now be true", () => {
    wrapper.instance().handleDisplayDrawer();
    expect(wrapper.state("displayDrawer")).toBe(true);
  });

  it("verify that after calling handleHideDrawer, the state displayDrawer is updated to be false", () => {
    wrapper.instance().handleHideDrawer();
    expect(wrapper.state("displayDrawer")).toBe(false);
  });

  it(`Tests that the logIn function updates user's state correctly`, () => {
    wrapper = mount(
      <AppContext.Provider value={{ user, logOut }}>
        <App />
      </AppContext.Provider>
    );

    const myUser = {
      email: "testy@gmail.com",
      password: "testy",
      isLoggedIn: true,
    };

    expect(wrapper.state().user).toEqual(user);
    const instance = wrapper.instance();
    instance.logIn(myUser.email, myUser.password);
    expect(wrapper.state().user).toEqual(myUser);
    wrapper.unmount();
  });
  it(`verify that markNotificationAsRead works as intended,
	deletes the notification with the passed id from the listNotifications array`, () => {
    const context = {
      user: {
        ...user,
      },
      logOut: jest.fn(),
      listNotifications: [
        { id: 1, type: "default", value: "New course available" },
        { id: 2, type: "urgent", value: "New resume available" },
        { id: 3, html: { __html: jest.fn() }, type: "urgent" },
      ],
    };

    const wrapper = mount(
      <AppContext.Provider value={context}>
        <App />
      </AppContext.Provider>
    );

    const instance = wrapper.instance();

    instance.markNotificationAsRead(3);

    expect(wrapper.state().listNotifications).toEqual([
      { id: 1, type: "default", value: "New course available" },
      { id: 2, type: "urgent", value: "New resume available" },
    ]);

    expect(wrapper.state().listNotifications.length).toBe(2);
    expect(wrapper.state().listNotifications[3]).toBe(undefined);

    wrapper.unmount();
  });
});
