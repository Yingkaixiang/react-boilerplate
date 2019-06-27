import React from "react";
import ReactDOM from "react-dom";
import { LocaleProvider } from "antd";
import moment from "moment";
import { HashRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { Provider } from "react-redux";

import zh_CN from "antd/lib/locale-provider/zh_CN";
import "moment/locale/zh-cn";

import "./index.css";
import * as serviceWorker from "./serviceWorker";
import routes from "./routes";
import store from "./store";

moment.locale("zh-cn");

ReactDOM.render(
  (
    <LocaleProvider locale={zh_CN}>
      <Provider store={store}>
        <HashRouter>
          {renderRoutes(routes)}
        </HashRouter>
      </Provider>
    </LocaleProvider>
  ),
  document.getElementById("root"),
);

serviceWorker.register();
