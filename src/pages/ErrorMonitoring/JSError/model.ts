import { Model, Action } from "../../../app.d";

interface State {
  list: any[];
}

export default {
  namespace: "jsError",
  state: {
    list: [],
  },
  reducers: {
    setList(prevState: State, action: Action) {
      return { ...prevState, list: action.payload };
    },
  },
  effects: {
    *getList() {
      yield console.log("hello saga");
    },
  },
} as Model<State>;
