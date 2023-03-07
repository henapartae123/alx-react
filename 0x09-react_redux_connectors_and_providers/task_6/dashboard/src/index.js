import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App/App";
import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import { initialState, uiReducer } from "./reducers/uiReducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { rootReducer } from "./reducers/rootReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers(rootReducer),
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
