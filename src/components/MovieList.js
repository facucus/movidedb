import React from "react";
import { Link } from "react-router-dom";
import map from "lodash/map";
import styled from "styled-components";

import Image from "components/Image";
import ErrorMessage from "components/ErrorMessage";

import { getImageSrc } from "utils/apiCall";

const ItemsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-gap: 16px;
  padding: 0 90px;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
    padding: 0 20px;
  }
`;

const Item = styled.li`
  position: relative;
  text-align: center;
  min-height: 430px;
  max-height: 430px;

  @media screen and (max-width: 768px) {
    min-height: 540px;
    max-height: 540px;
  }
`;

function MovieList({ movies }) {
  if (!movies.length) {
    return (
      <ErrorMessage
        error="Sorry, We couldn't find any movies!"
        showSecondLine={false}
      />
    );
  }
  return (
    <ItemsList>
      {map(movies, (movie) => (
        <Item key={movie.id}>
          <Link to={`/movie/${movie.id}`}>
            <Image
              src={
                movie.poster_path ? getImageSrc(movie.poster_path, 342) : null
              }
              alt={`Poster for ${movie.title}`}
              title={movie.title}
              animate
            />
          </Link>
        </Item>
      ))}
    </ItemsList>
  );
}

export default MovieList;
