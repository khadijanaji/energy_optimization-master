// @flow

import React from "react";
import "./style.scss";


const Tag = (tagName: string = "TAG", className?: string) => (
  <span className={`indicator-tag ${className || ""}`}>{tagName}</span>
);

const ComputedTag = Tag("CALCULÉ");

const ConstantTag = Tag("CONSTANTE");

const ForcedTag = Tag("FORCÉ");

const ErrorTag = Tag("ERRONÉE", "indicator-tag-danger");

export {
  ComputedTag,
  ConstantTag,
  ForcedTag,
  ErrorTag
};

export default Tag;
