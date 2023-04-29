import axios, { AxiosResponse } from "axios";

import { getFromStore } from "../common/utils/localStorage";
import { AuthToken } from "../common/localStorageModels";

const baseURL = ""; // gateway url

const axiosInstance = axios.create({
  baseURL,
  timeout: 10000,
});

export const getRequest = <ResponseModel>(
  url: string
): Promise<AxiosResponse<ResponseModel>> => {
  const { token } = getFromStore<AuthToken>("AUTH_TOKEN") ?? {};
  return axiosInstance.get(`${url}`, {
    headers: {
      ...(!!token && {
        Authorization: `Bearer ${token}`,
      }),
    },
  });
};

export const postRequest = <ResponseModel, RequestModel>(
  url: string,
  body: RequestModel
): Promise<AxiosResponse<ResponseModel>> => {
  const { token } = getFromStore<AuthToken>("AUTH_TOKEN") ?? {};
  return axiosInstance.post(`${url}`, body, {
    headers: {
      ...(!!token && {
        Authorization: `Bearer ${token}`,
      }),
    },
  });
};
