import React from "react";
import ReactDOM from "react-dom/client";
import "animate.css";
import "animate.css/animate.min.css";

import { Provider } from "react-redux";
import store from "./stores/index.js";

import { RouterProvider } from "react-router-dom";
import router from "./routers/router";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
