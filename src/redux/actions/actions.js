import {
  CHANGE_PAGE,
  CARD_DATA,
  BIG_CHART_DATA,
  LITTLE_CHART_DATA,
  TABLE_DATA,
  LITTLE_TABLE_DATA,
  CHANGE_DATA,
} from "./actionTypes";

export const cardData = (data) => {
  return { type: CARD_DATA, data };
};

export const changePage = (key) => {
  return { type: CHANGE_PAGE, key };
};

export const bigChartData = (data) => {
  return { type: BIG_CHART_DATA, data };
};

export const littleChartData = (data) => {
  return { type: LITTLE_CHART_DATA, data };
};

export const tableData = (data) => {
  return { type: TABLE_DATA, data };
};

export const littleTableData = (data) => {
  return { type: LITTLE_TABLE_DATA, data };
};

export const changeData = (data) => {
  return { type: CHANGE_DATA, data };
};
