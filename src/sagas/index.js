// @flow

import {fork} from "redux-saga/effects";
import LoginFormSagas from "./LoginForm";

/*
 *Import Dashboard from "./Dashboard";
 *import CumulativeRangeIndicatorChart from "./common/CumulativeRangeIndicatorChart";
 *import IndicatorsCategoryInit from "./indicatorsCategoryInit";
 *import IndicatorCategory from "./IndicatorCategory";
 *import IndicatorCategoryChart from "./IndicatorCategoryChart";
 *import NominatifTagIndicator from "./NominatifTag";
 */

import piwikSaga from "./piwik/piwik";


/**
 * Grouping all saga to one saga in order to add it to the middleware
 * @return {null} nothing
 */
export default function *(): Generator<any, void, any> {
  yield [
    fork(LoginFormSagas),
    fork(piwikSaga)

    /*
     *Fork(IndicatorsCategoryInit),
     *fork(IndicatorCategory),
     *fork(IndicatorCategoryChart),
     *fork(Dashboard),
     *fork(CumulativeRangeIndicatorChart),
     *fork(NominatifTagIndicator)
     */
  ];
}

