import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App/App";
import { applyMiddleware, createStore } from "redux";
import { uiReducer } from "./reducers/uiReducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { composewithDevTools } from "react-dev-tools-extension";

const store = createStore(
  uiReducer,
  composewithDevTools(applyMiddleware(thunk))
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
