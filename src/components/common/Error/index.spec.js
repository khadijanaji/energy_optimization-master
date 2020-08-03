/* globals describe it expect */

import {shallow} from "enzyme";
import React from "react";

import Error from "./";

describe("Component", () => {
  describe("Error Render", () => {
    it("Without Props: Should match snapshot", () => {
      const wrapper = shallow(<Error />);
      expect(wrapper).toMatchSnapshot();
    });
    it("With Props: Should match snapshot", () => {
      const wrapper = shallow(<Error text={"Props Erreur"} />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
