/* eslint-disable react/display-name */
// @flow

import React from "react";
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core/styles";
import green from "@material-ui/core/colors/green";


const theme = createMuiTheme({"palette": {"primary": green}});

export default (MyComponent: any) => ({
  input,
  value,
  "meta": {touched, invalid, error},
  ...others
}: any) => (<MuiThemeProvider theme={theme}>
  <MyComponent
    {...input}
    {...others}
    error={touched && (invalid || Boolean(error))}
    value={value}
  />
</MuiThemeProvider>);
