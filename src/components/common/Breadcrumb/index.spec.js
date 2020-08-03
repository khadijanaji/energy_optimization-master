/* globals describe it expect */

import {shallow} from "enzyme";
import React from "react";

import Breadcrumb from "./";

describe("Component", () => {
  describe("Breadcrumb Render", () => {
    it("Without Props: Should match snapshot", () => {
      const wrapper = shallow(<Breadcrumb />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
