/* global module, require */
/* eslint-disable no-underscore-dangle, global-require */

import {applyMiddleware, compose, createStore} from "redux";
import createSagaMiddleware from "redux-saga";
import {routerMiddleware} from "react-router-redux";
import {hashHistory} from "react-router";
import {persistReducer, persistStore, createTransform} from "redux-persist";
import storage from "redux-persist/lib/storage";

import rootReducer from "./reducers";
import rootSaga from "./sagas";
import {LoginFormStoreRecordFactory, InfoUserStoreRecordFactory} from "./storeTypes/LoginForm";
import {get} from "lodash";


const sagaMiddleware = createSagaMiddleware();

const infoUserTransform = createTransform(
  (inboundState) => {
    const persistedInfoUserState = get(inboundState, ["infoUser"], "");
    if (typeof persistedInfoUserState !== "object") {
      return InfoUserStoreRecordFactory({}).toJS();
    }
    return persistedInfoUserState;
  },
  (outboundState) => {
    if (typeof outboundState !== "object") {
      return LoginFormStoreRecordFactory({});
    }
    return LoginFormStoreRecordFactory({"infoUser": outboundState});
  },
  {"whitelist": ["login"]}
);

const persistConfig = {
  "key": "root",
  storage,
  "whitelist": ["login"],
  "transforms": [infoUserTransform]
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware, routerMiddleware(hashHistory))),
);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

if (module.hot) {
  // Enable Webpack hot module replacement for reducers
  module.hot.accept("./reducers", () => {
    const nextRootReducer = require("./reducers").default;

    store.replaceReducer(persistedReducer(persistConfig, nextRootReducer));
  });
}

export default store;
