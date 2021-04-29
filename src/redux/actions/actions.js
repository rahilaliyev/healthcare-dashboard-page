import { ALL_DATA, CHANGE_PAGE } from "./actionTypes";

export const addData = (data) => {
  return { type: ALL_DATA, data };
};

export const changePage = (key) => {
  return { type: CHANGE_PAGE, key };
};
