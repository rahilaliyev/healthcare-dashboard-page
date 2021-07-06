import { combineReducers } from "redux";
import changePageReducer from "./changePageReducer";
import cardDataReducer from "./cardDataReducer";
import bigChartDataReducer from "./bigChartDataReducer";
import littleChartDataReducer from "./littleChartDataReducer";
import tableDataReducer from "./tableDataReducer";
import littleTableDataReducer from "./littleTableDataReducer";

export default combineReducers({
  changePageReducer,
  cardDataReducer,
  bigChartDataReducer,
  littleChartDataReducer,
  tableDataReducer,
  littleTableDataReducer,

});
