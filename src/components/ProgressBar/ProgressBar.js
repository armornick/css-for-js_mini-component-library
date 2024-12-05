/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    "--progress-height": "8px",
  },
  medium: {
    "--progress-height": "12px",
  },
  large: {
    "--progress-height": "24px",
    "--progress-padding": "4px",
  },
};

const ProgressBar = ({ value, size }) => {
  return (
    <Wrapper role="progressbar" aria-valuenow={value} style={SIZES[size]}>
      <ValueBar value={value}>
        <VisuallyHidden>Current Value: {value}</VisuallyHidden>
      </ValueBar>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15}
  border-radius: 4px;
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  height: var(--progress-height);
  padding: var(--progress-padding);
`;

const ValueBar = styled.div`
  width: ${(props) => props.value}%;
  height: 100%;
  background-color: ${COLORS.primary};
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  border-top-right-radius: ${(props) => (props.value > 99 ? "4px" : "0px")};
  border-bottom-right-radius: ${(props) => (props.value > 99 ? "4px" : "0px")};
`;

export default ProgressBar;
