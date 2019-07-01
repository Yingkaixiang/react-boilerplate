import { ReducersMapObject, AnyAction } from "redux";
import { Saga } from "redux-saga";

export interface Action<T = any> extends AnyAction {
  error?: boolean;
  meta?: any;
  payload?: T;
  type: string;
}

export interface EffectMapObject {
  [propName: string]: Saga | [Saga];
}

export interface Model<T> {
  namespace: string;
  state: T;
  reducers: ReducersMapObject;
  effects?: EffectMapObject;
}