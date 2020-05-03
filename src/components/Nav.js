import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Logo from "components/Logo";

const NavStyles = styled.nav`
  background-color: ${(props) => props.theme.green};
  padding: 10px 20px;
  border-bottom: 1px solid ${(props) => props.theme.offWhite};
`;

function Nav() {
  return (
    <NavStyles>
      <Link to="/">
        <Logo />
      </Link>
    </NavStyles>
  );
}

export default Nav;
