import React from "react";
import styled from "styled-components";

const TagStyle = styled.div`
  background-color: ${(props) => props.theme.green};
  margin-right: 10px;
  padding: 2px 8px;
  color: white;
`;

function Tag({ tag }) {
  return <TagStyle>{tag}</TagStyle>;
}

export default Tag;
