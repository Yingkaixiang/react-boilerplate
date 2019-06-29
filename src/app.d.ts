export interface Action<T = any> {
  error?: boolean;
  meta?: any;
  payload?: T;
  type: string;
}

export interface Reducers<T> {
  [propName: string]: (prevState: T, action: Action) => object;
}

export interface Model<T> {
  namespace: string;
  state: T;
  reducers: Reducers;
  effects?: any;
}