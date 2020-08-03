/* eslint-disable react/prop-types */
/* eslint-disable react/no-multi-comp */
// @flow
import React from "react";
import "./style.scss";

const BreadcrumbItem = ({children, ...props}) => (
  <li
    className="breadcrumb-item"
    {...props}
  >
    {children}
  </li>
);


const toBreadcrumbItem = (child, index) => (
  <BreadcrumbItem key={`breadcrumb_item${index}`}>{child}</BreadcrumbItem>
);

const withSeparator = (lastIndex) => (acc, child, index) => {
  const notLast = index < lastIndex;
  if (notLast) {
    acc.push([
      <span
        className="breadcrumb__previous"
        key={`element-${index}`}
      >{child}</span>,
      <span
        className="breadcrumb__separator"
        key={`separator-${index}`}
      >{" > "}</span>
    ]);
  } else {
    acc.push(<span
      className="breadcrumb__current"
      key={`element-${index}`}
    >{child}</span>);
  }
  return acc;
};

const Breadcrumb = ({...props}: any) => {
  let {children} = props;
  children = React.Children.toArray(children);

  const totalItems = children.length;
  const lastIndex = totalItems - 1;

  children = children.map(toBreadcrumbItem).reduce(withSeparator(lastIndex), []);

  return <div className="breadcrumb__container"><ol>{children}</ol></div>;
};

export default Breadcrumb;
