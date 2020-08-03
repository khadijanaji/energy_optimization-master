/* globals describe it expect */

import {shallow} from "enzyme";
import React from "react";
import FactorySelect from "..";


describe("Component", () => {
  describe("FactoyList Render", () => {
    it("Without props: Should match snapshot", () => {
      const shallowRender = shallow(<FactorySelect />);
      expect(shallowRender).toMatchSnapshot();
    });

    it("With props: Should match snapshot", () => {
      const factories = [
        "JFC2",
        "JFC3",
        "JFC4"
      ];
      const shallowRender = shallow(<FactorySelect factories={factories} />);
      expect(shallowRender).toMatchSnapshot();
    });
  });
});
