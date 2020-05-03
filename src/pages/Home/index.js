import React, { useState } from "react";
import { useSelector, shallowEqual } from "react-redux";
import inRange from "lodash/inRange";

import Search from "components/Search";
import MovieList from "components/MovieList";
import Loading from "components/Loading";
import ErrorMessage from "components/ErrorMessage";

import { getDiscovery } from "store/actions/discovery";
import useFetching from "hooks/useFetching";
import { ratings } from "utils/ratings";

function Home() {
  const [searchInput, setSearchInput] = useState("");
  const { discovery, search, filter } = useSelector(
    (state) => ({
      discovery: state.discovery,
      search: state.search,
      filter: state.filter,
    }),
    shallowEqual
  );

  const hasDiscoveryMovies = Boolean(discovery.movies.length);
  useFetching(getDiscovery, null, !hasDiscoveryMovies);

  let movies =
    search.movies.length || searchInput ? search.movies : discovery.movies;

  if (!filter.showAll) {
    const rating = ratings[filter.rating];
    movies = movies.filter((m) =>
      inRange(m.vote_average, rating[0], rating[1])
    );
  }

  const isLoading = discovery.loading || search.loading || search.isTyping;
  const errorMsg = search.error ? search.error : discovery.error;

  return (
    <div>
      <Search
        isTyping={searchInput.isTyping}
        searchInput={searchInput}
        onChange={setSearchInput}
      />
      {isLoading && <Loading />}
      {errorMsg && <ErrorMessage error={errorMsg} />}
      {!isLoading && !errorMsg && <MovieList movies={movies} />}
    </div>
  );
}

export default React.memo(Home);
