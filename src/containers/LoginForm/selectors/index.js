// @flow

import {getFormValues, isInvalid, isPristine} from "redux-form";

import type {LoginFormStoreRecordType} from "../../../storeTypes/LoginForm";

const loginFormName = "loginForm";

const globalLoginFormSelector = (state: any): LoginFormStoreRecordType => state.login;

const loginFormSelector = (state: any): any => ({
  ...globalLoginFormSelector(state).toJS(),
  "isPristine": Boolean(isPristine(loginFormName)(state)),
  "isInvalid": Boolean(isInvalid(loginFormName)(state))
});

const emailPasswordSelector = (state: any) => getFormValues(loginFormName)(state);

const tokenSelector = (state: any): string => {
  const {"infoUser": {token}} = globalLoginFormSelector(state) || {};
  return token;
};

const emailNameSelector = (state: any) => {
  const {"infoUser": {email, name, roles, factories}} = globalLoginFormSelector(state) || {};
  return {
    email,
    name,
    roles,
    factories
  };
};

export {
  loginFormName,
  globalLoginFormSelector,
  emailPasswordSelector,
  tokenSelector,
  emailNameSelector,
  loginFormSelector
};
