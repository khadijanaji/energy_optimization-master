// @flow

import type {LoginFormStoreRecordType} from "../../../storeTypes/LoginForm";

export default (state: LoginFormStoreRecordType) => (state.set("status", "Success").
  setIn([
    "infoUser",
    "email"
  ], "").
  setIn([
    "infoUser",
    "name"
  ], "").
  setIn([
    "infoUser",
    "token"
  ], ""));
