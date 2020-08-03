/* eslint-disable react/prop-types,react/no-unused-prop-types */
// @flow

import * as React from "react";
import type {InfoUserPropsType} from "../../storeTypes/LoginForm";
import {get} from "lodash";

export type AppPropsType = {
  redirectTo: Function,
  isUserConnected: boolean,
  children: React.Node,
  user: InfoUserPropsType,
  params: {
    entity: string,
    domain: string
  }
};

const userHasAccess = (domainRequest: string, entityRequest: string, user: InfoUserPropsType): boolean => {
  const userDomains = get(user, "roles", []);
  const userEntities = get(user, "factories", []);
  return (!domainRequest || userDomains.includes(domainRequest.toUpperCase())) &&
    (!entityRequest || userEntities.includes(entityRequest.toUpperCase()));
};

const redirectIfNotAuthorized = (props: AppPropsType) => {
  const {user, redirectTo, isUserConnected, "params": {entity = "", domain = ""}} = props;
  if (!isUserConnected) {
    redirectTo("/login");
    return;
  }
  if (!userHasAccess(domain, entity, user)) {
    redirectTo("/");
  }
};


class Authorization extends React.Component<AppPropsType> {
  componentDidMount () {
    redirectIfNotAuthorized(this.props);
  }

  componentWillReceiveProps (nextProps: AppPropsType) {
    const {children, "params": {entity, domain}} = this.props;
    const {"children": nextChildren, "params": {"domain": nextDomain, "entity": nextEntity}} = nextProps;
    if (nextChildren !== children || entity !== nextEntity || nextDomain !== domain) {
      redirectIfNotAuthorized(nextProps);
    }
  }

  render () {
    const {children} = this.props;

    return (<React.Fragment>
      {children}
    </React.Fragment>);
  }
}

export default Authorization;
