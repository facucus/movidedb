import * as constants from "../constants";

const initialState = {
  movies: [],
  loading: false,
  error: null,
  isTyping: false,
};

function searchReducer(state = initialState, action) {
  switch (action.type) {
    case constants.RESET_SEARCH:
      return initialState;
    case constants.FETCH_SEARCH:
      return {
        ...state,
        loading: true,
      };
    case constants.FETCH_SEARCH_SUCCESS:
      return {
        movies: action.payload,
        loading: false,
        error: null,
      };
    case constants.FETCH_SEARCH_ERROR:
      return {
        movies: [],
        loading: false,
        error: action.payload,
      };
    case constants.CHANGE_IS_TYPING:
      return {
        ...state,
        isTyping: action.payload,
      };
    default:
      return state;
  }
}

export default searchReducer;
