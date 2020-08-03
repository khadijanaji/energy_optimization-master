/* eslint-disable no-magic-numbers */
/* globals describe it expect */

import {shallow} from "enzyme";
import React from "react";
import moment from "moment";

import {TIMELINETYPE} from "../helpers";

jest.mock("lodash", () => ({
  "random": () => 12345678,
  "range": () => [
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19
  ],
  "isNumber": () => true
}));

const props = {
  "title": "title",
  "subtitle": "subtitle",
  "unit": "unit",
  "target": [223.45],
  "values": [
    10.2,
    25,
    48,
    68.84,
    98,
    99.48,
    120,
    140.2,
    180.1,
    194.02,
    200.34,
    200.14,
    208.45
  ],
  "status": "Success",
  "timeLineType": TIMELINETYPE.DAILY

};

jest.resetModules();
jest.doMock("moment", () => () => (moment("20190419 15")));
const CumulativeIndicatorChart = require("../");

describe("Component", () => {
  describe("CumulativeIndicatorChart Render", () => {
    it("With daily time line, should match snapshot", () => {
      const wrapper = shallow(<CumulativeIndicatorChart.default
        {...props}
      />);
      expect(wrapper).toMatchSnapshot();
    });
    it("With daily time line and null values, should match snapshot", () => {
      const wrapper = shallow(<CumulativeIndicatorChart.default
        {...{
          ...props,
          "values": null
        }}
      />);
      expect(wrapper).toMatchSnapshot();
    });
    it("With monthly time line, should match snapshot", () => {
      const wrapper = shallow(<CumulativeIndicatorChart.default
        {...{
          ...props,
          "timeLineType": TIMELINETYPE.MONTHLY
        }}
      />);
      expect(wrapper).toMatchSnapshot();
    });
    it("With yearly time line, should match snapshot", () => {
      const wrapper = shallow(<CumulativeIndicatorChart.default
        {...{
          ...props,
          "timeLineType": TIMELINETYPE.YEARLY
        }}
      />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
