// @flow

import CircularProgress from "@material-ui/core/CircularProgress";
import React from "react";

import "./style.scss";

const Loader = () => (
  <div className="center-block">
    <CircularProgress />
  </div>
);

export default Loader;
