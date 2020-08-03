// @flow

import {tokenSelector} from "../../LoginForm/selectors";
import {get} from "lodash";

const appSelector = (state: any): any => {
  const token = tokenSelector(state);
  const user = get(state, [
    "login",
    "infoUser"
  ], {});
  return {
    "isUserConnected": Boolean(token),
    user
  };
};

export default appSelector;
