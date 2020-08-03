// @flow
/* eslint-disable react/display-name, react/prop-types,
  react/destructuring-assignment, no-magic-numbers, react/jsx-no-bind */
import TextField from "../TextField";
import "./style.scss";
import React from "react";
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core/styles";
import green from "@material-ui/core/colors/green";


const theme = createMuiTheme({"palette": {"primary": green}});
const EMPTY_SPACE = "*********";

export const getTextWidth = (text: string) => {
  const ruler = document.getElementById("email-field__ruler");
  if (ruler) {
    ruler.innerHTML = text || EMPTY_SPACE;
    return `${ruler.offsetWidth}px`;
  }
  return "0px";
};

export const onTextChange = (event: any, eventHandler?: Function) => {
  const {"target": {value}} = event;
  const placeholder = document.getElementById("email-field__placeholder") || {};
  placeholder.style.left = getTextWidth(value);
  if (eventHandler) {
    eventHandler(event);
  }
};

export const constructEvent = (text: string) => {
  let value = text;
  if (!value) {
    value = EMPTY_SPACE;
  }
  return {"target": {value}};
};

class EmailField extends React.Component<any> {
  componentDidMount () {
    setTimeout(() => {
      const {"input": {value}} = this.props;
      onTextChange(constructEvent(value));
    }, 100);
  }

  render () {
    const {input, name, ...custom} = this.props;
    const {onChange} = input;
    return (
      <MuiThemeProvider theme={theme}>
        <div className="email-field__root">
          <span
            className="email-field__ruler"
            id="email-field__ruler"
          >{""}</span>
          <div
            className="email-field__placeholder"
            id="email-field__placeholder"
          >{"@ocpgroup.ma"}</div>
          <TextField
            id={name}
            label="Login"
            margin="normal"
            {...input}
            {...custom}
            fullWidth
            onChange={(event) => onTextChange(event, onChange)}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}


export default EmailField;
