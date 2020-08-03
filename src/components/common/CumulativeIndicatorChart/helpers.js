/* eslint-disable no-magic-numbers, react/no-multi-comp, max-len, max-lines */
// @flow


import moment from "moment";
import __, {isNumber, range, isNull} from "lodash";
import * as React from "react";

import strings from "./strings";
import loadingIcon from "../../../img/loading.svg";

export const recordBeginning = 7;
export const dayHours = 24;
export const precision = 3;

export const TIMELINETYPE = {
  "DAILY": "DAILY",
  "MONTHLY": "MONTHLY",
  "YEARLY": "YEARLY",
  "CUSTOM_MONTHLY": "CUSTOM_MONTHLY",
  "CUSTOM_YEARLY": "CUSTOM_YEARLY"
};

export const getYesterday = (): moment => moment().subtract(1, "days");

export const getMonthsOfThisYear = (date: moment): Array<string> => {
  const thisMonth = date.month() + 1;
  const tmp = date.clone();
  return range(0, thisMonth).map((ind) => (tmp.month(ind).format("MMM")));
};

export const getMonthsOfRange = (fromDate: moment, toDate: moment): Array<string> => {
  const fromMonth = fromDate.month() + 1;
  const toMonth = toDate.month() + 1;
  const tmp = fromDate.clone();
  return range(fromMonth, toMonth).map((index) => (tmp.month(index).format("MMM")));
};

export const getMonthsOfRanges = (fromDate: moment, toDate: moment): Array<string> => {
  const output = [];
  const dateCursor = fromDate.clone();
  while (dateCursor.isSameOrBefore(toDate)) {
    output.push(dateCursor.format("MMM"));
    dateCursor.add(1, "days");
  }
  return output;
};

export const getFirstDayOfThisMonth = (yesterday: moment): moment => (yesterday.
  clone().
  startOf("month"));

export const getDaysOfMonth = (dayOfMonth: moment): Array<string> => {
  const firstDay = getFirstDayOfThisMonth(dayOfMonth);
  const dayNumber = dayOfMonth.date();
  return range(0, dayNumber).map((ind) => (firstDay.
    clone().
    add(ind, "days").
    format("DD")));
};

export const getDaysOfMonthBetween = (fromDate: moment, toDate: moment): Array<string> => {
  const output = [];
  const dateCursor = fromDate.clone();
  while (dateCursor.isSameOrBefore(toDate)) {
    output.push(dateCursor.format("DD"));
    dateCursor.add(1, "days");
  }
  return output;
};

export const getDatesBetween = (fromDate: moment, toDate: moment): Array<string> => {
  const output = [];
  const dateCursor = fromDate.clone();
  while (dateCursor.isSameOrBefore(toDate)) {
    output.push(dateCursor.format("DD/MM"));
    dateCursor.add(1, "days");
  }
  return output;
};

export const getTargetsFromRecordBeginningToCurrentMonth = (yearlyTarget: number, currentMonth: number) => {
  const monthsInYear = 12;
  const monthlyTarget = yearlyTarget / monthsInYear;

  return __.range(1, currentMonth + 2).map((elem) => (Math.round(elem * monthlyTarget)));
};

export const getTargetsFromRecordBeginningToCurrentDay = (monthlyTarget: number, currentDayOfMonth: moment) => {
  const currentDay = currentDayOfMonth.date();
  const daysInmonth = currentDayOfMonth.daysInMonth();
  const dailyTarget = monthlyTarget / daysInmonth;

  return __.range(1, currentDay + 1).map((elem) => (Math.round(elem * dailyTarget)));
};

export const getTodayProductionHours = () => {
  const now = moment().hour();
  return (now >= recordBeginning)
    ? (now - recordBeginning + 1)
    : (dayHours - recordBeginning + now);
};

export const getHoursFromRecordBeginningToCurrentHour = () => {
  const now = moment().hour();
  if (now >= recordBeginning) {
    return __.
      range(recordBeginning, now + 1).
      map((elem) => `${elem} h`);
  }
  return __.
    range(recordBeginning, dayHours).
    concat(__.range(0, now + 1)).
    map((elem) => `${elem} h`);
};

export const getTargetsFromRecordBeginningToCurrentHour = (target: number) => {
  const productionHours = getTodayProductionHours();
  const hourlyTarget = target / dayHours;
  const targets = __.range(0, productionHours).map((elem) => (Math.round(elem * hourlyTarget)));
  targets[0] = 0;
  return targets;
};

export const getActualTargetMonth = (monthlyTarget: number) => {
  const currentDay = getYesterday().date();
  const daysInmonth = getYesterday().daysInMonth();
  if (monthlyTarget) {
    return (monthlyTarget / daysInmonth) * currentDay;
  }
  return (<span className="cumulative-indicator-chart__container__value__UNAVAILABLE">{"Donnée non disponible"}</span>);
};

