export interface Action<T = any> {
  error?: boolean;
  meta?: any;
  payload?: T;
  type: string;
}

export interface Model<T> {
  namespace: string;
  state: T;
  reducers: Reducers;
  effects?: any;
}