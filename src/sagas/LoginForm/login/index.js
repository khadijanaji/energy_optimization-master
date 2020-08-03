// @flow

import {call, put, select} from "redux-saga/effects";
import {push} from "react-router-redux";

import {
  loginActionErrorCreator,
  loginActionSuccessCreator,
  callPiwikSaga
} from "../../../actions/loginActions";

import {request} from "../../helper";
import {emailPasswordSelector} from "../../../containers/LoginForm/selectors";
import {InfoUserStoreRecordFactory} from "../../../storeTypes/LoginForm";

const redirect = (factories) => {
  if (!factories || factories.length > 1) {
    return "/";
  }
  return `/Jorf/${factories[0]}`;
};

/**
 * Listens for the submit attachment action and trigger the request flow, cancelling the previous
 * request if it was still ongoing.
 * @return {null} nothing
 */
export default function *login (): Generator<any, void, any> {
  try {
    const url = "api/login";

    const requestData = yield select(emailPasswordSelector);

    const response = yield call(request, {
      url,
      "method": "post",
      "data": requestData,
      "headers": {"authSource": "reporting"}
    });
    const {"headers": {"authorization": token}, "data": {mail, name, roles, factories}} = response;
    yield put(loginActionSuccessCreator({
      token,
      "email": mail,
      name,
      roles,
      factories
    }));
    const infoUser = InfoUserStoreRecordFactory({
      "email": mail,
      name,
      token,
      roles,
      factories
    });
    yield put(callPiwikSaga(infoUser));
    yield put(push(redirect(factories)));
  } catch (error) {
    yield put(loginActionErrorCreator("Une erreur est survenue lors de la connexion au serveur!"));
  }
}
