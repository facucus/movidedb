import React from "react";
import styled from "styled-components";
import map from "lodash/map";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";

import { ratings } from "utils/ratings";

const Star = styled.button`
  color: ${(props) =>
    props.disabled ? props.theme.offWhite : props.theme.green};
  opacity: ${(props) => (props.disabled ? 0.2 : 1)};
  outline: none;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }
`;

const Container = styled.div`
  font-size: 20px;
`;

function Stars({ showAll, starSelected, onClickStar }) {
  return (
    <Container>
      {map(ratings, (_, i) => (
        <Star
          key={i}
          type="button"
          disabled={showAll}
          onClick={() => onClickStar(i)}
        >
          <FontAwesomeIcon icon={starSelected >= i ? faStar : emptyStar} />
        </Star>
      ))}
    </Container>
  );
}

export default Stars;
