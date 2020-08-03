/* globals describe it expect */

import React from "react";
import {shallow} from "enzyme";

import Footer from "../../Footer";

describe("<Footer />", () => {
  it("should display the Footer", () => {
    const wrapper = shallow(<Footer />);

    expect(wrapper).toMatchSnapshot();
  });
});
