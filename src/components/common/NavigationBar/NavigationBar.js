/* eslint-disable react/no-set-state, no-invalid-this, max-lines */
// @flow

import * as React from "react";
import {Component} from "react";

import {Link} from "react-router";
import {Menu, MenuItem} from "@material-ui/core";
import thunderbolt from "./../../../img/thunder-bolt.png";
import IconLogout from "@material-ui/icons/PowerSettingsNew";
import "./style.scss";
import {withStyles} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import Refresh from "@material-ui/icons/Refresh";
import ArrowDropDown from "@material-ui/icons/ArrowDropDown";
import {styles} from "./muiStyles";
import {userName, logout} from "../../../adalConfig";

type Props = {
  Hidden: boolean,
  isAdmin: boolean,
  classes: any,
  handleAction: Function
}

type State = {
  anchorEl: any
}

class NavigationBar extends Component<Props, State> {
  constructor () {
    super();
    this.state = {"anchorEl": null};
    this.handleOpenMenu = this.handleOpenMenu.bind(this);
    this.handleCloseMenu = this.handleCloseMenu.bind(this);
    this.handleClickAction = this.handleClickAction.bind(this);
  }

  handleOpenMenu: Function;

  handleCloseMenu: Function;

  handleClickAction: Function;

  handleOpenMenu (event) {
    const {currentTarget} = event;
    this.setState({"anchorEl": currentTarget});
  }

  handleCloseMenu () {
    this.setState({"anchorEl": null});
  }

  handleClickAction () {
    const {handleAction} = this.props;
    this.setState({"anchorEl": null});
    handleAction();
  }

  render () {
    const {anchorEl} = this.state;
    const isOpen = Boolean(anchorEl);
    const {
      Hidden,
      isAdmin,
      classes
    } = this.props;

    return (
      <React.Fragment>
        <div className="bar">
          <img
            className="bar__logo"
          />
          {isAdmin &&
              <div
                className="bar__right"
                // OnClick={resetLogin}
              >
                <Link>
                  <IconLogout
                    className="bar__right--icon"
                  />
                </Link>
              </div>
          }
          {!Hidden &&
          <React.Fragment>
            <React.Fragment>
              <Link
                activeClassName="bar__item--selected"
                to={{"pathname": "/optimisation"}}
              >
                  Energy Management
              </Link>
            </React.Fragment>
            <Link
              activeClassName="bar__item--selected"
              to="/simulation"
            >
                Simulateur PEE
            </Link>
            <Link
              activeClassName="bar__item--selected"
              to="/historique"
            >
              Historique
            </Link>
          </React.Fragment>}
          <div className="bar__logout-container">

            <React.Fragment>

              <span
                className="bar__optimise"
                to="/admin"
              >
                <div
                  className="bar__optimise--icon"
                  height="26px"
                  width="16px"
                >
                  <img
                    height="26px"
                    src={thunderbolt}
                    width="16px"
                  />
                </div>
                <span
                  // OnClick={}
                  className="bar__optimise--text"
                >Lancer l&apos;Optimisation
                </span>
              </span>

            </React.Fragment>
            {!Hidden &&
            <React.Fragment>
              <span
                className="bar__logout-container__notif"
              >
                <div
                  className="bar__logout-container__notif__bull"
                >
                  <IconButton
                    style={{
                      "width": "8px",
                      "height": "100%"
                    }}
                  >
                    <Refresh
                      classes={{"root": classes.icon}}
                    />
                  </IconButton>
                </div>

              </span>
              <span
                className="bar__logout-container__profil"
              >
                <div
                  aria-controls="simple-menu"
                  aria-haspopup="true"
                  className="bar__logout-container__profil__menu"
                  onClick={this.handleOpenMenu}
                >
                  <span className="bar__logout-container__profil__menu--title">{userName}</span>
                  <span className="bar__logout-container__profil__menu--icon">
                    <ArrowDropDown style={{
                      "color": "#8092A5",
                      "position": "relative",
                      "top": "-1px"
                    }}
                    />
                  </span>
                </div>
              </span>
              <Menu
                anchorEl={anchorEl}
                classes={{"paper": classes.rootPopup}}
                keepMounted
                onClose={this.handleCloseMenu}
                open={isOpen}
              >
                <MenuItem
                  className={classes.menuItem}
                  onClick={logout}
                >
                  <span
                    className="bar__logout-container__profil__logout"
                  >
                    <Link>
                      {"Déconnexion"}
                    </Link>
                  </span>
                </MenuItem>
              </Menu>
            </React.Fragment>}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(NavigationBar);
