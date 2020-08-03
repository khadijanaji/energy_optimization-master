/* eslint-disable array-element-newline */
/* globals describe it expect */

import {shallow, mount} from "enzyme";
import React from "react";
import sinon from "sinon";
import Authorization from "../";

let props = {};
let redirectSpyFunction = () => ({});
const userRoles = ["SAP", "DAP"];
const userFactory = "JFC2";

describe("Component", () => {
  describe("Authorization Render", () => {
    beforeAll(() => {
      redirectSpyFunction = sinon.spy();
      props = {
        "redirectTo": redirectSpyFunction,
        "isUserConnected": true,
        "children": (<div>{"Some Page"}</div>),
        "user": {
          "email": "mail@mail.ma",
          "name": "random user",
          "roles": userRoles,
          "factories": [userFactory]
        },
        "params": {
          "entity": "JFC2",
          "domain": "SAP"
        }
      };
    });
    it("Should render children", () => {
      const wrapper = shallow(<Authorization {...props} />);
      expect(wrapper).toMatchSnapshot();
    });

    it("Updating isUserConnected to false should redirect to login", () => {
      props.isUserConnected = false;
      mount(<Authorization {...props} />);
      expect(redirectSpyFunction.calledWith("/login")).toEqual(true);
    });

    it("Updating domain to value in user roles should not redirect", () => {
      const component = mount(<Authorization {...props} />);
      component.setProps({
        "params": {
          "domain": userRoles[1],
          "entity": userFactory
        }
      });
      expect(redirectSpyFunction.calledWith("/")).toEqual(false);
    });

    it("Should not trigger auth check if params unchanged", () => {
      const component = mount(<Authorization {...props} />);
      component.setProps({
        "params": {
          "domain": userRoles[0],
          "entity": userFactory
        }
      });
      expect(redirectSpyFunction.calledWith("/")).toEqual(false);
    });

    it("Updating domain to value NOT in user roles should redirect", () => {
      const ownProps = {
        "redirectTo": sinon.spy(),
        "isUserConnected": true,
        "children": (<div>{"Some Page"}</div>),
        "user": {
          "email": "mail@mail.ma",
          "name": "random user",
          "roles": userRoles,
          "factories": [userFactory]
        },
        "params": {
          "entity": "JFC2",
          "domain": "SAP"
        }
      };
      const component = mount(<Authorization {...ownProps} />);
      component.setProps({
        "params": {
          "domain": "RandomValue",
          "entity": "RandomValue"
        }
      });
      expect(ownProps.redirectTo.calledWith("/")).toEqual(true);
    });
    it("User has access to Home Screen", () => {
      const component = mount(<Authorization {...props} />);
      component.setProps({
        "params": {
          "domain": undefined,
          "entity": undefined
        }
      });
      expect(redirectSpyFunction.calledWith("/")).toEqual(false);
    });
  });
});
