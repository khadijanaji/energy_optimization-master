import {shallow} from "enzyme";
import React from "react";

import TextField from "../";

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
    describe("TextField Render", () => {
      it("Children contain passed props: Should match snapshot", () => {
        const wrapper = shallow(<TextField {...props} />);
        expect(wrapper).toMatchSnapshot();
      });
    });
  });
});
