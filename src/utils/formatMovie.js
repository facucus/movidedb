function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function formatMovie(movie) {
  return {
    backdrop_path: movie.backdrop_path,
    genres: movie.genres,
    overview: movie.overview,
    poster_path: movie.poster_path,
    rating: movie.rating,
    title: movie.title,
    vote_average: movie.vote_average,
    vote_count: numberWithCommas(movie.vote_count),
    year: movie.release_date.split("-")[0],
  };
}

export default formatMovie;
