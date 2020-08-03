/* eslint-disable react/no-multi-comp */
/* eslint-disable react/jsx-handler-names */
/* eslint-disable react/no-set-state */
// @flow

import * as React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import {ArrowDropDown} from "@material-ui/icons";
import classNames from "classnames";
import "./style.scss";

type SelectState = {
  anchorEl: any
}
type SelectProps = {
  factories: Array<string>,
  currentEntity: string,
  currentSite: string
}

const isFactorySelected = (factory: string, currentEntity: string) => factory === currentEntity;

const renderFactorySelected = (currentEntity: string, clickHandler: Function) => (
  <div
    className="factory-drawer__factory-selected"
    onClick={clickHandler}
  >
    <div className="factory-drawer__factory-selected__marker" />
    <div className="factory-drawer__factory-selected__text">{currentEntity}</div>
  </div>
);

const renderNoFactorySelected = (clickHandler: Function) => (
  <div
    className="factory-drawer__select-text"
    onClick={clickHandler}
  >
    {"Sélectionnez une usine"}
  </div>
);

class FactorySelect extends React.Component<SelectProps, SelectState> {
  constructor (props: SelectProps) {
    super(props);
    this.state = {"anchorEl": null};
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClick: Function

  handleClick () {
    const anchor = document.getElementById("factory-select-anchor");
    this.setState({"anchorEl": anchor});
  }

  handleClose: Function

  handleClose () {
    this.setState({"anchorEl": null});
  }

  render () {
    const {anchorEl} = this.state;
    const {factories = [], currentEntity, currentSite} = this.props;
    return (
      <div className="factory-drawer__menu">
        {currentEntity && renderFactorySelected(currentEntity, this.handleClick)}
        {!currentEntity && renderNoFactorySelected(this.handleClick)}
        <div id="factory-select-anchor" />
        <div className="factory-drawer__icon">
          <ArrowDropDown onClick={this.handleClick} />
        </div>
        {factories && factories.length > 1 && <Menu
          anchorEl={anchorEl}
          id="factory-select-menu"
          onClose={this.handleClose}
          open={Boolean(anchorEl)}
        >
          {factories.map((factory) => (<MenuItem
            key={factory}
            onClick={this.handleClose}
          >
            {isFactorySelected(factory, currentEntity) && <div className="factory-drawer__item__marker" />}
            <a
              className={
                classNames(
                  "factory-drawer__item",
                  {"factory-drawer__item__selected": isFactorySelected(factory, currentEntity)}
                )}
              href={`#/${currentSite}/${factory}`}
            >
              {factory}</a>
          </MenuItem>))
          }
        </Menu>}
      </div>
    );
  }
}

export default FactorySelect;
