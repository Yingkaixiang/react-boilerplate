import { combineReducers } from "redux";

import * as jsError from "./pages/ErrorMonitoring/JSError/model/index";

const reducers = combineReducers({
  jsError: jsError.reducers,
});

export default reducers;
