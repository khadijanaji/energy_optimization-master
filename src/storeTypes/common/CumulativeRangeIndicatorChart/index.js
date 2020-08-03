// @flow

import type {Map as MapType} from "immutable";
import {Map} from "immutable";
import moment from "moment";

export type RangeIndicatorType = {
    status: string,
    values: Array<number>,
    target: Array<number>,
    fromDate?: moment,
    toDate?: moment,
    error?: string
};

export type CumulativeRangeIndicatorChartDataType = {
    [category: string]: {
        [indicatorCode: string]: RangeIndicatorType
    }
};


export type CumulativeRangeIndicatorChartStoreType = MapType<string, MapType<string, RangeIndicatorType>>;

export type CumulativeRangeIndicatorChartStoreFactoryType = Function;

export const CumulativeRangeIndicatorChartStoreFactory: CumulativeRangeIndicatorChartStoreFactoryType =
  (): CumulativeRangeIndicatorChartStoreType => Map();

