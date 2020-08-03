import React from "react";
import {Route} from "react-router";

// eslint-disable-next-line no-unused-vars
import {BrowserRouter as Router, Switch} from "react-router-dom";

import NavigationBarContainer from "./containers/layout/NavigationBarContainer";

/*
 * @import Authorization from "./containers/Authorization";
 * @import LoginForm from "./containers/LoginForm";
 * @import FactoryListContainer from "./containers/FactoryListContainer";
 */

const routes = (
  <Route>
    <Route
      component={NavigationBarContainer}
      path="/(:site)"
    />
  </Route>

);


export default routes;
