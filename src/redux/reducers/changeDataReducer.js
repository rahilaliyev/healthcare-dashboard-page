import { CHANGE_DATA } from "../actions/actionTypes";

const initialState = {
  data: [],
};

const changeDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_DATA:
      return {
        ...state,
        data: action.data,
      };
    default:
      return state;
  }
};

export default changeDataReducer;
