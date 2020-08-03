/* eslint-disable no-nested-ternary */
/* eslint-disable max-len,no-plusplus */
/* eslint-disable multiline-ternary */
/* eslint-disable no-magic-numbers,no-confusing-arrow,react/no-multi-comp */
// @flow

import * as React from "react";
import __ from "lodash";

import strings from "./strings";
import Highcharts from "../Highcharts";
import {
  getActualTarget,
  getActualTargetMonth,
  getGapBetweenActualAndTargetValue,
  getGapPercent,
  getGravityClassName,
  mapChartData,
  renderValue, TIMELINETYPE
} from "./helpers";

import "./style.scss";

export type CumulativeIndicatorChartPropsType = {
    title: string,
    subtitle: string,
    unit: string,
    target?: Array<number>,
    values: Array<number>,
    status: string,
    timeLineType: string,
    withoutTarget?: boolean,
    fromDate?: any,
    toDate?: any
}

class CumulativeIndicatorChart extends React.PureComponent<CumulativeIndicatorChartPropsType> {
  constructor (props: CumulativeIndicatorChartPropsType) {
    super(props);

    this.renderChart = this.renderChart.bind(this);
    this.renderTargetBloc = this.renderTargetBloc.bind(this);
    this.getCurrentValue = this.getCurrentValue.bind(this);
  }

    renderChart: Function;

    renderTargetBloc: Function;

    getCurrentValue: Function;

    renderChart () {
      const {title, subtitle, unit, target, values, status, timeLineType, fromDate, toDate} = this.props;
      const options = mapChartData({
        title,
        subtitle,
        unit,
        target,
        values,
        timeLineType,
        toDate,
        fromDate
      });
      const containerId = `HighChart-${__.random(10000000, 99999999)}`;
      return (<Highcharts
        container={containerId}
        options={options}
        status={status}
      />);
    }

    getLastNonNullValue () {
      const {values} = this.props;
      if (values && values.length) {
        let len = values.length;
        // eslint-disable-next-line curly
        while (len-- && !(values[len]));
        return values[len];
      }
      return null;
    }

    getCurrentValue () {
      const {values, timeLineType} = this.props;
      if (timeLineType === TIMELINETYPE.DAILY) {
        return this.getLastNonNullValue();
      }
      return values && values.reduce((currentValue, accumulator) => (currentValue + accumulator), 0);
    }

    renderTargetBloc () {
      const {unit, target, status, timeLineType} = this.props;
      const value = this.getCurrentValue();
      const actualTarget = timeLineType === "YEARLY" ? (target && target[target.length - 1]) : timeLineType === "MONTHLY" ? (target && getActualTargetMonth(target[0])) : (target && getActualTarget(target[0]));
      const gap = getGapBetweenActualAndTargetValue(parseFloat(actualTarget), value);
      const gapPercent = getGapPercent(parseFloat(actualTarget), value);
      const gravityClassName = getGravityClassName(parseFloat(actualTarget), value);
      return (<div className="cumulative-indicator-chart__root-container">
        <table
          border="1"
          className="cumulative-indicator-chart__container"
        >
          <tbody>
            <tr>
              <td className="cumulative-indicator-chart__container__value cumulative-indicator-chart__container__border-right">
                <div className="cumulative-indicator-chart__label">{`${strings.actual}:`}</div>
                <div className={gravityClassName}>{renderValue(value, status)} {parseFloat(renderValue(value, status)) ? unit : ""}</div>
              </td>
              <td
                className="cumulative-indicator-chart__container__value cumulative-indicator-chart__container__target"
              >
                <div className="cumulative-indicator-chart__label">{`${strings.currentTarget}:`}</div>
                <div className="cumulative-indicator-chart__container__value">{renderValue(actualTarget, status)} {parseFloat(renderValue(actualTarget, status)) ? unit : ""}</div>
              </td>
            </tr>
            <tr><td
              className="cumulative-indicator-chart__container__value cumulative-indicator-chart__container__border-top"
              colSpan="2"
            >
              <div className="cumulative-indicator-chart__label">{`${strings.gap}:`}</div>
              <div className="cumulative-indicator-chart__container__value">
                <span>{renderValue(gap, status)} {parseFloat(renderValue(gap, status)) ? unit : ""}</span>
                <span>{target && <span className={gravityClassName}>{" ("}{renderValue(gapPercent, status)}{" %)"}</span>}</span>
              </div>
            </td></tr>
          </tbody>
        </table>
      </div>);
    }

    render () {
      const {withoutTarget} = this.props;
      return (<div>
        {this.renderChart()}
        {(!withoutTarget) && this.renderTargetBloc()}
      </div>);
    }
}

export default CumulativeIndicatorChart;
