// @flow
import {takeLatest} from "redux-saga/effects";

import {LOGIN_ACTION} from "../../actions/loginActions/constants";
import login from "./login";

/**
 * Listens for the get item groups action and trigger the request flow, cancelling the previous
 * request if it was still ongoing.
 * @return {null} nothing
 */
export default function *(): Generator<any, void, any> {
  yield takeLatest(LOGIN_ACTION, login);
}
