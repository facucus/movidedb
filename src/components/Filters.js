import React, { useState } from "react";
import styled from "styled-components";
import { useSelector, shallowEqual, useDispatch } from "react-redux";

import Stars from "components/Stars";
import { showAllRankings, changeFilter } from "store/actions/filter";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Filters() {
  const { filter } = useSelector(
    (state) => ({
      filter: state.filter,
    }),
    shallowEqual
  );
  const dispatch = useDispatch();

  function handleClickStar(newRating) {
    dispatch(changeFilter(newRating));
  }
  return (
    <Container>
      <label>
        All ratings
        <input
          type="checkbox"
          checked={filter.showAll}
          onChange={() => dispatch(showAllRankings())}
        />
      </label>
      <Stars
        showAll={filter.showAll}
        starSelected={filter.rating}
        onClickStar={handleClickStar}
      />
    </Container>
  );
}

export default Filters;