export const getActualTarget = (target: number) => {
  const productionHours = getTodayProductionHours();
  if (target) {
    const ratio = (productionHours - 1) / dayHours;
    return target * ratio;
  }
  return (<span className="cumulative-indicator-chart__container__value__UNAVAILABLE">{"Donnée non disponible"}</span>);
};

export const getGapBetweenActualAndTargetValue = (target: number, value: number) => {
  if (target) {
    return value - target;
  }
  return (<span className="cumulative-indicator-chart__container__value__UNAVAILABLE">{"Donnée non disponible"}</span>);
};

export const getGapPercent =
    (target: number, value: number) => {
      if (target) {
        return (100.0 * parseFloat(getGapBetweenActualAndTargetValue(target, value)) / target);
      }
      return (<span className="cumulative-indicator-chart__container__value__UNAVAILABLE">
        {"Donnée non disponible"}
      </span>);
    };

type mapChartDataType = {
  title: string,
  subtitle: string,
  unit: string,
  target?: Array<number>,
  values: Array<number>,
  timeLineType: string,
  fromDate?: moment,
  toDate?: moment
};

export const formatValues = (values: Array<number>) => {
  if (values) {
    return values.map((value) => value && parseFloat(Math.round(value * 1000) / 1000));
  }
  return values;
};

export const formatYearlyValues = (values: Array<number>, names: Array<string>) => {
  if (values) {
    return values.map((value, index) => ({
      "name": names[index],
      "y": value && parseFloat(Math.round(value * 1000) / 1000)
    }));
  }
  return values;
};

export const mapValuesToCumulativeValues =
    (values: Array<number>): Array<number> => {
      let sum = 0;
      return values && values.map((value) => (sum += value));
    };

export const mapDailyChartData = ({title, subtitle, unit, target, values}: mapChartDataType) => {
  const categories = getHoursFromRecordBeginningToCurrentHour();
  const data = target && getTargetsFromRecordBeginningToCurrentHour(target[0]);
  const allValues = values && [].concat(0, ...values);
  return {
    "chart": {
      "type": "spline",
      "zoomType": "xy",
      "pinchType": "xy"
    },
    "title": {"text": title},
    "subtitle": {"text": subtitle},
    "xAxis": {categories},
    "yAxis": {"title": {"text": unit}},
    "plotOptions": {
      "line": {
        "dataLabels": {"enabled": true},
        "enableMouseTracking": false
      }
    },
    "tooltip": {
      "formatter" () {
        return `<span>${this.x.toString()}</span> : <b style="color:${this.color}">${this.y.toString()}</b>`;
      },
      "useHTML": true
    },
    "series": [
      {
        "name": strings.target,
        data,
        "dashStyle": "Dot",
        "color": "#A8FBA8"
      },
      {
        "name": strings.actuals,
        "data": formatValues(allValues)
      }
    ]
  };
};

export const mapMonthlyChartData = ({title, subtitle, unit, target, values}: mapChartDataType) => {
  const categories = getDaysOfMonth(getYesterday());
  const data = target && getTargetsFromRecordBeginningToCurrentDay(target[0], getYesterday());
  return {
    "chart": {
      "type": "spline",
      "zoomType": "xy",
      "pinchType": "xy"
    },
    "title": {"text": title},
    "subtitle": {"text": subtitle},
    "xAxis": {categories},
    "yAxis": {"title": {"text": unit}},
    "plotOptions": {
      "line": {
        "dataLabels": {"enabled": true},
        "enableMouseTracking": false
      }
    },
    "tooltip": {
      "formatter" () {
        return `<span>${this.x.toString()}</span> : <b style="color:${this.color}">${this.y.toString()}</b>`;
      },
      "useHTML": true
    },
    "series": [
      {
        "name": strings.target,
        data,
        "dashStyle": "Dot",
        "color": "#A8FBA8"
      },
      {
        "name": strings.actuals,
        "data": formatValues(mapValuesToCumulativeValues(values))
      }
    ]
  };
};

const replaceValuesWithNull = (values: Array<number>) => values.map((value) => {
  if (isNull(value)) {
    return 0;
  }
  return null;
});

const formatTooltipValue = (color: string, value: string) => {
  if (color === "red") {
    return "Valeur non disponible";
  }
  return value;
};

const rangeHistoricTooltip = (dates: Array<string>) => ({
  "formatter" () {
    return `<span>${dates[this.series.data.indexOf(this.point)]}</span> : <b style="color:${this.color}">${formatTooltipValue(this.color, this.y.toString())}</b>`;
  },
  "useHTML": true
});

