// @flow

import type {LoginFormStoreRecordType} from "../../../storeTypes/LoginForm";


export default (state: LoginFormStoreRecordType, action: any) => (
  state.set("status", "Success").
    setIn([
      "infoUser",
      "email"
    ], action.email).
    setIn([
      "infoUser",
      "name"
    ], action.name).
    setIn([
      "infoUser",
      "token"
    ], action.token).
    setIn([
      "infoUser",
      "roles"
    ], action.roles).
    setIn([
      "infoUser",
      "factories"
    ], action.factories));
