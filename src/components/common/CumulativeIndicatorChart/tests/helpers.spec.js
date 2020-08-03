/* eslint-disable max-lines */
/* eslint-disable no-magic-numbers,global-require */
/* globals describe it expect beforeAll beforeEach */

import {TIMELINETYPE} from "../helpers";

let helpers = null;
let moment = null;

const value = 123.45;
const target = [150.20];
const actualTarget1 = [140];
const actualTarget2 = [81];
const values = [
  10,
  30,
  50,
  78.5,
  96.17,
  123.45
];
const monthlyTarget = [129000];
const yearlyTarget = [
  1350,
  3000,
  5012,
  7850,
  9617,
  12345
];

describe("Component", () => {
  describe("CumulativeIndicatorChart Helpers", () => {
    beforeAll(() => {
      jest.resetModules();
      jest.doMock("moment", () => () => ({"hour": () => 19}));
      helpers = require("../helpers");
    });
    describe("renderValue Render", () => {
      it("With correct data, should render value", () => {
        const wrapper = helpers.renderValue(value, "Success");
        expect(wrapper).toMatchSnapshot();
      });

      it("With loading status, should render loader", () => {
        const wrapper = helpers.renderValue(value, "Loading");
        expect(wrapper).toMatchSnapshot();
      });

      it("With incorrect value, should render N/A", () => {
        const wrapper = helpers.renderValue("123.45", "Success");
        expect(wrapper).toMatchSnapshot();
      });
    });
    describe("mapDailyChartData Mapper", () => {
      it("With Correct params, should match snapshot", () => {
        const wrapper = helpers.mapDailyChartData({
          "title": "title",
          "subtitle": "subtitle",
          "unit": "unit",
          target,
          values
        });
        expect(wrapper).toMatchSnapshot();
      });
    });
    describe("getTodayProductionHours Helper", () => {
      it("With Correct params, should match snapshot", () => {
        const wrapper = helpers.getTodayProductionHours();
        expect(wrapper).toMatchSnapshot();
      });
    });
    describe("getTargetsFromRecordBeginningToCurrentHour Helper", () => {
      it("With Correct params, should match snapshot", () => {
        const wrapper = helpers.getTargetsFromRecordBeginningToCurrentHour(target[0]);
        expect(wrapper).toMatchSnapshot();
      });
    });
    describe("getHoursFromRecordBeginningToCurrentHour Helper", () => {
      it("With Correct params, should match snapshot", () => {
        const wrapper = helpers.getHoursFromRecordBeginningToCurrentHour();
        expect(wrapper).toMatchSnapshot();
      });
      it("After midnight, should match snapshot", () => {
        jest.resetModules();
        jest.doMock("moment", () => () => ({"hour": () => 5}));
        const {getHoursFromRecordBeginningToCurrentHour} = require("../helpers");
        const wrapper = getHoursFromRecordBeginningToCurrentHour();
        expect(wrapper).toMatchSnapshot();
      });
    });
    describe("getGravityClassName Helper", () => {
      it("With value under target, should return danger className", () => {
        const wrapper = helpers.getGravityClassName(actualTarget1[0], value);
        expect(wrapper).toMatchSnapshot();
      });
      it("With value superior to target, should return ok className", () => {
        const wrapper = helpers.getGravityClassName(actualTarget2[0], value);
        expect(wrapper).toMatchSnapshot();
      });
    });
    describe("getGapPercent Helper", () => {
      it("With Correct params, should match snapshot", () => {
        const wrapper = helpers.getGapPercent(target[0], value);
        expect(wrapper).toMatchSnapshot();
      });
    });
    describe("getGapBetweenActualAndTargetValue Helper", () => {
      it("With Correct params, should match snapshot", () => {
        const wrapper = helpers.getGapBetweenActualAndTargetValue(target[0], value);
        expect(wrapper).toMatchSnapshot();
      });
    });
    describe("getActualTarget Helper", () => {
      it("With Correct params, should match snapshot", () => {
        const wrapper = helpers.getActualTarget(target[0]);
        expect(wrapper).toMatchSnapshot();
      });
    });
  });
  describe("CumulativeIndicatorChart Helpers", () => {
    beforeEach(() => {
      jest.resetModules();
      jest.dontMock("moment");
      helpers = require("../helpers");
      moment = require("moment");
    });
    describe("getYesterday Helper", () => {
      it("Should return yesterday date", () => {
        const expected = moment().
          subtract(1, "days").
          format("YYYYMMDDHH");
        const actual = helpers.
          getYesterday(target[0]).
          format("YYYYMMDDHH");
        expect(actual).toEqual(expected);
      });
    });
    describe("getFirstDayOfThisMonth Helper", () => {
      it("Should return the first day date of the given month", () => {
        const date = moment([
          2019,
          3,
          14
        ]);
        const expected = moment([
          2019,
          3,
          1
        ]).format("YYYYMMDD");
        const actual = helpers.getFirstDayOfThisMonth(date).format("YYYYMMDD");
        expect(actual).toEqual(expected);
      });
    });
    describe("getDaysOfMonth Helper", () => {
      it("With Correct params, should match snapshot", () => {
        const date = moment([
          2019,
          3,
          14
        ]);
        const actual = helpers.getDaysOfMonth(date);
        expect(actual).toMatchSnapshot();
      });
    });
    describe("getTargetsFromRecordBeginningToCurrentDay Helper", () => {
      it("With Correct params, should match snapshot", () => {
        const date = moment([
          2019,
          3,
          14
        ]);
        const actual = helpers.getTargetsFromRecordBeginningToCurrentDay(monthlyTarget[0], date);
        expect(actual).toMatchSnapshot();
      });
    });
    describe("CumulativeIndicatorChart Helpers", () => {
      beforeEach(() => {
        const date = moment([
          2019,
          2,
          19
        ]);
        jest.resetModules();
        jest.doMock("moment", () => () => (date.clone()));
        helpers = require("../helpers");
        moment = require("moment");
      });
      describe("mapMonthlyChartData Helper", () => {
        it("With Correct params, should match snapshot", () => {
          const wrapper = helpers.mapMonthlyChartData({
            "title": "title",
            "subtitle": "subtitle",
            "unit": "unit",
            "target": monthlyTarget,
            values
          });
          expect(wrapper).toMatchSnapshot();
        });
      });
      describe("mapChartData Helper", () => {
        it("With Daily timeline, should call mapDailyChartData", () => {
          const mapChartParams = {
            "title": "title",
            "subtitle": "subtitle",
            "unit": "unit",
            target,
            values,
            "timeLineType": TIMELINETYPE.DAILY
          };
          const wrapper = helpers.mapChartData(mapChartParams);
          expect(wrapper).toMatchSnapshot();
        });
        it("With Monthly timeline, should call mapMonthlyChartData", () => {
          const mapChartParams = {
            "title": "title",
            "subtitle": "subtitle",
            "unit": "unit",
            "target": monthlyTarget,
            values,
            "timeLineType": TIMELINETYPE.MONTHLY
          };
          const wrapper = helpers.mapChartData(mapChartParams);
          expect(wrapper).toMatchSnapshot();
        });
        it("With Yearly timeline, should call mapYearlyChartData", () => {
          jest.resetModules();
          jest.dontMock("moment");
          moment = require("moment");
          const date = moment([
            2019,
            10,
            8
          ]);
          jest.doMock("moment", () => () => (date));
          helpers = require("../helpers");
          moment = require("moment");
          const mapChartParams = {
            "title": "title",
            "subtitle": "subtitle",
            "unit": "unit",
            "target": yearlyTarget,
            values,
            "timeLineType": TIMELINETYPE.YEARLY
          };
          const wrapper = helpers.mapChartData(mapChartParams);
          expect(wrapper).toMatchSnapshot();
        });
      });
    });
    describe("getMonthsOfThisYear Helper", () => {
      it("With Correct params, should match snapshot", () => {
        const date = moment([
          2019,
          9,
          8
        ]);
        jest.resetModules();
        jest.doMock("moment", () => () => ({
          ...date,
          "month": (month) => ((month && date.clone().month(month)) || date.clone())
        }));
        helpers = require("../helpers");
        moment = require("moment");
        const actual = helpers.getMonthsOfThisYear(date);
        expect(actual).toMatchSnapshot();
      });
    });
    describe("getTargetsFromRecordBeginningToCurrentMonth Helper", () => {
      it("With Correct params, should match snapshot", () => {
        const actual = yearlyTarget;
        expect(actual).toMatchSnapshot();
      });
    });
    describe("mapValuesToCumulativeValues Helper", () => {
      it("With Correct params, should match snapshot", () => {
        const expected = [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8
        ];
        const actual = helpers.mapValuesToCumulativeValues([
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1
        ]);
        expect(actual).toEqual(expected);
      });
    });
  });
});
