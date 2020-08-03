// @flow

import * as React from "react";
import * as highcharts from "highcharts";
import DarkUnicaTheme from "./themes/DarkUnica";

import "./style.scss";

export type HighChartsPropsType = {
    container: string,
    options: any,
    modules?: any,
    domProps?: any,
    theme?: string,
    status: string
}

const updateChartOptions = (currentChart: any, newChartOptions: any) => {
  const [xAxis] = currentChart.axes;
  xAxis.update({"categories": newChartOptions.xAxis.categories});
  currentChart.update({"tooltip": newChartOptions.tooltip});
  if (newChartOptions.xAxis.isCustomYearly) {
    xAxis.update({"tickPositions": newChartOptions.xAxis.tickPositions});
  } else {
    xAxis.update({"tickPositions": undefined});
  }
  xAxis.isDirty = true;
};

class Highcharts extends React.PureComponent<HighChartsPropsType> {
  componentDidMount () {
    const {container, modules, options, theme, status} = this.props;
    if (modules) {
      modules.forEach((module) => {
        module(Highcharts);
      });
    }
    highcharts.setOptions(theme || DarkUnicaTheme);
    const newOptions = {
      ...options,
      "loading": {
        "hideDuration": 1000,
        "showDuration": 1000,
        "style": {"backgroundColor": "#263237"}
      },
      "credits": {"enabled": false},
      "yAxis": {
        "labels": {"format": "{value}"},
        "title": ""
      }
    };
    this.chart = new highcharts.chart(
      container,
      newOptions
    );
    if (status === "Loading") {
      this.chart.showLoading();
    }
  }

  componentWillReceiveProps ({status, options}: HighChartsPropsType) {
    if (status === "Loading") {
      this.chart.showLoading();
    } else {
      const {series = []} = options;
      series.forEach(({data}, ind) => {
        this.chart.series[ind].setData(data);
      });
      this.chart.hideLoading();
      updateChartOptions(this.chart, options);
      this.chart.redraw();
    }
  }

  componentWillUnmount () {
    this.chart.destroy();
  }

  chart: any

  render () {
    const {container, domProps} = this.props;
    return (<div
      id={container}
      {...domProps}
    />);
  }
}
export default Highcharts;
