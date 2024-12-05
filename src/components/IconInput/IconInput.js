import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const SIZE_VARS = {
  small: {
    "--font-size": `${18 / 16}rem`,
    "--border-size": "1px",
    "--height": "24px",
  },
  large: {
    "--font-size": `${18 / 16}rem`,
    "--border-size": "2px",
    "--height": "36px",
  },
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const iconSize = size === "small" ? 16 : 24;

  return (
    <Wrapper
      style={{
        "--width": width,
        "--icon-size": `${iconSize}px`,
        ...SIZE_VARS[size],
      }}
    >
      <IconWrapper htmlFor="icon-input">
        <VisuallyHidden>{label}</VisuallyHidden>
        <Icon id={icon} size={iconSize} />
      </IconWrapper>
      <NativeInput id="icon-input" placeholder={placeholder} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  max-width: var(--width);
  padding-left: calc(var(--icon-size) + 1em);
  color: ${COLORS.gray500};
  border-bottom: var(--border-size) solid ${COLORS.black};

  &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.label`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 24px;
  height: 24px;
`;

const NativeInput = styled.input`
  font-family: "Roboto", sans-serif;
  font-size: var(--font-size);
  height: var(--height);
  border: none;
  color: ${COLORS.gray700};

  &:empty {
    color: ${COLORS.gray500};
  }

  &:hover {
    color: ${COLORS.black};
  }
`;

export default IconInput;
