import { createStore, combineReducers } from "redux";

import { Model, Reducers, Action } from "../app.d";

type StoreModel = Model<any>;
type StoreReducers = Reducers<any>;

class Store {
  models: Set<StoreModel> = new Set();
  reducers: StoreReducers = {};
  effects: any = {};

  register(mod: any) {
    if (mod) {
      if (mod && mod.__esModule) {
        this.models.add(mod.default);
      }
    }
  }

  create() {
    this.models.forEach((model: StoreModel) => {
      const { namespace, state, reducers, effects = {} } = model;
      this.createReducers(namespace, state, reducers);
    });
  }

  createReducers(namespace: string, state: any, reducers: StoreReducers) {
    Object.keys(reducers).forEach((key: string) => {
      const actionName = `${namespace}/${key}`;
      this.reducers[namespace] = (prevState: any = state, action: Action) => {
        if (action.type === actionName) {
          return reducers[key](prevState, action);
        }
        return { ...prevState };
      };
    });
  }

  init() {
    this.create();
    const store = createStore(combineReducers(this.reducers));
    return store;
  }
}

export default Store;
