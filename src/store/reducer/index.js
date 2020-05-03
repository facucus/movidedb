import { combineReducers } from "redux";
import discoveryReducer from "./discovery";
import detailReducer from "./detail";
import searchReducer from "./search";
import filterReducer from "./filter";

export default combineReducers({
  discovery: discoveryReducer,
  detail: detailReducer,
  search: searchReducer,
  filter: filterReducer,
});
