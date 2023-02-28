import uiReducer, { initialState } from "./uiReducer";
import { toJS } from "immutable";
import { DISPLAY_NOTIFICATION_DRAWER } from "../actions/uiActionTypes";

describe("reducer", function () {
  it("returns initial state when no action is passed", function () {
    const state = uiReducer(undefined, {});
    expect(state.toJS()).toEqual(initialState);
  });

  it("returns initial state when SELECT_COURSE is passed", function () {
    const state = uiReducer(undefined, { type: "SELECT_COURSE" });
    expect(state.toJS()).toEqual(initialState);
  });

  it("changes the isNotificationDrawerVisible to true when DISPLAY_NOTIFICATION_DRAWER is passed", function () {
    const state = uiReducer(undefined, { type: DISPLAY_NOTIFICATION_DRAWER });
    expect(state.toJS()).toEqual({
      ...initialState,
      isNotificationDrawerVisible: true,
    });
  });
});
