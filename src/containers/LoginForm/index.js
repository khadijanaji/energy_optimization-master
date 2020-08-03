// @flow

import {reduxForm} from "redux-form";
import LoginForm from "../../components/LoginForm";
import {compose} from "redux";
import {connect} from "react-redux";
import {loginFormName, loginFormSelector} from "./selectors";
import {loginActionSuccessCreator} from "../../actions/loginActions";

const mapDispatchToProps = (dispatch) => ({
  "onSubmit": (event) => {
    event.preventDefault();
    dispatch(loginActionSuccessCreator({
      "email": "name",
      "name": "",
      "token": "",
      "roles": [
        "PAP28",
        "PAP54",
        "OSBL",
        "SAP",
        "DAP"
      ],
      "factories": [
        "JFC1",
        "JFC2",
        "JFC3",
        "JFC4"
      ]
    }));
    // @dispatch(push("/"));
  },
  dispatch
});

export default compose(connect(loginFormSelector, mapDispatchToProps), reduxForm({"form": loginFormName}))(LoginForm);
