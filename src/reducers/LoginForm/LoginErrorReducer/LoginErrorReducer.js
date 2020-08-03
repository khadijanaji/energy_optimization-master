// @flow

import type {LoginFormStoreRecordType} from "../../../storeTypes/LoginForm";

export default (state: LoginFormStoreRecordType, action: any) => (state.set("status", "Error").
  set("errorMsg", action.errorMsg));
