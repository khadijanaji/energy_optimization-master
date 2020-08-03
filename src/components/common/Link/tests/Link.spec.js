/* globals describe it expect*/

import React from "react";
import {shallow} from "enzyme";
import Link from "../Link";

const navigateToUrlOnClick = jest.fn();

describe("Component", () => {
  describe("Link", () => {
    it("With url: Should match snapshot", () => {
      const wrapper = shallow(<Link
        navigateToUrlOnClick={navigateToUrlOnClick}
        url={"url"}
      ><div /></Link>);
      expect(wrapper).toMatchSnapshot();
    });

    it("When clicked: Should call navigateToUrlOnClick", () => {
      const wrapper = shallow(<Link
        navigateToUrlOnClick={navigateToUrlOnClick}
        url={"url"}
      ><span /></Link>);
      wrapper.find("div").simulate("click");
      expect(navigateToUrlOnClick).toBeCalled();
    });
  });
});
