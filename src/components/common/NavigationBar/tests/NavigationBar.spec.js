/* globals describe it expect */

import React from "react";
import {shallow} from "enzyme";

import NavigationBar from "../../NavigationBar";

describe("<NavigationBar />", () => {
  it("should display the Navigation bar", () => {
    const wrapper = shallow(<NavigationBar />);

    expect(wrapper).toMatchSnapshot();
  });
});
