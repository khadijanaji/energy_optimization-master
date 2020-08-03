// @flow

/* eslint-disable no-magic-numbers */

import {call, put, select} from "redux-saga/effects";
import {push} from "react-router-redux";
import {get} from "lodash";

import {request, tokenSelector} from "../../helper";
import {logoutActionCreator} from "../../../actions/loginActions";

export type callApiParamsType = {
    url: string,
    data?: any,
    method: string,
    successAction: Function,
    errorAction: Function
};

/**
 * Listens for the submit attachment action and trigger the request flow, cancelling the previous
 * request if it was still ongoing.
 * @return {null} nothing
 */
export default function
*callApi ({url, data = {}, method = "get", successAction, errorAction}: callApiParamsType): Generator<any, void, any> {
  try {
    const token = yield select(tokenSelector);
    const response = yield call(request, {
      "headers": {"Authorization": token},
      url,
      method,
      data
    });
    const {responseData} = response;
    yield put(successAction(responseData));
  } catch (error) {
    if (get(error, [
      "response",
      "status"
    ]) === 403) {
      yield put(logoutActionCreator());
      yield put(push("/login"));
    } else if (errorAction) {
      yield put(errorAction("Impossible de se connecter au serveur"));
    }
  }
}
