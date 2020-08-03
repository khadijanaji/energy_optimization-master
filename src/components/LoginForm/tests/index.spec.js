/* globals describe it expect */

import {shallow} from "enzyme";
import React from "react";

import LoginForm from "..";

const propsWithError = {
  "onSubmit": () => ({}),
  "error": "Erreur",
  "isPristine": true,
  "isInvalid": true
};
const propsWithoutError = {
  "onSubmit": () => ({}),
  "error": null,
  "isPristine": false,
  "isInvalid": false
};

describe("Component", () => {
  describe("LoginForm Render", () => {
    it("With error Props: Should match snapshot", () => {
      const wrapper = shallow(<LoginForm {...propsWithError} />);
      expect(wrapper).toMatchSnapshot();
    });
    it("Without error Props: Should match snapshot", () => {
      const wrapper = shallow(<LoginForm {...propsWithoutError} />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
