// @flow

import {CANCEL} from "redux-saga";
import axios from "axios";

export type RequestConfig = {
  url: string,
  params?: { [string]: (string | number | boolean) },
  data?: any,
  method?: ("get" | "post" | "put" | "delete")
}

const getAuthorizationToken = () => "AUTHORIZATION_TOKEN";

export const request = (config: RequestConfig): Promise<any> => {
  const source = axios.CancelToken.source();

  const responsePromise = axios({
    ...config,
    "cancelToken": source.token,
    "Authorization": getAuthorizationToken()
  });

  responsePromise[CANCEL] = () => source.cancel();

  return responsePromise;
};

export const tokenSelector = (state: any): any => {
  const {"infoUser": {token}} = state.login;
  return token;
};
export const infoUserSelector = (state: any): any => {
  const {infoUser} = state.login;
  return infoUser;
};
