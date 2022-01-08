import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./scss/app.scss";
import App from "./App";
import { Provider } from "react-redux"; // библиотека для удобной работы реакта с редаксом.
import store from "./redux/store"; // сам редакс

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}> {/* обёртка react-redux */}
        <App />
      </Provider>
    </BrowserRouter>,
  </React.StrictMode>,
  document.getElementById("root")
);
