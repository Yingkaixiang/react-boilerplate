import { Action } from "../../../../app.d";

export interface State {
  list: any[];
}

const namespace = "jsError";

const state: State = {
  list: [],
};

export const actionGetList = `${namespace}/getList`;

export function reducers(prevState: State = state, action: Action) {
  switch (action.type) {
    case actionGetList:
      return { ...prevState, list: action.payload };
    default:
      return { ...prevState };
  }
}

export function* helloSaga() {
  console.log("Hello Sagas!");
  return undefined;
}