export const mapMonthlyRangeChartData = ({title, subtitle, unit, values, fromDate, toDate, target}: mapChartDataType) => {
  const categories = getDaysOfMonthBetween(fromDate, toDate);
  const dates = getDatesBetween(fromDate, toDate);
  return {
    "chart": {
      "type": "spline",
      "zoomType": "xy",
      "pinchType": "xy"
    },
    "title": {"text": title},
    "subtitle": {"text": subtitle},
    "xAxis": {
      categories,
      "gridLineWidth": "1",
      "lineWidth": 1,
      "tickmarkPlacement": "on"
    },
    "yAxis": {"title": {"text": unit}},
    "plotOptions": {
      "line": {
        "dataLabels": {"enabled": true},
        "enableMouseTracking": false
      }
    },
    "tooltip": rangeHistoricTooltip(dates),
    "series": [
      {
        "name": "Valeurs non disponible",
        "data": replaceValuesWithNull(values),
        "color": "red"
      },
      {
        "name": strings.actuals,
        "data": formatValues(values)
      },
      {
        "name": strings.target,
        "data": target,
        "dashStyle": "ShortDash",
        "color": "#A8FBA8"
      }
    ]
  };
};

const positionOfUniqueMonths = (months: string[]) => {
  const result = [0];
  for (let index = 1; index < months.length; index += 1) {
    if (months[index] !== months[index - 1]) {
      result.push(index);
    }
  }
  return result;
};

export const mapYearlyRangeChartData = ({title, subtitle, unit, values, fromDate, toDate, target}: mapChartDataType) => {
  const categories = getMonthsOfRanges(fromDate, toDate);
  const dates = getDatesBetween(fromDate, toDate);
  return {
    "chart": {
      "type": "spline",
      "zoomType": "xy",
      "pinchType": "xy"
    },
    "title": {"text": title},
    "subtitle": {"text": subtitle},
    "xAxis": {
      categories,
      "tickPositions": positionOfUniqueMonths(categories),
      "gridLineWidth": "1",
      "lineWidth": 1,
      "tickmarkPlacement": "on",
      "isCustomYearly": true
    },
    "yAxis": {"title": {"text": unit}},
    "plotOptions": {
      "line": {
        "dataLabels": {"enabled": true},
        "enableMouseTracking": false
      }
    },
    "tooltip": rangeHistoricTooltip(dates),
    "series": [
      {
        "name": "Valeurs non disponible",
        "data": replaceValuesWithNull(values),
        "color": "red",
        "lineWidth": 0
      },
      {
        "name": strings.actuals,
        "data": formatYearlyValues(values, categories)
      },
      {
        "name": strings.target,
        "data": target,
        "dashStyle": "ShortDash",
        "color": "#A8FBA8"
      }
    ]
  };
};

export const mapYearlyChartData = ({title, subtitle, unit, target, values}: mapChartDataType) => {
  const categories = getMonthsOfThisYear(getYesterday());
  return {
    "chart": {
      "type": "column",
      "zoomType": "xy",
      "pinchType": "xy"
    },
    "title": {"text": title},
    "subtitle": {"text": subtitle},
    "xAxis": {categories},
    "yAxis": {"title": {"text": unit}},
    "plotOptions": {
      "line": {
        "dataLabels": {"enabled": true},
        "enableMouseTracking": false
      }
    },
    "tooltip": {
      "formatter" () {
        return `<span>${this.x.toString()}</span> : <b style="color:${this.color}">${this.y.toString()}</b>`;
      },
      "useHTML": true
    },
    "series": [
      {
        "name": strings.target,
        "data": target,
        "dashStyle": "Dot",
        "color": "#A8FBA8"
      },
      {
        "name": strings.actuals,
        "data": formatValues(values)
      }
    ]
  };
};

export const mapChartData = (mapchartDataParams: mapChartDataType) => {
  switch (mapchartDataParams.timeLineType) {
  case TIMELINETYPE.MONTHLY:
    return mapMonthlyChartData(mapchartDataParams);
  case TIMELINETYPE.YEARLY:
    return mapYearlyChartData(mapchartDataParams);
  case TIMELINETYPE.CUSTOM_MONTHLY:
    return mapMonthlyRangeChartData(mapchartDataParams);
  case TIMELINETYPE.CUSTOM_YEARLY:
    return mapYearlyRangeChartData(mapchartDataParams);
  case TIMELINETYPE.DAILY:
  default:
    return mapDailyChartData(mapchartDataParams);
  }
};

export const renderValue = (value: any, status: string) => {
  if (status === "Loading") {
    return (
      <img
        alt={"chargement"}
        className="category-indicator-item__loading"
        src={loadingIcon}
      />
    );
  }
  if (isNumber(value)) {
    return (parseFloat(value).toFixed(precision));
  }
  return (<span className="cumulative-indicator-chart__container__value__UNAVAILABLE">{"Donnée non disponible"}</span>);
};

export const getGravityClassName = (actualTarget: number, value: number) => (value && ((value >= actualTarget)
  ? "cumulative-indicator-chart__container__value__OK"
  : "cumulative-indicator-chart__container__value__DANGER"));
