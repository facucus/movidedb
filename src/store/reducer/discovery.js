import * as constants from "../constants";
const initialState = {
  movies: [],
  loading: false,
  error: null,
};

function discoveryReducer(state = initialState, action) {
  switch (action.type) {
    case constants.FETCH_DISCOVERY:
      return {
        ...state,
        loading: true,
      };
    case constants.FETCH_DISCOVERY_SUCCESS:
      return {
        movies: action.payload,
        loading: false,
        error: null,
      };

    case constants.FETCH_DISCOVERY_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}

export default discoveryReducer;
