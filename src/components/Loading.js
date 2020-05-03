import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import styled, { keyframes } from "styled-components";

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  font-size: 60px;
  color: ${(props) => props.theme.offWhite};
  text-align: center;
  padding: 60px;
  svg {
    animation: ${rotate360} 1s linear infinite;
    transform: translateZ(0);
  }
`;

function Loading() {
  return (
    <Spinner>
      <FontAwesomeIcon icon={faSpinner} />
    </Spinner>
  );
}

export default Loading;
