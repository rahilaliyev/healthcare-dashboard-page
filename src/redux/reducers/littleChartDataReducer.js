import { LITTLE_CHART_DATA } from "../actions/actionTypes";

const initialState = {
  data: [],
};

const littleChartDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case LITTLE_CHART_DATA:
      return {
        ...state,
        data: action.data,
      };
    default:
      return state;
  }
};

export default littleChartDataReducer;
