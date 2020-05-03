import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAirFreshener } from "@fortawesome/free-solid-svg-icons";

const LogoStyle = styled.div`
  display: flex;
  justify-content: flex-start;

  h1 {
    margin: 0;
    font-size: 30px;
  }

  .mobile {
    display: none;
  }

  @media screen and (max-width: 768px) {
    justify-content: center;

    h1 {
      display: none;
    }

    .mobile {
      display: block;
      font-size: 30px;
      border: 4px solid black;
      border-radius: 36px;
      padding: 3px 6px;
    }
  }
`;

function Logo() {
  return (
    <LogoStyle>
      <h1>
        Two Pines Theater <FontAwesomeIcon icon={faAirFreshener} />{" "}
        <FontAwesomeIcon icon={faAirFreshener} />
      </h1>

      <div className="mobile">
        <FontAwesomeIcon icon={faAirFreshener} />{" "}
        <FontAwesomeIcon icon={faAirFreshener} />
      </div>
    </LogoStyle>
  );
}

export default Logo;
