// @flow

import React from "react";
import "./style.scss";

type ErrorProps = {
    text?: string,
    refreshFn?: Function
}

const Error = ({text = "Erreur", refreshFn}: ErrorProps) => (
  <div
    className="reporting-error-message"
    onClick={refreshFn}
  >{text}
  </div>
);

export default Error;
