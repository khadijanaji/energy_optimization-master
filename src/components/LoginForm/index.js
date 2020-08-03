/* eslint-disable react/no-multi-comp */
/* eslint-disable react/no-set-state */
// @flow

import React from "react";
import FormControl from "@material-ui/core/FormControl";
import {Field} from "redux-form";

import TextField from "../common/reduxFormFields/TextField";
import Button from "../common/reduxFormFields/Button";
import logo from "../../img/reporting-192.png";
import warn from "../../img/login/text-warning-icon.svg";
import {RemoveRedEye} from "@material-ui/icons";
import {InputAdornment} from "@material-ui/core";

import "./style.scss";

import type {LoginFormStoreType} from "../../storeTypes/LoginForm";


const RenderError = ({errorMsg}: any) => (
  <div className="login__error">
    <div className="login__error--text">
      {errorMsg}
    </div>
    <div className="login__error--icon">
      {errorMsg &&
      <img
        alt="warn"
        src={warn}
      />
      }
    </div>
  </div>
);

type State = {
  passwordIsMasked: boolean
}


class LoginForm extends React.Component<LoginFormStoreType, State> {
  constructor (props: LoginFormStoreType) {
    super(props);
    this.state = {"passwordIsMasked": true};
    this.handleTogglePasswordMask = this.handleTogglePasswordMask.bind(this);
  }

  handleTogglePasswordMask: Function;

  handleTogglePasswordMask () {
    this.setState((prevState) => ({"passwordIsMasked": !prevState.passwordIsMasked}));
  }

  render () {
    const {passwordIsMasked} = this.state;
    const {onSubmit, status, errorMsg, isPristine, isInvalid} = this.props;
    const renderedError = status === "Error" && (<RenderError errorMsg={errorMsg} />);
    return (
      <div className="login">
        <div className="login__header">
          <img
            alt="logo"
            className="login__header--logo"
            src={logo}
          />
        </div>
        <form
          onSubmit={onSubmit}
        >
          <div
            className="login__text2"
          >{"Utilisez vos informations d’accès OCP pour accéder à l’application"}</div>
          <div className="login__email">
            <FormControl fullWidth>
              <Field
                component={TextField}
                id="login-email"
                label={"Identifiant/Email"}
                name="email"
              />
            </FormControl>
          </div>
          <div className="login__password">
            <FormControl fullWidth>
              <Field
                InputProps={{
                  "endAdornment": (
                    <InputAdornment
                      position="end"
                      style={{"marginLeft": "-25px"}}
                    >
                      <RemoveRedEye
                        onClick={this.handleTogglePasswordMask}
                      />
                    </InputAdornment>
                  )
                }}
                component={TextField}
                id="login-password"
                label={"Password"}
                name="password"
                type={passwordIsMasked
                  ? "password"
                  : "text"}
              />
            </FormControl>
          </div>
          {renderedError}
          <div className="login__button">
            <Field
              component={Button}
              disabled={isPristine || isInvalid}
              id="LoginForm-SubmitButton"
              name="submit"
              type="submit"
            >
              {"CONNEXION"}
            </Field>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginForm;
