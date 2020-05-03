import find from "lodash/find";
import concat from "lodash/concat";

import store from "../store";

export const getMovieFromStore = (id) => {
  const { discovery, search } = store.getState();
  const movies = concat(discovery.movies, search.movies, []);

  return find(movies, { id: Number(id) });
};
