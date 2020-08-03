import {shallow} from "enzyme";
import React from "react";

import Button from "../";

const props = {
  "input": {},
  "value": "Value",
  "meta": {
    "touched": true,
    "invalid": true,
    "error": true
  },
  "other1": "Other",
  "other2": {}
};

describe("Component", () => {
  describe("ReduxFormFields", () => {
    describe("Button Render", () => {
      it("Children contain passed props: Should match snapshot", () => {
        const wrapper = shallow(<Button {...props} />);
        expect(wrapper).toMatchSnapshot();
      });
    });
  });
});
