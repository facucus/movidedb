import React from "react";
import { useSelector, shallowEqual } from "react-redux";
import { useParams, Link } from "react-router-dom";
import map from "lodash/map";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import Loading from "components/Loading";
import Image from "components/Image";
import ErrorMessage from "components/ErrorMessage";
import Tag from "components/Tag";

import { getMovieDetail } from "store/actions/detail";
import useFetching from "hooks/useFetching";
import { getImageSrc } from "utils/apiCall";
import formatMovie from "utils/formatMovie";

const Container = styled.div`
  padding: 40px;
  .content {
    margin: 20px;
    padding: 20px 40px;
    background-color: ${(props) => props.theme.offWhite};
    max-width: ${(props) => props.theme.maxWidth};
    margin: 0 auto;
    color: ${(props) => props.theme.black};
  }

  p {
    margin: 0;
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .title {
    font-size: 24px;
    font-weight: bold;
    span {
      color: ${(props) => props.theme.green};
    }
  }

  .rating {
    font-weight: bold;
    font-size: 20px;
    line-height: 18px;
    svg {
      color: ${(props) => props.theme.green};
      margin-right: 5px;
    }
  }

  .votes {
    color: ${(props) => props.theme.grey};
    text-align: center;
  }

  .main {
    display: flex;
  }

  .left {
    margin-right: 30px;
    flex: 2;
  }

  .right {
    flex: 3;
  }

  .tags {
    display: flex;
  }

  .link {
    display: block;
    text-align: center;
    color: ${(props) => props.theme.offWhite};
    margin: 20px 0;
  }

  @media screen and (max-width: 768px) {
    padding: 40px 0px;
    .header {
      flex-direction: column;
      align-items: flex-start;
    }

    .title {
      font-size: 20px;
    }

    .rating {
      display: inline-block;
      font-size: 16px;
      margin-right: 5px;
    }

    .votes {
      display: inline-block;
      font-size: 14px;
    }

    .main {
      flex-direction: column;
    }

    .left {
      margin-right: 0;
    }
  }
`;

function Movie() {
  const { id } = useParams();
  const { detail } = useSelector(
    (state) => ({
      detail: state.detail,
    }),
    shallowEqual
  );
  useFetching(getMovieDetail, id);

  if (detail.loading) return <Loading />;
  if (detail.error) return <ErrorMessage error={detail.error} />;
  if (!detail.movie) return null;

  const {
    genres,
    overview,
    poster_path,
    title,
    vote_average,
    vote_count,
    year,
  } = formatMovie(detail.movie);
  return (
    <Container>
      <div className="content">
        <div className="header">
          <div className="title">
            {title} <span>({year})</span>
          </div>
          <div>
            <p className="rating">
              <FontAwesomeIcon icon={faStar} />
              {vote_average}/10
            </p>
            <p className="votes">(Votes: {vote_count})</p>
          </div>
        </div>

        <div className="main">
          <div className="left">
            <Image
              src={getImageSrc(poster_path, 500)}
              alt={`Poster for ${title}`}
            />
          </div>

          <div className="right">
            <div className="tags">
              {map(genres, ({ id, name }) => (
                <Tag key={id} tag={name} />
              ))}
            </div>
            <div>
              <h4>Overview</h4>
              <p>{overview}</p>
            </div>
          </div>
        </div>
      </div>
      <Link to="/" className="link">
        Go back to Home
      </Link>
    </Container>
  );
}

export default Movie;
