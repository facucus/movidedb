import * as constants from "../constants";
import { getMovieDetailsApi } from "../../utils/apiCall";
import { getMovieFromStore } from "../../utils/getMovieFromStore";

const fetchMovieDetail = () => ({
  type: constants.FETCH_MOVIE_DETAIL,
});

const fetchMovieDetailSuccess = (movie) => ({
  type: constants.FETCH_MOVIE_DETAIL_SUCCESS,
  payload: movie,
});

const fetchMovieDetailError = (error) => ({
  type: constants.FETCH_MOVIE_DETAIL_ERROR,
  payload: error,
});

export const getMovieDetail = (id) => {
  return async (dispatch) => {
    dispatch(fetchMovieDetail());
    const movie = getMovieFromStore(id);

    //prevent unnecesary api call
    if (movie) {
      return dispatch(fetchMovieDetailSuccess(movie));
    }

    const { data, error } = await getMovieDetailsApi(id);

    if (error) {
      dispatch(fetchMovieDetailError(error));
      return error;
    }

    dispatch(fetchMovieDetailSuccess(data));
    return data;
  };
};
