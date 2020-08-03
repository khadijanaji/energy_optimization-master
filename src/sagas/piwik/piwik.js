/* eslint-disable max-statements */
// @flow
/* eslint-disable no-magic-numbers*/
import {takeLatest, call, select} from "redux-saga/effects";
import piwik from "../../utils/piwik/piwik.js";
import type {CallPiwikSaga} from "../../actions/loginActions";
import {CALL_PIWIK_SAGA} from "../../actions/loginActions/constants";
import {infoUserSelector} from "../helper.js";

// eslint-disable-next-line max-len
const piwikCustomNameSaga = function *piwikCustomNameSaga ({infoUser}: CallPiwikSaga): Generator<any, void, any> {
  let infoUserVal = infoUser;
  if (infoUserVal === undefined || infoUserVal === null) {
    infoUserVal = yield select(infoUserSelector);
  }
  const payload1 = [
    "setCustomVariable",
    1,
    "Name",
    infoUserVal.name,
    "visit"
  ];
  const payload2 = [
    "setCustomVariable",
    2,
    "Role",
    infoUserVal.roles,
    "visit"
  ];
  const payload3 = [
    "setCustomVariable",
    3,
    "Factory",
    infoUserVal.factories,
    "visit"
  ];

  const userId = [
    "setUserId",
    infoUserVal.email
  ];
  yield call(piwik.push, userId);
  yield call(piwik.push, payload1);
  yield call(piwik.push, payload2);
  yield call(piwik.push, payload3);
};

/**
 * Listens for the piwik call saga details action and trigger the call flow, cancelling the previous
 * call if it was still ongoing.
 * @return {null} nothing
 */
export default function *(): Generator<any, void, any> {
  yield takeLatest(CALL_PIWIK_SAGA, piwikCustomNameSaga);
}
