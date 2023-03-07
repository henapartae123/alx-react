import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER,
} from "../actions/notificationActionTypes";
import { notificationsNormalizer } from "../schema/notifications";
import immutable, { setIn } from "immutable";

const { Map, setIn } = immutable;

export const initialState = {
  notifications: [],
  filter: "DEFAULT",
  loading: false,
};

export const notificationReducer = (state = Map(initialState), action) => {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      const data = notificationsNormalizer(action.data);
      Object.keys(data.notifications).map((key) => {
        data.notifications[key].isRead = false;
      });
      return state.mergeDeep(data);
    case MARK_AS_READ:
      return setIn(
        state,
        ["notifications", String(action.index), isRead],
        true
      );
    case SET_TYPE_FILTER:
      return setIn("filter", action.filter);
    case SET_LOADING_STATE:
      return set(state, "loading", action.loading);
    default:
      break;
  }
  return state;
};
