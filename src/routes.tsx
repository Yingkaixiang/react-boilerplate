import Layout from "./Layout";
import App from "./App";

export default [{
  component: Layout,
  routes: [{
    path: "/",
    exact: true,
    component: App,
  }],
}];
