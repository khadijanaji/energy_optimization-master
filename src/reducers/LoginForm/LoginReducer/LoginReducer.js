// @flow

import type {LoginFormStoreRecordType} from "../../../storeTypes/LoginForm";

export default (state: LoginFormStoreRecordType) => (state.set("status", "Loading").set("errorMsg", ""));
