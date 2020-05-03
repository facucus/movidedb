import * as constants from "../constants";
import { getDiscoveryApi } from "../../utils/apiCall";

const fetchDiscovery = () => ({
  type: constants.FETCH_DISCOVERY,
});

const fetchDiscoverySuccess = (movies) => ({
  type: constants.FETCH_DISCOVERY_SUCCESS,
  payload: movies,
});

const fetchDiscoveryError = (error) => ({
  type: constants.FETCH_DISCOVERY_ERROR,
  payload: error,
});

export const getDiscovery = () => {
  return async (dispatch) => {
    dispatch(fetchDiscovery());

    const { data, error } = await getDiscoveryApi();
    if (error) {
      dispatch(fetchDiscoveryError(error));
      return error;
    }

    dispatch(fetchDiscoverySuccess(data.results));
    return data;
  };
};
