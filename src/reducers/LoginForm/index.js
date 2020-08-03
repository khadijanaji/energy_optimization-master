// @flow

import {
  LOGIN_ACTION,
  LOGIN_ACTION_ERROR,
  LOGIN_ACTION_SUCCESS,
  LOGOUT_ACTION
} from "../../actions/loginActions/constants";
import type {LoginFormStoreRecordType} from "../../storeTypes/LoginForm";
import {LoginFormStoreRecordFactory} from "../../storeTypes/LoginForm";
import LoginReducer from "./LoginReducer/LoginReducer";
import LoginSuccessReducer from "./LoginSuccessReducer/LoginSuccessReducer";
import LoginErrorReducer from "./LoginErrorReducer/LoginErrorReducer";
import LogoutReducer from "./LogoutReducer/LogoutReducer";

const DEFAULT_STATE = LoginFormStoreRecordFactory();

/**
 * Stores the dashboard information
 * @param {object} state The current state
 * @param {object} action The action to handle
 * @returns {object} The new state
 */
export default function LoginFormReducer (state: LoginFormStoreRecordType = DEFAULT_STATE, action: any) {
  switch (action.type) {
  case LOGIN_ACTION:
    return LoginReducer(state);
  case LOGIN_ACTION_SUCCESS:
    return LoginSuccessReducer(state, action);
  case LOGIN_ACTION_ERROR:
    return LoginErrorReducer(state, action);
  case LOGOUT_ACTION:
    return LogoutReducer(state);
  default:
    return state;
  }
}
