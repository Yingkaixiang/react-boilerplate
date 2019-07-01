import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { message } from "antd";

function checkStatus({ status, statusText, data }: AxiosResponse) {
  if (status === 200 || status === 400) {
    return data;
  } else if (status === 401) {
    message.error("请重新登录");
  } else if (status === 403) {
    message.error("您没有操作额权限");
  } else if (status >= 500) {
    message.error("服务器错误");
  } else {
    message.warning(`${status}: ${statusText}`);
  }
}

export default (reqConfig: AxiosRequestConfig) => {
  return axios(reqConfig)
    .then((res: AxiosResponse) => checkStatus(res));
};
