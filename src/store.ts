import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import * as jsError from "./pages/ErrorMonitoring/JSError/model/index";

import reducers from "./reducers";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(jsError.helloSaga);

export default store;
