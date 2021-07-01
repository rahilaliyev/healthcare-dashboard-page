import { TABLE_DATA } from "../actions/actionTypes";

const initialState = {
  data: [],
};

const tableDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case TABLE_DATA:
      return {
        ...state,
        data: action.data,
      };
    default:
      return state;
  }
};

export default tableDataReducer;
