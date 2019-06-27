import React from "react";
import ReactDOM from "react-dom";
import { LocaleProvider } from "antd";
import moment from "moment";
import { HashRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";

import zh_CN from "antd/lib/locale-provider/zh_CN";
import "moment/locale/zh-cn";

import "./index.css";
import * as serviceWorker from "./serviceWorker";
import routes from "./routes";

moment.locale("zh-cn");

ReactDOM.render(
  (
    <LocaleProvider locale={zh_CN}>
      <HashRouter>
        {renderRoutes(routes)}
      </HashRouter>
    </LocaleProvider>
  ),
  document.getElementById("root"),
);

serviceWorker.register();
