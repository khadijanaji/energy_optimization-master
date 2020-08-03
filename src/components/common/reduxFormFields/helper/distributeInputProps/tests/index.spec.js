import {shallow} from "enzyme";
import React from "react";

import distributeInputProps from "../";

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
  describe("distributeInputProps Render", () => {
    it("Children contain passed props: Should match snapshot", () => {
      const component = distributeInputProps(<input />);
      const wrapper = shallow(<component {...props} />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
