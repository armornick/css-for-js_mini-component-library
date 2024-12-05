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
      <label>
        <VisuallyHidden>{label}</VisuallyHidden>
      </label>
      <IconWrapper>
        <Icon id={icon} size={iconSize} />
      </IconWrapper>
      <NativeInput placeholder={placeholder} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  width: var(--width);
`;

const NativeInput = styled.input`
  width: 100%;
  padding-left: calc(var(--icon-size) + 1em);
  color: ${COLORS.gray700};
  font-family: "Roboto", sans-serif;
  font-size: var(--font-size);
  height: var(--height);
  border: none;
  border-bottom: var(--border-size) solid ${COLORS.black};
  outline-offset: 2px;

  &:empty {
    color: ${COLORS.gray500};
  }

  &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: var(--icon-size);
  height: var(--icon-size);
  color: ${COLORS.gray700};

  ${Wrapper}:hover & {
    color: ${COLORS.black};
  }
`;

export default IconInput;
