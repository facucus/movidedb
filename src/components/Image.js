import React from "react";
import ProgressiveImage from "react-progressive-image";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";

const Img = styled.img`
  border: 0px solid rgba(255, 255, 255, 0);
  box-shadow: 10px 10px 21px -4px rgba(0, 0, 0, 0);
  transition: all 300ms ease-in-out;
  opacity: ${(props) => (props.isLoading ? 0.5 : 1)};
  width: 100%;
  &:hover {
    border: ${(props) =>
      props.animate
        ? "6px solid rgba(255, 255, 255, 1)"
        : "0px solid rgba(255, 255, 255, 0)"};
    box-shadow: 10px 10px 21px -4px rgba(0, 0, 0, ${(props) => (props.animate ? "0.6" : "0")});
  }
`;

const NoImage = styled.div`
  background: ${(props) => props.theme.lightGrey};
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  svg {
    font-size: 30px;
  }
`;

const Image = ({ src, alt, animate, title }) => {
  if (!src) {
    return (
      <NoImage>
        <FontAwesomeIcon icon={faImage} />
        <small>{title}</small>
      </NoImage>
    );
  }

  return (
    <ProgressiveImage
      src={src}
      placeholder="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
    >
      {(currentSrc, loading) => (
        <>
          <Img
            src={currentSrc}
            isLoading={loading}
            alt={alt}
            animate={animate}
          />
        </>
      )}
    </ProgressiveImage>
  );
};

export default Image;
