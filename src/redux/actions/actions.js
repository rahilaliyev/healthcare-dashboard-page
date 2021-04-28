import { ALL_DATA, CHANGE_PAGE } from "./actionTypes";

export const addData = (data) => {
  return { type: ALL_DATA, data };
};

export const changePage = (data) => {
  return { type: CHANGE_PAGE, data };
};
