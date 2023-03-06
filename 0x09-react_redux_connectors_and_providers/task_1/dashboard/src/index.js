import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App/App";
import createStore from "redux";
import { uiReducer } from "./reducers/uiReducer";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
const store = createStore(uiReducer);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
