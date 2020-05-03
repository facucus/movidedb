import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import debounce from "lodash/debounce";
import styled from "styled-components";

import Filters from "components/Filters";
import SearchInput from "components/SearchInput";

import { getSearch, resetSearch, changeIsTyping } from "store/actions/search";
import bgImage from "assets/bttf.jpg";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  min-height: 350px;

  .bg-image {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    opacity: 0.3;
    background-position: center;
    background-size: cover;
    background-image: url(${bgImage});
  }

  .panel {
    position: relative;
    text-align: center;
    z-index: 2;
  }

  h1 {
    margin: 0;
    font-size: 40px;
    line-height: 35px;
  }

  h2 {
    margin: 0;
  }

  @media screen and (max-width: 768px) {
    padding: 0 20px;
  }
`;

function Search({ isTyping, searchInput, onChange }) {
  const dispatch = useDispatch();
  const delayQuery = useCallback(
    debounce((q) => sendQuery(q), 400),
    []
  );

  function handleSearch(e) {
    onChange(e.target.value);

    if (!isTyping) {
      dispatch(changeIsTyping(true));
    }

    delayQuery(e.target.value);
  }

  const sendQuery = (query) => {
    dispatch(changeIsTyping(false));
    if (!query) {
      return dispatch(resetSearch());
    }
    return dispatch(getSearch(query));
  };

  return (
    <Container>
      <div className="bg-image" />
      <div className="panel">
        <h1>Your favourite moview. Explained</h1>
        <h2>Figure out what happened. Then find out why.</h2>
        <SearchInput searchInput={searchInput} handleSearch={handleSearch} />
        <Filters />
      </div>
    </Container>
  );
}

export default Search;
