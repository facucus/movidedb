import * as constants from "../constants";
import { getSearchApi } from "../../utils/apiCall";

const fetchSearch = () => ({
  type: constants.FETCH_SEARCH,
});

const fetchSearchSuccess = (movies) => ({
  type: constants.FETCH_SEARCH_SUCCESS,
  payload: movies,
});

const fetchSearchError = (error) => ({
  type: constants.FETCH_SEARCH_ERROR,
  payload: error,
});

export const resetSearch = () => ({
  type: constants.RESET_SEARCH,
});

export const changeIsTyping = (isTyping) => ({
  type: constants.CHANGE_IS_TYPING,
  payload: isTyping,
});

export const getSearch = (query) => {
  return async (dispatch) => {
    dispatch(fetchSearch());

    const { data, error } = await getSearchApi(query);
    if (error) {
      dispatch(fetchSearchError(error));
      return error;
    }

    dispatch(fetchSearchSuccess(data.results));
    return data;
  };
};
