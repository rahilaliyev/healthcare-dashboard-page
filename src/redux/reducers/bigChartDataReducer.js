import { BIG_CHART_DATA } from "../actions/actionTypes";

const initialState = {
  data: [],
};

const bigChartDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case BIG_CHART_DATA:
      return {
        ...state,
        data: action.data,
      };
    default:
      return state;
  }
};

export default bigChartDataReducer;
