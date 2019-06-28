import React from "react";
import Loadable from "react-loadable";
import { RouteConfig } from "react-router-config";

import Layout from "./pages/Layout/Layout";
import App from "./App";
import NotFound from "./NotFound";
import Loading from "./Loading";

export interface MyRouteConfig extends RouteConfig {
  name?: string;
  isShow?: boolean;
  icon?: string;
}

const config: MyRouteConfig[] = [{
  component: Layout,
  routes: [{
    path: "/",
    exact: true,
    name: "首页",
    key: "root",
    component: App,
  }, {
    path: "/error-monitoring",
    name: "错误监控",
    key: "errorMonitoring",
    icon: "warning",
    isShow: true,
    component: Loadable({
      loader: () => import("./pages/ErrorMonitoring/Index"),
      loading: () => <Loading />,
    }),
    routes: [{
      path: "/error-monitoring/js-error",
      name: "Javascript 错误",
      key: "jsError",
      isShow: true,
      component: Loadable({
        loader: () => import("./pages/ErrorMonitoring/JSError"),
        loading: () => <Loading />,
      }),
    }, {
      path: "/error-monitoring/react-error",
      name: "React 错误",
      key: "reactError",
      isShow: true,
      component: Loadable({
        loader: () => import("./pages/ErrorMonitoring/ReactError"),
        loading: () => <Loading />,
      }),
    }],
  }, {
    path: "*",
    key: "notFound",
    component: NotFound,
  }],
}];

export default config;
