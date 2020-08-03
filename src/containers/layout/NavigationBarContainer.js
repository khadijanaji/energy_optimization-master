// @flow
/* eslint-disable no-invalid-this, react/jsx-sort-props, react/prefer-stateless-function */

import {connect} from "react-redux";
import * as React from "react";
import NavigationBar from "../../components/common/NavigationBar";
import Optimisation from "../../components/Optimisation/Optimisation";
import Simulation from "../../components/Simulation/Simulation";


type Props = {
  children: React.Node,
  location: any
}

type States = {showNotif: boolean};

class NavigationBarContainer extends React.Component<Props, States> {
  render () {
    const {
      children,
      location
    } = this.props;
    let comp;
    if(location.pathname === '/optimisation'){
      comp = <Optimisation/>;
    }else if(location.pathname === '/simulation'){
        comp = <Simulation/>;
    }
    return (
      <React.Fragment>
        <NavigationBar
          tabLocation={location}
        />
        <div style={{
          "overflowY": "auto",
          "height": "calc(100% - 66px)"

        }}
        >
          {children}
          {comp}
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBarContainer);
