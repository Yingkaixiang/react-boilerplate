import { combineReducers, createStore } from "redux";

import { Model, Action } from "../app.d";

type AppModel = Model<any>;

class App {
  models: AppModel[];

  constructor() {
    this.models = [];
  }

  registerModel(model: any) {
    this.models.push(model.default);
  }

  compile(model: AppModel) {
    const { namespace, state, reducers } = model;
    const current: any = {};
    Object.keys(reducers).forEach((key: string) => {
      const action = `${namespace}/${key}`;
      current[action] = reducers[key];
    });
    return {
      [namespace]: (prevstate: any = state, action: Action) => {
        return current[action.type](prevstate, action);
      },
    };
  }

  start() {
    const reducers: any = {};
    this.models.forEach((model: AppModel) => {
      const reducer = this.compile(model);
      Object.assign(reducers, reducer);
    });
    // createStore(combineReducers(reducers));
  }
}

export default new App();
