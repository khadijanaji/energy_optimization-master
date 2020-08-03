/* globals describe it expect */

import {shallow} from "enzyme";
import React from "react";

import Loader from "./";

describe("Component", () => {
  describe("Loader Render", () => {
    it("Should match snapshot", () => {
      const wrapper = shallow(<Loader />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
