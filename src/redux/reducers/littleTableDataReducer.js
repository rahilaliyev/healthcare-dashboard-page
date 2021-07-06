import { LITTLE_TABLE_DATA } from "../actions/actionTypes";

const initialState = {
  data: [],
};

const littleTableDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case LITTLE_TABLE_DATA:
      return {
        ...state,
        data: action.data,
      };
    default:
      return state;
  }
};

export default littleTableDataReducer;
