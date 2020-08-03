// @flow

import {connect} from "react-redux";
import {push} from "react-router-redux";

import App from "../../components/Authorization";
import appSelector from "./selectors";

const mapsStateToProps = appSelector;

const mapDispatchToProps = {"redirectTo": push};

export default connect(mapsStateToProps, mapDispatchToProps)(App);
