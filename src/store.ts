import Store from "./lib/store";

const store = new Store();

store.register(require("./pages/ErrorMonitoring/JSError/model"));

export default store.init();
