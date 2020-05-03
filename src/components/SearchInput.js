import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  position: relative;
  background-color: white;
  font-size: 16px;
  border-radius: 14px;
  max-width: 500px;
  margin: 10px auto;
  color: ${(props) => props.theme.black};

  svg {
    position: absolute;
    left: 8px;
    top: 7px;
  }

  input {
    font-size: 16px;
    background: none;
    border: none;
    position: relative;
    width: 100%;
    padding: 6px 33px;
  }
`;

function SearchInput({ searchInput, handleSearch }) {
  return (
    <Container>
      <FontAwesomeIcon icon={faSearch} />
      <input
        placeholder="Search for a movie"
        value={searchInput}
        onChange={handleSearch}
      />
    </Container>
  );
}

export default SearchInput;
