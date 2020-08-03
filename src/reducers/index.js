import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";
import {reducer as formReducer} from "redux-form";
import LoginFormReducer from "./LoginForm";

/*
 * Import IndicatorsCategory from "./IndicatorsCategory";
 * import DashboardReducer from "./Dashboard";
 * import CumulativeRangeIndicatorChartReducer from "./common/CumulativeRangeIndicatorChart";
 * import NominatifIndicatorReducer from "./NominatifTag";
 */
const combinedReducers = combineReducers({
  "routing": routerReducer,
  "form": formReducer,
  "login": LoginFormReducer

  /*
   *"indicatorsCategory": IndicatorsCategory,
   *"DashboardIndicators": DashboardReducer,
   *"rangeHistory": CumulativeRangeIndicatorChartReducer,
   *"nominatifIndicator": NominatifIndicatorReducer
   */
});

export default combinedReducers;
