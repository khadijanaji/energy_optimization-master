/* globals describe it expect */

import {shallow} from "enzyme";
import React from "react";
import {setOptions, chart} from "highcharts";

import Highcharts from "../";

const container = "container-id";
const options = {
  "series": [
    {"data": [1]},
    {"data": [1]}
  ],
  "xAxis": [{"categories": []}],
  "axes": []
};
const newOptions = {
  "series": [
    {
      "data": [
        1,
        1
      ]
    },
    {
      "data": [
        1,
        1
      ]
    }
  ],
  "xAxis": [
    {
      "categories": [],
      "options": {"tickInterval": 5}
    }
  ]
};
const domProps = {"className": "testClassName"};
const modules = [(element) => element];
const theme = {};

jest.mock("highcharts", () => ({
  "setOptions": jest.fn(),
  "chart": jest.fn(() => ({
    "showLoading": jest.fn(),
    "hideLoading": jest.fn(),
    "series": [
      {"setData": jest.fn()},
      {"setData": jest.fn()}
    ],
    "xAxis": [
      {
        "categories": [],
        "options": {"tickInterval": 5}
      }
    ],
    "update": jest.fn(),
    "axes": [{"update": jest.fn()}],
    "redraw": jest.fn()
  }))
}));

jest.mock("../themes/DarkUnica", () => ({}));

describe("Component", () => {
  describe("Highcharts Render", () => {
    it("With all props should render correctly", () => {
      const wrapper = shallow(<Highcharts
        container={container}
        domProps={domProps}
        modules={modules}
        options={options}
        theme={theme}
      />);
      expect(wrapper).toMatchSnapshot();
    });

    it("Verify that highcharts functions are called", () => {
      const wrapper = shallow(<Highcharts
        container={container}
        domProps={domProps}
        modules={modules}
        options={options}
        theme={theme}
      />);

      const destroy = jest.fn();
      wrapper.instance().chart = {destroy};
      wrapper.instance().componentWillUnmount();

      expect(setOptions).toHaveBeenCalled();
      expect(setOptions.mock.calls[0]).toEqual([theme]);
      expect(chart).toHaveBeenCalled();
      expect(chart.mock.calls[0]).toMatchSnapshot();

      expect(destroy).toHaveBeenCalled();
      expect(destroy.mock.calls[0]).toEqual([]);
    });
    it("With Loading status, Should call showLoading", () => {
      const wrapper = shallow(<Highcharts
        container={container}
        domProps={domProps}
        modules={modules}
        options={options}
        status={"Loading"}
        theme={theme}
      />);

      const {showLoading} = wrapper.instance().chart;

      expect(showLoading).toHaveBeenCalled();
      expect(showLoading.mock.calls[0]).toEqual([]);
    });
    it("When props changed and status is Success: Should update data", () => {
      const wrapper = shallow(<Highcharts
        container={container}
        domProps={domProps}
        modules={modules}
        options={options}
        status={"Loading"}
        theme={theme}
      />);


      const {hideLoading, series} = wrapper.instance().chart;

      wrapper.instance().componentWillReceiveProps({
        "status": "Success",
        "options": newOptions
      });

      expect(hideLoading).toHaveBeenCalled();
      expect(hideLoading.mock.calls[0]).toEqual([]);

      expect(series[0].setData).toHaveBeenCalled();
      expect(series[0].setData.mock.calls[0]).toEqual([newOptions.series[0].data]);

      expect(series[1].setData).toHaveBeenCalled();
      expect(series[1].setData.mock.calls[0]).toEqual([newOptions.series[1].data]);
    });
    it("When props changed and status still Loading: Should show loading", () => {
      const wrapper = shallow(<Highcharts
        container={container}
        domProps={domProps}
        modules={modules}
        options={options}
        status={"Loading"}
        theme={theme}
      />);


      const {showLoading} = wrapper.instance().chart;

      wrapper.instance().componentWillReceiveProps({
        "status": "Loading",
        "options": {}
      });

      expect(showLoading).toHaveBeenCalled();
      expect(showLoading.mock.calls[0]).toEqual([]);
    });
  });
});
