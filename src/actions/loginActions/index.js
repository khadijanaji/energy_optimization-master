// @flow

import type {InfoUserPropsType} from "../../storeTypes/LoginForm";
import {LOGIN_ACTION, LOGIN_ACTION_ERROR, LOGIN_ACTION_SUCCESS, LOGOUT_ACTION, CALL_PIWIK_SAGA} from "./constants";

export const loginActionCreator =
    (): any => ({"type": LOGIN_ACTION});

type UserInfo = {
  email: string,
  name: string,
  token: string,
  roles: Array<string>,
  factories: Array<string>
}

export const loginActionSuccessCreator =
    ({email, name, token, roles, factories}: UserInfo): any => ({
      "type": LOGIN_ACTION_SUCCESS,
      email,
      name,
      token,
      roles,
      factories
    });

export const loginActionErrorCreator =
    (errorMsg: string): any => ({
      "type": LOGIN_ACTION_ERROR,
      errorMsg
    });

export const logoutActionCreator = (): any => ({"type": LOGOUT_ACTION});

// Call Piwik

export type CallPiwikSaga = {
  type: "CALL_PIWIK_SAGA",
  infoUser: ?InfoUserPropsType
};

export const callPiwikSaga = (infoUser: ?InfoUserPropsType): CallPiwikSaga => ({
  "type": CALL_PIWIK_SAGA,
  infoUser
});


