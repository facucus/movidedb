import * as constants from "../constants";
const initialState = {
  showAll: true,
  rating: 2
};

function filterReducer(state = initialState, action) {
  switch (action.type) {
    case constants.SHOW_ALL_RATINGS:
      return {
        ...state,
        showAll: !state.showAll,
      };
    case constants.CHANGE_FILTER:
      return {
        ...state,
        rating: action.payload,
      };
    default:
      return state;
  }
}

export default filterReducer;
