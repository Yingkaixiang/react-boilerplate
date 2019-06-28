export interface Action<T = any> {
  error?: boolean;
  meta?: any;
  payload?: T;
  type: string;
}