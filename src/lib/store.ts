import {
  createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import createSagaMiddleware from "redux-saga";
import { takeEvery, takeLatest } from "redux-saga/effects";

import { Model, Action } from "../app.d";
import { ReducersMapObject } from "redux";
import { Saga, SagaMiddleware } from "redux-saga";

type StoreModel = Model<any>;

class Store {
  models: Set<StoreModel> = new Set();
  reducers: ReducersMapObject = {};
  effects: Saga[] = [];
  initialState: any;
  sagaMiddleware: SagaMiddleware;

  constructor(initialState: any = {}) {
    this.initialState = initialState;
    this.sagaMiddleware = createSagaMiddleware();
  }

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
      this.createSagas(namespace, effects);
    });
  }

  createReducers(
    namespace: string,
    state: any,
    reducers: ReducersMapObject,
  ) {
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

  createSagas(namespace: string, effects: any) {
    Object.keys(effects).forEach((key: string) => {
      const action = `${namespace}/${key}`;
      const value = effects[key];
      if (typeof value === "function") {
        this.effects.push(function*() {
          yield takeEvery(action, value);
        });
      } else if (value instanceof Array) {
        this.effects.push(function*() {
          yield takeLatest(action, value[0]);
        });
      } else {
        this.effects.push(value);
      }
    });
  }

  init() {
    this.create();
    const store = createStore(
      combineReducers(this.reducers),
      this.initialState,
      applyMiddleware(this.sagaMiddleware),
    );
    this.effects.forEach((effect: any) => {
      this.sagaMiddleware.run(effect);
    });
    return store;
  }
}

export default Store;