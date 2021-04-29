import { combineReducers } from "redux";
import allDataReducer from "./allDataReducer";
import changePageReducer from "./changePageReducer";

export default combineReducers({
  data: allDataReducer,
  changePageReducer
});
