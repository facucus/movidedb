import * as constants from "../constants";

const initialState = {
  movie: null,
  loading: false,
  error: null,
};

function detailReducer(state = initialState, action) {
  switch (action.type) {
    case constants.FETCH_MOVIE_DETAIL:
      return {
        ...state,
        loading: true,
      };
    case constants.FETCH_MOVIE_DETAIL_SUCCESS:
      return {
        movie: action.payload,
        loading: false,
        error: null,
      };
    case constants.FETCH_MOVIE_DETAIL_ERROR:
      return {
        loading: false,
        movie: null,
        error: action.payload,
      };
    default:
      return state;
  }
}

export default detailReducer;
