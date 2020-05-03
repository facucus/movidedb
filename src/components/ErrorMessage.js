import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSadTear } from "@fortawesome/free-solid-svg-icons";

const Error = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;

  svg {
    font-size: 60px;
    margin-right: 20px;
    color: ${(props) => props.theme.green};
  }
  p {
    font-size: 18px;
    margin: 0;
    line-height: 24px;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 40px 20px;

    svg {
      margin-right: 0;
      margin-bottom: 20px;
    }
    p {
      font-size: 16px;
      text-align: center;
    }
  }
`;

function ErrorMessage({ error, showSecondLine = true }) {
  return (
    <Error>
      <FontAwesomeIcon icon={faSadTear} />
      <div>
        <p>{error}</p>
        {showSecondLine && <p>Please try again later.</p>}
      </div>
    </Error>
  );
}

export default ErrorMessage;
