import { CHANGE_PAGE } from "../actions/actionTypes";

const initialState = {
  key: 0,
};

const changePageReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PAGE:
      return {
        ...state,
        key: action.key,
      };
    default:
      return state;
  }
};

export default changePageReducer;
