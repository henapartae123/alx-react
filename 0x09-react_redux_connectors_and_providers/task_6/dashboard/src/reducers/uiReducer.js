import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from "../actions/uiActionTypes";
import immutable from "immutable";

const { Map } = immutable;

export const initialState = Map({
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: {},
});

export function uiReducer(state = initialState, action = { type: null }) {
  switch (action.type) {
    case DISPLAY_NOTIFICATION_DRAWER:
      return state.set("isNotificationDrawerVisible", true);
    case HIDE_NOTIFICATION_DRAWER:
      return state.set("isNotificationDrawerVisible", false);
    case LOGIN_SUCCESS:
      return state.set("isUserLoggedIn", true);
    case LOGIN_FAILURE:
      return state.set("isUserLoggedIn", false);
    case LOGIN:
      return state.set("user", action.user);
    case LOGOUT:
      return state.merge({
        isUserLoggedIn: false,
        user: null,
      });
    default:
      return state;
  }
}
