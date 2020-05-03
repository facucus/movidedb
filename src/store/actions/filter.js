import * as constants from "../constants";

export const showAllRankings = () => ({
  type: constants.SHOW_ALL_RATINGS,
});

export const changeFilter = (filter) => ({
  type: constants.CHANGE_FILTER,
  payload: filter,
});
