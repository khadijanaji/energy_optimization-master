// @flow

import * as React from "react";

export type LinkPropsType = {
    children: React.Node,
    url: string,
    navigateToUrlOnClick: Function
};

const Link = ({
  children,
  url,
  navigateToUrlOnClick
}: LinkPropsType) => (<div onClick={navigateToUrlOnClick(url)}>{children}</div>);

export default Link;
