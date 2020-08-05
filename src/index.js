/* global module */
import {hashHistory, Router} from "react-router";
import {Provider} from "react-redux";
import React from "react";
import ReactDOM from "react-dom";
import routes from "./routes";
import store, {persistor} from "./store";
import {syncHistoryWithStore} from "react-router-redux";
import "./style/index.scss";
import "./utils/moment-fr";
import {PersistGate} from "redux-persist/lib/integration/react";
import piwik from "./utils/piwik/piwik.js";
import {runWithAdal} from "reactjs-adal-adfs";


import {authContext} from "./adalConfig";

const history = syncHistoryWithStore(hashHistory, store);
const piwikHistory = piwik.connectToHistory(history);
if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(
  <Provider store={store}>
    <PersistGate
      loading={"Loading..."}
      persistor={persistor}
    >
      <Router
        history={piwikHistory}
        routes={routes}
      />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

/*
runWithAdal(
  authContext,
  () => {
    ReactDOM.render(<Provider store={store}>
      <PersistGate
        loading={"Loading..."}
        persistor={persistor}
      >
        <Router
          history={piwikHistory}
          routes={routes}
        />
      </PersistGate>
    </Provider>, document.getElementById("root"));
  }, false
);
*/
