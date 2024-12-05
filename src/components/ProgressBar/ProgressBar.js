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
    <Progress max={100} value={value} style={SIZES[size]}>
      {value}
    </Progress>
  );
};

const Progress = styled.progress`
  color: ${COLORS.primary}
  background-color: ${COLORS.transparentGray15}
  border-radius: 4px;
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  height: var(--progress-height);
  padding: var(--progress-padding);
`;

export default ProgressBar;
